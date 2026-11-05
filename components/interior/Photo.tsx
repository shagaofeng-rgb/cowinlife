import Image from 'next/image';
import type { InteriorPhoto } from '@/lib/interior-content';

export default function Photo({ image, sizes, eager, className }: {
  image: InteriorPhoto;
  sizes: string;
  eager?: boolean;
  className?: string;
}) {
  return (
    <Image
      className={['cl-photo', className].filter(Boolean).join(' ')}
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      sizes={sizes}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : undefined}
    />
  );
}
