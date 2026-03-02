import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import Footer from '../components/Footer';
import YouTubePlayer from '../components/YouTubePlayer';
import FAQAccordion from '../components/FAQAccordion';

interface HomeProps {
  onNavigate: (page: Page, id?: string) => void;
}

const CountUp: React.FC<{ end: number, duration: number }> = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <>{count.toLocaleString()}</>;
};

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const stats = [
    { label: 'LEADERS Trained', value: 8264, icon: 'trending_up' },
    { label: 'Counselling', value: 19852, icon: 'forum' },
    { label: 'Lives Touched', value: 11852, icon: 'public' },
    { label: 'Days MAD (Making a Difference)', value: 5537, icon: 'auto_awesome' }
  ];

  const videoTestimonials = [
    { id: 'i-Qe4F17hKc', list: 'PLvleyTHoI4V5vQP_4TKGCjyqGhSi37EJT', title: 'Soham Oswal on Exponential Growth', author: 'Soham Oswal' },
    { id: 'Dp65MGhze3I', list: 'PLvleyTHoI4V5vQP_4TKGCjyqGhSi37EJT', title: 'Kalpesh Kavediya on Business Transformation', author: 'Kalpesh Kavediya' },
    { id: '2ofM34EwKJo', list: 'PLvleyTHoI4V5vQP_4TKGCjyqGhSi37EJT', title: 'Manoj Shah Shares His Success Story', author: 'Manoj Shah' }
  ];

  const textTestimonials = [
    {
      quote: "After joining Insights I personally realize these four things that really changed my life: One of the most important characteristic features is Emotional Maturity. Every problem has solution and the solution is ON the way. Consistency for the Goals which are set. Failure is the key to success.",
      author: "Lucky Surana",
      role: "Industrialist & Educationist",
      avatar: "https://furute.in/wp-content/uploads/2017/04/Lucky-Surana.jpg"
    },
    {
      quote: "After doing Business Insights I started with a small business of Mobile Repairing Shop. Here I implemented the formula by Ashay Sir. Now my turnover has increased 25% within a year. My new office (400 sq ft) is a reflection of my success.",
      author: "Avant Parmar",
      role: "Mobile Shop Owner",
      avatar: "https://furute.in/wp-content/uploads/2017/04/Avant-Parmar.jpg"
    },
    {
      quote: "Insights taught me how to handle the adverse situations & making it in my own favor. I work on the agenda of goal setting that gradually moves towards success. Time management theory of Ashay sir made my personal life more balanced.",
      author: "Manish Kalantri",
      role: "Corporate Vendor / Supplier",
      avatar: "https://furute.in/wp-content/uploads/2017/04/Manish-Kalantri.jpg"
    },
    {
      quote: "I achieved success in my business because I applied the process how to relate with my clients & workers to make them understand, that I learnt from Ashay Sir. Thus the communication builds up & my business has developed more.",
      author: "Ankit Sakhariya",
      role: "Sakhariya Gold Jewelers",
      avatar: "https://furute.in/wp-content/uploads/2017/04/Ankit-Sakhariya.jpg"
    },
    {
      quote: "I have only one business before joining Insights Program. Ashay sir has shown me the direction regarding my strength. By using the lesson of “caps” and “circle of circumference” I have become able to start three other businesses.",
      author: "Viraj Parmar",
      role: "Construction Services & Software",
      avatar: "https://furute.in/wp-content/uploads/2017/04/Viraj-Parmar.jpg"
    },
    {
      quote: "Ashay sir has changed my perspective of life whether it would be professional or personal. I have become more optimistic about the future. On the basis of self confidence & positive attitude, I am boosting my business as much as possible.",
      author: "Vikram Jain",
      role: "Director at KONIFER",
      avatar: "https://furute.in/wp-content/uploads/2017/04/Vikram-Jain.jpg"
    }
  ];

  const faqItems = [
    {
      question: "What is Furute?",
      answer: "Furute is a business ecosystem platform that supports entrepreneurs through mentorship, marketplace connections, leadership training, PR services, and corporate retreats. It is designed to provide structured systems for long-term business growth."
    },
    {
      question: "How can I access Furute's resources?",
      answer: (
        <>
          You can explore our <button onClick={() => onNavigate(Page.Courses)} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">Online Courses</button>, join the <button onClick={() => onNavigate(Page.Marketplace)} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">Consulting Marketplace</button>, apply for <button onClick={() => onNavigate(Page.Mentoring)} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">1:1 Mentoring</button>, or listen to the <button onClick={() => onNavigate(Page.Podcast)} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">Business Podcast</button>.
        </>
      )
    },
    {
      question: "Does Furute offer PR services?",
      answer: (
        <>
          Yes, Furute offers <button onClick={() => onNavigate(Page.PRServices)} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">PR & Media Amplification</button> services to help businesses build authority and visibility through strategic media placement and narrative crafting.
        </>
      )
    },
    {
      question: "What are Furute Corporate Retreats?",
      answer: (
        <>
          Furute organizes <button onClick={() => onNavigate(Page.Retreats)} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">Corporate Retreats</button> focused on Relationship Tourism, designed to foster leadership clarity, team cohesion, and high-level networking in immersive environments.
        </>
      )
    }
  ];

  return (
    <div className="bg-transparent transition-colors duration-500">
      {/* Hero Section */}
      <section className="pt-[var(--spacing-section-sm)] md:pt-[var(--spacing-section-md)] lg:pt-[var(--spacing-section-lg)] pb-8 md:pb-12 lg:pb-16 container-fluid hero-gradient relative overflow-hidden text-left bg-transparent dark:bg-black">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1 flex flex-col gap-10 relative z-10">
            <div className="flex flex-col gap-8">
              <span className="text-brand-blue dark:text-brand-red font-black uppercase tracking-[0.4em] text-[10px] bg-brand-blue/10 dark:bg-brand-red/10 px-5 py-2 rounded-full border border-brand-blue/10 dark:border-brand-red/20 w-fit">Pune's Leading Business Training Organization</span>
              <h1 className="text-hero text-accent-blue dark:text-white">
                Furute – A Business Ecosystem for <br/>
                <span className="text-brand-blue dark:text-brand-red">Modern Entrepreneurs</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-[#637688] dark:text-gray-400 max-w-2xl leading-relaxed font-semibold">
                Furute is a structured business ecosystem designed to help entrepreneurs build clarity, leadership capability, and long-term growth systems.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-6 mt-8">
              <button 
                onClick={() => onNavigate(Page.SignUp)}
                className="h-14 px-6 sm:h-16 sm:px-8 bg-accent-blue dark:bg-brand-red text-white rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-vibrant dark:shadow-brand-red/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-3"
              >
                Start Your Journey <span className="material-symbols-outlined !text-xl">trending_up</span>
              </button>
              <button onClick={() => onNavigate(Page.About)} className="h-14 px-6 sm:h-16 sm:px-8 border-2 border-accent-blue/10 dark:border-white/10 text-accent-blue dark:text-white rounded-2xl font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-2 hover:bg-white/50 dark:hover:bg-brand-red/10 transition-all backdrop-blur-sm shadow-soft">
                The Founder's Vision
              </button>
            </div>
            
            <div className="flex flex-col gap-4 pt-8 border-t border-slate-200/50 dark:border-white/5 w-full sm:w-fit">
               <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-relaxed">Core Areas:</p>
               <div className="flex flex-wrap gap-3">
                  {[
                    { label: 'Online Courses', page: Page.Courses },
                    { label: 'Consulting Marketplace', page: Page.Marketplace },
                    { label: '1:1 Mentoring', page: Page.Mentoring },
                    { label: 'Business Podcast', page: Page.Podcast },
                    { label: 'PR & Media', page: Page.PRServices },
                    { label: 'Corporate Retreats', page: Page.Retreats }
                  ].map((area) => (
                    <button 
                      key={area.label} 
                      onClick={() => onNavigate(area.page)}
                      className="text-[10px] font-bold bg-white dark:bg-white/10 px-3 py-1 rounded-lg text-accent-blue dark:text-white border border-slate-100 dark:border-white/5 hover:bg-brand-blue hover:text-white dark:hover:bg-brand-red transition-all cursor-pointer"
                    >
                      {area.label}
                    </button>
                  ))}
               </div>
            </div>
          </div>
          
          <div className="flex-1 w-full relative z-0">
            <div className="relative group">
              <div className="absolute -inset-2 sm:-inset-6 bg-gradient-to-tr from-brand-blue/20 dark:from-brand-red/30 to-transparent rounded-3xl sm:rounded-[4rem] blur-3xl opacity-40"></div>
              <div className="relative aspect-card-portrait rounded-2xl sm:rounded-[3rem] overflow-hidden border-8 border-white dark:border-white/5 shadow-4xl group bg-white/50 dark:bg-zinc-900 backdrop-blur-md">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKWcpu12rFPKeED0x2U9HALcFBG8ddJXO4y-2KCnLcz4CHkCb5_tnGlmlsbSoMfZKxD87pLa__blWVreVWyhXcdwid9Al_uoI1Ne0XTeyb4GnQIhOrGBKe8dt2NU0EIgNkw4-DsT2n9d-mjMBoU9_SGpuqXdQJU7VpmUfEjMhntY_ISbaoEPxMrDqBGLDfEYrxSM9JTOxCe1QwrNQc5N80UAPFttm_ei-6QzJbHjv9lIWfsexI9JYFmQ6qlYBjMQ37lxuc-qD8DqY" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  alt="Founder Ashay Shah leading a business strategy session at Furute, Pune"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent-blue/95 via-accent-blue/20 dark:from-black/95 dark:via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-10">
                   <h3 className="text-white text-3xl sm:text-4xl font-black mb-3 tracking-tight">The 7-Day Business Reset</h3>
                   <p className="text-white/80 font-medium text-base sm:text-xl mb-8 leading-relaxed">The ultimate strategic overhaul for Pune's established founders.</p>
                   <button onClick={() => onNavigate(Page.ProgramDetail, '7-day-reset')} className="w-fit bg-white text-accent-blue dark:text-brand-red px-6 sm:px-8 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-brand-blue hover:text-white dark:hover:bg-brand-red dark:hover:text-white transition-all shadow-2xl">Discover More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="pt-0 pb-[var(--spacing-section-sm)] md:pb-[var(--spacing-section-md)] lg:pb-[var(--spacing-section-lg)] container-fluid bg-transparent">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="p-8 sm:p-10 rounded-3xl sm:rounded-[3rem] bg-white/95 dark:bg-[#0a0a0a] border border-blue-50 dark:border-white/5 flex flex-col items-center text-center group shadow-elevated-light dark:shadow-dark-elevated transition-all hover:translate-y-[-8px] card-shadow">
              <div className="size-16 rounded-2xl bg-blue-50 dark:bg-brand-red/10 text-brand-blue dark:text-brand-red flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">{stat.icon}</span>
              </div>
              <h2 className="text-h2 text-accent-blue dark:text-white mb-3">
                <CountUp end={stat.value} duration={2500} />
              </h2>
              <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="section-padding card-shadow rounded-3xl md:rounded-[5rem] mx-4 sm:mx-6 lg:mx-12 mb-12 md:mb-20 overflow-hidden">
        <div className="container-fluid">
          <div className="text-center mb-16 sm:mb-20">
            <span className="text-brand-blue dark:text-brand-red font-black tracking-[0.2em] uppercase text-[10px]">Social Proof</span>
            <h2 className="text-display mt-8 text-accent-blue dark:text-white">Experience the <br/>Furute Transformation.</h2>
            <p className="text-[#637688] dark:text-gray-400 mt-6 text-lg md:text-xl font-semibold max-w-2xl mx-auto">Hear directly from Pune's entrepreneurs who have scaled their businesses through our specialized methodologies.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {videoTestimonials.map((video) => (
              <div key={video.id} className="flex flex-col gap-8 group">
                <YouTubePlayer videoId={video.id} listId={video.list} title={video.title} />
                <div className="px-2 sm:px-6 text-left">
                  <h4 className="text-xl sm:text-2xl font-black text-accent-blue dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-red transition-colors leading-tight">{video.title}</h4>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-2">Verified Success • {video.author}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <button onClick={() => onNavigate(Page.Testimonials, '#video')} className="h-16 px-12 bg-white/90 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-accent-blue dark:text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-brand-blue hover:text-white dark:hover:bg-brand-red transition-all shadow-soft hover:shadow-vibrant backdrop-blur-sm shrink-0">Watch All Video Testimonials</button>
          </div>
        </div>
      </section>

      {/* Text Testimonials Section */}
      <section className="section-padding bg-transparent dark:bg-black container-fluid mb-12 md:mb-20 text-left">
        <div className="mb-16 sm:mb-20">
          <span className="text-brand-blue dark:text-brand-red font-black tracking-[0.3em] uppercase text-[10px]">Voices of Achievement</span>
          <h2 className="text-display mt-8 text-accent-blue dark:text-white">Real Results. <br/>Real Founders.</h2>
          <p className="text-[#637688] dark:text-gray-400 mt-8 text-xl sm:text-2xl font-semibold max-w-3xl">Our alumni are the backbone of Pune's rising business ecosystem. Here is what they have to say about the Furute experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {textTestimonials.map((t, i) => (
            <div key={i} className="p-8 md:p-10 rounded-3xl md:rounded-[3.5rem] bg-white/95 dark:bg-white/5 border border-blue-50 dark:border-white/10 flex flex-col justify-between hover:shadow-vibrant transition-all group relative card-shadow">
              {/* Bookmark Ribbon */}
              <div className="absolute -top-2 right-8 w-7 h-11 z-30 drop-shadow-lg group-hover:translate-y-1 transition-transform duration-500">
                <div 
                  className="w-full h-full bg-brand-blue dark:bg-brand-red relative"
                  style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 50% 80%, 0% 100%)' }}
                >
                  {/* Fold shadow */}
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-black/20"></div>
                </div>
              </div>

              <div className="absolute inset-0 overflow-hidden rounded-3xl md:rounded-[3.5rem] pointer-events-none">
                <div className="absolute -top-6 -right-6 text-[180px] font-black text-blue-50 dark:text-white/5 italic leading-none opacity-60 group-hover:opacity-100 transition-opacity">
                  "
                </div>
              </div>

              <div className="relative z-10">
                <p className="text-lg md:text-xl text-accent-blue dark:text-gray-300 font-bold leading-relaxed mb-12">
                  {t.quote}
                </p>
              </div>
              <div className="flex items-center gap-6 relative z-10">
                <div className="size-16 rounded-2xl bg-cover bg-center border-4 border-white/50 dark:border-slate-800 shadow-xl" style={{ backgroundImage: `url(${t.avatar})` }} role="img" aria-label={`Avatar of ${t.author}`}></div>
                <div>
                  <h4 className="text-lg font-black text-accent-blue dark:text-white leading-none mb-2">{t.author}</h4>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
            <button onClick={() => onNavigate(Page.Testimonials)} className="h-16 px-12 bg-white/90 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-accent-blue dark:text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-brand-blue hover:text-white dark:hover:bg-brand-red transition-all shadow-soft hover:shadow-vibrant backdrop-blur-sm shrink-0">View All Testimonials</button>
          </div>
      </section>

      {/* Services Portfolio */}
      <section className="section-padding container-fluid text-left">
        <div className="max-w-4xl mb-16 sm:mb-24">
          <span className="text-brand-blue dark:text-brand-red font-black tracking-[0.3em] uppercase text-[10px]">What We Do</span>
          <h2 className="text-display mt-8 text-accent-blue dark:text-white">A New Dimension of <br/>Business Growth.</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {[
            { icon: 'corporate_fare', title: 'Org Training', desc: "Customized leadership and team performance frameworks for Pune's rising corporations." },
            { icon: 'auto_awesome', title: 'Branding', desc: "Strategic positioning and identity design to turn your local business into a national brand." },
            { icon: 'psychology_alt', title: 'Life Coaching', desc: "Personalized mentoring with Ashay Shah to align your professional success with personal fulfillment." },
            { icon: 'target', title: 'Goal Setting', desc: "Systematic workshops to define, track, and achieve exponential business milestones." }
          ].map((item, i) => (
            <div key={i} className="p-8 md:p-10 rounded-3xl md:rounded-[3rem] bg-white/95 dark:bg-white/5 border border-blue-50 dark:border-white/10 hover:border-brand-blue/30 dark:hover:border-brand-red/30 transition-all group hover:shadow-elevated-light relative overflow-hidden card-shadow">
              <div className="absolute -right-8 -top-8 size-40 bg-brand-blue/5 rounded-full blur-3xl group-hover:bg-brand-blue/10 transition-all"></div>
              <div className="size-20 rounded-3xl bg-blue-50 dark:bg-slate-900 flex items-center justify-center text-brand-blue dark:text-brand-red mb-12 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-soft relative z-10 border border-white dark:border-white/10">
                <span className="material-symbols-outlined text-4xl">{item.icon}</span>
              </div>
              <h3 className="text-3xl font-black mb-6 text-accent-blue dark:text-white tracking-tight relative z-10">{item.title}</h3>
              <p className="text-lg text-[#637688] dark:text-gray-400 leading-relaxed font-semibold relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Flagship Programs */}
      <section className="section-padding container-fluid bg-transparent">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 sm:mb-24 gap-10">
          <div className="max-w-3xl text-left">
            <h2 className="text-display text-accent-blue dark:text-white">Transformative <br/>Learning Experiences.</h2>
          </div>
          <button onClick={() => onNavigate(Page.Courses)} className="h-16 px-12 bg-white/90 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-accent-blue dark:text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-brand-blue hover:text-white dark:hover:bg-brand-red transition-all shadow-soft hover:shadow-vibrant backdrop-blur-sm shrink-0">Full Catalog</button>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:gap-12">
          <div onClick={() => onNavigate(Page.ProgramDetail, 'business-insights')} className="min-h-[400px] relative rounded-3xl md:rounded-[4rem] overflow-hidden group cursor-pointer border-4 border-white dark:border-transparent hover:border-brand-blue dark:hover:border-brand-red transition-all shadow-vibrant">
             <img src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 grayscale-[15%] group-hover:grayscale-0" alt="Entrepreneurs in a Business Insights Pune leadership session" referrerPolicy="no-referrer" loading="lazy" />
             <div className="absolute inset-0 bg-gradient-to-t from-accent-blue/95 via-accent-blue/30 dark:from-black/95 dark:via-black/30 to-transparent flex flex-col justify-end p-8 sm:p-12 text-left">
                <span className="bg-brand-blue text-white text-[10px] font-black px-5 py-2 rounded-full w-fit mb-8 uppercase tracking-[0.2em]">Leadership</span>
                <h3 className="text-h3 text-white">Business Insights Pune</h3>
                <p className="text-white/70 text-lg sm:text-xl font-medium mt-4 max-w-xl leading-relaxed">A flagship leadership development program designed for the modern Indian entrepreneur.</p>
             </div>
          </div>
          
          <div onClick={() => onNavigate(Page.Mentoring)} className="min-h-[400px] relative rounded-3xl md:rounded-[4rem] overflow-hidden group cursor-pointer border-4 border-white dark:border-transparent hover:border-brand-blue dark:hover:border-brand-red transition-all shadow-vibrant">
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzFKDJcw3X57s6lRJjPlmF3HwTanKtGWlpDx1SGZItpqT6KmuDZ-Qa2Dn0Rx-l4lqWZL6ONkeDCwx0DjU2p15zPWJGhkls75fRDiCZ_8nTJYFXuNyUYulhkPCsnIflisAoYnvRpmckDor03y86ysyFW-cGgKBhdK7SvoN6piMTAJqmrY_f7aZ92hUT0b4o2Ro3LzMT2oV9LHenXmYukA6l499XZP5lDGIu37PsD3rXoy-hTmwcBEmSzMK3gkbUsne7gk0YebwFSGs" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 grayscale-[15%] group-hover:grayscale-0" alt="Close-up of Ashay Shah in a deep mentoring conversation" loading="lazy" />
             <div className="absolute inset-0 bg-gradient-to-t from-accent-blue/95 via-accent-blue/30 dark:from-black/95 dark:via-black/30 to-transparent flex flex-col justify-end p-8 sm:p-12 text-left">
                <span className="bg-brand-red text-white text-[10px] font-black px-5 py-2 rounded-full w-fit mb-8 uppercase tracking-[0.2em]">1:1 Coaching</span>
                <h3 className="text-h3 text-white">Personalized Mentoring</h3>
                <p className="text-white/70 text-lg sm:text-xl font-medium mt-4 max-w-xl leading-relaxed">1:1 Strategic coaching with Ashay Shah to unlock hidden potential and achieve massive scale.</p>
             </div>
          </div>

          <div onClick={() => onNavigate(Page.ProgramDetail, 'branding-services')} className="min-h-[400px] relative rounded-3xl md:rounded-[4rem] overflow-hidden group cursor-pointer border-4 border-white dark:border-transparent hover:border-brand-blue dark:hover:border-brand-red transition-all shadow-vibrant">
             <img src="https://plus.unsplash.com/premium_photo-1661770132071-026114fffb61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJyYW5kaW5nfGVufDB8MHwwfHx8MA%3D%3D" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 grayscale-[15%] group-hover:grayscale-0" alt="Team collaborating on an elite brand strategy whiteboard" loading="lazy" />
             <div className="absolute inset-0 bg-gradient-to-t from-accent-blue/95 via-accent-blue/30 dark:from-black/95 dark:via-black/30 to-transparent flex flex-col justify-end p-8 sm:p-12 text-left">
                <h3 className="text-h3 text-white">Elite Brand Strategy</h3>
                <p className="text-white/70 text-lg sm:text-xl font-medium mt-4 max-w-xl leading-relaxed">Comprehensive brand positioning and visual identity for Pune's established enterprises.</p>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding px-4 sm:px-6">
        <div className="container-fluid">
          <div className="bg-accent-blue dark:bg-brand-red rounded-3xl md:rounded-[4rem] text-center p-8 sm:p-12 relative overflow-hidden shadow-vibrant dark:shadow-brand-red/30">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 rounded-full -mr-96 -mt-96 blur-[140px]"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/10 rounded-full -ml-60 -mb-60 blur-[120px]"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
              <div className="text-center lg:text-left max-w-3xl">
                <h2 className="text-display text-white mb-6">Ready to Bridge <br/>Your Gap?</h2>
                <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed">
                  Join the ecosystem that's redefining business excellence in Pune. Your journey to mastery starts here.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center shrink-0 w-full lg:w-auto">
                <button 
                  onClick={() => onNavigate(Page.SignUp)}
                  className="h-16 px-8 bg-white text-accent-blue dark:text-brand-red rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-4xl w-full sm:w-auto"
                >
                  Apply to Furute
                </button>
                <button 
                  onClick={() => onNavigate(Page.Contact)}
                  className="h-16 px-8 border-2 border-white/20 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all w-full sm:w-auto"
                >
                  Consult an Advisor
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Answer Block / FAQ Section for GEO */}
      <section className="section-padding container-fluid mb-12 md:mb-20 text-left">
        <div className="max-w-4xl mb-16 mx-auto text-center">
          <span className="text-brand-blue dark:text-brand-red font-black tracking-[0.3em] uppercase text-[10px]">F.A.Q</span>
          <h2 className="text-display mt-8 text-accent-blue dark:text-white">Business Intelligence: <br/>Ecosystem Insights.</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <Footer onNavigate={onNavigate} currentPage={Page.Home} />
    </div>
  );
};

export default Home;
