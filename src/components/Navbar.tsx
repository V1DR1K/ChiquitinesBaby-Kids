import React from 'react';
import { Heart, Sparkles, MessageCircle, Menu, X, Instagram } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { label: 'Colecciones', href: '#catalogo' },
    { label: 'Exclusivos', href: '#marcas' },
    { label: 'Probador de Talles', href: '#guia-talles' },
    { label: 'Ubicación & Horarios', href: '#ubicacion' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-brand-bg shadow-sm">
      {/* Top Banner announcing 2007 experience & Rosario location */}
      <div className="bg-brand-peach-pink text-gray-800 py-2 px-4 text-center text-[10px] md:text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 font-sans">
        <Sparkles className="w-3.5 h-3.5 text-brand-pink fill-current" />
        <span>Desde 2007 vistiendo a los más pequeños en Galería Libertad (Sarmiento 854, Local 27, Rosario)</span>
        <span className="hidden sm:inline">• Ropa desde prematuro hasta 8 años</span>
      </div>

      <div className="max-w-6xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        {/* LOGO */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-brand-peach-pink flex items-center justify-center text-white group-hover:scale-105 transition-transform">
            <Heart className="w-5 h-5 fill-current text-white" />
          </div>
          <div>
            <span className="font-serif font-black text-lg md:text-xl text-brand-pink tracking-tight block leading-none">
              Chiquitines
            </span>
            <span className="text-[10px] uppercase tracking-widest font-black text-[#7A6C61] block font-sans">
              Baby & Kids
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-extrabold text-[#7A6C61] hover:text-brand-pink uppercase tracking-wider transition-colors font-sans"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://instagram.com/chiquitines_baby"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-brand-bg text-brand-pink hover:bg-brand-peach-pink/20 hover:scale-105 transition-all"
            title="Síguenos en Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-brand-peach-pink text-white hover:bg-brand-pink text-xs font-extrabold uppercase tracking-wide shadow-xs transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-current text-white" />
            Consultar Silvia
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#4A3D36] hover:text-brand-pink transition-colors"
          id="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-brand-bg px-4 py-6 space-y-4 shadow-md absolute top-full left-0 right-0 z-40 animate-fade-in">
          <div className="flex flex-col gap-4 font-sans text-sm font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#7A6C61] hover:text-brand-pink py-1 border-b border-[#FAF6F0] transition-colors block"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <a
                href="https://instagram.com/chiquitines_baby"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-brand-peach-pink/30 text-brand-pink font-extrabold text-xs uppercase tracking-wider"
              >
                <Instagram className="w-4.5 h-4.5" />
                @chiquitines_baby
              </a>
            </div>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center block py-2.5 rounded-xl bg-brand-peach-pink text-white font-extrabold uppercase tracking-wider shadow-sm"
            >
              Consultar Silvia en WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
