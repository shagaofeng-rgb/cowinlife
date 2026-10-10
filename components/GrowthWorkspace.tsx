'use client';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { ArrowDownToLine, Eye, FileText, Inbox, MessageSquare, Users } from 'lucide-react';
import AdminDateRange, { rangeQuery, type RangeValue } from './AdminDateRange';
import { AdminBars } from './AdminDashboard';
import type { dashboardData } from '@/lib/analytics';
type Analytics=Awaited<ReturnType<typeof dashboardData>>;
const n=(v:string)=>Number(v||0).toLocaleString('zh-CN');

export function AnalyticsWorkspace({data:initial,canExport}:{data:Analytics;canExport:boolean}){
  const [data,setData]=useState(initial),[loading,setLoading]=useState(false),[error,setError]=useState('');
  const request=useRef(0);
  const change=async(range:RangeValue)=>{
    const current=++request.current;setLoading(true);setError('');
    try{const response=await fetch(`/api/admin/overview?${rangeQuery(range)}`,{cache:'no-store'});if(!response.ok)throw Error();const next=await response.json() as Analytics;if(current===request.current)setData(next)}
    catch{if(current===request.current)setError('读取失败，请重试')}
    finally{if(current===request.current)setLoading(false)}
  };
  const metrics=[
    {label:'页面浏览',value:data.summary.pv,icon:Eye},
    {label:'独立访客',value:data.summary.visitors,icon:Users},
    {label:'访问会话',value:data.summary.sessions,icon:MessageSquare},
    {label:'客户询盘',value:data.summary.inquiries,icon:FileText},
  ];
  return <main className="admin-content analytics-workspace">
    <header className="admin-head"><div><p>运营分析</p><h1>流量分析</h1><span>网站访问记录与表单转化</span></div><AdminDateRange value={data.range} onChange={change} busy={loading}/></header>
    <div className="admin-analytics-actions"><span>统计范围：{data.range.from} 至 {data.range.to}</span>{canExport?<a className="admin-secondary" href={`/api/analytics/export?${rangeQuery(data.range)}`}><ArrowDownToLine size={17} aria-hidden="true"/>导出所选范围（最多 1 万条）</a>:null}</div>
    {error?<p className="admin-error" role="alert">{error}</p>:null}
    <section className="admin-metrics" aria-label={`${data.range.label}核心指标`}>{metrics.map(({label,value,icon:Icon})=><article className="admin-metric" key={label}><span><Icon size={20} aria-hidden="true"/>{label}</span><small>{data.range.label}</small><strong>{n(value)}</strong></article>)}</section>
    <section className="admin-panel admin-trend-panel"><div className="admin-panel-heading"><div><h2>访问趋势</h2><span>页面浏览量 · {data.range.label}</span></div></div>{data.trend.length?<div className="admin-chart" role="img" aria-label={data.trend.map(row=>`${row.date} ${row.pv}次`).join('，')}>{data.trend.map(row=><div key={row.date} title={`${row.date} · ${row.pv} 次`}><i style={{height:`${Number(row.pv)/Math.max(...data.trend.map(item=>Number(item.pv)),1)*100}%`}}/><span>{row.date.slice(5)}</span></div>)}</div>:<div className="admin-visual-empty"><Inbox size={28} aria-hidden="true"/><p>暂无可用访问数据</p></div>}</section>
    <div className="admin-grid"><AdminBars title="来源渠道" rows={data.sources} rangeLabel={data.range.label}/><AdminBars title="页面表现" rows={data.pages} rangeLabel={data.range.label}/></div>
    <div className="admin-grid"><AdminBars title="国家 / 地区" rows={data.geography} rangeLabel={data.range.label}/><AdminBars title="访问设备" rows={data.devices} rangeLabel={data.range.label}/></div>
    <AdminBars title="访问路径" rows={data.journeys} rangeLabel={data.range.label}/>
    {loading?<p className="admin-status" role="status">正在更新所选时间范围…</p>:null}
  </main>
}
type Seo = {id:string;path:string;title:string;canonical:string;updated_at:string};
type Geo = {id:string;query:string;active:boolean};
type List<T> = {rows:T[];total:number;page:number;limit:number};

function Pagination({data,page,setPage}:{data:List<unknown>|null;page:number;setPage:(value:number)=>void}){
  if(!data||data.total===0)return null;
  const last=Math.max(1,Math.ceil(data.total/data.limit));
  return <div className="admin-pagination"><span>第 {data.page} / {last} 页 · 共 {data.total.toLocaleString('zh-CN')} 条</span><div><button type="button" className="admin-secondary" disabled={page<=1} onClick={()=>setPage(page-1)}>上一页</button><button type="button" className="admin-secondary" disabled={page>=last} onClick={()=>setPage(page+1)}>下一页</button></div></div>;
}

