import React, { useState } from 'react';
import { PageView } from '../types.ts';
import { Mail, Phone, MapPin, Send, CheckCircle2, Building, Clock, HelpCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface ContactViewProps {
  onNavigate: (view: PageView) => void;
  onOpenDonation: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate, onOpenDonation }) => {
  const { isFR } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState('general');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketId, setTicketId] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedTicket = `TKT-${Math.floor(100000 + Math.random() * 900000)}`;
      setTicketId(generatedTicket);
      setIsSubmitting(false);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 1000);
  };

  const faqs = isFR ? [
    {
      q: "La Fondation Emmanuel Ebot Mbi est-elle reconnue d'intérêt général ?",
      a: "Oui. La fondation est enregistrée en tant qu'organisation caritative 501(c)(3) aux États-Unis. Tous les dons bénéficient de la déductibilité fiscale maximale autorisée par la loi."
    },
    {
      q: "Comment sont sélectionnés les élèves boursiers ?",
      a: "Les candidats sont identifiés en concertation avec nos établissements partenaires, comités paroissiaux et leaders communautaires à Mamfe, Kumba, Limbe et Abidjan. La priorité est accordée aux orphelins et aux enfants issus de familles déplacées."
    },
    {
      q: "Puis-je dédier un don à la mémoire d'Emmanuel Ebot Mbi ?",
      a: "Absolument. Lors de votre contribution via notre plateforme ou par virement, vous pouvez mentionner 'En mémoire d'Emmanuel Ebot Mbi' ou rendre hommage à un proche."
    },
    {
      q: "Comment une organisation confessionnelle ou une école peut-elle solliciter un partenariat ?",
      a: "Veuillez sélectionner 'Partenariat de Terrain' dans le formulaire ci-dessous et indiquer les coordonnées officielles de votre structure. Notre équipe vous répondra sous 5 jours ouvrés."
    }
  ] : [
    {
      q: "Is the Emmanuel Ebot Mbi Foundation tax-exempt?",
      a: "Yes. The foundation operates as a registered 501(c)(3) tax-exempt public charitable organization in the United States. All donations are tax-deductible to the maximum extent permitted by law."
    },
    {
      q: "How are student scholarship recipients selected?",
      a: "Recipients are nominated through our verified partner schools, local parish committees, and community elders in Mamfe, Kumba, Limbe, and Abidjan. Priority is given to orphans, children from internally displaced families, and academically dedicated youth with acute financial hardship."
    },
    {
      q: "Can I designate a gift in memory or tribute to Emmanuel Ebot Mbi?",
      a: "Absolutely. When making a contribution via our donation portal or bank wire, you can designate your gift 'In Memory of Emmanuel Ebot Mbi' or in tribute to a loved one, and specify whether you wish it directed to the scholarship fund or IDP humanitarian care."
    },
    {
      q: "How can a faith organization or community school request collaboration?",
      a: "Please select 'Field Partnership / School Grant' in the contact form below, and provide the official registration, location, and student demographic details of your institution. Our field verification team will respond within 5 business days."
    }
  ];

  return (
    <div className="bg-[#FAF9F5] text-stone-800 pb-20">
      {/* Header */}
      <section className="bg-white border-b border-stone-200/80 py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="text-xs uppercase tracking-widest text-[#C37238] font-semibold mb-3 flex items-center gap-2">
            <span>{isFR ? 'Liaison Internationale & Secrétariat' : 'Global Liaison & Field Communications'}</span>
            <span className="text-stone-300">·</span>
            <span>{isFR ? 'Nous Contacter' : 'Get in Touch'}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 mb-4">
            {isFR ? 'Contacter la Fondation' : 'Contact the Foundation'}
          </h1>

          <p className="text-base sm:text-lg text-stone-600 max-w-3xl leading-relaxed">
            {isFR
              ? 'Que vous souhaitiez vous renseigner sur nos bourses, nos programmes de secours ou entrer en contact avec notre Conseil d’Administration, notre équipe de liaison se tient à votre entière disposition.'
              : 'Whether you are inquiring about partnerships, endowments, student scholarships, or wishing to connect with our Board of Directors, our liaison team welcomes your message.'}
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Office Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm space-y-6">
              <h2 className="font-serif text-lg font-bold text-stone-900 pb-3 border-b border-stone-100">
                {isFR ? 'Bureau Exécutif & Siège' : 'Liaison & Executive Office'}
              </h2>

              <div className="space-y-4 text-xs text-stone-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#DE884A]" />
                  </div>
                  <div>
                    <span className="font-semibold text-stone-900 block mb-0.5">{isFR ? 'Adresse Postale' : 'Physical Address'}</span>
                    <span className="text-stone-600">
                      5000 Thayer Center, Suite C<br />
                      Oakland, MD 21550 USA
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#DE884A]" />
                  </div>
                  <div>
                    <span className="font-semibold text-stone-900 block mb-0.5">{isFR ? 'Courriel Officiel' : 'Official Inquiries'}</span>
                    <a
                      href="mailto:info@eembifoundation.org"
                      className="text-stone-600 hover:text-amber-700 transition-colors"
                    >
                      info@eembifoundation.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#DE884A]" />
                  </div>
                  <div>
                    <span className="font-semibold text-stone-900 block mb-0.5">{isFR ? 'Téléphone Direct' : 'Direct Telephone'}</span>
                    <a
                      href="tel:+13055873407"
                      className="text-stone-600 hover:text-amber-700 transition-colors font-mono"
                    >
                      +1 (305) 587-3407
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick FAQ summary */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm space-y-4">
              <h3 className="font-serif text-base font-bold text-stone-900 pb-2 border-b border-stone-100 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#C37238]" />
                <span>{isFR ? 'Questions Fréquentes' : 'Frequently Asked Questions'}</span>
              </h3>
              <div className="space-y-3 text-xs">
                {faqs.map((faq, i) => (
                  <div key={i} className="space-y-1">
                    <div className="font-semibold text-stone-800">{faq.q}</div>
                    <div className="text-stone-600 leading-relaxed">{faq.a}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 bg-white border border-stone-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
            <div className="space-y-1 pb-4 border-b border-stone-100">
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                {isFR ? 'Envoyer un Message au Secrétariat' : 'Send a Direct Message'}
              </h2>
              <p className="text-xs text-stone-500">
                {isFR
                  ? 'Toutes les correspondances sont examinées par nos équipes de coordination.'
                  : 'All correspondences are reviewed directly by our institutional liaison team.'}
              </p>
            </div>

            {ticketId ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="font-serif text-lg font-bold text-emerald-950">
                  {isFR ? 'Message Transmis avec Succès' : 'Message Transmitted Successfully'}
                </h3>
                <p className="text-xs text-emerald-800 max-w-md mx-auto">
                  {isFR
                    ? `Votre numéro de dossier officiel est ${ticketId}. Nous vous répondrons dans les plus brefs délais.`
                    : `Your official ticket reference is ${ticketId}. A liaison officer will follow up with you.`}
                </p>
                <button
                  onClick={() => setTicketId(null)}
                  className="mt-3 px-4 py-2 bg-emerald-800 text-white rounded-lg text-xs font-semibold cursor-pointer"
                >
                  {isFR ? 'Envoyer un Nouveau Message' : 'Send Another Message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      {isFR ? 'Votre Nom Complet *' : 'Your Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={isFR ? 'Ex : Sylvion Mbi' : 'e.g. John Doe'}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs focus:outline-none focus:border-[#C37238]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      {isFR ? 'Adresse Email *' : 'Email Address *'}
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="contact@example.org"
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs focus:outline-none focus:border-[#C37238]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      {isFR ? 'Numéro de Téléphone' : 'Phone Number'}
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs focus:outline-none focus:border-[#C37238]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      {isFR ? 'Objet de Votre Requête' : 'Inquiry Topic'}
                    </label>
                    <select
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs focus:outline-none focus:border-[#C37238]"
                    >
                      <option value="general">{isFR ? 'Renseignements Généraux' : 'General Inquiry'}</option>
                      <option value="scholarship">{isFR ? 'Bourses Scolaires CJMS' : 'CJMS Scholarship Program'}</option>
                      <option value="orphanage">{isFR ? 'Aide Orphelinat Acacia' : 'Acacia Orphanage Relief'}</option>
                      <option value="partnership">{isFR ? 'Partenariat Institutionnel' : 'Institutional Partnership'}</option>
                      <option value="donation">{isFR ? 'Dons & Legs Mémoriaux' : 'Memorial Endowments'}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {isFR ? 'Votre Message *' : 'Your Message *'}
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={isFR ? 'Décrivez votre demande en quelques lignes...' : 'Please describe your inquiry or message...'}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs focus:outline-none focus:border-[#C37238]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#162846] hover:bg-[#1E365D] text-white font-semibold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? (isFR ? 'Transmission en cours...' : 'Transmitting...') : (isFR ? 'Transmettre le Message' : 'Send Official Message')}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
