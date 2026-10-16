import React, { useState } from 'react';
import { PageView } from '../types.ts';
import { FounderFrame } from './FounderFrame.tsx';
import { FounderLetterCard } from './FounderLetterCard.tsx';
import { CameroonMissionGallery } from './CameroonMissionGallery.tsx';
import { OFFICIAL_NEWS_ARTICLE } from '../data/mockData.ts';
import { useLanguage } from '../context/LanguageContext.tsx';
import {
  BookOpen,
  Heart,
  Users,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  CheckCircle2,
  Sparkles,
  DollarSign,
  CreditCard,
  Building2,
  Send,
  Calendar,
  FileText
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: PageView) => void;
  onOpenDonation: () => void;
  onOpenNewsArticle?: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenDonation,
  onOpenNewsArticle
}) => {
  const { t, isFR, language } = useLanguage();

  // In-page Donation Widget State
  const [inPageAmount, setInPageAmount] = useState<number>(100);
  const [customInPageAmount, setCustomInPageAmount] = useState<string>('');
  const [inPagePaymentMethod, setInPagePaymentMethod] = useState<'card' | 'offline' | 'paypal'>('card');
  const [inPageDonationSuccess, setInPageDonationSuccess] = useState<boolean>(false);

  // Newsletter Subscription Form State
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState<boolean>(false);

  // Quick In-Page Message for Donation Form
  const [donorName, setDonorName] = useState<string>('');
  const [donorEmail, setDonorEmail] = useState<string>('');
  const [donorSubject, setDonorSubject] = useState<string>('');
  const [donorMessage, setDonorMessage] = useState<string>('');
  const [messageSent, setMessageSent] = useState<boolean>(false);

  const handleInPageDonate = (e: React.FormEvent) => {
    e.preventDefault();
    setInPageDonationSuccess(true);
    setTimeout(() => {
      onOpenDonation();
    }, 600);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setNewsletterSubscribed(true);
  };

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorEmail || !donorMessage) return;
    setMessageSent(true);
    setTimeout(() => setMessageSent(false), 5000);
  };

  return (
    <div className="bg-[#F8FAFC] text-slate-800">
      {/* 1. Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#162846] via-[#1A3258] to-[#0E1B32] text-white pt-12 pb-20 sm:pt-16 sm:pb-28">
        {/* Subtle patterned overlay */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#5295DC_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#DE884A] bg-[#DE884A]/15 px-3.5 py-1.5 rounded-full border border-[#DE884A]/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isFR ? 'Fondation Humanitaire & Éducative' : 'Empowering Futures · Dedicated To Emmanuel Ebot Mbi'}</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-white text-balance">
                {t.hero.headline}
                <span className="text-[#DE884A] italic underline decoration-[#C37238]/60 decoration-wavy">
                  {t.hero.prosper}
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-light">
                {t.hero.subtitle}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenDonation}
                  className="px-6 py-3.5 bg-[#C37238] hover:bg-[#BA692F] text-white rounded-xl text-sm font-semibold transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer active:scale-[0.99]"
                >
                  <span>{t.hero.donateBtn}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('founder')}
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-sm font-semibold transition-colors flex items-center gap-2 border border-white/20 cursor-pointer"
                >
                  <span>{t.hero.founderBtn}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                {onOpenNewsArticle && (
                  <button
                    onClick={onOpenNewsArticle}
                    className="px-5 py-3.5 bg-[#4382CB]/30 hover:bg-[#4382CB]/50 text-white rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 border border-[#5295DC]/40 cursor-pointer"
                  >
                    <span>{t.hero.impactBtn}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#5B9AE5]" />
                  </button>
                )}
              </div>

              {/* Verified Trust Badges */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-300 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7ABF86]" />
                  <span>{t.hero.badge1}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7ABF86]" />
                  <span>{t.hero.badge2}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7ABF86]" />
                  <span>{t.hero.badge3}</span>
                </span>
              </div>
            </div>

            {/* Hero Right: Official Founder Picture Frame (No box underneath) */}
            <div className="lg:col-span-5">
              <FounderFrame variant="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Full-Width Proof Metrics Bar */}
      <section className="bg-[#162846] text-white py-8 border-y border-slate-700/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-700/80">
            <div className="text-center sm:text-left sm:pl-4 first:pl-0 pt-4 sm:pt-0">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#DE884A]">
                {t.metrics.legacyVal}
              </div>
              <div className="text-xs text-slate-300 font-medium mt-1">
                {t.metrics.legacyLabel}
              </div>
            </div>

            <div className="text-center sm:text-left sm:pl-8 pt-4 sm:pt-0">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#5B9AE5]">
                {t.metrics.wbVal}
              </div>
              <div className="text-xs text-slate-300 font-medium mt-1">
                {t.metrics.wbLabel}
              </div>
            </div>

            <div className="text-center sm:text-left sm:pl-8 pt-4 sm:pt-0">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#7ABF86]">
                {t.metrics.scholVal}
              </div>
              <div className="text-xs text-slate-300 font-medium mt-1">
                {t.metrics.scholLabel}
              </div>
            </div>

            <div className="text-center sm:text-left sm:pl-8 pt-4 sm:pt-0">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#DE884A]">
                {t.metrics.fundVal}
              </div>
              <div className="text-xs text-slate-300 font-medium mt-1">
                {t.metrics.fundLabel}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About Us Section (Box under image removed for clean aesthetic) */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Mosaic Left with Real Founder Photograph - Clean, No box underneath */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-400/80 bg-slate-900 aspect-[4/3] group">
                <img
                  src="/Emmanuel.jpg"
                  alt="Founder Emmanuel Ebot Mbi"
                  className="w-full h-full object-cover object-top brightness-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#162846] via-[#162846]/40 to-transparent p-6 flex flex-col justify-between text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-xs text-xs font-semibold text-[#DE884A] w-fit border border-white/10">
                    <Sparkles className="w-3.5 h-3.5 text-[#DE884A]" />
                    <span>{t.about.founderBadge}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] uppercase font-mono tracking-widest text-amber-300 font-bold">
                      1953 – 2024 · {t.founderCard.citizen}
                    </span>
                    <h3 className="font-serif text-2xl font-bold leading-tight text-white drop-shadow-sm">
                      Emmanuel Ebot Mbi
                    </h3>
                    <p className="text-xs text-slate-200 line-clamp-2 font-light italic">
                      {t.founderCard.quote}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* About Us Narrative Right */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#509E60]">
                <span>{t.about.tag}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#162846] leading-tight text-balance">
                {t.about.titleStart}
                <span className="text-[#C37238]">{t.about.titleHighlight}</span>
                {t.about.titleEnd}
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {t.about.p1}
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {t.about.p2}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {/* Pillar 1 */}
                <div className="p-4 bg-[#F8FAFC] border border-slate-200 hover:border-[#5295DC] rounded-2xl space-y-2 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#5295DC]/15 text-[#4382CB] flex items-center justify-center">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-sm font-bold text-[#162846]">
                    {t.about.pillar1Title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {t.about.pillar1Desc}
                  </p>
                </div>

                {/* Pillar 2 */}
                <div className="p-4 bg-[#F8FAFC] border border-slate-200 hover:border-[#509E60] rounded-2xl space-y-2 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#509E60]/15 text-[#509E60] flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-sm font-bold text-[#162846]">
                    {t.about.pillar2Title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {t.about.pillar2Desc}
                  </p>
                </div>

                {/* Pillar 3 */}
                <div className="p-4 bg-[#F8FAFC] border border-slate-200 hover:border-[#C37238] rounded-2xl space-y-2 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#C37238]/15 text-[#C37238] flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-sm font-bold text-[#162846]">
                    {t.about.pillar3Title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {t.about.pillar3Desc}
                  </p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('founder')}
                  className="px-5 py-2.5 bg-[#162846] hover:bg-[#1E365D] text-white rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>{isFR ? 'Découvrir la Biographie Complète' : 'Read Full Founder Biography'}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('leadership')}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#162846] rounded-xl text-xs font-semibold transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>{isFR ? 'Rencontrer le Conseil d’Administration' : 'Meet Our Board of Directors'}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Letter from the Founder */}
      <section className="py-16 sm:py-20 bg-[#F1F5F9]/60 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <FounderLetterCard />
        </div>
      </section>

      {/* 5. In-Page Donation Section */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="bg-[#FAF9F5] border-2 border-slate-200 rounded-3xl p-6 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Donation Inputs */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#C37238]">
                    {isFR ? 'Soutenir la Mission' : 'Give to the Mission'}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#162846]">
                    {isFR ? 'Faire un Don à la Fondation' : 'Emmanuel Ebot Mbi Donation'}
                  </h3>
                  <div className="p-3 bg-[#5295DC]/10 border border-[#5295DC]/30 rounded-xl text-xs text-[#1E365D]">
                    <strong>{isFR ? 'Transparence :' : 'Notice:'}</strong>{' '}
                    {isFR
                      ? '100% de votre don finance directement les bourses CJMS, le soutien à l’Orphelinat Acacia et les micro-subventions aux veuves.'
                      : '100% of donations directly fund CJMS scholarships, Acacia Orphanage assistance, and widow micro-business grants.'}
                  </div>
                </div>

                {/* Amount Tiers */}
                <div className="space-y-3">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                    {isFR ? 'Montant de votre don (USD) :' : 'Your Donation (USD):'}
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
                    {[25, 50, 100, 250, 500].map((tier) => (
                      <button
                        key={tier}
                        type="button"
                        onClick={() => {
                          setInPageAmount(tier);
                          setCustomInPageAmount('');
                        }}
                        className={`py-3 rounded-xl font-bold text-sm transition-all cursor-pointer border ${
                          inPageAmount === tier && !customInPageAmount
                            ? 'bg-[#162846] text-white border-[#162846] shadow-sm'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        ${tier}
                      </button>
                    ))}
                  </div>

                  {/* Custom Amount */}
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                    <input
                      type="number"
                      placeholder={isFR ? 'Autre montant personnalisé' : 'Other custom amount'}
                      value={customInPageAmount}
                      onChange={(e) => {
                        setCustomInPageAmount(e.target.value);
                        setInPageAmount(Number(e.target.value) || 0);
                      }}
                      className="w-full pl-8 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#C37238] transition-colors"
                    />
                  </div>
                </div>

                {/* Primary Button */}
                <button
                  onClick={onOpenDonation}
                  className="w-full py-4 bg-[#C37238] hover:bg-[#BA692F] text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>
                    {isFR ? `Faire un Don de $${customInPageAmount || inPageAmount}` : `Donate $${customInPageAmount || inPageAmount} Now`}
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              {/* Right Proof Card */}
              <div className="lg:col-span-5 bg-[#162846] text-white p-6 sm:p-8 rounded-2xl space-y-4 shadow-xl">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#DE884A]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>501(c)(3) {isFR ? 'Exonération Fiscale' : 'Tax Exempt'}</span>
                </div>
                <h4 className="font-serif text-xl font-bold">
                  {isFR ? 'Un Impact Immédiat & Mesurable' : 'Immediate Direct Impact'}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {isFR
                    ? 'Chaque dollar est comptabilisé avec une intégrité absolue sous la direction du Trésorier & Directeur des Opérations Sylvion A. Mbi et du Conseil.'
                    : 'Every dollar is accounted for with absolute integrity under the direct supervision of Treasurer & COO Sylvion A. Mbi and the Board.'}
                </p>
                <div className="pt-4 border-t border-slate-700/80 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7ABF86]" />
                    <span>{isFR ? 'Reçus fiscaux officiels délivrés instantanément' : 'Official tax receipt issued automatically'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7ABF86]" />
                    <span>{isFR ? 'Supervision directe sur le terrain au Cameroun' : 'Direct on-the-ground deployment in Cameroon'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Cameroon Field Mission Update Section */}
      <section className="py-16 sm:py-24 bg-[#FAF9F5] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Dispatch Text */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C37238] bg-[#C37238]/10 px-3 py-1 rounded-full">
                <Calendar className="w-3.5 h-3.5" />
                <span>{t.mission.badge}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#162846] leading-tight">
                {t.mission.title}
              </h2>

              <p className="text-sm font-semibold text-[#5295DC]">
                {t.mission.subtitle}
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {t.mission.desc}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#509E60] shrink-0" />
                  <span>{isFR ? '11 Bourses d’Études CJMS attribuées' : 'Scholarships to 11 CJMS students'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#509E60] shrink-0" />
                  <span>{isFR ? 'Soutien à 9 orphelins via le réseau CRN' : 'Support to 9 orphans via CRN'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#509E60] shrink-0" />
                  <span>{isFR ? 'Capitalisation de micro-activités pour veuves' : 'Widow micro-business capitalization'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#509E60] shrink-0" />
                  <span>{isFR ? 'Aide alimentaire et médicale à l’Orphelinat Acacia' : 'Acacia Orphanage food & medical relief'}</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenNewsArticle}
                  className="px-6 py-3 bg-[#162846] hover:bg-[#1E365D] text-white rounded-xl text-xs font-semibold transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>{t.mission.viewBtn}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Visual Real Photo with Overlay Caption */}
            <div className="lg:col-span-5 aspect-[4/3] rounded-2xl overflow-hidden relative shadow-xl group border-2 border-slate-200">
              <img
                src="/img1.jpg"
                alt="11 CJMS Scholarship Students in Cameroon"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#162846] via-[#162846]/40 to-transparent p-6 text-white flex flex-col justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#DE884A] font-semibold bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded w-fit border border-white/10">
                  {isFR ? 'Programme Pilote & Stratégie 5 Ans' : 'Part of Pilot Program & 5-Year Strategy'}
                </span>
                <div className="space-y-1">
                  <div className="font-serif text-3xl font-bold text-white drop-shadow">{t.mission.studentsCount}</div>
                  <div className="text-xs text-slate-200">{t.mission.studentsLabel}</div>
                  <div className="text-[11px] text-slate-300 pt-1">
                    {t.mission.supervision}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cameroon Mission Photo Gallery Component */}
          <CameroonMissionGallery onOpenArticle={onOpenNewsArticle} />
        </div>
      </section>

      {/* 7. Working Newsletter Subscription Box */}
      <section className="py-16 sm:py-20 bg-[#162846] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#DE884A]">
            <span>{t.newsletter.tag}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            {t.newsletter.title}
          </h2>

          <p className="text-slate-300 text-sm max-w-lg mx-auto leading-relaxed">
            {t.newsletter.subtitle}
          </p>

          {/* Subscription Form */}
          {newsletterSubscribed ? (
            <div className="max-w-md mx-auto p-4 bg-[#509E60]/20 border border-[#509E60] rounded-xl text-xs text-[#7ABF86] flex items-center justify-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>{t.newsletter.success}</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={t.newsletter.placeholder}
                  className="flex-1 px-4 py-3 bg-[#0E1B32] border border-slate-600 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#5295DC] transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#C37238] hover:bg-[#BA692F] text-white text-xs font-semibold rounded-xl transition-all shadow flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                >
                  <span>{t.newsletter.btn}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              <span className="text-[11px] text-slate-400 block">
                {isFR ? 'Aucun pourriel. Désinscription à tout moment.' : 'No spam. Unsubscribe anytime.'}
              </span>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
