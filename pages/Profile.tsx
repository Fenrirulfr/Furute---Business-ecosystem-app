
import React from 'react';
import { User, Page } from '../types';

interface ProfileProps {
  user: User;
  onNavigate: (p: Page) => void;
}

const Profile: React.FC<ProfileProps> = ({ user, onNavigate }) => {
  const rivera = { ...user, name: 'Alex Rivera' };

  return (
    <div className="bg-transparent dark:bg-black text-accent-blue dark:text-white min-h-screen transition-colors duration-500">
      <main className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-16 py-16 flex flex-col lg:flex-row gap-12 lg:gap-20 text-left">
        {/* Profile Sidebar Nav */}
        <aside className="w-full lg:w-80 shrink-0 flex flex-col gap-12">
          <div className="flex items-center gap-6 px-4 bg-white/95 dark:bg-[#0a0a0a] p-8 rounded-[2.5rem] shadow-elevated-light dark:shadow-dark-elevated card-shadow border border-blue-50 dark:border-white/5">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-20 ring-8 ring-blue-50/50 dark:ring-gray-800 shadow-xl" style={{ backgroundImage: `url(${rivera.avatar})` }} />
            <div className="flex flex-col">
              <h1 className="text-2xl font-black leading-tight tracking-tight text-accent-blue dark:text-white">{rivera.name}</h1>
              <p className="text-brand-blue dark:text-brand-red text-[10px] font-black uppercase tracking-[0.3em] mt-1">Elite Portal Member</p>
            </div>
          </div>
          <nav className="flex flex-col gap-2">
            {[
              { id: 'Personal Details', icon: 'person', active: true },
              { id: 'Security & Login', icon: 'security' },
              { id: 'Email Preferences', icon: 'mail' },
              { id: 'Billing & Plan', icon: 'payments' },
            ].map(item => (
              <button key={item.id} className={`flex items-center gap-5 px-8 py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all backdrop-blur-sm ${item.active ? 'bg-accent-blue dark:bg-brand-red text-white shadow-vibrant' : 'text-slate-400 dark:text-slate-500 hover:bg-white/80 dark:hover:bg-brand-red/10 hover:text-accent-blue dark:hover:text-brand-red shadow-none hover:shadow-soft'}`}>
                <span className="material-symbols-outlined text-2xl leading-none">{item.icon}</span>
                {item.id}
              </button>
            ))}
            <div className="my-8 border-t border-blue-50 dark:border-white/5 mx-8"></div>
            <button className="flex items-center gap-5 px-8 py-5 rounded-2xl text-slate-400 hover:text-brand-red hover:bg-red-50 dark:hover:bg-red-950/20 transition-all text-[11px] font-black uppercase tracking-widest">
              <span className="material-symbols-outlined text-2xl leading-none">logout</span>
              Sign Out
            </button>
          </nav>
        </aside>

        {/* Content Area */}
        <section className="flex-1 flex flex-col gap-16">
          {/* Hero Identity */}
          <div className="bg-white/95 dark:bg-[#0a0a0a] p-8 md:p-12 rounded-[3.5rem] border border-blue-50 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-12 shadow-elevated-light dark:shadow-dark-elevated hover:shadow-vibrant transition-all card-shadow">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center text-center sm:text-left">
              <div className="relative group shrink-0">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-[2.5rem] size-40 border-8 border-blue-50/50 dark:border-gray-800 shadow-xl transition-transform group-hover:scale-105" style={{ backgroundImage: `url(${rivera.avatar})` }} />
                <button className="absolute -bottom-2 -right-2 p-4 bg-brand-blue dark:bg-brand-red text-white rounded-2xl border-4 border-white dark:border-slate-900 active:scale-90 transition-all shadow-vibrant">
                  <span className="material-symbols-outlined text-xl leading-none">photo_camera</span>
                </button>
              </div>
              <div className="flex flex-col">
                <h2 className="text-4xl font-black leading-tight tracking-tight text-accent-blue dark:text-white">Alex Rivera</h2>
                <p className="text-xl text-[#637688] dark:text-gray-400 font-semibold mt-1">Founding Member @ Furute</p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-4">
                  <p className="text-slate-400 text-[10px] flex items-center gap-2 font-black uppercase tracking-[0.2em] bg-[#F8FAFC]/50 dark:bg-white/5 px-4 py-2 rounded-full border border-blue-50 dark:border-white/5">
                    <span className="material-symbols-outlined text-brand-blue dark:text-brand-red text-base leading-none">location_on</span> Pune, MH
                  </p>
                  <p className="text-slate-400 text-[10px] flex items-center gap-2 font-black uppercase tracking-[0.2em] bg-[#F8FAFC]/50 dark:bg-white/5 px-4 py-2 rounded-full border border-blue-50 dark:border-white/5">
                    <span className="material-symbols-outlined text-brand-blue dark:text-brand-red text-base leading-none">verified</span> Joined Jan 2024
                  </p>
                </div>
              </div>
            </div>
            <button className="px-10 py-4 bg-[#F8FAFC]/80 dark:bg-slate-900 border-2 border-blue-50 dark:border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-accent-blue dark:text-white shadow-soft hover:bg-white dark:hover:bg-brand-red/10 transition-all backdrop-blur-sm shrink-0">
              View Public Profile
            </button>
          </div>

          <div className="space-y-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 gap-4">
              <h3 className="text-2xl font-black tracking-tight text-accent-blue dark:text-white">Personal Information</h3>
              <p className="text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-[0.3em] shrink-0">Last synced: Today, 10:45 AM</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8 md:p-12 bg-white/95 dark:bg-[#0a0a0a] border border-blue-50 dark:border-white/5 rounded-[3rem] shadow-elevated-light dark:shadow-dark-elevated card-shadow">
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 ml-2">First Name</label>
                <input className="w-full rounded-[1.5rem] border-2 border-blue-50 dark:border-white/10 bg-[#F8FAFC]/80 dark:bg-black px-8 py-5 text-base font-bold focus:ring-4 focus:ring-brand-blue/10 dark:focus:ring-brand-red/10 outline-none transition-all text-accent-blue dark:text-white" defaultValue="Alex" />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 ml-2">Last Name</label>
                <input className="w-full rounded-[1.5rem] border-2 border-blue-50 dark:border-white/10 bg-[#F8FAFC]/80 dark:bg-black px-8 py-5 text-base font-bold focus:ring-4 focus:ring-brand-blue/10 dark:focus:ring-brand-red/10 outline-none transition-all text-accent-blue dark:text-white" defaultValue="Rivera" />
              </div>
              <div className="flex flex-col gap-3 md:col-span-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 ml-2">Professional Narrative</label>
                <textarea className="w-full rounded-[2rem] border-2 border-blue-50 dark:border-white/10 bg-[#F8FAFC]/80 dark:bg-black px-8 py-6 text-base font-bold focus:ring-4 focus:ring-brand-blue/10 dark:focus:ring-brand-red/10 outline-none transition-all min-h-[160px] resize-none text-accent-blue dark:text-white" defaultValue="Product Designer specializing in design systems and accessible user interfaces. I've been with the Furute ecosystem since 2021, focusing on bridging the gap between design and development." />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 ml-2">Preferred Language</label>
                <select className="w-full rounded-[1.5rem] border-2 border-blue-50 dark:border-white/10 bg-[#F8FAFC]/80 dark:bg-black px-8 py-5 text-base font-bold focus:ring-4 focus:ring-brand-blue/10 dark:focus:ring-brand-red/10 outline-none transition-all appearance-none text-accent-blue dark:text-white">
                  <option>English (International)</option>
                  <option>Hindi</option>
                  <option>Marathi</option>
                </select>
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 ml-2">Primary Timezone</label>
                <select className="w-full rounded-[1.5rem] border-2 border-blue-50 dark:border-white/10 bg-[#F8FAFC]/80 dark:bg-black px-8 py-5 text-base font-bold focus:ring-4 focus:ring-brand-blue/10 dark:focus:ring-brand-red/10 outline-none transition-all appearance-none text-accent-blue dark:text-white">
                  <option>India Standard Time (IST)</option>
                  <option>Pacific Time (PT)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <h3 className="text-2xl font-black tracking-tight px-4 text-accent-blue dark:text-white">Platform Intelligence Notifications</h3>
            <div className="flex flex-col divide-y divide-blue-50 dark:divide-white/5 bg-white/95 dark:bg-[#0a0a0a] border border-blue-50 dark:border-white/10 rounded-[3rem] overflow-hidden shadow-elevated-light dark:shadow-dark-elevated card-shadow">
              {[
                { title: 'Monthly Insights Newsletter', desc: 'Get a summary of platform trends and your personal growth metrics.', active: true },
                { title: 'Security & Access Alerts', desc: 'Immediate notification about logins from new devices or locations.', active: true },
                { title: 'Direct Member Intelligence', desc: 'Email me when I receive a new message from other portal members.', active: false },
              ].map((n, i) => (
                <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-8 sm:p-10 hover:bg-[#F8FAFC]/50 dark:hover:bg-white/5 transition-all group gap-4">
                  <div className="flex flex-col gap-2">
                    <p className="text-lg font-black text-accent-blue dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-red transition-colors tracking-tight">{n.title}</p>
                    <p className="text-sm text-[#637688] dark:text-gray-400 font-semibold">{n.desc}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0">
                    <input type="checkbox" className="sr-only peer" defaultChecked={n.active} />
                    <div className="w-14 h-8 bg-slate-200 dark:bg-gray-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:rounded-full after:h-[24px] after:w-[24px] after:transition-all peer-checked:bg-brand-blue dark:peer-checked:bg-brand-red shadow-inner"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-end gap-8 pt-16 border-t border-blue-50 dark:border-white/10">
            <button className="text-[11px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 hover:text-accent-blue dark:hover:text-brand-red transition-all">Discard Changes</button>
            <button className="w-full sm:w-auto px-16 py-6 bg-accent-blue dark:bg-brand-red text-white rounded-[1.5rem] font-black uppercase tracking-widest text-[11px] shadow-vibrant dark:shadow-brand-red/30 hover:brightness-110 active:scale-95 transition-all">Save All Updates</button>
          </div>
        </section>
      </main>

      <footer className="border-t border-blue-50 dark:border-white/10 py-16 px-6 md:px-16 bg-white/80 dark:bg-black/40 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 opacity-50 font-black tracking-[0.4em] uppercase text-[10px] text-accent-blue dark:text-white">
            © 2024 Furute Professional Hub
          </div>
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
            <a href="#" className="hover:text-brand-blue dark:hover:text-brand-red transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-blue dark:hover:text-brand-red transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-blue dark:hover:text-brand-red transition-colors">Help Center</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Profile;
