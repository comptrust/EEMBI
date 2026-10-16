import React from 'react';
import { BookOpen, Users, Award, Shield, HeartHandshake } from 'lucide-react';

interface ArtProps {
  type: 'hero' | 'founder' | 'students' | 'community' | 'diplomat';
  className?: string;
}

export const EditorialArt: React.FC<ArtProps> = ({ type, className = '' }) => {
  if (type === 'founder') {
    return (
      <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-[#11233E] via-[#0D1B30] to-[#081220] border border-amber-900/30 text-stone-200 flex flex-col items-center justify-center p-8 text-center shadow-lg ${className}`}>
        {/* Subtle patterned backdrop */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* Medallion Seal */}
        <div className="relative z-10 mb-6">
          <div className="w-40 h-40 rounded-full border-2 border-amber-400/40 p-2 mx-auto bg-[#162742] shadow-inner flex items-center justify-center relative">
            {/* Diplomatic Portrait Silhouette & Golden Laurel */}
            <svg viewBox="0 0 120 120" className="w-28 h-28 text-amber-200/90" fill="currentColor">
              {/* Head & Bust Profile */}
              <circle cx="60" cy="45" r="22" fill="#E2C799" />
              {/* Hairline & Features */}
              <path d="M42 40C44 26 55 22 68 22C78 22 83 28 83 38C78 37 72 37 66 38C58 40 50 43 42 40Z" fill="#2C231A" />
              {/* Suit and Tie */}
              <path d="M26 98C26 78 40 68 60 68C80 68 94 78 94 98V104H26V98Z" fill="#1E2E48" />
              {/* White Shirt Collar */}
              <polygon points="60,68 52,82 68,82" fill="#FFFFFF" />
              {/* Burgundy/Amber Tie */}
              <polygon points="60,78 63,98 60,102 57,98" fill="#B45309" />
              <circle cx="60" cy="78" r="3" fill="#D97706" />
            </svg>
            <div className="absolute -bottom-2 px-3 py-0.5 rounded-full bg-amber-600/90 border border-amber-300 text-[10px] font-semibold tracking-wider uppercase text-white shadow">
              1953 – 2024
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-sm">
          <h3 className="font-serif text-xl font-medium text-white mb-1">
            Emmanuel Ebot Mbi
          </h3>
          <p className="text-xs uppercase tracking-widest text-amber-400 font-medium mb-3">
            Founder & Chairman Emeritus
          </p>
          <p className="text-xs text-stone-300 italic leading-relaxed">
            "A global statesman who lived to ensure that no child’s potential is extinguished by circumstance."
          </p>
        </div>

        {/* Accolade ribbons badge */}
        <div className="relative z-10 mt-6 pt-4 border-t border-slate-700/60 w-full flex items-center justify-around text-[11px] text-stone-400">
          <span className="flex items-center gap-1">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>AfDB VP / COO</span>
          </span>
          <span className="text-slate-600">·</span>
          <span className="flex items-center gap-1">
            <Shield className="w-3.5 h-3.5 text-amber-400" />
            <span>World Bank 33+ Yrs</span>
          </span>
        </div>
      </div>
    );
  }

  if (type === 'hero') {
    return (
      <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-tr from-[#0F1E36] via-[#1A3358] to-[#2B4C7E] text-white p-8 flex flex-col justify-between shadow-xl min-h-[360px] ${className}`}>
        {/* Architectural atmospheric background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-transparent pointer-events-none" />
        
        {/* Classroom & Books Motif Vectors */}
        <div className="relative z-10 flex items-start justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-medium">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Education · Dignity · Self-Reliance</span>
          </div>

          <div className="text-right">
            <span className="text-xs font-mono text-stone-300 block">Mamfe · Kumba · Abidjan</span>
            <span className="text-[11px] text-amber-400/80">Est. 2018</span>
          </div>
        </div>

        {/* Core Narrative Quote in Hero Image Frame */}
        <div className="relative z-10 my-8 max-w-lg">
          <p className="font-serif italic text-2xl lg:text-3xl text-stone-100 leading-snug mb-3">
            "We believe that giving people the tools to uplift themselves is the best path out of poverty for millions."
          </p>
          <p className="text-xs text-amber-200/90 tracking-wide uppercase font-medium">
            — The Founding Principle of Emmanuel Ebot Mbi
          </p>
        </div>

        {/* Impact Highlights Bar inside the frame */}
        <div className="relative z-10 grid grid-cols-3 gap-3 pt-4 border-t border-white/10 text-stone-200">
          <div>
            <div className="text-xl font-bold font-serif text-amber-400">1,200+</div>
            <div className="text-[11px] text-stone-300 leading-tight">School Scholarships</div>
          </div>
          <div>
            <div className="text-xl font-bold font-serif text-amber-400">2,450+</div>
            <div className="text-[11px] text-stone-300 leading-tight">IDP Families Assisted</div>
          </div>
          <div>
            <div className="text-xl font-bold font-serif text-amber-400">100%</div>
            <div className="text-[11px] text-stone-300 leading-tight">Program Direct Giving</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'students') {
    return (
      <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-amber-900/10 via-[#FAF9F5] to-amber-100/30 border border-amber-200/60 p-6 flex flex-col justify-between ${className}`}>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
            <BookOpen className="w-5 h-5" />
          </div>
          <span className="text-xs font-mono text-stone-500">SCHOLASTIC FUND</span>
        </div>
        <div className="space-y-2">
          <h4 className="font-serif text-lg font-semibold text-stone-900">
            Tuition & Learning Essentials
          </h4>
          <p className="text-xs text-stone-600 leading-relaxed">
            Eliminating school fees, purchasing mandatory state curriculum books, and providing uniforms so orphans and low-income pupils walk into school with head held high.
          </p>
        </div>
        <div className="mt-4 pt-3 border-t border-amber-200/40 text-[11px] text-amber-800 font-medium flex items-center gap-1.5">
          <HeartHandshake className="w-3.5 h-3.5 text-amber-700" />
          <span>Active in 38 partner academies</span>
        </div>
      </div>
    );
  }

  // Default / Community
  return (
    <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-stone-900 via-stone-800 to-slate-900 text-stone-200 p-6 flex flex-col justify-between border border-stone-700 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="w-10 h-10 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800/40 flex items-center justify-center">
          <Users className="w-5 h-5" />
        </div>
        <span className="text-xs font-mono text-stone-400">COMMUNITY RELIEF</span>
      </div>
      <div className="space-y-2">
        <h4 className="font-serif text-lg font-semibold text-white">
          Grassroots Solidarity
        </h4>
        <p className="text-xs text-stone-300 leading-relaxed">
          Delivering dry food staples, clean drinking filtration, and shelter stipends directly via local churches, mosques, and community councils.
        </p>
      </div>
      <div className="mt-4 pt-3 border-t border-stone-700 text-[11px] text-emerald-400 font-medium flex items-center gap-1.5">
        <Shield className="w-3.5 h-3.5" />
        <span>Audited field delivery with zero leakage</span>
      </div>
    </div>
  );
};
