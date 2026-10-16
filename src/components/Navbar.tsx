import React, { useState } from 'react';
import { Logo } from './Logo.tsx';
import { PageView } from '../types.ts';
import { Heart, Menu, X, Phone, Mail, MapPin, ArrowUpRight, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface NavbarProps {
  currentView: PageView;
  onNavigate: (view: PageView) => void;
  onOpenDonation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenDonation
}) => {
  const { language, setLanguage, t, isFR } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageView; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'founder', label: t.nav.founder },
    { id: 'leadership', label: t.nav.leadership },
    { id: 'news', label: t.nav.news },
    { id: 'programs', label: t.nav.programs },
    { id: 'contact', label: t.nav.contact }
  ];

  const handleLinkClick = (view: PageView) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-colors shadow-xs">
      {/* Top Utility Ribbon in Logo Navy (#162846) */}
      <div className="bg-[#162846] text-slate-200 text-xs py-2 px-4 sm:px-8 border-b border-slate-700/80 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-200">
              <MapPin className="w-3.5 h-3.5 text-[#DE884A]" />
              <span>{t.nav.address}</span>
            </span>
            <span className="text-slate-600">·</span>
            <a
              href="mailto:info@eembifoundation.org"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#DE884A]" />
              <span>info@eembifoundation.org</span>
            </a>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="tel:+13055873407"
              className="flex items-center gap-1.5 hover:text-white transition-colors font-mono"
            >
              <Phone className="w-3.5 h-3.5 text-[#DE884A]" />
              <span>+1 (305) 587-3407</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-xs text-[#7ABF86] font-medium">
              {t.nav.taxExempt}
            </span>
            <span className="text-slate-600">|</span>

            {/* Language Switcher in Top Ribbon */}
            <div className="inline-flex items-center bg-slate-800/80 border border-slate-600/80 rounded-full p-0.5 text-[11px] font-semibold">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded-full transition-colors cursor-pointer ${
                  language === 'en'
                    ? 'bg-[#C37238] text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Switch to English"
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('fr')}
                className={`px-2 py-0.5 rounded-full transition-colors cursor-pointer ${
                  language === 'fr'
                    ? 'bg-[#C37238] text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Passer en français"
                aria-label="Passer en français"
              >
                FR
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-6">
        {/* Zone 1: Logo Wordmark */}
        <button
          onClick={() => handleLinkClick('home')}
          className="text-left focus:outline-none group transition-opacity hover:opacity-95 cursor-pointer"
          aria-label="Emmanuel Ebot Mbi Foundation Home"
        >
          <Logo size="md" />
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
          {navLinks.map((link) => {
            const isActive = currentView === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[#162846] font-bold'
                    : 'text-slate-600 hover:text-[#4382CB]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#C37238] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Language Toggle & Donate Button */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          {/* Prominent Language Switcher */}
          <div className="flex items-center bg-slate-100 hover:bg-slate-200/80 border border-slate-300/80 rounded-xl p-1 text-xs font-bold transition-colors">
            <Globe className="w-3.5 h-3.5 text-slate-500 ml-1.5 mr-1" />
            <button
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-[#162846] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('fr')}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                language === 'fr'
                  ? 'bg-[#162846] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              FR
            </button>
          </div>

          <button
            onClick={onOpenDonation}
            className="flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold text-white bg-[#C37238] hover:bg-[#BA692F] rounded-xl transition-all shadow-sm hover:shadow active:scale-[0.99] whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Heart className="w-3.5 h-3.5 fill-white" />
            <span>{t.nav.donate}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Header Controls */}
        <div className="flex sm:hidden items-center gap-2">
          {/* Mobile EN / FR Toggle */}
          <div className="flex items-center bg-slate-100 border border-slate-300 rounded-lg p-0.5 text-[11px] font-bold">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
                language === 'en' ? 'bg-[#162846] text-white' : 'text-slate-600'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('fr')}
              className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
                language === 'fr' ? 'bg-[#162846] text-white' : 'text-slate-600'
              }`}
            >
              FR
            </button>
          </div>

          <button
            onClick={onOpenDonation}
            className="px-3 py-1.5 text-xs font-bold text-white bg-[#C37238] rounded-lg cursor-pointer"
          >
            {isFR ? 'Don' : 'Donate'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3 shadow-xl animate-fadeIn">
          {/* Language selection in mobile menu */}
          <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-[#C37238]" />
              <span>{isFR ? 'Langue / Language' : 'Language / Langue'}</span>
            </span>
            <div className="flex items-center bg-slate-200/80 rounded-lg p-0.5 text-xs font-bold">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-md ${
                  language === 'en' ? 'bg-[#162846] text-white' : 'text-slate-700'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={`px-3 py-1 rounded-md ${
                  language === 'fr' ? 'bg-[#162846] text-white' : 'text-slate-700'
                }`}
              >
                Français
              </button>
            </div>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  currentView === link.id
                    ? 'bg-[#162846] text-white font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDonation();
              }}
              className="w-full py-3 bg-[#C37238] hover:bg-[#BA692F] text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>{t.nav.donate}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
