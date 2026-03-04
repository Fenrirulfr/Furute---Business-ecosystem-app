
import React, { useState } from 'react';
import { Page } from '../types';

interface LoginProps {
  onNavigate: (p: Page) => void;
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onNavigate, onLogin }) => {
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');
  const [otpSent, setOtpSent] = useState(false);
  const logoUrl = "https://lh3.googleusercontent.com/d/1y0CJPA67J0JpbxJADkaJdfr_0aIRB78_";



  return (
    <div className="bg-black min-h-screen flex flex-col font-sans selection:bg-brand-red/30">
      {/* Close Button */}
      <button 
        onClick={() => onNavigate(Page.Home)}
        className="fixed top-8 right-8 md:top-12 md:right-12 z-[60] size-12 md:size-14 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-white/10 transition-all group active:scale-95"
      >
        <span className="material-symbols-outlined text-2xl group-hover:rotate-90 transition-transform">close</span>
      </button>

      {/* Minimal Auth Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-8 flex items-center justify-between pointer-events-none">
        <div 
          className="flex items-center gap-3 cursor-pointer group pointer-events-auto"
          onClick={() => onNavigate(Page.Home)}
        >
          <img 
            src={logoUrl} 
            alt="Furute Logo" 
            className="h-10 md:h-12 w-auto object-contain dark:brightness-125 transition-transform group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </div>
      </header>

      <main className="flex-1 flex flex-col lg:flex-row">
        {/* Left Side: Atmospheric Branding */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-[#050505] items-center justify-center p-24">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-[-10%] right-[-10%] w-[80%] h-[80%] bg-brand-blue/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-red/10 rounded-full blur-[100px]"></div>
          </div>
          
          <div className="relative z-10 max-w-xl">
            <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Member Access</span>
            <h2 className="text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8">
              The Future of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-red">Business.</span>
            </h2>
            <p className="text-xl text-white/40 font-medium leading-relaxed mb-12">
              Access Pune's most exclusive ecosystem for entrepreneurs, leaders, and high-performance professionals.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-12 border-t border-white/10">
              <div>
                <p className="text-white text-2xl font-black mb-1">8.2k+</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Leaders Trained</p>
              </div>
              <div>
                <p className="text-white text-2xl font-black mb-1">11k+</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Lives Touched</p>
              </div>
            </div>
          </div>

          {/* Decorative Rail Text */}
          <div className="absolute left-12 bottom-12 flex items-center gap-4">
            <div className="w-12 h-px bg-white/20"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 vertical-rl rotate-180">EST. 2017</span>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 lg:p-24 bg-black relative">
          <div className="w-full max-w-md">
            <div className="mb-12">
              <img 
                src={logoUrl} 
                alt="Furute Logo" 
                className="h-16 w-auto object-contain mb-8 dark:brightness-125"
              />
              <h1 className="text-4xl font-black text-white mb-4 tracking-tight">Welcome Back.</h1>
              <p className="text-white/50 font-medium">Choose your preferred login method.</p>
            </div>

            <div className="flex mb-8 bg-white/5 p-1 rounded-2xl border border-white/5">
              <button
                onClick={() => setLoginMethod('email')}
                className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${loginMethod === 'email' ? 'bg-white text-black shadow-xl' : 'text-white/40 hover:text-white'}`}
              >
                Email
              </button>
              <button
                onClick={() => setLoginMethod('phone')}
                className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${loginMethod === 'phone' ? 'bg-white text-black shadow-xl' : 'text-white/40 hover:text-white'}`}
              >
                Phone / OTP
              </button>
            </div>

              <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
              {loginMethod === 'email' ? (
                <div className="space-y-4">
                  <div className="group">
                    <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 group-focus-within:text-brand-blue transition-colors">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      required
                      className="w-full bg-white/5 border-b border-white/10 focus:border-brand-blue py-4 text-white outline-none transition-all placeholder:text-white/10 font-medium" 
                      placeholder="name@company.com" 
                       
                    />
                  </div>

                  <div className="group">
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 group-focus-within:text-brand-red transition-colors">
                        Password
                      </label>
                      <button 
                        type="button" 
                        onClick={() => onNavigate(Page.ForgotPassword)}
                        className="text-[10px] font-black uppercase tracking-widest text-brand-red hover:text-red-400 transition-colors"
                      >
                        Forgot?
                      </button>
                    </div>
                    <div className="relative">
                      <input 
                        type="password" 
                        required
                        className="w-full bg-white/5 border-b border-white/10 focus:border-brand-red py-4 pr-12 text-white outline-none transition-all placeholder:text-white/10 font-medium" 
                        placeholder="••••••••" 
                         
                      />
                      <button className="absolute right-0 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors" type="button">
                        <span className="material-symbols-outlined text-xl">visibility</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="group">
                    <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 group-focus-within:text-brand-blue transition-colors">
                      Phone Number
                    </label>
                    <div className="flex gap-4">
                      <div className="w-20 bg-white/5 border-b border-white/10 py-4 text-white/40 text-center font-medium">+91</div>
                      <input 
                        type="tel" 
                        required
                        className="flex-1 bg-white/5 border-b border-white/10 focus:border-brand-blue py-4 text-white outline-none transition-all placeholder:text-white/10 font-medium" 
                        placeholder="98765 43210" 
                      />
                    </div>
                  </div>

                  {otpSent && (
                    <div className="group animate-in fade-in slide-in-from-top-2">
                      <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 group-focus-within:text-brand-red transition-colors">
                        Enter 6-Digit OTP
                      </label>
                      <input 
                        type="text" 
                        maxLength={6}
                        required
                        className="w-full bg-white/5 border-b border-white/10 focus:border-brand-red py-4 text-white outline-none transition-all placeholder:text-white/10 font-medium tracking-[1em] text-center" 
                        placeholder="••••••" 
                      />
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Resend in 0:59</span>
                        <button type="button" className="text-[10px] font-black text-brand-red uppercase tracking-widest hover:underline">Change Number</button>
                      </div>
                    </div>
                  )}

                  {!otpSent && (
                    <button 
                      type="button"
                      onClick={() => setOtpSent(true)}
                      className="w-full h-14 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white hover:bg-white/5 transition-all"
                    >
                      Send Verification Code
                    </button>
                  )}
                </div>
              )}

              <button 
                type="submit" 
                className="w-full h-16 bg-gradient-to-r from-brand-red to-[#D00000] text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(255,0,0,0.3)] transition-all active:scale-[0.98] shadow-[0_15px_40px_rgba(255,0,0,0.2)] flex items-center justify-center gap-3 group border border-white/10"
              >
                {otpSent ? 'Verify & Sign In' : 'Sign In'}
                <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </form>



            <div className="mt-12 pt-8 border-t border-white/5 text-center">
              <p className="text-white/30 text-[10px] font-black uppercase tracking-widest mb-4">
                Not a member yet? 
              </p>
              <button 
                onClick={() => onNavigate(Page.SignUp)}
                className="w-full h-14 border border-white/10 text-white font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-white/5 transition-all"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;