import React, { useState } from 'react';
import { Camera, MapPin, ZoomIn, CheckCircle2, Heart, Award } from 'lucide-react';

export interface MissionPhoto {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  category: string;
  description: string;
  imageSrc: string;
}

export const CAMEROON_MISSION_PHOTOS: MissionPhoto[] = [
  {
    id: 'students-corridor',
    title: 'CJMS Scholarship Recipients in Uniform',
    subtitle: '11 Students Supported at Christ the Junior Missionary Seminary',
    location: 'Mamfe / Kumba, Cameroon',
    category: 'Education Scholarships',
    description: 'A joyful group of elementary and secondary scholars in clean school uniforms, receiving full tuition coverage, state-curriculum textbooks, and examination fees under the foundation’s educational pilot program.',
    imageSrc: '/img1.jpg'
  },
  {
    id: 'acacia-abacus',
    title: 'Cognitive Learning at Acacia Orphanage',
    subtitle: 'Numeracy Tools & Early Childhood Care',
    location: 'Acacia Orphanage, Cameroon',
    category: 'Acacia Orphanage Relief',
    description: 'A young smiling student engaged with early childhood numeracy tools. The foundation provided dry staple rations, bedding, clean water filtration, and educational toys to Acacia Orphanage.',
    imageSrc: '/img2.jpg'
  },
  {
    id: 'medical-wheelchair',
    title: 'Community Healthcare & IDP Care',
    subtitle: 'Clinical Assistance & Consultations in Cameroon',
    location: 'Cameroon Community Health Desk',
    category: 'Humanitarian & Disability Care',
    description: 'Dedicated healthcare outreach and clinic consultations for vulnerable children and displaced families. The foundation facilitates clinic vouchers, nutrition, and essential medical care.',
    imageSrc: '/img3.jpg'
  },
  {
    id: 'founder-tribute',
    title: 'Founder Emmanuel Ebot Mbi',
    subtitle: '1953 – 2024 · Citizen of the World',
    location: 'Mamfe, Cameroon & International Mission',
    category: 'Guiding Visionary',
    description: 'Honoring Emmanuel Ebot Mbi’s inspiring journey from Mamfe to the World Bank and African Development Bank, dedicating his life and resources to uplift the needy.',
    imageSrc: '/Emmanuel.jpg'
  }
];

interface CameroonMissionGalleryProps {
  className?: string;
  onOpenArticle?: () => void;
}

export const CameroonMissionGallery: React.FC<CameroonMissionGalleryProps> = ({
  className = '',
  onOpenArticle
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<MissionPhoto | null>(null);

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-stone-200">
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold text-[#C37238] block mb-1">
            Verified Cameroon Mission Photography
          </span>
          <h3 className="font-serif text-2xl font-bold text-stone-900">
            Field Mission Visual Archive – 2025/2026
          </h3>
        </div>
        {onOpenArticle && (
          <button
            onClick={onOpenArticle}
            className="text-xs font-semibold text-[#162846] hover:text-[#4382CB] underline underline-offset-4 cursor-pointer self-start sm:self-auto"
          >
            Read Full Cameroon Mission Report →
          </button>
        )}
      </div>

      {/* Grid of 4 Cameroon Mission Photos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {CAMEROON_MISSION_PHOTOS.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="group bg-white border border-stone-200 hover:border-[#DE884A] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col"
          >
            {/* Visual Box with Real Image */}
            <div className="relative aspect-[4/3] bg-stone-900 overflow-hidden">
              <img
                src={photo.imageSrc}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Overlay with Zoom Icon */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="p-2 rounded-full bg-white/95 text-stone-900 shadow-md">
                  <ZoomIn className="w-4 h-4" />
                </span>
              </div>

              {/* Tag in corner */}
              <div className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded-md bg-black/75 text-amber-300 text-[10px] font-mono backdrop-blur-xs">
                {photo.location}
              </div>
            </div>

            {/* Description */}
            <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
              <div>
                <span className="text-[10px] uppercase font-semibold tracking-wider text-[#C37238] block">
                  {photo.category}
                </span>
                <h4 className="font-serif text-sm font-bold text-stone-900 group-hover:text-[#162846] transition-colors line-clamp-1">
                  {photo.title}
                </h4>
              </div>
              <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                {photo.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-2xl w-full p-6 space-y-4 shadow-2xl relative"
          >
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <span className="text-xs uppercase font-mono tracking-wider font-semibold text-[#C37238]">
                Cameroon Mission Field Photo
              </span>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="text-stone-400 hover:text-stone-900 text-sm font-bold cursor-pointer p-1"
              >
                ✕ Close
              </button>
            </div>

            {/* Big visual container */}
            <div className="aspect-[16/10] bg-stone-900 rounded-xl overflow-hidden flex items-center justify-center relative shadow-inner">
              <img
                src={selectedPhoto.imageSrc}
                alt={selectedPhoto.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-black/70 text-white text-xs font-mono backdrop-blur-xs flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#DE884A]" />
                <span>{selectedPhoto.location}</span>
              </div>
            </div>

            {/* Full description */}
            <div className="space-y-2">
              <h3 className="font-serif text-xl font-bold text-[#162846]">
                {selectedPhoto.title}
              </h3>
              <p className="text-xs text-[#DE884A] font-semibold">
                {selectedPhoto.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed pt-1">
                {selectedPhoto.description}
              </p>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span className="flex items-center gap-1.5 text-[#509E60] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#509E60]" />
                  <span>Part of Cameroon Pilot Mission & 5-Year Plan</span>
                </span>
                {onOpenArticle && (
                  <button
                    onClick={() => {
                      setSelectedPhoto(null);
                      onOpenArticle();
                    }}
                    className="font-semibold text-[#162846] hover:text-[#4382CB] hover:underline cursor-pointer"
                  >
                    View in Newsletter Article
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
