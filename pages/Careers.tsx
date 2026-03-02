
import React from 'react';
import { Page } from '../types';
import Footer from '../components/Footer';

const Careers: React.FC<{ onNavigate: (p: Page) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-white dark:bg-black text-slate-900 dark:text-white min-h-screen">
      <main className="max-w-[1280px] mx-auto px-6 py-24">
        <section className="text-center max-w-3xl mx-auto mb-24">
          <span className="inline-block py-1.5 px-4 rounded-full bg-brand-blue/10 dark:bg-brand-red/10 text-brand-blue dark:text-brand-red text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-brand-blue/20 dark:border-brand-red/20">Careers</span>
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-8 tracking-tighter">Build the Future of <br/><span className="text-brand-blue dark:text-brand-red">Entrepreneurship</span></h1>
          <p className="text-xl text-slate-500 dark:text-gray-400 font-medium leading-relaxed">
            Join a mission-driven team working to empower the next generation of business leaders in Pune and beyond.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-10 mb-32">
          {[
            { title: 'Innovation First', desc: 'We value creative problem solving and bold ideas that challenge the status quo.', icon: 'lightbulb' },
            { title: 'Growth Mindset', desc: 'Continuous learning is at our core. We invest heavily in our team\'s development.', icon: 'trending_up' },
            { title: 'Community Driven', desc: 'Our strength lies in our network. We build tools that foster authentic connections.', icon: 'groups' }
          ].map((v, i) => (
            <div key={i} className="p-10 bg-[#f8fafb] dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/10 group">
              <div className="size-16 rounded-2xl bg-brand-blue/10 dark:bg-brand-red/10 flex items-center justify-center text-brand-blue dark:text-brand-red mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl">{v.icon}</span>
              </div>
              <h3 className="text-2xl font-black mb-4">{v.title}</h3>
              <p className="text-slate-500 dark:text-gray-400 font-medium leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </section>

        <section className="space-y-10">
          <h2 className="text-3xl font-black tracking-tight">Open Positions</h2>
          <div className="space-y-4">
            {[
              { role: 'Program Manager', team: 'Education', type: 'Full-time' },
              { role: 'Senior Product Designer', team: 'Design', type: 'Remote' },
              { role: 'Community Lead', team: 'Marketing', type: 'Pune' }
            ].map((job, i) => (
              <div key={i} className="p-8 bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-xl transition-all group">
                <div>
                  <h4 className="text-xl font-black mb-1">{job.role}</h4>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{job.team} • {job.type}</p>
                </div>
                <button className="px-8 py-3 bg-[#0d3c68] dark:bg-brand-red text-white text-[11px] font-black uppercase tracking-widest rounded-xl hover:brightness-110 transition-all">Apply Now</button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer onNavigate={onNavigate} currentPage={Page.Careers} />
    </div>
  );
};

export default Careers;
