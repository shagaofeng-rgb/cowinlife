"""Retire imported corporate records and references, preserving general product articles."""
import json
from pathlib import Path
from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parents[2]
retired = set('''/indonesia-bdexpo-2025.html
/12th-bdexpo-brazil-exhibition.html
/saudi-2025-project-exhibition.html
/projects-donated-to-government-hospitals-by-solomon-islands-customers.html
/the-container-house-hospital-used-by-salomon-hospital.html
/when-the-covid-19-was-rampant-in-china.html
/ultimate-success-the-middle-east-site-project-department-secures-5000-sq-meters-of-excellence.html
/the-client-is-undertaking-a-power-station-project-in-africa-and-can-benefit-from-utilizing-our-container-storage-facilities.html
/customized-seaside-container-house-project-in-brazil.html
/foldable-container-house-project-case.html
/saudi-arabia-modular-accommodation-case-study.html
/container-school-case-study-in-malta.html
/container-showroom-project-design.html
/container-pool-case-study.html
/waterfront-container-home-case-study.html
/indonesia-modular-mining-camp-an-site-office-project.html
/military-container-accommodation-poland.html
/two-story-flat-pack-container-staff-accommodation.html
/luxury-3-bedroom-container-residential-home.html
/51-meter-modular-labor-camp-accommodation.html
/luxury-3-story-container-home-for-german.html
/modular-accommodation-in-saudi-arabia.html
/rapid-deployment-modular-container-hospital.html'''.splitlines())
rows = json.loads((ROOT/'content/index.json').read_text())
redirect_path = ROOT/'content/legacy-brand-redirects.json'
redirects = json.loads(redirect_path.read_text())
removed = []
for row in rows:
    path = ROOT/'content/pages'/row['file']
    if row['path'] in retired:
        removed.append(row['path'])
        redirects[row['path']] = '/news.html'
        path.unlink(missing_ok=True)
        continue
    data = json.loads(path.read_text())
    changed = False
    for key in ('html', 'headerHtml', 'footerHtml', 'inquiryHtml'):
        raw = data.get(key, '')
        if row['path'] != '/about-us.html' and not any(url in raw for url in retired):
            continue
        soup = BeautifulSoup(raw, 'html.parser')
        for a in list(soup.find_all('a', href=True)):
            if not getattr(a, 'attrs', None):
                continue
            if a['href'].split('?')[0].split('#')[0] in retired:
                card = a.find_parent(class_='unit-list__item')
                (card or a).decompose()
        if row['path'] == '/about-us.html':
            for identifier in ('module-BlM8b6fkYT', 'module-4dXEcgRhyy', 'module-4y4BHEgH5f', 'module-6fhQJHy3Ne', 'module-eGAnjVTSqw'):
                node = soup.find(id=identifier)
                if node:
                    node.decompose()
            for node in list(soup.find_all(string=True)):
                if not getattr(node, 'parent', None):
                    continue
                value = str(node)
                if 'partnerships with governments' in value or 'With a strong technical team' in value:
                    node.extract()
                elif 'Cowinlife Container House Co., Ltd.' in value:
                    node.replace_with(value.replace('Cowinlife Container House Co., Ltd.', 'Cowinlife'))
        data[key] = str(soup)
        changed = True
    if changed:
        path.write_text(json.dumps(data, ensure_ascii=False))
(ROOT/'content/index.json').write_text(json.dumps([r for r in rows if r['path'] not in retired], ensure_ascii=False))
redirect_path.write_text(json.dumps(redirects, indent=2))
(ROOT/'reports/brand-cleanup/retired-corporate-records.json').write_text(json.dumps(removed, indent=2))
print('Retired corporate records:', len(removed))
