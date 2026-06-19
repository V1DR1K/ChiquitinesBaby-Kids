import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Check, ChevronRight } from 'lucide-react';
import { ProductCatalogItem } from '../types';
import CLOTHES_IMG from '../assets/images/baby_garments_1781707386010.jpg';
import FOOTWEAR_AND_BAG_IMG from '../assets/images/shoes_and_bag_1781707399010.jpg';

const CATALOG_ITEMS: ProductCatalogItem[] = [
  {
    id: '1', name: 'Ajuar de Nacimiento Premium', category: 'clothing', brand: 'Brotecitos', tag: 'Primer Ajuar',
    description: 'Ajuar de bienvenida confeccionado en dócil algodón pima. Incluye batita, ranita, gorrito, mitones y manta de algodón doble faz con finas terminaciones en picot. Se puede anexar body, babero y babita en el mismo estampado.',
    sizes: ['Prematuro', 'Talle 0', 'Talle 1'],
    features: ['Algodón hipoalergénico', 'Costuras planas invisibles', 'Terminaciones de picot', 'Estampas para nena, varón y unisex'],
  },
  {
    id: '2', name: 'Ajuares sin Manta', category: 'clothing', brand: 'Brotecitos', tag: 'Algodón orgánico',
    description: 'Conjuntos de algodón orgánico. Opciones: body, ranita y gorro en talles 0 y 1; o batita, ranita y gorro en talle 0.',
    sizes: ['Talle 0', 'Talle 1'],
    features: ['Algodón orgánico certificado', 'Broches reforzados con protección para la piel', 'Súper suaves y cómodos'],
  },
  {
    id: '3', name: 'Conjuntos y Enteritos de Plush', category: 'clothing', brand: "Brotecitos / Reino Mora / L'elefantino", tag: 'Plush',
    description: 'Campera o buzo de plush supersuave con pantalón o ranita al tono. Enteritos con cierre delantero o trasero y pañalero. Excelente abrigo para los primeros meses de frío.',
    sizes: ['0', '1', '3M', '6M', '9M'],
    features: ['Plush tradicional y bifaz', 'Broches de presión reforzados', 'Súper abrigado y tierno'],
  },
  {
    id: '4', name: 'Vestidos y Jumper', category: 'clothing', brand: "Brotecitos / Reino Mora / Cari / L'elefantino", tag: 'Vestidos',
    description: 'Vestidos infantiles en tusor, algodón, jean y plush. Variedad de telas y estampas según la temporada. Ideales para eventos, cumpleaños y paseos.',
    sizes: ['0-3M', '3-6M', '9-12M', '18-24M', '2', '4', '6', '8 años'],
    features: ['Bordados artesanales únicos', 'Botones de nácar, cuellos y excelentes terminaciones', 'Algodón prelavado y fácil de lavar'],
  },
  {
    id: '5', name: 'Remeras', category: 'clothing', brand: 'Gepetto', tag: 'Vestimenta urbana',
    description: 'Confeccionadas con telas prelavadas y estampas románticas o cancheras, con motivos acordes a la edad. Colores vibrantes y de gran durabilidad para conservar su aspecto lavado tras lavado.',
    sizes: ['1', '2', '3', '4', '6', '8 años'],
    features: ['Estampas soñadas y botones en el cuello para los más pequeños', 'Algodones de primera calidad', 'Ideales para jugar al aire libre'],
  },
  {
    id: '6', name: 'Buzos y Pantalones de Frisa', category: 'clothing', brand: 'Gepetto', tag: 'Vestimenta urbana',
    description: 'Confeccionados con telas prelavadas y frisa premium, suave, abrigada y resistente. Su interior afelpado brinda máxima comodidad y excelente conservación del calor.',
    sizes: ['1', '2', '3', '4', '6', '8 años'],
    features: ['Estampas soñadas y botones en el cuello para los más pequeños', 'Frisa de primera calidad', 'Ideales para jugar al aire libre'],
  },
  {
    id: '7', name: 'Shorts, Leggings y Jeans', category: 'clothing', brand: 'Gepetto', tag: 'Vestimenta urbana',
    description: 'Variedad de telas y modelos: denim inteligente ultraelástico y gabardina elastizada en distintos colores.',
    sizes: ['1', '2', '3', '4', '6', '8 años'],
    features: ['Cinturas regulables', 'Bordados y estampas', 'Calce cómodo y moderno para todos los días'],
  },
  {
    id: '8', name: 'Zapatitos No Caminantes con Antideslizante', category: 'footwear', brand: 'Gorditoo', tag: 'Calzado no caminante',
    description: 'Zapatitos blandos y guillerminas confeccionados en cuero sintético ecológico, gamuza, plush o algodón, con suela antideslizante.',
    sizes: ['Talle 14', 'Talle 15', 'Talle 16', 'Talle 17'],
    features: ['Suela blanda antideslizante', 'Velcro regulable o cordones', 'Horma cómoda para los dedos y empeines altos'],
  },
  {
    id: '9', name: 'Zapatos, Guillerminas y Botas', category: 'footwear', brand: 'Berni / Pancita', tag: 'Calzado caminante',
    description: 'Calzado infantil en cuero ecológico o gamuza, reforzado en punta y talón, con plantilla acolchada anatómica para acompañar sus primeros pasos firmes.',
    sizes: ['Talle 18 al 26'],
    features: ['Hebilla o velcro en calzado bajo; cierre o velcro en botas', 'Plantilla extraíble', 'Excelente flexibilidad'],
  },
  {
    id: '10', name: 'Juego de Sábanas', category: 'linen', brand: 'Las Floritas', tag: 'Sueño confortable',
    description: 'Juego completo de tres piezas: sábana superior, ajustable y funda de almohada, en batista de algodón y poliéster. Telas lisas o estampadas con detalles de guarda y puntilla.',
    sizes: ['Catre', 'Colecho', 'Cuna', 'Practicuna'],
    features: ['Algodón y poliéster', 'Apto para lavado intensivo a máquina', 'Hilos hipoalergénicos'],
  },
  {
    id: '11', name: 'Toallones, Cambiadores, Babitas, Almohadones y Muñecos', category: 'linen', brand: 'Las Floritas / Concepto Deco Bebés', tag: 'Blanquería',
    description: 'Confecciones en tusor, gasa, tejido doble felpa y algodón, diseñadas para mimar al bebé y cuidar su piel. Incluye cambiadores plegables acolchados, impermeables y lavables.',
    sizes: ['Único (0 a 3 años)'],
    features: ['Doble felpa ultraabsorbente', 'Algodones supersuaves', 'Todo pegado y cosido, sin piezas que puedan lastimar'],
  },
  {
    id: '12', name: 'Bolsos y Mochilas Maternales', category: 'bags', brand: 'Las Floritas', tag: 'Organización maternal',
    description: 'Fabricados en cuero sintético impermeable de alta resistencia, con costuras reforzadas y múltiples bolsillos térmicos interiores para mamaderas.',
    sizes: ['Tamaño único'],
    features: ['Incluye cambiador acolchado', 'Ganchos universales para cochecito', 'Bolsillo térmico para conservar la temperatura'],
  },
];

