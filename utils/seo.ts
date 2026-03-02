
import { Page } from '../types';

interface MetaData {
    title: string;
    description: string;
    keywords: string;
}

// SEO metadata for each page - Optimized for Search and Generative Engines (GEO)
const pageMetaData: Record<string, MetaData> = {
  [Page.Home]: {
    title: "Furute | Business Ecosystem for Entrepreneurs & Leadership Growth",
    description: "Furute is a business ecosystem platform offering mentorship, consulting marketplace, leadership training, PR services, and corporate retreats for entrepreneurs.",
    keywords: "business ecosystem, entrepreneur mentorship, leadership training, consulting marketplace, corporate retreats, PR services"
  },
  [Page.About]: {
    title: 'About Furute | Entrepreneur Growth & Leadership Platform',
    description: "Learn how Furute builds business leaders through mentorship, consulting, community, and ecosystem-driven growth.",
    keywords: "about Furute, business leadership, entrepreneur growth, startup ecosystem, mentorship platform"
  },
  [Page.Courses]: {
    title: 'Business Courses for Entrepreneurs | Furute',
    description: 'Structured business courses designed for founders, professionals, and leaders. Focus on clarity, execution, and leadership systems.',
    keywords: "business courses, entrepreneur training, leadership programs, cohort learning, startup courses"
  },
  [Page.ProgramDetail]: {
    title: 'Business Insights & Leadership Training | Furute Flagship Program',
    description: 'Deep dive into Furute\'s flagship 12-week leadership development program. Architect your business excellence with proven frameworks, peer learning, and expert guidance in Pune.',
    keywords: "Business Insights program, leadership training Pune, entrepreneurship curriculum, business scaling framework"
  },
  [Page.Mentoring]: {
    title: '1:1 Business Mentoring with Ashay Shah | Elite Coaching in Pune',
    description: 'Apply for exclusive 1:1 mentorship with Ashay Shah. Personalized life coaching and business strategy for founders generating ₹50L+ revenue. Align your mindset for market dominance.',
    keywords: "1:1 business mentoring, Ashay Shah coaching, executive coaching Pune, life coaching for entrepreneurs, business strategy consultant"
  },
  [Page.Retreats]: {
    title: 'Corporate Leadership Retreats | Furute Relationship Tourism',
    description: "Business + wellness retreats designed for leadership clarity and team growth. Experience immersive networking in exclusive settings.",
    keywords: "corporate retreats, leadership retreats, relationship tourism, business wellness, executive offsites"
  },
  [Page.Community]: {
    title: 'Global Founder Community | Furute International Network',
    description: "Join 10,000+ ambitious founders in the Furute Global Network. Access 24/7 multi-timezone ecosystems, international masterclasses, and cross-border VC opportunities from Pune to the world.",
    keywords: "entrepreneur community, global founder network, startup networking, international business community, founder support group"
  },
  [Page.Marketplace]: {
    title: 'Entrepreneur Consulting Marketplace | Furute',
    description: 'Connect with verified business consultants and featured entrepreneurs inside Furute’s curated marketplace. Hire experts for SaaS, GTM, and Finance.',
    keywords: "consulting marketplace, hire entrepreneurs, business consultants, expert marketplace, startup advisors"
  },
  [Page.PRServices]: {
    title: 'PR Services & Media Visibility for Pune Businesses | Furute',
    description: "Master your brand narrative with Furute's elite PR services. From local Pune outreach to national media recognition and TV/Podcast interview bookings. Elevate your authority today.",
    keywords: "PR agency Pune, media visibility, brand narrative, press release services India, business authority building"
  },
  [Page.Podcast]: {
    title: 'Furute Podcast | Conversations on Business & Leadership',
    description: "Listen to leadership and entrepreneurship insights from founders and experts. Decoding success stories and growth frameworks.",
    keywords: "business podcast, leadership conversations, entrepreneur insights, startup stories, Furute podcast"
  },
  [Page.Contact]: {
    title: 'Contact Furute | Business Training Headquarters in Pune',
    description: "Start your transformation journey. Reach out to Furute HQ in Pune for inquiries about programs, 1:1 mentoring, or PR services. Visit us at Mitra Mandal Colony, Parvati Paytha.",
    keywords: "contact Furute, business training office Pune, Ashay Shah contact, Furute address, business inquiry Pune"
  },
  [Page.Blog]: {
    title: 'Business Leadership Blog | Furute Insights',
    description: 'Articles on business growth, communication, leadership, negotiation, and focus. Strategic insights for the modern entrepreneur.',
    keywords: "business blog, leadership insights, entrepreneurship articles, growth strategies, negotiation tips"
  },
  [Page.Careers]: {
    title: 'Careers at Furute | Join the Future of Business Training',
    description: 'Help us build Pune\'s premier entrepreneurship ecosystem. Explore open roles in strategy, marketing, and operations at our Pune headquarters. Mission-driven careers start here.',
    keywords: "jobs at Furute, business training careers, startup jobs Pune, hiring Pune entrepreneurs"
  },
  default: {
    title: 'Furute | Business Ecosystem for Entrepreneurs & Leadership Growth',
    description: 'Furute is a business ecosystem platform offering mentorship, consulting marketplace, leadership training, PR services, and corporate retreats for entrepreneurs.',
    keywords: "entrepreneurship, business ecosystem, leadership training, mentorship, startup growth"
  }
};

const furuteHQ = {
    latitude: 18.4950,
    longitude: 73.8569,
};

// --- SCHEMAS ---

