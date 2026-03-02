
import React from 'react';
import { Page } from '../types';
import Footer from '../components/Footer';

const PrivacyPolicy: React.FC<{ onNavigate: (p: Page) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-white dark:bg-black text-slate-900 dark:text-white min-h-screen">
      <main className="max-w-[1000px] mx-auto px-6 py-24">
        <section className="mb-24">
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">Privacy Policy</h1>
          <p className="text-sm font-black text-slate-400 uppercase tracking-widest">Last Updated: October 2024</p>
        </section>

        <article className="prose dark:prose-invert max-w-none space-y-12 text-slate-600 dark:text-gray-400 font-medium leading-loose text-lg">
          <section>
            <h2 className="text-3xl font-black dark:text-white text-slate-900 mb-6 tracking-tight">1. Introduction</h2>
            <p>Welcome to Furute. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.</p>
          </section>

          <section>
            <h2 className="text-3xl font-black dark:text-white text-slate-900 mb-6 tracking-tight">2. The Data We Collect</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-8 mt-6 space-y-4">
              <li>Identity Data includes first name, last name, username or similar identifier.</li>
              <li>Contact Data includes email address and telephone numbers.</li>
              <li>Technical Data includes internet protocol (IP) address, browser type and version.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-black dark:text-white text-slate-900 mb-6 tracking-tight">3. How We Use Your Data</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul className="list-disc pl-8 mt-6 space-y-4">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
          </section>
        </article>
      </main>
      <Footer onNavigate={onNavigate} currentPage={Page.Privacy} />
    </div>
  );
};

export default PrivacyPolicy;
