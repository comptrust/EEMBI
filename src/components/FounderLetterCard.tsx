import React from 'react';
import { FOUNDER_LETTER } from '../data/mockData.ts';
import { Scroll, Award, Quote, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface FounderLetterCardProps {
  className?: string;
  onReadMore?: () => void;
}

const FRENCH_FOUNDER_LETTER = [
  "Emmanuel Ebot Mbi était bien plus qu'un nom : il était un homme de cœur, de vision et d'action. En tant que fils, frère, père et ami, il a vécu une existence guidée par la compassion et le don de soi envers les autres.",
  "Il a fondé cette organisation avec une mission limpide : apporter un soutien concret aux orphelins, aux veuves, aux personnes déplacées internes (PDI), aux démunis et aux personnes défavorisées—directement et en partenariat avec des institutions caritatives et confessionnelles telles que les églises et les mosquées.",
  "Ce voyage a débuté avec une conviction simple mais puissante : que la communauté, la compassion et la détermination peuvent s'unir pour créer un impact durable. L'organisation est née d'un amour profond pour notre peuple, pour le progrès et pour la promesse partagée d'un avenir meilleur.",
  "En rendant hommage à notre regretté Président Émérite, le Conseil d'Administration a résolu à l'unanimité de poursuivre l'œuvre qu'il a engagée avec tant de dévouement. Sa vision demeure notre boussole, et son héritage guidera chacun de nos pas dans ce nouveau chapitre."
];

export const FounderLetterCard: React.FC<FounderLetterCardProps> = ({ className = '' }) => {
  const { isFR } = useLanguage();

  const paragraphs = isFR ? FRENCH_FOUNDER_LETTER : FOUNDER_LETTER.content;

  return (
    <div className={`relative overflow-hidden rounded-3xl bg-[#FAF6EE] border-2 border-amber-300/80 p-8 sm:p-12 shadow-md ${className}`}>
      {/* Decorative Archival Texture */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-200/40 via-transparent to-transparent pointer-events-none" />

      {/* Header Badge */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-amber-200/80">
        <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-amber-800">
          <Scroll className="w-4 h-4 text-amber-700" />
          <span>{isFR ? 'Lettre Fondatrice & Charte Directrice' : 'Founding Letter & Guiding Charter'}</span>
        </div>
        <div className="text-xs font-mono text-stone-500">
          1953 – 2024 · {isFR ? 'Document Mémorial' : 'Memorial Document'}
        </div>
      </div>

      {/* Letter Title & Inscription */}
      <div className="mt-8 space-y-4 max-w-3xl">
        <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold block">
          {isFR ? 'Message sur Notre Vision Directrice' : 'A Message on Our Guiding Light'}
        </span>
        <h2 className="font-serif text-2xl sm:text-4xl font-bold text-stone-900 leading-tight">
          {isFR
            ? '« La tâche à accomplir est immense—mais la vision l’est tout autant. »'
            : '"The work ahead is great—but so is the vision."'}
        </h2>
      </div>

      {/* The Exact Letter Prose */}
      <div className="mt-8 space-y-5 text-stone-800 font-serif text-base sm:text-lg leading-relaxed max-w-3xl border-l-2 border-amber-500/50 pl-6 sm:pl-8 italic">
        {paragraphs.map((paragraph, idx) => (
          <p key={idx} className="not-italic font-sans text-stone-700 text-sm sm:text-base leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Official Sign-off Block */}
      <div className="mt-10 pt-6 border-t border-amber-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="font-serif text-lg font-bold text-stone-900">
            Emmanuel Ebot Mbi
          </div>
          <div className="text-xs text-amber-800 font-medium">
            {isFR ? 'Fondateur et Président Émérite (1953 – 2024)' : 'Founder & Chairman Emeritus (1953 – 2024)'}
          </div>
          <div className="text-xs text-stone-500">
            {isFR ? 'Adopté à l’unanimité par le Conseil d’Administration' : 'Adopted Unanimously by the Board of Directors'}
          </div>
        </div>

        {/* Board Resolution Seal */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-100/70 border border-amber-300 text-amber-950 text-xs font-semibold">
          <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
          <span>{isFR ? 'Engagement Institutionnel Officiel' : 'Official Institutional Covenant'}</span>
        </div>
      </div>
    </div>
  );
};
