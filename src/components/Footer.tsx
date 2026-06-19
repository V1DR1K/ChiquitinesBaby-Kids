import React from 'react';
import { Heart, Navigation2, Clock, Phone, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-text text-[#FCF6E4] py-16 px-4 border-t border-brand-peach-pink/20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Logo and Tagline Column */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-brand-pink flex items-center justify-center text-white shadow-sm">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <div>
              <span className="font-serif font-black text-xl tracking-tight block text-white leading-none">
                Chiquitines
              </span>
              <span className="text-[10px] uppercase tracking-widest font-black text-brand-pink block font-sans">
                Baby & Kids
              </span>
            </div>
          </div>
          <p className="text-[#E2D2C6] text-xs md:text-sm leading-relaxed font-sans max-w-xs">
            Desde 2007 nos dedicamos con ternura a la venta de ropa de diseño, blanquería artesanal y calzados para los más chicos en Rosario.
          </p>
        </div>

        {/* Brand partners & tags column */}
        <div className="md:col-span-4 space-y-3">
          <h4 className="text-xs uppercase font-extrabold tracking-widest text-brand-pink font-sans">Marcas Oficiales</h4>
          <div className="grid grid-cols-2 gap-2 text-xs font-sans text-[#E2D2C6]">
            <span className="font-medium">♛ Reino Mora</span>
            <span className="font-medium">♛ L'elefantino</span>
            <span className="font-medium">✓ Gepetto</span>
            <span className="font-medium">✓ Brotecitos</span>
            <span className="font-medium">✓ Cari</span>
            <span className="font-medium">✓ Las Floritas</span>
            <span className="font-medium">✓ Gorditoo</span>
            <span className="font-medium">✓ Berni</span>
            <span className="font-medium">✓ Pancita</span>
          </div>
        </div>

        {/* Address and quick info column */}
        <div className="md:col-span-4 space-y-3 font-sans text-xs text-[#E2D2C6]">
          <h4 className="text-xs uppercase font-extrabold tracking-widest text-brand-pink">Datos de Contacto</h4>
          <div className="space-y-2.5">
            <p className="flex items-start gap-2.5">
              <Navigation2 className="w-4 h-4 text-brand-pink flex-shrink-0 mt-0.5" />
              <span>Sarmiento 854, Galería Libertad, Local 27, Rosario, Santa Fe.</span>
            </p>
            <p className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-brand-pink flex-shrink-0 mt-0.5" />
              <span>
                Lunes a Viernes: 10:30 a 18:30 hs <br />
                Sábados: 10:30 a 14:30 hs
              </span>
            </p>
            <p className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-brand-pink flex-shrink-0" />
              <a href="https://wa.me/5493416044902" target="_blank" rel="noopener noreferrer" className="hover:text-brand-pink transition-colors">
                341 6044902 (Silvia)
              </a>
            </p>
            <p className="flex items-center gap-2.5">
              <Instagram className="w-4 h-4 text-brand-pink flex-shrink-0" />
              <a href="https://instagram.com/chiquitines_baby" target="_blank" rel="noopener noreferrer" className="hover:text-brand-pink transition-colors font-semibold">
                @chiquitines_baby
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-brand-peach-pink/20 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-[11px] text-[#A69385] font-sans gap-4">
        <p>© 2007 - 2026 Chiquitines Baby & Kids. Todos los derechos reservados.</p>
        <p className="flex items-center gap-1">
          <span>Diseño con amor para Silvia</span>
          <Heart className="w-3.5 h-3.5 text-brand-pink fill-current" />
        </p>
      </div>
    </footer>
  );
}
