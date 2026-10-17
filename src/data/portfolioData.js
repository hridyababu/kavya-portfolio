// ==========================================================================
//                          PERSONAL PORTFOLIO DATA
//        Edit this file to update your personal information, projects, etc.
// ==========================================================================
import kachaaLogo from "../assets/images/kachaa.jpeg";
import metaAdsProfile from "../assets/images/metaads.png";
import instagramPostersProfile from "../assets/images/instagramposters.png";
import reelEditsProfile from "../assets/images/reeledits.png";

export const personalInfo = {
  name: "Kavya K R",
  title: "DIGITAL MARKETING EXPERT",
  tagline: "Creating meaningful digital experiences through creativity, content and strategy.",
  email: "kavyakr790@gmail.com",
  phone: "+91 7356069612",
  location: "Kerala, India",

  // EDIT HERE: Social links - replace with your real URLs when you have them
  social: {
    linkedin: "https://www.linkedin.com/in/kavya-kr-b16639332/", // TODO: replace with your LinkedIn URL, e.g. "https://linkedin.com/in/yourname"
    github: "#",   // TODO: replace with your GitHub URL, e.g. "https://github.com/yourname"
  },

  profileImage: "/src/assets/images/profile.jpeg", // TODO: add a profile picture path (place in src/assets/images/), e.g. "/src/assets/images/profile.jpg"
};

export const aboutMe = {
  heading: "About Me",

  paragraph: `I believe digital marketing is not just about promotion; it is about building trust, visibility, and long-term customer relationships.

I've always been drawn to creativity, ideas, visuals, and the way a simple thought can become something meaningful online. That curiosity grew into a love for digital marketing, a space where I can express myself and create with purpose.

Today, I enjoy crafting human content, building stories, and helping brands show their personality through their online presence.

Outside of work, I'm always exploring new ideas or finding inspiration for what I want to create next.

Marketing may not have been my starting point, but it's where everything makes sense and where my passion truly lives.`,

  highlights: [
    "Creativity",
    "Content",
    "Storytelling",
    "Digital Marketing",
    "Brand Presence",
  ],
};

// ==========================================================================
// EXPERIENCE
// Edit the list below to add your roles. Leave as placeholder if none yet.
// ==========================================================================
export const experiences = [
  // TODO: Add your real experiences. Example format:
  // {
  //   role: "Marketing Intern",
  //   company: "Company Name",
  //   duration: "Jan 2025 – Present",
  //   description: "Short one-liner describing the role / industry.",
  //   responsibilities: [
  //     "Managed Instagram content calendar and posting schedule.",
  //     "Created 30+ posters and reels for social media campaigns.",
  //   ],
  // },
];

// If the array above is empty, this placeholder will be shown (so the layout does not break):
export const experiencePlaceholder = {
  role: "Digital Marketing Executive",

  company: "Westberg International & Eloquent Academic Solutions",

  duration: "",

  description:
    "I managed digital marketing activities focused on social media growth, content marketing, lead generation, and online visibility. I handled Instagram, Facebook, and created engaging content, and managed audience interactions. I also planned and executed Meta Ads and Google Ads campaigns to improve brand awareness, website traffic, and student inquiries. Additionally, I worked on Google Business Profile optimization, website SEO, backlink building, and to strengthen organic reach and online presence. Through consistent content planning and digital marketing strategies, I contributed to improving audience engagement, brand visibility, and lead generation.",

  responsibilities: [],
};

// ==========================================================================
// SKILLS  (Preserved from your existing portfolio)
// ==========================================================================
export const skillCategories = [
  {
    name: "Content & Creative",
    accent: "coral",
    skills: [
      { name: "Content Creation", icon: "PenLine" },
      { name: "Canva", icon: "Palette" },
      { name: "Poster Creation", icon: "Layout" },
      { name: "Video Editing", icon: "Video" },
    ],
  },
  {
    name: "Social Media",
    accent: "sage",
    skills: [
      { name: "Facebook", icon: "Facebook" },
      { name: "Instagram", icon: "Instagram" },
      { name: "Social Media Management", icon: "Share2" },
    ],
  },
  {
    name: "Marketing",
    accent: "sand",
    skills: [
      { name: "Lead Generation", icon: "Users" },
      { name: "SEO Ranking", icon: "Search" },
    ],
  },
  {
    name: "Web",
    accent: "ink",
    skills: [
      { name: "WordPress", icon: "Globe" },
      { name: "Website Development", icon: "Code2" },
    ],
  },
];

