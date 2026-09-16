'use client';
import { useMemo, useState } from 'react';
import type { Entry, PageData } from '@/lib/content';
import Website from './Website';
const escape = (s: string) => s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
export default function SearchPage({shell, entries, keyword}: {shell: PageData; entries: Entry[]; keyword: string}) {
  const [kind,setKind] = useState('product');
  const [view,setView] = useState('grid');
  const matches = useMemo(() => entries.filter(e => e.kind === kind && (e.title+' '+e.description).toLowerCase().includes(keyword.toLowerCase())),[entries,keyword,kind]);
  const top = {...shell,carousels:[],html:`<div id="app" page-type="search">${shell.headerHtml}</div>`};
  const bottom = {...shell,carousels:[],html:shell.footerHtml};
  return <><Website page={top}/><main className="search-page"><nav className="search-breadcrumb"><a href="/">Home</a> / Search</nav><div className="search-tabs">{['product','article','video','document'].map(k => <button key={k} className={kind===k?'active':''} onClick={()=>setKind(k)}>{k}</button>)}</div><div className="search-layout"><aside><h2>Category</h2>{entries.filter(e=>e.kind==='page' && /container|prefab|modular/i.test(e.title)&&!/_list\d/.test(e.path)).slice(0,18).map(e=><a href={e.path} key={e.path}>{e.title}</a>)}</aside><section><div className="search-sort"><span>Search: {keyword} · {matches.length} results</span><div><button onClick={()=>setView('grid')} aria-label="Grid view">▦</button><button onClick={()=>setView('list')} aria-label="List view">☰</button></div></div><div className={'search-results '+view}>{matches.slice(0,120).map(e=><a className="search-card" href={e.path} key={e.path}>{e.thumbnail&&<img src={e.thumbnail} alt={e.title}/>}<div><h2>{e.title}</h2>{view==='list'&&<p>{e.description}</p>}</div></a>)}</div>{!matches.length&&<p className="search-empty">No matching {kind}s in this local preview.</p>}</section></div></main><Website page={bottom}/></>;
}
