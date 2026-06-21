import { Metadata } from 'next';
import { Suspense } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, ShieldCheck, ShieldAlert } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Apply for ECO4 Boiler & Insulation Grant | JHT Energy Services',
  description: 'Get in touch with JHT Energy Services in Walthamstow, London. Submit your application for a free government boiler or insulation grant or book your free survey.',
  alternates: {
    canonical: 'https://www.jhtenergyservices.com/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-slate-50 py-12 px-4">
        <div className="mx-auto max-w-5xl space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              Get In Touch
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Contact JHT Energy Services
            </h1>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Have questions about ECO4 or GBIS grants? Complete our quick application form below, or speak directly to a local advisor.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Form (7 cols) */}
            <div className="lg:col-span-7">
              <Suspense fallback={
                <div className="w-full max-w-xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xl flex items-center justify-center h-96">
                  <div className="text-center space-y-2">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto"></div>
                    <p className="text-slate-500 text-sm font-semibold">Loading Application Form...</p>
                  </div>
                </div>
              }>
                <ContactForm />
              </Suspense>
            </div>

            {/* Right Column: Contact Details & Map (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Contact Info Card */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">Direct Contact Details</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="bg-emerald-50 text-emerald-700 p-2.5 rounded-xl border border-emerald-100 flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Call an Advisor</span>
                      <a href="tel:07506756911" className="block text-lg font-bold text-slate-800 hover:text-emerald-700 transition-colors">
                        07506756911
                      </a>
                      <span className="text-xs text-slate-500">Mon - Fri, 9:00am - 5:00pm</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="bg-emerald-50 text-emerald-700 p-2.5 rounded-xl border border-emerald-100 flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Us</span>
                      <a href="mailto:javaid.awan@jhtenergyservices.com" className="block text-sm font-bold text-slate-800 hover:text-emerald-700 transition-colors break-all">
                        javaid.awan@jhtenergyservices.com
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="bg-emerald-50 text-emerald-700 p-2.5 rounded-xl border border-emerald-100 flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Office Location</span>
                      <span className="block text-sm font-bold text-slate-800">
                        Walthamstow, London, England
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Trust Indicators */}
              <div className="bg-slate-900 text-slate-200 rounded-2xl p-6 border border-slate-800 space-y-4">
                <h4 className="font-bold text-white text-base flex items-center gap-1.5">
                  <ShieldAlert className="text-emerald-500" size={18} />
                  Safe & Secure Assessment
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  All properties undergo a free, zero-obligation home survey. Your boiler installations are done only by certified, Gas Safe Registered engineers under PAS 2030 standards.
                </p>
                <div className="flex gap-2 text-[10px] text-slate-300 font-semibold flex-wrap">
                  <span className="bg-slate-800 py-1 px-2.5 rounded border border-slate-700">✓ Gas Safe Registered</span>
                  <span className="bg-slate-800 py-1 px-2.5 rounded border border-slate-700">✓ TrustMark Approved</span>
                  <span className="bg-slate-800 py-1 px-2.5 rounded border border-slate-700">✓ MCS Certified</span>
                  <span className="bg-slate-800 py-1 px-2.5 rounded border border-slate-700">✓ ECO4 Registered</span>
                </div>
              </div>

              {/* Map Preview Card */}
              <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span>Coverage Area: UK-Wide</span>
                  <span className="text-emerald-600">Active</span>
                </div>
                {/* Visual Placeholder for Map */}
                <div className="bg-emerald-50 border border-emerald-100 rounded-xl h-48 flex flex-col items-center justify-center text-center p-4">
                  <MapPin size={32} className="text-emerald-600 animate-bounce" />
                  <span className="block font-bold text-slate-800 text-sm mt-2">JHT Energy Coverage Area</span>
                  <span className="block text-[11px] text-slate-500 max-w-xs mt-1">
                    Serving households across the UK. Contact us for local availability.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
