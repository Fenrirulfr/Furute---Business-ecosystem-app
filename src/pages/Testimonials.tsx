import React, { useState, useEffect } from 'react';
import { Page, Testimonial } from '../../types';
import YouTubePlayer from '../../components/YouTubePlayer';

interface TestimonialsProps {
  onNavigate: (page: Page, id?: string) => void;
  initialView?: 'written' | 'video';
}

const allTestimonials: Testimonial[] = [
  {
    quote: "After doing Business Insights I started with a small business of Mobile Repairing Shop. Here I implemented the formula by Ashay Sir. Now my turnover has increased 25% within a year. My new office (400 sq ft) is a reflection of my success.",
    author: "Lucky Surana",
    role: "Industrialist & Educationist",
    avatar: "https://furute.in/wp-content/uploads/2017/04/Lucky-Surana.jpg"
  },
  {
    quote: "Insights taught me how to handle the adverse situations & making it in my own favor. I work on the agenda of goal setting that gradually moves towards success. Time management theory of Ashay sir made my personal life more balanced.",
    author: "Avant Parmar",
    role: "Mobile Shop Owner",
    avatar: "https://furute.in/wp-content/uploads/2017/04/Avant-Parmar.jpg"
  },
  {
    quote: "I achieved success in my business because I applied the process how to relate with my clients & workers to make them understand, that I learnt from Ashay Sir. Thus the communication builds up & my business has developed more.",
    author: "Manish Kalantri",
    role: "Corporate Vendor / Supplier",
    avatar: "https://furute.in/wp-content/uploads/2017/04/Manish-Kalantri.jpg"
  },
  {
    quote: "I have only one business before joining Insights Program. Ashay sir has shown me the direction regarding my strength. By using the lesson of “caps” and “circle of circumference” I have become able to start three other businesses.",
    author: "Ankit Sakhariya",
    role: "Sakhariya Gold Jewelers",
    avatar: "https://furute.in/wp-content/uploads/2017/04/Ankit-Sakhariya.jpg"
  },
  {
    quote: "Ashay sir has changed my perspective of life whether it would be professional or personal. I have become more optimistic about the future. On the basis of self confidence & positive attitude, I am boosting my business as much as possible.",
    author: "Viraj Parmar",
    role: "Construction Services & Software",
    avatar: "https://furute.in/wp-content/uploads/2017/04/Viraj-Parmar.jpg"
  },
  {
    quote: "Ashay sir is always inspiring and giving confidence to me for doing business in better ways. I have learned lots of things how to boost my business. I keep on trying to implement all these and hoping the best result will come soon.",
    author: "Vikram Jain",
    role: "Director at KONIFER",
    avatar: "https://furute.in/wp-content/uploads/2017/04/Vikram-Jain.jpg"
  },
  {
    quote: "Coming in contact with Ashay sir the way of thinking towards life is totally changed I have become more positive and peaceful at family & business. And one most important thing I have started with my own firm of Interior Designing, with the name Unique Interiors.",
    author: "Anand Buchade",
    role: "Director at AB Landmarks",
    avatar: "https://furute.in/wp-content/uploads/2017/04/Anand-Buchade.jpg"
  },
  {
    quote: "I Achieved the Knowledge of Team Building & right investment from Ashay sir, by which I implemented my business & it has Grown Immensely which results into good profits and become a brand.",
    author: "Khushboo Salunke",
    role: "Director at Unique Interior",
    avatar: "https://furute.in/wp-content/uploads/2017/04/Khushboo-Salunke.jpg"
  },
  {
    quote: "After doing the Insight course I am able to start with a new business successfully. In his case Ashay Sir’s lesion ‘Decision making Strength’ helped me undoubtedly. This skill proved me that it is very important at the time of managing difficult situation.",
    author: "Akshat Oswal",
    role: "Co-Founder at Tech Innovance",
    avatar: "https://furute.in/wp-content/uploads/2017/04/Akshat-Oswal.jpg"
  },
  {
    quote: "I see myself more confident after attending Insights sessions. As a proprietor I worked on customer satisfaction a lot. It is my success that now my clients are more satisfied & happy with my service.",
    author: "Rahul Ramsina",
    role: "Owner at Rajsi Technologies",
    avatar: "https://furute.in/wp-content/uploads/2017/04/Rahul-Ramsina.jpg"
  },
  {
    quote: "After Insights, there is a balance that has come now. Earlier, it used to be difficult to know and realize what my priority is or what is more important at what time, but now things have changed. ”I, HERE, RIGHT NOW IN PRESENT CONTINUOUS” has helped a lot in both- personal and professional life.",
    author: "Kirtikumar Shah",
    role: "Founder at Get Set Go Cab",
    avatar: "https://furute.in/wp-content/uploads/2017/04/Kirtikumar-Shah.jpg"
  },
  {
    quote: "I had understood the “Attachment and Detachment” very carefully what I really need to implement for my life. I had completed my c.s and LLB and started my own proprietorship as a consultant. Thanks to Ashay Sir & Insights.",
    author: "Anjali Parmar",
    role: "German Professor",
    avatar: "https://furute.in/wp-content/uploads/2017/04/Anjali-Parmar.jpg"
  },
  {
    quote: "After doing the Insight batch I have started understanding myself better, modified the way of doing business and living life. Now I always act with a ready plan for my business & it has grown up to double turnover.",
    author: "Surabhi Mehta",
    role: "Entrepreneur",
    avatar: "https://furute.in/wp-content/uploads/2017/04/Surabhi-Mehta.jpg"
  },
  {
    quote: "I have achieved stability before the expected time in business by good communication & hard work. My Personal life was too disturbed but INSIGHTS, Ashay Sir & his competence helped me to overcome all the obstacles on the way to my success Professionally & Personally.",
    author: "Rohit Pasalkar",
    role: "Owner at Shree Designs",
    avatar: "https://furute.in/wp-content/uploads/2017/04/Rohit-Pasalkar.jpg"
  },
  {
    quote: "The idea of playing with my core strength that is manufacturing of high quality furniture, has clicked me through Insights Program. Now the production & profit has increased 10 times more than last 3 years. Hope for making more profitable in future.",
    author: "Darpan Parmar",
    role: "Construction Business",
    avatar: "https://furute.in/wp-content/uploads/2017/04/Darpan-Parmar.jpg"
  },
  {
    quote: "To grow my Business I need to socialize like minded people with whom I can discuss Business Strategies that I learned it from Ashay Sir & INSIGHT. I worked on it. Apparently there has been a growth of about 30% in 1 year.",
    author: "Jeetendra Bamboli",
    role: "Proprietor at The Comfort Zone",
    avatar: "https://furute.in/wp-content/uploads/2017/04/Jeetendra-Bamboli.jpg"
  },
  {
    quote: "The teaching of Ashay Sir helped me to adopt the” ATTACH- DETACH” process, this helps me a lot in dealing with the daily issues. Now I only focus on those things that are important & relevant with my work. As a result my business uplifted than before.",
    author: "Maithili Jadhav",
    role: "Owner at Shree Designs",
    avatar: "https://furute.in/wp-content/uploads/2017/04/Maithili-Jadhav.jpg"
  },
  {
    quote: "After doing Insight class I came to know one thing that a how to get success through a proper plan. I have improved my life along with business with the help of proper plan. The best thing is I made my own house & increased the business more than earlier.",
    author: "Mehul Ramsina",
    role: "Interior Designer",
    avatar: "https://furute.in/wp-content/uploads/2017/04/Mehul-Ramsina.jpg"
  },
  {
    quote: "According to Ashay Sir’s guidance I have shafted my position at my business. Now I work as a STRUCTURAL CONSULTANT. By supervising, team building & well management I uplift my business growth almost 80% every year. I completed my dream tour to Us that was hardly possible before.",
    author: "Mansukh Sonigara",
    role: "Distributor of Home & Kitchen Appliances",
    avatar: "https://furute.in/wp-content/uploads/2017/04/Mansukh-Sonigara.jpg"
  },
  {
    quote: "Before doing the Insight batch I took all responsibilities of my business alone, but getting knowledge of work management I distributed it by appointing employees. Their team work has increased my efficiency more than before. That is why business growth has also lifted up remarkably.",
    author: "Rakesh Jain",
    role: "Structural Consultant",
    avatar: "https://furute.in/wp-content/uploads/2017/04/Rakesh-Jain.jpg"
  },
  {
    quote: "I was a negative person totally and gone into depression. After attending Insights I have bounced back from my negativity & depression. Now I have just started my business with a tight agenda of achieving my goals.",
    author: "Dilip Raka",
    role: "Industrial RO Components",
    avatar: "https://furute.in/wp-content/uploads/2017/04/Dilip-Raka.jpg"
  },
  {
    quote: "After doing the Insight program my mind set has totally changed, especially emotional maturity has become more improved that has a good impact in my professional life also. This course helps me a lot to bounce me back to success from failure.",
    author: "Chirag Sheth",
    role: "Entrepreneur",
    avatar: "https://furute.in/wp-content/uploads/2017/04/Chirag-Sheth.jpg"
  },
  {
    quote: "Before joining the Insight program or meeting Ashay sir I was very whimsical in nature. I didn’t have consistency in any kind of activities. But now I got stability to perform my duties not only that I have become more social than earlier.",
    author: "Sumeet Desarda",
    role: "Proprietor at AASRA ENTERPRISES",
    avatar: "https://furute.in/wp-content/uploads/2017/04/Sumeet-Desarda.jpg"
  },
  {
    quote: "Before joining the Insight Class my life was so disordered. Even I didn’t take care of my health. But after getting the knowledge of a peaceful, happy life I modified my life style top to bottom. And now I am very satisfied in all aspect of life, professionally & personally.",
    author: "Sujay Shah",
    role: "Founder at Jay Excavators Pvt Ltd",
    avatar: "https://furute.in/wp-content/uploads/2017/04/Sujay-Shah.jpg"
  },
  {
    quote: "The idea of playing with my core strength that is manufacturing of high quality furniture, has clicked me through Insights Program. Now the production & profit has increased 10 times more than last 3 years. Hope for making more profitable in future.",
    author: "Kamlesh Parmar",
    role: "Construction, Cloth Retail, Manufacturing, Bakery, Hotel Business",
    avatar: "https://furute.in/wp-content/uploads/2017/04/Kamlesh-Parmar.jpg"
  }
];

