import React, { useState, useEffect } from 'react';
import { Clock, MapPin, ClipboardCheck, Clipboard, ExternalLink, Moon, Sun, Info } from 'lucide-react';

export default function LocationHours() {
  const [copied, setCopied] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(false);
  const [statusText, setStatusText] = useState('Consultando estado comercial...');

  const STORE_HOURS = {
    weekdays: { open: '10:30', close: '18:30', label: '10:30 a 18:30 hs' },
    saturday: { open: '10:30', close: '14:30', label: '10:30 a 14:30 hs' },
    sunday: { label: 'Cerrado' }
  };

  useEffect(() => {
    const checkIfOpen = () => {
      // Use local client time. Let's assume GMT-3 (Argentina / Rosario) or just user's local timezone.
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentDecimalTime = hours + minutes / 60;

      // 10:30 is 10.5, 14:30 is 14.5, 18:30 is 18.5
      const openDec = 10.5;
      const weekdaysCloseDec = 18.5;
      const satCloseDec = 14.5;

      if (day >= 1 && day <= 5) {
        // Monday to Friday
        if (currentDecimalTime >= openDec && currentDecimalTime < weekdaysCloseDec) {
          setIsOpenNow(true);
          setStatusText('¡Abierto ahora! Te esperamos hasta las 18:30 hs');
        } else {
          setIsOpenNow(false);
          const preamble = currentDecimalTime < openDec ? 'Abrimos hoy a las 10:30 hs' : 'Cerrado por hoy. Abrimos mañana 10:30 hs';
          setStatusText(`Cerrado ahora • ${preamble}`);
        }
      } else if (day === 6) {
        // Saturday
        if (currentDecimalTime >= openDec && currentDecimalTime < satCloseDec) {
          setIsOpenNow(true);
          setStatusText('¡Abierto ahora! Te esperamos hasta las 14:30 hs');
        } else {
          setIsOpenNow(false);
          const preamble = currentDecimalTime < openDec ? 'Abrimos hoy a las 10:30 hs' : 'Cerrado por hoy. Abrimos el lunes 10:30 hs';
          setStatusText(`Cerrado ahora • ${preamble}`);
        }
      } else {
        // Sunday
        setIsOpenNow(false);
        setStatusText('Cerrado • Te esperamos el lunes desde las 10:30 hs');
      }
    };

    checkIfOpen();
    const interval = setInterval(checkIfOpen, 60000); // check every minute
    return () => clearInterval(interval);
  }, []);

  const copyAddress = () => {
    navigator.clipboard.writeText('Sarmiento 854, Galería Libertad, Local 27, Rosario, Santa Fe');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ubicacion" className="py-20 px-4 bg-white border-b border-brand-peach-pink/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-black tracking-tight text-brand-text mb-4">
            Dónde encontrarnos & Horarios
          </h2>
          <p className="text-[#6B5E53] text-base max-w-xl mx-auto font-sans leading-relaxed">
            Estamos ubicados en el corazón de la ciudad de Rosario. Vení a conocer toda la indumentaria infantil y blanquería de forma personal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Information & Hours Column */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {/* Dynamic Open Indicator */}
            <div className={`p-4 rounded-[24px] border flex items-center gap-3.5 transition-colors ${
              isOpenNow 
                ? 'bg-brand-lime/30 border-brand-lime/50 text-[#3D7068]' 
                : 'bg-brand-peach-pink/10 border-brand-peach-pink/30 text-brand-pink'
            }`}>
              <div className={`p-2.5 rounded-xl flex-shrink-0 ${
                isOpenNow ? 'bg-brand-mint text-brand-text' : 'bg-brand-pink text-white'
              }`}>
                {isOpenNow ? <Sun className="w-5 h-5 fill-current" /> : <Moon className="w-5 h-5 fill-current" />}
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest block opacity-75">Estado de la tienda</span>
                <p className="text-sm font-black font-sans">{statusText}</p>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-brand-bg/50 rounded-[32px] p-6 md:p-8 border border-brand-peach-pink/30 space-y-5 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-brand-text">
                  <MapPin className="w-6 h-6 text-brand-pink flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif font-black text-xl text-brand-text">Nuestra Dirección</h4>
                    <p className="text-sm text-[#6B5E53] mt-1 font-sans leading-relaxed">
                      Sarmiento 854, Galería Libertad, Local 27.<br />
                      Rosario, Santa Fe, Argentina.
                    </p>
                  </div>
                </div>

                <div className="border-t border-brand-peach-pink/20 pt-4 mt-2">
                  <span className="text-xs font-extrabold text-[#7A6C61] uppercase tracking-widest block mb-2">Instrucciones de búsqueda</span>
                  <div className="space-y-2 text-xs text-[#6B5E53] font-sans">
                    <p className="flex items-center gap-2">
                      <span className="w-6 h-6 font-bold rounded-full bg-white border border-brand-peach-pink/30 flex items-center justify-center text-brand-text">1</span>
                      <span>Ingresá por calle Sarmiento 854</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-6 h-6 font-bold rounded-full bg-white border border-brand-peach-pink/30 flex items-center justify-center text-brand-text">2</span>
                      <span>Buscá el <strong>Local 27</strong> (Galería Libertad)</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-6 h-6 font-bold rounded-full bg-white border border-brand-peach-pink/30 flex items-center justify-center text-brand-text">3</span>
                      <span>Identificá la vidriera con las colecciones de recién nacidos</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 pt-4">
                <button
                  onClick={copyAddress}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl border border-brand-peach-pink/30 bg-white text-xs font-bold text-brand-text hover:bg-brand-bg transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <ClipboardCheck className="w-4 h-4 text-brand-pink" />
                      ¡Copiado!
                    </>
                  ) : (
                    <>
                      <Clipboard className="w-4 h-4 text-brand-pink" />
                      Copiar Dirección
                    </>
                  )}
                </button>
                <a
                  href="https://maps.google.com/?q=Sarmiento+854,+Rosario,+Argentina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-brand-pink text-xs font-extrabold text-white hover:bg-[#FF737D] transition-colors uppercase tracking-wider shadow-xs"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver mapa
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Hours & Map Visual Column */}
          <div className="lg:col-span-7 bg-gradient-to-br from-brand-bg to-brand-peach-pink/15 rounded-[36px] border border-brand-peach-pink/30 overflow-hidden p-6 md:p-8 flex flex-col justify-between gap-6">
            <div>
              <h3 className="text-2xl font-serif font-black text-brand-text mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6 text-brand-pink" /> Horarios de Atención
              </h3>

              <div className="divide-y divide-brand-peach-pink/20 font-sans">
                <div className="py-3.5 flex justify-between items-center">
                  <span className="font-bold text-sm text-[#4E4E4E]">Lunes a Viernes</span>
                  <span className="text-xs font-extrabold px-3.5 py-1.5 bg-white rounded-xl border border-brand-peach-pink/30 text-brand-text">
                    {STORE_HOURS.weekdays.label}
                  </span>
                </div>
                <div className="py-3.5 flex justify-between items-center">
                  <span className="font-bold text-sm text-[#4E4E4E]">Sábados</span>
                  <span className="text-xs font-extrabold px-3.5 py-1.5 bg-white rounded-xl border border-brand-peach-pink/30 text-brand-text">
                    {STORE_HOURS.saturday.label}
                  </span>
                </div>
                <div className="py-3.5 flex justify-between items-center text-neutral-400">
                  <span className="text-sm font-medium">Domingos & Feriados</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 bg-neutral-100 rounded-xl">
                    {STORE_HOURS.sunday.label}
                  </span>
                </div>
              </div>
            </div>

            {/* Custom Styled Map Simulator */}
            <div className="relative h-56 md:h-64 rounded-3xl overflow-hidden border border-brand-peach-pink/30 bg-[#F1EFEB] p-4 flex flex-col justify-between shadow-inner">
              {/* Styled Mock map background pattern */}
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                backgroundImage: `radial-gradient(circle, #000 1%, transparent 11%), radial-gradient(circle, #000 1%, transparent 11%)`,
                backgroundSize: '24px 24px',
                backgroundPosition: '0 0, 12px 12px'
              }}></div>
              
              {/* Mock map roads */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[40%] left-0 right-0 h-8 bg-white border-y border-[#E0DCD3]"></div>
                <div className="absolute left-[30%] top-0 bottom-0 w-8 bg-white border-x border-[#E0DCD3]"></div>
                <span className="absolute left-[10px] top-[43%] text-[9px] uppercase font-bold tracking-widest text-[#B2AA9C]">Calle Sarmiento</span>
                <span className="absolute left-[33%] top-[10px] text-[9px] uppercase font-bold tracking-widest text-[#B2AA9C] rotate-90 origin-top-left">Calle Rioja</span>
              </div>

              {/* Pin indicator */}
              <div className="absolute top-[38%] left-[29.5%] -translate-x-[50%] -translate-y-[100%] flex flex-col items-center">
                <div className="bg-white px-3 py-1.5 rounded-xl border border-brand-pink shadow-md text-[10px] font-black text-brand-text whitespace-nowrap z-10 flex items-center gap-1 animate-bounce">
                  <MapPin className="w-3.5 h-3.5 text-brand-pink fill-current" />
                  <span>Galería Libertad - Local 27</span>
                </div>
                <div className="w-2.5 h-2.5 bg-brand-pink rounded-full border border-white ring-4 ring-brand-pink/20 mt-1"></div>
              </div>

              {/* Real estate coordinates and help text */}
              <div className="relative mt-auto bg-white/90 backdrop-blur-xs p-3 rounded-xl border border-brand-peach-pink/20 shadow-xs flex items-center justify-between text-[11px] leading-tight text-[#7A6C61] z-10 font-sans">
                <div className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-brand-pink flex-shrink-0" />
                  <span>Edificio histórico techado, ideal para días de lluvia o mucho sol. Climatizado y accesible.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
