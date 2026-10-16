import React, { useState } from 'react';
import { Logo } from './Logo.tsx';
import { PageView } from '../types.ts';
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface FooterProps {
  onNavigate: (view: PageView) => void;
  onOpenDonation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenDonation }) => {
  const { t, isFR } = useLanguage();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setSubscribed(true);
  };

  const handleNav = (view: PageView) => {
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1526] text-stone-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Column 1: Brand & Charter (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <button
              onClick={() => handleNav('home')}
              className="text-left focus:outline-none"
            >
              <Logo inverted size="md" />
            </button>
            <p className="text-sm leading-relaxed text-stone-400 max-w-md">
              {isFR
                ? 'La Fondation Emmanuel Ebot Mbi perpétue la vision humanitaire de notre regretté Fondateur et Président Émérite. Nous offrons un accès direct à la scolarisation, des kits de dignité nutritionnelle pour les familles déplacées, et un renforcement communautaire durable au Cameroun, en Côte d’Ivoire et en Afrique.'
                : 'The Emmanuel Ebot Mbi Foundation is established to preserve and advance the humanitarian vision of our late Founder and Chairman Emeritus. We provide direct scholastic access, nutritional dignity kits for internally displaced families, and sustainable community empowerment across Cameroon, Côte d\'Ivoire, and Africa.'}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#DE884A] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#DE884A]" />
              <span>{t.nav.taxExempt}</span>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-stone-200">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors text-stone-400 cursor-pointer"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('founder')}
                  className="hover:text-white transition-colors text-stone-400 cursor-pointer"
                >
                  {t.nav.founder}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('leadership')}
                  className="hover:text-white transition-colors text-stone-400 cursor-pointer"
                >
                  {t.nav.leadership}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('news')}
                  className="hover:text-white transition-colors text-stone-400 cursor-pointer text-left"
                >
                  {t.nav.news}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('programs')}
                  className="hover:text-white transition-colors text-stone-400 cursor-pointer"
                >
                  {t.nav.programs}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenDonation}
                  className="hover:text-[#DE884A] transition-colors text-[#C37238] font-medium cursor-pointer"
                >
                  {t.nav.donate}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Initiatives & Locations (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-stone-200">
              {t.footer.initiatives}
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li className="font-medium text-stone-300">
                {isFR ? 'Bourses CJMS Cameroun' : 'CJMS Scholarships Cameroon'}
              </li>
              <li>{isFR ? 'Orphelinat Acacia (Yaoundé)' : 'Acacia Orphanage (Yaoundé)'}</li>
              <li>{isFR ? 'Réseau de Restauration Chrétienne' : 'Christian Restoration Network'}</li>
              <li>{isFR ? 'Micro-subventions pour veuves' : 'Widow Micro-Grants'}</li>
              <li>{isFR ? 'Bureau Maryland (États-Unis)' : 'Maryland Headquarters (USA)'}</li>
            </ul>
          </div>

          {/* Column 4: Contact & Secretariat (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-stone-200">
              {isFR ? 'Secrétariat & Contact' : 'Secretariat & Contact'}
            </h4>
            <ul className="space-y-3 text-xs text-stone-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DE884A] shrink-0 mt-0.5" />
                <span>5000 Thayer Center, Suite C, Oakland, MD 21550 USA</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#DE884A] shrink-0" />
                <a
                  href="mailto:info@eembifoundation.org"
                  className="hover:text-white transition-colors"
                >
                  info@eembifoundation.org
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#DE884A] shrink-0" />
                <a
                  href="tel:+13055873407"
                  className="hover:text-white transition-colors font-mono"
                >
                  +1 (305) 587-3407
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Governance Baseline */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-stone-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Emmanuel Ebot Mbi Foundation. {t.footer.rights}
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>{t.footer.chairName}</span>
            <span>·</span>
            <span>{t.footer.cooName}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
