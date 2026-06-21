'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Check, ArrowRight, ArrowLeft, RefreshCw, Home, Shield, Flame, PiggyBank, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuizState {
  step: number;
  tenure: string;
  heating: string;
  benefits: string;
}

export default function EligibilityQuiz({ inline = false }: { inline?: boolean }) {
  const router = useRouter();
  const [state, setState] = useState<QuizState>({
    step: 1,
    tenure: '',
    heating: '',
    benefits: '',
  });

  const nextStep = () => {
    if (state.step === 3) {
      calculateResult();
    } else {
      setState(prev => ({ ...prev, step: prev.step + 1 }));
    }
  };

  const prevStep = () => {
    setState(prev => ({ ...prev, step: prev.step - 1 }));
  };

  const selectOption = (field: keyof QuizState, value: string) => {
    setState(prev => ({ ...prev, [field]: value }));
  };

  const calculateResult = () => {
    setState(prev => ({ ...prev, step: 4 }));
    // Fire confetti for qualified users
    const isQualified = 
      (state.tenure === 'owner' || state.tenure === 'tenant') && 
      (state.benefits === 'yes' || state.benefits === 'low-income');
      
    if (isQualified) {
      setTimeout(() => {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.7 }
        });
      }, 200);
    }
  };

  const resetQuiz = () => {
    setState({
      step: 1,
      tenure: '',
      heating: '',
      benefits: '',
    });
  };

  const isStepValid = () => {
    if (state.step === 1) return state.tenure !== '';
    if (state.step === 2) return state.heating !== '';
    if (state.step === 3) return state.benefits !== '';
    return true;
  };

  // Determine eligibility
  const qualifiesForEco4 = 
    (state.tenure === 'owner' || state.tenure === 'tenant') &&
    (state.benefits === 'yes' || state.benefits === 'low-income') &&
    (state.heating === 'old-gas' || state.heating === 'electric' || state.heating === 'oil-lpg');

  const qualifiesForGbis = 
    (state.tenure === 'owner' || state.tenure === 'tenant') &&
    (state.benefits === 'yes' || state.benefits === 'low-income') &&
    (state.heating === 'efficient-gas' || state.heating === 'other');

  const qualifiesFlex = 
    (state.tenure === 'owner' || state.tenure === 'tenant') &&
    state.benefits === 'no-benefits'; // General GBIS criteria or subsidized

  return (
    <div className={`w-full bg-white rounded-2xl border border-slate-200 p-6 md:p-8 ${inline ? '' : 'shadow-xl max-w-2xl mx-auto'}`}>
      {/* Progress header */}
      {state.step <= 3 && (
        <div className="mb-6">
          <div className="flex justify-between items-center text-sm font-semibold text-slate-500 mb-2">
            <span>Question {state.step} of 3</span>
            <span>{Math.round(((state.step - 1) / 3) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
            <div 
              className="bg-emerald-600 h-full transition-all duration-300"
              style={{ width: `${(state.step / 3) * 100}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Step 1: Tenure */}
      {state.step === 1 && (
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">Do you own your home or rent?</h3>
            <p className="text-slate-500 text-sm">Government grants target specific residential statuses.</p>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {[
              { id: 'owner', label: 'Homeowner', desc: 'I own the property (mortgaged or outright)', icon: Home },
              { id: 'tenant', label: 'Private Tenant', desc: 'I rent from a private landlord', icon: Shield },
              { id: 'council', label: 'Council / Housing Association', desc: 'I rent from the local council or housing assoc', icon: Shield },
              { id: 'landlord', label: 'Landlord', desc: 'I own the property and rent it to tenants', icon: Home },
            ].map(opt => {
              const Icon = opt.icon;
              const isSelected = state.tenure === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => selectOption('tenure', opt.id)}
                  className={`flex items-start gap-4 p-4 rounded-xl text-left border-2 transition-all cursor-pointer ${
                    isSelected 
                      ? 'border-emerald-600 bg-emerald-50/50 ring-2 ring-emerald-500/10' 
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    <Icon size={20} />
                  </div>
                  <div className="flex-1">
                    <span className="block font-bold text-slate-900 text-base">{opt.label}</span>
                    <span className="block text-slate-500 text-xs mt-0.5">{opt.desc}</span>
                  </div>
                  {isSelected && (
                    <div className="bg-emerald-600 text-white rounded-full p-1 self-center">
                      <Check size={14} className="stroke-[3]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Step 2: Heating */}
      {state.step === 2 && (
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">What is your main heating system?</h3>
            <p className="text-slate-500 text-sm">Knowing your current heating system helps determine which grants apply.</p>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {[
              { id: 'old-gas', label: 'Old/Broken Mains Gas Boiler', desc: 'Boiler is old (installed before 2005) or broken', icon: Flame },
              { id: 'electric', label: 'Electric / Storage Heaters', desc: 'Electric panel heaters, storage heaters or portable fires', icon: Flame },
              { id: 'oil-lpg', label: 'Oil / LPG Heating System', desc: 'Boiler runs on heating oil or liquefied petroleum gas', icon: Flame },
              { id: 'efficient-gas', label: 'Modern Mains Gas Boiler', desc: 'Efficient condensing boiler installed after 2005', icon: Flame },
              { id: 'other', label: 'Other / Biomass / Heat Pump', desc: 'Underfloor only, heat pump, solar or solid fuel', icon: Flame },
            ].map(opt => {
              const Icon = opt.icon;
              const isSelected = state.heating === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => selectOption('heating', opt.id)}
                  className={`flex items-start gap-4 p-4 rounded-xl text-left border-2 transition-all cursor-pointer ${
                    isSelected 
                      ? 'border-emerald-600 bg-emerald-50/50 ring-2 ring-emerald-500/10' 
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    <Icon size={20} />
                  </div>
                  <div className="flex-1">
                    <span className="block font-bold text-slate-900 text-base">{opt.label}</span>
                    <span className="block text-slate-500 text-xs mt-0.5">{opt.desc}</span>
                  </div>
                  {isSelected && (
                    <div className="bg-emerald-600 text-white rounded-full p-1 self-center">
                      <Check size={14} className="stroke-[3]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Step 3: Benefits */}
      {state.step === 3 && (
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">Do you receive any qualifying benefits?</h3>
            <p className="text-slate-500 text-sm">Benefits include: Universal Credit, Pension Credit, Child/Working Tax Credit, Housing Benefit, JSA, ESA, etc.</p>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {[
              { id: 'yes', label: 'Yes, I receive qualifying benefits', desc: 'One or more members of our house receives government benefits', icon: PiggyBank },
              { id: 'low-income', label: 'No, but household income is under £31,000', desc: 'Low-income households qualify under Local Authority Flex rules', icon: PiggyBank },
              { id: 'no-benefits', label: 'No, and income is over £31,000', desc: 'We do not receive benefits and our income is above the threshold', icon: PiggyBank },
            ].map(opt => {
              const Icon = opt.icon;
              const isSelected = state.benefits === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => selectOption('benefits', opt.id)}
                  className={`flex items-start gap-4 p-4 rounded-xl text-left border-2 transition-all cursor-pointer ${
                    isSelected 
                      ? 'border-emerald-600 bg-emerald-50/50 ring-2 ring-emerald-500/10' 
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    <Icon size={20} />
                  </div>
                  <div className="flex-1">
                    <span className="block font-bold text-slate-900 text-base">{opt.label}</span>
                    <span className="block text-slate-500 text-xs mt-0.5">{opt.desc}</span>
                  </div>
                  {isSelected && (
                    <div className="bg-emerald-600 text-white rounded-full p-1 self-center">
                      <Check size={14} className="stroke-[3]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Result Page (Step 4) */}
      {state.step === 4 && (
        <div className="text-center space-y-6">
          {qualifiesForEco4 && (
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                <Sparkles size={36} className="animate-pulse" />
              </div>
              <div className="space-y-2">
                <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  Highly Eligible
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">You Qualify for a Free Boiler Upgrade & Insulation!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Great news! Based on your answers, you are highly eligible for a <strong>100% free government ECO4 grant</strong> to replace your heating system and insulate your property.
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left space-y-2 text-sm max-w-md mx-auto">
                <div className="flex items-center gap-2 font-semibold text-slate-800">
                  <Check size={16} className="text-emerald-600 stroke-[3]" /> Free Air Source Heat Pump / Boiler Install
                </div>
                <div className="flex items-center gap-2 font-semibold text-slate-800">
                  <Check size={16} className="text-emerald-600 stroke-[3]" /> Free Cavity & Loft Insulation upgrades
                </div>
                <div className="flex items-center gap-2 font-semibold text-slate-800">
                  <Check size={16} className="text-emerald-600 stroke-[3]" /> Zero cost to you (fully funded by UK energy suppliers)
                </div>
              </div>
            </div>
          )}

          {qualifiesForGbis && (
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                <Sparkles size={36} />
              </div>
              <div className="space-y-2">
                <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  Eligible for Insulation
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">You Qualify for Free Home Insulation!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Fantastic! You qualify for a **100% free home insulation grant** under the Great British Insulation Scheme (GBIS) or ECO4 to lock in heat and save money.
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left space-y-2 text-sm max-w-md mx-auto">
                <div className="flex items-center gap-2 font-semibold text-slate-800">
                  <Check size={16} className="text-emerald-600 stroke-[3]" /> Free Loft or Underfloor Insulation
                </div>
                <div className="flex items-center gap-2 font-semibold text-slate-800">
                  <Check size={16} className="text-emerald-600 stroke-[3]" /> Free External/Internal Wall Insulation
                </div>
                <div className="flex items-center gap-2 font-semibold text-slate-800">
                  <Check size={16} className="text-emerald-600 stroke-[3]" /> Save up to £550/year on energy bills
                </div>
              </div>
            </div>
          )}

          {(!qualifiesForEco4 && !qualifiesForGbis && qualifiesFlex) && (
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                <Shield size={36} />
              </div>
              <div className="space-y-2">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  Assessment Needed
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">You May Qualify for Subsidised Upgrades!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Even though you don't receive benefits, you may still qualify for fully or partially-funded upgrades under council flex groups, or interest-free green finance.
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left space-y-2 text-sm max-w-md mx-auto">
                <div className="flex items-center gap-2 font-semibold text-slate-800">
                  <Check size={16} className="text-blue-600 stroke-[3]" /> Partially-funded insulation schemes
                </div>
                <div className="flex items-center gap-2 font-semibold text-slate-800">
                  <Check size={16} className="text-blue-600 stroke-[3]" /> Energy Performance Certificate (EPC) surveys
                </div>
                <div className="flex items-center gap-2 font-semibold text-slate-800">
                  <Check size={16} className="text-blue-600 stroke-[3]" /> Professional recommendations from our team
                </div>
              </div>
            </div>
          )}

          {(!qualifiesForEco4 && !qualifiesForGbis && !qualifiesFlex) && (
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center">
                <Shield size={36} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Let's Perform a Personal Assessment</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Your situation requires a manual review. You might still qualify through local council initiatives or specific regional grants.
                </p>
              </div>
            </div>
          )}

          <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <button
              onClick={() => {
                // Redirect to contact form with autofilled details
                const params = new URLSearchParams({
                  tenure: state.tenure,
                  heating: state.heating,
                  benefits: state.benefits,
                  eligible: qualifiesForEco4 || qualifiesForGbis ? 'yes' : 'maybe'
                });
                router.push(`/contact?${params.toString()}`);
              }}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-emerald-600/20 active:scale-[0.98] flex items-center justify-center gap-2"
            >
              Claim Your Free Grant Now
              <ArrowRight size={18} />
            </button>
            <button
              onClick={resetQuiz}
              className="border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <RefreshCw size={16} />
              Start Again
            </button>
          </div>
        </div>
      )}

      {/* Buttons for Navigation */}
      {state.step <= 3 && (
        <div className="mt-8 pt-6 border-t border-slate-150 flex justify-between items-center">
          {state.step > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-slate-950 transition-colors"
            >
              <ArrowLeft size={16} />
              Back
            </button>
          ) : (
            <div></div>
          )}
          <button
            type="button"
            disabled={!isStepValid()}
            onClick={nextStep}
            className={`flex items-center gap-1.5 font-bold py-3 px-6 rounded-xl text-sm transition-all shadow-md ${
              isStepValid()
                ? 'bg-emerald-600 text-white hover:bg-emerald-700 active:scale-[0.98] shadow-emerald-600/10'
                : 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200 shadow-none'
            }`}
          >
            {state.step === 3 ? 'See Results' : 'Next Question'}
            <ArrowRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
