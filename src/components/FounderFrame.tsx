import React, { useState } from 'react';
import { Award, Shield, ZoomIn, Camera } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface FounderFrameProps {
  className?: string;
  variant?: 'compact' | 'full';
  showBioSnippet?: boolean;
}

export const FounderFrame: React.FC<FounderFrameProps> = ({
  className = '',
  variant = 'full',
  showBioSnippet = true,
}) => {
  const { t, isFR } = useLanguage();
  const [photoSrc, setPhotoSrc] = useState<string>('/Emmanuel.jpg');
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <div
        className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#11233E] via-[#0D1B30] to-[#081220] border-2 border-amber-500/50 text-stone-200 p-6 sm:p-8 shadow-2xl flex flex-col items-center text-center ${className}`}
      >
        {/* Subtle patterned backdrop */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        {/* Real Founder Photograph Frame - Clean, No box underneath */}
        <div className="relative z-10 mb-5 group">
          <div className="w-56 h-72 sm:w-64 sm:h-80 rounded-2xl border-4 border-amber-400/80 p-1.5 bg-[#162742] shadow-2xl relative overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
            <div className="w-full h-full rounded-xl overflow-hidden relative bg-stone-900 flex flex-col items-center justify-center">
              {/* Actual Photograph */}
              <img
                src={photoSrc}
                alt="Emmanuel Ebot Mbi (1953 – 2024)"
                className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105"
                onError={() => {
                  if (photoSrc !== '/Founder.jpg') {
                    setPhotoSrc('/Founder.jpg');
                  }
                }}
              />

              {/* View/Zoom Button */}
              <button
                onClick={() => setLightboxOpen(true)}
                className="absolute top-2.5 right-2.5 p-2 rounded-lg bg-black/60 hover:bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer shadow-md"
                title={isFR ? 'Agrandir le portrait' : 'Enlarge portrait'}
                aria-label={isFR ? 'Agrandir le portrait' : 'Enlarge portrait'}
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              {/* Lifespan Ribbon */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent pt-8 pb-2 px-2">
                <span className="text-[11px] font-mono tracking-widest text-amber-300 font-bold uppercase block drop-shadow-sm">
                  1953 – 2024
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Identity Details directly under image without the buttons toolbar box */}
        <div className="relative z-10 space-y-1.5 max-w-sm">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Emmanuel Ebot Mbi
          </h3>
          <p className="text-xs uppercase tracking-widest text-[#DE884A] font-semibold">
            {t.founderCard.role}
          </p>
          <div className="text-xs text-stone-300 font-mono pt-1">
            {t.founderCard.datesAndPlace}
          </div>
        </div>

        {showBioSnippet && (
          <div className="relative z-10 mt-4 space-y-3 max-w-xs">
            <p className="text-xs text-stone-300 italic leading-relaxed">
              {t.founderCard.quote}
            </p>
            <div className="pt-3 border-t border-slate-700/80 grid grid-cols-2 gap-2 text-[11px] text-stone-400">
              <div className="flex items-center justify-center gap-1">
                <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{t.founderCard.afdb}</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <Shield className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{t.founderCard.worldBank}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal for Full Resolution Photo */}
      {lightboxOpen && (
        <div
          onClick={() => setLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-stone-900 border border-stone-700 rounded-2xl max-w-lg w-full p-6 text-center space-y-4 shadow-2xl"
          >
            <div className="flex items-center justify-between pb-3 border-b border-stone-800">
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-[#DE884A]" />
                <span className="text-xs uppercase tracking-widest text-[#DE884A] font-semibold font-mono">
                  {t.founderCard.archiveTitle}
                </span>
              </div>
              <button
                onClick={() => setLightboxOpen(false)}
                className="text-stone-400 hover:text-white text-sm cursor-pointer p-1"
              >
                ✕ {isFR ? 'Fermer' : 'Close'}
              </button>
            </div>

            <div className="p-2 bg-black/60 rounded-xl flex items-center justify-center">
              <div className="w-72 h-96 rounded-xl overflow-hidden border-2 border-amber-400/70 shadow-2xl">
                <img
                  src={photoSrc}
                  alt="Emmanuel Ebot Mbi"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="space-y-1">
              <h4 className="font-serif text-xl font-bold text-white">
                Emmanuel Ebot Mbi (1953 – 2024)
              </h4>
              <p className="text-xs text-[#DE884A]">
                {t.founderCard.archiveSub}
              </p>
              <p className="text-xs text-stone-400 max-w-sm mx-auto pt-2 leading-relaxed">
                {t.founderCard.archiveBio}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
