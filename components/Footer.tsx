import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onNavigate?: (p: Page) => void;
  shareTitle?: string;
  currentPage?: Page;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, shareTitle, currentPage }) => {
  const handleNav = (e: React.MouseEvent, p: Page) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(p);
      window.scrollTo(0, 0);
    }
  };

  const logoUrl = "https://lh3.googleusercontent.com/d/1y0CJPA67J0JpbxJADkaJdfr_0aIRB78_";

  const getLinkClass = (page: Page) => {
    const isActive = currentPage === page;
    const baseClass = "transition-all duration-300 hover:text-primary dark:hover:text-brand-red";
    const activeClass = "text-primary dark:text-brand-red font-black underline decoration-2 underline-offset-8";
    const inactiveClass = "text-slate-700 dark:text-gray-400 font-bold";
    
    return `${baseClass} ${isActive ? activeClass : inactiveClass}`;
  };

  return (
    <footer className="bg-white dark:bg-black border-t border-slate-100 dark:border-white/10 pt-16 pb-8 mt-auto">
      <div className="container-fluid">
        
        {/* Social Share Section for Programs */}
        {shareTitle && (
          <div className="mb-16 p-8 rounded-[2.5rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <h4 className="text-xl font-black dark:text-white tracking-tight">Spread the Word</h4>
              <p className="text-sm text-slate-700 dark:text-gray-400 font-medium mt-1">Found value in {shareTitle}? Share it with your network.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="h-10 px-5 rounded-xl bg-[#25D366] text-white flex items-center gap-2 font-black uppercase tracking-widest text-[9px] hover:brightness-110 transition-all shadow-md">
                <svg viewBox="0 0 24 24" className="size-4 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </button>
              <button className="h-10 px-5 rounded-xl bg-[#0077B5] text-white flex items-center gap-2 font-black uppercase tracking-widest text-[9px] hover:brightness-110 transition-all shadow-md">
                <svg viewBox="0 0 24 24" className="size-4 fill-white">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </button>
              <button className="h-10 px-5 rounded-xl bg-black dark:bg-white dark:text-black text-white flex items-center gap-2 font-black uppercase tracking-widest text-[9px] hover:opacity-80 transition-all shadow-md">
                <svg viewBox="0 0 24 24" className="size-4 fill-current">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298l13.309 17.41z"/>
                </svg>
                X
              </button>
              <button className="h-10 px-5 rounded-xl bg-[#1877F2] text-white flex items-center gap-2 font-black uppercase tracking-widest text-[9px] hover:brightness-110 transition-all shadow-md">
                <svg viewBox="0 0 24 24" className="size-4 fill-white">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </button>
              <button className="h-10 px-5 rounded-xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center gap-2 font-black uppercase tracking-widest text-[9px] hover:brightness-110 transition-all shadow-md">
                <svg viewBox="0 0 24 24" className="size-4 fill-white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0 3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-20 text-left">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logoUrl} 
                alt="Furute Logo" 
                className="h-20 w-auto object-contain mix-blend-multiply dark:mix-blend-normal dark:brightness-125 dark:contrast-125"
              />
            </div>
            <p className="text-slate-700 dark:text-gray-400 max-w-[280px] text-sm leading-relaxed font-medium">
              The world's premier ecosystem for entrepreneurs. Empowering leaders with world-class tools and a borderless network.
            </p>
            
            {/* General Brand Social Buttons */}
            <div className="flex flex-wrap gap-3 mt-8">
               <button title="LinkedIn" className="size-11 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 hover:text-[#0077B5] hover:border-[#0077B5] transition-all group">
                  <svg viewBox="0 0 24 24" className="size-5 fill-current group-hover:scale-110 transition-transform">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
               </button>
               <button title="Instagram" className="size-11 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 hover:text-[#E4405F] hover:border-[#E4405F] transition-all group">
                  <svg viewBox="0 0 24 24" className="size-5 fill-current group-hover:scale-110 transition-transform">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0 3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
               </button>
               <button title="X / Twitter" className="size-11 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 hover:text-black dark:hover:text-brand-red hover:border-black dark:hover:border-brand-red transition-all group">
                  <svg viewBox="0 0 24 24" className="size-5 fill-current group-hover:scale-110 transition-transform">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298l13.309 17.41z"/>
                  </svg>
               </button>
               <button title="Facebook" className="size-11 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 hover:text-[#1877F2] hover:border-[#1877F2] transition-all group">
                  <svg viewBox="0 0 24 24" className="size-5 fill-current group-hover:scale-110 transition-transform">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
               </button>
               <button title="WhatsApp" className="size-11 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 hover:text-[#25D366] hover:border-[#25D366] transition-all group">
                  <svg viewBox="0 0 24 24" className="size-5 fill-current group-hover:scale-110 transition-transform">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
               </button>
               <button title="YouTube" className="size-11 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 hover:text-[#FF0000] hover:border-[#FF0000] transition-all group">
                  <svg viewBox="0 0 24 24" className="size-5 fill-current group-hover:scale-110 transition-transform">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
               </button>
               <button title="Email" className="size-11 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-blue hover:border-brand-blue dark:hover:text-brand-red transition-all group">
                  <span className="material-symbols-outlined text-xl group-hover:scale-110">mail</span>
               </button>
            </div>
          </div>
          <div>
            <h4 className="font-black text-[11px] uppercase tracking-[0.2em] mb-8 dark:text-white">Platform</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href={`#${Page.Courses}`} onClick={(e) => handleNav(e, Page.Courses)} className={getLinkClass(Page.Courses)}>Programs</a></li>
              <li><a href={`#${Page.Marketplace}`} onClick={(e) => handleNav(e, Page.Marketplace)} className={getLinkClass(Page.Marketplace)}>Marketplace</a></li>
              <li><a href={`#${Page.Mentoring}`} onClick={(e) => handleNav(e, Page.Mentoring)} className={getLinkClass(Page.Mentoring)}>Mentoring</a></li>
              <li><a href={`#${Page.Retreats}`} onClick={(e) => handleNav(e, Page.Retreats)} className={getLinkClass(Page.Retreats)}>Global Summits</a></li>
              <li><a href={`#${Page.PRServices}`} onClick={(e) => handleNav(e, Page.PRServices)} className={getLinkClass(Page.PRServices)}>PR Services</a></li>
              <li><a href={`#${Page.Subscription}`} onClick={(e) => handleNav(e, Page.Subscription)} className={getLinkClass(Page.Subscription)}>Subscription</a></li>
              <li><a href={`#${Page.Podcast}`} onClick={(e) => handleNav(e, Page.Podcast)} className={getLinkClass(Page.Podcast)}>Podcast</a></li>
              <li><a href={`#${Page.Community}`} onClick={(e) => handleNav(e, Page.Community)} className={getLinkClass(Page.Community)}>Community</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-[11px] uppercase tracking-[0.2em] mb-8 dark:text-white">Company</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href={`#${Page.About}`} onClick={(e) => handleNav(e, Page.About)} className={getLinkClass(Page.About)}>About Us</a></li>
              <li><a href={`#${Page.Careers}`} onClick={(e) => handleNav(e, Page.Careers)} className={getLinkClass(Page.Careers)}>Careers</a></li>
              <li><a href={`#${Page.PressKit}`} onClick={(e) => handleNav(e, Page.PressKit)} className={getLinkClass(Page.PressKit)}>Press Kit</a></li>
              <li><a href={`#${Page.Partners}`} onClick={(e) => handleNav(e, Page.Partners)} className={getLinkClass(Page.Partners)}>Global Partners</a></li>
              <li><a href={`#${Page.Contact}`} onClick={(e) => handleNav(e, Page.Contact)} className={getLinkClass(Page.Contact)}>Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-[11px] uppercase tracking-[0.2em] mb-8 dark:text-white">Legal</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href={`#${Page.Privacy}`} onClick={(e) => handleNav(e, Page.Privacy)} className={getLinkClass(Page.Privacy)}>Privacy Policy</a></li>
              <li><a href={`#${Page.Terms}`} onClick={(e) => handleNav(e, Page.Terms)} className={getLinkClass(Page.Terms)}>Terms of Service</a></li>
              <li><a href={`#${Page.Cookie}`} onClick={(e) => handleNav(e, Page.Cookie)} className={getLinkClass(Page.Cookie)}>Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-slate-100 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-bold text-slate-700 uppercase tracking-widest italic">© 2024 Furute International. All rights reserved. Operating Globally.</p>
          <div className="flex gap-8">
            <span className="text-[10px] font-black uppercase text-slate-700 tracking-[0.2em]">Status: Online</span>
            <span className="text-[10px] font-black uppercase text-slate-700 tracking-[0.2em]">Region: Global</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
