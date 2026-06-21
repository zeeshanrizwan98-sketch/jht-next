import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import EligibilityQuiz from '@/components/EligibilityQuiz';
import ContactForm from '@/components/ContactForm';
import { 
  CheckCircle2, Phone, ShieldCheck, HelpCircle, ArrowRight, 
  Flame, Wind, Sun, Layers, Grid3X3, ArrowDownToLine, Star
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'JHT Energy Services | Free Boiler & Insulation Government Grants (ECO4)',
  description: 'Apply for 100% free boiler replacement, heat pump installation, and home insulation grants under the UK Government ECO4 & GBIS schemes. Save up to £550/year*.',
  alternates: {
    canonical: 'https://www.jhtenergyservices.com',
  },
};

const primaryServices = [
  { id: 'heat-pump', title: 'Air Source Heat Pumps', icon: Wind, desc: 'Efficient heating systems running on electricity that capture ambient heat from the outside air and supply whole-house heating.', img: '/images/heat-pump.png' },
  { id: 'solar', title: 'Solar Panel Installation', icon: Sun, desc: 'Generate your own free renewable electricity, cut dependency on the grid, and power your heat pump for zero cost.', img: '/images/solar.png' }
];

const secondaryServices = [
  { id: 'boiler', title: 'Boiler Upgrades', icon: Flame, desc: 'Fully-funded boiler replacements for older, inefficient systems to A-rated gas boilers.', img: '/images/boiler.png' },
  { id: 'external-wall', title: 'External Wall Insulation', icon: Grid3X3, desc: 'Wrap your house exterior to lock in heat and protect your brickwork.', img: '/images/external-wall.png' },
  { id: 'internal-wall', title: 'Internal Wall Insulation', icon: Layers, desc: 'Apply high-performance insulation boards directly inside solid-wall homes.', img: '/images/internal-wall.png' },
  { id: 'underfloor', title: 'Underfloor Insulation', icon: ArrowDownToLine, desc: 'Insulate ground floors to eliminate crawl space cold drafts.', img: '/images/underfloor.png' }
];

const testimonials = [
  {
    quote: "The work was completed well and I am satisfied with the service provided. My house is much warmer now as a result of their work.",
    author: "Shams W. Pawel"
  },
  {
    quote: "I was so impressed by the work that I had done on my home that I recommended this company to all of my friends and family members.",
    author: "Harry M. H"
  },
  {
    quote: "I was very impressed by their service, as one of my radiators wasn’t working properly after it had been installed. An engineer came the same day to fix it.",
    author: "MS Johan"
  }
];

const faqs = [
  {
    q: "What is ECO4, and how does it work in the UK?",
    a: "The ECO4 Scheme is a UK government initiative requiring energy suppliers to fund energy-efficiency upgrades (like boilers, heat pumps, and insulation) for low-income and fuel-poor households across the UK. Qualified homes receive these upgrades for 100% free."
  },
  {
    q: "How does GBIS complement ECO4?",
    a: "While ECO4 covers multiple home heating and insulation upgrades together, the Great British Insulation Scheme (GBIS) is designed for single fast insulation measures (such as loft or cavity wall insulation) targeting a broader group of middle and lower income homes."
  },
  {
    q: "Can I access both ECO4 and GBIS?",
    a: "Yes, depending on your property's energy performance rating (EPC) and household eligibility, you can combine benefits under both schemes to maximise energy efficiency. Our advisors handle the applications for both."
  },
  {
    q: "How long does it take to get approval?",
    a: "Approval and scheduling usually take 2 to 4 weeks. It begins with a free eligibility check, followed by a free home assessment survey, and then scheduling installation."
  },
  {
    q: "Is my property suitable for a heat pump?",
    a: "Most properties in the UK are suitable. Our qualified surveyors assess your insulation levels and heat retention during the free home assessment survey to recommend the best heating system."
  }
];

