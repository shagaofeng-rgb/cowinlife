import { ArrowRight, BedDouble, Box, Building2, ClipboardList, DoorOpen, Hammer, House, Layers, PackageOpen, PanelsTopLeft, Ruler, Truck } from 'lucide-react';
import type { InteriorContent } from '@/lib/interior-content';
import Gallery from './Gallery';
import { Breadcrumbs, Cards, RichText, Video } from './InteriorParts';
import Photo from './Photo';
import { QuoteLink } from './SiteFrame';

const profiles = {
  panels: {
    label: 'Panel systems', icon: Layers, configuration: [
      { icon: Layers, title: 'Core and facing', description: 'Confirm the core type and surface finish required for the wall or roof.' },
      { icon: Ruler, title: 'Panel dimensions', description: 'Share the required thickness, width, and panel lengths.' },
      { icon: ClipboardList, title: 'Technical documentation', description: 'Request supporting technical documents for the selected panel.' },
    ],
  },
  sanitary: {
    label: 'Sanitation modules', icon: Building2, configuration: [
      { icon: PanelsTopLeft, title: 'Unit layout', description: 'Confirm the number of toilets, showers, and accessible spaces.' },
      { icon: Hammer, title: 'Service connections', description: 'Review water, drainage, and power at the site.' },
      { icon: Truck, title: 'Placement', description: 'Share the installation position and any access restrictions.' },
    ],
  },
  capsule: {
    label: 'Capsule & pod systems', icon: House, configuration: [
      { icon: PanelsTopLeft, title: 'Room configuration', description: 'Discuss occupancy, glazing, and internal room layout.' },
      { icon: Layers, title: 'Interior finish', description: 'Identify your finish preferences and what to include in the project scope.' },
      { icon: Truck, title: 'Delivery access', description: 'Review the delivery route, lifting equipment, and placement conditions.' },
    ],
  },
  expandable: {
    label: 'Expandable modules', icon: Box, configuration: [
      { icon: Ruler, title: 'Folded and opened dimensions', description: 'Confirm shipping dimensions and the clear space needed to open the unit.' },
      { icon: BedDouble, title: 'Room plan', description: 'Discuss the bedroom, kitchen, and bathroom configuration for your use.' },
      { icon: Hammer, title: 'Supports and connections', description: 'Review foundation preparation and site service connections.' },
    ],
  },
  flatPack: {
    label: 'Foldable & flat pack modules', icon: PackageOpen, configuration: [
      { icon: PackageOpen, title: 'Packing and modules', description: 'Confirm package sizes and the number of modules needed.' },
      { icon: PanelsTopLeft, title: 'Layout and finishes', description: 'Discuss partitions, openings, and finishes for the model.' },
      { icon: Hammer, title: 'On-site assembly', description: 'Confirm lifting and assembly responsibilities before shipment.' },
    ],
  },
  modular: {
    label: 'Modular building systems', icon: Building2, configuration: [
      { icon: PanelsTopLeft, title: 'Room configuration', description: 'Discuss the room layout, circulation, and intended occupancy.' },
      { icon: Layers, title: 'Materials and finishes', description: 'Confirm finishes and building services for the selected configuration.' },
      { icon: Truck, title: 'Site and transport', description: 'Share the project location, delivery access, and unloading conditions.' },
    ],
  },
};

function profileFor(page: InteriorContent) {
  const title = page.title.toLowerCase();
  const family = page.crumbs.map(item => item.title).join(' ').toLowerCase();
  const category = title + ' ' + family;
  const unit = /\b(?:house|home|cabin|garage|office|building|dormitory|warehouse|kiosk|camp|villa)s?\b/.test(title);

  if (/sandwich panel/.test(family) || (!unit && /sandwich|rockwool|rock wool|insulat.*panel|mgo board|magnesium.*board/.test(title))) return profiles.panels;
  if (/portable toilet|toilets and bathrooms/.test(family) || (!unit && /toilet|sanitary|restroom/.test(title))) return profiles.sanitary;
  if (/capsule|apple cabin|\bpod\b/.test(category)) return profiles.capsule;
  if (/expandable|double wing/.test(category)) return profiles.expandable;
  if (/folding|foldable|flat ?pack|detachable/.test(category)) return profiles.flatPack;
  return profiles.modular;
}

