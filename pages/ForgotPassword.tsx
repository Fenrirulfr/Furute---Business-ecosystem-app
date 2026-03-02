
import React from 'react';
import { Page } from '../types';

const ForgotPassword: React.FC<{ onNavigate: (p: Page) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-[#020617] min-h-screen flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-[440px] bg-[#0a1128] border border-slate-800 rounded-xl p-8 lg:p-10 shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-white text-3xl font-bold tracking-tight mb-3">Forgot Password</h1>
          <p className="text-slate-400 leading-relaxed">Enter the email address associated with your Furute account and we'll send you a link to reset your password.</p>
        </div>
        <form className="space-y-6">
          <div className="flex flex-col gap-2 text-left">
            <label className="text-slate-200 text-sm font-semibold uppercase tracking-widest">Email Address</label>
            <input className="w-full px-4 py-3.5 rounded-lg border border-slate-700 bg-slate-800/50 text-white focus:ring-2 focus:ring-primary/20 outline-none" placeholder="name@company.com" type="email" />
          </div>
          <button className="w-full bg-primary text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/20 hover:brightness-110 transition-all flex items-center justify-center gap-2 group">
            Reset Password <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </form>
        <div className="mt-8 pt-6 border-t border-slate-800 text-center">
          <button onClick={() => onNavigate(Page.Login)} className="inline-flex items-center gap-2 text-primary font-semibold hover:underline decoration-2 underline-offset-4">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span> Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
