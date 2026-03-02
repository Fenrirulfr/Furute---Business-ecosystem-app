
import React from 'react';
import { Page } from '../types';

interface SidebarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, onNavigate, onLogout }) => {
  
  const handleNavigate = (e: React.MouseEvent, page: Page) => {
    e.preventDefault();
    onNavigate(page);
  };

  const navItems = [
    { label: 'Dashboard', page: Page.Dashboard, icon: 'dashboard' },
    { label: 'My Courses', page: Page.Courses, icon: 'menu_book' },
    { label: 'Bookings', page: Page.ComingSoon, icon: 'event_available' },
    { label: 'Community', page: Page.Community, icon: 'forum' },
  ];

  const accountItems = [
    { label: 'Profile', page: Page.Profile, icon: 'person' },
    { label: 'Payments', page: Page.Payments, icon: 'payments' },
  ];

  return (
    <aside className="w-72 bg-white dark:bg-[#020617] border-r border-blue-50 dark:border-slate-800 flex flex-col sticky top-[88px] xl:top-[128px] h-[calc(100vh-88px)] xl:h-[calc(100vh-128px)] z-40 hidden md:flex transition-all duration-300">
      <div className="p-8 flex flex-col h-full">
        <div className="flex-1 space-y-10">
          <nav className="space-y-2">
            {navItems.map((item) => (
              <a
                key={item.page}
                href={`#${item.page}`}
                onClick={(e) => handleNavigate(e, item.page)}
                className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${
                  currentPage === item.page
                    ? 'bg-blue-50 text-brand-blue shadow-soft dark:bg-brand-red/10 dark:text-brand-red dark:shadow-none font-black'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-[#F8FAFC] dark:hover:bg-brand-red/10 dark:hover:text-brand-red font-bold'
                }`}
              >
                <span className="material-symbols-outlined text-2xl leading-none">{item.icon}</span>
                <span className="text-[11px] uppercase tracking-widest">{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="space-y-6">
            <p className="px-6 text-[10px] font-black text-slate-500 dark:text-slate-600 uppercase tracking-[0.4em]">Account</p>
            <nav className="space-y-2">
              {accountItems.map((item) => (
                <a
                  key={item.page}
                  href={`#${item.page}`}
                  onClick={(e) => handleNavigate(e, item.page)}
                  className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${
                    currentPage === item.page
                      ? 'bg-blue-50 text-brand-blue shadow-soft dark:bg-brand-red/10 dark:text-brand-red dark:shadow-none font-black'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-[#F8FAFC] dark:hover:bg-brand-red/10 dark:hover:text-brand-red font-bold'
                  }`}
                >
                  <span className="material-symbols-outlined text-2xl leading-none">{item.icon}</span>
                  <span className="text-[11px] uppercase tracking-widest">{item.label}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>

        <button 
          onClick={onLogout}
          className="flex items-center gap-4 px-6 py-4 rounded-2xl text-brand-red hover:bg-red-50 dark:hover:bg-red-950/20 transition-all mt-auto font-black text-[11px] uppercase tracking-widest"
        >
          <span className="material-symbols-outlined text-2xl leading-none">logout</span>
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
