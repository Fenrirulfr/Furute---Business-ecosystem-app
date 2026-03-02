
import React from 'react';
import { Page } from '../types';

const ComingSoon: React.FC<{ onNavigate: (p: Page) => void }> = ({ onNavigate }) => {
  return (
    <div className="flex items-center justify-center p-8 bg-black min-h-screen">
      <div className="max-w-2xl w-full bg-[#0A0C14] rounded-xl shadow-2xl border border-white/5 overflow-hidden">
        <div className="p-12 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red/10 text-brand-red rounded-full mb-6">
            <span className="size-2 bg-brand-red rounded-full animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-wider">In Development</span>
          </div>
          
          <div className="mb-8 p-6 bg-white/5 rounded-2xl border-2 border-dashed border-white/10 relative group">
            <div className="size-24 flex items-center justify-center bg-white/5 rounded-xl shadow-md transform -rotate-3 transition-transform group-hover:rotate-0">
              <span className="material-symbols-outlined text-4xl text-primary">engineering</span>
            </div>
            <div className="absolute -bottom-2 -right-2 size-12 flex items-center justify-center bg-primary text-white rounded-lg shadow-lg transform rotate-6">
              <span className="material-symbols-outlined text-2xl">construction</span>
            </div>
          </div>

          <h2 className="text-white text-3xl font-extrabold tracking-tight mb-4">Something New is Coming to Furute Portal</h2>
          <p className="text-gray-400 text-lg max-w-md leading-relaxed mb-10">We're currently building our advanced member management module. This feature will allow you to manage subscriptions with greater precision.</p>

          <div className="w-full max-w-sm mb-10">
            <div className="flex justify-between items-center mb-2 text-xs font-semibold text-gray-500 uppercase">
              <span>Current Phase: Architecture</span>
              <span className="text-brand-red font-bold">65%</span>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-brand-red rounded-full transition-all duration-1000" style={{ width: '65%' }}></div>
            </div>
          </div>

          <div className="w-full max-w-md">
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <input className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:ring-2 focus:ring-brand-red outline-none" placeholder="Enter your email" />
              <button className="bg-brand-red text-white font-bold py-3 px-6 rounded-lg whitespace-nowrap hover:brightness-110 transition-all flex items-center gap-2">Notify Me <span className="material-symbols-outlined text-lg">mail</span></button>
            </div>
            <button onClick={() => onNavigate(Page.Dashboard)} className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1">
              <span className="material-symbols-outlined text-base">arrow_back</span> Return to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
