import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import Footer from '../components/Footer';
import FAQAccordion from '../components/FAQAccordion';

const Contact: React.FC<{ onNavigate: (p: Page) => void }> = ({ onNavigate }) => {
  const [distance, setDistance] = useState<number | null>(null);
  const faqItems = [
    {
      question: "Where is the Furute headquarters located?",
      answer: (
        <>
          The Furute headquarters is located at <button onClick={() => onNavigate(Page.Contact)} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">484/4, Shiv Darshan Rd, Mitra Mandal Colony, Parvati Paytha, Pune, Maharashtra 411009</button>. We are centrally located in Pune to serve the local business ecosystem effectively.
        </>
      )
    },
    {
      question: "How can I contact Furute for business inquiries?",
      answer: (
        <>
          You can reach us via email at info@furute.in or call our direct line at +91 9822600521. For quick connects, we also offer a <button onClick={() => onNavigate(Page.Contact)} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">WhatsApp-only channel</button> for immediate assistance.
        </>
      )
    },
    {
      question: "Does Furute offer consultations for startups in Pune?",
      answer: (
        <>
          Yes, we offer consultations for 1:1 business strategy, branding audits, and leadership development. You can <button onClick={() => onNavigate(Page.Contact)} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">send an inquiry through our contact form</button> to schedule a session with our strategic advisors.
        </>
      )
    },
    {
      question: "Is Furute hiring in Pune?",
      answer: (
        <>
          We are frequently looking for ambitious talent to join our team in Pune. Check our <button onClick={() => onNavigate(Page.About)} className="text-accent-blue dark:text-brand-red underline decoration-2 underline-offset-4 hover:text-brand-blue transition-colors">About page</button> or contact us directly to learn about current openings and how you can contribute to our mission.
        </>
      )
    }
  ];

  const [locationError, setLocationError] = useState<string | null>(null);

  const furuteHQ = {
    latitude: 18.4950,
    longitude: 73.8569,
  };

  const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Radius of the earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLon = position.coords.longitude;
          const dist = getDistance(userLat, userLon, furuteHQ.latitude, furuteHQ.longitude);
          setDistance(dist);
          setLocationError(null);
        },
        (error) => {
          console.error("Geolocation error:", error);
          setLocationError("Could not retrieve your location.");
        }
      );
    } else {
      setLocationError("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="bg-transparent dark:bg-black text-slate-900 dark:text-white min-h-screen transition-colors duration-500 text-left">
      <main className="container-fluid section-padding">
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-10">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-100 dark:bg-brand-red/10 text-slate-600 dark:text-brand-red text-[10px] font-black uppercase tracking-[0.3em] w-fit border border-slate-200 dark:border-brand-red/20">
                <span className="size-2.5 rounded-full bg-brand-red animate-pulse"></span> 
                Hiring Now in Pune
              </div>
              <h1 className="text-hero dark:text-white">
                Contact Furute HQ <br/><span className="text-slate-400 italic dark:text-brand-red/60">Pune</span>
              </h1>
              <p className="text-2xl text-slate-500 dark:text-gray-400 leading-relaxed max-w-xl font-medium">
                Visit our headquarters in Parvati Paytha, Pune. Contact Ashay Shah's team for business training and mentorship inquiries.
              </p>
            </div>
            <div className="relative">
              <div className="w-full aspect-square lg:aspect-[4/3] bg-white/50 dark:bg-zinc-900/40 rounded-[4rem] overflow-hidden shadow-4xl border-8 border-white dark:border-white/5 flex items-center justify-center p-12 backdrop-blur-md">
                <div 
                  className="w-full h-full bg-cover bg-center rounded-[3rem] opacity-90 shadow-2xl filter grayscale-[10%] brightness-95" 
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/d/1zP-lmJ9SoaCB_RU099ZphZJnqWFkzQYC")'}}
                  role="img"
                  aria-label="Furute Pune office location"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white dark:bg-[#0a0a0a] p-10 rounded-[3rem] shadow-4xl border border-slate-100 dark:border-white/10 hidden sm:block">
                <div className="flex items-center gap-6">
                  <div className="size-16 rounded-2xl bg-brand-red/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-brand-red text-4xl">verified</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-[0.3em] mb-1">Quick Connect</p>
                    <p className="text-3xl font-black text-brand-red leading-none">WhatsApp Only</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 flex flex-col gap-12">
            <div className="space-y-6 text-left">
              <h2 className="text-4xl font-black tracking-tighter dark:text-white">Direct Access</h2>
              <p className="text-xl text-slate-400 dark:text-slate-500 font-medium">Reach our HQ in Pune directly.</p>
            </div>
            <div className="grid grid-cols-1 gap-8">
              {[
                { label: 'Primary Email', val: 'info@furute.in', icon: 'mail' },
                { label: 'Direct Line', val: '+91 9822600521', icon: 'call' },
                { label: 'Pune HQ', val: '484/4, Shiv Darshan Rd, Mitra Mandal Colony, Parvati Paytha, Pune, Maharashtra 411009', icon: 'location_on', isLocation: true }
              ].map(item => (
                <div key={item.label} className="group flex items-start gap-10 p-8 rounded-[3.5rem] border border-slate-100 dark:border-white/10 hover:border-brand-blue/30 dark:hover:border-brand-red/30 transition-all shadow-xl dark:shadow-dark-elevated bg-white dark:bg-[#0a0a0a] text-left">
                  <div className="size-20 rounded-[2rem] bg-slate-50 dark:bg-zinc-900 flex items-center justify-center group-hover:bg-brand-blue dark:group-hover:bg-brand-red transition-all group-hover:scale-110 shrink-0">
                    <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 group-hover:text-white text-3xl leading-none transition-colors">{item.icon}</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-2">{item.label}</p>
                    <p className="text-2xl font-bold dark:text-white leading-tight tracking-tight">{item.val}</p>
                    {item.isLocation && distance && (
                      <p className="mt-4 text-sm font-bold text-green-600 bg-green-500/10 px-4 py-2 rounded-full inline-block">
                        Approx. {Math.round(distance)} km away from you
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#fafafa] dark:bg-[#0a0a0a] rounded-[5rem] p-12 lg:p-16 border border-slate-100 dark:border-white/5 shadow-4xl relative overflow-hidden backdrop-blur-md">
             <div className="absolute top-0 right-0 size-80 bg-brand-blue/5 dark:bg-brand-red/5 rounded-full blur-[100px] -mr-40 -mt-40"></div>
            <div className="mb-12 relative z-10 text-left">
              <h2 className="text-5xl font-black tracking-tighter mb-6 dark:text-white leading-none">Send a Message</h2>
              <p className="text-2xl text-slate-500 dark:text-gray-400 font-medium max-w-lg">Tell us about your business goals and we'll get back to you shortly.</p>
            </div>
            <form className="flex flex-col gap-8 relative z-10 text-left" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <label className="flex flex-col gap-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 ml-2">Full Name</span>
                  <input className="w-full px-10 h-20 rounded-[1.5rem] border-2 border-slate-100 dark:border-white/10 bg-white dark:bg-black text-slate-900 dark:text-white focus:ring-4 focus:ring-brand-blue/10 dark:focus:ring-brand-red/10 focus:border-brand-blue dark:focus:border-brand-red outline-none transition-all font-bold text-lg" placeholder="John Doe" />
                </label>
                <label className="flex flex-col gap-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 ml-2">Email Address</span>
                  <input className="w-full px-10 h-20 rounded-[1.5rem] border-2 border-slate-100 dark:border-white/10 bg-white dark:bg-black text-slate-900 dark:text-white focus:ring-4 focus:ring-brand-blue/10 dark:focus:ring-brand-red/10 focus:border-brand-blue dark:focus:border-brand-red outline-none transition-all font-bold text-lg" placeholder="john@company.com" />
                </label>
              </div>
              <label className="flex flex-col gap-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 ml-2">Inquiry Type</span>
                <select className="w-full px-10 h-20 rounded-[1.5rem] border-2 border-slate-100 dark:border-white/10 bg-white dark:bg-black text-slate-900 dark:text-white focus:ring-4 focus:ring-brand-blue/10 dark:focus:ring-brand-red/10 focus:border-brand-blue dark:focus:border-brand-red outline-none transition-all appearance-none font-bold text-lg">
                  <option>1:1 Business Strategy</option>
                  <option>Branding Audit</option>
                  <option>Leadership Development</option>
                  <option>Corporate Workshop</option>
                </select>
              </label>
              <label className="flex flex-col gap-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 ml-2">Message</span>
                <textarea className="w-full px-10 py-10 rounded-[2rem] border-2 border-slate-100 dark:border-white/10 bg-white dark:bg-black text-slate-900 dark:text-white focus:ring-4 focus:ring-brand-blue/10 dark:focus:ring-brand-red/10 focus:border-brand-blue dark:focus:border-brand-red outline-none transition-all resize-none font-bold text-lg" placeholder="How can we help you achieve excellence?" rows={6}></textarea>
              </label>
              <button className="w-full md:w-fit min-w-[280px] flex items-center justify-center gap-5 px-14 py-8 bg-[#0d3c68] dark:bg-brand-red text-white font-black uppercase tracking-widest text-[12px] rounded-[1.5rem] hover:scale-105 active:scale-95 transition-all shadow-4xl shadow-blue-900/30 dark:shadow-brand-red/40">
                Send Inquiry <span className="material-symbols-outlined text-2xl leading-none">send</span>
              </button>
            </form>
          </div>
        </section>
      </main>
      
      {/* AI Answer Block / FAQ Section for GEO */}
      <section className="section-padding container-fluid mb-20 md:mb-32 text-left">
        <div className="max-w-4xl mb-16 mx-auto text-center">
          <span className="text-brand-blue dark:text-brand-red font-black tracking-[0.3em] uppercase text-[10px]">F.A.Q</span>
          <h2 className="text-display mt-8 text-accent-blue dark:text-white">Contact Intelligence: <br/>Pune HQ Insights.</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <Footer onNavigate={onNavigate} currentPage={Page.Contact} />
    </div>
  );
};

export default Contact;
