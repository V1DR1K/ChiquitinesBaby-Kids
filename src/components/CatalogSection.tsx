import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Sparkles, Check, ChevronRight, HelpCircle } from 'lucide-react';
import { ProductCatalogItem } from '../types';

// Let's import our custom-generated high fidelity image paths!
const CLOTHES_IMG = '/src/assets/images/baby_garments_1781707386010.jpg';
const FOOTWEAR_AND_BAG_IMG = '/src/assets/images/shoes_and_bag_1781707399010.jpg';

const CATALOG_ITEMS: ProductCatalogItem[] = [
  // CLOTHING
  {
    id: 'c1',
    name: 'Ajuar de Nacimiento Premium',
    category: 'clothing',
    brand: "L'elefantino",
    description: 'Ajuar de bienvenida confeccionado en dócil algodón pima. Incluye batita, ranita, gorrito, babitas y manta de algodón doble faz con finas terminaciones en picot.',
    sizes: ['RN', '1-3M'],
    features: ['Algodón hipoalergénico', 'Costuras planas invisibles', 'Color crudo, rosa pastel, celeste o verde menta'],
    tag: 'Recomendado Primer Ajuar'
  },
  {
    id: 'c2',
    name: 'Vestido del Reino Mora',
    category: 'clothing',
    brand: 'Reino Mora',
    description: 'Espectacular vestido infantil en lienzo de algodón con pechera bordada a mano con flores rococo y delicadas mangas globo. Ideal para eventos y cumpleaños.',
    sizes: ['3-6M', '9-12M', '18-24M', '3 años', '4 años'],
    features: ['Bordado artesanal único', 'Botones de nácar en la espalda', 'Fácil de lavar, algodón pre-lavado'],
    tag: 'Colección de Autor'
  },
  {
    id: 'c3',
    name: 'Conjunto de Abrigo Brotecitos',
    category: 'clothing',
    brand: 'Brotecitos',
    description: 'Saco tejido en lana de dralón supersuave y pantalón básico al tono. Excelente abrigo intermedio para los primeros meses del bebé sin picazón en la piel.',
    sizes: ['Prematuro', 'RN', '1-3M', '3-6M'],
    features: ['Dralón hipoalergénico certificado', 'Broches de presión reforzados', 'Súper abrigado y tierno'],
  },
  {
    id: 'c4',
    name: 'Enterito Jean con Botones Gepetto',
    category: 'clothing',
    brand: 'Gepetto',
    description: 'Enterito jardinero de jean ultra flexible con broches inferiores para facilitar el cambiazzo de pañal y tirantes regulables para expandirse con su crecimiento.',
    sizes: ['1 año', '2 años', '3 años', '4 años', '6 años', '8 años'],
    features: ['Denim inteligente ultra elástico', 'Tiradores ajustables de metal', 'Ideal para jugar al aire libre'],
    tag: 'Súper Resistente'
  },

  // FOOTWEAR
  {
    id: 'f1',
    name: 'Zapatitos No Caminantes con Antideslizante',
    category: 'footwear',
    brand: 'Calzado Propio',
    description: 'Zapatitos blandos y guillotinas de media estación confeccionados en cuero sintético ecológico blando y gamuza con suela de goma microporosa antideslizante de seguridad.',
    sizes: ['Talle 14', 'Talle 15', 'Talle 16', 'Talle 17'],
    features: ['Suela blanda de seguridad con grip', 'Cierre con velcro regulable', 'Horma adaptada para no oprimir dedos'],
    tag: 'Colección No Caminantes'
  },
  {
    id: 'f2',
    name: 'Zapatilla Urbana Caminante',
    category: 'footwear',
    brand: 'Gepetto Calzados',
    description: 'Zapatilla infantil moderna y canchera de lona lona y cuero de descarne, reforzada en punta y talón, con plantilla acolchada anatómica para acompañar sus primeros pasos firmes.',
    sizes: ['Talle 18', 'Talle 20', 'Talle 22', 'Talle 24', 'Talle 26'],
    features: ['Tejido transpirable de alta tracción', 'Plantilla con arco anatómico extraíble', 'Excelente flexibilidad de flexión'],
    tag: 'Primeros Pasos - Caminantes'
  },

  // LINEN
  {
    id: 'l1',
    name: 'Juego de Sábanas de Cuna Toque de Seda',
    category: 'linen',
    brand: 'Blanquería Artesanal',
    description: 'Juego completo de tres piezas (sabana superior, ajustable y funda de almohada) en batista de algodón de 180 hilos peinado. Diseños bordados de estrellas y animalitos.',
    sizes: ['Moisés / Catre', 'Cuna Charriot', 'Cuna Funcional'],
    features: ['Algodón puro extra suave', 'Apto lavado a máquina intensivo', 'Hilos hipoalergénicos'],
    tag: 'Sueño Confortable'
  },
  {
    id: 'l2',
    name: 'Toallón de Baño con Capucha Bordada',
    category: 'linen',
    brand: 'Blanquería Artesanal',
    description: 'Toallón extra grande en toalla premium doble felpa de algodón de excelente absorción, con capucha forrada con gasa de algodón estampada para proteger la cabecita mojada.',
    sizes: ['Único (0 a 3 años)'],
    features: ['Tejido doble felpa ultra absorbente', 'Esquinas reforzadas antirraspado', 'Medida ideal: 85 x 85 cm'],
  },
  {
    id: 'l3',
    name: 'Cambiador Portátil Impermeable',
    category: 'linen',
    brand: 'Blanquería Artesanal',
    description: 'Práctico cambiador plegable de bolso, acolchado con guata siliconada, con interior impermeable plástico no-tóxico lavable de alta densidad y solapa porta pañales.',
    sizes: ['Plegado: 25x18cm', 'Abierto: 60x35cm'],
    features: ['Fácil limpieza con paño húmedo', 'Modelos coordinados con bolsos', 'Broches de presión broche seguro'],
    tag: 'Súper Práctico'
  },

  // MATERNAL BAGS
  {
    id: 'b1',
    name: 'Bolso Maternal de Vestir de Alta Gama',
    category: 'bags',
    brand: 'Maternal Premium',
    description: 'Elegante bolso de maternidad fabricado en cuero sintético texturado de alta resistencia impermeable, costuras reforzadas, múltiples bolsillos térmicos interiores para mamaderas.',
    sizes: ['Capacidad: 22 Litros'],
    features: ['Incluye cambiador acolchado', 'Ganchos universales para cochecito', 'Termo-bolsillo para mantener temperatura'],
    tag: 'Lo Más Buscado'
  },
  {
    id: 'b2',
    name: 'Mochila Maternal de Viaje de Cordura',
    category: 'bags',
    brand: 'Maternal Premium',
    description: 'La mochila de maternidad más cómoda y moderna disponible en el mercado. Fabricada en cordura premium lavable, cierres dorados de alta resistencia, compartimento oculto de seguridad.',
    sizes: ['Capacidad: 18 Litros'],
    features: ['Compartimentos organizadores de pañales', 'USB integrado para powerbank', 'Correas de hombro ergonómicas de red'],
  }
];

