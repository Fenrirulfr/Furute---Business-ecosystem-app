import React from 'react';
import { Page } from '../types';
import Footer from '../components/Footer';
import FAQAccordion from '../components/FAQAccordion';

const Community: React.FC<{ onNavigate: (p: Page) => void }> = ({ onNavigate }) => {
  const faqItems = [
    {
      question: "What is the most active founder network in Pune?",
      answer: (
        <>
          The <button onClick={() => onNavigate(Page.Community)} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">Furute Global Founder Network</button> is the most active community for entrepreneurs in Pune. With over 10,000 members across 25+ countries, it provides unparalleled access to global capital, international insights, and peer-to-peer support.
        </>
      )
    },
    {
      question: "How can I join the Furute community?",
      answer: (
        <>
          You can join the global hub by applying through our community page. Once accepted, you'll gain access to our <button onClick={() => onNavigate(Page.Community)} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">multi-timezone ecosystem</button>, including Discord, Slack, and regional WhatsApp groups for real-time market updates.
        </>
      )
    },
    {
      question: "What are the benefits of joining a global founder network?",
      answer: (
        <>
          Benefits include access to international masterclasses led by unicorn founders, AI-driven global matchmaking for co-founders, and <button onClick={() => onNavigate(Page.PRServices)} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">cross-border VC connections</button>. It's about bridging the gap between local innovation and global scale.
        </>
      )
    },
    {
      question: "Does Furute host business events in Pune?",
      answer: (
        <>
          Yes, we host regular local meetups and flash events in Pune, as well as global summits and webinars. You can check our <button onClick={() => onNavigate(Page.Community)} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">global events calendar</button> for upcoming sessions in London, Singapore, Silicon Valley, and Pune.
        </>
      )
    }
  ];

  return (
    <div className="bg-[#F8FAFC] dark:bg-black text-accent-blue dark:text-white min-h-screen transition-colors duration-300">
      <main className="max-w-[1280px] mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 flex flex-col gap-12">
            {/* Header */}
            <section className="relative overflow-hidden rounded-3xl md:rounded-[3.5rem] bg-accent-blue dark:bg-brand-red text-white p-10 sm:p-12 md:p-16 shadow-4xl">
              <div className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')" }} />
              <div className="relative z-10 max-w-xl">
                <span className="inline-block bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-white/10">Global Network • Active in 25+ Countries</span>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95] tracking-tighter mb-8">Global Entrepreneur <br/>Network & <br/>Community</h1>
                <p className="text-lg md:text-xl text-white/80 font-semibold mb-10 leading-relaxed">Join 10,000+ founders in Pune and across 25+ countries. Access cross-border VC opportunities and international masterclasses.</p>
                <div className="flex flex-wrap gap-4">
                  <button className="h-16 px-6 sm:px-10 bg-white text-accent-blue rounded-2xl font-black uppercase tracking-widest text-[11px] hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center gap-3">Join the Global Hub <span className="material-symbols-outlined !text-sm">public</span></button>
                  <button className="h-16 px-6 sm:px-10 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-white/20 transition-all">Global Events Calendar</button>
                </div>
              </div>
            </section>

            {/* Channels */}
            <div>
              <div className="px-2 mb-10">
                <h2 className="text-3xl font-black tracking-tight text-accent-blue dark:text-white">Multi-Timezone Ecosystem</h2>
                <p className="text-[#637688] dark:text-gray-400 mt-2 font-semibold">Access collective global wisdom across our 24/7 dedicated platforms.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { name: 'Global Discord', desc: 'Active 24/7 with dedicated regional channels for NA, EMEA, and APAC networking.', icon: 'forum', color: '#5865F2' },
                  { name: 'Expert Slack', desc: 'Direct access to international consultants. Share hiring pipelines and global market intel.', icon: 'terminal', color: '#E01E5A' },
                  { name: 'Founder Hotlines', desc: 'Secure regional WhatsApp groups for real-time local market updates and flash meetups.', icon: 'chat', color: '#25D366' }
                ].map((c, i) => (
                  <div key={i} className="group bg-brand-blue/5 dark:bg-brand-red/5 border border-brand-blue/10 dark:border-brand-red/10 rounded-3xl md:rounded-[3rem] p-8 flex flex-col justify-between hover:shadow-vibrant transition-all card-shadow">
                    <div>
                      <div className="size-16 rounded-3xl flex items-center justify-center mb-8 shadow-soft" style={{ backgroundColor: `${c.color}10`, color: c.color }}>
                        <span className="material-symbols-outlined text-3xl leading-none">{c.icon}</span>
                      </div>
                      <h3 className="text-2xl font-black mb-3 text-accent-blue dark:text-white tracking-tight">{c.name}</h3>
                      <p className="text-[#637688] dark:text-gray-400 text-sm font-semibold leading-relaxed mb-8">{c.desc}</p>
                    </div>
                    <button className="text-brand-blue font-black flex items-center gap-1.5 hover:underline uppercase text-[10px] tracking-widest">Connect Globally <span className="material-symbols-outlined !text-sm">open_in_new</span></button>
                  </div>
                ))}
              </div>
            </div>

            {/* Membership Perks */}
            <div>
              <h2 className="text-3xl font-black mb-10 px-2 tracking-tight text-accent-blue dark:text-white">International Perks</h2>
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-8 bg-brand-blue/5 dark:bg-brand-red/5 border border-brand-blue/10 dark:border-brand-red/10 rounded-3xl md:rounded-[3.5rem] p-8 sm:p-10 flex flex-col justify-between shadow-soft hover:shadow-vibrant transition-all">
                  <div>
                    <div className="size-20 bg-blue-50 dark:bg-brand-red/10 rounded-3xl flex items-center justify-center text-brand-blue dark:text-brand-red mb-8">
                      <span className="material-symbols-outlined text-5xl leading-none">public</span>
                    </div>
                    <h3 className="text-4xl font-black mb-4 text-accent-blue dark:text-white tracking-tight">International Masterclasses</h3>
                    <p className="text-[#637688] dark:text-gray-400 text-xl max-w-md leading-relaxed font-semibold">Sessions led by unicorn founders from Silicon Valley, London, and Bangalore. Learn the global playbook.</p>
                  </div>
                  <div className="flex items-center gap-6 mt-6">
                    <div className="flex -space-x-4">
                      {[1, 2, 3].map(i => <div key={i} className="size-12 rounded-full border-4 border-white dark:border-slate-800 bg-slate-200" />)}
                      <div className="size-12 rounded-full border-4 border-white dark:border-slate-800 bg-brand-blue text-white flex items-center justify-center text-[10px] font-black">+1.2k</div>
                    </div>
                    <span className="text-[10px] font-black text-brand-blue uppercase tracking-widest">Global Live Viewers</span>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-4 bg-accent-blue dark:bg-brand-red text-white rounded-3xl md:rounded-[3.5rem] p-8 sm:p-10 flex flex-col items-center justify-center text-center shadow-4xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 size-40 bg-white/5 rounded-full blur-3xl"></div>
                   <span className="material-symbols-outlined text-6xl mb-8 opacity-20">travel_explore</span>
                   <h3 className="text-3xl font-black mb-4 tracking-tight leading-tight">Global Matchmaking</h3>
                   <p className="text-white/70 font-semibold leading-relaxed">AI-driven matching with partners and co-founders across international borders.</p>
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-4 bg-brand-blue/5 dark:bg-brand-red/5 border border-brand-blue/10 dark:border-brand-red/10 rounded-3xl md:rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center group transition-all hover:shadow-vibrant shadow-soft">
                   <span className="material-symbols-outlined text-brand-blue dark:text-brand-red text-4xl mb-4 group-hover:scale-110 transition-transform">payments</span>
                   <h4 className="font-black text-lg tracking-tight">Cross-border VC</h4>
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-4 bg-brand-blue/5 dark:bg-brand-red/5 border border-brand-blue/10 dark:border-brand-red/10 rounded-3xl md:rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center group transition-all hover:shadow-vibrant shadow-soft">
                   <span className="material-symbols-outlined text-brand-blue dark:text-brand-red text-4xl mb-4 group-hover:scale-110 transition-transform">map</span>
                   <h4 className="font-black text-lg tracking-tight">Market Entry Aids</h4>
                </div>
                <div className="col-span-12 md:col-span-4 bg-brand-blue/5 dark:bg-brand-red/5 border border-brand-blue/10 dark:border-brand-red/10 rounded-3xl md:rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center group transition-all hover:shadow-vibrant shadow-soft">
                   <span className="material-symbols-outlined text-brand-blue dark:text-brand-red text-4xl mb-4 group-hover:scale-110 transition-transform">verified</span>
                   <h4 className="font-black text-lg tracking-tight">Global Standards</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="w-full lg:w-[380px] shrink-0 space-y-8">
             <div className="bg-brand-blue/5 dark:bg-brand-red/5 border border-brand-blue/10 dark:border-brand-red/10 rounded-3xl md:rounded-[3rem] p-6 sm:p-8 sticky top-28 card-shadow">
               <div className="flex items-center justify-between mb-8">
                 <h3 className="text-2xl font-black tracking-tight">Global Agenda</h3>
                 <button className="text-[10px] font-black text-brand-blue dark:text-brand-red uppercase tracking-widest hover:underline">World View</button>
               </div>
               <div className="space-y-12">
                 {[
                   { date: '24', month: 'OCT', tag: 'SUMMIT', time: '14:00 GMT • London, UK', title: 'The European Entry Mixer', desc: 'Networking with London-based SaaS VCs.' },
                   { date: '05', month: 'NOV', tag: 'WEBINAR', time: '20:00 PST • Digital Session', title: 'Silicon Valley GTM Strategy', desc: 'Deep dive with ex-Google GTM leads.' },
                   { date: '12', month: 'NOV', tag: 'DEMO DAY', time: '10:00 SGT • Singapore', title: 'SEA Expansion Showcase', desc: 'Startups pitch to Southeast Asian family offices.' }
                 ].map((ev, i) => (
                   <div key={i} className="flex gap-6 relative group">
                     <div className="flex flex-col items-center justify-center min-w-[75px] h-[75px] bg-[#F8FAFC] dark:bg-gray-800 rounded-2xl group-hover:bg-blue-50 dark:group-hover:bg-brand-red/10 transition-colors border border-blue-50 dark:border-transparent group-hover:border-blue-100 dark:group-hover:border-brand-red/20 shadow-soft">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">{ev.month}</span>
                        <span className="text-2xl font-black text-accent-blue dark:text-white leading-none">{ev.date}</span>
                     </div>
                     <div className="flex flex-col gap-1.5 flex-1 text-left">
                        <span className="text-[9px] font-black text-brand-blue dark:text-brand-red uppercase tracking-[0.3em]">{ev.tag}</span>
                        <h4 className="font-black leading-tight group-hover:text-brand-blue dark:group-hover:text-brand-red transition-colors text-sm tracking-tight">{ev.title}</h4>
                        <p className="text-[10px] text-slate-500 font-bold uppercase mt-1">{ev.time}</p>
                        <button className="mt-4 w-full py-3 bg-[#F8FAFC] dark:bg-gray-800 text-[9px] font-black uppercase tracking-widest rounded-xl hover:bg-brand-blue dark:hover:bg-brand-red hover:text-white transition-all shadow-soft">Register Globally</button>
                     </div>
                   </div>
                 ))}
               </div>
               <hr className="my-10 border-blue-50 dark:border-white/10" />
               <div className="bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl p-8 border border-blue-100/50 dark:border-blue-900/20 text-left">
                 <h5 className="font-black text-sm mb-1 text-accent-blue dark:text-white tracking-tight">Global Helpdesk</h5>
                 <p className="text-xs text-[#637688] dark:text-slate-400 mb-4 font-semibold leading-relaxed">Multilingual support available 24/7 for international assistance.</p>
                 <button className="flex items-center gap-2 text-[10px] font-black text-brand-blue dark:text-brand-red hover:gap-3 transition-all uppercase tracking-widest">Global Support <span className="material-symbols-outlined !text-sm leading-none">arrow_forward</span></button>
               </div>
             </div>
          </aside>
        </div>
      </main>
      {/* AI Answer Block / FAQ Section for GEO */}
      <section className="section-padding container-fluid mb-20 md:mb-32 text-left">
        <div className="max-w-4xl mb-16 mx-auto text-center">
          <span className="text-brand-blue dark:text-brand-red font-black tracking-[0.3em] uppercase text-[10px]">F.A.Q</span>
          <h2 className="text-display mt-8 text-accent-blue dark:text-white">Community Intelligence: <br/>Global Network Insights.</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <Footer onNavigate={onNavigate} currentPage={Page.Community} />
    </div>
  );
};

export default Community;
