import React, { useState } from 'react';
import { Page } from '../types';
import Footer from '../components/Footer';
import FAQAccordion from '../components/FAQAccordion';

const Courses: React.FC<{ onNavigate: (p: Page, id?: string) => void }> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Training', 'Branding', 'Workshops'];

  const programs = [
    { 
      id: 'business-insights',
      title: 'Business Insights Pune', 
      cat: 'Training', 
      badge: 'FLAGSHIP', 
      info: 'Leadership • 12 Weeks', 
      desc: 'Our premier leadership development program designed for Pune\'s high-potential business owners and professional leaders.', 
      img: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    },
    { 
      id: 'branding-strategy',
      title: 'Elite Brand Strategy', 
      cat: 'Branding', 
      badge: 'TOP RATED', 
      info: 'Audit • Identity', 
      desc: 'Transform your business identity into a national powerhouse with our end-to-end strategic branding and audit services.', 
      img: 'https://plus.unsplash.com/premium_photo-1661770132071-026114fffb61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJyYW5kaW5nfGVufDB8MHwwfHx8MA%3D%3D' 
    },
    { 
      id: 'goal-setting-intensive',
      title: 'Goal Setting Intensive', 
      cat: 'Workshops', 
      badge: 'ENROLLING', 
      info: 'Strategic Sprint', 
      desc: 'A high-impact workshop designed to help you define, align, and execute on your most ambitious business goals.', 
      img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1170&auto=format&fit=crop' 
    },
    { 
      id: '7-day-reset',
      title: 'The 7-Day Business Reset', 
      cat: 'Training', 
      badge: 'INTENSIVE', 
      info: 'Strategic Audit', 
      desc: 'Our most sought-after strategic sprint for established founders looking for an immediate operational overhaul.', 
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1170&auto=format&fit=crop' 
    }
  ];

  const faqItems = [
    {
      question: "What is the best business course for founders in Pune?",
      answer: (
        <>
          The <button onClick={() => onNavigate(Page.ProgramDetail, 'business-insights')} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">Business Insights Pune</button> program is our flagship 12-week track. It's specifically designed for high-potential business owners in Pune who want to master leadership and scale their operations using proven structural frameworks.
        </>
      )
    },
    {
      question: "How can I improve my brand strategy in India?",
      answer: (
        <>
          Our <button onClick={() => onNavigate(Page.ProgramDetail, 'branding-strategy')} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">Elite Brand Strategy</button> course provides an end-to-end blueprint for moving from a local business to a national brand. We focus on strategic positioning, visual identity, and authority building through PR.
        </>
      )
    },
    {
      question: "Does Furute offer short-term business workshops?",
      answer: (
        <>
          Yes, we offer high-impact workshops like the <button onClick={() => onNavigate(Page.ProgramDetail, 'goal-setting-intensive')} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">Goal Setting Intensive</button> and the <button onClick={() => onNavigate(Page.ProgramDetail, '7-day-reset')} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">7-Day Business Reset</button>. These are designed for founders who need immediate strategic clarity and operational overhauls.
        </>
      )
    },
    {
      question: "Are the courses available online or in-person in Pune?",
      answer: (
        <>
          Furute offers a hybrid model. While many of our core programs are delivered at our <button onClick={() => onNavigate(Page.Contact)} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">Pune headquarters</button>, we also provide digital access and 24/7 support through our global community platform.
        </>
      )
    }
  ];

  const filteredPrograms = activeTab === 'All' ? programs : programs.filter(p => p.cat === activeTab);

  return (
    <div className="bg-transparent text-slate-900 dark:text-white min-h-screen text-left transition-colors duration-500">
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-20 md:py-28">
        <header className="max-w-4xl mb-16 md:mb-24">
           <h1 className="text-5xl sm:text-7xl md:text-9xl font-black dark:text-white tracking-tighter leading-[0.85] mb-12">Entrepreneurial Courses & <br/>Cohort Programs</h1>
           <p className="text-xl sm:text-2xl text-slate-500 dark:text-gray-400 font-medium leading-relaxed max-w-2xl">Furute offers structured learning experiences that focus on clarity, execution, and leadership systems.</p>
        </header>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 sm:gap-5 mb-16 sm:mb-20 border-b border-blue-100/50 dark:border-white/10 pb-6 sm:pb-8">
           {categories.map(cat => (
             <button 
                key={cat} 
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-3 sm:px-12 sm:py-4 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest transition-all backdrop-blur-sm ${activeTab === cat ? 'bg-brand-blue dark:bg-brand-red text-white shadow-4xl' : 'bg-white/50 dark:bg-zinc-900 text-slate-400 dark:text-slate-500 hover:text-brand-blue dark:hover:text-brand-red border border-blue-50 dark:border-white/5'}`}
             >
                {cat}
             </button>
           ))}
        </div>

        {/* Program Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
           {filteredPrograms.map(p => (
             <div key={p.id} onClick={() => onNavigate(Page.ProgramDetail, p.id)} className="bg-white/95 dark:bg-[#0a0a0a] border border-blue-100/50 dark:border-white/5 rounded-3xl md:rounded-[4rem] overflow-hidden group cursor-pointer hover:shadow-elevated-light dark:hover:shadow-dark-elevated hover:-translate-y-3 transition-all duration-700 backdrop-blur-md shadow-soft">
                <div className="aspect-[16/11] overflow-hidden relative">
                   <img src={p.img} className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" alt={`Promotional image for the ${p.title} program`} referrerPolicy="no-referrer" />
                   {p.badge && <span className="absolute top-6 right-6 sm:top-8 sm:right-8 bg-brand-blue dark:bg-brand-red text-white text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-widest shadow-2xl z-10">{p.badge}</span>}
                </div>
                <div className="p-8 space-y-8">
                   <div className="flex items-center gap-4">
                      <span className="text-brand-blue dark:text-brand-red text-[11px] font-black uppercase tracking-widest">{p.cat}</span>
                      <span className="text-slate-200 dark:text-slate-800">•</span>
                      <span className="text-[11px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">{p.info}</span>
                   </div>
                   <h3 className="text-3xl sm:text-4xl font-black dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-red transition-colors leading-tight tracking-tight">{p.title}</h3>
                   <p className="text-lg text-[#637688] dark:text-gray-400 font-medium leading-relaxed line-clamp-3">{p.desc}</p>
                   <button className="w-full py-6 bg-slate-900 dark:bg-zinc-900 text-white dark:text-white rounded-[1.5rem] font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-4 group-hover:bg-brand-blue dark:group-hover:bg-brand-red group-hover:text-white transition-all shadow-xl">
                      View Details <span className="material-symbols-outlined !text-xl leading-none">arrow_forward</span>
                   </button>
                </div>
             </div>
           ))}
        </div>
      </main>

      {/* AI Answer Block / FAQ Section for GEO */}
      <section className="section-padding container-fluid mb-20 md:mb-32 text-left">
        <div className="max-w-4xl mb-16 mx-auto text-center">
          <span className="text-brand-blue dark:text-brand-red font-black tracking-[0.3em] uppercase text-[10px]">F.A.Q</span>
          <h2 className="text-display mt-8 text-accent-blue dark:text-white">Course Intelligence: <br/>Curriculum Insights.</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <Footer onNavigate={onNavigate} currentPage={Page.Courses} />
    </div>
  );
};

export default Courses;