export default function CatalogSection({ onSelectProduct }: { onSelectProduct: (productName: string) => void }) {
  const [activeTab, setActiveTab] = useState<'all' | 'clothing' | 'footwear' | 'linen' | 'bags'>('all');

  const filteredItems = activeTab === 'all' 
    ? CATALOG_ITEMS 
    : CATALOG_ITEMS.filter(item => item.category === activeTab);

  const tabs = [
    { id: 'all', label: 'Todo el Catálogo' },
    { id: 'clothing', label: 'Ropa de Pequeños' },
    { id: 'footwear', label: 'Calzado (14 al 26)' },
    { id: 'linen', label: 'Blanquería de Cuna' },
    { id: 'bags', label: 'Bolsos & Mochilas' },
  ] as const;

  return (
    <section id="catalogo" className="py-20 px-4 bg-brand-bg/60 border-y border-brand-peach-pink/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-brand-mint text-brand-text mb-3">
            <ShoppingBag className="w-3.5 h-3.5 text-brand-pink fill-current" />
            Explorá nuestra variedad
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-black tracking-tight text-brand-text mb-4">
            Prendas y Artículos en Exhibición
          </h2>
          <p className="text-[#6B5E53] text-base max-w-xl mx-auto font-sans">
            Desarrollamos líneas desde prematuros hasta los 8 años de edad, junto con accesorios diseñados para simplificar y embellecer la maternidad.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-extrabold transition-all uppercase tracking-wide cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-brand-pink text-white shadow-md scale-102'
                  : 'bg-white hover:bg-brand-peach-pink/20 text-[#6B5E53] border border-brand-peach-pink/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Highlight Banners with Custom AI Generated Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Aesthetic Banner 1: Clothes Highlight */}
          <div className="relative h-64 rounded-[32px] overflow-hidden shadow-sm border border-brand-peach-pink/30 group flex items-end">
            <img 
              src={CLOTHES_IMG} 
              alt="Muestra de Algodón Brotecitos" 
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-950/45 to-transparent"></div>
            <div className="relative p-6 z-10 text-white">
              <span className="text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 bg-brand-pink rounded text-white mb-2 inline-block">
                Telas Orgánicas
              </span>
              <h3 className="text-xl md:text-2xl font-serif font-bold mb-1">Cuidado natural en cada hilado</h3>
              <p className="text-white/85 text-xs md:text-sm max-w-sm mb-3">
                Prendas tejidas y algodón peinado especial para prematuros y bebés con piel hipoalergénica.
              </p>
              <button 
                onClick={() => setActiveTab('clothing')}
                className="text-xs font-semibold underline text-brand-peach-pink hover:text-brand-pink transition-colors flex items-center gap-1 cursor-pointer"
              >
                Ver ropa de diseño <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Aesthetic Banner 2: Footwear & Diaper Bags Highlight */}
          <div className="relative h-64 rounded-[32px] overflow-hidden shadow-sm border border-brand-peach-pink/30 group flex items-end">
            <img 
              src={FOOTWEAR_AND_BAG_IMG} 
              alt="Muestra de Calzado y Bolsos Maternal" 
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-950/45 to-transparent"></div>
            <div className="relative p-6 z-10 text-white">
              <span className="text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 bg-brand-orange text-brand-text rounded mb-2 inline-block">
                Pasos y Accesorios
              </span>
              <h3 className="text-xl md:text-2xl font-serif font-bold mb-1">Del Talle 14 al 26 y Bolsos Chic</h3>
              <p className="text-white/85 text-xs md:text-sm max-w-sm mb-3">
                Calzado con gomas antideslizantes de seguridad y mochilas de maternidad súper funcionales de alta cordura.
              </p>
              <button 
                onClick={() => setActiveTab('footwear')}
                className="text-xs font-semibold underline text-brand-orange hover:text-brand-pink transition-colors flex items-center gap-1 cursor-pointer"
              >
                Explorar calzado y mochilas <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Catalog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                key={item.id}
                className="bg-white rounded-[32px] p-6 border border-brand-peach-pink/30 shadow-xs flex flex-col justify-between hover:shadow-md hover:scale-[1.01] transition-all relative"
              >
                {item.tag && (
                  <span className="absolute -top-2.5 left-5 bg-brand-pink text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow-sm">
                    {item.tag}
                  </span>
                )}
                
                <div>
                  <div className="flex justify-between items-start gap-2 mb-3">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#7A6C61]">
                      {item.category === 'clothing' ? 'Prenda' : 
                       item.category === 'footwear' ? 'Calzado' : 
                       item.category === 'linen' ? 'Blanquería' : 'Maternidad'}
                    </span>
                    {item.brand && (
                      <span className="text-xs font-serif font-bold text-brand-pink">
                        {item.brand}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-serif font-black text-brand-text mb-2">{item.name}</h3>
                  <p className="text-[#6B5E53] text-xs leading-relaxed mb-4 font-sans">{item.description}</p>
                  
                  <div className="mb-4">
                    <strong className="text-[11px] block font-bold text-[#4A4A4A] mb-1">Talles Disponibles:</strong>
                    <div className="flex flex-wrap gap-1">
                      {item.sizes.map((sz) => (
                        <span key={sz} className="text-[10px] px-2.5 py-0.5 font-bold bg-brand-bg rounded-md text-brand-text border border-brand-peach-pink/20">
                          {sz}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-brand-bg pt-4 mt-4">
                  <span className="text-[11px] block font-bold text-[#4a4a4a] mb-1.5 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-brand-pink fill-current" /> Características destacadas
                  </span>
                  <ul className="space-y-1 mb-4">
                    {item.features.map((feat, i) => (
                      <li key={i} className="text-[11px] text-[#6B5E53] flex items-start gap-1.5 font-sans">
                        <Check className="w-3.5 h-3.5 text-brand-pink mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => onSelectProduct(item.name)}
                    className="w-full text-center block text-xs font-extrabold py-3 bg-brand-peach-pink hover:bg-brand-pink text-white rounded-2xl cursor-pointer shadow-xs hover:shadow-md transition-all uppercase tracking-wider"
                  >
                    Consultar por WhatsApp
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Callout of sizing assistance */}
        <div className="mt-12 bg-brand-lime/20 border-2 border-brand-lime/30 rounded-[32px] p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-brand-lime/30 text-brand-pink">
              <HelpCircle className="w-6 h-6 text-brand-pink" />
            </div>
            <div>
              <h4 className="text-base font-serif font-black text-brand-text">¿Estás buscando un regalo especial y temés equivocarte de tamaño?</h4>
              <p className="text-xs text-gray-500 font-sans mt-0.5">Utilizá nuestro Probador de Talles Virtual basado en la edad estimada, altura y de piecito caminante o no-caminante.</p>
            </div>
          </div>
          <a 
            href="#guia-talles"
            className="flex-shrink-0 text-xs font-extrabold px-6 py-3.5 rounded-full bg-brand-pink hover:bg-[#FF737D] text-white transition-all uppercase tracking-wider shadow-sm"
          >
            Probar talle ahora
          </a>
        </div>
      </div>
    </section>
  );
}
