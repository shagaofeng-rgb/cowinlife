'use client';
import { FormEvent, useCallback, useEffect, useState } from 'react';

type Kind = 'products' | 'content' | 'forms';
type Item = { id:string; name?:string; title?:string; slug?:string; sku?:string; type?:string; status?:string; active?:boolean };
type ListData = { rows:Item[]; total:number; page:number; limit:number };
const details = { products:['产品管理','维护产品目录和记录状态。','新建产品'], content:['内容管理','管理文章、案例、应用内容与下载资料。','新建内容'], forms:['网站表单','管理各业务场景的表单记录。','新建表单'] } as const;
const slugify = (value:string) => value.toLowerCase().trim().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');

function DataRows({kind,items}:{kind:Kind;items:Item[]}){
  return <>{items.map(item=><tr key={item.id}>
    {kind==='products'?<>
      <td><b>{item.name}</b></td><td>{item.sku||'—'}</td><td>{item.slug}</td>
      <td><span className="admin-badge">{item.status==='published'?'标记发布':item.status==='archived'?'已归档':'草稿'}</span></td>
    </>:kind==='content'?<>
      <td>{item.type}</td><td><b>{item.title}</b></td><td>{item.slug}</td>
      <td><span className="admin-badge">{item.status==='published'?'标记发布':item.status==='archived'?'已归档':'草稿'}</span></td>
    </>:<>
      <td><b>{item.name}</b></td><td>{item.type}</td>
      <td><span className={`admin-badge ${item.active?'good':''}`}>{item.active?'启用':'停用'}</span></td>
    </>}
  </tr>)}</>;
}

export default function OperationsWorkspace({kind}:{kind:Kind}){
  const [data,setData]=useState<ListData|null>(null),[open,setOpen]=useState(false),[saving,setSaving]=useState(false),[loading,setLoading]=useState(true),[error,setError]=useState('');
  const [search,setSearch]=useState(''),[status,setStatus]=useState(''),[page,setPage]=useState(1);
  const [title,intro,create]=details[kind];
  const load=useCallback(async(signal?:AbortSignal)=>{setLoading(true);setError('');try{const params=new URLSearchParams({page:String(page)});if(search)params.set('q',search);if(status)params.set(kind==='forms'?'active':'status',status);const response=await fetch(`/api/${kind}?${params}`,{cache:'no-store',signal});if(!response.ok)throw Error();setData(await response.json() as ListData)}catch(e){if(e instanceof Error&&e.name==='AbortError')return;setError('无法读取数据')}finally{if(!signal?.aborted)setLoading(false)}},[kind,page,search,status]);
  useEffect(()=>{const controller=new AbortController();const timer=setTimeout(()=>load(controller.signal),search?260:0);return()=>{clearTimeout(timer);controller.abort()}},[load,search]);
  const submit=async(event:FormEvent<HTMLFormElement>)=>{event.preventDefault();setSaving(true);setError('');const body:Record<string,unknown>=Object.fromEntries(new FormData(event.currentTarget));if(kind!=='forms'&&!body.slug)body.slug=slugify(String(body.name||body.title||''));if(kind==='forms')body.active=true;try{const response=await fetch(`/api/${kind}`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});if(!response.ok)throw Error();setOpen(false);setPage(1);await load()}catch{setError('保存失败，请检查名称和 URL 标识')}finally{setSaving(false)}};
  const totalPages=Math.max(1,Math.ceil((data?.total||0)/(data?.limit||20)));
  return <main className="admin-content crm-workspace"><header className="crm-header"><div><p>网站运营</p><h1>{title}</h1><span>{intro}</span></div><button className="admin-primary" onClick={()=>setOpen(true)}>+ {create}</button></header>
    <section className="admin-panel crm-list"><div className="crm-tools"><input aria-label={`搜索${title}`} placeholder={kind==='products'?'搜索产品名称、SKU 或标识':kind==='content'?'搜索标题或标识':'搜索表单名称或场景'} value={search} onChange={event=>{setSearch(event.target.value);setPage(1)}}/><select aria-label="筛选状态" value={status} onChange={event=>{setStatus(event.target.value);setPage(1)}}>{kind==='forms'?<><option value="">全部状态</option><option value="true">启用</option><option value="false">停用</option></>:<><option value="">全部状态</option><option value="draft">草稿</option><option value="published">标记发布</option><option value="archived">已归档</option></>}</select><span>共 {data?.total===undefined?'—':data.total.toLocaleString('zh-CN')} 条</span><button className="admin-secondary" disabled={loading} onClick={()=>load()}>刷新</button></div>
    {error?<p className="admin-error" role="alert">{error}</p>:null}<div className="admin-table"><table><thead><tr>{kind==='products'?<><th>产品名称</th><th>SKU</th><th>URL 标识</th><th>状态</th></>:kind==='content'?<><th>类型</th><th>标题</th><th>URL 标识</th><th>状态</th></>:<><th>表单名称</th><th>业务场景</th><th>状态</th></>}</tr></thead><tbody><DataRows kind={kind} items={data?.rows||[]}/></tbody></table></div>{loading?<p className="admin-empty" role="status">正在读取数据…</p>:!data?.rows.length?<p className="admin-empty">暂无记录</p>:null}
    {data&&data.total>0?<div className="admin-pagination"><span>第 {data.page} / {totalPages} 页 · 共 {data.total.toLocaleString('zh-CN')} 条</span><div><button className="admin-secondary" disabled={loading||page<=1} onClick={()=>setPage(page-1)}>上一页</button><button className="admin-secondary" disabled={loading||page>=totalPages} onClick={()=>setPage(page+1)}>下一页</button></div></div>:null}</section>
    {open?<div className="admin-modal-backdrop"><form className="admin-modal" onSubmit={submit}><button type="button" className="admin-modal-close" onClick={()=>setOpen(false)} aria-label="关闭">×</button><p>网站运营</p><h2>{create}</h2>{kind==='products'?<><label>产品名称<input required name="name"/></label><label>URL 标识<input name="slug" placeholder="portable-office"/></label><label>SKU<input name="sku"/></label><label>记录状态<select name="status"><option value="draft">草稿</option><option value="published">标记发布</option><option value="archived">归档</option></select></label></>:kind==='content'?<><label>内容类型<select name="type"><option value="blog">文章</option><option value="case-study">案例</option><option value="application">应用</option><option value="faq">常见问题</option><option value="download">下载资料</option></select></label><label>标题<input required name="title"/></label><label>URL 标识<input name="slug"/></label><label>正文<textarea name="content" rows={6}/></label><label>记录状态<select name="status"><option value="draft">草稿</option><option value="published">标记发布</option><option value="archived">归档</option></select></label></>:<><label>表单名称<input required name="name"/></label><label>业务场景<select name="type"><option value="general">通用咨询</option><option value="product">产品咨询</option><option value="oem-odm">OEM/ODM</option><option value="quote">询价</option><option value="sample">样品</option><option value="contact">联系我们</option></select></label></>}<footer><button className="admin-secondary" type="button" onClick={()=>setOpen(false)}>取消</button><button className="admin-primary" disabled={saving}>{saving?'保存中…':'保存'}</button></footer></form></div>:null}
  </main>;
}
