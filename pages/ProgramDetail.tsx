import React, { useState } from 'react';
import { Page } from '../types';
import Footer from '../components/Footer';
import VideoModal from '../components/VideoModal';

interface ProgramDetailProps {
  programId: string | null;
  onNavigate: (p: Page) => void;
}

const ProgramDetail: React.FC<ProgramDetailProps> = ({ programId, onNavigate }) => {
  const [selectedVideo, setSelectedVideo] = useState<{id: string, title: string} | null>(null);

  // Mock data for a specific program (e.g., 7-Day Reset)
  const program = {
    title: "Business Insights Pune",
    subtitle: "A High-Impact Strategic Transformation for Established Founders.",
    description: "Recalibrate your strategy, optimize your operations, and reconnect with your vision. This isn't just a course; it's a structural audit of your entire business model led by elite mentors.",
    img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlights: ["1:1 Strategic Audit", "Operations Framework", "Scalability Roadmap", "Post-Program Support"],
    curriculum: [
      { day: "Day 01", title: "The Vision Audit", content: "Deep dive into your 3-year goals vs. current execution. Identifying the gap." },
      { day: "Day 02", title: "Operational Excellence", content: "Mapping your value chain and identifying bottlenecks in your current delivery." },
      { day: "Day 03", title: "Revenue Architecture", content: "Analyzing pricing models, LTV, and CAC to build a sustainable growth engine." },
      { day: "Day 04", title: "Talent & Culture", content: "Building a leadership layer that allows you to work 'on' the business, not 'in' it." },
      { day: "Day 05", title: "The Scale Blueprint", content: "Standardizing processes for exponential growth without quality degradation." },
      { day: "Day 06", title: "Risk & Resilience", content: "Fortifying your business against market shifts and identifying unique moats." },
      { day: "Day 07", title: "The Execution Plan", content: "Finalizing your 90-day immediate action plan and long-term KPI dashboard." }
    ],
    mentors: [
      { name: "Ashay Shah", role: "Strategy Lead", bio: "Founder of Furute, specializing in business architecture and scaling systems.", avatar: "https://picsum.photos/seed/ashay-shah/400/400" },
      { name: "Meera Iyer", role: "Growth Architect", bio: "Ex-Unicorn CXO with a record of scaling 3 ventures past $50M ARR.", avatar: "https://picsum.photos/seed/meera-iyer/400/400" }
    ],
    pricing: "₹1,25,000",
    videoTestimonials: [
      { id: 'scvC8W8Yf9c', title: 'Operational Reset' },
      { id: 'q_p87U0N6yQ', title: 'Strategic Growth' }
    ]
  };

  return (
    <div className="bg-[#F8FAFC] dark:bg-black text-accent-blue dark:text-white min-h-screen text-left transition-colors duration-300">
      <VideoModal 
        isOpen={!!selectedVideo} 
        onClose={() => setSelectedVideo(null)} 
        videoId={selectedVideo?.id || null} 
        videoTitle={selectedVideo?.title}
      />

      {/* Hero */}
      <section className="pt-20 pb-20 md:pb-28 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 bg-white dark:bg-black rounded-b-[2rem] md:rounded-b-[4rem] shadow-soft border-b border-blue-50 dark:border-white/5">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-blue-50 dark:bg-brand-red/10 text-brand-blue dark:text-brand-red text-[11px] font-black uppercase tracking-[0.3em] w-fit border border-blue-100/50 dark:border-brand-red/20 shadow-soft">
              <span className="size-2.5 rounded-full bg-brand-red animate-pulse"></span> Enrollment Open • Next Cohort: Nov 15
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter text-accent-blue dark:text-white">
              {program.title}.
            </h1>
            <p className="text-xl sm:text-2xl text-[#637688] dark:text-gray-400 font-semibold leading-relaxed max-w-xl">
              {program.subtitle}
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-6 pt-4">
               {program.highlights.map(h => (
                 <div key={h} className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-brand-blue dark:text-brand-red fill-1 text-3xl">verified</span>
                    <span className="text-sm font-black uppercase tracking-widest text-slate-400">{h}</span>
                 </div>
               ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 pt-6">
               <button onClick={() => onNavigate(Page.SignUp)} className="h-20 px-10 sm:px-16 bg-accent-blue dark:bg-brand-red text-white rounded-[1.5rem] font-black uppercase tracking-widest text-[11px] shadow-4xl shadow-accent-blue/20 dark:shadow-brand-red/30 active:scale-95 transition-all">Enroll for {program.pricing}</button>
               <button className="h-20 px-10 sm:px-16 border-4 border-blue-50 dark:border-white/10 text-accent-blue dark:text-white rounded-[1.5rem] font-black uppercase tracking-widest text-[11px] hover:bg-slate-50 dark:hover:bg-white/5 shadow-soft transition-all">Download Brochure</button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl md:rounded-[4rem] overflow-hidden shadow-vibrant border-8 sm:border-[16px] border-white dark:border-white/5">
               <img src={program.img} className="w-full h-full object-cover grayscale-[10%]" alt="Reset" />
               <div className="absolute inset-0 bg-accent-blue/20 dark:bg-brand-red/5 mix-blend-multiply transition-opacity hover:opacity-0 duration-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 md:py-32 bg-[#F8FAFC] dark:bg-zinc-950/50 rounded-2xl md:rounded-[4rem] mx-4 sm:mx-6 lg:mx-12 mb-20 md:mb-32 border border-blue-50 dark:border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
             <span className="text-brand-blue dark:text-brand-red font-black tracking-[0.4em] uppercase text-[10px] mb-8 block">Structured Mastery</span>
             <h2 className="text-4xl sm:text-5xl md:text-8xl font-black text-accent-blue dark:text-white tracking-tighter mb-10 leading-none">The Curriculum Blueprint.</h2>
             <p className="text-xl sm:text-2xl text-[#637688] dark:text-gray-400 font-semibold leading-relaxed">Seven days of rigorous, high-level analysis and execution strategy.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {program.curriculum.map((item, i) => (
               <div key={i} className="p-8 rounded-3xl md:rounded-[3rem] bg-white dark:bg-black/40 border border-blue-50 dark:border-white/5 hover:border-brand-blue/30 transition-all group shadow-soft hover:shadow-vibrant">
                  <span className="text-[11px] font-black text-brand-blue dark:text-brand-red uppercase tracking-widest mb-8 block">{item.day}</span>
                  <h3 className="text-3xl font-black mb-6 text-accent-blue dark:text-white group-hover:text-brand-blue transition-colors leading-tight tracking-tight">{item.title}</h3>
                  <p className="text-base text-[#637688] dark:text-gray-400 font-semibold leading-relaxed">{item.content}</p>
               </div>
             ))}
             <div className="p-8 rounded-3xl md:rounded-[3rem] bg-accent-blue dark:bg-brand-red text-white flex flex-col justify-between shadow-4xl lg:scale-105 relative overflow-hidden">
                <div className="absolute top-0 right-0 size-40 bg-white/10 rounded-full blur-3xl"></div>
                <h3 className="text-3xl sm:text-4xl font-black leading-[0.9] tracking-tighter mb-10">Ready for the structural <br/>transformation?</h3>
                <button className="w-full h-18 bg-white text-accent-blue dark:bg-white dark:text-brand-red rounded-2xl font-black uppercase tracking-widest text-[11px] hover:brightness-110 active:scale-95 transition-all shadow-2xl">Book Your Slot Now</button>
             </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 md:py-32 max-w-[1440px] mx-auto px-4 sm:px-12 text-center mb-20 md:mb-32">
         <div className="mb-16 sm:mb-24">
            <span className="text-brand-blue dark:text-brand-red font-black tracking-[0.4em] uppercase text-[10px] mb-8 block">Success Stories</span>
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-black text-accent-blue dark:text-white tracking-tighter leading-none">What Alumni Say.</h2>
         </div>
         <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {program.videoTestimonials.map((video, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedVideo({ id: video.id, title: video.title })}
                className="aspect-video w-full rounded-3xl md:rounded-[4rem] overflow-hidden shadow-vibrant dark:shadow-2xl border-8 sm:border-[12px] border-white dark:border-white/10 relative group cursor-pointer bg-white dark:bg-zinc-900"
              >
                <img 
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  alt={video.title}
                />
                <div className="absolute inset-0 bg-accent-blue/20 dark:bg-black/50 group-hover:bg-accent-blue/10 dark:group-hover:bg-black/20 transition-all flex items-center justify-center">
                   <div className="size-20 sm:size-24 rounded-full bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/50 dark:border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-blue dark:group-hover:bg-brand-red transition-all shadow-2xl">
                      <span className="material-symbols-outlined text-white text-5xl fill-1 leading-none">play_arrow</span>
                   </div>
                </div>
              </div>
            ))}
         </div>
      </section>

      {/* Mentors */}
      <section className="py-20 md:py-32 bg-accent-blue dark:bg-zinc-900 rounded-2xl md:rounded-[4rem] mx-4 sm:mx-6 lg:mx-12 mb-20 md:mb-32 text-white overflow-hidden relative shadow-4xl">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[140px] -mr-96 -mt-96"></div>
         <div className="max-w-[1440px] mx-auto px-6 sm:px-12 relative z-10 text-left">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 md:mb-24 gap-12">
               <h2 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-none">Led by <br/>Practitioners.</h2>
               <p className="max-w-md text-xl md:text-2xl text-white/70 font-semibold leading-relaxed">Experience true expertise from those who have built, scaled, and dominated industries.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
               {program.mentors.map((m, i) => (
                 <div key={i} className="flex flex-col md:flex-row gap-12 p-8 lg:p-12 rounded-3xl md:rounded-[4rem] bg-white/5 backdrop-blur-md border border-white/10 shadow-4xl hover:-translate-y-3 transition-all group">
                    <div className="size-40 rounded-[3rem] bg-slate-200 overflow-hidden shrink-0 border-[8px] border-white/10 shadow-2xl transition-transform group-hover:scale-105">
                       <img src={m.avatar} className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700" alt={m.name} />
                    </div>
                    <div className="space-y-6">
                       <h3 className="text-4xl font-black leading-none tracking-tight">{m.name}</h3>
                       <p className="text-[11px] font-black text-brand-red uppercase tracking-[0.4em] mb-4">{m.role}</p>
                       <p className="text-white/60 text-lg font-semibold leading-relaxed">{m.bio}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      <Footer onNavigate={onNavigate} shareTitle={program.title} />
    </div>
  );
};

export default ProgramDetail;
