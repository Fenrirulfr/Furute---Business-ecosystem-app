import React from 'react';
import { Page } from '../types';
import Footer from '../components/Footer';
import FAQAccordion from '../components/FAQAccordion';

const Podcast: React.FC<{ onNavigate: (p: Page) => void }> = ({ onNavigate }) => {
  const episodes = [
    { id: 42, date: 'May 12, 2024', title: 'Building a SaaS Giant from a Tier-2 City', guest: 'Arjun Deshpande', duration: '45 min', img: 'https://media.istockphoto.com/id/1562983249/photo/portrait-of-happy-and-successful-businessman-indian-man-smiling-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=tfBv6taG9nTidFwENcrvEEvRHABN5gDAmg-K1G1Etnc=', guestAvatar: 'https://media.istockphoto.com/id/1562983249/photo/portrait-of-happy-and-successful-businessman-indian-man-smiling-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=tfBv6taG9nTidFwENcrvEEvRHABN5gDAmg-K1G1Etnc=' },
    { id: 41, date: 'May 05, 2024', title: 'The Future of Retail in Maharashtra', guest: 'Priya Sharma', duration: '38 min', img: 'https://img.freepik.com/free-photo/closeup-happy-pretty-indian-business-woman_1262-2258.jpg?semt=ais_hybrid&w=740&q=80', guestAvatar: 'https://img.freepik.com/free-photo/closeup-happy-pretty-indian-business-woman_1262-2258.jpg?semt=ais_hybrid&w=740&q=80' },
    { id: 40, date: 'Apr 28, 2024', title: 'Managing Burn: A Founder\'s Guide', guest: 'Sameer Kulkarni', duration: '52 min', img: 'https://static.vecteezy.com/system/resources/thumbnails/044/453/319/small/professional-indian-businessman-in-a-modern-office-working-intently-on-a-laptop-portraying-confidence-and-dedication-photo.jpg', guestAvatar: 'https://static.vecteezy.com/system/resources/thumbnails/044/453/319/small/professional-indian-businessman-in-a-modern-office-working-intently-on-a-laptop-portraying-confidence-and-dedication-photo.jpg' }
  ];

  const faqItems = [
    {
      question: "What is the best podcast for entrepreneurs in Pune?",
      answer: (
        <>
          The <button onClick={() => onNavigate(Page.Podcast)} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">Furute Podcast</button> is the leading audio series for business leaders in Pune. We feature deep-dive interviews with successful founders, VC insights, and growth frameworks specifically tailored for the Indian market.
        </>
      )
    },
    {
      question: "How can I listen to the Furute Podcast?",
      answer: (
        <>
          You can listen to all episodes directly on the Furute website or subscribe on major platforms like Spotify, Apple Podcasts, and Google Podcasts. We release new episodes every Tuesday, decoding the <button onClick={() => onNavigate(Page.Courses)} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">strategies of Pune's top founders</button>.
        </>
      )
    },
    {
      question: "Who are some of the guests on the Furute Podcast?",
      answer: (
        <>
          We've hosted visionary leaders like Arjun Deshpande, Priya Sharma, and Sameer Kulkarni. Our guests share their real-world experiences in <button onClick={() => onNavigate(Page.Mentoring)} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">scaling businesses</button>, managing burn, and navigating the VC landscape in India.
        </>
      )
    },
    {
      question: "Can I sponsor the Furute Podcast?",
      answer: (
        <>
          Yes, we offer premium sponsorship opportunities for brands looking to reach an audience of 50,000+ monthly listeners, including high-level decision-makers in Pune. You can <button onClick={() => onNavigate(Page.Contact)} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">download our media kit</button> or send a sponsor inquiry through our podcast page.
        </>
      )
    }
  ];

  return (
    <div className="bg-transparent text-accent-blue dark:text-gray-100 min-h-screen transition-colors duration-500">
      <main className="max-w-[1280px] mx-auto px-6 py-16 md:py-24">
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-video shadow-elevated-light dark:shadow-dark-elevated group border border-white/50 dark:border-white/5 bg-white/40 dark:bg-black/40 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0052FF]/95 via-transparent dark:from-brand-red/90 to-transparent z-10" />
                <img 
                   src="https://lh3.googleusercontent.com/d/1XS-fmzr6NQjRwpFmAxyazRN1K2MKEuXC" 
                   className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Professional podcast studio setup with microphones and audio equipment" 
                />
                <div className="absolute bottom-0 left-0 p-8 z-20 w-full text-left">
                  <h2 className="text-white text-4xl md:text-6xl font-black mb-8 leading-[1.05] tracking-tighter">Navigating Pune's VC <br/>Landscape</h2>
                  <div className="flex items-center gap-8">
                    <button className="flex items-center gap-4 bg-white text-[#0052FF] dark:text-brand-red h-16 px-10 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:scale-105 active:scale-95 transition-all shadow-4xl">
                      <span className="material-symbols-outlined !text-2xl fill-1">play_arrow</span> Listen Now
                    </button>
                    <span className="text-white/80 font-black uppercase tracking-[0.2em] text-[10px]">54 min • Strategy</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center text-left">
              <h1 className="text-5xl lg:text-7xl font-black leading-[0.95] mb-10 tracking-tighter text-accent-blue dark:text-white">
                Furute Podcast <br/><span className="text-[#0052FF] dark:text-brand-red underline decoration-[12px] underline-offset-[16px] decoration-blue-500/20 dark:decoration-brand-red/20">Conversations on Business & Leadership</span>
              </h1>
              <p className="text-xl text-[#637688] dark:text-gray-400 mb-12 leading-relaxed font-semibold">
                Listen to leadership and entrepreneurship insights from founders and experts.
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="h-16 px-12 bg-[#0052FF] dark:bg-brand-red text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:brightness-110 transition-all shadow-vibrant">Explore Archive</button>
                <button className="h-16 px-12 bg-white/60 dark:bg-[#0a0a0a] border border-blue-100 dark:border-white/10 text-accent-blue dark:text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-white dark:hover:bg-brand-red/10 transition-all shadow-soft">Sponsor Us</button>
              </div>
              <div className="mt-12 flex items-center gap-6 opacity-50 dark:opacity-30 grayscale brightness-0 dark:brightness-200">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Listen on:</p>
                <span className="material-symbols-outlined text-3xl">podcasts</span>
                <span className="material-symbols-outlined text-3xl">styler</span>
                <span className="material-symbols-outlined text-3xl">radio</span>
              </div>
            </div>
          </div>
        </section>

        {/* Archive Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-10">
          <h3 className="text-3xl font-black tracking-tighter text-accent-blue dark:text-white">Episode Archive</h3>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide no-scrollbar pb-2">
            {['All', 'Startups', 'Finance', 'Marketing', 'Culture'].map((tag, i) => (
              <button key={i} className={`whitespace-nowrap px-8 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest transition-all ${i === 0 ? 'bg-[#0052FF] dark:bg-brand-red text-white shadow-vibrant' : 'bg-white/80 dark:bg-[#0a0a0a] text-slate-500 dark:text-slate-400 hover:text-[#0052FF] dark:hover:text-brand-red border border-blue-50 dark:border-white/5 shadow-soft'}`}>
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Episode Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {episodes.map(ep => (
            <div key={ep.id} className="group bg-white/90 dark:bg-[#0a0a0a] rounded-[3rem] overflow-hidden border border-blue-50 dark:border-white/5 hover:border-[#0052FF]/30 dark:hover:border-brand-red/30 transition-all duration-500 shadow-elevated-light dark:shadow-dark-elevated text-left backdrop-blur-sm">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={ep.img} className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" alt={`Podcast guest ${ep.guest}`} />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all" />
                <div className="absolute top-8 right-8 bg-[#0052FF] dark:bg-brand-red p-3 rounded-[1.5rem] shadow-4xl group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-white leading-none text-2xl fill-1">play_arrow</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] font-black uppercase text-[#0052FF] dark:text-brand-red bg-blue-500/10 dark:bg-brand-red/10 px-3 py-1 rounded-full tracking-[0.2em]">EP {ep.id}</span>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-[0.2em]">{ep.date}</span>
                </div>
                <h4 className="text-2xl font-black mb-8 leading-tight group-hover:text-[#0052FF] dark:group-hover:text-brand-red transition-colors text-accent-blue dark:text-white">{ep.title}</h4>
                <div className="flex items-center justify-between border-t border-blue-50 dark:border-white/5 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-2xl bg-slate-100 dark:bg-zinc-900 bg-cover bg-center border border-white/50 dark:border-white/10 shadow-sm" style={{ backgroundImage: `url(${ep.guestAvatar})` }} role="img" aria-label={`Avatar of ${ep.guest}`} />
                    <span className="text-[11px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">{ep.guest}</span>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 dark:text-slate-600">{ep.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Sponsorship */}
        <section className="bg-gradient-to-br from-[#0052FF] to-blue-900 dark:from-brand-red dark:to-rose-900 rounded-[4rem] p-12 md:p-16 text-white relative overflow-hidden shadow-vibrant dark:shadow-dark-elevated mb-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-20 -mt-20 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-red/10 rounded-full -ml-40 -mb-40 blur-[120px]" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center lg:text-left space-y-10">
              <h2 className="text-5xl md:text-7xl font-black mb-6 leading-[0.95] tracking-tighter">Partner with the <br/>Voice of Pune Business</h2>
              <p className="text-xl text-white/80 font-semibold leading-relaxed">
                Put your brand in the ears of 50,000+ monthly listeners, including founders, CXOs, and decision-makers across the region.
              </p>
              <div className="grid grid-cols-2 gap-12">
                <div><p className="text-6xl font-black mb-2 tracking-tighter">50K+</p><p className="text-[11px] font-black opacity-50 uppercase tracking-[0.3em]">Monthly Listeners</p></div>
                <div><p className="text-6xl font-black mb-2 tracking-tighter">120+</p><p className="text-[11px] font-black opacity-50 uppercase tracking-[0.3em]">Global Partners</p></div>
              </div>
              <button className="h-16 px-12 bg-white text-[#0052FF] dark:text-brand-red rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-4xl hover:scale-105 transition-all">Download Media Kit</button>
            </div>
            <div className="w-full lg:w-[480px] bg-black/20 backdrop-blur-2xl rounded-[3rem] p-12 border border-white/10 shadow-4xl text-left">
              <h3 className="text-3xl font-black mb-10 tracking-tight">Sponsor Inquiry</h3>
              <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                <input className="w-full bg-white/10 border border-white/10 rounded-2xl h-16 px-8 text-sm outline-none focus:ring-4 focus:ring-white/20 transition-all font-bold text-white placeholder:text-white/40" placeholder="Full Name" />
                <input className="w-full bg-white/10 border border-white/10 rounded-2xl h-16 px-8 text-sm outline-none focus:ring-4 focus:ring-white/20 transition-all font-bold text-white placeholder:text-white/40" placeholder="Business Email" />
                <textarea className="w-full bg-white/10 border border-white/10 rounded-2xl p-8 text-sm outline-none focus:ring-4 focus:ring-white/20 transition-all resize-none font-bold text-white placeholder:text-white/40" rows={4} placeholder="Tell us about your brand" />
                <button className="h-16 w-full bg-white text-[#0052FF] dark:text-brand-red rounded-2xl font-black uppercase tracking-widest text-[11px] hover:brightness-110 active:scale-95 transition-all">Send Request</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      {/* AI Answer Block / FAQ Section for GEO */}
      <section className="section-padding container-fluid mb-20 md:mb-32 text-left">
        <div className="max-w-4xl mb-16 mx-auto text-center">
          <span className="text-brand-blue dark:text-brand-red font-black tracking-[0.3em] uppercase text-[10px]">F.A.Q</span>
          <h2 className="text-display mt-8 text-accent-blue dark:text-white">Podcast Intelligence: <br/>Audio Insights.</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <Footer onNavigate={onNavigate} currentPage={Page.Podcast} />
      
      {/* Audio Player Space */}
      <div className="h-20 md:h-32" /> 
    </div>
  );
};

export default Podcast;
