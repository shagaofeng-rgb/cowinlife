"""Remove legacy identity from imported content. Run with beautifulsoup4 + lxml."""
import json,re,os
from pathlib import Path
from bs4 import BeautifulSoup
ROOT=Path(__file__).resolve().parents[2]
INDEX=ROOT/'content/index.json'
legacy=re.compile(r'(?:Suzhou\s+)?Da\s*xiang(?:\s+Container(?:\s+Hous(?:e|ing))?)?(?:\s+Co\.?[,]?\s*Ltd\.?)?|DXH(?:container)?',re.I)
placeholder=re.compile(r'\[(?:New company[^\]]*|New client[^\]]*|Contact person|Contact details[^\]]*|Company history[^\]]*|Capacity[^\]]*|Team size[^\]]*|Production capacity[^\]]*|Experience[^\]]*|Project background[^\]]*|Year|Location)\]',re.I)
old_social=re.compile(r'(?:youtube\.com/@dxhcontainerhouse|instagram\.com/dxhcontainerhouse|facebook\.com/profile\.php\?id=100095546591719|tiktok\.com/@NEW BRAND)',re.I)
SOURCE=Path(os.environ.get('BRAND_CLEANUP_SOURCE',str(ROOT)))
rows=json.loads((SOURCE/'content/index.json').read_text()); redirects={r['path']:re.sub(r'dxh(?:-s)?-','',r['path'],flags=re.I) for r in rows if re.search(r'dxh',r['path'],re.I)}
assert len({redirects.get(r['path'],r['path']) for r in rows})==len(rows),'Route collision'
# Keep previously recorded redirects on repeat runs.
redirect_file=ROOT/'content/legacy-brand-redirects.json'
if redirect_file.exists():redirects={**json.loads(redirect_file.read_text()),**redirects}
def text(value):
 # Drop historical factual sentences rather than leaving empty numbers or implied new-company claims.
 value=re.sub(r'[^.!?\n]*\[(?:Company history|Capacity|Team size|Production capacity|Experience|Project background|Year|New company certifications)[^\]]*\][^.!?\n]*(?:[.!?]|$)', '',value,flags=re.I)
 value=re.sub(r'https?://(?:www\.)?(?:youtube\.com/@dxhcontainerhouse(?:/featured)?|instagram\.com/dxhcontainerhouse/?|facebook\.com/profile\.php\?id=100095546591719|tiktok\.com/@NEW BRAND)', '',value,flags=re.I)
 value=re.sub(r'DXH\d+','',value,flags=re.I)
 value=legacy.sub('',value)
 value=re.sub(r'\bmanufactured by\s*(?=[.,])','',value,flags=re.I)
 value=re.sub(r'NEW BRAND','Cowinlife',value,flags=re.I)
 value=placeholder.sub('',value)
 return value
stats={'pages':len(rows),'redirects':len(redirects),'removed_nodes':0,'changed_pages':0}
def clean_html(raw):
 soup=BeautifulSoup(raw,'html.parser')
 for node in list(soup.find_all(string=True)):
  if not getattr(node,'parent',None) or node.parent.name in ('style','script'):continue
  value=str(node)
  if placeholder.search(value):
   el=node.parent
   # Remove obsolete fact tiles, testimonials and unfilled QR/contact widgets as a unit.
   block=el.find_parent(class_='unit-list__item')
   if block and re.search(r'New company information|New client testimonial',block.get_text()):
    block.decompose();stats['removed_nodes']+=1;continue
   if re.search(r'\[New company phone\]|\[Contact person\]',value):
    while el.parent and el.name not in ('div','p','li'):el=el.parent
    if len(el.get_text(strip=True))<200:el.decompose();stats['removed_nodes']+=1;continue
   if 'brand-contact-pending' in el.get('class',[]):el.decompose();stats['removed_nodes']+=1;continue
  if old_social.search(value):
   el=node.parent
   if el.name in ('p','div') and len(el.get_text(strip=True))<300:el.decompose();stats['removed_nodes']+=1;continue
  if getattr(node,'parent',None):node.replace_with(text(value))
 for el in soup.find_all(True):
  for attr in ('alt','title','aria-label'):
   if el.has_attr(attr):el[attr]=text(el[attr])
  if el.has_attr('href'):
   href=el['href'];path=href.split('#')[0].split('?')[0]
   if path in redirects:el['href']=href.replace(path,redirects[path],1)
   elif old_social.search(href) or re.search(r'dxh(?:container|house)\.com',href,re.I):el.attrs.pop('href',None)
 return str(soup)
for row in rows:
 p=ROOT/'content/pages'/row['file'];before=p.read_text();data=json.loads((SOURCE/'content/pages'/row['file']).read_text())
 for key,value in data.items():
  if not isinstance(value,str):continue
  if key in ('html','headerHtml','footerHtml','inquiryHtml'):data[key]=clean_html(value)
  elif key=='path':data[key]=redirects.get(value,value)
  elif key in ('title','description','displayTitle'):data[key]=text(value)
 p.write_text(json.dumps(data,ensure_ascii=False))
 if p.read_text()!=before:stats['changed_pages']+=1
 row['path']=data['path'];row['title']=data['title'];row['description']=data['description']
INDEX.write_text(json.dumps(rows,ensure_ascii=False))
redirect_file.write_text(json.dumps(redirects,indent=2))
(ROOT/'reports/brand-cleanup/text-cleanup.json').write_text(json.dumps(stats,indent=2))
print(json.dumps(stats))
