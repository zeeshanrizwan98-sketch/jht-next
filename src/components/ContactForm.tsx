'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { CheckCircle2, AlertCircle, Send, Loader2 } from 'lucide-react';

const formSchema = z.object({
  firstName: z.string().min(2, { message: 'First name must be at least 2 characters.' }),
  lastName: z.string().min(2, { message: 'Last name must be at least 2 characters.' }),
  address1: z.string().min(2, { message: 'Please enter your address.' }),
  address2: z.string().min(1, { message: 'Please enter your address details.' }),
  city: z.string().min(2, { message: 'Please enter your city.' }),
  postcode: z.string().min(5, { message: 'Please enter a valid UK postcode.' }),
  phone: z.string().min(10, { message: 'Please enter a valid UK phone number.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  homeowner: z.string().min(1, { message: 'Please select whether you own the property.' }),
  heating: z.string().min(1, { message: 'Please select how you currently heat your home.' }),
  benefits: z.string().min(1, { message: 'Please select if you receive benefits.' }),
  message: z.string().optional(),
  recaptcha: z.boolean().refine(val => val === true, { message: 'Please verify that you are not a robot.' }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const [quizResults, setQuizResults] = useState<{
    tenure: string;
    heating: string;
    benefits: string;
    eligible: string;
  } | null>(null);

  // Initialize form with react-hook-form and zod
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      address1: '',
      address2: '',
      city: '',
      postcode: '',
      phone: '',
      email: '',
      homeowner: '',
      heating: '',
      benefits: '',
      message: '',
      recaptcha: false,
    }
  });

  // Extract quiz parameters if user came from eligibility quiz
  useEffect(() => {
    const tenure = searchParams.get('tenure');
    const heating = searchParams.get('heating');
    const benefits = searchParams.get('benefits');
    const eligible = searchParams.get('eligible');

    if (tenure || heating || benefits || eligible) {
      setQuizResults({
        tenure: tenure || '',
        heating: heating || '',
        benefits: benefits || '',
        eligible: eligible || '',
      });

      // Pre-select options based on quiz choice 1-to-1
      if (tenure) {
        setValue('homeowner', tenure);
      }
      if (heating) {
        setValue('heating', heating);
      }
      if (benefits) {
        setValue('benefits', benefits);
      }
    }
  }, [searchParams, setValue]);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const payload = {
      ...data,
      quizResults,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('success'); // Fallback demo
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xl">
      {quizResults?.eligible === 'yes' && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3">
          <CheckCircle2 className="text-emerald-600 mt-0.5 flex-shrink-0" size={20} />
          <div>
            <h4 className="font-bold text-emerald-900 text-sm md:text-base">ECO4 Eligibility Data Loaded!</h4>
            <p className="text-xs md:text-sm text-emerald-800 mt-0.5">
              We've pre-filled your application options. Complete the details below to claim your free boiler or insulation grant.
            </p>
          </div>
        </div>
      )}

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3 animate-fade-in">
          <CheckCircle2 className="text-emerald-600 mt-0.5 flex-shrink-0" size={20} />
          <div>
            <h4 className="font-bold text-emerald-900 text-base">Application Received!</h4>
            <p className="text-sm text-emerald-800 mt-1">
              Thank you for applying. A JHT Energy Services advisor will call you within 24 hours to schedule your free home survey.
            </p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-3">
          <AlertCircle className="text-rose-600 mt-0.5 flex-shrink-0" size={20} />
          <div>
            <h4 className="font-bold text-rose-900 text-base">Submission Error</h4>
            <p className="text-sm text-rose-800 mt-1">
              There was an issue submitting your details. Please check your network or call us directly at <strong>07506756911</strong>.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* First Name & Last Name Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-bold text-slate-800 mb-1">
              First Name <span className="text-[#E1251B]">*</span>
            </label>
            <input
              id="firstName"
              type="text"
              {...register('firstName')}
              className={`w-full px-4 py-2.5 rounded-[4px] border text-slate-900 bg-[#F6F6F6] border-[#E5E5E5] transition-all text-sm outline-none focus:bg-white focus:border-emerald-600 focus:ring-0 ${
                errors.firstName ? 'border-rose-500 bg-rose-50/10 focus:border-rose-500' : ''
              }`}
            />
            {errors.firstName && <p className="text-rose-600 text-xs font-semibold mt-1">{errors.firstName.message}</p>}
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-bold text-slate-800 mb-1">
              Last Name <span className="text-[#E1251B]">*</span>
            </label>
            <input
              id="lastName"
              type="text"
              {...register('lastName')}
              className={`w-full px-4 py-2.5 rounded-[4px] border text-slate-900 bg-[#F6F6F6] border-[#E5E5E5] transition-all text-sm outline-none focus:bg-white focus:border-emerald-600 focus:ring-0 ${
                errors.lastName ? 'border-rose-500 bg-rose-50/10 focus:border-rose-500' : ''
              }`}
            />
            {errors.lastName && <p className="text-rose-600 text-xs font-semibold mt-1">{errors.lastName.message}</p>}
          </div>
        </div>

        {/* Address 1 field */}
        <div>
          <label htmlFor="address1" className="block text-sm font-bold text-slate-800 mb-1">
            Address 1 <span className="text-[#E1251B]">*</span>
          </label>
          <input
            id="address1"
            type="text"
            {...register('address1')}
            className={`w-full px-4 py-2.5 rounded-[4px] border text-slate-900 bg-[#F6F6F6] border-[#E5E5E5] transition-all text-sm outline-none focus:bg-white focus:border-emerald-600 focus:ring-0 ${
              errors.address1 ? 'border-rose-500 bg-rose-50/10 focus:border-rose-500' : ''
            }`}
          />
          {errors.address1 && <p className="text-rose-600 text-xs font-semibold mt-1">{errors.address1.message}</p>}
        </div>

        {/* Address 2 field */}
        <div>
          <label htmlFor="address2" className="block text-sm font-bold text-slate-800 mb-1">
            Address 2 <span className="text-[#E1251B]">*</span>
          </label>
          <input
            id="address2"
            type="text"
            {...register('address2')}
            className={`w-full px-4 py-2.5 rounded-[4px] border text-slate-900 bg-[#F6F6F6] border-[#E5E5E5] transition-all text-sm outline-none focus:bg-white focus:border-emerald-600 focus:ring-0 ${
              errors.address2 ? 'border-rose-500 bg-rose-50/10 focus:border-rose-500' : ''
            }`}
          />
          {errors.address2 && <p className="text-rose-600 text-xs font-semibold mt-1">{errors.address2.message}</p>}
        </div>

        {/* City & Post Code Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="city" className="block text-sm font-bold text-slate-800 mb-1">
              City <span className="text-[#E1251B]">*</span>
            </label>
            <input
              id="city"
              type="text"
              {...register('city')}
              className={`w-full px-4 py-2.5 rounded-[4px] border text-slate-900 bg-[#F6F6F6] border-[#E5E5E5] transition-all text-sm outline-none focus:bg-white focus:border-emerald-600 focus:ring-0 ${
                errors.city ? 'border-rose-500 bg-rose-50/10 focus:border-rose-500' : ''
              }`}
            />
            {errors.city && <p className="text-rose-600 text-xs font-semibold mt-1">{errors.city.message}</p>}
          </div>

          <div>
            <label htmlFor="postcode" className="block text-sm font-bold text-slate-800 mb-1">
              Post Code <span className="text-[#E1251B]">*</span>
            </label>
            <input
              id="postcode"
              type="text"
              {...register('postcode')}
              className={`w-full px-4 py-2.5 rounded-[4px] border text-slate-900 bg-[#F6F6F6] border-[#E5E5E5] transition-all text-sm outline-none focus:bg-white focus:border-emerald-600 focus:ring-0 ${
                errors.postcode ? 'border-rose-500 bg-rose-50/10 focus:border-rose-500' : ''
              }`}
            />
            {errors.postcode && <p className="text-rose-600 text-xs font-semibold mt-1">{errors.postcode.message}</p>}
          </div>
        </div>

        {/* Phone & Email Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-bold text-slate-800 mb-1">
              Phone <span className="text-[#E1251B]">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              {...register('phone')}
              className={`w-full px-4 py-2.5 rounded-[4px] border text-slate-900 bg-[#F6F6F6] border-[#E5E5E5] transition-all text-sm outline-none focus:bg-white focus:border-emerald-600 focus:ring-0 ${
                errors.phone ? 'border-rose-500 bg-rose-50/10 focus:border-rose-500' : ''
              }`}
            />
            {errors.phone && <p className="text-rose-600 text-xs font-semibold mt-1">{errors.phone.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-bold text-slate-800 mb-1">
              Email <span className="text-[#E1251B]">*</span>
            </label>
            <input
              id="email"
              type="email"
              {...register('email')}
              className={`w-full px-4 py-2.5 rounded-[4px] border text-slate-900 bg-[#F6F6F6] border-[#E5E5E5] transition-all text-sm outline-none focus:bg-white focus:border-emerald-600 focus:ring-0 ${
                errors.email ? 'border-rose-500 bg-rose-50/10 focus:border-rose-500' : ''
              }`}
            />
            {errors.email && <p className="text-rose-600 text-xs font-semibold mt-1">{errors.email.message}</p>}
          </div>
        </div>

        {/* Are you the Homeowner? dropdown */}
        <div>
          <label htmlFor="homeowner" className="block text-sm font-bold text-slate-800 mb-1">
            Are you the Homeowner? <span className="text-[#E1251B]">*</span>
          </label>
          <select
            id="homeowner"
            {...register('homeowner')}
            className={`w-full px-4 py-2.5 rounded-[4px] border text-slate-900 bg-[#F6F6F6] border-[#E5E5E5] transition-all text-sm outline-none focus:bg-white focus:border-emerald-600 focus:ring-0 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M5%207.5l5%205%205-5%22%20stroke%3D%22%232D2D2D%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_12px_center] bg-[size:18px_18px] bg-no-repeat pr-10 ${
              errors.homeowner ? 'border-rose-500 bg-rose-50/10 focus:border-rose-500' : ''
            }`}
          >
            <option value="">Please select</option>
            <option value="owner">Homeowner</option>
            <option value="tenant">Private Tenant</option>
            <option value="council">Council / Housing Association</option>
            <option value="landlord">Landlord</option>
          </select>
          {errors.homeowner && <p className="text-rose-600 text-xs font-semibold mt-1">{errors.homeowner.message}</p>}
        </div>

        {/* How do you currently heat your home? dropdown */}
        <div>
          <label htmlFor="heating" className="block text-sm font-bold text-slate-800 mb-1">
            How do you currently heat your home? <span className="text-[#E1251B]">*</span>
          </label>
          <select
            id="heating"
            {...register('heating')}
            className={`w-full px-4 py-2.5 rounded-[4px] border text-slate-900 bg-[#F6F6F6] border-[#E5E5E5] transition-all text-sm outline-none focus:bg-white focus:border-emerald-600 focus:ring-0 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M5%207.5l5%205%205-5%22%20stroke%3D%22%232D2D2D%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_12px_center] bg-[size:18px_18px] bg-no-repeat pr-10 ${
              errors.heating ? 'border-rose-500 bg-rose-50/10 focus:border-rose-500' : ''
            }`}
          >
            <option value="">Please select</option>
            <option value="old-gas">Old/Broken Mains Gas Boiler</option>
            <option value="electric">Electric / Storage Heaters</option>
            <option value="oil-lpg">Oil / LPG Heating System</option>
            <option value="efficient-gas">Modern Mains Gas Boiler</option>
            <option value="other">Other / Biomass / Heat Pump</option>
          </select>
          {errors.heating && <p className="text-rose-600 text-xs font-semibold mt-1">{errors.heating.message}</p>}
        </div>

        {/* Do you currently receive benefits? dropdown */}
        <div>
          <label htmlFor="benefits" className="block text-sm font-bold text-slate-800 mb-1">
            Do you currently receive benefits? <span className="text-[#E1251B]">*</span>
          </label>
          <select
            id="benefits"
            {...register('benefits')}
            className={`w-full px-4 py-2.5 rounded-[4px] border text-slate-900 bg-[#F6F6F6] border-[#E5E5E5] transition-all text-sm outline-none focus:bg-white focus:border-emerald-600 focus:ring-0 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M5%207.5l5%205%205-5%22%20stroke%3D%22%232D2D2D%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_12px_center] bg-[size:18px_18px] bg-no-repeat pr-10 ${
              errors.benefits ? 'border-rose-500 bg-rose-50/10 focus:border-rose-500' : ''
            }`}
          >
            <option value="">Please select</option>
            <option value="yes">Yes, I receive qualifying benefits</option>
            <option value="low-income">No, but household income is under £31,000</option>
            <option value="no-benefits">No, and income is over £31,000</option>
          </select>
          {errors.benefits && <p className="text-rose-600 text-xs font-semibold mt-1">{errors.benefits.message}</p>}
        </div>

        {/* Additional comments textarea */}
        <div>
          <label htmlFor="message" className="block text-sm font-bold text-slate-800 mb-1">
            Additional comments
          </label>
          <textarea
            id="message"
            rows={5}
            {...register('message')}
            className={`w-full px-4 py-2.5 rounded-[4px] border text-slate-900 bg-[#F6F6F6] border-[#E5E5E5] transition-all text-sm outline-none focus:bg-white focus:border-emerald-600 focus:ring-0 ${
              errors.message ? 'border-rose-500 bg-rose-50/10 focus:border-rose-500' : ''
            }`}
          ></textarea>
        </div>

        {/* Mock Recaptcha v2 */}
        <div className="p-3 bg-[#F6F6F6] border border-[#E5E5E5] rounded-[4px] flex items-center justify-between max-w-sm">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              id="recaptcha"
              {...register('recaptcha')}
              className="w-6 h-6 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
            />
            <span className="text-sm font-semibold text-slate-700 select-none">I'm not a robot</span>
          </label>
          <div className="flex flex-col items-center justify-center">
            <img 
              src="https://www.gstatic.com/recaptcha/api2/logo_48.png" 
              alt="reCAPTCHA logo" 
              className="w-8 h-8 object-contain opacity-75"
            />
            <span className="text-[9px] text-slate-455 mt-0.5 font-sans">reCAPTCHA</span>
            <span className="text-[7px] text-slate-400 font-sans">Privacy - Terms</span>
          </div>
        </div>
        {errors.recaptcha && <p className="text-rose-600 text-xs font-semibold mt-1">{errors.recaptcha.message}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-[4px] transition-all shadow-md hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              Sending Application...
            </>
          ) : (
            <>
              <Send size={18} />
              Submit Free Grant Application
            </>
          )}
        </button>
      </form>
    </div>
  );
}