// ==========================================================================
// SERVICES
// ==========================================================================
export const services = [
  {
    title: "Social Media Management",
    icon: "Share2",
    color: "sage",
    description: "Planning, scheduling and managing daily content across Instagram and Facebook with on-brand voice and visual consistency.",
  },
  {
    title: "Content Creation",
    icon: "PenLine",
    color: "coral",
    description: "Human-first content for captions, posts, stories and campaigns — written to connect rather than sell.",
  },
  {
    title: "Canva Poster Design",
    icon: "Palette",
    color: "sand",
    description: "Clean, professional Canva posters, flyers, carousels and story templates designed to stop the scroll.",
  },
  {
    title: "Facebook & Instagram Marketing",
    icon: "Instagram",
    color: "sage",
    description: "Organic growth strategies, Meta Ads fundamentals and creative planning tailored for each platform's strengths.",
  },
  {
    title: "Lead Generation",
    icon: "Users",
    color: "coral",
    description: "Campaign structure, audience targeting basics and content that turns attention into interested prospects.",
  },
  {
    title: "SEO Support",
    icon: "Search",
    color: "sand",
    description: "On-page fundamentals, keyword research, content optimization and supporting your website to rank better over time.",
  },
  {
    title: "WordPress Website Development",
    icon: "Globe",
    color: "ink",
    description: "Simple, clean, responsive WordPress websites — customizing themes, pages, menus and SEO essentials for small businesses.",
  },
  {
    title: "Video Editing",
    icon: "Video",
    color: "coral",
    description: "Short-form edits for Instagram Reels and stories — pacing, cuts, captions and background audio that feel natural.",
  },
];

// ==========================================================================
// IDEAS & INSPIRATION
// ==========================================================================
export const ideas = [
  {
    title: "Content Ideas",
    tag: "Content",
    description: "Brainstorming and mapping posts that answer real audience questions, spark curiosity and fit a brand's personality.",
    icon: "Lightbulb",
    gradient: "from-coral-400 via-coral-500 to-sand-400",
  },
  {
    title: "Social Media Ideas",
    tag: "Social",
    description: "Exploring formats — carousels, reels, Q&A stories, collaborative posts — that make brands feel present and alive.",
    icon: "Megaphone",
    gradient: "from-sage-400 via-sage-500 to-ink-600",
  },
  {
    title: "Brand Storytelling",
    tag: "Brand",
    description: "Finding the human angle in a brand: the 'why', the people, the beginnings, and translating it into content that feels real.",
    icon: "BookOpen",
    gradient: "from-sand-400 via-sand-500 to-coral-500",
  },
  {
    title: "Creative Campaign Concepts",
    tag: "Campaigns",
    description: "Sketching out full 2–4 week campaign concepts with weekly themes, content buckets, hooks and call-to-actions.",
    icon: "Sparkles",
    gradient: "from-ink-600 via-ink-700 to-sage-500",
  },
  {
    title: "Visual Content",
    tag: "Design",
    description: "Exploring layouts, color palettes, typography and poster ideas so every brand feels cohesive and visually recognizable.",
    icon: "Palette",
    gradient: "from-coral-400 via-pink-400 to-sand-400",
  },
  {
    title: "Digital Marketing Trends",
    tag: "Strategy",
    description: "Always learning: watching what shifts in platforms, what formats win, and how brands can adapt without losing their voice.",
    icon: "TrendingUp",
    gradient: "from-sage-500 via-teal-400 to-sand-500",
  },
];

