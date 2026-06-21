import { Metadata } from 'next';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import EligibilityQuiz from '@/components/EligibilityQuiz';
import { ShieldCheck, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Grant Eligibility Checker | ECO4 & GBIS | JHT Energy Services',
  description: 'Check if you qualify for a 100% free boiler replacement or insulation grant under the UK Government\'s ECO4 scheme. Complete our 3-question eligibility test.',
  alternates: {
    canonical: 'https://www.jhtenergyservices.com/eligibility',
  },
};

export default function EligibilityPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-slate-50 py-12 px-4">
        <div className="mx-auto max-w-4xl space-y-8">
          {/* Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              100% Free Grants
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              ECO4 & GBIS Eligibility Checker
            </h1>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Complete this 3-question test to find out if your property qualifies for fully-funded boiler upgrades or insulation. No personal details required for checking.
            </p>
          </div>

          {/* Quiz Container */}
          <EligibilityQuiz />

          {/* Scheme Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto pt-6">
            <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2.5 shadow-sm">
              <h3 className="font-extrabold text-slate-800 text-base flex items-center gap-1.5">
                <ShieldCheck className="text-emerald-600" size={18} />
                About ECO4
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                The Energy Company Obligation (ECO4) is a government-backed scheme requiring major energy suppliers to fund energy-saving measures for low-income and fuel-poor households across the UK. For eligible households, these grants cover the full costs of heat pumps, boilers, and insulation upgrades.
              </p>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2.5 shadow-sm">
              <h3 className="font-extrabold text-slate-800 text-base flex items-center gap-1.5">
                <ShieldCheck className="text-emerald-600" size={18} />
                About GBIS
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                The Great British Insulation Scheme (GBIS) complements ECO4, focusing primarily on fast-track single insulation measures (such as cavity wall and loft insulation) for properties with low EPC ratings (D-G) in lower council tax bands (A-D in England).
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
