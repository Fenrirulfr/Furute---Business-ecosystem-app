import React, { useState } from 'react';
import { Page } from '../types';
import Footer from '../components/Footer';
import YouTubePlayer from '../components/YouTubePlayer';
import FAQAccordion from '../components/FAQAccordion';

const Subscription: React.FC<{ onNavigate: (p: Page) => void }> = ({ onNavigate }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('annually');

  const plans = {
    monthly: [
      { name: 'Explorer', price: '8,000', features: ['Access to all courses', 'Community access', 'Weekly newsletters'], popular: false },
      { name: 'Builder', price: '25,000', features: ['All Explorer features', '1 monthly mentor session', 'Priority support'], popular: true },
      { name: 'Architect', price: '70,000', features: ['All Builder features', '4 monthly mentor sessions', 'Personalized growth plan'], popular: false },
    ],
    annually: [
        { name: 'Explorer', price: '80,000', features: ['Access to all courses', 'Community access', 'Weekly newsletters'], popular: false, savings: '2 months free' },
        { name: 'Builder', price: '2,50,000', features: ['All Explorer features', '1 monthly mentor session', 'Priority support'], popular: true, savings: 'Save ₹50,000' },
        { name: 'Architect', price: '7,00,000', features: ['All Builder features', '4 monthly mentor sessions', '1 Annual Retreat Pass'], popular: false, savings: 'Save ₹1,40,000' },
    ],
  };

  const activePlans = plans[billingCycle];

  const faqItems = [
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription at any time through your account portal. Your access will continue until the end of your current billing period. We do not offer prorated refunds."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), as well as UPI and net banking for our members in India. All transactions are securely processed."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Absolutely. You can change your plan at any time from your dashboard. Upgrades are effective immediately, while downgrades will apply from the next billing cycle."
    },
    {
      question: "Is there a trial period for subscriptions?",
      answer: "We do not offer a free trial for our subscription plans. However, we have a range of free resources and introductory workshops that you can explore to experience the value Furute provides before committing to a plan."
    }
  ];

  return (
    <div className="bg-transparent dark:bg-black text-accent-blue dark:text-white min-h-screen transition-colors duration-500">
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 py-20 text-center">
        {/* Header */}
        <section className="mb-20">
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black leading-[0.9] tracking-tighter mb-10">
            Unlock Your Full <br/><span className="text-primary dark:text-brand-red italic">Potential</span>.
          </h1>
          <p className="text-xl sm:text-2xl text-slate-500 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed font-semibold">
            Access our entire ecosystem of programs, mentors, and global networks with a single subscription. Choose the plan that fuels your ambition.
          </p>
        </section>

        {/* Video Explainer Section */}
        <section className="mb-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-accent-blue dark:text-white">The Furute Ecosystem Experience</h2>
            <p className="text-lg text-slate-500 dark:text-gray-400 font-semibold leading-relaxed">Watch how our integrated platform empowers founders to achieve unprecedented growth.</p>
          </div>
          <YouTubePlayer videoId="1bOG3AQs2Xo" title="Furute Ecosystem Overview" />
        </section>

        {/* Billing Cycle Toggle */}
        <section className="mb-20 flex justify-center">
            <div className="bg-white/80 dark:bg-[#0a0a0a] border border-blue-50 dark:border-white/5 rounded-2xl p-2 flex items-center gap-2 shadow-soft backdrop-blur-sm">
                <button onClick={() => setBillingCycle('monthly')} className={`px-6 sm:px-8 py-4 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${billingCycle === 'monthly' ? 'bg-primary dark:bg-brand-red text-white shadow-vibrant' : 'text-slate-400'}`}>
                    Monthly
                </button>
                <button onClick={() => setBillingCycle('annually')} className={`px-6 sm:px-8 py-4 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all relative ${billingCycle === 'annually' ? 'bg-primary dark:bg-brand-red text-white shadow-vibrant' : 'text-slate-400'}`}>
                    Annually
                    <span className="absolute -top-3 -right-3 text-[9px] bg-green-500 text-white px-2 py-0.5 rounded-full font-bold">Save 20%</span>
                </button>
            </div>
        </section>

        {/* Pricing Table */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-32">
            {activePlans.map((plan, index) => (
                <div key={index} className={`p-8 rounded-[3.5rem] border transition-all duration-500 text-left backdrop-blur-md ${plan.popular ? 'border-4 border-primary dark:border-brand-red bg-white dark:bg-black lg:scale-105 shadow-4xl' : 'bg-white/90 dark:bg-[#0a0a0a] border-blue-50 dark:border-white/5 shadow-elevated-light'}`}>
                    {plan.popular && <span className="inline-block bg-primary dark:bg-brand-red text-white text-[10px] font-black px-5 py-2 rounded-full mb-6 uppercase tracking-widest">Most Popular</span>}
                    <h3 className="text-3xl font-black mb-4 tracking-tighter">{plan.name}</h3>
                    <div className="flex items-end gap-2 mb-8">
                        <span className="text-4xl sm:text-6xl font-black tracking-tighter">₹{plan.price}</span>
                        <span className="text-slate-400 font-bold mb-1 sm:mb-2">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    </div>
                    {plan.savings && <p className="text-green-600 font-bold mb-8 text-sm">{plan.savings}</p>}
                    <button className={`w-full py-6 rounded-2xl font-black uppercase tracking-widest text-[11px] transition-all shadow-xl active:scale-95 mb-8 ${plan.popular ? 'bg-primary dark:bg-brand-red text-white hover:brightness-110' : 'bg-accent-blue dark:bg-zinc-800 text-white dark:text-white hover:opacity-90'}`}>
                        Choose {plan.name}
                    </button>
                    <ul className="space-y-6">
                        {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-4 text-slate-600 dark:text-gray-300 font-bold text-base">
                                <span className="material-symbols-outlined text-primary dark:text-brand-red fill-1 text-2xl">check_circle</span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto text-left">
            <h2 className="text-4xl sm:text-5xl font-black mb-12 text-center tracking-tight">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
        </section>
      </main>
      <Footer onNavigate={onNavigate} currentPage={Page.Subscription} />
    </div>
  );
};

export default Subscription;
