import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Crown, Stars, Gem, Gift } from 'lucide-react';
import { Brand } from '../types';

const BRANDS: Brand[] = [
  {
    id: 'reino-mora',
    name: 'Reino Mora',
    badge: 'Diseño Exclusivo',
    style: 'Romántico & Artesanal',
    description: 'Estilo de autor con detalles bordados únicos, géneros vaporosos, linos orgánicos y estampas súper dulces. Una propuesta prémium pensada para brillar en ocasiones especiales.',
  },
  {
    id: 'lelefantino',
    name: "L'elefantino",
    badge: 'Línea de Nacimiento',
    style: 'Tejidos en Algodón Pima',
    description: 'La delicadeza máxima hecha prenda. Sastrería de bebés, ajuares de bienvenida impecables y tejidos suaves de hilo que cuidan las primeras sonrisas de tu bebé.',
  },
  {
    id: 'gepetto',
    name: 'Gepetto',
    badge: 'Moda Activa',
    style: 'Colorido & Divertido',
    description: 'Prendas súper cómodas y duraderas pensadas para niños exploradores del talle 2 al 8. Jeans flex, camperitas cancheras y remeras confeccionadas para jugar sin límites.',
  },
  {
    id: 'brotecitos',
    name: 'Brotecitos',
    badge: 'Básicos Esenciales',
    style: 'Algodón 100% Noble',
    description: 'La mejor tela para vestir en el día a día. Ranitas, bodies, batitas y enteritos en algodón súper peinado que resiste cientos de lavados sin perder la suavidad original.',
  },
  {
    id: 'cari',
    name: 'Cari',
    badge: 'Casual Chic',
    style: 'Estilo & Tendencia',
    description: 'Conjuntos divinos que siguen las tendencias de los más grandes adaptados a la inocencia y practicidad infantil. Excelente equilibrio entre diseño vanguardista y confort.',
  }
];

export default function BrandHighlights() {
  return (
    <section id="marcas" className="py-23 px-4 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-brand-peach-pink/20 text-brand-pink mb-3">
            <Heart className="w-3.5 h-3.5 fill-current text-brand-pink" /> Sellos de Calidad
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-black tracking-tight text-brand-text mb-4">
            Nuestra Selección de Marcas
          </h2>
          <p className="text-[#6B5E53] text-base max-w-2xl mx-auto font-sans leading-relaxed">
            Te ofrecemos colecciones completas y exclusivas que solo encontrarás en nuestro local. Seleccionamos cuidadosamente hilados nobles y diseños distinguidos para abrazar a tus peques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {/* Main big card displaying Reino Mora & L'elefantino */}
          <div className="md:col-span-2 lg:col-span-3 bg-gradient-to-br from-brand-bg via-white to-brand-peach-pink/15 rounded-[36px] md:rounded-[48px] p-8 md:p-12 border border-brand-peach-pink/30 shadow-xs flex flex-col lg:flex-row gap-8 items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange rounded-full filter blur-3xl opacity-30 translate-x-20 -translate-y-20"></div>
            
            <div className="flex-1 relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold bg-brand-pink text-white uppercase tracking-wider mb-4">
                <Crown className="w-3.5 h-3.5 fill-current" /> Exclusivos del Local
              </span>
              <h3 className="text-3xl md:text-4xl font-serif font-black text-brand-text mb-4">
                Reino Mora & L'elefantino
              </h3>
              <p className="text-[#6B5E53] font-sans leading-relaxed text-base mb-6">
                Representamos con orgullo las firmas más selectas del sector de moda infantil. Estas marcas traen un concepto de diseño europeo y confección artesanal que transforman el vestuario de los recién nacidos y niños en piezas de colección.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-brand-mint/40 border border-brand-mint/20 px-4 py-2 rounded-full text-xs font-bold text-brand-text">
                  ✨ Algodón Pima Prémium
                </span>
                <span className="bg-brand-lime/40 border border-brand-lime/20 px-4 py-2 rounded-full text-xs font-bold text-brand-text">
                  🌸 Ajuares y Sastrería de Cuna
                </span>
                <span className="bg-brand-orange/40 border border-brand-orange/20 px-4 py-2 rounded-full text-xs font-bold text-brand-text">
                  👶 Diseños Únicos en Galeria Libertad
                </span>
              </div>
            </div>

            <div className="flex-shrink-0 w-full lg:w-80 grid grid-cols-1 gap-4 relative z-10">
              {BRANDS.slice(0, 2).map((brand) => (
                <div key={brand.id} className="bg-white/95 rounded-[24px] p-5 border border-brand-peach-pink/30 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-serif font-black text-brand-text">{brand.name}</h4>
                    <span className="text-[10px] font-bold text-brand-pink px-2.5 py-0.5 bg-brand-peach-pink/20 rounded-md uppercase tracking-wider">
                      {brand.badge}
                    </span>
                  </div>
                  <p className="text-brand-pink text-xs font-extrabold mb-2">{brand.style}</p>
                  <p className="text-[#6B5E53] text-xs font-sans leading-relaxed">{brand.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary smaller brand cards: Gepetto, Brotecitos, Cari */}
          {BRANDS.slice(2).map((brand, index) => {
            const colors = ["bg-brand-orange/30 text-[#D56A15]", "bg-brand-lime/40 text-emerald-700", "bg-brand-lilac/30 text-[#6C78B0]"];
            const icons = [
              <Stars className="w-5 h-5" />, 
              <Gem className="w-5 h-5" />, 
              <Gift className="w-5 h-5" />
            ];
            return (
              <motion.div
                key={brand.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-[32px] p-6 border border-brand-peach-pink/30 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl ${colors[index]}`}>
                      {icons[index]}
                    </div>
                    <span className="text-[10px] font-bold text-brand-text tracking-wider uppercase px-2.5 py-1 bg-brand-bg rounded-md">
                      {brand.badge}
                    </span>
                  </div>
                  <h4 className="text-xl font-serif font-black text-brand-text mb-1">{brand.name}</h4>
                  <p className="text-brand-pink text-xs font-extrabold mb-3">{brand.style}</p>
                  <p className="text-[#6B5E53] text-sm leading-relaxed font-sans">{brand.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-brand-bg flex items-center justify-between">
                  <span className="text-xs text-brand-pink font-extrabold">Talles desde Prematuro a 8 años</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
