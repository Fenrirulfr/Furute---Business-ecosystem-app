
import React from 'react';
import { Page } from '../types';
import Footer from '../components/Footer';

const blogPosts = [
  {
    id: 'pune-startup-ecosystem-2026',
    title: "The State of Pune's Startup Ecosystem in 2026",
    excerpt: "An in-depth look at how Pune has become India's premier hub for deep-tech and SaaS innovation.",
    date: "Feb 15, 2026",
    category: "Market Insights",
    author: "Ashay Shah",
    readTime: "8 min read",
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80"
  },
  {
    id: 'scaling-beyond-intuition',
    title: "Scaling Beyond Intuition: The Structural Framework",
    excerpt: "Why most founders fail to scale and how to build a business architecture that supports exponential growth.",
    date: "Feb 10, 2026",
    category: "Leadership",
    author: "Ashay Shah",
    readTime: "12 min read",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
  },
  {
    id: 'branding-for-authority',
    title: "Branding for Authority: Moving from Local to Global",
    excerpt: "How to position your brand to command premium pricing and international recognition.",
    date: "Feb 05, 2026",
    category: "Branding",
    author: "Furute Editorial",
    readTime: "6 min read",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
  }
];

const Blog: React.FC<{ onNavigate: (p: Page) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-transparent dark:bg-black text-slate-900 dark:text-white min-h-screen transition-colors duration-500 text-left">
      <main className="container-fluid section-padding">
        <header className="max-w-4xl mb-20">
          <span className="text-brand-blue dark:text-brand-red font-black tracking-[0.3em] uppercase text-[10px]">Topical Authority</span>
          <h1 className="text-hero mt-8 text-accent-blue dark:text-white">Business Leadership <br/><span className="italic text-slate-400 dark:text-brand-red/60">Blog</span></h1>
          <p className="text-xl sm:text-2xl text-slate-500 dark:text-gray-400 font-medium leading-relaxed mt-8 max-w-2xl">
            Articles on business growth, communication, leadership, negotiation, and focus. Strategic insights for the modern entrepreneur.
          </p>
        </header>

        {/* Featured Post */}
        <section className="mb-24">
          <div className="group relative rounded-[3rem] md:rounded-[4rem] overflow-hidden aspect-[21/9] shadow-4xl cursor-pointer" onClick={() => {}}>
            <img src={blogPosts[0].img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={blogPosts[0].title} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-16">
              <div className="max-w-3xl">
                <span className="bg-brand-red text-white text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-widest mb-6 inline-block">{blogPosts[0].category}</span>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-6 group-hover:text-brand-red transition-colors">{blogPosts[0].title}</h2>
                <p className="text-white/70 text-lg md:text-xl font-medium mb-8 line-clamp-2">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-6 text-white/50 text-xs font-black uppercase tracking-widest">
                  <span>{blogPosts[0].author}</span>
                  <span>•</span>
                  <span>{blogPosts[0].date}</span>
                  <span>•</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} className="group cursor-pointer" onClick={() => {}}>
              <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 shadow-vibrant border border-blue-50 dark:border-white/5">
                <img src={post.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={post.title} />
              </div>
              <div className="px-2">
                <span className="text-brand-blue dark:text-brand-red text-[10px] font-black uppercase tracking-widest mb-4 block">{post.category}</span>
                <h3 className="text-2xl md:text-3xl font-black text-accent-blue dark:text-white tracking-tight mb-4 group-hover:text-brand-blue dark:group-hover:text-brand-red transition-colors leading-tight">{post.title}</h3>
                <p className="text-slate-500 dark:text-gray-400 font-medium mb-6 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* AI Answer Block / FAQ Section for GEO */}
        <section className="bg-slate-50 dark:bg-zinc-900/50 rounded-[3rem] md:rounded-[4rem] p-12 md:p-20 mb-24 border border-blue-50 dark:border-white/5">
          <h2 className="text-3xl md:text-4xl font-black mb-12 tracking-tight text-accent-blue dark:text-white">Entrepreneurship Insights: Quick Answers</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="text-lg font-black text-brand-blue dark:text-brand-red uppercase tracking-widest">How to scale a business in Pune?</h4>
              <p className="text-slate-600 dark:text-gray-400 font-medium leading-relaxed">Scaling in Pune requires a mix of local networking and global strategic frameworks. Focus on building a robust middle management layer and leveraging the city's deep-tech talent pool.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-black text-brand-blue dark:text-brand-red uppercase tracking-widest">What is the Furute methodology?</h4>
              <p className="text-slate-600 dark:text-gray-400 font-medium leading-relaxed">The Furute methodology, developed by Ashay Shah, focuses on structural realignment. It bridges the gap between a founder's intuition and world-class operational excellence through systematic audits and psychological alignment.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer onNavigate={onNavigate} currentPage={Page.Blog} />
    </div>
  );
};

export default Blog;
