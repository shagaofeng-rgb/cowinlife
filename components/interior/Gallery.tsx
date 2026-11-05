'use client';

import { useState } from 'react';
import type { InteriorPhoto } from '@/lib/interior-content';
import Photo from './Photo';

export default function Gallery({ photos, contain }: { photos: InteriorPhoto[]; contain?: boolean }) {
  const [selected, setSelected] = useState(0);
  const image = photos[selected];
  return (
    <div className="cl-gallery">
      <Photo image={image} sizes="(max-width: 640px) 90vw, (max-width: 1400px) 50vw, 680px" eager={selected === 0} className={contain || /floor plan|layout plan/i.test(image.alt) ? 'cl-contain' : undefined} />
      {photos.length > 1 && (
        <div className="cl-thumbs" role="group" aria-label="Product images">
          {photos.map((photo, index) => (
            <button key={photo.src} type="button" aria-label={`View image ${index + 1}: ${photo.alt}`} aria-pressed={selected === index} onClick={() => setSelected(index)}>
              <Photo image={{ ...photo, alt: '' }} sizes="72px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
