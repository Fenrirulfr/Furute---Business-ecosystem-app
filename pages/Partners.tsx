
import React from 'react';
import { Page } from '../types';
import Footer from '../components/Footer';

const Partners: React.FC<{ onNavigate: (p: Page) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-white dark:bg-black text-slate-900 dark:text-white min-h-screen">
      <main className="max-w-[1280px] mx-auto px-6 py-24">
        <section className="mb-24 flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">Partner with <br/><span className="text-brand-blue dark:text-brand-red">Excellence</span></h1>
            <p className="text-xl text-slate-500 dark:text-gray-400 font-medium leading-relaxed">
              We collaborate with world-class organizations to provide our members with the best tools, services, and opportunities for growth.
            </p>
            <button className="h-14 px-10 bg-[#0d3c68] dark:bg-brand-red text-white rounded-xl font-black uppercase tracking-widest text-[11px] shadow-2xl">Become a Partner</button>
          </div>
          <div className="flex-1 grid grid-cols-3 gap-6 opacity-30 grayscale contrast-150">
             {[1,2,3,4,5,6,7,8,9].map(i => (
               <div key={i} className="aspect-square bg-slate-200 dark:bg-white/10 rounded-2xl flex items-center justify-center">
                 <span className="material-symbols-outlined text-4xl">corporate_fare</span>
               </div>
             ))}
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-10 mb-32">
          <div className="p-12 bg-[#f8fafb] dark:bg-white/5 rounded-[3rem] border border-slate-100 dark:border-white/10">
             <h3 className="text-2xl font-black mb-6">Service Partners</h3>
             <p className="text-slate-500 dark:text-gray-400 mb-10 leading-relaxed font-medium">Provide exclusive discounts or priority access to your B2B services for our community of founders.</p>
             <button className="text-brand-blue dark:text-brand-red font-black uppercase tracking-widest text-[11px] flex items-center gap-3">Learn More <span className="material-symbols-outlined !text-base">arrow_forward</span></button>
          </div>
          <div className="p-12 bg-[#f8fafb] dark:bg-white/5 rounded-[3rem] border border-slate-100 dark:border-white/10">
             <h3 className="text-2xl font-black mb-6">Content Partners</h3>
             <p className="text-slate-500 dark:text-gray-400 mb-10 leading-relaxed font-medium">Co-create high-value masterclasses or educational resources for Pune's aspiring entrepreneurs.</p>
             <button className="text-brand-blue dark:text-brand-red font-black uppercase tracking-widest text-[11px] flex items-center gap-3">Learn More <span className="material-symbols-outlined !text-base">arrow_forward</span></button>
          </div>
        </div>
      </main>
      <Footer onNavigate={onNavigate} currentPage={Page.Partners} />
    </div>
  );
};

export default Partners;
