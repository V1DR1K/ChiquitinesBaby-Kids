import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Ruler, Sparkles, Footprints, FlameKindling, Info } from 'lucide-react';
import { SizeRecommendation } from '../types';

interface StageData {
  label: string;
  clothingSize: string;
  minHeight: string;
  maxHeight: string;
  shoeSize: string;
  shoeType: 'No Caminante (con Antideslizante)' | 'Caminante' | 'No caminante / Caminante' | 'No aplica';
  notes: string;
}

const AGE_STAGES: StageData[] = [
  {
    label: 'Prematuro',
    clothingSize: 'Talle 00 / Prematuro',
    minHeight: '40 cm',
    maxHeight: '48 cm',
    shoeSize: 'No aplica',
    shoeType: 'No aplica',
    notes: 'Prendas ultra suaves con costuras planas diseñadas especialmente para pieles extremadamente delicadas.',
  },
  {
    label: 'Recién Nacido (0-1 M)',
    clothingSize: 'Talle 0 / RN',
    minHeight: '48 cm',
    maxHeight: '54 cm',
    shoeSize: 'Talle 14',
    shoeType: 'No Caminante (con Antideslizante)',
    notes: 'Ropa fácil de mudar con broches hipoalergénicos. Medias y calzado talle 14 para mantener piecitos abrigados.',
  },
  {
    label: '1 a 3 meses',
    clothingSize: 'Talle 3M',
    minHeight: '54 cm',
    maxHeight: '62 cm',
    shoeSize: 'Talle 15 - 16',
    shoeType: 'No Caminante (con Antideslizante)',
    notes: 'Prendas cómodas para mayor libertad de movimiento. Calzado de tela súper suave y antideslizante.',
  },
  {
    label: '3 a 6 meses',
    clothingSize: 'Talle 6M',
    minHeight: '62 cm',
    maxHeight: '68 cm',
    shoeSize: 'Talle 16 - 17',
    shoeType: 'No Caminante (con Antideslizante)',
    notes: 'Ideal para la etapa donde comienzan a girar. Los calzados antideslizantes de talle 17 asisten en su motricidad.',
  },
  {
    label: '6 a 12 meses',
    clothingSize: 'Talle 9M - 12M',
    minHeight: '68 cm',
    maxHeight: '76 cm',
    shoeSize: 'Talle 17 no caminante / Talle 18 caminante',
    shoeType: 'No caminante / Caminante',
    notes: 'Etapa de gateo y primeros intentos de pararse. Cambiadores portátiles y toallones con capucha son indispensables ahora.',
  },
  {
    label: '12 a 18 meses',
    clothingSize: 'Talle 18M',
    minHeight: '76 cm',
    maxHeight: '82 cm',
    shoeSize: 'Talle 18 - 20',
    shoeType: 'Caminante',
    notes: '¡Primeros pasos! Calzado de caminante flexible de talle 18 al 20, con suela segura para explorar el mundo.',
  },
  {
    label: '18 a 24 meses',
    clothingSize: 'Talle 24M / 2 años',
    minHeight: '82 cm',
    maxHeight: '88 cm',
    shoeSize: 'Talle 21 - 22',
    shoeType: 'Caminante',
    notes: 'Exploradores constantes. Telas resistentes de algodón y calzado con mayor soporte y flexibilidad.',
  },
  {
    label: '2 a 3 años',
    clothingSize: 'Talle 24 / 36 meses',
    minHeight: '88 cm',
    maxHeight: '98 cm',
    shoeSize: 'Talle 22 - 23',
    shoeType: 'Caminante',
    notes: 'Mayor independencia al vestirse. Camperitas con cierre delantero y pantalones con cintura elastizada son ideales para el jardín o los paseos.',
  },
  {
    label: '4 a 5 años',
    clothingSize: 'Talle 48 meses / 6 años',
    minHeight: '98 cm',
    maxHeight: '110 cm',
    shoeSize: 'Talle 24 - 25',
    shoeType: 'Caminante',
    notes: 'Prendas con estampas divertidas, costuras súper reforzadas para soportar todas sus aventuras de juego continuo.',
  },
  {
    label: '5 a 6 años',
    clothingSize: 'Talle 6',
    minHeight: '110 cm',
    maxHeight: '116 cm',
    shoeSize: 'Talle 26',
    shoeType: 'Caminante',
    notes: 'Espacio para correr y moverse. Calzado duradero y prendas transpirables de Reino Mora y Gepetto.',
  },
  {
    label: '7 a 8 años',
    clothingSize: 'Talle 8',
    minHeight: '116 cm',
    maxHeight: '128 cm',
    shoeSize: 'No aplica',
    shoeType: 'No aplica',
    notes: 'Nuestra medida límite. Vestimenta moderna que combina el juego con un estilo infantil único y fresco. Ropa de vestir ideal para eventos.',
  }
];

