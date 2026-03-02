
import React from 'react';
import { Page, User } from '../types';
import Footer from '../components/Footer';

interface DashboardProps {
  user: User;
  onNavigate: (page: Page) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onNavigate }) => {
  const rivera = { ...user, name: 'Alex Johnson' };

  return (
    <div className="bg-transparent dark:bg-black min-h-screen transition-colors duration-500 flex flex-col">
      <div className="container-fluid section-padding flex-grow">
        {/* Navigation Breadcrumbs System */}
        <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8 sm:mb-10 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <button onClick={() => onNavigate(Page.Home)} className="hover:text-primary transition-colors">Furute Hub</button>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-accent-blue dark:text-white">Portal Dashboard</span>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-slate-300 dark:text-slate-700">Overview</span>
        </nav>

        <header className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-12 text-left">
          <div className="max-w-2xl">
            <h2 className="text-accent-blue dark:text-white">Welcome back, {rivera.name.split(' ')[0]}! 👋</h2>
            <p className="text-[#637688] dark:text-gray-400 text-base sm:text-lg mt-2 font-semibold">You're making great progress. You have 2 bookings scheduled for this week.</p>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-white/80 dark:bg-zinc-900/50 border border-slate-200 dark:border-white/10 rounded-xl text-sm font-black shadow-soft hover:shadow-md transition-all backdrop-blur-sm">
              <span className="material-symbols-outlined text-lg">calendar_month</span> View Calendar
            </button>
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-accent-blue dark:bg-brand-red text-white rounded-xl text-sm font-black shadow-vibrant dark:shadow-brand-red/20 active:scale-95 transition-all">
              <span className="material-symbols-outlined text-lg">add_circle</span> New Booking
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {/* Progress */}
          <div className="card-responsive bg-white/95 dark:bg-[#0a0a0a] border border-blue-100/50 dark:border-white/5 flex flex-col justify-between group transition-all backdrop-blur-md shadow-elevated-light dark:shadow-dark-elevated">
            <div className="flex justify-between items-start">
              <div className="p-3 rounded-xl bg-blue-50 dark:bg-brand-red/10 text-brand-blue dark:text-brand-red"><span className="material-symbols-outlined fill-1">verified</span></div>
              <span className="text-[10px] font-bold text-brand-blue dark:text-brand-red bg-blue-100/50 dark:bg-brand-red/10 px-3 py-1 rounded-full uppercase tracking-tighter">
                +12% THIS MONTH
              </span>
            </div>
            <div className="mt-8 text-left">
              <p className="text-slate-400 text-sm font-black uppercase tracking-widest mb-2">Courses Completed</p>
              <div className="flex items-end gap-2">
                <h3 className="text-3xl sm:text-4xl font-black text-accent-blue dark:text-white">85%</h3>
                <p className="text-xs text-slate-400 mb-1.5 font-bold">12 of 14 modules</p>
              </div>
              <div className="mt-4 w-full bg-slate-200/50 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
                <div className="bg-brand-blue dark:bg-brand-red h-full transition-all duration-1000" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>

          {/* Bookings */}
          <div className="card-responsive bg-white/95 dark:bg-[#0a0a0a] border border-blue-100/50 dark:border-white/5 flex flex-col justify-between transition-all backdrop-blur-md shadow-elevated-light dark:shadow-dark-elevated">
            <div className="flex justify-between items-start">
              <div className="p-3 rounded-xl bg-blue-50 dark:bg-brand-red/10 text-brand-blue dark:text-brand-red"><span className="material-symbols-outlined fill-1">schedule</span></div>
              <span className="text-[10px] font-bold text-brand-blue dark:text-brand-red bg-blue-100/50 dark:bg-brand-red/10 px-3 py-1 rounded-full uppercase tracking-tighter">Next: Tomorrow</span>
            </div>
            <div className="mt-8 text-left">
              <p className="text-slate-400 text-sm font-black uppercase tracking-widest mb-2">Upcoming Bookings</p>
              <h3 className="text-3xl sm:text-4xl font-black text-accent-blue dark:text-white">02</h3>
              <p className="text-xs text-slate-500 dark:text-gray-400 mt-2 font-bold tracking-wide">Strategy Sync & Design Review</p>
            </div>
          </div>

          {/* Credits */}
          <div className="card-responsive bg-gradient-to-br from-accent-blue to-blue-800 dark:from-brand-red dark:to-rose-900 shadow-4xl text-white relative overflow-hidden hover:scale-[1.02] transition-transform">
            <span className="material-symbols-outlined absolute -right-6 -bottom-6 !text-[140px] opacity-10">workspace_premium</span>
            <div className="flex justify-between items-start relative z-10">
              <div className="p-3 rounded-xl bg-white/20"><span className="material-symbols-outlined fill-1">military_tech</span></div>
              <span className="text-[10px] font-black bg-white/20 px-3 py-1 rounded-full uppercase tracking-widest">Diamond Tier</span>
            </div>
            <div className="mt-8 relative z-10 text-left">
              <p className="text-white/70 text-sm font-bold uppercase tracking-widest mb-2">Platform Credits</p>
              <h3 className="text-3xl sm:text-4xl font-black">1,240</h3>
              <button className="mt-4 text-[10px] font-bold uppercase border-b-2 border-white/40 pb-0.5 hover:border-white transition-all">Redeem Rewards</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10 text-left">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black flex items-center gap-3 text-accent-blue dark:text-white tracking-tight"><span className="material-symbols-outlined text-brand-blue dark:text-brand-red">school</span> Continue Learning</h3>
              <button onClick={() => onNavigate(Page.Courses)} className="text-brand-blue dark:text-brand-red font-black text-sm hover:underline">View All Courses</button>
            </div>
            
            <div className="card-responsive bg-white/95 dark:bg-[#0a0a0a] border border-blue-100/50 dark:border-white/5 overflow-hidden shadow-elevated-light dark:shadow-dark-elevated flex flex-col md:flex-row group transition-all backdrop-blur-md">
              <div className="md:w-[40%] overflow-hidden relative min-h-[200px] md:min-h-0">
                <div className="absolute inset-0 bg-accent-blue/5 dark:bg-brand-red/5 group-hover:opacity-0 transition-opacity"></div>
                <img src="https://picsum.photos/seed/dashboard-learning/800/600" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Scaling" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6 sm:p-8 md:p-10 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100/50 dark:bg-brand-red/20 text-brand-blue dark:text-brand-red text-[10px] font-black px-3 py-1 rounded uppercase tracking-widest">Operations</span>
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">• 45 mins left</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black leading-tight text-accent-blue dark:text-white">Mastering Business Operations & Scalability</h4>
                  <p className="text-[#637688] dark:text-gray-400 text-sm mt-3 leading-relaxed font-semibold">Learn the frameworks used by top Fortune 500 companies to automate internal processes and drive explosive growth.</p>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                   <div className="flex -space-x-3">
                      {[1, 2, 3].map(i => <div key={i} className="size-9 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200" />)}
                      <div className="size-9 rounded-full border-2 border-white dark:border-slate-900 bg-blue-50 dark:bg-gray-800 flex items-center justify-center text-[10px] font-black text-brand-blue dark:text-brand-red">+24</div>
                   </div>
                   <button className="h-12 w-full sm:w-auto bg-accent-blue dark:bg-brand-red text-white px-8 rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-vibrant">Resume Lesson <span className="material-symbols-outlined !text-sm leading-none">play_arrow</span></button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3"><span className="material-symbols-outlined text-brand-blue dark:text-brand-red">trending_up</span> <h3 className="text-xl font-black text-accent-blue dark:text-white tracking-tight">Community Trending</h3></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: 'Hot Discussion', title: 'Marketing Strategies for 2024', desc: "I've found that short-form video is still king for B2B lead gen...", meta: '142 comments', icon: 'trending_up', color: 'blue' },
                { label: 'Resource Share', title: 'New CRM Template (Free)', desc: "Just finished a Notion setup for small sales teams. Check it out!", meta: '89 comments', icon: 'lightbulb', color: 'indigo' }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white/95 dark:bg-[#0a0a0a] border border-blue-100/50 dark:border-white/5 rounded-[2rem] hover:border-brand-blue/40 dark:hover:border-brand-red/40 transition-all cursor-pointer group shadow-elevated-light dark:shadow-dark-elevated backdrop-blur-sm">
                  <div className="flex gap-5 mb-6">
                    <div className={`size-12 rounded-xl bg-${item.color}-50 dark:bg-gray-800 flex items-center justify-center text-${item.color}-600 dark:text-${item.color}-400`}>
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div>
                      <p className={`text-[10px] font-black uppercase text-${item.color}-600 dark:text-${item.color}-400 tracking-widest`}>{item.label}</p>
                      <h5 className="font-black text-base text-accent-blue dark:text-white">{item.title}</h5>
                    </div>
                  </div>
                  <p className="text-sm text-[#637688] dark:text-gray-400 italic mb-6 leading-relaxed font-semibold">"{item.desc}"</p>
                  <div className="pt-6 border-t border-blue-100/50 dark:border-white/5 flex justify-between items-center">
                    <span className="text-xs text-slate-400 font-black uppercase tracking-widest">{item.meta}</span>
                    <span className="material-symbols-outlined text-slate-300 group-hover:text-brand-blue dark:group-hover:text-brand-red transition-all group-hover:translate-x-1">arrow_forward</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 text-left">
            <div className="flex items-center gap-3"><span className="material-symbols-outlined text-brand-blue dark:text-brand-red">event_note</span> <h3 className="text-xl font-black text-accent-blue dark:text-white tracking-tight">Upcoming Agenda</h3></div>
            <div className="card-responsive bg-white/95 dark:bg-[#0a0a0a] border border-blue-100/50 dark:border-white/5 shadow-elevated-light dark:shadow-dark-elevated backdrop-blur-md">
              <div className="space-y-8 sm:space-y-10">
                {[
                  { m: 'May', d: '24', time: '10:00 AM • 45 MINS', title: 'Strategy Sync: Q3 Launch', person: 'Sarah Chen & Mark Thompson', btn: 'Join Zoom' },
                  { m: 'May', d: '25', time: '02:30 PM • 60 MINS', title: 'Creative Review: Branding', person: 'Office Hub • Floor 4', btn: 'Reschedule' }
                ].map((ev, i) => (
                  <div key={i} className="flex gap-4 sm:gap-6 group">
                    <div className="flex flex-col items-center">
                      <div className="size-12 sm:size-14 rounded-2xl bg-blue-50/50 dark:bg-gray-800 flex flex-col items-center justify-center group-hover:bg-blue-100/50 dark:group-hover:bg-brand-red/10 group-hover:text-brand-blue dark:group-hover:text-brand-red transition-all border border-blue-100/50 dark:border-white/10 group-hover:border-blue-200 dark:group-hover:border-brand-red/20 shadow-soft">
                         <span className="text-[10px] font-black uppercase text-slate-400">{ev.m}</span>
                         <span className="text-lg sm:text-xl font-black leading-none text-accent-blue dark:text-white">{ev.d}</span>
                      </div>
                      {i === 0 && <div className="w-[1px] flex-1 bg-blue-100/50 dark:bg-gray-800 my-4" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-black text-brand-blue dark:text-brand-red mb-1 tracking-widest">{ev.time}</p>
                      <h5 className="font-black text-sm text-accent-blue dark:text-white leading-tight">{ev.title}</h5>
                      <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">{ev.person}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                         <button className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${ev.btn === 'Join Zoom' ? 'bg-accent-blue dark:bg-brand-red text-white shadow-vibrant' : 'border border-blue-100 dark:border-gray-800 text-slate-500 hover:border-brand-blue dark:hover:border-brand-red'}`}>{ev.btn}</button>
                         {ev.btn === 'Join Zoom' && <button className="px-4 py-2 border border-blue-100 dark:border-gray-800 rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-400 hover:border-brand-blue dark:hover:border-brand-red">Details</button>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="h-14 w-full mt-8 sm:mt-10 border-2 border-dashed border-blue-200 dark:border-gray-800 rounded-2xl text-slate-400 text-[11px] font-black uppercase tracking-[0.2em] hover:border-brand-blue/40 dark:hover:border-brand-red/40 hover:text-brand-blue dark:hover:text-brand-red transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined !text-sm">add</span>
                Schedule Personal Slot
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default Dashboard;
