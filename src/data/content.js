// ========================================
// Portfolio Content Data
// Edit this file to update all content
// ========================================

export const siteData = {
  // Personal Info
  name: "Anthony Foran",
  title: "AI Developer",
  tagline: "Building intelligent solutions that solve real problems",
  location: "Malmö, Sweden",
  email: "hello@anthonyforan.com",
  cvUrl: "/Anthony_Foran_CV.pdf",
  
  // Social Links
  social: {
    github: "https://github.com/anthonyforan", // Update with real
    linkedin: "https://linkedin.com/in/anthonyforan" // Update with real
  },
  
  // About Section
  about: {
    headline: "From Managing Teams to Building AI Solutions",
    subheading: "Why my 20 years of business experience make me a better AI developer than someone who only learned to code",
    sections: [
      {
        title: "The Realization",
        content: "After 20 years in casino management, I noticed a pattern: **every problem could be solved with technology**. But nobody was building solutions for people like me.",
        highlight: "I realized I needed to become the person who builds those solutions."
      },
      {
        title: "The Commitment",
        content: "At 50, I made the leap. **30+ certifications** from IBM, Meta, and Vanderbilt. **3 production AI apps** deployed and used by real businesses. Currently finishing my **AI Developer program at Lexicon**.",
        highlight: "Most developers learn to code. I learned to solve real business problems with code."
      },
      {
        title: "The Advantage",
        content: "Most AI developers have never managed a team, handled a budget, or dealt with an angry customer. **I spent 20 years doing all three.** Now when I build AI solutions, I understand what actually matters to businesses — not just to developers.",
        highlight: "I solve AI problems like someone who understands business problems."
      }
    ],
    stats: [
      {
        number: "20+",
        label: "Years Experience",
        description: "Building business sense and operational understanding"
      },
      {
        number: "30+",
        label: "AI/ML Certifications",
        description: "From IBM, Meta, Vanderbilt, and leading tech companies"
      },
      {
        number: "3",
        label: "Production AI Apps",
        description: "Used by real businesses with measurable impact"
      }
    ]
  },
  
  // Projects
  projects: [
    {
      id: 1,
      title: "VoiceHive",
      status: "Live Demo",
      problem: "Customer service costs companies $1000+ daily, but most tools are rigid.",
      solution: "Created a no-code platform where businesses can build AI voice agents in minutes, not months.",
      results: [
        "Handles 1000+ concurrent voice calls",
        "10-15x cheaper than traditional IVR systems",
        "24/7 customer service automation"
      ],
      tech: ["Python", "LangChain", "Voice APIs", "OpenAI"],
      demo: "https://voicehive-demo.com", // ADD YOUR REAL DEMO URL
      github: "https://github.com/anthonyforan/voicehive", // ADD YOUR REAL REPO URL
      image: "/projects/voicehive-screenshot.png" // ADD YOUR REAL SCREENSHOT
    },
    {
      id: 2,
      title: "Röst",
      status: "Open Source",
      problem: "Swedish speech-to-text tools were either expensive or poor with local dialects.",
      solution: "Built a real-time transcription app using KB-Whisper, optimised specifically for Swedish.",
      results: [
        "94% accuracy on local Swedish dialects",
        "Real-time processing < 200ms latency",
        "Works offline for privacy"
      ],
      tech: ["Python", "Whisper", "KB-Whisper", "Audio Processing"],
      demo: "https://rost-demo.com", // ADD YOUR REAL DEMO URL
      github: "https://github.com/anthonyforan/rost", // ADD YOUR REAL REPO URL
      image: "/projects/rost-screenshot.png" // ADD YOUR REAL SCREENSHOT
    },
    {
      id: 3,
      title: "PostFlow",
      status: "Beta Testing",
      problem: "LinkedIn consistency matters, but content creation takes hours.",
      solution: "Built a SaaS that generates, schedules, and optimises posts using AI.",
      results: [
        "Saves content creators 2+ hours weekly",
        "35% higher engagement vs manual posts",
        "500+ posts generated and scheduled"
      ],
      tech: ["Python", "AI/LLM", "Automation", "SaaS"],
      demo: "https://postflow-demo.com", // ADD YOUR REAL DEMO URL
      github: "https://github.com/anthonyforan/postflow", // ADD YOUR REAL REPO URL
      image: "/projects/postflow-screenshot.png" // ADD YOUR REAL SCREENSHOT
    }
  ],
  
  // Skills
  skills: [
    {
      title: "AI Development",
      level: "Expert",
      items: [
        { name: "LLM Integration", description: "Built 3 production AI applications" },
        { name: "Voice AI", description: "Custom voice agents with natural conversation flow" },
        { name: "LangChain", description: "Expert in RAG systems and prompt engineering" }
      ]
    },
    {
      title: "Python Ecosystem",
      level: "Advanced",
      items: [
        { name: "FastAPI", description: "Production APIs and microservices" },
        { name: "Audio Processing", description: "Real-time Swedish voice transcription" },
        { name: "Automation", description: "SaaS platforms and workflow automation" }
      ]
    },
    {
      title: "Full-Stack",
      level: "Proficient",
      items: [
        { name: "React", description: "Modern web applications" },
        { name: "JavaScript", description: "Frontend and backend development" },
        { name: "Databases", description: "SQL and NoSQL data management" }
      ]
    }
  ],
  
  // Contact Section
  contact: {
    headline: "Let's Work Together",
    subheading: "Ready to collaborate? Whether you need an AI developer, want to discuss a project, or just want to chat about AI solutions—I'm here for it.",
    description: "Based in Malmö, available across Sweden • Available Q1 2025",
    ctaOptions: [
      {
        id: "email",
        title: "Send Me an Email",
        description: "Let's discuss your project",
        icon: "📧",
        action: "hello@anthonyforan.com",
        type: "email",
        primary: true
      },
      {
        id: "linkedin",
        title: "Connect on LinkedIn",
        description: "Let's talk about opportunities",
        icon: "💼",
        action: "https://linkedin.com/in/anthonyforan",
        type: "link",
        primary: false
      },
      {
        id: "github",
        title: "Explore My Code",
        description: "See what I've built",
        icon: "💻",
        action: "https://github.com/anthonyforan",
        type: "link",
        primary: false
      }
    ]
  }
}
