'use client';

import { useState } from 'react';
import { Home, Flame, PiggyBank, Leaf, Calculator, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function SavingsCalculator() {
  const [property, setProperty] = useState('semi');
  const [heating, setHeating] = useState('old-gas');

  // Savings logic based on Energy Saving Trust standard estimates
  const getSavings = () => {
    let baseSavings = 0;
    let heatingSavings = 0;
    let co2 = 0;

    switch (property) {
      case 'detached':
        baseSavings = 550;
        co2 = 2.8;
        break;
      case 'semi':
        baseSavings = 400;
        co2 = 2.1;
        break;
      case 'terraced':
        baseSavings = 300;
        co2 = 1.6;
        break;
      case 'flat':
        baseSavings = 200;
        co2 = 1.1;
        break;
    }

    switch (heating) {
      case 'electric':
        heatingSavings = 650;
        co2 += 1.8;
        break;
      case 'old-gas':
        heatingSavings = 350;
        co2 += 1.2;
        break;
      case 'oil-lpg':
        heatingSavings = 450;
        co2 += 1.4;
        break;
      case 'modern-gas':
        heatingSavings = 50;
        co2 += 0.2;
        break;
    }

    return {
      cash: baseSavings + heatingSavings,
      carbon: co2.toFixed(1)
    };
  };

  const results = getSavings();

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      
      {/* Selections column */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <Calculator className="text-emerald-600" size={22} />
            Bill Savings Estimator
          </h3>
          <p className="text-slate-500 text-xs md:text-sm">
            Select your home details to estimate potential annual savings from fully-funded eco upgrades.
          </p>
        </div>

        {/* Property Type Selection */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider">Property Type</label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { id: 'detached', label: 'Detached' },
              { id: 'semi', label: 'Semi-Detached' },
              { id: 'terraced', label: 'Terraced' },
              { id: 'flat', label: 'Flat / Maisonette' }
            ].map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setProperty(opt.id)}
                className={`py-2 px-3 text-xs md:text-sm font-bold rounded-lg border text-center transition-all ${
                  property === opt.id
                    ? 'bg-slate-900 border-slate-900 text-white'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Current Heating Selection */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider">Current Heating System</label>
          <div className="grid grid-cols-1 gap-2">
            {[
              { id: 'electric', label: 'Electric / Storage Heaters' },
              { id: 'old-gas', label: 'Old / Broken Gas Boiler' },
              { id: 'oil-lpg', label: 'Oil / LPG Boiler' },
              { id: 'modern-gas', label: 'Modern Condensing Boiler' }
            ].map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setHeating(opt.id)}
                className={`py-2.5 px-4 text-left text-xs md:text-sm font-bold rounded-lg border transition-all ${
                  heating === opt.id
                    ? 'bg-slate-900 border-slate-900 text-white'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Output results column */}
      <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl space-y-6 h-full flex flex-col justify-between">
        <div className="space-y-4">
          <span className="text-[10px] font-extrabold uppercase text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full tracking-wider">
            Estimated Impact
          </span>

          <div className="space-y-2">
            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Estimated Annual Savings</span>
            <div className="flex items-baseline gap-1 text-slate-900">
              <span className="text-4xl md:text-5xl font-black font-display text-emerald-600">
                £{results.cash}
              </span>
              <span className="text-sm font-bold text-slate-500">/ year</span>
            </div>
            <p className="text-[10px] text-slate-400 italic mt-1 leading-normal">
              *Calculations are estimated averages based on standard UK property baselines and Energy Saving Trust data. Actual savings vary based on energy tariffs, heat loss, and insulation levels.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
            <div className="flex gap-2 items-center">
              <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg">
                <PiggyBank size={18} />
              </div>
              <div>
                <span className="block text-[10px] font-bold text-slate-400 uppercase">Upfront Cost</span>
                <span className="block font-extrabold text-slate-900 text-sm">£0 (Free)</span>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg">
                <Leaf size={18} />
              </div>
              <div>
                <span className="block text-[10px] font-bold text-slate-400 uppercase">CO₂ Saved</span>
                <span className="block font-extrabold text-slate-900 text-sm">{results.carbon} t / yr</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-200">
          <Link
            href="/eligibility"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl text-sm transition-all active:scale-[0.98] flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/10"
          >
            Check Grant Eligibility
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

    </div>
  );
}
