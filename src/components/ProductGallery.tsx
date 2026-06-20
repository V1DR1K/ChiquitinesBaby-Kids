import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Hand } from 'lucide-react';

type GalleryProps = {
  eyebrow: string;
  title: string;
  description: string;
  images: string[];
  accent: 'rose' | 'mint' | 'lilac';
};

const accentStyles = {
  rose: 'bg-[#FFF0EF] text-[#A84D55]',
  mint: 'bg-[#EAF8F2] text-[#397461]',
  lilac: 'bg-[#F0F1FA] text-[#58648F]',
};

export default function ProductGallery({ eyebrow, title, description, images, accent }: GalleryProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const nextIndex = Math.max(0, Math.min(index, images.length - 1));
    const slide = track.children[nextIndex] as HTMLElement | undefined;
    slide?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveIndex(Number((visible.target as HTMLElement).dataset.index));
      },
      { root: track, threshold: [0.55, 0.75, 0.95] },
    );
    Array.from(track.children as HTMLCollectionOf<Element>).forEach((slide) => observer.observe(slide));
    return () => observer.disconnect();
  }, [images]);

  return (
    <section className="mb-16 md:mb-24" aria-labelledby={`gallery-${title.replace(/\s/g, '-')}`}>
      <div className="mb-6 md:mb-8 md:flex md:items-end md:justify-between md:gap-10">
        <div className="max-w-2xl">
          <span className={`inline-flex rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] ${accentStyles[accent]}`}>
            {eyebrow}
          </span>
          <h3 id={`gallery-${title.replace(/\s/g, '-')}`} className="mt-3 text-2xl font-serif font-black leading-tight text-brand-text md:text-4xl">
            {title}
          </h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#6B5E53] md:text-base">{description}</p>
        </div>
        <div className="mt-5 flex items-center justify-between gap-4 md:mt-0 md:justify-end">
          <span className="inline-flex items-center gap-2 text-xs font-bold text-[#7A6C61] md:hidden">
            <Hand className="h-4 w-4" /> Deslizá para explorar
          </span>
          <div className="flex gap-2">
            <button type="button" onClick={() => goTo(activeIndex - 1)} disabled={activeIndex === 0} aria-label={`Foto anterior de ${title}`} className="grid h-11 w-11 place-items-center rounded-full border border-brand-peach-pink/50 bg-white text-brand-text shadow-sm transition hover:border-brand-pink hover:text-brand-pink disabled:cursor-not-allowed disabled:opacity-30">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button type="button" onClick={() => goTo(activeIndex + 1)} disabled={activeIndex === images.length - 1} aria-label={`Foto siguiente de ${title}`} className="grid h-11 w-11 place-items-center rounded-full bg-brand-text text-white shadow-sm transition hover:bg-brand-pink disabled:cursor-not-allowed disabled:opacity-30">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div ref={trackRef} className="gallery-scroll -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 md:mx-0 md:gap-5 md:px-0" aria-label={`Galería de ${title}`}>
        {images.map((src, index) => (
          <figure key={src} data-index={index} className="group relative aspect-[4/5] w-[84vw] max-w-[360px] flex-none snap-start overflow-hidden rounded-[28px] bg-white shadow-sm ring-1 ring-black/5 md:w-[calc((100%-2.5rem)/3)] md:max-w-none">
            <img src={src} alt={`${title}, foto ${index + 1} de ${images.length}`} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]" />
            <figcaption className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-extrabold text-brand-text shadow-sm backdrop-blur-sm">
              {String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3" aria-hidden="true">
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-black/5">
          <div className="h-full rounded-full bg-brand-pink transition-[width] duration-300" style={{ width: `${((activeIndex + 1) / images.length) * 100}%` }} />
        </div>
        <span className="min-w-12 text-right text-[11px] font-extrabold tabular-nums text-[#7A6C61]">{activeIndex + 1} / {images.length}</span>
      </div>
    </section>
  );
}
