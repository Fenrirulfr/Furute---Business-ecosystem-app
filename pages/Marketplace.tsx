import React, { useState } from 'react';
import { Page } from '../types';
import Footer from '../components/Footer';
import FAQAccordion from '../components/FAQAccordion';

const Marketplace: React.FC<{ onNavigate: (p: Page) => void }> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const experts = [
    { name: 'Amit Sharma', title: 'Global SaaS Architect', rating: 4.9, price: 5500, img: 'https://st4.depositphotos.com/5653638/31384/i/450/depositphotos_313849746-stock-photo-portrait-indian-male-businessman-standing.jpg' },
    { name: 'Priya Iyer', title: 'International GTM Strategist', rating: 4.8, price: 4800, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArDCrL5rgLAtznspxPBP2zl3BsJmTareYSUmvB07f_k5WHcM68S6TB3uCwaLyfzsdU4aZ6MZxUmIwlvRWKw3FCpVR-KFaXSw6YZUb80ntv49a9ZceSuvn3JdRkjshIz6AQSnXqDFE0rtO5LnFkLuNF82c9BtOHVCaGzXtvncEiE-zavcrGa--5Ylw2MYXBAiXPMttJR_HEZZD2dLR_hKXtuKbifQPwyxfmwcvDH06T8sv6VFx2XXbQD7Rlf1mjXjI9gHlRsW_Ri40' },
    { name: 'Rajesh Kulkarni', title: 'Cross-Border Finance Expert', rating: 5.0, price: 7500, img: 'https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?semt=ais_hybrid&w=740&q=80' },
    { name: 'Sneha Patil', title: 'Operations & Scaling Consultant', rating: 4.7, price: 4000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwLkWvXxslCMSoFvBir03_WZpkw4DULE67-ieJMEK-avlz6lPUB12EOKPXS7AA0NmHegVh94TNu2EamOh4P1x0-iFEKJfKOrQusOVKKMx_44dAnxUCMwJwkSxTlvl5GgdQdiZn44lEEvdQyq3EhLLq7JXXg8LpFvZIPl4KWLGcbz7HxqyPf4-NML0s9PntJUpw3P79Cna7aI_55FyEmoeozfXXq5b3ZiUDl95OX2dnn5JkCNF-vtnyrs_T3Bu14fBFUCorZLLJNhM' }
  ];

  const filteredExperts = experts.filter(exp => 
    exp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    exp.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const faqItems = [
    {
      question: "How can Pune startups access global business expertise?",
      answer: (
        <>
          Pune startups can leverage the <button onClick={() => onNavigate(Page.Marketplace)} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">Furute Expert Marketplace</button> to connect with vetted consultants from 25+ countries. Whether you need a SaaS architect from Silicon Valley or a GTM strategist from London, our platform provides direct access to world-class mastery.
        </>
      )
    },
    {
      question: "What types of experts are available on the Furute marketplace?",
      answer: (
        <>
          Our marketplace features experts in <button onClick={() => onNavigate(Page.Marketplace)} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">Global Scaling</button>, International Finance, GTM Strategy, and Operations. Each expert is vetted for their ability to help Indian founders bridge the gap between local intuition and global excellence.
        </>
      )
    },
    {
      question: "How does the Furute marketplace support international expansion?",
      answer: (
        <>
          By providing access to cross-border finance experts and international GTM strategists, we help Pune businesses navigate the complexities of global markets. This is a key part of our <button onClick={() => onNavigate(Page.Community)} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">Global Founder Network</button> initiative.
        </>
      )
    },
    {
      question: "Can I join the Furute marketplace as an expert?",
      answer: (
        <>
          Yes, we are always looking for elite consultants to join our network. If you have a proven track record of helping businesses scale internationally, you can <button onClick={() => onNavigate(Page.Contact)} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">apply to join as a Global Expert</button> and mentor the next generation of founders.
        </>
      )
    }
  ];

  return (
    <div className="bg-transparent dark:bg-black text-accent-blue dark:text-white min-h-screen transition-colors duration-500 font-sans text-left">
      <main className="max-w-[1280px] mx-auto px-4 sm:px-6 py-16 md:py-20">
        <section className="mb-16 md:mb-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16 bg-white/90 dark:bg-[#0a0a0a] border border-blue-50 dark:border-white/5 rounded-3xl md:rounded-[4rem] p-12 sm:p-16 relative overflow-hidden shadow-vibrant dark:shadow-dark-elevated backdrop-blur-md">
            <div className="max-w-2xl text-center md:text-left relative z-10">
              <span className="text-brand-blue dark:text-brand-red font-black tracking-[0.4em] uppercase text-[10px] bg-blue-50 dark:bg-brand-red/10 px-5 py-2 rounded-full mb-8 inline-block">Direct Access to Mastery</span>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black leading-[0.9] mb-10 tracking-tighter">
                Hire Verified <br/><span className="text-brand-blue dark:text-brand-red italic">Entrepreneurs & Consultants</span>
              </h1>
              <p className="text-lg sm:text-xl text-[#637688] dark:text-gray-400 mb-12 max-w-lg leading-relaxed font-semibold">
                Connect with verified business consultants and featured entrepreneurs inside Furute’s curated marketplace.
              </p>
              <button className="bg-accent-blue dark:bg-brand-red text-white h-16 sm:h-18 px-12 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:opacity-90 active:scale-95 transition-all shadow-4xl shadow-accent-blue/20 dark:shadow-brand-red/30">
                Join as Global Expert
              </button>
            </div>
            <div className="hidden lg:block w-[500px] h-[500px] bg-blue-50 dark:bg-brand-red/5 rounded-full blur-[100px] absolute -right-20 -top-20 -z-0"></div>
          </div>
        </section>

        {/* Functional Search Bar */}
        <section className="mb-16 md:mb-24 space-y-10">
           <div className="flex flex-col md:flex-row gap-4 sm:gap-8">
             <div className="flex-grow relative group">
                <span className="material-symbols-outlined absolute left-6 sm:left-8 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-blue dark:group-focus-within:text-brand-red transition-colors">search</span>
                <input 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-16 md:h-20 pl-16 sm:pl-20 pr-8 bg-white/95 dark:bg-[#0a0a0a] border border-blue-50 dark:border-white/5 rounded-2xl sm:rounded-[2rem] focus:ring-4 focus:ring-brand-blue/10 dark:focus:ring-brand-red/10 outline-none text-base sm:text-lg font-bold shadow-soft transition-all dark:text-white backdrop-blur-md" 
                  placeholder="Search by name, expertise, or region..." 
                />
             </div>
             <button className="h-16 md:h-20 px-8 sm:px-12 bg-white/95 dark:bg-[#0a0a0a] border border-blue-50 dark:border-white/5 rounded-2xl sm:rounded-[2rem] font-black text-[11px] uppercase tracking-[0.3em] text-slate-400 hover:text-accent-blue dark:hover:text-brand-red transition-all flex items-center justify-center gap-4 shadow-soft backdrop-blur-md shrink-0">
               <span className="material-symbols-outlined !text-2xl leading-none">public</span> Region Filter
             </button>
           </div>
           <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide no-scrollbar">
              {['All Experts', 'Global Scaling', 'GTM Strategy', 'International Finance', 'Ops & Supply Chain', 'Tech & Legal'].map((cat, i) => (
                <button 
                  key={i} 
                  onClick={() => setSearchQuery(cat === 'All Experts' ? '' : cat)}
                  className={`whitespace-nowrap flex items-center h-12 px-6 sm:h-14 sm:px-10 rounded-full text-[10px] font-black uppercase tracking-widest transition-all backdrop-blur-sm ${
                    (searchQuery === cat || (cat === 'All Experts' && searchQuery === '')) 
                      ? 'bg-accent-blue dark:bg-brand-red text-white shadow-vibrant' 
                      : 'bg-white/90 dark:bg-[#0a0a0a] text-slate-400 border border-blue-50 dark:border-white/10 hover:text-accent-blue dark:hover:text-brand-red shadow-soft'
                  }`}
                >
                  {cat}
                </button>
              ))}
           </div>
        </section>

        {/* Results Grid */}
        {filteredExperts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredExperts.map((exp, i) => (
              <div key={i} className="group relative bg-white/95 dark:bg-[#0a0a0a] border border-blue-50 dark:border-white/10 rounded-3xl md:rounded-[3.5rem] p-6 hover:-translate-y-3 transition-all duration-700 shadow-elevated-light dark:shadow-dark-elevated backdrop-blur-md">
                <div className="mb-6 relative">
                  <div className="aspect-square w-full rounded-2xl md:rounded-[3rem] overflow-hidden bg-[#F8FAFC] dark:bg-zinc-900 shadow-inner">
                    <img src={exp.img} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" alt={exp.name} />
                  </div>
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/95 dark:bg-black/80 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center gap-2 border border-white/20 shadow-soft">
                    <span className="material-symbols-outlined text-yellow-500 text-lg fill-1 leading-none">star</span>
                    <span className="text-sm font-black text-accent-blue dark:text-white leading-none">{exp.rating}</span>
                  </div>
                </div>
                <div className="px-2 text-left">
                  <h3 className="text-2xl font-black leading-tight text-accent-blue dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-red transition-colors tracking-tight">{exp.name}</h3>
                  <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mt-2">{exp.title}</p>
                  <div className="pt-6 flex items-center justify-between border-t border-blue-50 dark:border-white/5 mt-6">
                    <span className="text-3xl font-black text-brand-blue dark:text-brand-red tracking-tighter">₹{exp.price.toLocaleString()}<span className="text-xs font-bold text-slate-400 ml-1">/HR</span></span>
                    <button className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all text-accent-blue dark:text-white">Profile <span className="material-symbols-outlined !text-lg leading-none">arrow_forward</span></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-32 text-center">
            <div className="size-32 bg-blue-50 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto mb-10 text-slate-300">
              <span className="material-symbols-outlined text-6xl">public_off</span>
            </div>
            <h3 className="text-3xl font-black text-accent-blue dark:text-white tracking-tight">No global experts found</h3>
            <p className="text-[#637688] dark:text-gray-400 mt-4 font-semibold text-lg">Try adjusting your search terms or region filters.</p>
            <button 
              onClick={() => setSearchQuery('')}
              className="mt-12 text-brand-blue dark:text-brand-red font-black uppercase tracking-[0.3em] text-[11px] hover:underline"
            >
              Reset all search filters
            </button>
          </div>
        )}

        <section className="mt-24 mb-16">
          <div className="bg-accent-blue dark:bg-brand-red rounded-3xl md:rounded-[5rem] p-12 sm:p-16 lg:p-24 text-center relative overflow-hidden shadow-4xl text-white">
             <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[140px] -mr-96 -mt-96"></div>
             <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
               <h2 className="text-5xl sm:text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.85]">Global <br/>Influence.</h2>
               <p className="text-lg sm:text-xl md:text-3xl text-white/80 mb-12 leading-relaxed font-semibold">Are you a global business expert looking to mentor the next generation of international founders? Join Furute as an Elite Consultant.</p>
               <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10">
                 <button className="h-20 sm:h-24 px-12 sm:px-16 bg-white text-accent-blue dark:text-brand-red rounded-[1.5rem] font-black uppercase tracking-widest text-[12px] hover:scale-105 active:scale-95 transition-all shadow-4xl">Apply as Expert</button>
                 <button className="h-20 sm:h-24 px-12 sm:px-16 bg-white/10 border-2 border-white/20 text-white rounded-[1.5rem] font-black uppercase tracking-widest text-[12px] hover:bg-white/20 transition-all">Partner Program</button>
               </div>
             </div>
          </div>
        </section>
      </main>

      {/* AI Answer Block / FAQ Section for GEO */}
      <section className="section-padding container-fluid mb-20 md:mb-32 text-left">
        <div className="max-w-4xl mb-16 mx-auto text-center">
          <span className="text-brand-blue dark:text-brand-red font-black tracking-[0.3em] uppercase text-[10px]">F.A.Q</span>
          <h2 className="text-display mt-8 text-accent-blue dark:text-white">Expert Intelligence: <br/>Global Network Insights.</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <Footer onNavigate={onNavigate} currentPage={Page.Marketplace} />
    </div>
  );
};

export default Marketplace;