export default function ProductDetail({ page }: { page: InteriorContent }) {
  const profile = profileFor(page);
  const plan = page.photos.find(photo => /floor plan|layout plan/i.test(photo.alt));
  const related = page.cards.filter(card => card.kind === 'product').slice(0, 6);
  const facts = [...page.specs, ...page.specSummary].map(spec => ({ ...spec, icon: Ruler }));
  const headlineFacts = [...facts].sort((a, b) =>
    Number(/footprint|dimension|size/i.test(b.label)) - Number(/footprint|dimension|size/i.test(a.label))
  );
  if (!facts.length) {
    const bedrooms = page.title.match(/\b(\d+)\s*[- ]?bedrooms?\b/i);
    const length = page.title.match(/\b(\d+)\s*[- ]?(?:ft|foot|feet)\b/i);
    if (bedrooms) facts.push({ label: 'Layout', value: bedrooms[1] + ' bedrooms', icon: BedDouble });
    if (length) facts.push({ label: 'Model size', value: length[1] + ' ft', icon: Ruler });
    if (/covered porch/i.test(page.title)) facts.push({ label: 'Feature', value: 'Covered porch', icon: DoorOpen });
    if (profile === profiles.panels) facts.push({ label: 'Product type', value: 'Panel system', icon: Layers });
    if (plan) facts.push({ label: 'Reference drawing', value: 'Floor plan', icon: PanelsTopLeft });
  }

  const technicalRows = page.specTables.html ? page.specs : facts;
  const sections = [
    ['Overview', 'overview'],
    ['Specifications', 'specifications'],
    ...(plan ? [['Floor plan', 'floor-plan']] : []),
    ['Configuration', 'configuration'],
    ['Delivery & installation', 'delivery'],
  ];
  const InfoIcon = profile.icon;

  return (
    <>
      <div className="cl-wrap">
        <Breadcrumbs page={page} />
        <div className="cl-product-top">
          {page.photos.length ? (
            <Gallery photos={page.photos} contain={profile === profiles.panels} />
          ) : (
            <aside className="cl-model-sheet">
              <p className="cl-eyebrow">Model information</p>
              <InfoIcon size={35} aria-hidden />
              <h2>{profile.label}</h2>
              <p>Review the available specifications and discuss the configuration for your site.</p>
              <a className="cl-text-link" href="#configuration">Configuration guide <ArrowRight size={17} aria-hidden /></a>
            </aside>
          )}
          <div>
            <p className="cl-eyebrow">{profile.label}</p>
            <h1 className={page.title.length > 66 ? 'cl-long-title' : undefined}>{page.title}</h1>
            {page.description && <p className="cl-lead">{page.description}</p>}
            {facts.length > 0 && (
              <dl className="cl-facts">
                {(headlineFacts.length ? headlineFacts : facts).slice(0, 3).map(({ label, value, icon: Icon }) => (
                  <div key={label + value}>
                    <Icon size={19} aria-hidden />
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            )}
            <div className="cl-actions">
              <QuoteLink href="#inquiry" />
              <a className="cl-button cl-button-outline" href="#specifications">View specifications</a>
            </div>
          </div>
        </div>
      </div>

      <nav className="cl-product-nav" aria-label="Product sections">
        <div className="cl-wrap">{sections.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</div>
      </nav>

      <div className="cl-wrap">
        <section className="cl-section" id="overview">
          <h2>Product overview</h2>
          {page.copy.html ? <RichText content={page.copy} /> : page.description && <p>{page.description}</p>}
          {page.video && <Video media={page.video} label={page.title} />}
        </section>

        <section className="cl-section" id="specifications">
          <h2>Specifications</h2>
          {technicalRows.length > 0 && (
            <table className="cl-specifications">
              <tbody>
                {technicalRows.map(({ label, value }) => <tr key={label + value}><th scope="row">{label}</th><td>{value}</td></tr>)}
              </tbody>
            </table>
          )}
          <RichText content={page.specTables} />
          <p className="cl-note">
            {page.specs.length || page.specTables.html
              ? 'Reference specifications for this model. Confirm final values and units for your selected configuration.'
              : 'Request the dimensions, material options, and technical sheet for your project.'}
          </p>
        </section>

        {plan && (
          <section className="cl-section" id="floor-plan">
            <h2>Floor plan</h2>
            <div className="cl-split">
              <Photo image={plan} sizes="(max-width: 640px) 90vw, 50vw" className="cl-plan" />
              <div>
                <p className="cl-eyebrow">Reference drawing</p>
                <p>Review the room layout and circulation. Confirm final dimensions against the approved drawing.</p>
              </div>
            </div>
          </section>
        )}

        <section className="cl-section" id="configuration">
          <h2>Configuration</h2>
          <div className="cl-cards cl-configuration">
            {profile.configuration.map(({ icon: Icon, title, description }) => (
              <div className="cl-card cl-card-text" key={title}>
                <Icon size={22} aria-hidden />
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cl-section" id="delivery">
          <h2>Delivery & installation</h2>
          <div className="cl-split">
            <div><h3><Truck size={20} aria-hidden /> Transport</h3><p>Confirm the destination, site access, and unloading arrangements with your inquiry.</p></div>
            <div><h3><Hammer size={20} aria-hidden /> Site preparation</h3><p>Confirm site conditions and installation responsibilities for your selected configuration.</p></div>
          </div>
        </section>

        {related.length > 0 && <section className="cl-section"><h2>Related models</h2><Cards cards={related} /></section>}
      </div>
    </>
  );
}
