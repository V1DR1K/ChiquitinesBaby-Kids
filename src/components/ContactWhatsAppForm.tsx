import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, MessageCircleCode, CheckCircle2, MessageCircle, AlertCircle, Instagram } from 'lucide-react';

interface ContactWhatsAppFormProps {
  initialProductInterest?: string;
  onClearInterest?: () => void;
}

export default function ContactWhatsAppForm({ initialProductInterest = '', onClearInterest }: ContactWhatsAppFormProps) {
  const [name, setName] = useState('');
  const [ageRange, setAgeRange] = useState('');
  const [interestScope, setInterestScope] = useState('general');
  const [customMessage, setCustomMessage] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('todas');
  const [isSuccess, setIsSuccess] = useState(false);

  // Default real WhatsApp number for Silvia: +54 9 341 604-4902
  const PHONE_NUMBER = '5493416044902'; 

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();

    let interestText = '';
    if (initialProductInterest) {
      interestText = `el artículo específico "${initialProductInterest}"`;
    } else {
      switch (interestScope) {
        case 'ropa': interestText = 'indumentaria de diseño'; break;
        case 'calzado': interestText = 'calcados de mi bebé'; break;
        case 'blanquería': interestText = 'artículos de blanquería de cuna'; break;
        case 'maternal': interestText = 'mochilas o bolsos maternales'; break;
        default: interestText = 'las colecciones exclusivas';
      }
    }

    const brandText = selectedBrand !== 'todas' ? ` (interés en la marca ${selectedBrand})` : '';

    const text = `¡Hola Silvia! Mi nombre es *${name || 'un cliente'}*.\n\n` +
      `Estuve visitando la landing page de la boutique y quería consultar por *${interestText}*${brandText}.\n` +
      `Mi peque tiene aproximadamente *${ageRange || 'no especificado'}*.\n` +
      (customMessage ? `\n*Consulta:* ${customMessage}\n` : '') +
      `\n¿Me podrías comentar si tenés stock o disponibilidad de talles? ¡Muchas gracias!`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodedText}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      // If we had initial product interest, let the parent component know we processed it
      if (onClearInterest) {
        onClearInterest();
      }
    }, 5000);
  };

  return (
    <section id="contacto" className="py-20 px-4 bg-brand-bg/30 relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-lime rounded-full filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-peach-pink rounded-full filter blur-3xl opacity-20 -z-10"></div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-[40px] border border-brand-peach-pink/30 shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
          
          {/* Informative Side of the Card */}
          <div className="md:col-span-5 bg-brand-text text-[#FCF6E4] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
            {/* Soft decorative background shape */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-pink/10 rounded-full filter blur-xl translate-x-12 -translate-y-12"></div>
            
            <div className="space-y-6 relative z-10">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-black bg-brand-pink text-white uppercase tracking-wider">
                Escribinos Directo
              </span>
              <h3 className="text-3xl font-serif font-black leading-tight text-white">
                ¿Buscás asesoramiento personalizado?
              </h3>
              <p className="text-white/80 text-sm leading-relaxed font-sans">
                A diferencia de los grandes hipermercados, Silvia te asesora personalmente sobre las colecciones completas, combinaciones de colores y guías de talles según el peso real de tu bebé.
              </p>
            </div>

            <div className="space-y-4 pt-10 relative z-10 font-sans text-xs text-white/90">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-brand-mint">
                  <MessageCircle className="w-4 h-4 fill-current text-brand-mint" />
                </div>
                <div>
                  <strong className="block text-white">Respuesta Ágil — Silvia</strong>
                  <span>341 6044902 • Lunes a Sábado</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-brand-pink">
                  <Instagram className="w-4 h-4 text-white" />
                </div>
                <div>
                  <a href="https://instagram.com/chiquitines_baby" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    <strong className="block text-white">Seguinos en Instagram</strong>
                    <span>@chiquitines_baby</span>
                  </a>
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex gap-2">
                <AlertCircle className="w-5 h-5 text-brand-pink flex-shrink-0 mt-0.5" />
                <span>
                 Si te interesa un artículo del catálogo, podés cliquear en su botón para cargar los datos automáticamente.
                </span>
              </div>
            </div>
          </div>

          {/* Practical Form Side */}
          <div className="md:col-span-7 p-8 md:p-10">
            <h4 className="text-xl font-serif font-black text-brand-text mb-6 flex items-center gap-2">
              <MessageCircleCode className="w-5 h-5 text-brand-pink" /> Armá tu consulta de WhatsApp
            </h4>

            {initialProductInterest && (
              <div className="bg-brand-mint text-brand-text border border-brand-mint/50 p-3 rounded-xl mb-6 flex items-center justify-between text-xs font-sans font-bold">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-brand-pink">Artículo:</span>
                  <span className="italic">"{initialProductInterest}"</span>
                </div>
                <button
                  onClick={onClearInterest}
                  className="text-[10px] font-black underline hover:text-brand-pink uppercase tracking-wider"
                >
                  Cambiar
                </button>
              </div>
            )}

            <form onSubmit={handleSend} className="space-y-4.5 font-sans">
              <div>
                <label className="block text-[10px] font-black text-brand-pink uppercase tracking-widest mb-1.5">Tu Nombre</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej: María Luz Fernández"
                  className="w-full px-4 py-2.5 rounded-xl border border-brand-peach-pink/30 bg-white text-sm text-brand-text focus:outline-hidden focus:ring-2 focus:ring-brand-pink transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-brand-pink uppercase tracking-widest mb-1.5">Edad o talle del peqe</label>
                  <input
                    type="text"
                    value={ageRange}
                    onChange={(e) => setAgeRange(e.target.value)}
                    placeholder="Ej: Recién Nacido / 4 años"
                    className="w-full px-4 py-2.5 rounded-xl border border-brand-peach-pink/30 bg-white text-sm text-brand-text focus:outline-hidden focus:ring-2 focus:ring-brand-pink transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black text-brand-pink uppercase tracking-widest mb-1.5">Marca exclusiva de interés</label>
                  <select
                     value={selectedBrand}
                     onChange={(e) => setSelectedBrand(e.target.value)}
                     className="w-full px-4 py-2.5 rounded-xl border border-brand-peach-pink/30 bg-white text-sm text-brand-text focus:outline-hidden focus:ring-2 focus:ring-brand-pink transition-all"
                  >
                    <option value="todas">Ver todas</option>
                    <option value="Reino Mora">Reino Mora (Romántica)</option>
                    <option value="L'elefantino">L'elefantino (Nacimiento)</option>
                    <option value="Gepetto">Gepetto (Paseos y Calzado)</option>
                    <option value="Brotecitos">Brotecitos (Prendas Nobles)</option>
                    <option value="Cari">Cari (Elegante Casual)</option>
                  </select>
                </div>
              </div>

              {!initialProductInterest && (
                <div>
                  <label className="block text-[10px] font-black text-brand-pink uppercase tracking-widest mb-1.5">Categoría consulta</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'general', val: 'General' },
                      { id: 'ropa', val: 'Ropa / Ajuar' },
                      { id: 'calzado', val: 'Calzado' },
                      { id: 'blanquería', val: 'Blanquería' }
                    ].map((cat) => (
                      <button
                        type="button"
                        key={cat.id}
                        onClick={() => setInterestScope(cat.id)}
                        className={`py-2 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                          interestScope === cat.id
                            ? 'bg-brand-pink border-brand-pink text-white shadow-xs'
                            : 'bg-white border-brand-peach-pink/30 text-gray-500 hover:bg-brand-peach-pink/10'
                        }`}
                      >
                        {cat.val}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <label className="block text-[10px] font-black text-brand-pink uppercase tracking-widest mb-1.5">Pregunta o detalle adicional (Opcional)</label>
                <textarea
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  placeholder="Escribí aquí si buscás algún color específico o detalles sobre sábanas, cambiadores portátiles, bolsos o talles de prematuros..."
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-xl border border-brand-peach-pink/30 bg-white text-sm text-brand-text focus:outline-hidden focus:ring-2 focus:ring-brand-pink transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4 text-white" />
                  Abrir Chat de WhatsApp
                </button>
              </div>

              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex items-center gap-2 animate-bounce"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Tu consulta se estructuró correctamente. ¡Ya se redireccionó a WhatsApp! En breve Silvia te responderá.</span>
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
