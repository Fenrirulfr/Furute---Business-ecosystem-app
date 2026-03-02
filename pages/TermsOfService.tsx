
import React from 'react';
import { Page } from '../types';
import Footer from '../components/Footer';

const TermsOfService: React.FC<{ onNavigate: (p: Page) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-white dark:bg-black text-slate-900 dark:text-white min-h-screen">
      <main className="max-w-[1000px] mx-auto px-6 py-24">
        <section className="mb-24">
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">Terms of Service</h1>
          <p className="text-sm font-black text-slate-400 uppercase tracking-widest">Effective Date: October 2024</p>
        </section>

        <article className="prose dark:prose-invert max-w-none space-y-12 text-slate-600 dark:text-gray-400 font-medium leading-loose text-lg">
          <section>
            <h2 className="text-3xl font-black dark:text-white text-slate-900 mb-6 tracking-tight">1. Agreement to Terms</h2>
            <p>By accessing or using the Furute platform, you agree to be bound by these terms of service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
          </section>

          <section>
            <h2 className="text-3xl font-black dark:text-white text-slate-900 mb-6 tracking-tight">2. Use License</h2>
            <p>Permission is granted to temporarily access the materials on Furute's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
          </section>

          <section>
            <h2 className="text-3xl font-black dark:text-white text-slate-900 mb-6 tracking-tight">3. User Accounts</h2>
            <p>When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.</p>
          </section>
        </article>
      </main>
      <Footer onNavigate={onNavigate} currentPage={Page.Terms} />
    </div>
  );
};

export default TermsOfService;
