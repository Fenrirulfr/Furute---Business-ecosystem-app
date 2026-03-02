import React, { useState } from 'react';
import { Page } from '../types';
import Footer from '../components/Footer';
import YouTubePlayer from '../components/YouTubePlayer';

const writtenTestimonials = [
  { name: 'Lucky Surana', role: 'Industrialist & Educationist', text: 'After doing Business Insights I stared with a small business of Mobile Repairing Shop. Here I implemented the formula of by Ashay Sir. Now my turnover has increased 25% within a year. My new office (400 sq ft) is a reflection of my success.', avatar: 'https://furute.in/wp-content/uploads/2017/04/Lucky-Surana.jpg' },
  { name: 'Avant Parmar', role: 'Mobile Shop', text: 'Insights thought me how to handle the adverse situations & making it in own favor. I work on the agenda of goal setting that gradually moves towards success. Time management theory of Ashay sir made my personal life more balanced.', avatar: 'https://furute.in/wp-content/uploads/2017/04/Avant-Parmar.jpg' },
  { name: 'Manish Kalantri', role: 'Corporate vendor / supplier', text: 'I achieved success in my business because I applied the process how to relate With My Clients & Workers to make them understand, that I learnt from Ashay Sir. Thus the communication builds up & my business has developed more.', avatar: 'https://furute.in/wp-content/uploads/2017/04/Manish-Kalantri.jpg' },
  { name: 'Ankit Sakhariya', role: 'Sakhariya Gold Jewelers', text: 'I have only one business before joining Insights Program. Ashay sir has shown me the direction regarding my strength. By using the lesson of “caps” and “circle of circumference “I have become able to start three other business.', avatar: 'https://furute.in/wp-content/uploads/2017/04/Ankit-Sakhariya.jpg' },
  { name: 'Viraj Parmar', role: 'Construction Services & Software', text: 'Ashay sir has changed my perspective of life whether it would be professional or personal. I have become more optimists about future. On the basis of self confidence & positive attitude , trying to boost my business as much as possible. I know Sir will be there in any kind of need.', avatar: 'https://furute.in/wp-content/uploads/2017/04/Viraj-Parmar.jpg' },
  { name: 'Vikram Jain', role: 'Director at KONIFER', text: 'Ashay sir is always inspiring and giving confidence to me for doing business in better ways. I have learned lots of tings how to boost my business .I keep on trying to implement all these and hoping the best result will come soon.', avatar: 'https://furute.in/wp-content/uploads/2017/04/Vikram-Jain.jpg' },
  { name: 'Anand Buchade', role: 'Director at AB Landmarks', text: 'Coming in contact with Ashay sir the way of thinking towards life is totally changed I have become more positive and peaceful at family & business. And one most important thing I have started with my own firm of Interior Designing, with the name Unique Interiors.', avatar: 'https://furute.in/wp-content/uploads/2017/04/Anand-Buchade.jpg' },
  { name: 'Khushboo Salunke', role: 'Director at Unique Interior', text: 'I Achieved the Knowledge of Team Building & right investment from Ashay sir,by which I implemented my business & it has Grown Immensely which results into good profits and become a brand.', avatar: 'https://furute.in/wp-content/uploads/2017/04/Khushboo-Salunke.jpg' },
  { name: 'Akshat Oswal', role: 'Co-Founder at Tech Innovance', text: 'After doing the Insight course I am able to start with a new business successfully .In his case Ashay Sir’s lesion ‘Decision making Strength’ helped me undoubtedly. This skill proved me that it is very important at the time of managing difficult situation.', avatar: 'https://furute.in/wp-content/uploads/2017/04/Akshat-Oswal.jpg' },
  { name: 'Rahul Ramsina', role: 'Owner at Rajsi Technologies', text: 'I see myself more confident after attending Insights sessions. As a proprietor I worked on customer satisfaction a lot. It is my success that now my clients are more satisfied & happy with my service.', avatar: 'https://furute.in/wp-content/uploads/2017/04/Rahul-Ramsina.jpg' },
  { name: 'Kirtikumar Shah', role: 'Founder at Get Set Go Cab', text: 'After Insights, there is a balance that has come now. Earlier, it used to be difficult to know and realize what my priority is or what is more important at what time, but now things have changed. ”I, HERE, RIGHT NOW IN PRESENT CONTINUOUS” has helped a lot in both- personal and professional life.', avatar: 'https://furute.in/wp-content/uploads/2017/04/Kirtikumar-Shah.jpg' },
  { name: 'Anjali Parmar', role: 'German Professor', text: 'I had understood the “Attachment and Detachment” very carefully what I really need to implement for my life. I had completed my c.s and LLB and started my own proprietorship as a consultant. Thanks to Ashay Sir & Insights.', avatar: 'https://furute.in/wp-content/uploads/2017/04/Anjali-Parmar.jpg' },
  { name: 'Surabhi Mehta', role: '', text: 'After doing the Insight batch I have started understanding myself better, modified the way of doing business and living life. Now I always act with a ready plan for my business & it has grown up to double turnover.', avatar: 'https://furute.in/wp-content/uploads/2017/04/Surbhi-Mehta.jpg' },
  { name: 'Rohit Pasalkar', role: 'Owner at Shree Designs', text: 'I have achieved stability before the expected time in business by good communication & hard work. My Personal life was too disturbed but INSIGHTS, Ashay Sir & his competence helped me to overcome all the obstacles on the way to my success Professionally & Personally.', avatar: 'https://furute.in/wp-content/uploads/2017/04/Rohit-Pasalkar.jpg' },
  { name: 'Darpan Parmar', role: 'Construction Business', text: 'The idea of playing with my core strength that is manufacturing of high quality furniture, has clicked me through Insights Program. Now the production & profit has increased 10 times more than last 3 years. Hope for making more profitable in future.', avatar: 'https://furute.in/wp-content/uploads/2016/11/Darpan-Parmar.jpg' },
  { name: 'Jeetendra Bamboli', role: 'Proprietor at The Comfort Zone', text: 'To grow my Business I need to socialize like minded people with whom I can discuss Business Strategies that I learned it from Ashay Sir & INSIGHT. I worked on it. Apparently there has been a growth of about 30% in 1 year.', avatar: 'https://furute.in/wp-content/uploads/2016/11/Jeetendra-Bamboli.jpg' },
  { name: 'Maithili Jadhav', role: 'Owner at Shree Designs', text: 'The teaching of Ashay Sir helped me to adopt the” ATTACH- DETACH” process, this helps me a lot in dealing with the daily issues. Now I only focus on those things that are important & relevant with my work. As a result my business uplifted than before.', avatar: 'https://furute.in/wp-content/uploads/2016/11/Maithili-Jadhav.jpg' },
  { name: 'Mehul Ramsina', role: 'Interior Designer', text: 'After doing Insight class I came to know one thing that a how to get success through a proper plan. I have improved my life along with business with the help of proper plan. The best thing is I made my own house & increased the business more than earlier.', avatar: 'https://furute.in/wp-content/uploads/2017/04/Mehul-Ramsina.jpg' },
  { name: 'Mansukh Sonigara', role: 'Distributor of Home & Kitchen Appliances', text: 'According to Ashay Sir’s guidance I have shafted my position at my business. Now I work as a STRUCTURAL CONSULTANT. By supervising, team building & well management I uplift my business growth almost 80% every year. I completed my dream tour to Us that was hardly possible before.', avatar: 'https://furute.in/wp-content/uploads/2017/04/Mansukh-Sonigra.jpg' },
  { name: 'Rakesh Jain', role: 'Structural Consultant', text: 'Before doing the Insight batch I took all responsibilities of my business alone, but getting knowledge of work management I distributed it by appointing employees. Their team work has increased my efficiency more than before. That is why business growth has also lifted up remarkably.', avatar: 'https://furute.in/wp-content/uploads/2017/04/Rakesh-Jain.jpg' },
  { name: 'Dilip Raka', role: 'Industrial RO Components', text: 'I was a negative person totally and gone into depression. After attending Insights I have bounced back from my negativity & depression. Now I have just started my business with a tight agenda of achieving my goals.', avatar: 'https://furute.in/wp-content/uploads/2017/04/Dilip-Raka.jpg' },
  { name: 'Chirag Sheth', role: '', text: 'After doing the Insight program my mind set has totally changed, especially emotional maturity has become more improved that has a good impact in my professional life also. This course helps me a lot to bounce me back to success from failure.', avatar: 'https://furute.in/wp-content/uploads/2017/04/Chirag-Sheth.jpg' },
  { name: 'Sumeet Desarda', role: 'Proprietor at AASRA Enterprises', text: 'Before joining the Insight program or meeting Ashay sir I was very whimsical in nature. I didn’t have consistency in any kind of activities. But now I got stability to perform my duties not only that I have become more social than earlier.', avatar: 'https://furute.in/wp-content/uploads/2017/04/Sumeet-Desarda.jpg' },
  { name: 'Sujay Shah', role: 'Founder at Jay Excavators Pvt Ltd', text: 'Before joining the Insight Class my life was so disordered. Even I didn’t take care of my health. But after getting the knowledge of a peaceful, happy life I modified my life style top to bottom. And now I am very satisfied in all aspect of life, professionally & personally .', avatar: 'https://furute.in/wp-content/uploads/2017/04/Sumeet-Desarda.jpg' },
];

