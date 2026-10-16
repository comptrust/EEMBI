import React, { useState } from 'react';
import { PageView, DonationRecord } from '../types.ts';
import { Heart, ShieldCheck, Check, DollarSign, ArrowLeft, Printer, Download, Sparkles, Building2, CreditCard } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface DonationViewProps {
  onBack?: () => void;
  onNavigate?: (view: PageView) => void;
}

export const DonationView: React.FC<DonationViewProps> = ({ onBack, onNavigate }) => {
  const { isFR } = useLanguage();
  const [amount, setAmount] = useState<number>(100);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [selectedFund, setSelectedFund] = useState<string>('scholarship');
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  const [isTribute, setIsTribute] = useState<boolean>(true);
  const [tributeName, setTributeName] = useState<string>('In Memory of Emmanuel Ebot Mbi');
  const [comment, setComment] = useState<string>('');
  
  // Personal Info
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'bank_transfer'>('card');

  // Card details
  const [cardNumber, setCardNumber] = useState<string>('•••• •••• •••• 4242');
  const [expiry, setExpiry] = useState<string>('12/28');
  const [cvc, setCvc] = useState<string>('345');

  // Success state & receipt
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [completedRecord, setCompletedRecord] = useState<DonationRecord | null>(null);

  const presetAmounts = [25, 50, 100, 250, 500];

  const handleSelectAmount = (val: number) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(val);
    if (val) {
      setAmount(Number(val));
    }
  };

  const getImpactDescription = (amt: number) => {
    if (amt < 40) {
      return 'Provides full school supplies (textbooks, notebooks, mathematical set, stationery) for 2 elementary pupils.';
    } else if (amt < 80) {
      return 'Provides 1 month of essential dry rations (rice, grains, oil) and hygiene dignity kits for a displaced family.';
    } else if (amt < 180) {
      return 'Covers an entire semester of secondary school tuition, registration fees, and textbooks for an orphaned student.';
    } else if (amt < 350) {
      return 'Provides a complete vocational apprentice starter toolkit (carpentry, tailoring, or mechanics) for young adult independence.';
    } else {
      return 'Sponsors comprehensive classroom equipment, clean water filtration, and emergency medical reserves for community care.';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !email) return;

    setIsProcessing(true);
    setTimeout(() => {
      const record: DonationRecord = {
        id: `EEMBI-${Date.now().toString().slice(-6)}`,
        amount: amount,
        frequency,
        fund: selectedFund === 'scholarship' ? 'Emmanuel Ebot Mbi Scholarship Fund' : selectedFund === 'idp' ? 'IDP & Displaced Family Relief' : selectedFund === 'cote' ? 'Côte d’Ivoire Youth Apprenticeship' : 'General Humanitarian Mission',
        donorName: isAnonymous ? 'Anonymous Benefactor' : `${firstName} ${lastName}`.trim(),
        donorEmail: email,
        isAnonymous,
        tributeName: isTribute ? tributeName : undefined,
        comment: comment || undefined,
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        paymentMethod
      };
      setCompletedRecord(record);
      setIsProcessing(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1200);
  };

  // If donation completed, show printable official tax receipt
  if (completedRecord) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white border border-stone-200 rounded-2xl shadow-xl overflow-hidden p-8 sm:p-12 relative">
          {/* Subtle watermarked seal */}
          <div className="text-center space-y-4 pb-8 border-b border-stone-200">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <Check className="w-8 h-8" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Tax-Deductible Contribution Confirmed
            </span>
            <h2 className="font-serif text-3xl font-bold text-stone-900">
              Thank You for Your Generosity
            </h2>
            <p className="text-sm text-stone-600 max-w-lg mx-auto">
              Your gift carries forward the lifelong mission of Emmanuel Ebot Mbi, bringing direct educational opportunity and human dignity to those who need it most.
            </p>
          </div>

          {/* Official Receipt Box */}
          <div className="my-8 bg-[#FAF9F5] border border-stone-300 rounded-xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-stone-200">
              <div>
                <span className="text-xs text-stone-500 uppercase tracking-wider block">Official Receipt</span>
                <span className="font-mono font-bold text-lg text-stone-900">{completedRecord.id}</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-stone-500 block">Date of Gift</span>
                <span className="text-sm font-medium text-stone-800">{completedRecord.date}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div>
                <span className="text-xs text-stone-500 block mb-1">Donor Information</span>
                <p className="font-semibold text-stone-900">{completedRecord.donorName}</p>
                <p className="text-stone-600 text-xs">{completedRecord.donorEmail}</p>
              </div>

              <div>
                <span className="text-xs text-stone-500 block mb-1">Fund Allocation</span>
                <p className="font-semibold text-stone-900">{completedRecord.fund}</p>
                <p className="text-xs text-stone-600 capitalize">{completedRecord.frequency} contribution</p>
              </div>

              <div>
                <span className="text-xs text-stone-500 block mb-1">Total Gift Amount</span>
                <p className="font-serif text-2xl font-bold text-amber-700">
                  ${completedRecord.amount.toFixed(2)} USD
                </p>
              </div>

              <div>
                <span className="text-xs text-stone-500 block mb-1">Payment Method</span>
                <p className="text-stone-800 font-medium capitalize">
                  {completedRecord.paymentMethod === 'card' ? 'Credit / Debit Card (SSL Encrypted)' : completedRecord.paymentMethod === 'paypal' ? 'PayPal Direct' : 'Bank Wire Transfer'}
                </p>
                <span className="text-[11px] text-stone-500">Status: Verified & Processed</span>
              </div>
            </div>

            {completedRecord.tributeName && (
              <div className="pt-4 border-t border-stone-200 text-xs text-stone-700 bg-white p-3 rounded-lg border border-stone-200">
                <span className="font-semibold text-stone-900 block mb-0.5">Tribute Dedication:</span>
                "{completedRecord.tributeName}"
                {completedRecord.comment && <p className="italic text-stone-500 mt-1">"{completedRecord.comment}"</p>}
              </div>
            )}

            <div className="pt-4 border-t border-stone-200 text-[11px] text-stone-500 space-y-1">
              <p>Emmanuel Ebot Mbi Foundation is a recognized 501(c)(3) charitable organization.</p>
              <p>Tax EIN: Available upon formal year-end letter · 5000 Thayer Center, Suite C, Oakland MD 21550 USA</p>
              <p className="text-stone-400">No goods or services were provided in exchange for this contribution other than intangible religious or charitable benefits.</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-5 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg text-sm font-medium transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print Tax Receipt</span>
            </button>

            <button
              onClick={() => {
                setCompletedRecord(null);
                if (onBack) onBack();
              }}
              className="flex items-center gap-2 px-6 py-2.5 bg-[#0F1E36] hover:bg-[#1A3358] text-white rounded-lg text-sm font-semibold transition-colors cursor-pointer"
            >
              <span>Return to Foundation Home</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12">
      {onBack && (
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold text-stone-600 hover:text-stone-900 mb-6 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Previous Page</span>
        </button>
      )}

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
        <span className="text-xs uppercase tracking-widest font-semibold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60 inline-flex items-center gap-1.5">
          <Heart className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />
          <span>{isFR ? 'Don Humanitaire Direct' : 'Direct Humanitarian Giving'}</span>
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
          {isFR ? 'Soutenir la Fondation Emmanuel Ebot Mbi' : 'Support The Emmanuel Ebot Mbi Foundation'}
        </h1>
        <p className="text-sm text-stone-600 leading-relaxed">
          {isFR
            ? '100% de votre don déductible finance directement les bourses scolaires, l’aide aux personnes déplacées et le soutien communautaire au Cameroun et en Côte d’Ivoire.'
            : "100% of your tax-deductible gift directly funds student scholarships, IDP humanitarian relief, and community support in Cameroon and Côte d'Ivoire."}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Donation Form (8 cols) */}
        <div className="lg:col-span-8 bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-8">
          {/* Frequency Toggle */}
          <div className="flex items-center justify-center p-1 bg-stone-100 rounded-xl max-w-xs mx-auto text-xs font-semibold">
            <button
              type="button"
              onClick={() => setFrequency('once')}
              className={`flex-1 py-2 text-center rounded-lg transition-all cursor-pointer ${
                frequency === 'once'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {isFR ? 'Don Ponctuel' : 'One-Time Gift'}
            </button>
            <button
              type="button"
              onClick={() => setFrequency('monthly')}
              className={`flex-1 py-2 text-center rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 ${
                frequency === 'monthly'
                  ? 'bg-[#162846] text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <span>{isFR ? 'Soutien Mensuel' : 'Monthly Sustainer'}</span>
              <Sparkles className="w-3 h-3 text-amber-400" />
            </button>
          </div>

          {/* Amount Selection */}
          <div className="space-y-4">
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700">
              Select Contribution Amount (USD)
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
              {presetAmounts.map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => handleSelectAmount(val)}
                  className={`py-3 px-2 rounded-xl text-center font-serif text-lg font-bold transition-all cursor-pointer border ${
                    amount === val && !customAmount
                      ? 'bg-amber-600 border-amber-600 text-white shadow-md'
                      : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-800'
                  }`}
                >
                  ${val}
                </button>
              ))}
            </div>

            {/* Custom Amount Input */}
            <div className="relative mt-3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
                <DollarSign className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={customAmount}
                onChange={handleCustomChange}
                placeholder="Or enter a custom amount (USD)"
                className="w-full pl-9 pr-4 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:border-amber-600 transition-colors"
              />
            </div>

            {/* Impact statement box */}
            <div className="p-3.5 bg-amber-50/70 border border-amber-200/80 rounded-xl flex items-start gap-3 text-xs text-amber-950">
              <Sparkles className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block mb-0.5">Your Impact:</span>
                <span>{getImpactDescription(amount)}</span>
              </div>
            </div>
          </div>

          {/* Fund Designation */}
          <div className="space-y-3">
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700">
              Direct Your Contribution
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {[
                { id: 'scholarship', label: 'Emmanuel Ebot Mbi Scholarship Fund', desc: 'Tuition, textbooks, uniforms & examinations' },
                { id: 'idp', label: 'IDP & Vulnerable Family Relief', desc: 'Emergency food, shelter & dignity kits in SW Cameroon' },
                { id: 'cote', label: 'Côte d’Ivoire Youth Apprenticeship', desc: 'Vocational training & artisan kits in Abidjan' },
                { id: 'general', label: 'Where Needed Most', desc: 'Flexible allocation for immediate priority field needs' }
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedFund(item.id)}
                  className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                    selectedFund === item.id
                      ? 'border-amber-600 bg-amber-50/50 text-stone-900 shadow-xs'
                      : 'border-stone-200 bg-white hover:bg-stone-50 text-stone-700'
                  }`}
                >
                  <span className="font-semibold block text-stone-900 mb-0.5">{item.label}</span>
                  <span className="text-[11px] text-stone-500">{item.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tribute & Dedication */}
          <div className="pt-2 border-t border-stone-100 space-y-4">
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-stone-700">
                <input
                  type="checkbox"
                  checked={isTribute}
                  onChange={(e) => setIsTribute(e.target.checked)}
                  className="rounded border-stone-300 text-amber-600 focus:ring-amber-500"
                />
                <span>Dedicate this gift in memory or in honor of someone</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-stone-700">
                <input
                  type="checkbox"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className="rounded border-stone-300 text-amber-600 focus:ring-amber-500"
                />
                <span>Make anonymous</span>
              </label>
            </div>

            {isTribute && (
              <div className="space-y-3 bg-stone-50 p-4 rounded-xl border border-stone-200">
                <div>
                  <label className="block text-[11px] font-semibold text-stone-600 uppercase mb-1">
                    Dedication Name / Tribute
                  </label>
                  <input
                    type="text"
                    value={tributeName}
                    onChange={(e) => setTributeName(e.target.value)}
                    placeholder="e.g. In Memory of Emmanuel Ebot Mbi"
                    className="w-full text-xs px-3 py-2 bg-white border border-stone-200 rounded-lg focus:outline-none focus:border-amber-600"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-stone-600 uppercase mb-1">
                    Optional Personal Note
                  </label>
                  <textarea
                    rows={2}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Share a thought, blessing, or word of encouragement"
                    className="w-full text-xs px-3 py-2 bg-white border border-stone-200 rounded-lg focus:outline-none focus:border-amber-600 resize-none"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Donor Information */}
          <form onSubmit={handleSubmit} className="space-y-6 pt-2 border-t border-stone-100">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-700">
              Donor Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-stone-600 mb-1">First Name *</label>
                <input
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="e.g. David"
                  className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:bg-white focus:outline-none focus:border-amber-600"
                />
              </div>

              <div>
                <label className="block text-xs text-stone-600 mb-1">Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="e.g. Johnson"
                  className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:bg-white focus:outline-none focus:border-amber-600"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs text-stone-600 mb-1">Email Address for Official Receipt *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:bg-white focus:outline-none focus:border-amber-600"
                />
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-3 pt-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700">
                Payment Channel
              </label>

              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                    paymentMethod === 'card'
                      ? 'border-amber-600 bg-amber-50/50 text-stone-900 font-semibold'
                      : 'border-stone-200 bg-white hover:bg-stone-50 text-stone-600'
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-amber-700" />
                  <span className="text-xs">Credit Card</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('paypal')}
                  className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                    paymentMethod === 'paypal'
                      ? 'border-amber-600 bg-amber-50/50 text-stone-900 font-semibold'
                      : 'border-stone-200 bg-white hover:bg-stone-50 text-stone-600'
                  }`}
                >
                  <span className="font-bold font-serif text-blue-700 italic">PayPal</span>
                  <span className="text-xs">PayPal Checkout</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('bank_transfer')}
                  className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                    paymentMethod === 'bank_transfer'
                      ? 'border-amber-600 bg-amber-50/50 text-stone-900 font-semibold'
                      : 'border-stone-200 bg-white hover:bg-stone-50 text-stone-600'
                  }`}
                >
                  <Building2 className="w-5 h-5 text-stone-700" />
                  <span className="text-xs">Bank Wire</span>
                </button>
              </div>

              {/* Conditional Card inputs */}
              {paymentMethod === 'card' && (
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-3 mt-3">
                  <div className="flex items-center justify-between text-xs text-stone-600 pb-1">
                    <span>Card Information</span>
                    <span className="flex items-center gap-1 text-[11px] text-emerald-700">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      256-bit SSL Secure
                    </span>
                  </div>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full text-xs font-mono px-3 py-2 bg-white border border-stone-200 rounded-lg focus:outline-none focus:border-amber-600"
                    placeholder="Card Number"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      placeholder="MM / YY"
                      className="text-xs font-mono px-3 py-2 bg-white border border-stone-200 rounded-lg focus:outline-none focus:border-amber-600"
                    />
                    <input
                      type="text"
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                      placeholder="CVC"
                      className="text-xs font-mono px-3 py-2 bg-white border border-stone-200 rounded-lg focus:outline-none focus:border-amber-600"
                    />
                  </div>
                </div>
              )}

              {paymentMethod === 'paypal' && (
                <div className="p-4 bg-blue-50/60 rounded-xl border border-blue-200 text-xs text-blue-900 space-y-2 mt-3">
                  <p className="font-semibold">PayPal Express Charitable Giving</p>
                  <p className="text-blue-800 text-[11px]">
                    Clicking "Complete Contribution" will simulate direct payment authorization through the verified Emmanuel Ebot Mbi Foundation PayPal portal.
                  </p>
                </div>
              )}

              {paymentMethod === 'bank_transfer' && (
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-700 space-y-2 mt-3">
                  <p className="font-semibold text-stone-900">Direct Bank Wire / ACH Information</p>
                  <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-stone-600 bg-white p-3 rounded border border-stone-200">
                    <div>Bank: First United National Bank</div>
                    <div>Account: Emmanuel Ebot Mbi Fdn</div>
                    <div>Routing (ABA): 051400549</div>
                    <div>SWIFT / BIC: FUNBUS33</div>
                    <div className="col-span-2">HQ Address: 5000 Thayer Ctr, Ste C, Oakland MD 21550</div>
                  </div>
                  <p className="text-[11px] text-stone-500">
                    Submitting this form registers your pledge and sends a transfer reference ticket to your email.
                  </p>
                </div>
              )}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-4 px-6 bg-[#162846] hover:bg-[#1E365D] text-white rounded-xl text-base font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
            >
              {isProcessing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>{isFR ? 'Autorisation sécurisée du don...' : 'Authorizing Secure Contribution...'}</span>
                </>
              ) : (
                <>
                  <Heart className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <span>
                    {isFR
                      ? `Finaliser mon don de $${amount} ${frequency === 'monthly' ? 'mensuel' : ''}`
                      : `Complete $${amount} ${frequency === 'monthly' ? 'Monthly' : ''} Contribution`}
                  </span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right: Institutional Trust & Transparency Card (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#FAF9F5] border border-stone-200 rounded-2xl p-6 space-y-5">
            <h3 className="font-serif text-lg font-bold text-stone-900">
              Our Transparency Covenant
            </h3>

            <div className="space-y-4 text-xs text-stone-600 leading-relaxed">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-stone-900 block mb-0.5">Zero Leakage Guarantee</span>
                  Every dollar designated for scholarships or IDP aid is physically disbursed to schools or verified recipients.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-stone-900 block mb-0.5">Grassroots Verification</span>
                  We distribute aid through inspected local parishes, mosques, and community councils with transparent registries.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-stone-900 block mb-0.5">Board Stewardship</span>
                  Governed by retired World Bank and African Development Bank senior directors and community trustees.
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 text-center">
              <span className="text-[11px] text-stone-500 block">Questions regarding endowment or corporate matching?</span>
              <a
                href="mailto:info@eembifoundation.org"
                className="text-xs font-semibold text-amber-700 hover:text-amber-800 mt-1 inline-block"
              >
                info@eembifoundation.org
              </a>
            </div>
          </div>

          {/* Tribute Quote Box */}
          <div className="bg-[#0F1E36] text-stone-200 rounded-2xl p-6 border border-slate-800 relative overflow-hidden">
            <p className="font-serif italic text-sm text-stone-100 leading-relaxed mb-3">
              "When you educate a child from a struggling village, you don't just help an individual—you uplift an entire lineage."
            </p>
            <p className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold">
              — Emmanuel Ebot Mbi (1953–2024)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
