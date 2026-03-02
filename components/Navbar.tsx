
import React, { useState, useEffect } from 'react';
import { Page, User } from '../types';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  isLoggedIn: boolean;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  user: User;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, isLoggedIn, isDarkMode, toggleDarkMode, user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Absolute scroll lock for the body when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflowY = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflowY = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflowY = '';
    };
  }, [isMenuOpen]);

  const navItems = [
    { label: 'Home', page: Page.Home },
    { label: 'About', page: Page.About },
    { label: 'Programs', page: Page.Courses },
    { label: 'Marketplace', page: Page.Marketplace },
    { label: 'Mentoring', page: Page.Mentoring },
    { label: 'Retreats', page: Page.Retreats },
    { label: 'PR Services', page: Page.PRServices },
    { label: 'Subscription', page: Page.Subscription },
    { label: 'Community', page: Page.Community },
    { label: 'Podcast', page: Page.Podcast },
    { label: 'Contact', page: Page.Contact },
  ];

  const handleNavigate = (e: React.MouseEvent, page: Page) => {
    e.preventDefault();
    onNavigate(page);
    setIsMenuOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onNavigate(Page.Marketplace);
      setIsSearchActive(false);
    }
  };

  const logoUrl = "https://lh3.googleusercontent.com/d/1y0CJPA67J0JpbxJADkaJdfr_0aIRB78_";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-[60] bg-white/80 dark:bg-[#000000]/90 backdrop-blur-xl border-b border-blue-50 dark:border-white/10 shadow-sm transition-all duration-300">
        <div className="container-fluid py-4">
          <div className="flex items-center justify-between">
            <a
              href={`#${Page.Home}`}
              onClick={(e) => handleNavigate(e, Page.Home)}
              className="flex items-center gap-3 cursor-pointer group shrink-0"
            >
              <div className="transition-transform group-hover:scale-105 duration-300">
                <img 
                  src={logoUrl} 
                  alt="Furute Logo" 
                  className="h-12 md:h-14 w-auto object-contain mix-blend-multiply dark:mix-blend-normal dark:brightness-125 dark:contrast-125"
                />
              </div>
            </a>

            <div className="flex-1 flex items-center justify-center px-4 sm:px-8">
              {isSearchActive && (
                <form onSubmit={handleSearch} className="w-full max-w-lg relative animate-in fade-in slide-in-from-top-2">
                  <input
                    autoFocus
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search programs, experts, or community..."
                    className="w-full bg-slate-100 dark:bg-white/10 border-none rounded-full px-6 py-2.5 text-sm font-semibold focus:ring-2 focus:ring-primary/50 outline-none dark:text-white placeholder:text-slate-500"
                  />
                  <button 
                    type="button"
                    onClick={() => setIsSearchActive(false)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-accent-blue dark:hover:text-white"
                  >
                    <span className="material-symbols-outlined text-xl">close</span>
                  </button>
                </form>
              )}
            </div>

            <div className="flex items-center gap-2 sm:gap-4 shrink-0">
              {!isSearchActive && (
                <button 
                  onClick={() => setIsSearchActive(true)}
                  className="p-2 rounded-xl hover:bg-blue-50 dark:hover:bg-brand-red/10 transition-colors text-slate-500 dark:text-gray-400"
                  aria-label="Search"
                >
                  <span className="material-symbols-outlined text-xl leading-none">search</span>
                </button>
              )}

              <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-xl hover:bg-blue-50 dark:hover:bg-brand-red/10 transition-colors text-slate-500 dark:text-gray-400"
              >
                <span className="material-symbols-outlined text-xl leading-none">
                  {isDarkMode ? 'light_mode' : 'dark_mode'}
                </span>
              </button>

              {isLoggedIn ? (
                <div className="flex items-center gap-4">
                  <a
                    href={`#${Page.Dashboard}`}
                    onClick={(e) => handleNavigate(e, Page.Dashboard)}
                    className="hidden sm:flex items-center text-xs font-black uppercase tracking-widest text-accent-blue dark:text-slate-200"
                  >
                    Portal
                  </a>
                  <div 
                    className="size-9 rounded-full border-2 border-primary/20 bg-center bg-cover cursor-pointer hover:scale-105 transition-all shadow-sm"
                    style={{ backgroundImage: `url(${user.avatar})` }}
                    onClick={() => onNavigate(Page.Profile)}
                  />
                </div>
              ) : (
                <div className="flex items-center gap-2 sm:gap-3">
                  <a
                    href={`#${Page.Login}`}
                    onClick={(e) => handleNavigate(e, Page.Login)}
                    className="hidden sm:flex items-center text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 text-accent-blue/60 dark:text-slate-400 hover:text-primary dark:hover:text-brand-red transition-colors"
                  >
                    Login
                  </a>
                  <a
                    href={`#${Page.SignUp}`}
                    onClick={(e) => handleNavigate(e, Page.SignUp)}
                    className="hidden sm:flex items-center justify-center bg-accent-blue dark:bg-brand-red text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-3 rounded-xl shadow-vibrant dark:shadow-brand-red/20 hover:opacity-90 transition-all active:scale-95"
                  >
                    Join Furute
                  </a>
                </div>
              )}

              <button 
                onClick={() => setIsMenuOpen(true)}
                className="p-2 rounded-xl hover:bg-blue-50 dark:hover:bg-brand-red/10 transition-colors text-accent-blue dark:text-slate-300 flex items-center justify-center"
                aria-label="Open Menu"
              >
                <span className="material-symbols-outlined text-3xl leading-none">menu</span>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Subheader */}
        <div className="hidden xl:flex border-t border-blue-50 dark:border-white/5 bg-white/50 dark:bg-white/5 backdrop-blur-md">
          <div className="container-fluid w-full">
            <nav className="flex items-center justify-center gap-8 py-3">
              {navItems.map((item) => (
                <a
                  key={item.page}
                  href={`#${item.page}`}
                  onClick={(e) => handleNavigate(e, item.page)}
                  className={`text-xs font-extrabold tracking-widest uppercase transition-all hover:text-primary dark:hover:text-brand-red ${
                    currentPage === item.page 
                      ? 'text-primary dark:text-brand-red' 
                      : 'text-accent-blue/60 dark:text-gray-400'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[10000] bg-white dark:bg-black flex flex-col transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
        } overflow-y-auto overflow-x-hidden no-scrollbar`}
      >
        <div className="p-4 sm:p-6 flex flex-col min-h-full">
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-3">
               <img 
                src={logoUrl} 
                alt="Furute Logo" 
                className="h-14 w-auto object-contain mix-blend-multiply dark:mix-blend-normal dark:brightness-125"
              />
            </div>
            
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="size-14 rounded-full bg-accent-blue dark:bg-white text-white dark:text-black transition-all hover:scale-105 active:scale-90 flex items-center justify-center shadow-vibrant"
            >
              <span className="material-symbols-outlined text-3xl leading-none font-bold">close</span>
            </button>
          </div>

          <div className="flex flex-col gap-12 text-center items-center justify-center flex-1 py-8">
            <div className="w-full max-w-md mb-8">
              <form onSubmit={handleSearch} className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                <input 
                  type="text"
                  placeholder="Global Search..."
                  className="w-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-transparent rounded-2xl py-4 pl-12 pr-4 text-lg font-bold outline-none dark:text-white placeholder:text-slate-500"
                />
              </form>
            </div>

            <div className="w-full">
              <p className="text-[10px] font-black uppercase text-slate-600 dark:text-slate-500 tracking-[0.4em] mb-12">Directory</p>
              <nav className="flex flex-col gap-6 md:gap-8">
                {navItems.map((item) => (
                  <a
                    key={item.page}
                    href={`#${item.page}`}
                    onClick={(e) => handleNavigate(e, item.page)}
                    className={`text-3xl sm:text-4xl md:text-6xl font-black transition-all transform hover:scale-105 ${
                      currentPage === item.page 
                        ? 'text-primary dark:text-brand-red' 
                        : 'text-accent-blue dark:text-white hover:text-primary dark:hover:text-brand-red'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div className="mt-auto pt-16">
            {!isLoggedIn ? (
              <div className="grid grid-cols-2 gap-4">
                <a
                  href={`#${Page.Login}`}
                  onClick={(e) => handleNavigate(e, Page.Login)}
                  className="py-6 text-center font-black uppercase tracking-widest text-accent-blue/60 rounded-3xl border border-slate-100 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-brand-red/10 transition-all"
                >
                  Login
                </a>
                <a
                  href={`#${Page.SignUp}`}
                  onClick={(e) => handleNavigate(e, Page.SignUp)}
                  className="py-6 bg-primary dark:bg-brand-red text-white rounded-3xl font-black uppercase tracking-widest shadow-vibrant dark:shadow-brand-red/30 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center"
                >
                  Join
                </a>
              </div>
            ) : (
              <div className="p-6 bg-slate-50 dark:bg-white/5 rounded-[2.5rem] flex items-center justify-between border border-slate-100 dark:border-white/10 shadow-lg">
                <div className="flex items-center gap-5 text-left">
                  <div className="size-16 rounded-full bg-cover bg-center border-4 border-white dark:border-black shadow-xl" style={{ backgroundImage: `url(${user.avatar})` }} />
                  <div>
                    <p className="text-xl font-black text-accent-blue dark:text-white leading-tight">{user.name}</p>
                    <p className="text-xs font-bold text-primary dark:text-brand-red uppercase tracking-widest mt-1">{user.role}</p>
                  </div>
                </div>
                <button 
                  onClick={() => onNavigate(Page.Home)}
                  className="size-14 flex items-center justify-center bg-red-50 dark:bg-red-900/10 text-brand-red rounded-2xl hover:bg-red-100 dark:hover:bg-red-900/20 transition-all active:scale-90"
                >
                   <span className="material-symbols-outlined text-3xl font-black">logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;