export function SeoWorkspace(){
  const [seo,setSeo]=useState<List<Seo>|null>(null),[geo,setGeo]=useState<List<Geo>|null>(null);
  const [seoPage,setSeoPage]=useState(1),[geoPage,setGeoPage]=useState(1);
  const [seoSearch,setSeoSearch]=useState(''),[geoSearch,setGeoSearch]=useState('');
  const [mode,setMode]=useState<'seo'|'geo'|null>(null),[error,setError]=useState(''),[loading,setLoading]=useState(true);
  const loadSeo=async(signal?:AbortSignal)=>{
    const params=new URLSearchParams({page:String(seoPage),q:seoSearch});
    const response=await fetch('/api/seo?'+params,{cache:'no-store',signal});
    if(!response.ok)throw Error();
    setSeo(await response.json() as List<Seo>);
  };
  const loadGeo=async(signal?:AbortSignal)=>{
    const params=new URLSearchParams({page:String(geoPage),q:geoSearch});
    const response=await fetch('/api/geo?'+params,{cache:'no-store',signal});
    if(!response.ok)throw Error();
    setGeo(await response.json() as List<Geo>);
  };
  useEffect(()=>{
    const controller=new AbortController();
    const timer=setTimeout(()=>{
      setLoading(true);setError('');
      Promise.all([loadSeo(controller.signal),loadGeo(controller.signal)])
        .catch(e=>{if(e instanceof Error&&e.name!=='AbortError')setError('无法读取搜索数据')})
        .finally(()=>{if(!controller.signal.aborted)setLoading(false)});
    },seoSearch||geoSearch?250:0);
    return()=>{clearTimeout(timer);controller.abort()};
  },[seoPage,geoPage,seoSearch,geoSearch]);
  const check=async(id:string)=>{setError('');const r=await fetch('/api/geo/'+id+'/check',{method:'POST'});if(!r.ok){setError(r.status===503?'GEO 检测服务暂不可用':'检测请求失败');return}try{await loadGeo()}catch{setError('检测完成，列表刷新失败')}};
  const submit=async(e:FormEvent<HTMLFormElement>)=>{e.preventDefault();if(!mode)return;const data=Object.fromEntries(new FormData(e.currentTarget));setError('');try{const r=await fetch('/api/'+mode,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(mode==='geo'?{query:data.query,active:true}:data)});if(!r.ok)throw Error();setMode(null);await Promise.all([loadSeo(),loadGeo()])}catch{setError('保存失败，请检查内容')}};
  return <main className="admin-content crm-workspace">
    <header className="crm-header"><div><p>增长运营</p><h1>SEO / GEO</h1><span>管理页面搜索摘要及重点查询。</span></div><div><button className="admin-secondary" onClick={()=>setMode('geo')}>+ GEO 查询</button> <button className="admin-primary" onClick={()=>setMode('seo')}>+ 页面 SEO</button></div></header>
    {error?<p className="admin-error" role="alert">{error}</p>:null}
    <section className="admin-panel admin-table"><div className="admin-panel-heading"><h2>页面 SEO</h2><span>共 {seo?.total??'—'} 条</span></div>
      <div className="crm-tools"><input aria-label="搜索页面 SEO" placeholder="搜索页面路径或标题" value={seoSearch} onChange={e=>{setSeoSearch(e.target.value);setSeoPage(1)}}/></div>
      <div className="admin-table"><table><thead><tr><th>页面路径</th><th>标题</th><th>Canonical</th><th>更新时间</th></tr></thead><tbody>{seo?.rows.map(x=><tr key={x.id}><td>{x.path}</td><td>{x.title||'—'}</td><td>{x.canonical||'—'}</td><td>{new Date(x.updated_at).toLocaleString('zh-CN')}</td></tr>)}</tbody></table></div>
      {loading?<p className="admin-empty" role="status">正在读取数据…</p>:!seo?.rows.length?<p className="admin-empty">暂无页面配置</p>:null}<Pagination data={seo} page={seoPage} setPage={setSeoPage}/>
    </section>
    <section className="admin-panel admin-table"><div className="admin-panel-heading"><h2>GEO 查询</h2><span>共 {geo?.total??'—'} 条</span></div>
      <div className="crm-tools"><input aria-label="搜索 GEO 查询" placeholder="搜索关注问题" value={geoSearch} onChange={e=>{setGeoSearch(e.target.value);setGeoPage(1)}}/></div>
      <div className="admin-table"><table><thead><tr><th>关注问题</th><th>状态</th><th>操作</th></tr></thead><tbody>{geo?.rows.map(x=><tr key={x.id}><td>{x.query}</td><td><span className={'admin-badge '+(x.active?'good':'')}>{x.active?'启用':'停用'}</span></td><td><button className="admin-text-button" onClick={()=>check(x.id)}>立即检测</button></td></tr>)}</tbody></table></div>
      {loading?<p className="admin-empty" role="status">正在读取数据…</p>:!geo?.rows.length?<p className="admin-empty">暂无查询</p>:null}<Pagination data={geo} page={geoPage} setPage={setGeoPage}/>
    </section>
    {mode?<div className="admin-modal-backdrop"><form className="admin-modal" onSubmit={submit}><button type="button" className="admin-modal-close" onClick={()=>setMode(null)} aria-label="关闭">×</button><p>增长运营</p><h2>{mode==='seo'?'页面 SEO 配置':'新增 GEO 查询'}</h2>{mode==='seo'?<><label>页面路径<input required name="path" placeholder="/products/example"/></label><label>页面标题<input name="title"/></label><label>描述<textarea name="description" rows={4}/></label><label>Canonical<input name="canonical" placeholder="https://cowinlife.com/..."/></label></>:<label>关注问题<input required name="query"/></label>}<footer><button className="admin-secondary" type="button" onClick={()=>setMode(null)}>取消</button><button className="admin-primary">保存</button></footer></form></div>:null}
  </main>;
}
