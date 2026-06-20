import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export type EditorialHeroProps = {
  mainImage: string;
  galleryImages: string[];
  eyebrow: string;
  title: string;
  description: string;
};

export default function EditorialHero({ mainImage, galleryImages, eyebrow, title, description }: EditorialHeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const mobileTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 1024px)');
    const syncViewport = () => setIsDesktop(desktopQuery.matches);
    syncViewport();
    desktopQuery.addEventListener('change', syncViewport);
    return () => desktopQuery.removeEventListener('change', syncViewport);
  }, []);

  useEffect(() => {
    if (!isDesktop || paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches || galleryImages.length < 2) return;
    const timer = window.setInterval(() => setActiveIndex((current) => (current + 1) % galleryImages.length), 6500);
    return () => window.clearInterval(timer);
  }, [galleryImages.length, isDesktop, paused]);

  const goTo = (index: number, scrollMobile = false) => {
    const next = (index + galleryImages.length) % galleryImages.length;
    setActiveIndex(next);
    if (scrollMobile) {
      const slide = mobileTrackRef.current?.children[next] as HTMLElement | undefined;
      slide?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  };

  const handleMobileScroll = () => {
    const track = mobileTrackRef.current;
    if (track?.clientWidth) setActiveIndex(Math.round(track.scrollLeft / track.clientWidth));
  };

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-[#EEE8E2] lg:grid lg:min-h-[calc(100svh-7rem)] lg:grid-cols-[minmax(0,3fr)_minmax(250px,1fr)]">
      <div className="relative flex min-h-[72svh] items-center justify-center overflow-hidden px-4 py-12 sm:min-h-[78svh] lg:min-h-0 lg:px-8 lg:py-16">
        <img src={mainImage} alt="Fachada de Chiquitines Baby & Kids en Galería Libertad" className="absolute inset-0 h-full w-full object-cover object-[52%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#332B26]/65 via-[#443830]/40 to-[#443830]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2E2722]/55 via-transparent to-black/25" />

        <div className="relative z-10 mx-auto w-full max-w-3xl rounded-[28px] border border-white/20 bg-[#3C342E]/58 p-6 text-center text-white shadow-2xl backdrop-blur-[3px] sm:p-9 lg:rounded-[36px] lg:p-12">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-brand-mint px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-text shadow-sm sm:text-xs">
            <Sparkles className="h-3.5 w-3.5 fill-current text-brand-pink" /> {eyebrow}
          </span>
          <h1 id="hero-title" className="font-serif text-4xl font-black leading-[0.98] tracking-tight text-white drop-shadow-md sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-relaxed text-white/95 drop-shadow-sm sm:text-base lg:mt-6 lg:text-lg">{description}</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row lg:mt-8">
            <a href="#catalogo" className="w-full rounded-full bg-brand-pink px-7 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#FF737D] hover:shadow-lg sm:w-auto lg:px-8 lg:py-4 lg:text-sm">Explorar catálogo</a>
            <a href="#guia-talles" className="w-full rounded-full bg-brand-lime px-7 py-3.5 text-xs font-extrabold uppercase tracking-wider text-gray-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-[#D4E8B0] sm:w-auto lg:px-8 lg:py-4 lg:text-sm">Probador de talles</a>
          </div>
          <a href="#ventajas" aria-label="Continuar a las ventajas" className="mt-6 hidden rounded-full border border-white/25 bg-white/10 p-2 text-white transition hover:bg-white/20 lg:inline-flex"><ChevronDown className="h-5 w-5" /></a>
        </div>
      </div>

      <aside className="relative hidden min-h-0 overflow-hidden bg-[#2F2925] lg:block" aria-label="Conocé el interior del local" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}>
        {galleryImages.map((image, index) => (
          <div key={image} className={`absolute inset-0 overflow-hidden transition-opacity duration-700 ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`} aria-hidden={activeIndex !== index}>
            <img src={image} alt="" className="absolute inset-0 h-full w-full scale-110 object-cover opacity-55 blur-xl" />
            <img src={image} alt={`Interior de Chiquitines Baby & Kids, vista ${index + 1}`} className="relative h-full w-full object-contain" />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/15" />
        <div className="absolute inset-x-0 bottom-0 z-10 p-5">
          <span className="mb-3 block text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/85">Nuestro local</span>
          <div className="flex items-center justify-between gap-3">
            <div className="flex gap-1.5" role="tablist" aria-label="Elegir foto del local">
              {galleryImages.map((_, index) => <button key={index} type="button" onClick={() => goTo(index)} aria-label={`Mostrar foto ${index + 1}`} aria-selected={activeIndex === index} role="tab" className={`h-2 rounded-full transition-all ${activeIndex === index ? 'w-7 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'}`} />)}
            </div>
            <div className="flex gap-2">
              <button type="button" onClick={() => goTo(activeIndex - 1)} aria-label="Foto anterior" className="grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm transition hover:bg-white hover:text-brand-text"><ChevronLeft className="h-4 w-4" /></button>
              <button type="button" onClick={() => goTo(activeIndex + 1)} aria-label="Foto siguiente" className="grid h-10 w-10 place-items-center rounded-full bg-white text-brand-text shadow-md transition hover:bg-brand-pink hover:text-white"><ChevronRight className="h-4 w-4" /></button>
            </div>
          </div>
        </div>
      </aside>

      <aside className="bg-brand-bg px-4 py-6 lg:hidden" aria-label="Conocé el interior del local" onPointerDown={() => setPaused(true)} onPointerUp={() => setPaused(false)}>
        <div className="mb-3 flex items-end justify-between gap-4">
          <div><span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-brand-pink">Nuestro espacio</span><h2 className="mt-1 font-serif text-xl font-black text-brand-text">Conocé el local</h2></div>
          <span className="text-[11px] font-extrabold tabular-nums text-[#7A6C61]">{activeIndex + 1} / {galleryImages.length}</span>
        </div>
        <div ref={mobileTrackRef} onScroll={handleMobileScroll} className="gallery-scroll -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4" onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}>
          {galleryImages.map((image, index) => (
            <button key={image} type="button" onClick={() => goTo(index, true)} className="aspect-[4/5] w-[78vw] max-w-[330px] flex-none snap-start overflow-hidden rounded-[26px] bg-[#E7E0DA] text-left shadow-sm ring-1 ring-black/5" aria-label={`Ver foto ${index + 1} del interior del local`}>
              <span className="relative block h-full w-full overflow-hidden">
                <img src={image} alt="" className="absolute inset-0 h-full w-full scale-110 object-cover opacity-40 blur-xl" />
                <img src={image} alt={`Interior de Chiquitines Baby & Kids, vista ${index + 1}`} className="relative h-full w-full object-contain" />
              </span>
            </button>
          ))}
        </div>
      </aside>
    </section>
  );
}
