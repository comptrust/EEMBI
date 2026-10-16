import React, { useState } from 'react';
import { PageView } from '../types.ts';
import { PROGRAM_INITIATIVES } from '../data/mockData.ts';
import { BookOpen, MapPin, CheckCircle2, HeartHandshake, ShieldCheck, ArrowRight, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface ProgramsViewProps {
  onNavigate: (view: PageView) => void;
  onOpenDonation: () => void;
}

export const ProgramsView: React.FC<ProgramsViewProps> = ({ onNavigate, onOpenDonation }) => {
  const { isFR } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredPrograms = activeTab === 'all'
    ? PROGRAM_INITIATIVES
    : PROGRAM_INITIATIVES.filter((p) => p.id === activeTab);

  const tabs = [
    { id: 'all', label: isFR ? 'Toutes les Initiatives' : 'All Initiatives' },
    { id: 'scholarships', label: isFR ? 'Bourses & Éducation' : 'Scholarships & Education' },
    { id: 'idp-relief', label: isFR ? 'Secours PDI & Vulnérables' : 'IDP & Vulnerable Relief' },
    { id: 'faith-partnerships', label: isFR ? 'Alliances Confessionnelles' : 'Faith Alliances' },
    { id: 'cote-divoire', label: isFR ? 'Programmes Côte d’Ivoire' : 'Côte d’Ivoire Programs' }
  ];

  return (
    <div className="bg-[#FAF9F5] text-stone-800 pb-20">
      {/* Header */}
      <section className="bg-white border-b border-stone-200/80 py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="text-xs uppercase tracking-widest text-[#C37238] font-semibold mb-3 flex items-center gap-2">
            <span>{isFR ? 'Interventions Directes sur le Terrain' : 'Direct Field Interventions'}</span>
            <span className="text-stone-300">·</span>
            <span>{isFR ? 'Cameroun & Côte d’Ivoire' : "Cameroon & Côte d'Ivoire"}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 mb-4">
            {isFR ? 'Nos Programmes et Notre Impact' : 'Our Programs & Impact'}
          </h1>

          <p className="text-base sm:text-lg text-stone-600 max-w-3xl leading-relaxed">
            {isFR
              ? 'Chaque action s’inspire de la conviction profonde d’Emmanuel Ebot Mbi : que la véritable compassion donne aux individus les moyens durables de reconstruire leur autonomie et de préserver leur dignité.'
              : 'Every initiative is guided by the core conviction of Emmanuel Ebot Mbi: that true compassion equips individuals with sustainable tools to rebuild their lives and realize their inherent human dignity.'}
          </p>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-8 pt-6 border-t border-stone-100">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 border ${
                  activeTab === tab.id
                    ? 'bg-[#162846] text-white border-[#162846] shadow-xs'
                    : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border-stone-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Program Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-14 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="bg-white rounded-2xl border border-stone-200/90 p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#C37238] bg-[#C37238]/10 px-2.5 py-1 rounded">
                    {prog.category}
                  </span>
                  <span className="text-xs text-stone-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{prog.location}</span>
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                    {prog.title}
                  </h3>
                  <div className="text-xs font-medium text-stone-500">
                    {prog.subtitle}
                  </div>
                </div>

                <p className="text-stone-600 text-sm leading-relaxed">
                  {prog.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 pt-2 border-t border-stone-100">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-stone-400">
                    {isFR ? 'Composantes Clés' : 'Core Components'}
                  </div>
                  <ul className="space-y-1.5 text-xs text-stone-700">
                    {prog.keyHighlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#509E60] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Impact Metric & CTA */}
              <div className="pt-4 border-t border-stone-100 space-y-4">
                <div className="grid grid-cols-2 gap-3 bg-stone-50 p-3 rounded-xl text-center">
                  {prog.impactMetrics.map((met, i) => (
                    <div key={i}>
                      <div className="font-serif text-lg font-bold text-[#162846]">{met.value}</div>
                      <div className="text-[10px] text-stone-500 uppercase tracking-tight">{met.label}</div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={onOpenDonation}
                  className="w-full py-2.5 px-4 bg-[#162846] hover:bg-[#1E365D] text-white text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>{isFR ? 'Soutenir cette Initiative' : 'Support This Initiative'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
