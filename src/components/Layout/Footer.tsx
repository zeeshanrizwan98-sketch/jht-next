import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react';

const footerNav = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About Us', href: '/about' },
  { name: 'Eligibility Checker', href: '/eligibility' },
  { name: 'Contact Us', href: '/contact' },
];

const servicesLinks = [
  { name: 'Boiler Installation', href: '/services#boiler' },
  { name: 'Air Source Heat Pumps', href: '/services#heat-pump' },
  { name: 'Solar Panels', href: '/services#solar' },
  { name: 'Underfloor Insulation', href: '/services#underfloor' },
  { name: 'Internal Wall Insulation', href: '/services#internal-wall' },
  { name: 'External Wall Insulation', href: '/services#external-wall' },
  { name: 'Loft Insulation', href: '/services#loft' },
  { name: 'Energy Assessments', href: '/services#energy-assessments' },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      {/* Top glowing line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />
      
      {/* Trust credentials banner */}
      <div className="bg-gradient-to-r from-emerald-950/40 via-slate-900/90 to-emerald-950/40 py-8 px-4 border-b border-slate-800/40 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="text-left max-w-xl">
            <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
              <ShieldCheck className="text-emerald-400 stroke-[2.5]" />
              Government Endorsed & Accredited Installers
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We are fully certified Green Deal, TrustMark, Gas Safe, and PAS 2030 approved specialists helping households upgrade their heating and insulation under government-funded schemes.
            </p>
          </div>
          
          {/* Real Accreditation Logo Images */}
          <div className="flex flex-wrap justify-center items-center gap-4 bg-white/95 p-4 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow duration-300 max-w-md">
            <div className="relative w-16 h-12">
              <Image 
                src="/images/green-deal.svg" 
                alt="Green Deal Approved Installer" 
                fill 
                className="object-contain" 
              />
            </div>
            <div className="h-8 w-px bg-slate-200"></div>
            <div className="relative w-24 h-12">
              <Image 
                src="/images/trustmark.svg" 
                alt="TrustMark Government Endorsed Quality" 
                fill 
                className="object-contain" 
              />
            </div>
            <div className="h-8 w-px bg-slate-200"></div>
            <div className="relative w-16 h-12">
              <Image 
                src="/images/gas-safe.svg" 
                alt="Gas Safe Register" 
                fill 
                className="object-contain" 
              />
            </div>
            <div className="h-8 w-px bg-slate-200"></div>
            <div className="relative w-16 h-12">
              <Image 
                src="/images/pas2030.svg" 
                alt="PAS 2030 Compliant Tick" 
                fill 
                className="object-contain" 
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Company Profile */}
          <div className="space-y-6">
            <div className="relative w-56 h-16 hover:scale-105 transition-transform duration-300">
              <Image 
                src="/images/Logo.png" 
                alt="JHT Energy Services Logo" 
                fill 
                className="object-contain" 
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              For over a decade, JHT Energy Services has been helping residential and commercial customers across the UK save money on utility bills and reduce their carbon footprint through expert eco installs.
            </p>
            <div className="flex space-x-3 text-slate-400 text-xs">
              <span className="inline-flex items-center gap-1.5 bg-slate-900/60 py-1.5 px-3 rounded-lg border border-emerald-950 text-emerald-400 font-mono">
                Company No. 12903522
              </span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">Quick Links</h4>
            <div className="h-0.5 w-8 bg-emerald-500 mt-2 mb-4 rounded-full"></div>
            <ul className="space-y-2.5">
              {footerNav.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-slate-400 hover:text-emerald-400 text-sm transition-all duration-200 flex items-center gap-1 hover:translate-x-1 group"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">Our Services</h4>
            <div className="h-0.5 w-8 bg-emerald-500 mt-2 mb-4 rounded-full"></div>
            <ul className="space-y-2.5">
              {servicesLinks.slice(0, 6).map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-slate-400 hover:text-emerald-400 text-sm transition-all duration-200 flex items-center gap-1 hover:translate-x-1 group"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Support */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">Contact Info</h4>
            <div className="h-0.5 w-8 bg-emerald-500 mt-2 mb-4 rounded-full"></div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                  <Phone size={16} />
                </div>
                <div>
                  <a href="tel:07506756911" className="text-sm text-slate-200 hover:text-emerald-400 font-semibold transition-colors">
                    07506756911
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">Mon - Fri, 9am - 5pm</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                  <Mail size={16} />
                </div>
                <div className="min-w-0">
                  <a href="mailto:javaid.awan@jhtenergyservices.com" className="text-sm text-slate-200 hover:text-emerald-400 break-all transition-colors">
                    javaid.awan@jhtenergyservices.com
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">Email Inquiry</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="text-sm text-slate-200">
                    Walthamstow, London, England
                  </span>
                  <p className="text-xs text-slate-400 mt-0.5">Coverage Area: UK-Wide</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800/80 text-center text-xs text-slate-500 space-y-3">
          <p>© {new Date().getFullYear()} JHT Energy Services Ltd. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center items-center gap-2.5 text-slate-400">
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-950/40 text-emerald-400 border border-emerald-900/30 text-[11px] font-medium">
              Gas Safe, TrustMark & MCS Certified Installer
            </span>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span className="text-slate-400">
              Free government grants under the Energy Company Obligation (ECO4) scheme.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