const videoTestimonials = [
  { id: 'i-Qe4F17hKc', list: 'PLvleyTHoI4V5vQP_4TKGCjyqGhSi37EJT', title: 'Soham Oswal on Exponential Growth', author: 'Soham Oswal' },
  { id: 'Dp65MGhze3I', list: 'PLvleyTHoI4V5vQP_4TKGCjyqGhSi37EJT', title: 'Kalpesh Kavediya on Business Transformation', author: 'Kalpesh Kavediya' },
  { id: '2ofM34EwKJo', list: 'PLvleyTHoI4V5vQP_4TKGCjyqGhSi37EJT', title: 'Manoj Shah Shares His Success Story', author: 'Manoj Shah' },
  { id: 'S9fjt9HVf6Q', list: 'PLvleyTHoI4V5vQP_4TKGCjyqGhSi37EJT', title: 'Video Testimonial', author: 'Furute Client' },
  { id: 'NPOPqemA2DM', list: 'PLvleyTHoI4V5vQP_4TKGCjyqGhSi37EJT', title: 'Video Testimonial', author: 'Furute Client' },
  { id: 'Q1_hY5QzKTw', list: 'PLvleyTHoI4V5vQP_4TKGCjyqGhSi37EJT', title: 'Video Testimonial', author: 'Furute Client' },
  { id: 'Xt2t3SDIzlg', list: 'PLvleyTHoI4V5vQP_4TKGCjyqGhSi37EJT', title: 'Video Testimonial', author: 'Furute Client' },
  { id: 'HrTU2-hsM_Q', list: 'PLvleyTHoI4V5vQP_4TKGCjyqGhSi37EJT', title: 'Video Testimonial', author: 'Furute Client' },
  { id: '6IL5OBUXbx4', list: 'PLvleyTHoI4V5vQP_4TKGCjyqGhSi37EJT', title: 'Video Testimonial', author: 'Furute Client' },
  { id: '44IkwGh68vM', list: 'PLvleyTHoI4V5vQP_4TKGCjyqGhSi37EJT', title: 'Video Testimonial', author: 'Furute Client' },
  { id: 'kz6_tki0V5E', list: 'PLvleyTHoI4V5vQP_4TKGCjyqGhSi37EJT', title: 'Video Testimonial', author: 'Furute Client' },
  { id: 'kQtz9rP5wZw', list: 'PLvleyTHoI4V5vQP_4TKGCjyqGhSi37EJT', title: 'Video Testimonial', author: 'Furute Client' },
  { id: 'mbW1sL7JqPE', list: 'PLvleyTHoI4V5vQP_4TKGCjyqGhSi37EJT', title: 'Video Testimonial', author: 'Furute Client' },
  { id: 'XYRl-aFJn3g', list: 'PLvleyTHoI4V5vQP_4TKGCjyqGhSi37EJT', title: 'Video Testimonial', author: 'Furute Client' },
  { id: 'Z38lPaYxvaQ', list: 'PLvleyTHoI4V5vQP_4TKGCjyqGhSi37EJT', title: 'Video Testimonial', author: 'Furute Client' },
  { id: '-Lq-GKH9SXA', list: 'PLvleyTHoI4V5vQP_4TKGCjyqGhSi37EJT', title: 'Video Testimonial', author: 'Furute Client' },
  { id: 'K5FXeVpa-IY', list: 'PLvleyTHoI4V5vQP_4TKGCjyqGhSi37EJT', title: 'Video Testimonial', author: 'Furute Client' },
  { id: 'uZd8lxtBjao', list: 'PLvleyTHoI4V5vQP_4TKGCjyqGhSi37EJT', title: 'Video Testimonial', author: 'Furute Client' },
  { id: 'X6gEkqHWM7I', list: 'PLvleyTHoI4V5vQP_4TKGCjyqGhSi37EJT', title: 'Video Testimonial', author: 'Furute Client' },
  { id: 'wzGq9yhLGE0', list: 'PLvleyTHoI4V5vQP_4TKGCjyqGhSi37EJT', title: 'Video Testimonial', author: 'Furute Client' },
  { id: 'DCpQ7mDVPIg', list: 'PLvleyTHoI4V5vQP_4TKGCjyqGhSi37EJT', title: 'Video Testimonial', author: 'Furute Client' },
  { id: 'fDcHxhA2MxA', list: 'PLvleyTHoI4V5vQP_4TKGCjyqGhSi37EJT', title: 'Video Testimonial', author: 'Furute Client' },
  { id: 'jDkAQbuEQlw', list: 'PLvleyTHoI4V5vQP_4TKGCjyqGhSi37EJT', title: 'Video Testimonial', author: 'Furute Client' },
  { id: 'Zcid3V9yPlQ', list: 'PLvleyTHoI4V5vQP_4TKGCjyqGhSi37EJT', title: 'Video Testimonial', author: 'Furute Client' }
];

