
import React from 'react';
import { Page } from '../types';
import Footer from '../components/Footer';

const PressKit: React.FC<{ onNavigate: (p: Page) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-white dark:bg-black text-slate-900 dark:text-white min-h-screen">
      <main className="max-w-[1280px] mx-auto px-6 py-24">
        <section className="mb-24">
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">Press & Brand Assets</h1>
          <p className="text-xl text-slate-500 dark:text-gray-400 max-w-2xl font-medium leading-relaxed">
            Download our official brand assets, including logos, photography, and company facts for media use.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-12 mb-32">
          <div className="p-12 bg-[#f8fafb] dark:bg-white/5 rounded-[3rem] border border-slate-100 dark:border-white/10 flex flex-col justify-between h-[400px]">
            <div>
              <h2 className="text-3xl font-black mb-6">Logo Suite</h2>
              <p className="text-slate-500 dark:text-gray-400 font-medium">Includes high-resolution PNG, SVG, and EPS versions of the Furute logo in various color ways.</p>
            </div>
            <button className="w-full h-16 bg-[#0d3c68] dark:bg-brand-red text-white rounded-2xl font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-3 shadow-xl">
              <span className="material-symbols-outlined">download</span> Download Logo Pack (.zip)
            </button>
          </div>
          <div className="p-12 bg-[#f8fafb] dark:bg-white/5 rounded-[3rem] border border-slate-100 dark:border-white/10 flex flex-col justify-between h-[400px]">
            <div>
              <h2 className="text-3xl font-black mb-6">Media Assets</h2>
              <p className="text-slate-500 dark:text-gray-400 font-medium">High-quality photography of our campus, events, and leadership team for editorial use.</p>
            </div>
            <button className="w-full h-16 bg-[#0d3c68] dark:bg-brand-red text-white rounded-2xl font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-3 shadow-xl">
              <span className="material-symbols-outlined">download</span> Download Media Kit (.zip)
            </button>
          </div>
        </div>

        <section className="bg-slate-950 dark:bg-zinc-900/50 rounded-[4rem] p-16 md:p-24 text-white relative overflow-hidden">
           <div className="relative z-10 max-w-2xl">
             <h2 className="text-4xl font-black mb-10 tracking-tight">Quick Facts</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
               <div><p className="text-4xl font-black mb-2 text-brand-red">2024</p><p className="text-[10px] font-black opacity-50 uppercase tracking-widest">Founded</p></div>
               <div><p className="text-4xl font-black mb-2 text-brand-red">Pune, IN</p><p className="text-[10px] font-black opacity-50 uppercase tracking-widest">Headquarters</p></div>
               <div><p className="text-4xl font-black mb-2 text-brand-red">5,000+</p><p className="text-[10px] font-black opacity-50 uppercase tracking-widest">Members</p></div>
               <div><p className="text-4xl font-black mb-2 text-brand-red">Elite</p><p className="text-[10px] font-black opacity-50 uppercase tracking-widest">Platform Tier</p></div>
             </div>
           </div>
        </section>
      </main>
      <Footer onNavigate={onNavigate} currentPage={Page.PressKit} />
    </div>
  );
};

export default PressKit;
