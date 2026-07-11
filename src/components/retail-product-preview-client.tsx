"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";

type GalleryImage = { src: string; alt: string };

export function RetailProductGallery({ images, productName }: { images: GalleryImage[]; productName: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const activeImage = images[activeIndex];

  useEffect(() => {
    if (!zoomed) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setZoomed(false); };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [zoomed]);

  const selectImage = (index: number) => {
    setActiveIndex(index);
    setZoomed(false);
  };

  const changeImage = (direction: -1 | 1) => {
    setActiveIndex((current) => (current + direction + images.length) % images.length);
    setZoomed(false);
  };

  return (
    <div className="detail-media retail-gallery" onKeyDown={(event) => {
      if (event.key === "ArrowLeft") changeImage(-1);
      if (event.key === "ArrowRight") changeImage(1);
    }}>
      <div className={`detail-primary-image retail-gallery-primary${zoomed ? " is-zoomed" : ""}`}>
        <button type="button" className="retail-gallery-main" onClick={() => setZoomed((value) => !value)} aria-label={`${zoomed ? "Reduce" : "Zoom"} ${productName} image`}>
          <Image src={activeImage.src} alt={activeImage.alt} fill sizes="(max-width: 760px) calc(100vw - 40px), 52vw" priority />
          <span>{zoomed ? "Reduce image" : "Click to zoom"}</span>
        </button>
        {images.length > 1 && <>
          <button type="button" className="retail-gallery-arrow previous" onClick={() => changeImage(-1)} aria-label="Show previous product image"><ChevronLeft size={21} /></button>
          <button type="button" className="retail-gallery-arrow next" onClick={() => changeImage(1)} aria-label="Show next product image"><ChevronRight size={21} /></button>
        </>}
      </div>
      <div className="gallery-strip retail-gallery-thumbs" aria-label="Product gallery">
        {images.map((image, index) => (
          <button type="button" className={`gallery-thumb${index === activeIndex ? " is-active" : ""}`} key={image.src} onClick={() => selectImage(index)} aria-label={`Show product image ${index + 1}`} aria-pressed={index === activeIndex}>
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 25vw, 13vw" />
          </button>
        ))}
      </div>
      {zoomed && <div className="retail-lightbox" role="dialog" aria-modal="true" aria-label={`${productName} image preview`} onClick={() => setZoomed(false)}>
        <button type="button" className="retail-lightbox-close" aria-label="Close image preview" onClick={() => setZoomed(false)}><X size={20} /></button>
        <Image src={activeImage.src} alt={activeImage.alt} width={1600} height={1600} sizes="96vw" onClick={(event) => event.stopPropagation()} />
      </div>}
    </div>
  );
}

export function ProductFeedback() {
  return (
    <section id="reviews" className="section retail-feedback" aria-labelledby="feedback-title">
      <div className="section-heading">
        <p className="eyebrow">Customer feedback</p>
        <h2 id="feedback-title">Product ratings</h2>
      </div>
      <div className="retail-feedback-copy"><h3>Customer reviews will be available soon.</h3><p>Only verified customer feedback will be displayed on this independent storefront.</p></div>
    </section>
  );
}

export function ProductSectionLinks() {
  return (
    <nav className="retail-detail-links" aria-label="Product detail navigation">
      <a href="#product-details">Product details</a>
      <a href="#sku-images">Specifications</a>
      <a href="#reviews">Customer feedback</a>
    </nav>
  );
}