// ==========================================================================
// WORKS / PORTFOLIO
// Replace placeholder entries with your real projects whenever you have them.
// Categories can be: All, Design, Social Media, Advertising, Content, Web
// ==========================================================================
export const works = [
  // ====== PLACEHOLDER PROJECT 1: Logo Creation ======
  {
    title: "Logo Concepts",
    category: "Design",
    description: "A collection of logo drafts and brand-mark explorations created for practice and experimentation.",
    image: "/src/assets/images/kachaa.jpeg", // TODO: add image path
    tags: ["Logo", "Branding", "Canva"],
    link: null, // add URL string if project is hosted online
  },
  {
    title: "Logo Concepts",
    category: "Design",
    description: "A collection of logo drafts and brand-mark explorations created for practice and experimentation.",
    image: "/src/assets/images/hsk.jpeg", // TODO: add image path
    tags: ["Logo", "Branding", "Canva"],
    link: null, // add URL string if project is hosted online
  },

  // {
  //   title: "Logo Concepts",
  //   category: "Design",
  //   description: "A collection of logo drafts and brand-mark explorations created for practice and experimentation.",
  //   image: "/src/assets/images/vedhaa.jpeg", // TODO: add image path
  //   tags: ["Logo", "Branding", "Canva"],
  //   link: null, // add URL string if project is hosted online
  // },
  // ====== PLACEHOLDER PROJECT 2: Meta Ads ======
  {
    title: "Meta Ads Creative Samples",
    category: "Advertising",
    description: "Sample ad creatives, copy variations and audience targeting frameworks I have studied and built for learning.",
    image: metaAdsProfile,
    tags: ["Meta Ads", "Copy", "Audience"],
    link: "/meta-ads",
  },
  // ====== MORE PLACEHOLDERS ======
  {
    title: "Instagram Posters",
    category: "Social Media",
    description: "A series of poster experiments exploring layouts, fonts, color harmonies and brand moods.",
    image: instagramPostersProfile,
    tags: ["Canva", "Instagram", "Posters"],
    link: "/posters",
  },
  // {
  //   title: "Blog / Article Writing Samples",
  //   category: "Content",
  //   description: "Long-form writing samples exploring marketing ideas, trends and how brands communicate.",
  //   image: "",
  //   tags: ["Writing", "Marketing", "Ideas"],
  //   link: null,
  // },
  {
    title: "Kachaa Designs — Website",
    category: "Web",
    description:
      "A website project for Kachaa Designs, showcasing the brand's identity and online presence.",
    image: kachaaLogo,
    tags: ["Website", "Web Design", "WordPress"],
    link: "https://kachaa.in/",
  },
  {
    title: "Reel Edits",
    category: "Social Media",
    description: "Short-form video edits experimenting with pacing, captions, trending sounds and call-to-action hooks.",
    image: reelEditsProfile,
    tags: ["Reels", "Video Editing", "Instagram"],
    link: "/reel-edits",
  },
];

export const workCategories = [
  "All",
  "Design",
  "Social Media",
  "Advertising",
  "Content",
  "Web",
];

// ==========================================================================
// EDUCATION
// ==========================================================================
export const education = [
  // TODO: Fill in your real education details. Example template:
  // {
  //   institution: "University / College Name",
  //   course: "Degree / Diploma in XYZ",
  //   year: "2022 – 2025",
  //   details: "Relevant coursework, projects or focus areas.",
  // },
  {
    institution: "[ EDUMPUS UPSKILL ,CALICUT ]",
    course: "[ DIGITAL MARKETING COURSE ]",
    year: "[ 2024 ]",
    
  },
  {
    institution: "[ N.M.S.M .GOVERMENT COLLEGE , WAYANAD,KERALA ]",
    course: "[ B.A.MASSCOMMUNICATION AND JOURNALISM]",
    year: "[ 2018 – 2022 ]",
  },

];

// ==========================================================================
// CERTIFICATES
// Add new certificate objects below when you earn them.
// ==========================================================================
export const certificates = [
  // Example template:
  // {
  //   name: "Google Digital Garage – Fundamentals of Digital Marketing",
  //   issuer: "Google",
  //   date: "2025",
  //   image: "", // add certificate image path
  //   link: "",  // add verification URL if available
  // },

  // {
  //   name: "[ Your First Certificate Title ]",
  //   issuer: "[ Issuing Organization ]",
  //   date: "[ Year / Month Year ]",
  //   image: "",
  //   link: null,
  // },
  // {
  //   name: "[ Your Second Certificate Title ]",
  //   issuer: "[ Issuing Organization ]",
  //   date: "[ Year / Month Year ]",
  //   image: "",
  //   link: null,
  // },
];

// ==========================================================================
// NAVIGATION (Do not change unless you reorder sections)
// ==========================================================================
export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Ideas", href: "#ideas" },
  { name: "Works", href: "#works" },
  { name: "Education", href: "#education" },
  // { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];
