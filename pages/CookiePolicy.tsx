
import React from 'react';
import { Page } from '../types';
import Footer from '../components/Footer';

const CookiePolicy: React.FC<{ onNavigate: (p: Page) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-white dark:bg-black text-slate-900 dark:text-white min-h-screen">
      <main className="max-w-[1000px] mx-auto px-6 py-24">
        <section className="mb-24">
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">Cookie Policy</h1>
          <p className="text-sm font-black text-slate-400 uppercase tracking-widest">Last Updated: October 2024</p>
        </section>

        <article className="prose dark:prose-invert max-w-none space-y-12 text-slate-600 dark:text-gray-400 font-medium leading-loose text-lg">
          <section>
            <h2 className="text-3xl font-black dark:text-white text-slate-900 mb-6 tracking-tight">What are cookies?</h2>
            <p>Cookies are small text files used to store small pieces of information. They are stored on your device when the website is loaded on your browser. These cookies help us make the website function properly and provide a better user experience.</p>
          </section>

          <section>
            <h2 className="text-3xl font-black dark:text-white text-slate-900 mb-6 tracking-tight">How we use cookies</h2>
            <p>As most of the online services, our website uses first-party and third-party cookies for several purposes. First-party cookies are mostly necessary for the website to function the right way. Third-party cookies are used for understanding how the website performs and how you interact with it.</p>
          </section>

          <section>
            <h2 className="text-3xl font-black dark:text-white text-slate-900 mb-6 tracking-tight">Managing preferences</h2>
            <p>You can manage your cookies preferences by clicking on the "Settings" button or equivalent in your browser and enabling or disabling the cookie categories on the popup according to your preferences.</p>
          </section>
        </article>
      </main>
      <Footer onNavigate={onNavigate} currentPage={Page.Cookie} />
    </div>
  );
};

export default CookiePolicy;
