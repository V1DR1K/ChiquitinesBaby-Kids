import React, { useRef, useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

export type EditorialHeroProps = {
  mainImage: string;
  galleryImages: string[];
  eyebrow: string;
  title: string;
  description: string;
};

type HeroCopyProps = Pick<EditorialHeroProps, 'eyebrow' | 'title' | 'description'> & { mobile?: boolean };

function HeroCopy({ eyebrow, title, description, mobile = false }: HeroCopyProps) {
  return (
    <div className={mobile ? 'relative z-10 mx-auto w-full max-w-xl rounded-[28px] border border-white/20 bg-[#3C342E]/58 p-6 text-center text-white shadow-2xl backdrop-blur-[3px] sm:p-9' : 'relative z-10 w-full max-w-[640px] text-left text-white'}>
      <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-brand-mint px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-text shadow-sm sm:text-xs">
        <Sparkles className="h-3.5 w-3.5 fill-current text-brand-pink" /> {eyebrow}
      </span>
      <h1 id="hero-title" className={`font-serif font-black leading-[0.98] tracking-tight text-white drop-shadow-md ${mobile ? 'text-4xl sm:text-5xl' : 'text-5xl xl:text-6xl 2xl:text-7xl'}`}>{title}</h1>
      <p className={`mt-5 max-w-2xl font-medium leading-relaxed text-white/95 drop-shadow-sm ${mobile ? 'text-sm sm:text-base' : 'text-base xl:mt-6 xl:text-lg'}`}>{description}</p>
      <div className={`mt-6 flex gap-3 ${mobile ? 'flex-col items-center justify-center sm:flex-row' : 'items-center xl:mt-8'}`}>
        <a href="#catalogo" className="w-full rounded-full bg-brand-pink px-7 py-3.5 text-center text-xs font-extrabold uppercase tracking-wider text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#FF737D] hover:shadow-lg sm:w-auto xl:px-8 xl:py-4 xl:text-sm">Explorar catálogo</a>
        <a href="#guia-talles" className="w-full rounded-full bg-brand-lime px-7 py-3.5 text-center text-xs font-extrabold uppercase tracking-wider text-gray-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-[#D4E8B0] sm:w-auto xl:px-8 xl:py-4 xl:text-sm">Probador de talles</a>
      </div>
      {!mobile && <a href="#ventajas" aria-label="Continuar a las ventajas" className="mt-7 inline-flex rounded-full border border-white/30 bg-white/10 p-2 text-white transition hover:bg-white/20"><ChevronDown className="h-5 w-5" /></a>}
    </div>
  );
}

export default function EditorialHero({ mainImage, galleryImages, eyebrow, title, description }: EditorialHeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const mobileTrackRef = useRef<HTMLDivElement>(null);

  const handleMobileScroll = () => {
    const track = mobileTrackRef.current;
    if (track?.clientWidth) setActiveIndex(Math.round(track.scrollLeft / track.clientWidth));
  };

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-[#2F2925]">
      <div className="hidden min-h-[calc(100svh-7rem)] grid-cols-[minmax(0,18fr)_minmax(330px,7fr)] lg:grid">
        <div className="relative flex min-h-0 items-center overflow-hidden px-[clamp(3rem,6vw,7.5rem)] py-16">
          <img src={mainImage} alt="Fachada de Chiquitines Baby & Kids en Galería Libertad" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#241E1A]/82 via-[#2C241F]/48 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#211B17]/45 via-transparent to-black/18" />
          <HeroCopy eyebrow={eyebrow} title={title} description={description} />
        </div>

        <aside className="grid min-h-0 grid-cols-2 grid-rows-2 gap-1 bg-white" aria-label="Interior de nuestro local">
          <figure className="group relative col-span-2 overflow-hidden bg-[#E8E2DC]">
            <img src={galleryImages[0]} alt="Vista general del interior de Chiquitines" className="h-full w-full object-cover object-[center_62%] transition-transform duration-700 group-hover:scale-[1.02]" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent px-5 pb-4 pt-12"><figcaption className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-white">Nuestro local</figcaption></div>
          </figure>
          <figure className="group relative overflow-hidden bg-[#E8E2DC]">
            <img src={galleryImages[1]} alt="Colecciones para bebés y niños exhibidas en el local" className="h-full w-full object-cover object-[58%_center] transition-transform duration-700 group-hover:scale-[1.025]" />
          </figure>
          <figure className="group relative overflow-hidden bg-[#E8E2DC]">
            <img src={galleryImages[2]} alt="Vidriera con prendas y calzado infantil" className="h-full w-full object-cover object-[42%_center] transition-transform duration-700 group-hover:scale-[1.025]" />
          </figure>
        </aside>
      </div>

      <div className="lg:hidden">
        <div className="relative flex min-h-[72svh] items-center justify-center overflow-hidden px-4 py-12 sm:min-h-[78svh]">
          <img src={mainImage} alt="Fachada de Chiquitines Baby & Kids en Galería Libertad" className="absolute inset-0 h-full w-full object-cover object-[52%_center]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#332B26]/65 via-[#443830]/40 to-[#443830]/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2E2722]/55 via-transparent to-black/25" />
          <HeroCopy eyebrow={eyebrow} title={title} description={description} mobile />
        </div>

        <aside className="bg-brand-bg px-4 py-6" aria-label="Conocé el interior del local">
          <div className="mb-3 flex items-end justify-between gap-4">
            <div><span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-brand-pink">Nuestro espacio</span><h2 className="mt-1 font-serif text-xl font-black text-brand-text">Conocé el local</h2></div>
            <span className="text-[11px] font-extrabold tabular-nums text-[#7A6C61]">{activeIndex + 1} / {galleryImages.length}</span>
          </div>
          <div ref={mobileTrackRef} onScroll={handleMobileScroll} className="gallery-scroll -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4">
            {galleryImages.map((image, index) => (
              <figure key={image} className="aspect-[4/5] w-[78vw] max-w-[330px] flex-none snap-start overflow-hidden rounded-[26px] bg-[#E7E0DA] shadow-sm ring-1 ring-black/5">
                <span className="relative block h-full w-full overflow-hidden">
                  <img src={image} alt="" className="absolute inset-0 h-full w-full scale-110 object-cover opacity-40 blur-xl" />
                  <img src={image} alt={`Interior de Chiquitines Baby & Kids, vista ${index + 1}`} className="relative h-full w-full object-contain" />
                </span>
              </figure>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
