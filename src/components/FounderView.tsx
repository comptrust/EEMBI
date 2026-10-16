import React, { useState } from 'react';
import { PageView } from '../types.ts';
import { FOUNDER_BIO, TIMELINE_MILESTONES } from '../data/mockData.ts';
import { FounderFrame } from './FounderFrame.tsx';
import { FounderLetterCard } from './FounderLetterCard.tsx';
import { Award, Globe, Heart, Shield, Send, CheckCircle2, Quote, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface FounderViewProps {
  onNavigate: (view: PageView) => void;
  onOpenDonation: () => void;
}

interface TributeNote {
  id: string;
  author: string;
  role: string;
  location: string;
  message: string;
  date: string;
}

export const FounderView: React.FC<FounderViewProps> = ({ onNavigate, onOpenDonation }) => {
  const { isFR } = useLanguage();

  const [tributes, setTributes] = useState<TributeNote[]>([
    {
      id: '1',
      author: 'Ambassador Jean-Luc Essono',
      role: isFR ? 'Ancien Collègue, Banque Africaine de Développement' : 'Former Colleague, African Development Bank',
      location: 'Abidjan / Yaoundé',
      message: isFR
        ? 'Emmanuel était la quintessence du panafricaniste et du bâtisseur de ponts planétaires. Son esprit économique acéré n’avait d’égal que la générosité de son cœur.'
        : 'Emmanuel was the quintessential pan-Africanist and global bridge builder. His sharp economic mind was matched only by the gentleness of his heart. His legacy continues to inspire every development practitioner on the continent.',
      date: isFR ? 'Mars 2024' : 'March 2024'
    },
    {
      id: '2',
      author: 'Rev. Sister Beatrice Arrey',
      role: isFR ? 'Coordinatrice de l’Éducation Missionnaire' : 'Missionary Education Coordinator',
      location: 'Mamfe, Cameroun',
      message: isFR
        ? 'Il n’a jamais oublié la poussière de Mamfe ni les salles de classe missionnaires où son parcours a débuté. Il est toujours resté ce fils aimant revenu élever ses frères et sœurs.'
        : 'He never forgot the dust of Mamfe or the missionary classrooms where his journey began. Even when commanding international conference halls in Geneva and Washington, he was always that compassionate son who came back to lift his brothers and sisters.',
      date: isFR ? 'Mai 2024' : 'May 2024'
    },
    {
      id: '3',
      author: 'Mariam Diallo',
      role: isFR ? 'Bénéficiaire de Bourse' : 'First Cohort Scholarship Beneficiary',
      location: 'Université de Buéa',
      message: isFR
        ? 'Grâce à la bourse de M. Mbi, j’ai pu terminer première de ma promotion après avoir perdu mon père. Il m’a redonné foi en l’avenir.'
        : 'Because of Mr. Mbi’s scholarship, I graduated top of my secondary class after losing my father to conflict. He gave me back my belief that tomorrow could be joyful.',
      date: isFR ? 'Août 2024' : 'August 2024'
    }
  ]);

  const [authorName, setAuthorName] = useState('');
  const [authorLocation, setAuthorLocation] = useState('');
  const [noteMessage, setNoteMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleAddTribute = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName || !noteMessage) return;

    const newNote: TributeNote = {
      id: Date.now().toString(),
      author: authorName,
      role: isFR ? 'Ami et Soutien de la Communauté' : 'Community Friend & Supporter',
      location: authorLocation || 'Global',
      message: noteMessage,
      date: isFR ? 'À l’instant' : 'Just now'
    };

    setTributes([newNote, ...tributes]);
    setAuthorName('');
    setAuthorLocation('');
    setNoteMessage('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="bg-[#F8FAFC] text-slate-800 pb-20">
      {/* Editorial Curatorial Header */}
      <section className="border-b border-slate-200 bg-white py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="text-xs uppercase tracking-widest text-[#C37238] font-semibold mb-3 flex items-center gap-2">
            <span>{isFR ? 'En Hommage Perpétuel et Mémoire' : 'In Perpetual Honor & Memory'}</span>
            <span className="text-slate-300">·</span>
            <span className="font-mono font-bold">1953 – 2024</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#162846] leading-[1.12] mb-6">
            {isFR ? 'Notre Fondateur' : 'About Our Founder'}
          </h1>

          <p className="font-serif italic text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed mb-6">
            "{isFR ? 'La tâche à accomplir est immense—mais la vision l’est tout autant.' : FOUNDER_BIO.quote}"
          </p>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium text-slate-500 pt-2 border-t border-slate-100">
            <span className="text-[#162846] font-semibold">Emmanuel Ebot Mbi (1953 – 2024)</span>
            <span>·</span>
            <span>{isFR ? 'Fondateur et Président Émérite' : 'Founder & Chairman Emeritus'}</span>
            <span>·</span>
            <span>{isFR ? 'Premier Vice-Président & COO, BAD' : 'First Vice President & COO, African Development Bank'}</span>
            <span>·</span>
            <span>{isFR ? 'Directeur Principal Banque Mondiale (33 Ans)' : '33-Year World Bank Senior Director'}</span>
            <span>·</span>
            <span className="text-[#C37238] font-semibold">"{isFR ? 'Citoyen du Monde' : 'Citizen of the World'}"</span>
          </div>
        </div>
      </section>

      {/* Main Narrative */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-14 space-y-16">
        {/* The Letter from the Founder Card */}
        <div>
          <FounderLetterCard />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Comprehensive Biographical Memoir (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Lead Section */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#162846]">
                {isFR
                  ? 'Une Vie de Cœur, de Vision et de Service Planétaire'
                  : 'A Life of Heart, Vision, and Global Service'}
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans">
                {isFR
                  ? 'La Fondation Emmanuel Ebot Mbi porte le nom de notre fondateur : un homme qui a consacré toute sa carrière au développement international non comme un simple choix professionnel, mais comme le prolongement naturel de sa vocation à secourir son prochain.'
                  : FOUNDER_BIO.intro}
              </p>
            </div>

            {/* Early Years */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <h3 className="font-serif text-xl font-bold text-[#162846]">
                {isFR
                  ? 'Origines & Racines : La Terre de Mamfe et Kumba'
                  : 'Early Roots: The Soil of Mamfe and Kumba'}
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                {isFR
                  ? 'Orphelin de père dès l’âge de six ans, façonné par la solidarité familiale et l’exemple d’une mère d’une bonté inépuisable, Emmanuel E. Mbi a grandi à Mamfe dans le Sud-Ouest du Cameroun avant de poursuivre ses études à Kumba, puis aux États-Unis avec les plus hautes distinctions.'
                  : FOUNDER_BIO.earlyLife}
              </p>
              <div className="p-4 bg-[#5295DC]/10 border border-[#5295DC]/25 rounded-xl text-xs text-[#162846] italic">
                {isFR
                  ? '« Sa mère lui a inculqué une générosité farouche face à la rareté. Emmanuel rappelait souvent que la véritable richesse ne se mesure pas à ce que l’on conserve, mais au nombre de vies que nos mains ont su relever de l’ombre. »'
                  : '"His mother’s fierce generosity in the face of scarcity left an indelible mark on his soul. Emmanuel often remarked that true wealth is measured not by what you retain, but by the number of lives your hands have lifted from the shadows."'}
              </div>
            </div>

            {/* The World Bank & International Leadership */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <h3 className="font-serif text-xl font-bold text-[#162846]">
                {isFR
                  ? 'Plus de 33 Années à Façonner le Développement Mondial'
                  : 'Over 33 Years Shaping Global Development'}
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                {isFR
                  ? 'Avant de rejoindre la Banque Africaine de Développement (BAD) en tant que Premier Vice-Président et Directeur Général en juillet 2012, Emmanuel E. Mbi a exercé plus de 33 ans à la Banque Mondiale, où il a dirigé les Opérations pour la région Moyen-Orient & Afrique du Nord (MENA), la région des Grands Lacs, l’Égypte, le Yémen et Djibouti.'
                  : FOUNDER_BIO.internationalCareer}
              </p>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                {isFR
                  ? 'Polyglotte d’exception, maniant avec élégance le français, l’anglais, l’espagnol, le portugais et le pidgin, il a su instaurer des alliances fondées sur le respect mutuel tant avec les chefs d’État qu’avec les leaders villageois, méritant le titre affectueux de « Citoyen du Monde ».'
                  : 'Throughout his extensive assignments across Latin America, the Caribbean, the Middle East, and sub-Saharan Africa, Mr. Mbi was renowned for his operational rigor and profound respect for local sovereignty. Fluent in French, Spanish, Portuguese, English, and Pidgin English, he forged enduring trust with heads of state and grassroots community leaders alike, earning the affectionate moniker "Citizen of the World."'}
              </p>
            </div>

            {/* Accolades */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <h3 className="font-serif text-xl font-bold text-[#162846]">
                {isFR ? 'Distinctions et Prix d’Excellence' : 'Honors and Global Distinctions'}
              </h3>
              <div className="space-y-3">
                {FOUNDER_BIO.accolades.map((acc, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white border border-slate-200 rounded-xl flex items-start gap-3 shadow-xs"
                  >
                    <Award className="w-5 h-5 text-[#C37238] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-sm text-[#162846]">{acc.award}</div>
                      <div className="text-xs text-slate-500">{acc.by} · {acc.year}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Philanthropic Covenant */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <h3 className="font-serif text-xl font-bold text-[#162846]">
                {isFR ? 'La Fondation : Un Héritage Vivant' : 'The Foundation: A Living Legacy'}
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                {isFR
                  ? 'Porté par sa foi et son empathie naturelle, il a souhaité poursuivre cette mission d’élévation humaine, menant à la création de cette fondation.'
                  : FOUNDER_BIO.legacy}
              </p>
              <div className="p-6 bg-[#162846] text-white rounded-2xl shadow-md space-y-4">
                <Quote className="w-8 h-8 text-[#DE884A] opacity-60" />
                <p className="font-serif italic text-base sm:text-lg text-slate-100">
                  {isFR
                    ? '« En hommage à notre regretté Président Émérite, le Conseil a résolu à l’unanimité de poursuivre l’œuvre qu’il a entamée avec tant de dévouement. Sa vision reste notre phare. »'
                    : '"In honoring our late Chairman Emeritus, the Board has unanimously resolved to carry forward the work he began with such passion. His vision remains our guiding light, and his legacy will shape every step we take as we move into this new chapter."'}
                </p>
                <div className="text-xs uppercase tracking-wider text-[#DE884A] font-semibold pt-2 border-t border-slate-700">
                  — {isFR ? 'Résolution Unanime du Conseil d’Administration' : 'Unanimous Resolution of the Board of Directors'}
                </div>
              </div>
            </div>

            {/* Chronology of Milestones */}
            <div className="space-y-6 pt-4 border-t border-slate-200">
              <h3 className="font-serif text-xl font-bold text-[#162846]">
                {isFR ? 'Chronologie des Grandes Étapes (1953 – 2024)' : 'Chronology of Milestones (1953 – 2024)'}
              </h3>
              <div className="relative border-l-2 border-slate-300 ml-4 pl-6 space-y-8">
                {TIMELINE_MILESTONES.map((item, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#C37238] group-hover:bg-[#C37238] transition-colors" />
                    <span className="text-xs font-mono font-bold text-[#C37238] uppercase tracking-wider">
                      {item.year}
                    </span>
                    <h4 className="font-serif text-base font-bold text-[#162846] mt-0.5">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Founder Picture Frame & Guestbook (4 cols) */}
          <div className="lg:col-span-4 space-y-8 sticky top-24">
            {/* Real Founder Picture Frame - No Box Underneath */}
            <FounderFrame variant="compact" />

            {/* Quick Action: Support His Memorial Fund */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#DE884A]/15 text-[#C37238] flex items-center justify-center mx-auto">
                <Heart className="w-5 h-5 text-[#C37238] fill-[#C37238]/20" />
              </div>
              <h4 className="font-serif text-base font-bold text-[#162846]">
                {isFR ? 'Fonds de Dotation Emmanuel Ebot Mbi' : 'The Emmanuel Ebot Mbi Scholarship Endowment'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isFR
                  ? 'Soutenez les élèves du CJMS, l’Orphelinat Acacia et les veuves entrepreneures en sa mémoire.'
                  : 'Support CJMS students, Acacia Orphanage assistance, and widow micro-business grants in his honor.'}
              </p>
              <button
                onClick={onOpenDonation}
                className="w-full py-2.5 px-4 bg-[#162846] hover:bg-[#1E365D] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer shadow-sm"
              >
                {isFR ? 'Faire un Don Mémorial' : 'Make a Memorial Contribution'}
              </button>
            </div>

            {/* Condolence & Tribute Guestbook */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-5 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <h4 className="font-serif text-base font-bold text-[#162846]">
                  {isFR ? 'Livre d’Or Mémorial' : 'Memorial Guestbook'}
                </h4>
                <span className="text-xs text-slate-500 font-mono">
                  {tributes.length} {isFR ? 'hommages' : 'reflections'}
                </span>
              </div>

              {/* Tributes List */}
              <div className="space-y-4 max-h-96 overflow-y-auto pr-1">
                {tributes.map((trib) => (
                  <div key={trib.id} className="p-3.5 bg-slate-50 rounded-xl space-y-2 border border-slate-100 text-left">
                    <p className="text-xs text-slate-700 italic leading-relaxed">
                      "{trib.message}"
                    </p>
                    <div className="text-[11px] text-slate-500 pt-1 border-t border-slate-200/60 flex items-center justify-between">
                      <span className="font-semibold text-[#162846]">{trib.author}</span>
                      <span className="text-slate-400">{trib.location}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Tribute Form */}
              {submitted ? (
                <div className="p-3 bg-[#509E60]/15 text-[#509E60] border border-[#509E60]/30 rounded-xl text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{isFR ? 'Merci pour votre hommage bienveillant.' : 'Thank you for your heartfelt tribute.'}</span>
                </div>
              ) : (
                <form onSubmit={handleAddTribute} className="space-y-3 pt-2 border-t border-slate-200">
                  <input
                    type="text"
                    required
                    placeholder={isFR ? 'Votre nom complet' : 'Your full name'}
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-[#C37238]"
                  />
                  <input
                    type="text"
                    placeholder={isFR ? 'Votre ville / pays' : 'Your city / affiliation'}
                    value={authorLocation}
                    onChange={(e) => setAuthorLocation(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-[#C37238]"
                  />
                  <textarea
                    required
                    rows={3}
                    placeholder={isFR ? 'Laissez un message ou un souvenir...' : 'Leave your condolence or tribute...'}
                    value={noteMessage}
                    onChange={(e) => setNoteMessage(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-[#C37238]"
                  />
                  <button
                    type="submit"
                    className="w-full py-2 bg-[#C37238] hover:bg-[#BA692F] text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isFR ? 'Publier l’Hommage' : 'Share Your Tribute'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