const videoTestimonials = [
  { id: 'i-Qe4F17hKc', list: 'PLvleyTHoI4V5vQP_4TKGCjyqGhSi37EJT', title: 'Soham Oswal on Exponential Growth', author: 'Soham Oswal' },
  { id: 'Dp65MGhze3I', list: 'PLvleyTHoI4V5vQP_4TKGCjyqGhSi37EJT', title: 'Kalpesh Kavediya on Business Transformation', author: 'Kalpesh Kavediya' },
  { id: '2ofM34EwKJo', list: 'PLvleyTHoI4V5vQP_4TKGCjyqGhSi37EJT', title: 'Manoj Shah Shares His Success Story', author: 'Manoj Shah' }
];

const Testimonials: React.FC<TestimonialsProps> = ({ onNavigate, initialView = 'written' }) => {
  const [activeTab, setActiveTab] = useState<'written' | 'video'>(initialView);

  useEffect(() => {
    setActiveTab(initialView);
  }, [initialView]);

  return (
    <div className="min-h-screen bg-transparent dark:bg-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-accent-blue dark:text-white tracking-tighter leading-tight">Client Success Stories</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Hear directly from the entrepreneurs who have transformed their businesses with Furute.</p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm rounded-full p-2 flex space-x-2 border border-blue-100 dark:border-white/10 shadow-soft">
            <button
              onClick={() => setActiveTab('written')}
              className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === 'written' ? 'bg-brand-blue text-white shadow-md' : 'text-gray-700 dark:text-gray-300 hover:bg-white/70 dark:hover:bg-zinc-700'}`}
            >
              Written Testimonials
            </button>
            <button
              onClick={() => setActiveTab('video')}
              className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === 'video' ? 'bg-brand-blue text-white shadow-md' : 'text-gray-700 dark:text-gray-300 hover:bg-white/70 dark:hover:bg-zinc-700'}`}
            >
              Video Testimonials
            </button>
          </div>
        </div>

        {activeTab === 'written' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTestimonials.map((t, i) => (
              <div key={i} className="p-8 md:p-10 rounded-3xl md:rounded-[3.5rem] bg-white/95 dark:bg-white/5 border border-blue-50 dark:border-white/10 flex flex-col justify-between hover:shadow-vibrant transition-all group relative overflow-hidden card-shadow">
                <div className="absolute -top-6 -right-6 text-[180px] font-black text-blue-50 dark:text-white/5 pointer-events-none select-none italic leading-none opacity-60 group-hover:opacity-100 transition-opacity">
                  "
                </div>
                <div className="relative z-10">
                  <p className="text-lg md:text-xl text-accent-blue dark:text-gray-300 font-bold leading-relaxed mb-12">
                    {t.quote}
                  </p>
                </div>
                <div className="flex items-center gap-6 relative z-10">
                  <div className="size-16 rounded-2xl bg-cover bg-center border-4 border-white/50 dark:border-slate-800 shadow-xl" style={{ backgroundImage: `url(${t.avatar})` }} role="img" aria-label={`Avatar of ${t.author}`}></div>
                  <div>
                    <h4 className="text-lg font-black text-accent-blue dark:text-white leading-none mb-2">{t.author}</h4>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'video' && (
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
        )}
      </div>
    </div>
  );
};

export default Testimonials;
