"""Apply reviewed media replacements everywhere, then remove obsolete public files.

The audit directory supplies source-family, identical-file and visual-duplicate groups.
Only explicitly reviewed removal/replacement decisions are applied.
"""
import hashlib,json,re,sys
from pathlib import Path
from bs4 import BeautifulSoup

ROOT=Path(__file__).resolve().parents[2]
AUDIT=Path(sys.argv[1])
media_path=ROOT/'content/cleaned-media.json'
mapping=json.loads(media_path.read_text())
dimensions=json.loads((ROOT/'content/image-dimensions.json').read_text())
parents={}
def find(x):
    parents.setdefault(x,x)
    if parents[x]!=x:parents[x]=find(parents[x])
    return parents[x]
def join(group):
    if not group:return
    first=find(group[0])
    for x in group[1:]:parents[find(x)]=first
families=json.loads((AUDIT/'families.json').read_text())
for group in families.values():join(group)
for filename in ('groups.json',):
    for group in json.loads((AUDIT/filename).read_text()):join(group)
groups={}
for asset in list(parents):groups.setdefault(find(asset),[]).append(asset)
for group in groups.values():
    candidates=[x for x in group if x in mapping]
    if candidates:
        best=max(candidates,key=lambda x:dimensions.get(mapping[x],[0,0])[0])
        target=mapping[best]
        for asset in group:mapping[asset]=target
removed=set(json.loads((AUDIT/'remove-assets.json').read_text()))
for group in groups.values():
    if removed.intersection(group):removed.update(group)
mapping={k:v for k,v in mapping.items() if k not in removed and k!=v}
asset_pattern=re.compile(r'/(?:assets|cleaned)/[a-zA-Z0-9._-]+')
def replace(value):return asset_pattern.sub(lambda m:mapping.get(m[0],m[0]),value)
css_mapping={}
for p in (ROOT/'public/styles').glob('*.css'):
    original=p.read_text();value=replace(original)
    for src in removed:
        if src in value:value=re.sub(r'url\([\"\']?'+re.escape(src)+r'[\"\']?\)','none',value)
    if value!=original:
        new=hashlib.sha256(value.encode()).hexdigest()[:20]+'.css'
        (p.parent/new).write_text(value)
        css_mapping['/styles/'+p.name]='/styles/'+new
rows=json.loads((ROOT/'content/index.json').read_text())
for row in rows:
    p=ROOT/'content/pages'/row['file'];raw=p.read_text();raw=replace(raw)
    for old,new in css_mapping.items():raw=raw.replace(old,new)
    data=json.loads(raw)
    for key in ('html','headerHtml','footerHtml','inquiryHtml'):
        value=data.get(key,'')
        if not any(src in value for src in removed):continue
        soup=BeautifulSoup(value,'html.parser')
        for el in list(soup.find_all(['img','source','a'])):
            if not getattr(el,'attrs',None):continue
            if any(src in str(el.attrs) for src in removed):
                (el.find_parent('picture') or el).decompose()
        data[key]=str(soup)
    if data.get('thumbnail') in removed:
        match=re.search(r'<img[^>]+src="([^"]+)"',data['html'])
        data['thumbnail']=match[1] if match else ''
    row['thumbnail']=data.get('thumbnail','')
    p.write_text(json.dumps(data,ensure_ascii=False))
(ROOT/'content/index.json').write_text(json.dumps(rows,ensure_ascii=False))
media_path.write_text(json.dumps(mapping,indent=2))
for src in removed|set(mapping):
    if src not in mapping.values():(ROOT/'public'/src.lstrip('/')).unlink(missing_ok=True)
# Public files that no remaining page, stylesheet or application file references
# should not keep the old company's media reachable after a cleanup.
content='\n'.join((ROOT/'content/pages'/r['file']).read_text() for r in rows)
style_refs=set(re.findall(r'/styles/[a-zA-Z0-9._-]+',content))
for src in style_refs:
    p=ROOT/'public'/src.lstrip('/')
    if p.exists():content+='\n'+p.read_text()
for folder in ('app','components','lib','config'):
    for p in (ROOT/folder).rglob('*'):
        if p.is_file() and p.suffix in ('.ts','.tsx','.css','.json'):content+='\n'+p.read_text()
refs=set(asset_pattern.findall(content))|set(mapping.values());pruned=[]
for folder in ('assets','cleaned'):
    for p in (ROOT/'public'/folder).glob('*'):
        src='/'+folder+'/'+p.name
        if p.is_file() and src not in refs:p.unlink();pruned.append(src)
for p in (ROOT/'public/styles').glob('*.css'):
    if '/styles/'+p.name not in style_refs:p.unlink()
dimensions={src:size for src,size in dimensions.items() if (ROOT/'public'/src.lstrip('/')).exists()}
(ROOT/'content/image-dimensions.json').write_text(json.dumps(dimensions))
summary={'mapped_assets':len(mapping),'removed_corporate_assets':len(removed),'pruned_unreferenced_assets':len(pruned),'remaining_pages':len(rows)}
(ROOT/'reports/brand-cleanup/asset-cleanup.json').write_text(json.dumps(summary,indent=2))
print(json.dumps(summary))
