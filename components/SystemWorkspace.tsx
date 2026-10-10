'use client';

import { FormEvent, useEffect, useState } from 'react';
import AdminDateRange, { rangeQuery, type RangeValue } from './AdminDateRange';

type Setting={key:string;value:unknown;updated_at:string};
type User={id:string;email:string;name:string;active:boolean;roles:string[]};
type Log={id:string;action:string;module:string;record_id:string;created_at:string;user_email?:string};
type LogList={rows:Log[];total:number;page:number;limit:number};
type Dialog={kind:'setting'|'user'|'password';id?:string}|null;
const roles=['Super Admin','Admin','Sales Manager','Sales','Content Manager','SEO Manager','Analyst'];
const today=()=>new Date().toLocaleDateString('en-CA',{timeZone:'Asia/Shanghai'});
const initialRange=():RangeValue=>({key:'month',from:today(),to:today(),label:'本月'});

export default function SystemWorkspace(){
  const [settings,setSettings]=useState<Setting[]>([]);
  const [users,setUsers]=useState<User[]>([]);
  const [logs,setLogs]=useState<LogList|null>(null);
  const [range,setRange]=useState<RangeValue>(initialRange);
  const [logPage,setLogPage]=useState(1);
  const [logSearch,setLogSearch]=useState('');
  const [dialog,setDialog]=useState<Dialog>(null);
  const [error,setError]=useState('');
  const [saving,setSaving]=useState(false);
  const [loading,setLoading]=useState(true);
  const loadConfig=async()=>{
    const [settingsResponse,usersResponse]=await Promise.all([
      fetch('/api/settings',{cache:'no-store'}),fetch('/api/users',{cache:'no-store'})
    ]);
    if(!settingsResponse.ok||!usersResponse.ok)throw Error();
    setSettings(await settingsResponse.json() as Setting[]);
    setUsers(await usersResponse.json() as User[]);
  };
  const loadLogs=async(signal?:AbortSignal)=>{
    const params=new URLSearchParams(rangeQuery(range));
    params.set('page',String(logPage));
    if(logSearch)params.set('q',logSearch);
    const response=await fetch('/api/logs?'+params,{cache:'no-store',signal});
    if(!response.ok)throw Error();
    setLogs(await response.json() as LogList);
  };
  useEffect(()=>{loadConfig().catch(()=>setError('无法读取系统数据'))},[]);
  useEffect(()=>{
    const controller=new AbortController();
    const timer=setTimeout(()=>{
      setLoading(true);setError('');
      loadLogs(controller.signal)
        .catch(e=>{if(e instanceof Error&&e.name!=='AbortError')setError('无法读取操作日志')})
        .finally(()=>{if(!controller.signal.aborted)setLoading(false)});
    },logSearch?250:0);
    return()=>{clearTimeout(timer);controller.abort()};
  },[range,logPage,logSearch]);
  const reload=async()=>{try{await Promise.all([loadConfig(),loadLogs()])}catch{setError('数据刷新失败')}};
  const submit=async(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    if(!dialog)return;
    setSaving(true);setError('');
    const data=Object.fromEntries(new FormData(event.currentTarget));
    try{
      let response:Response;
      if(dialog.kind==='setting'){
        response=await fetch('/api/settings',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({key:data.key,value:JSON.parse(String(data.value))})});
      }else if(dialog.kind==='user'){
        response=await fetch('/api/users',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
      }else{
        response=await fetch('/api/users/'+dialog.id,{method:'PATCH',headers:{'Content-Type':'application/json'},body:JSON.stringify({password:data.password})});
      }
      if(!response.ok)throw Error();
      setDialog(null);
      await reload();
    }catch{setError(dialog.kind==='setting'?'设置值需要使用合法 JSON':'保存失败，请检查账号信息')}
    finally{setSaving(false)}
  };
  const toggle=async(user:User)=>{
    setError('');
    try{
      const response=await fetch('/api/users/'+user.id,{method:'PATCH',headers:{'Content-Type':'application/json'},body:JSON.stringify({active:!user.active})});
      if(!response.ok)throw Error();
      await loadConfig();
    }catch{setError('账号状态更新失败')}
  };
  const last=Math.max(1,Math.ceil((logs?.total||0)/(logs?.limit||20)));
  return <main className="admin-content crm-workspace">
    <header className="crm-header"><div><p>系统管理</p><h1>设置与审计</h1><span>管理后台账号、网站设置与操作记录。</span></div><div><button className="admin-secondary" onClick={()=>setDialog({kind:'setting'})}>+ 添加设置</button> <button className="admin-primary" onClick={()=>setDialog({kind:'user'})}>+ 新增账号</button></div></header>
    {error?<p className="admin-error" role="alert">{error}</p>:null}
    <section className="admin-panel admin-table"><div className="admin-panel-heading"><h2>后台账号</h2><span>{users.length} 个账号</span></div><div className="admin-table"><table><thead><tr><th>姓名</th><th>邮箱</th><th>角色</th><th>状态</th><th>操作</th></tr></thead><tbody>{users.map(user=><tr key={user.id}><td>{user.name}</td><td>{user.email}</td><td>{Array.isArray(user.roles)?user.roles.join('、'):'—'}</td><td><span className={'admin-badge '+(user.active?'good':'')}>{user.active?'启用':'停用'}</span></td><td><button className="admin-text-button" onClick={()=>toggle(user)}>{user.active?'停用':'启用'}</button> <button className="admin-text-button" onClick={()=>setDialog({kind:'password',id:user.id})}>重设密码</button></td></tr>)}</tbody></table></div>{!users.length?<p className="admin-empty">暂无已创建的后台账号</p>:null}</section>
    <section className="admin-panel admin-table"><div className="admin-panel-heading"><h2>网站设置</h2><span>{settings.length} 项</span></div><div className="admin-table"><table><thead><tr><th>配置项</th><th>当前值</th><th>更新时间</th></tr></thead><tbody>{settings.map(item=><tr key={item.key}><td>{item.key}</td><td><code>{JSON.stringify(item.value)}</code></td><td>{new Date(item.updated_at).toLocaleString('zh-CN')}</td></tr>)}</tbody></table></div>{!settings.length?<p className="admin-empty">暂无自定义设置</p>:null}</section>
    <section className="admin-panel admin-table"><div className="admin-panel-heading"><div><h2>操作日志</h2><span>共 {logs?.total??'—'} 条 · {range.label}</span></div></div><AdminDateRange value={range} onChange={next=>{setRange(next);setLogPage(1)}} busy={loading}/><div className="crm-tools"><input aria-label="搜索操作日志" placeholder="搜索操作或模块" value={logSearch} onChange={event=>{setLogSearch(event.target.value);setLogPage(1)}}/></div><div className="admin-table"><table><thead><tr><th>操作</th><th>模块</th><th>记录</th><th>操作者</th><th>时间</th></tr></thead><tbody>{logs?.rows.map(item=><tr key={item.id}><td>{item.action}</td><td>{item.module}</td><td>{item.record_id||'—'}</td><td>{item.user_email||'—'}</td><td>{new Date(item.created_at).toLocaleString('zh-CN')}</td></tr>)}</tbody></table></div>{loading?<p className="admin-empty" role="status">正在读取日志…</p>:!logs?.rows.length?<p className="admin-empty">当前范围暂无操作记录</p>:null}{logs&&logs.total>0?<div className="admin-pagination"><span>第 {logs.page} / {last} 页 · 共 {logs.total.toLocaleString('zh-CN')} 条</span><div><button className="admin-secondary" disabled={logPage<=1} onClick={()=>setLogPage(logPage-1)}>上一页</button><button className="admin-secondary" disabled={logPage>=last} onClick={()=>setLogPage(logPage+1)}>下一页</button></div></div>:null}</section>
    {dialog?<div className="admin-modal-backdrop"><form className="admin-modal" onSubmit={submit}><button type="button" className="admin-modal-close" onClick={()=>setDialog(null)} aria-label="关闭">×</button><p>系统管理</p><h2>{dialog.kind==='setting'?'添加网站设置':dialog.kind==='user'?'新增后台账号':'重设账号密码'}</h2>{dialog.kind==='setting'?<><label>设置键名<input required name="key" pattern="[a-z0-9_.-]+"/></label><label>设置值（JSON）<textarea required rows={5} name="value"/></label></>:dialog.kind==='user'?<><label>姓名<input required name="name"/></label><label>邮箱<input required type="email" name="email"/></label><label>初始密码<input required type="password" minLength={8} name="password"/></label><label>角色<select name="role">{roles.map(role=><option value={role} key={role}>{role}</option>)}</select></label></>:<label>新密码<input required type="password" minLength={8} name="password"/></label>}<footer><button type="button" className="admin-secondary" onClick={()=>setDialog(null)}>取消</button><button className="admin-primary" disabled={saving}>{saving?'保存中…':'保存'}</button></footer></form></div>:null}
  </main>;
}