interface TestimonialsProps {
  onNavigate: (p: Page) => void;
  initialView?: 'written' | 'video';
}

const Testimonials: React.FC<TestimonialsProps> = ({ onNavigate, initialView = 'written' }) => {
  const [view, setView] = useState<'written' | 'video'>(initialView);
  return (
    <div className="bg-transparent dark:bg-black text-accent-blue dark:text-white min-h-screen transition-colors duration-500">
      {/* Hero Section */}
      <section className="container-fluid section-padding text-center">
        <h1 className="text-hero text-accent-blue dark:text-white mb-8">
          What Entrepreneurs Say About Furute
        </h1>
        <p className="text-xl md:text-2xl text-[#637688] dark:text-slate-400 font-semibold mb-12 leading-relaxed max-w-3xl mx-auto">
          Real experiences from business leaders, founders and professionals.
        </p>
        <div className="inline-flex bg-white/80 dark:bg-white/10 rounded-full border border-blue-100 dark:border-white/10 p-2 card-shadow">
          <button 
            onClick={() => setView('written')}
            className={`px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest transition-colors ${view === 'written' ? 'bg-brand-blue dark:bg-brand-red text-white shadow-md' : 'text-accent-blue/60 dark:text-white/60'}`}>
            Written Testimonials
          </button>
          <button 
            onClick={() => setView('video')}
            className={`px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest transition-colors ${view === 'video' ? 'bg-brand-blue dark:bg-brand-red text-white shadow-md' : 'text-accent-blue/60 dark:text-white/60'}`}>
            Video Testimonials
          </button>
        </div>
      </section>

      {view === 'written' && (
      <section className="container-fluid py-16 text-left">
        <div className="mb-16 sm:mb-20">
          <span className="text-brand-blue dark:text-brand-red font-black tracking-[0.3em] uppercase text-[10px]">Voices of Achievement</span>
          <h2 className="text-display mt-8 text-accent-blue dark:text-white">Real Results. <br/>Real Founders.</h2>
          <p className="text-[#637688] dark:text-gray-400 mt-8 text-xl sm:text-2xl font-semibold max-w-3xl">Our alumni are the backbone of Pune's rising business ecosystem. Here is what they have to say about the Furute experience.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {writtenTestimonials.map((testimonial, index) => (
            <div key={index} className="p-8 md:p-10 rounded-3xl md:rounded-[3.5rem] bg-white/95 dark:bg-white/5 border border-blue-50 dark:border-white/10 flex flex-col justify-between hover:shadow-vibrant transition-all group relative card-shadow">
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
                <p className="text-lg font-semibold text-accent-blue dark:text-white/90 mb-8 leading-relaxed">{testimonial.text}</p>
                <div className="flex items-center gap-6 relative z-10">
                <div className="size-16 rounded-2xl bg-cover bg-center border-4 border-white/50 dark:border-slate-800 shadow-xl" style={{ backgroundImage: `url(${testimonial.avatar})` }} role="img" aria-label={`Avatar of ${testimonial.name}`}></div>
                <div>
                  <h4 className="text-lg font-black text-accent-blue dark:text-white leading-none mb-2">{testimonial.name}</h4>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      )}

      {view === 'video' && (
      <section id="video" className="container-fluid py-16 text-center">
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
      </section>
      )}

      {/* Final CTA */}
      <section className="section-padding container-fluid text-center bg-transparent">
         <div className="bg-accent-blue dark:bg-brand-red rounded-3xl md:rounded-[5rem] p-12 sm:p-16 lg:p-24 relative overflow-hidden shadow-4xl text-white">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[140px] -mr-96 -mt-96"></div>
            <div className="relative z-10">
              <h2 className="text-display mb-8">Work With Furute</h2>
              <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10">
                <button onClick={() => onNavigate(Page.Contact)} className="h-20 sm:h-24 px-12 sm:px-16 bg-white text-accent-blue dark:text-brand-red rounded-[1.5rem] font-black uppercase tracking-widest text-[12px] hover:scale-105 active:scale-95 transition-all shadow-4xl">Schedule a Consultation</button>
              </div>
            </div>
         </div>
      </section>

      <Footer onNavigate={onNavigate} currentPage={Page.Home} />
    </div>
  );
};

export default Testimonials;
