"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Search, Star } from "lucide-react";
import { useState } from "react";

type GalleryImage = { src: string; alt: string };

export function RetailProductGallery({ images, productName }: { images: GalleryImage[]; productName: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const activeImage = images[activeIndex];

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
    </div>
  );
}

export function ProductFeedback({ rating, ratingCount }: { rating: number; ratingCount: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="reviews" className="section retail-feedback" aria-labelledby="feedback-title">
      <div className="section-heading">
        <p className="eyebrow">Customer feedback</p>
        <h2 id="feedback-title">Product ratings</h2>
      </div>
      <div className="retail-feedback-grid">
        <div className="retail-rating-summary">
          <strong>{rating.toFixed(1)}</strong>
          <div className="retail-stars" aria-label={`${rating.toFixed(1)} out of 5 stars`}>
            {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={21} fill={star <= Math.round(rating) ? "currentColor" : "none"} />)}
          </div>
          <span>Based on {ratingCount.toLocaleString("en-US")} product ratings</span>
        </div>
        <div className="retail-feedback-copy">
          <h3>Feedback is synced separately from the product catalog</h3>
          <p>The rating summary is matched to this product source. Individual review text is not reproduced until verified customer-feedback synchronization is enabled for the independent site.</p>
          <button type="button" className="text-action" onClick={() => setIsOpen((value) => !value)} aria-expanded={isOpen}>
            {isOpen ? "Hide rating details" : "How ratings are handled"}
          </button>
          {isOpen && <p className="retail-feedback-note">Only approved, product-specific feedback will be shown here. Platform names, seller details, and external links are excluded from the storefront.</p>}
        </div>
      </div>
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
