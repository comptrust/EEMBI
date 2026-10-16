import React, { useState } from 'react';
import { PageView } from '../types.ts';
import { LEADERSHIP_TEAM } from '../data/mockData.ts';
import { Building2, GraduationCap, ChevronRight, Quote, ShieldCheck, Mail, Award, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface LeadershipViewProps {
  onNavigate: (view: PageView) => void;
  onOpenDonation: () => void;
}

export const LeadershipView: React.FC<LeadershipViewProps> = ({ onNavigate, onOpenDonation }) => {
  const { isFR } = useLanguage();
  const [selectedLeaderId, setSelectedLeaderId] = useState<string>(LEADERSHIP_TEAM[0].id);

  const selectedLeader = LEADERSHIP_TEAM.find((l) => l.id === selectedLeaderId) || LEADERSHIP_TEAM[0];

  return (
    <div className="bg-[#F8FAFC] text-slate-800 pb-20">
      {/* Header */}
      <section className="bg-white border-b border-slate-200 py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="text-xs uppercase tracking-widest text-[#4382CB] font-semibold mb-3 flex items-center gap-2">
            <span>{isFR ? 'Gouvernance & Fiducie' : 'Governance & Stewardship'}</span>
            <span className="text-slate-300">·</span>
            <span>{isFR ? 'Conseil d’Administration' : 'Board of Directors'}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#162846] mb-4">
            {isFR ? 'Notre Conseil d’Administration' : 'Meet Our Leadership'}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            {isFR
              ? 'La Fondation Emmanuel Ebot Mbi est guidée par un conseil d’administration chevronné, composé d’experts du développement international, de cadres du secteur privé et d’administrateurs familiaux dévoués à perpétuer la vision du fondateur avec rigueur et intégrité.'
              : 'The Emmanuel Ebot Mbi Foundation is steered by an experienced board of international development leaders, civil society veterans, and family trustees committed to carrying forward our founder’s vision with absolute fidelity, operational rigor, and transparency.'}
          </p>
        </div>
      </section>

      {/* Main Governance Content: Master-Detail Interactive Roster */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Leader Navigation Tabs (4 cols) */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-4 shadow-sm space-y-2 sticky top-24">
            <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-500 border-b border-slate-100 flex items-center justify-between">
              <span>{isFR ? 'Administrateurs' : 'Board of Directors'}</span>
              <span className="text-[10px] font-mono font-bold text-[#C37238] bg-[#C37238]/10 px-2 py-0.5 rounded">
                4 {isFR ? 'Membres' : 'Members'}
              </span>
            </div>

            <div className="space-y-1">
              {LEADERSHIP_TEAM.map((leader) => {
                const isSelected = leader.id === selectedLeaderId;
                return (
                  <button
                    key={leader.id}
                    onClick={() => setSelectedLeaderId(leader.id)}
                    className={`w-full text-left p-3.5 rounded-xl transition-all flex items-center justify-between cursor-pointer border ${
                      isSelected
                        ? 'bg-[#162846] text-white border-[#162846] shadow-md'
                        : 'bg-transparent text-slate-700 hover:bg-slate-50 border-transparent'
                    }`}
                  >
                    <div>
                      <div className="font-serif font-bold text-sm leading-tight">
                        {leader.name}
                      </div>
                      <div className={`text-[11px] truncate max-w-[190px] mt-0.5 ${isSelected ? 'text-[#DE884A]' : 'text-slate-500'}`}>
                        {leader.role}
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'rotate-90 text-[#DE884A]' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Leader Profile Details (8 cols) */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-8 animate-fadeIn">
            {/* Header info */}
            <div className="border-b border-slate-200 pb-6 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C37238]">
                <ShieldCheck className="w-4 h-4 text-[#C37238]" />
                <span>{selectedLeader.role}</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#162846]">
                {selectedLeader.name}
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 font-medium flex items-center gap-2">
                <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{selectedLeader.affiliation}</span>
              </div>
              {selectedLeader.degrees && (
                <div className="text-xs text-slate-500 flex items-center gap-2 pt-1 font-mono">
                  <GraduationCap className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{selectedLeader.degrees}</span>
                </div>
              )}
            </div>

            {/* Quote block */}
            {selectedLeader.quote && (
              <div className="p-5 bg-[#5295DC]/10 border-l-4 border-[#4382CB] rounded-r-xl space-y-2">
                <Quote className="w-5 h-5 text-[#4382CB] opacity-60" />
                <p className="font-serif italic text-sm sm:text-base text-[#162846] leading-relaxed">
                  "{selectedLeader.quote}"
                </p>
              </div>
            )}

            {/* Biographical Narrative */}
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <h3 className="font-serif text-lg font-bold text-[#162846]">
                {isFR ? 'Parcours & Engagements' : 'Executive Profile & Background'}
              </h3>
              {selectedLeader.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Key Areas of Expertise */}
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {isFR ? 'Domaines d’Expertise Stratégique' : 'Core Strategic Domains'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedLeader.expertise.map((exp, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-slate-100 border border-slate-200 text-slate-700 rounded-lg text-xs font-medium"
                  >
                    {exp}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Callout */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                {isFR ? 'Partenariats institutionnels et requêtes officielles' : 'Official inquiries & institutional partnerships'}
              </div>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#162846] hover:bg-[#1E365D] text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
              >
                {isFR ? 'Contacter le Secrétariat' : 'Contact Board Secretariat'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