// 1. Organization Schema
const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Furute",
    "url": "https://furute.in",
    "description": "Furute is a business ecosystem platform offering mentorship, courses, marketplace consulting, podcast content, PR services, and corporate retreats.",
    "founder": {
        "@type": "Person",
        "name": "Ashay Shah"
    },
    "logo": {
        "@type": "ImageObject",
        "url": "https://lh3.googleusercontent.com/d/1y0CJPA67J0JpbxJADkaJdfr_0aIRB78_",
        "width": "600",
        "height": "60"
    },
    "sameAs": [
        "https://www.linkedin.com/company/furute/",
        "https://www.instagram.com/furute.in/",
        "https://twitter.com/furute_in"
    ],
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9822600521",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi"]
    }
};

// 2. WebSite Schema with SearchAction
const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://furute.in/#website",
    "url": "https://furute.in/",
    "name": "Furute Business Ecosystem",
    "publisher": { "@id": "https://furute.in/#organization" },
    "potentialAction": {
        "@type": "SearchAction",
        "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://furute.in/?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
    }
};

// 3. LocalBusiness Schema
const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://furute.in/#localbusiness",
    ...organizationSchema,
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "484/4, Shiv Darshan Rd, Mitra Mandal Colony, Parvati Paytha",
        "addressLocality": "Pune",
        "addressRegion": "MH",
        "postalCode": "411009",
        "addressCountry": "IN"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": furuteHQ.latitude,
        "longitude": furuteHQ.longitude
    },
    "hasMap": "https://maps.app.goo.gl/your-map-id", // Placeholder
    "openingHours": "Mo-Sa 10:00-18:00",
    "priceRange": "₹₹₹"
};

// 4. FAQ Schema (Generic for Home/About)
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is Furute?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Furute is a business ecosystem platform that supports entrepreneurs through courses, mentorship, consulting marketplace, and leadership retreats."
            }
        }
    ]
};

// 5. Course Schema (Example for Catalog)
const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Business Insights Pune",
    "description": "Our premier 12-week leadership development program designed for Pune's high-potential business owners.",
    "provider": { "@id": "https://furute.in/#organization" }
};

// 6. Service Schema (Example for PR)
const prServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Public Relations",
    "provider": { "@id": "https://furute.in/#organization" },
    "areaServed": {
        "@type": "State",
        "name": "Maharashtra"
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "PR Packages",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Starter Narrative" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Growth Narrative" } }
        ]
    }
};

// 7. PodcastSeries Schema
const podcastSeriesSchema = {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    "name": "Furute Podcast",
    "description": "Conversations with entrepreneurs on business and leadership.",
    "url": "https://furute.in/podcast"
};

// 8. Review & AggregateRating Schema
const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Product", // Using Product as a generic container for ratings
    "name": "Furute Business Ecosystem",
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1250",
        "bestRating": "5",
        "worstRating": "1"
    },
    "review": [
        {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rajesh K." },
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "The Business Insights program transformed my approach to scaling. Highly recommend Ashay's mentorship."
        }
    ]
};

// 9. Article Schema (Generic for Blog)
const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Blog Title",
    "author": {
        "@type": "Person",
        "name": "Ashay Shah"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Furute"
    }
};

/**
 * Updates the document's title and meta description tag.
 */
export const updateMetaTags = (page: Page) => {
    const meta = pageMetaData[page] || pageMetaData['default'];
    document.title = meta.title;

    // Description
    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
        descriptionTag = document.createElement('meta');
        descriptionTag.setAttribute('name', 'description');
        document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute('content', meta.description);

    // Keywords
    let keywordsTag = document.querySelector('meta[name="keywords"]');
    if (!keywordsTag) {
        keywordsTag = document.createElement('meta');
        keywordsTag.setAttribute('name', 'keywords');
        document.head.appendChild(keywordsTag);
    }
    keywordsTag.setAttribute('content', meta.keywords);

    // Canonical
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
        canonicalTag = document.createElement('link');
        canonicalTag.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalTag);
    }
    const url = `https://furute.in/${page === Page.Home ? '' : page.toLowerCase()}`;
    canonicalTag.setAttribute('href', url);
};

/**
 * Injects the appropriate JSON-LD schema into the document head.
 */
export const injectSchema = (page: Page) => {
    const schemas: any[] = [organizationSchema, websiteSchema, aggregateRatingSchema];

    switch(page) {
        case Page.Home:
            schemas.push(localBusinessSchema);
            schemas.push(faqSchema);
            break;
        case Page.About:
            schemas.push(localBusinessSchema);
            break;
        case Page.Courses:
            schemas.push(courseSchema);
            break;
        case Page.PRServices:
            schemas.push(prServiceSchema);
            break;
        case Page.Podcast:
            schemas.push(podcastSeriesSchema);
            break;
        case Page.Blog:
            schemas.push(articleSchema);
            break;
        case Page.Contact:
            schemas.push(localBusinessSchema);
            break;
    }

    // Breadcrumb Schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://furute.in/"
            }
        ]
    };
    if (page !== Page.Home) {
        breadcrumbSchema.itemListElement.push({
            "@type": "ListItem",
            "position": 2,
            "name": page.charAt(0).toUpperCase() + page.slice(1),
            "item": `https://furute.in/${page.toLowerCase()}`
        });
    }
    schemas.push(breadcrumbSchema);

    let schemaTag = document.getElementById('json-ld-schema');
    if (schemaTag) {
        schemaTag.innerHTML = JSON.stringify(schemas, null, 2);
    }
};
