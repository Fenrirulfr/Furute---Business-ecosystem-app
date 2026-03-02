import React from 'react';
import { Page } from '../types';
import Footer from '../components/Footer';
import FAQAccordion from '../components/FAQAccordion';

const About: React.FC<{ onNavigate: (p: Page) => void }> = ({ onNavigate }) => {
  const faqItems = [
    {
      question: "What is the mission of Furute in Pune?",
      answer: (
        <>
          Furute's mission is to architect a world-class business ecosystem in Pune. We aim to empower 10,000+ local entrepreneurs by providing them with the <button onClick={() => onNavigate(Page.Courses)} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">strategic frameworks</button> and psychological alignment needed to scale globally.
        </>
      )
    },
    {
      question: "How long has Ashay Shah been coaching in Pune?",
      answer: (
        <>
          Ashay Shah has been a cornerstone of the Pune business community for over 15 years. His journey began with a vision to bridge the gap between local business intuition and global excellence, leading to the creation of the <button onClick={() => onNavigate(Page.Mentoring)} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">Business Insights program</button>.
        </>
      )
    },
    {
      question: "What makes the Furute framework unique?",
      answer: (
        <>
          The Furute framework is unique because it addresses both the structural and psychological aspects of business. We focus on "structural realignment," ensuring that a founder's internal mindset is as robust as their external business processes. This holistic approach is why we are considered Pune's <button onClick={() => onNavigate(Page.PRServices)} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">premier leadership training</button> organization.
        </>
      )
    },
    {
      question: "Can I join the Furute community if I'm not in Pune?",
      answer: (
        <>
          Absolutely. While our headquarters are in Pune, the <button onClick={() => onNavigate(Page.Community)} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">Furute Global Founder Network</button> is accessible to entrepreneurs worldwide, offering 24/7 multi-timezone support and international masterclasses.
        </>
      )
    }
  ];

  return (
    <div className="bg-white dark:bg-black text-[#111518] dark:text-slate-100 min-h-screen transition-colors duration-300 text-left">
      {/* Hero Section */}
      <section className="relative overflow-hidden section-padding">
        <div className="container-fluid">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block py-2 px-6 rounded-full bg-brand-blue/10 dark:bg-brand-red/10 text-brand-blue dark:text-brand-red text-xs font-black uppercase tracking-widest mb-10 border border-brand-blue/20 dark:border-brand-red/20">Our Narrative</span>
              
              <h1 className="text-hero text-slate-900 dark:text-white mb-12">
                About Furute
              </h1>
              
              <p className="text-2xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed mb-16 font-medium">
                Furute is a business training and ecosystem platform built to empower entrepreneurs with structured systems, real mentorship, and collaborative growth.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <button onClick={() => onNavigate(Page.SignUp)} className="bg-[#0d3c68] dark:bg-brand-red text-white px-12 py-6 rounded-[1.5rem] font-black uppercase tracking-widest text-[11px] shadow-4xl hover:scale-105 transition-all">
                  Connect with Us
                </button>
                <button onClick={() => onNavigate(Page.Courses)} className="bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white px-12 py-6 rounded-[1.5rem] font-black uppercase tracking-widest text-[11px] hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
                  Explore Methodologies
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] bg-slate-200 dark:bg-slate-900 rounded-[4rem] overflow-hidden shadow-4xl relative group border-8 border-slate-50 dark:border-white/10">
                <div className="absolute inset-0 bg-brand-blue/10 dark:bg-brand-red/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                <img 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0" 
                  src="https://lh3.googleusercontent.com/d/1RhKC0FSMSeW32mTcLDDwRwaEzbvQBlxz" 
                  alt="Furute's modern training facility in Pune with entrepreneurs collaborating."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Profile Section */}
      <section className="section-padding bg-[#0d3c68] dark:bg-brand-red text-white overflow-hidden relative">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2 pointer-events-none"></div>
        <div className="container-fluid relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 space-y-10">
              <div>
                <h4 className="text-white/60 font-black uppercase tracking-[0.4em] text-[10px] mb-4">Meet the Visionary</h4>
                <h2 className="text-hero tracking-tighter">Ashay Shah</h2>
              </div>
              <div className="space-y-8 text-2xl text-white/90 leading-relaxed font-medium">
                <p>Ashay Shah is an International Business Coach, Strategic Architect, and the driving force behind Furute. With over 15 years of experience, he has trained more than 5,000 professionals and entrepreneurs, primarily shaping the business landscape in Pune.</p>
                <p>His unique methodology blends high-level strategic frameworks with deep human psychology, allowing founders in Pune and across India to master both their businesses and their minds.</p>
                <p className="font-bold italic border-l-4 border-white/30 pl-8 py-3 text-3xl leading-relaxed">"Excellence is not a destination; it's a structural realignment of how you perceive and execute your vision."</p>
              </div>
              <div className="flex flex-wrap gap-6 pt-6">
                <a 
                  href="https://aistudio.google.com/app/prompts?state=%7B%22ids%22:%5B%221ZAl529ggJo618MDzZehVC8LaOUl4IZZL%22%5D,%22action%22:%22open%22,%22userId%22:%22106395323009090290818%22,%22resourceKeys%22:%7B%7D%7D&usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#0d3c68] dark:text-brand-red px-12 py-6 rounded-[1.5rem] font-black uppercase tracking-widest text-[11px] flex items-center gap-4 shadow-4xl hover:scale-105 transition-all"
                >
                  <span className="material-symbols-outlined text-2xl leading-none">public</span> Visit ashayshah.com
                </a>
                <button onClick={() => onNavigate(Page.Mentoring)} className="bg-white/10 border border-white/20 text-white px-12 py-6 rounded-[1.5rem] font-black uppercase tracking-widest text-[11px] flex items-center gap-4 hover:bg-white/20 transition-all">
                  Request 1:1 Mentoring
                </button>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center relative">
              <div className="relative group">
                <div className="size-80 lg:size-[600px] rounded-[4rem] overflow-hidden shadow-4xl rotate-3 bg-slate-100 border-8 border-white/20 relative z-10 transition-transform duration-700 group-hover:rotate-0">
                  <img 
                    className="w-full h-full object-cover grayscale brightness-90 contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100" 
                    src="https://lh3.googleusercontent.com/d/1K_XgEDhEPbgaF_ZVLgYvMZ4tTSxCyQ8q" 
                    alt="Professional portrait of Ashay Shah, founder of Furute"
                  />
                </div>
                <div className="absolute -inset-10 bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-[#f8fafb] dark:bg-zinc-950/40">
        <div className="container-fluid">
          <div className="mb-24">
            <span className="text-brand-blue dark:text-brand-red font-black tracking-[0.3em] uppercase text-[10px]">Our Philosophy</span>
            <h2 className="text-display text-slate-900 dark:text-white mt-8">The Furute <br/>Framework.</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              { title: "Transformation", icon: "auto_mode", text: "We don't believe in incremental change. We facilitate structural transformations that redefine how you lead." },
              { title: "Strategic Depth", icon: "layers", text: "Every action is backed by a robust strategic blueprint designed for long-term scalability and market dominance." },
              { title: "Human Centric", icon: "diversity_3", text: "Business is built on relationships. We focus on the psychology of leadership and team dynamics." }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-[#111] p-10 rounded-[3.5rem] border border-slate-100 dark:border-white/5 shadow-2xl hover:shadow-4xl transition-all duration-500 group">
                <div className="size-20 rounded-3xl bg-brand-blue/5 dark:bg-brand-red/5 text-brand-blue dark:text-brand-red flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl">{item.icon}</span>
                </div>
                <h3 className="text-3xl font-black mb-6 dark:text-white tracking-tight">{item.title}</h3>
                <p className="text-slate-500 dark:text-gray-400 text-lg leading-relaxed font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Answer Block / FAQ Section for GEO */}
      <section className="section-padding container-fluid mb-20 md:mb-32 text-left">
        <div className="max-w-4xl mb-16 mx-auto text-center">
          <span className="text-brand-blue dark:text-brand-red font-black tracking-[0.3em] uppercase text-[10px]">F.A.Q</span>
          <h2 className="text-display mt-8 text-accent-blue dark:text-white">Expert Insights: <br/>The Furute Narrative.</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <Footer onNavigate={onNavigate} currentPage={Page.About} />
    </div>
  );
};

export default About;
