import React from 'react';
import { Page } from '../types';
import Footer from '../components/Footer';
import FAQAccordion from '../components/FAQAccordion';

interface MentoringProps {
  onNavigate: (p: Page) => void;
}

const Mentoring: React.FC<MentoringProps> = ({ onNavigate }) => {
  const faqItems = [
    {
      question: "How can I get 1:1 business mentoring in Pune?",
      answer: (
        <>
          You can apply for exclusive <button onClick={() => onNavigate(Page.Mentoring)} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">1:1 mentorship with Ashay Shah</button> through the Furute platform. Ashay offers personalized coaching for founders in Pune, focusing on both life coaching and high-level business strategy to help you achieve market dominance.
        </>
      )
    },
    {
      question: "What is the difference between life coaching and business strategy?",
      answer: (
        <>
          At Furute, we believe they are two sides of the same coin. Life coaching focuses on your internal mindset and psychological maturity, while business strategy focuses on your external <button onClick={() => onNavigate(Page.Courses)} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">operational frameworks</button>. Ashay Shah integrates both to ensure a holistic transformation.
        </>
      )
    },
    {
      question: "Who is eligible for elite mentoring with Ashay Shah?",
      answer: (
        <>
          The elite mentoring track is primarily designed for established founders and executives in Pune who are generating over ₹50L in annual revenue. This ensures that the strategic blueprints and <button onClick={() => onNavigate(Page.PRServices)} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">branding overhauls</button> provided can be effectively implemented for maximum scale.
        </>
      )
    },
    {
      question: "How do I book a consultation with Ashay Shah?",
      answer: (
        <>
          To start your journey, you can <button onClick={() => onNavigate(Page.Contact)} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">contact our Pune headquarters</button> or request an introductory call through the mentoring page. We'll conduct an initial audit to see if you're a fit for our elite coaching tracks.
        </>
      )
    }
  ];

  return (
    <div className="bg-[#F8FAFC] dark:bg-black text-accent-blue dark:text-gray-100 min-h-screen transition-colors duration-300 text-left">
      {/* Hero */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-32 bg-white dark:bg-black rounded-b-[5rem] shadow-soft mb-20 border-b border-blue-50 dark:border-white/5">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-12">
            <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-blue-50 dark:bg-brand-red/10 text-brand-blue dark:text-brand-red text-[11px] font-black uppercase tracking-[0.3em] border border-blue-100/50 dark:border-brand-red/20 shadow-soft">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue dark:bg-brand-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-blue dark:bg-brand-red"></span>
              </span>
              Elite 1:1 Coaching Enrollment
            </div>
            <h1 className="text-6xl lg:text-9xl font-black leading-[0.85] tracking-tighter text-accent-blue dark:text-white">
              1:1 Business <br/>Mentoring with <span className="text-brand-blue dark:text-brand-red italic">Ashay Shah</span>.
            </h1>
            <p className="text-2xl md:text-3xl text-[#637688] dark:text-gray-400 leading-relaxed max-w-xl font-semibold">
              Elite business coaching in Pune for founders scaling beyond ₹50L revenue. Strategic architecture and life coaching combined.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 pt-6">
              <button className="bg-accent-blue dark:bg-brand-red hover:opacity-90 text-white px-16 py-8 rounded-[2rem] font-black uppercase tracking-widest text-[12px] transition-all flex items-center justify-center gap-5 shadow-4xl shadow-accent-blue/20 dark:shadow-brand-red/30">
                Book Session <span className="material-symbols-outlined !text-2xl leading-none">calendar_today</span>
              </button>
              <button onClick={() => onNavigate(Page.Courses)} className="bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 text-accent-blue dark:text-white border-4 border-blue-50 dark:border-white/10 px-16 py-8 rounded-[2rem] font-black uppercase tracking-widest text-[12px] transition-all shadow-soft">
                The Curriculum
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-white dark:bg-[#0A0F1A] rounded-[5rem] overflow-hidden shadow-vibrant relative z-10 border-[16px] border-white dark:border-white/5">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/40 dark:from-brand-red/30 to-transparent mix-blend-multiply z-10"></div>
              <img 
                alt="Professional headshot of Ashay Shah, business mentor in Pune" 
                className="w-full h-full object-cover grayscale-[10%]" 
                src="https://lh3.googleusercontent.com/d/13VMWrgz1S7gWwvOhoadaRVrFkoEt3bqs"
              />
            </div>
            <div className="absolute top-1/2 -right-16 translate-y-[-50%] bg-white dark:bg-[#141C2F] p-12 rounded-[3.5rem] shadow-4xl z-20 border border-blue-50 dark:border-white/10 hidden sm:block scale-110">
              <div className="flex flex-col gap-2 text-center">
                <span className="text-accent-blue dark:text-brand-red font-black text-6xl tracking-tighter">5K+</span>
                <span className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em] leading-none mt-2">Lives Transformed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Pillars */}
      <section className="py-20 md:py-32 px-6 lg:px-12 text-left">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
            <div className="max-w-4xl">
              <span className="text-brand-blue dark:text-brand-red font-black tracking-[0.4em] uppercase text-[10px]">Mentorship Tracks</span>
              <h2 className="text-5xl md:text-8xl font-black mt-8 tracking-tighter text-accent-blue dark:text-white leading-[0.9]">Architecting Your <br/>Excellence.</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="group bg-white dark:bg-[#0a0a0a] p-12 rounded-[4.5rem] border border-blue-50 dark:border-white/5 hover:border-brand-blue/30 transition-all shadow-vibrant dark:shadow-4xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 size-60 bg-blue-50/50 rounded-full blur-3xl"></div>
              <div className="size-24 bg-blue-50 dark:bg-blue-900/10 text-brand-blue rounded-[2.5rem] flex items-center justify-center mb-12 shadow-soft group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-5xl leading-none">psychology_alt</span>
              </div>
              <h3 className="text-4xl font-black mb-10 text-accent-blue dark:text-white tracking-tight">Life Coaching</h3>
              <p className="text-2xl text-[#637688] dark:text-gray-400 mb-12 leading-relaxed font-semibold">
                Align your subconscious patterns with your conscious ambitions. Ashay helps you master your internal state to achieve external dominance.
              </p>
              <ul className="space-y-8 mb-16">
                {['Mindset Rewiring', 'Performance Optimization', 'Vision Realignment', 'Stress Resilience'].map(f => (
                  <li key={f} className="flex items-center gap-6 text-xl text-accent-blue dark:text-gray-300 font-black">
                    <span className="material-symbols-outlined text-brand-blue text-3xl fill-1">check_circle</span> {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-8 rounded-[1.5rem] border-4 border-blue-50 dark:border-white/10 text-accent-blue dark:text-white font-black uppercase tracking-widest text-[12px] hover:bg-accent-blue hover:text-white transition-all shadow-soft">
                Request Intro Call
              </button>
            </div>
            <div className="group bg-accent-blue dark:bg-brand-red p-12 rounded-[4.5rem] transition-all shadow-4xl relative overflow-hidden text-white">
              <div className="absolute top-0 right-0 bg-white/10 backdrop-blur-md text-white text-[10px] font-black px-10 py-4 uppercase tracking-[0.4em] rounded-bl-[3rem]">Executive Track</div>
              <div className="size-24 bg-white/10 backdrop-blur-md text-white rounded-[2.5rem] flex items-center justify-center mb-12 shadow-2xl group-hover:scale-110 transition-transform border border-white/20">
                <span className="material-symbols-outlined text-5xl leading-none">rocket_launch</span>
              </div>
              <h3 className="text-4xl font-black mb-10 tracking-tight">Business Strategy</h3>
              <p className="text-white/80 text-2xl mb-12 leading-relaxed font-semibold">
                Deep-dive operational audits and architectural scaling blueprints for founders generating over ₹50L in annual revenue.
              </p>
              <ul className="space-y-8 mb-16">
                {['Operations Frameworks', 'Scale Blueprints', 'Financial Masterclass', 'Branding Overhaul'].map(f => (
                  <li key={f} className="flex items-center gap-6 text-xl text-white font-black">
                    <span className="material-symbols-outlined text-white text-3xl fill-1">check_circle</span> {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-8 rounded-[1.5rem] bg-white text-accent-blue dark:bg-white dark:text-brand-red font-black uppercase tracking-widest text-[12px] hover:brightness-110 transition-all shadow-4xl">
                Apply for Elite Mentoring
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Answer Block / FAQ Section for GEO */}
      <section className="section-padding container-fluid mb-20 md:mb-32 text-left">
        <div className="max-w-4xl mb-16 px-6 lg:px-12 mx-auto text-center">
          <span className="text-brand-blue dark:text-brand-red font-black tracking-[0.3em] uppercase text-[10px]">F.A.Q</span>
          <h2 className="text-display mt-8 text-accent-blue dark:text-white">Mentorship Intelligence: <br/>Strategic Insights.</h2>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <Footer onNavigate={onNavigate} currentPage={Page.Mentoring} />
    </div>
  );
};

export default Mentoring;
