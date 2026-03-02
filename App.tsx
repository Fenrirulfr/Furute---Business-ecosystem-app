
import React, { useState, useEffect } from 'react';
import { Page, User } from './types';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import ProgramDetail from './pages/ProgramDetail';
import Community from './pages/Community';
import Marketplace from './pages/Marketplace';
import PRServices from './pages/PRServices';
import Subscription from './pages/Subscription';
import Retreats from './pages/Retreats';
import Mentoring from './pages/Mentoring';
import Podcast from './pages/Podcast';
import About from './pages/About';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Payments from './pages/Payments';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import ComingSoon from './pages/ComingSoon';
import Careers from './pages/Careers';
import PressKit from './pages/PressKit';
import Partners from './pages/Partners';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import { updateMetaTags, injectSchema } from './utils/seo';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedProgramId, setSelectedProgramId] = useState<string | null>(null);
  const [initialTestimonialView, setInitialTestimonialView] = useState<'written' | 'video'>('written');

  const user: User = {
    name: 'Alex Johnson',
    role: 'Pro Member',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFARQ1Zo8Kk8yJPjl6B8V7k3419dURNzcj4g42uZpwTVHdVeclBve559TZIj8UDY7_orHaFPxCD-wA9Ek8PIUtnU0zvylyzFb0IX-OUpuLY1rtRBvsvt2AsqBAVA69bg_4AHdUPMJ4czCkPyToMkh5iMxGFz5GelrYK4GbrgA2yaTpIr_Xix6mDGy26L4TrubDBhytrBe00g7wxBgDhrrVMo7i7TOIFnGZ3EkYCbRYxrN_eAex3GcDOsOqCd9LTfFgU98LrrKcXl8',
    credits: 1240,
    progress: 85
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDarkMode]);

  // SEO: Update meta tags and schema on page change
  useEffect(() => {
    updateMetaTags(currentPage);
    injectSchema(currentPage);

    if (currentPage === Page.Testimonials && window.location.hash === '#video') {
      setInitialTestimonialView('video');
    } else {
      setInitialTestimonialView('written');
    }
  }, [currentPage]);

  const navigate = (page: Page, id?: string) => {
    if (id) {
      if (id.includes('#')) {
        const [pageId, hash] = id.split('#');
        setSelectedProgramId(pageId);
        if (hash === 'video') {
          setInitialTestimonialView('video');
        }
      } else {
        setSelectedProgramId(id);
      }
    }
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home: return <Home onNavigate={navigate} />;
      case Page.Dashboard: return <Dashboard user={user} onNavigate={navigate} />;
      case Page.Courses: return <Courses onNavigate={navigate} />;
      case Page.ProgramDetail: return <ProgramDetail programId={selectedProgramId} onNavigate={navigate} />;
      case Page.Community: return <Community onNavigate={navigate} />;
      case Page.Marketplace: return <Marketplace onNavigate={navigate} />;
      case Page.PRServices: return <PRServices onNavigate={navigate} />;
      case Page.Subscription: return <Subscription onNavigate={navigate} />;
      case Page.Retreats: return <Retreats onNavigate={navigate} />;
      case Page.Mentoring: return <Mentoring onNavigate={navigate} />;
      case Page.Podcast: return <Podcast onNavigate={navigate} />;
      case Page.About: return <About onNavigate={navigate} />;
      case Page.Contact: return <Contact onNavigate={navigate} />;
      case Page.Profile: return <Profile user={user} onNavigate={navigate} />;
      case Page.Payments: return <Payments onNavigate={navigate} />;
      case Page.Careers: return <Careers onNavigate={navigate} />;
      case Page.PressKit: return <PressKit onNavigate={navigate} />;
      case Page.Partners: return <Partners onNavigate={navigate} />;
      case Page.Privacy: return <PrivacyPolicy onNavigate={navigate} />;
      case Page.Terms: return <TermsOfService onNavigate={navigate} />;
      case Page.Cookie: return <CookiePolicy onNavigate={navigate} />;
      case Page.Login: return <Login onNavigate={navigate} onLogin={() => { setIsLoggedIn(true); navigate(Page.Dashboard); }} />;
      case Page.SignUp: return <SignUp onNavigate={navigate} />;
      case Page.ForgotPassword: return <ForgotPassword onNavigate={navigate} />;
      case Page.ComingSoon: return <ComingSoon onNavigate={navigate} />;
      case Page.Testimonials: return <Testimonials onNavigate={navigate} initialView={initialTestimonialView} />;
      case Page.Blog: return <Blog onNavigate={navigate} />;
      default: return <Home onNavigate={navigate} />;
    }
  };

  const showSidebar = [Page.Dashboard, Page.Profile, Page.Payments, Page.ComingSoon].includes(currentPage) && isLoggedIn;
  const hideNavbar = [Page.Login, Page.SignUp, Page.ForgotPassword].includes(currentPage);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {!hideNavbar && (
        <Navbar 
          currentPage={currentPage} 
          onNavigate={navigate} 
          isLoggedIn={isLoggedIn} 
          isDarkMode={isDarkMode}
          toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
          user={user}
        />
      )}
      
      <div className={`flex flex-1 relative overflow-x-hidden ${!hideNavbar ? 'pt-20 md:pt-24 xl:pt-32' : ''}`}>
        {showSidebar && <Sidebar currentPage={currentPage} onNavigate={navigate} onLogout={() => { setIsLoggedIn(false); navigate(Page.Home); }} />}
        <main className={`flex-1 w-full ${showSidebar ? 'lg:ml-72' : ''} transition-all duration-300`}>
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

export default App;