const HIGHLIGHTS = [
  { title: 'Telas Orgánicas', subtitle: 'Cuidado natural en cada hilado', description: 'Prendas de algodón orgánico certificado, especiales para prematuros desde los 700 g y bebés.', action: 'Ver ropa de diseño', tab: 'clothing' as const, image: CLOTHES_IMG },
  { title: 'Vestimenta urbana', subtitle: 'Comodidad para todos los días', description: 'Telas prelavadas, resistentes y duraderas, con calce cómodo y moderno para niños de 12 meses a 8 años.', action: 'Ver ropa urbana', tab: 'clothing' as const, image: CLOTHES_IMG },
  { title: 'Calzados', subtitle: 'Del talle 14 al 26', description: 'Modelos antideslizantes para no caminantes del 14 al 17 y anatómicos para caminantes del 18 al 26.', action: 'Explorar calzado', tab: 'footwear' as const, image: FOOTWEAR_AND_BAG_IMG },
  { title: 'Bolsos, mochilas y blanquería', subtitle: 'Todo para acompañar al bebé', description: 'Bolsos y mochilas funcionales, sábanas, cambiadores, toallones y accesorios para tener todo a mano.', action: 'Explorar bolsos y accesorios', tab: 'accessories' as const, image: FOOTWEAR_AND_BAG_IMG },
];

