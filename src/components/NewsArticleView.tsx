import React from 'react';
import { PageView } from '../types.ts';
import { OFFICIAL_NEWS_ARTICLE } from '../data/mockData.ts';
import { CameroonMissionGallery } from './CameroonMissionGallery.tsx';
import { ArrowLeft, Calendar, User, Clock, Heart, Share2, BookOpen, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface NewsArticleViewProps {
  onBack: () => void;
  onNavigate: (view: PageView) => void;
  onOpenDonation: () => void;
}

export const NewsArticleView: React.FC<NewsArticleViewProps> = ({
  onBack,
  onNavigate,
  onOpenDonation
}) => {
  const { isFR } = useLanguage();
  const article = OFFICIAL_NEWS_ARTICLE;

  return (
    <div className="bg-[#F8FAFC] text-slate-800 pb-20">
      {/* Top Banner Navigation */}
      <div className="bg-white border-b border-slate-200 py-4 px-4 sm:px-8 sticky top-16 z-30">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#162846] hover:text-[#4382CB] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{isFR ? 'Retour à l’Accueil' : 'Back to All Updates'}</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500 hidden sm:inline">
              {isFR ? 'Rapport Officiel de Terrain' : 'Official Dispatch'}
            </span>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: article.title,
                    text: article.subtitle,
                    url: window.location.href
                  }).catch(() => {});
                }
              }}
              className="p-1.5 text-slate-500 hover:text-[#162846] rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              title={isFR ? 'Partager l’article' : 'Share article'}
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <header className="bg-white border-b border-slate-200 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-5">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4382CB]">
            <span className="bg-[#5B9AE5]/10 text-[#1E365D] px-3 py-1 rounded-full border border-[#5B9AE5]/30">
              {article.category}
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-[#509E60]">
              {isFR ? 'Programme Pilote & Stratégie Quinquennale' : 'Pilot Program & 5-Year Strategy'}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#162846] leading-[1.15]">
            {isFR ? 'Actualités de la Mission Cameroun — Janvier 2025' : article.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            {isFR
              ? 'Compte-rendu de la distribution des bourses d’études, manuels scolaires et secours humanitaires à l’Orphelinat Acacia sous la supervision de la présidence du Conseil.'
              : article.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-3 border-t border-slate-100">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#DE884A]" />
              <span>{isFR ? 'Janvier 2025' : article.date}</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#DE884A]" />
              <span>{article.author}</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#DE884A]" />
              <span>{article.readTime}</span>
            </span>
          </div>
        </div>
      </header>

      {/* Key Metric Counters */}
      <section className="bg-[#162846] text-white py-8 border-b border-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {article.keyStats.map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#DE884A]">
                  {stat.value}
                </div>
                <div className="text-[11px] text-slate-300 uppercase tracking-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Narrative with Real Photographic Assets */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 space-y-12">
        {/* Real Mission Photo Feature */}
        <div className="rounded-2xl overflow-hidden border-2 border-slate-200 shadow-xl bg-slate-900 group">
          <img
            src="/img1.jpg"
            alt="11 CJMS Scholarship Recipients in Cameroon"
            className="w-full h-96 object-cover object-center group-hover:scale-[1.01] transition-transform duration-700"
          />
          <div className="p-4 bg-slate-900 text-white text-xs flex items-center justify-between border-t border-slate-800">
            <span className="text-slate-300 font-mono">
              {isFR ? 'Élèves boursiers CJMS recevant manuels et uniformes à Mamfe / Kumba, Cameroun' : 'CJMS Scholarship students receiving textbooks & uniforms in Mamfe / Kumba, Cameroon'}
            </span>
            <span className="text-[#DE884A] font-semibold">
              {isFR ? 'Mission de Terrain 2025' : 'Verified Field Photo 2025'}
            </span>
          </div>
        </div>

        {/* Article Body */}
        <div className="space-y-8 text-base text-slate-700 leading-relaxed font-sans">
          {article.content.map((sec, idx) => (
            <div key={idx} className="space-y-4">
              {sec.heading && (
                <h2 className="font-serif text-2xl font-bold text-[#162846] pt-4">
                  {sec.heading}
                </h2>
              )}
              {sec.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {para}
                </p>
              ))}
              {sec.callout && (
                <div className="p-5 bg-[#5295DC]/10 border-l-4 border-[#4382CB] rounded-r-xl text-sm italic text-[#162846]">
                  "{sec.callout}"
                </div>
              )}
              {sec.bulletPoints && (
                <ul className="space-y-2 pt-2">
                  {sec.bulletPoints.map((bp, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#509E60] shrink-0 mt-0.5" />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Real Mission Photographic Evidence Gallery */}
        <div className="pt-8 border-t border-slate-200 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#162846]">
              {isFR ? 'Galerie de Terrain Vérifiée — Cameroun 2025' : 'Verified Field Evidence Gallery — Cameroon 2025'}
            </h3>
            <span className="text-xs text-[#509E60] font-semibold flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" />
              <span>{isFR ? 'Archives Certifiées' : 'Direct Field Archives'}</span>
            </span>
          </div>
          <CameroonMissionGallery />
        </div>

        {/* CTA Footer */}
        <div className="pt-10 border-t border-slate-200 bg-gradient-to-br from-[#162846] to-[#0E1B32] text-white rounded-2xl p-8 text-center space-y-4 shadow-xl">
          <Heart className="w-8 h-8 text-[#DE884A] mx-auto fill-[#DE884A]/30" />
          <h3 className="font-serif text-2xl font-bold">
            {isFR ? 'Participez à la Prochaine Cohorte de Boursiers' : 'Help Expand the Next Student Cohort'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
            {isFR
              ? 'Votre don déductible permet de financer scolarité, manuels et uniformes pour des enfants méritants au Cameroun et en Côte d’Ivoire.'
              : 'Every gift directly funds tuition, school supplies, and emergency child welfare across Cameroon and Côte d\'Ivoire.'}
          </p>
          <button
            onClick={onOpenDonation}
            className="px-6 py-3 bg-[#C37238] hover:bg-[#BA692F] text-white text-xs font-semibold rounded-xl transition-all shadow-md cursor-pointer inline-flex items-center gap-2"
          >
            <span>{isFR ? 'Faire un Don Sécurisé' : 'Make a Tax-Deductible Contribution'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