const recentWork = [
  '/images/case-study-1.png',
  '/images/case-study-2.png',
  '/images/case-study-3.png',
  '/images/case-study-4.png',
  '/images/case-study-5.png',
  '/images/case-study-6.png'
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "JHT Energy Services Ltd",
            "image": "https://www.jhtenergyservices.com/images/Logo.png",
            "telephone": "07506756911",
            "email": "javaid.awan@jhtenergyservices.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Walthamstow, London",
              "addressCountry": "GB"
            },
            "areaServed": "United Kingdom",
            "priceRange": "£0"
          })
        }}
      />
      <Header />
      <main className="flex-1">
        {/* 1. HERO SECTION (Asymmetric, editorial grid layout) */}
        <section className="relative bg-slate-950 text-white overflow-hidden py-20 lg:py-28 px-4 border-b border-slate-900">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-transparent z-0"></div>
          <div className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Asymmetric text & details */}
            <div className="lg:col-span-10 xl:col-span-9 space-y-6 text-left">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                ECO4 & GBIS Funding Schemes 2026
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none text-white">
                <span className="text-white">Solar & Heat Pumps.</span> <br />
                <span className="text-emerald-500">Lower Energy Bills.</span>
              </h1>
              <p className="text-slate-200 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                Get fully-funded solar panels and an air source heat pump installed in your home <strong>100% free of charge if you qualify*</strong>. Funded under the UK Government energy company obligation.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a
                  href="#eligibility-checker"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-xl text-base text-center transition-all shadow-lg shadow-emerald-600/20 active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  Check Your Eligibility
                  <ArrowRight size={18} />
                </a>
                <a
                  href="tel:07506756911"
                  className="flex items-center justify-center gap-2 border border-white/20 bg-slate-900/60 hover:bg-slate-900/90 text-white font-bold py-4 px-8 rounded-xl text-base transition-colors"
                >
                  <Phone size={18} className="text-emerald-500" />
                  07506756911
                </a>
              </div>
              <p className="text-[10px] text-slate-400 italic">
                *Subject to eligibility criteria. Annual savings are estimated averages based on Energy Saving Trust data.
              </p>

              {/* Hero Accreditation Badges */}
              <div className="pt-6 border-t border-slate-800/80 space-y-3">
                <span className="block text-[10px] font-extrabold text-slate-350 uppercase tracking-widest">
                  Accredited ECO4 & PAS 2030 Installers
                </span>
                <div className="flex flex-wrap gap-4 items-center bg-white/5 p-3 rounded-xl border border-white/10 w-fit">
                  <div className="relative w-12 h-8">
                    <Image src="/images/green-deal.svg" alt="Green Deal Approved" fill className="object-contain" />
                  </div>
                  <div className="relative w-16 h-8">
                    <Image src="/images/trustmark.svg" alt="TrustMark Certified" fill className="object-contain" />
                  </div>
                  <div className="relative w-12 h-8">
                    <Image src="/images/gas-safe.svg" alt="Gas Safe Registered" fill className="object-contain" />
                  </div>
                  <div className="relative w-12 h-8">
                    <Image src="/images/pas2030.svg" alt="PAS 2030 Quality Standard" fill className="object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ELIGIBILITY QUIZ SECTION (Simple, focus, no clutter) */}
        <section id="eligibility-checker" className="py-20 px-4 bg-slate-50 scroll-mt-16 border-b border-slate-200">
          <div className="mx-auto max-w-4xl space-y-10">
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                Eligibility Checker
              </h2>
              <p className="text-slate-550 text-sm md:text-base max-w-md mx-auto">
                Answer these 3 simple questions to check if you qualify for a fully-funded grant.
              </p>
            </div>
            <Suspense fallback={
              <div className="w-full bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex items-center justify-center h-80">
                <div className="text-center space-y-2">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto"></div>
                  <p className="text-slate-500 text-sm font-semibold">Loading Quiz...</p>
                </div>
              </div>
            }>
              <EligibilityQuiz inline={false} />
            </Suspense>
          </div>
        </section>

        {/* 3. HOW IT WORKS SECTION (Asymmetric vertical layout) */}
        <section className="py-20 px-4 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left side: big text block */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-emerald-600 font-bold text-xs uppercase tracking-wider">
                Our Seamless Process
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                How It Works
              </h2>
              <p className="text-slate-650 text-sm md:text-base leading-relaxed font-medium">
                JHT Energy Services coordinates the entire process on your behalf. From verifying your LA Flex/ECO4 credentials to conducting audits and complete installation, we handle the friction.
              </p>
              <div className="pt-4">
                <a 
                  href="#contact-form" 
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                >
                  Book your home survey directly <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Right side: vertical timeline with big numbers */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-200 bg-white">
              {[
                {
                  step: "01",
                  title: "Submit Your Check",
                  desc: "Complete our 3-question eligibility check or call 07506756911. We verify your status under ECO4 or GBIS rules."
                },
                {
                  step: "02",
                  title: "Free Property Survey",
                  desc: "Qualified households receive a free, no-obligation home audit. Our surveyors identify insulation leakages and optimal heating solutions."
                },
                {
                  step: "03",
                  title: "Accredited Installation",
                  desc: "Our fully certified MCS-accredited solar/heat pump engineers and Gas Safe technicians fit the measures. All backed by solid guarantees at zero cost."
                }
              ].map((item, idx) => (
                <div key={idx} className={`p-6 space-y-4 flex flex-col justify-start ${idx < 2 ? 'border-b md:border-b-0 md:border-r border-slate-200' : ''}`}>
                  <span className="block text-2xl font-black text-emerald-600">
                    {item.step}
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">{item.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* 4. SERVICES / PRODUCTS SECTION (Hierarchical split-grid) */}
        <section className="py-20 px-4 bg-slate-50 border-b border-slate-200">
          <div className="mx-auto max-w-7xl space-y-12">
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                Government-Funded Upgrades
              </h2>
              <p className="text-slate-500 text-sm max-w-md mx-auto">
                Qualified households can combine multiple insulation and heating services for free.
              </p>
            </div>

            {/* Part 1: Primary Heating Upgrades (Featured - 2 Columns) */}
            <div className="space-y-4">
              <h3 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Primary Renewable Energy Focus</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {primaryServices.map((service) => (
                  <div key={service.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row">
                    <div className="relative w-full md:w-1/2 h-56 md:h-auto bg-slate-100">
                      <Image 
                        src={service.img} 
                        alt={service.title} 
                        fill 
                        className="object-cover"
                        sizes="(max-w-768px) 100vw, 25vw"
                      />
                    </div>
                    <div className="p-6 md:w-1/2 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-bold text-slate-900 text-lg leading-tight">{service.title}</h4>
                        <p className="text-slate-500 text-xs leading-relaxed">{service.desc}</p>
                      </div>
                      <Link
                        href={`/services#${service.id}`}
                        className="text-emerald-700 hover:text-emerald-800 text-xs font-bold flex items-center gap-1 group mt-2"
                      >
                        Read specifications
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Part 2: Insulation & Supporting Measures (4 Columns grid) */}
            <div className="space-y-4 pt-6">
              <h3 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Supporting Heating & Insulation Upgrades</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {secondaryServices.map((service) => (
                  <div key={service.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                    <div className="relative w-full h-40 bg-slate-100">
                      <Image 
                        src={service.img} 
                        alt={service.title} 
                        fill 
                        className="object-cover"
                        sizes="(max-w-768px) 100vw, 20vw"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div className="space-y-1">
                        <h4 className="font-bold text-slate-900 text-sm md:text-base leading-tight">{service.title}</h4>
                        <p className="text-slate-500 text-xs leading-relaxed">{service.desc}</p>
                      </div>
                      <Link
                        href={`/services#${service.id}`}
                        className="text-emerald-700 hover:text-emerald-800 text-xs font-bold flex items-center gap-1 group mt-2"
                      >
                        Read specifications
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* RECENT WORK GALLERY SECTION */}
        <section className="py-20 px-4 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-5xl space-y-12">
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                Our Recent Installations
              </h2>
              <p className="text-slate-550 text-sm max-w-md mx-auto font-medium">
                Completed energy-efficiency upgrades across UK households.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {recentWork.map((imgUrl, idx) => (
                <div key={idx} className="relative h-48 md:h-64 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm group">
                  <Image 
                    src={imgUrl} 
                    alt={`Completed energy installation case study ${idx + 1}`} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                    sizes="(max-w-768px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. TESTIMONIALS SECTION */}
        <section className="py-20 px-4 bg-slate-50 border-b border-slate-200">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                What Our Clients Say
              </h2>
              <p className="text-slate-500 text-sm max-w-md mx-auto font-medium">
                We take customer service seriously. Read reviews from verified homeowners.
              </p>
              <div className="flex justify-center items-center gap-1.5 pt-1 text-xs font-bold text-slate-700">
                <span className="bg-emerald-600 text-white px-1.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider">Trustpilot</span>
                <span>Rated 4.8/5 based on verified client reviews</span>
              </div>
            </div>

            <div className="border border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200 grid grid-cols-1 md:grid-cols-3 bg-white">
              {testimonials.map((test, idx) => (
                <div key={idx} className="p-8 flex flex-col justify-between space-y-6">
                  <div className="flex gap-0.5 text-emerald-600">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-emerald-600 stroke-none" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-xs md:text-sm leading-relaxed font-medium">
                    "{test.quote}"
                  </p>
                  <div>
                    <span className="block font-extrabold text-slate-900 text-xs uppercase tracking-wider">{test.author}</span>
                    <span className="block text-slate-400 text-[10px]">Verified Customer</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. FAQ ACCORDION SECTION (Clean details/summary layout) */}
        <section className="py-20 px-4 bg-white border-b border-slate-200">
          <div className="mx-auto max-w-3xl space-y-12">
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-500 text-sm max-w-md mx-auto font-medium">
                Find answers regarding ECO4 eligibility, GBIS schemes, and survey audits.
              </p>
            </div>

            <div className="border-t border-slate-200 max-w-2xl mx-auto">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group border-b border-slate-200 py-6 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between font-extrabold text-slate-900 text-sm md:text-base cursor-pointer outline-none select-none uppercase tracking-wider">
                    <span className="pr-4">{faq.q}</span>
                    <span className="transition-transform group-open:rotate-180 text-emerald-600 font-bold text-lg leading-none">
                      +
                    </span>
                  </summary>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed mt-4 pl-4 border-l-2 border-emerald-650 font-medium">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 7. FINAL CTA WITH CONTACT FORM */}
        <section id="contact-form" className="py-20 px-4 bg-emerald-900 text-white scroll-mt-16">
          <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-emerald-350 font-bold text-xs uppercase tracking-wider">
                Claim Your Grant
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
                Apply For Your <br />
                Free Home Upgrade
              </h2>
              <p className="text-emerald-100 text-sm md:text-base leading-relaxed font-medium">
                If you qualify, one of our certified home surveyors will call you to schedule a free survey. All installs are done at zero cost. Keep your family cozy and slash your heating bills this winter.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex gap-3">
                  <div className="bg-white/10 p-2 rounded-lg text-emerald-400">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Gas Safe Registered Engineers</h4>
                    <p className="text-emerald-250 text-xs mt-0.5">Your boiler is installed safely by certified professionals.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-white/10 p-2 rounded-lg text-emerald-400">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">TrustMark Certified Audits</h4>
                    <p className="text-emerald-250 text-xs mt-0.5">Meets the government endorsements for quality scheme work.</p>
                  </div>
                </div>
              </div>
            </div>
 
            <div className="text-slate-800">
              <Suspense fallback={
                <div className="w-full bg-white rounded-2xl p-6 md:p-8 h-96 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto"></div>
                    <p className="text-slate-500 text-sm font-semibold">Loading Form...</p>
                  </div>
                </div>
              }>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
