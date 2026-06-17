/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CatalogSection from './components/CatalogSection';
import BrandHighlights from './components/BrandHighlights';
import SizeCalculator from './components/SizeCalculator';
import LocationHours from './components/LocationHours';
import ContactWhatsAppForm from './components/ContactWhatsAppForm';
import Footer from './components/Footer';
import { Sparkles, Heart, Footprints, ShieldCheck, Gem, ChevronDown } from 'lucide-react';

const HERO_BG_IMG = '/src/assets/images/hero_boutique_1781707371626.jpg';

export default function App() {
  const [productInterest, setProductInterest] = useState<string>('');

  const handleSelectProductForInquiry = (productName: string) => {
    setProductInterest(productName);
    
    // Smooth scroll to the contact form so they can finalize and send the click
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClearInterest = () => {
    setProductInterest('');
  };

  return (
    <div className="bg-brand-bg text-[#4A4A4A] min-h-screen font-sans selection:bg-brand-mint selection:text-brand-text scroll-smooth">
      {/* Dynamic Header & Ribbon */}
      <Navbar />

      {/* Elegant Hero Section with Premium Layering */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden py-16">
        {/* Absolute Background with soft gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_BG_IMG} 
            alt="Interior del Local 27" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-102" 
          />
          <div className="absolute inset-0 bg-[#4A3D36]/44 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-black/30"></div>
        </div>

        {/* Cozy Text Content Panel with beautiful superrounded layout */}
        <div className="max-w-4xl mx-auto text-center relative z-10 text-white space-y-6 md:space-y-8 bg-brand-text/50 backdrop-blur-xs p-8 md:p-14 rounded-[36px] border border-white/20 shadow-xl">
          <div>
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-brand-mint text-brand-text uppercase tracking-widest mb-4 inline-block shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-pink fill-current animate-spin-slow" />
              Moda Infantil con Alma • Desde 2007
            </span>
            
            <h1 className="text-4xl md:text-6xl font-serif font-black tracking-tight leading-none text-white drop-shadow-md">
              Vistiendo las primeras sonrisas de tu bebé
            </h1>
          </div>

          <p className="text-white/95 text-base md:text-xl font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-sm font-sans">
            Descubrí colecciones de diseño exclusivo desde prematuros hasta los 8 años. Te brindamos telas nobles de puro algodón, calzado anatómico y blanquería artesanal de la mejor calidad.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 pt-2">
            <a
              href="#catalogo"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-pink hover:bg-[#FF737D] text-white font-extrabold uppercase tracking-wider text-xs md:text-sm shadow-md hover:shadow-lg transition-all"
            >
              Explorar Catálogo
            </a>
            <a
              href="#guia-talles"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-lime hover:bg-[#D4E8B0] text-gray-800 font-extrabold uppercase tracking-wider text-xs md:text-sm shadow-sm transition-all"
            >
              Probador de Talles
            </a>
          </div>

          <div className="pt-2 animate-bounce hidden md:block">
            <a href="#ventajas" className="inline-flex items-center justify-center p-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-xs text-white hover:bg-white/20 transition-colors">
              <ChevronDown className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Trust & Advantages Section (Sello de Calidad) - Dynamic Pastel Cards */}
      <section id="ventajas" className="py-20 px-4 bg-white border-b-2 border-brand-bg relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-black text-brand-text tracking-tight">¿Por qué las familias nos eligen?</h2>
            <p className="text-xs md:text-sm text-gray-500 max-w-md mx-auto mt-2">Dedicación exclusiva y asesoramiento personalizado en cada etapa del crecimiento.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Advantage 1: Track record */}
            <div className="flex flex-col items-center text-center p-6 bg-brand-peach-pink/20 rounded-[32px] border border-brand-peach-pink/30 hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-2xl bg-white text-brand-pink flex items-center justify-center mb-4 shadow-xs">
                <Heart className="w-7 h-7 fill-current" />
              </div>
              <h3 className="text-lg font-serif font-black text-[#5A5A5A] mb-1.5">Trayectoria de Amor</h3>
              <p className="text-[#6B6B6B] text-xs leading-relaxed font-sans">
                Desde 2007 aconsejamos a familias rosarinas a vestir con ternura y confort a sus recién nacidos.
              </p>
            </div>

            {/* Advantage 2: Complete range */}
            <div className="flex flex-col items-center text-center p-6 bg-brand-lime/30 rounded-[32px] border border-brand-lime/40 hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-2xl bg-white text-brand-pink flex items-center justify-center mb-4 shadow-xs">
                <Gem className="w-7 h-7 text-emerald-700" />
              </div>
              <h3 className="text-lg font-serif font-black text-[#5A5A5A] mb-1.5">Prematuros hasta 8 años</h3>
              <p className="text-[#6B6B6B] text-xs leading-relaxed font-sans">
                Encontrá absolutamente todos los talles, mudas completas, batitas, ranitas y abrigos cancheros.
              </p>
            </div>

            {/* Advantage 3: Safe steps */}
            <div className="flex flex-col items-center text-center p-6 bg-brand-orange/30 rounded-[32px] border border-brand-orange/40 hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-2xl bg-white text-brand-pink flex items-center justify-center mb-4 shadow-xs">
                <Footprints className="w-7 h-7 text-[#D56A15]" />
              </div>
              <h3 className="text-lg font-serif font-black text-[#5A5A5A] mb-1.5">Calzado de Seguridad</h3>
              <p className="text-[#6B6B6B] text-xs leading-relaxed font-sans">
                Zapatitos con grip antideslizante para no caminantes (14-17) y modelos anatómicos para caminantes (18-26).
              </p>
            </div>

            {/* Advantage 4: High End Linen & Bags */}
            <div className="flex flex-col items-center text-center p-6 bg-brand-lilac/25 rounded-[32px] border border-brand-lilac/35 hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-2xl bg-white text-brand-pink flex items-center justify-center mb-4 shadow-xs">
                <ShieldCheck className="w-7 h-7 text-[#6C78B0]" />
              </div>
              <h3 className="text-lg font-serif font-black text-[#5A5A5A] mb-1.5">Maternidad & Blanquería</h3>
              <p className="text-[#6B6B6B] text-xs leading-relaxed font-sans">
                Bolsos maternales prémium impermeables, cambiadores portátiles plegables y sábanas de batista peinada.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Main Interactive Sections */}
      <CatalogSection onSelectProduct={handleSelectProductForInquiry} />

      <BrandHighlights />

      <SizeCalculator />

      <LocationHours />

      <ContactWhatsAppForm 
        initialProductInterest={productInterest} 
        onClearInterest={handleClearInterest} 
      />

      <Footer />
    </div>
  );
}