export default function SizeCalculator() {
  const [selectedStageIndex, setSelectedStageIndex] = useState<number>(1); // Default to Recién Nacido

  const currentStage = AGE_STAGES[selectedStageIndex];

  return (
    <section id="guia-talles" className="py-20 px-4 bg-brand-bg/40 border-b border-brand-peach-pink/20 relative overflow-hidden">
      {/* Background soft shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-mint rounded-full filter blur-3xl opacity-40 -translate-x-12 -translate-y-12"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand-peach-pink rounded-full filter blur-3xl opacity-40 translate-x-12 translate-y-12"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-brand-mint text-brand-text mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-pink fill-current" />
            Herramienta Interactiva
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-black tracking-tight text-brand-text mb-4">
            Probador de Talles Virtual
          </h2>
          <p className="text-[#6B5E53] text-base max-w-xl mx-auto font-sans leading-relaxed">
            ¿Tenés dudas sobre cuál es el talle indicado para regalar o para tu peque? Seleccioná la edad sugerida para estimar sus medidas al instante.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Left panel: Selector list */}
          <div className="md:col-span-12 lg:col-span-5 bg-white rounded-[32px] p-5 border border-brand-peach-pink/30 shadow-xs flex flex-col justify-between max-h-[460px] overflow-y-auto">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#7A6C61] mb-3 flex items-center gap-1.5">
              <Ruler className="w-4 h-4 text-brand-pink" /> Selecciona la Edad
            </h3>
            <div className="space-y-1.5 pr-1">
              {AGE_STAGES.map((stage, i) => (
                <button
                  key={stage.label}
                  id={`stage-btn-${i}`}
                  onClick={() => setSelectedStageIndex(i)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center justify-between cursor-pointer ${
                    selectedStageIndex === i
                      ? 'bg-brand-pink text-white shadow-sm scale-102'
                      : 'hover:bg-brand-peach-pink/15 text-[#6B5E53]'
                  }`}
                >
                  <span>{stage.label}</span>
                  {selectedStageIndex === i && (
                    <motion.div layoutId="activeSparkle" className="w-1.5 h-1.5 bg-white rounded-full"></motion.div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right panel: Details Card */}
          <div className="md:col-span-12 lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedStageIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-[32px] p-6 md:p-8 border border-brand-peach-pink/30 shadow-xs flex flex-col justify-between h-full relative"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-brand-bg pb-4 mb-6">
                    <div>
                      <p className="text-[10px] font-extrabold text-brand-pink uppercase tracking-widest">Talles Estimados Para</p>
                      <h4 className="text-2xl font-serif font-black text-brand-text">{currentStage.label}</h4>
                    </div>
                    <div className="w-12 h-12 bg-brand-peach-pink/20 rounded-2xl flex items-center justify-center text-brand-pink">
                      <Footprints className="w-6 h-6 fill-current text-brand-pink" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {/* Clothing box */}
                    <div className="bg-brand-peach-pink/10 rounded-2xl p-4 border border-brand-peach-pink/20">
                      <span className="text-[10px] text-[#7A6C61] font-bold block mb-1 uppercase tracking-wider">Talle de Ropa</span>
                      <strong className="text-lg text-brand-text font-black flex items-center gap-1.5 font-serif">
                        {currentStage.clothingSize}
                      </strong>
                      <span className="text-xs text-[#6B5E53] block mt-1.5 font-sans">
                        Altura estimada: <span className="font-extrabold text-brand-text">{currentStage.minHeight} a {currentStage.maxHeight}</span>
                      </span>
                    </div>

                    {/* Shoe box */}
                    <div className="bg-brand-peach-pink/10 rounded-2xl p-4 border border-brand-peach-pink/20">
                      <span className="text-[10px] text-[#7A6C61] font-bold block mb-1 uppercase tracking-wider">Calzado Recomendado</span>
                      <strong className="text-lg text-brand-text font-black font-serif">{currentStage.shoeSize}</strong>
                      <span className="inline-flex mt-1.5 items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black bg-brand-lime text-emerald-800">
                        {currentStage.shoeType}
                      </span>
                    </div>
                  </div>

                  {/* Dynamic Tip Info */}
                  <div className="bg-brand-mint/40 border border-brand-mint/50 rounded-2xl p-4 flex gap-3 text-sm text-brand-text mb-6 shadow-xs">
                    <Info className="w-5 h-5 flex-shrink-0 text-brand-pink mt-0.5 fill-current text-white" />
                    <p className="font-sans font-medium leading-relaxed">{currentStage.notes}</p>
                  </div>
                </div>

                <div className="border-t border-brand-bg pt-4 mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <p className="text-[10px] text-[#7A6C61] font-sans">
                    * Los talles son de referencia comercial. Cada bebé crece a su ritmo.
                  </p>
                  <a
                    href="#contacto"
                    className="inline-flex items-center text-xs font-extrabold text-brand-pink hover:text-[#FF737D] transition-colors uppercase tracking-wider"
                  >
                    Consultar disponibilidad →
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