export default function CatalogSection({ onSelectProduct }: { onSelectProduct: (product: ProductCatalogItem) => void }) {
  const [activeTab, setActiveTab] = useState<'all' | 'accessories' | ProductCatalogItem['category']>('all');
  const filteredItems = activeTab === 'all'
    ? CATALOG_ITEMS
    : activeTab === 'accessories'
      ? CATALOG_ITEMS.filter((item) => item.category === 'linen' || item.category === 'bags')
      : CATALOG_ITEMS.filter((item) => item.category === activeTab);
  const tabs = [
    { id: 'all', label: 'Todo el Catálogo' }, { id: 'clothing', label: 'Vestimenta' },
    { id: 'footwear', label: 'Calzado (14 al 26)' }, { id: 'linen', label: 'Blanquería' },
    { id: 'bags', label: 'Bolsos & Mochilas' },
  ] as const;

  return (
    <section id="catalogo" className="py-20 px-4 bg-brand-bg/60 border-y border-brand-peach-pink/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-brand-mint text-brand-text mb-3"><ShoppingBag className="w-3.5 h-3.5 text-brand-pink fill-current" /> Explorá nuestra variedad</span>
          <h2 className="text-3xl md:text-5xl font-serif font-black tracking-tight text-brand-text mb-4">Prendas y Artículos en Exhibición</h2>
          <p className="text-[#6B5E53] text-base max-w-xl mx-auto">Desarrollamos líneas desde prematuros hasta los 8 años, junto con accesorios diseñados para simplificar y embellecer la maternidad.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-extrabold transition-all uppercase tracking-wide cursor-pointer ${activeTab === tab.id ? 'bg-brand-pink text-white shadow-md scale-102' : 'bg-white hover:bg-brand-peach-pink/20 text-[#6B5E53] border border-brand-peach-pink/30'}`}>{tab.label}</button>)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {HIGHLIGHTS.map((highlight) => <div key={highlight.title} className="relative h-64 rounded-[32px] overflow-hidden shadow-sm border border-brand-peach-pink/30 group flex items-end">
            <img src={highlight.image} alt={highlight.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/50 to-transparent" />
            <div className="relative p-6 z-10 text-white"><span className="text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 bg-brand-pink rounded mb-2 inline-block">{highlight.title}</span><h3 className="text-xl md:text-2xl font-serif font-bold mb-1">{highlight.subtitle}</h3><p className="text-white/90 text-xs md:text-sm max-w-md mb-3">{highlight.description}</p><button onClick={() => setActiveTab(highlight.tab)} className="text-xs font-semibold underline text-brand-peach-pink hover:text-white transition-colors flex items-center gap-1 cursor-pointer">{highlight.action} <ChevronRight className="w-3.5 h-3.5" /></button></div>
          </div>)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => <motion.article layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} key={item.id} className="bg-white rounded-[32px] p-6 border border-brand-peach-pink/30 shadow-xs flex flex-col justify-between hover:shadow-md transition-all relative">
              <span className="absolute -top-2.5 left-5 bg-brand-pink text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow-sm">{item.id}. {item.tag}</span>
              <div><div className="flex justify-between items-start gap-3 mb-3 pt-2"><span className="text-[10px] uppercase font-bold tracking-widest text-[#7A6C61]">{item.category === 'clothing' ? 'Vestimenta' : item.category === 'footwear' ? 'Calzado' : item.category === 'linen' ? 'Blanquería' : 'Maternidad'}</span><span className="text-xs font-serif font-bold text-brand-pink text-right">{item.brand}</span></div>
              <h3 className="text-lg font-serif font-black text-brand-text mb-2">{item.name}</h3><p className="text-[#6B5E53] text-xs leading-relaxed mb-4">{item.description}</p>
              <div className="mb-4"><strong className="text-[11px] block mb-1">Talles disponibles:</strong><div className="flex flex-wrap gap-1">{item.sizes.map((size) => <span key={size} className="text-[10px] px-2.5 py-0.5 font-bold bg-brand-bg rounded-md border border-brand-peach-pink/20">{size}</span>)}</div></div>
              <div className="space-y-1.5 mb-5">{item.features.map((feature) => <div key={feature} className="flex gap-2 text-xs text-[#6B5E53]"><Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" /><span>{feature}</span></div>)}</div></div>
              <button onClick={() => onSelectProduct(item)} className="w-full py-2.5 rounded-xl bg-brand-text text-white hover:bg-brand-pink text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer">Consultar por WhatsApp</button>
            </motion.article>)}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
