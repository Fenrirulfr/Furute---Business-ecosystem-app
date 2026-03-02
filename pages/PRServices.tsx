import React from 'react';
import { Page } from '../types';
import Footer from '../components/Footer';
import FAQAccordion from '../components/FAQAccordion';

const PRServices: React.FC<{ onNavigate: (p: Page) => void }> = ({ onNavigate }) => {
  const faqItems = [
    {
      question: "What is the best PR agency for startups in Pune?",
      answer: (
        <>
          Furute is considered a premier <button onClick={() => onNavigate(Page.PRServices)} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">PR and Media agency in Pune</button> because we focus on authority building rather than just press releases. We help founders master their narrative and gain visibility in both local Pune media and national outlets.
        </>
      )
    },
    {
      question: "How can I get my business featured in national media?",
      answer: (
        <>
          Our "Growth" and "Premium" PR packages are designed for national outreach. We leverage our extensive network to secure guest post opportunities, TV interviews, and features in top-tier journals, helping you build <button onClick={() => onNavigate(Page.Courses)} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">national brand authority</button>.
        </>
      )
    },
    {
      question: "Does Furute offer local PR services in Pune?",
      answer: (
        <>
          Yes, our "Starter" package is specifically tailored for local Pune outreach. It includes a local press release and a basic brand audit, making it ideal for businesses looking to establish a strong presence in the <button onClick={() => onNavigate(Page.Contact)} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">Pune market</button>.
        </>
      )
    },
    {
      question: "How does PR help with business scaling?",
      answer: (
        <>
          PR builds trust and authority, which are essential for scaling. By positioning yourself as an industry leader, you attract better talent, more investors, and higher-paying clients. This is a core component of the <button onClick={() => onNavigate(Page.Mentoring)} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">Furute strategic framework</button>.
        </>
      )
    }
  ];

  return (
    <div className="bg-transparent dark:bg-black text-[#111518] dark:text-white min-h-screen transition-colors duration-500">
      <main className="max-w-[1280px] mx-auto pb-20 px-4 sm:px-6">
        <section className="py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-10 text-left">
              <div className="space-y-6">
                <span className="text-primary dark:text-brand-red font-black tracking-[0.2em] uppercase text-[10px] bg-primary/5 dark:bg-brand-red/10 px-4 py-1.5 rounded-full border border-primary/10 dark:border-brand-red/20 inline-block">Authority & Visibility</span>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.05] tracking-tighter dark:text-white">Strategic PR Agency <br/><span className="text-primary dark:text-brand-red italic">Services in Pune</span></h1>
                <p className="text-lg sm:text-xl text-slate-500 dark:text-gray-400 max-w-lg leading-relaxed font-medium">Build authority with Pune's premier PR agency. Media coverage, brand narrative, and reputation management for growing businesses.</p>
              </div>
              <div className="flex flex-wrap gap-6">
                <button className="bg-primary dark:bg-brand-red text-white h-16 px-10 rounded-xl font-black uppercase tracking-widest text-[11px] flex items-center gap-3 shadow-3xl hover:scale-105 active:scale-95 transition-all">Explore Packages <span className="material-symbols-outlined !text-xl">arrow_downward</span></button>
                <button className="border-4 border-slate-100 dark:border-white/10 text-primary dark:text-white h-16 px-10 rounded-xl font-black uppercase tracking-widest text-[11px] hover:bg-slate-50 dark:hover:bg-brand-red/10 transition-all backdrop-blur-sm">Talk to Expert</button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 dark:bg-brand-red/20 rounded-2xl md:rounded-[3rem] -rotate-2 transition-transform duration-1000 group-hover:rotate-0"></div>
              <div className="relative bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl md:rounded-[2.5rem] shadow-4xl brightness-90 filter grayscale-[20%] border-4 border-white dark:border-white/5" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA5TzazuQGvvE5mMh5_Q6-7QM4b8jdSz_n6hioFZTOAx2iTdhPlQYxf6oWo8I3B52Fdx_v6JZgOaiEGJYuT64nQJNqSlJiaAzkxTU6NSv1PAnPfYKEJnNH4EneHFF8r2yvEoIjdS8978PZtKqwY5YH84W59QZ8YurWNSc7CE8_cTAKqUKuSOv_07YngQawbld3vu_MzxG4oHax2Ip5pJHrDa2-YQ_TitMLF2P-VtRWBETGHyeTCIQtvJZXqVGymiQHVK_sfjmgrZXA")' }}></div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black dark:text-white mb-6 tracking-tight">Choose Your Growth Path</h2>
            <p className="text-lg sm:text-xl text-slate-500 dark:text-gray-400 font-medium">Results-driven public relations packages for every stage of business development.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {[
              { tier: 'Starter', price: '₹10,000', features: ['Local Pune outreach', '1 Local press release', 'Basic brand audit'] },
              { tier: 'Growth', price: '₹50,000', featured: true, features: ['National media outreach', '3 Press releases', 'Guest post opportunities', 'Media kit creation'] },
              { tier: 'Premium', price: '₹1,50,000', features: ['Full-scale PR management', 'TV/Podcast interview booking', 'Top-tier journal features', 'Concierge support'] }
            ].map((p, idx) => (
              <div key={idx} className={`flex flex-col p-8 rounded-3xl md:rounded-[3rem] border transition-all card-shadow ${p.featured ? 'border-4 border-primary dark:border-brand-red bg-white/95 dark:bg-black md:scale-105 shadow-4xl z-10' : 'border-slate-100 dark:border-white/5 bg-white/90 dark:bg-[#0a0a0a] shadow-elevated-light'}`}>
                <h3 className="text-[11px] font-black uppercase tracking-[0.3em] mb-6 text-slate-400 dark:text-slate-500">{p.tier} Narrative</h3>
                <div className="text-5xl font-black dark:text-white mb-3 tracking-tighter">{p.price}</div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-10">one-time investment</p>
                <ul className="space-y-6 mb-12 flex-grow text-left">
                  {p.features.map(f => (
                    <li key={f} className="flex gap-4 text-sm text-slate-600 dark:text-gray-300 font-bold">
                      <span className="material-symbols-outlined text-primary dark:text-brand-red fill-1 text-xl">check_circle</span> {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all shadow-xl active:scale-95 ${p.featured ? 'bg-primary dark:bg-brand-red text-white hover:brightness-110' : 'bg-slate-900 dark:bg-white text-white dark:text-black hover:bg-slate-700 dark:hover:bg-brand-red dark:hover:text-white'}`}>Book {p.tier} Package</button>
              </div>
            ))}
          </div>
        </section>
      </main>
      {/* AI Answer Block / FAQ Section for GEO */}
      <section className="section-padding container-fluid mb-20 md:mb-32 text-left">
        <div className="max-w-4xl mb-16 px-4 sm:px-6 mx-auto text-center">
          <span className="text-brand-blue dark:text-brand-red font-black tracking-[0.3em] uppercase text-[10px]">F.A.Q</span>
          <h2 className="text-display mt-8 text-accent-blue dark:text-white">PR Intelligence: <br/>Media Visibility Insights.</h2>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <Footer onNavigate={onNavigate} currentPage={Page.PRServices} />
    </div>
  );
};

export default PRServices;
