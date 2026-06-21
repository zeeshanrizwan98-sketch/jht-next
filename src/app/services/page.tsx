import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { ArrowRight } from 'lucide-react';
import SavingsCalculator from '@/components/SavingsCalculator';

export const metadata: Metadata = {
  title: 'Heating & Insulation Services | ECO4 Free Grants | JHT Energy Services',
  description: 'Explore our range of home heating and insulation services funded under the UK Government ECO4 and GBIS schemes. Services include Boiler Upgrade, Heat Pump, Solar Panels, and Wall/Loft Insulation.',
  alternates: {
    canonical: 'https://www.jhtenergyservices.com/services',
  },
};

const services = [
  {
    id: 'solar',
    title: 'Solar Panel Installation',
    desc: 'Save on your electricity bills by installing Solar Panels. Our experts provide full services in surveying, designing, installing, and commissioning solar systems at your place to reduce your monthly energy expenditures.',
    img: '/images/solar.png',
    detail: 'Under the UK Government schemes, eligible households can qualify for free solar panels to generate clean energy and cut electricity bills by up to 70%*.'
  },
  {
    id: 'heat-pump',
    title: 'Air Source Heat Pump Installation',
    desc: 'Replace your direct electrical heating system or old boiler with a modern Air Source Heat Pump that saves energy bills through JHT Energy qualified engineers.',
    img: '/images/heat-pump.png',
    detail: 'Heat pumps extract ambient heat from the outside air and compress it to heat your home and water. Extremely efficient, low maintenance, and 100% free if you qualify for the ECO4 grant.'
  },
  {
    id: 'boiler',
    title: 'Boiler Installation',
    desc: 'From repair to installation, our boiler service professionals are here for you. 100% satisfaction guarantee with fully certified and Gas Safe registered engineers.',
    img: '/images/boiler.png',
    detail: 'We specialise in providing ECO4-funded boiler replacements and upgrades for households with boilers installed before 2005, or non-condensing, broken systems.'
  },
  {
    id: 'energy-assessments',
    title: 'Energy Assessments',
    desc: 'We help you assess your energy consumption and provide professional expertise in saving your bills. There is a potential of saving your monthly energy bills by approximately 50%.',
    img: '/images/energy-assessments.png',
    detail: 'Our energy assessment reports identify exact spots of thermal leakage and recommend the most effective measures to secure your property and save resources.'
  },
  {
    id: 'internal-wall',
    title: 'Internal Wall Insulation',
    desc: 'Save up to 42%* on your home heating bills with internal insulation. Call us for affordable, premium internal wall insulation designed to retain indoor warmth.',
    img: '/images/internal-wall.png',
    detail: 'We fit premium insulation boards directly to the inner surface of your walls. It does not alter the exterior look of your house and is highly recommended for solid-wall properties.'
  },
  {
    id: 'external-wall',
    title: 'External Wall Insulation (EWI)',
    desc: 'External wall insulation is installed on the outside of your home to create an insulating layer that is windproof, watertight, and weather-resistant.',
    img: '/images/external-wall.png',
    detail: 'By wrapping the exterior of the house with high-performance insulation boards and protective render, you save up to £550 a year* on heating bills while protecting your brickwork.'
  },
  {
    id: 'underfloor',
    title: 'Underfloor Insulation',
    desc: 'Underfloor insulation prevents draughts and creates a thermal barrier under floorboards. Keeps your home cozy and warm during winter and cool in summer.',
    img: '/images/underfloor.png',
    detail: 'We access your basement or crawl space to insert premium insulation rolls directly beneath your floorboards, eliminating cold drafts.'
  },
  {
    id: 'loft',
    title: 'Loft Insulation',
    desc: 'Loft insulation is one of the most effective ways to improve energy efficiency. Trap heat in your living spaces instead of letting it escape through the roof.',
    img: '/images/loft.png',
    detail: 'Installing mineral wool or fiberglass rolls in the attic space to a thickness of 270mm is one of the cheapest and most high-yield measures available.'
  }
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-slate-50">
        {/* Hero */}
        <section className="bg-slate-900 text-white py-16 px-4">
          <div className="mx-auto max-w-4xl text-center space-y-4">
            <div className="text-emerald-400 text-xs font-bold uppercase tracking-widest">
              Renewable Energy Upgrades
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Solar Panels & Heat Pumps
            </h1>
            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
              Our core focus is installing zero-cost solar panel networks and air source heat pumps under UK Government ECO4 & GBIS grants.
            </p>
          </div>
        </section>

        {/* Bill Savings Estimator Section */}
        <section className="py-16 px-4 bg-slate-100 border-b border-slate-200">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                Bill Savings Estimator
              </h2>
              <p className="text-slate-500 text-sm max-w-md mx-auto">
                Select your property type and current heating setup below to see what you could save.
              </p>
            </div>
            <SavingsCalculator />
          </div>
        </section>

        {/* Detailed services list */}
        <section className="py-16 px-4">
          <div className="mx-auto max-w-5xl space-y-12">
            {services.map((service, idx) => {
              return (
                <div 
                  key={service.id}
                  id={service.id}
                  className={`bg-white border border-slate-200 rounded-2xl p-6 md:p-10 shadow-sm scroll-mt-24 transition-all duration-300 hover:shadow-md flex flex-col lg:flex-row gap-6 md:gap-10 ${
                    idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Left Column: Image & Title */}
                  <div className="lg:w-1/2 flex flex-col justify-start space-y-4">
                    <div className="relative w-full h-64 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
                      <Image 
                        src={service.img} 
                        alt={service.title} 
                        fill 
                        className="object-cover transition-transform duration-500 hover:scale-105" 
                        sizes="(max-w-768px) 100vw, 50vw"
                      />
                    </div>
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight pt-2">
                      {service.title}
                    </h2>
                    <p className="text-slate-600 text-sm md:text-base font-semibold leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  
                  {/* Right Column: Detailed Info & CTA */}
                  <div className="lg:w-1/2 flex flex-col justify-between bg-slate-50 border border-slate-200/60 p-6 rounded-xl space-y-6">
                    <div className="space-y-4">
                      <span className="inline-block text-xs font-extrabold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider">
                        ECO4 / GBIS Grant Scope
                      </span>
                      <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                        {service.detail}
                      </p>
                    </div>
                    
                    <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-4 items-center justify-between">
                      <span className="text-xs font-bold text-slate-500">
                        100% Free if you qualify under benefits or LA Flex
                      </span>
                      <Link
                        href={`/eligibility?service=${service.id}`}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-5 rounded-lg text-sm transition-all active:scale-[0.98] flex items-center gap-1.5"
                      >
                        Check Grant Eligibility
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-[10px] text-slate-400 italic text-center max-w-2xl mx-auto pt-8">
            *All savings percentages, energy reductions, and monetary value claims are estimated averages based on data from the Energy Saving Trust (EST) and general UK housing stock baselines. Individual household savings will vary depending on property size, heating systems, location, and family energy usage.
          </p>
        </section>

        {/* Banner CTA */}
        <section className="bg-emerald-800 text-white py-16 px-4 text-center">
          <div className="mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-black tracking-tight font-sans">Need a custom energy upgrade package?</h2>
            <p className="text-emerald-100 text-sm md:text-base leading-relaxed">
              We can install multiple upgrades on a single property (e.g., Boiler replacement + Loft insulation + Underfloor insulation) to maximise warmth and savings.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/eligibility"
                className="bg-white text-emerald-800 hover:bg-slate-50 font-bold py-3.5 px-8 rounded-xl transition-all shadow-md active:scale-[0.98]"
              >
                Apply for Free Upgrades
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white hover:bg-white/10 font-bold py-3.5 px-8 rounded-xl transition-all active:scale-[0.98]"
              >
                Book Free Home Survey
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
