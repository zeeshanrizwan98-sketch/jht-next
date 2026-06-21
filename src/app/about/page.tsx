import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { ShieldCheck, Award, Users, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Certified Green Deal & TrustMark Installers | JHT Energy Services',
  description: 'Learn about JHT Energy Services. For over a decade, we have helped homeowners across the UK save money on utility bills and reduce energy consumption through government-backed ECO4 and GBIS schemes.',
  alternates: {
    canonical: 'https://www.jhtenergyservices.com/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-slate-50">
        {/* Breadcrumb & Hero */}
        <section className="bg-slate-900 text-white py-16 px-4">
          <div className="mx-auto max-w-4xl text-center space-y-4">
            <div className="text-emerald-400 text-xs font-bold uppercase tracking-widest">
              Who We Are
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              About JHT Energy Services
            </h1>
            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
              Helping residential and commercial properties across the UK save money and reduce their carbon footprint for over a decade.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 px-4">
          <div className="mx-auto max-w-5xl bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                Our Mission: Warming Homes, Lowering Bills
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                For over a decade, JHT Energy Services has been helping residential and commercial customers across the UK save money and reduce their carbon footprint by providing expert installation services. Our team of certified professionals has the knowledge and experience necessary to ensure that our customers get the most out of their energy-efficient systems.
              </p>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                We work directly with energy suppliers to offer <strong>fully-funded (100% free) grants</strong> under the UK Government's ECO4 and Great British Insulation Scheme (GBIS). By targeting low-income and energy-inefficient households, we aim to combat fuel poverty and help the UK achieve its Net Zero carbon goals.
              </p>
            </div>
            <div className="space-y-4 bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="font-extrabold text-slate-800 text-lg mb-2">Why Homeowners Trust Us</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="text-emerald-600 mt-0.5">
                    <CheckCircle size={18} className="stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">10+ Years of Experience</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Proven track record of energy services installations across the UK.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-emerald-600 mt-0.5">
                    <CheckCircle size={18} className="stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Approved Installers</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Green Deal and TrustMark approved installers meeting PAS 2030 standards.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-emerald-600 mt-0.5">
                    <CheckCircle size={18} className="stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">End-to-End Assistance</h4>
                    <p className="text-slate-500 text-xs mt-0.5">We handle all your grant applications, paperwork, and home surveys.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accreditations Section */}
        <section className="bg-slate-100 py-16 px-4 border-t border-b border-slate-200">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Professional Accreditations
            </h2>
            <p className="text-slate-600 text-sm max-w-lg mx-auto">
              We hold all major industry approvals required to carry out energy-efficient installations funded by the government.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-2 shadow-sm">
                <div className="text-emerald-600 font-black text-lg">Green Deal</div>
                <p className="text-slate-800 font-bold text-xs">Approved Provider</p>
                <p className="text-slate-500 text-[10px]">Authorised to install energy-efficiency measures.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-2 shadow-sm">
                <div className="text-emerald-600 font-black text-lg">TrustMark</div>
                <p className="text-slate-800 font-bold text-xs">Govt Endorsed Quality</p>
                <p className="text-slate-500 text-[10px]">Ensures customer protection and high standards.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-2 shadow-sm">
                <div className="text-emerald-600 font-black text-lg">Gas Safe</div>
                <p className="text-slate-800 font-bold text-xs">Registered Engineers</p>
                <p className="text-slate-500 text-[10px]">All boiler works done by certified engineers.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-2 shadow-sm">
                <div className="text-emerald-600 font-black text-lg">PAS 2030</div>
                <p className="text-slate-800 font-bold text-xs">Compliant Installer</p>
                <p className="text-slate-500 text-[10px]">Meets official design and installation standards.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 text-center">
          <div className="mx-auto max-w-xl space-y-6">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Are you eligible?</h2>
            <p className="text-slate-600 text-sm">
              It takes less than a minute to check if your home qualifies for a free boiler upgrade or insulation grant.
            </p>
            <div className="flex justify-center">
              <Link
                href="/eligibility"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-emerald-600/20 active:scale-[0.98] flex items-center gap-2"
              >
                Start Free Grant Checker
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
