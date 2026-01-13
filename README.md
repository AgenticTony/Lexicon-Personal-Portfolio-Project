# Anthony Foran - AI Developer Portfolio

A modern, responsive personal portfolio website showcasing AI projects, technical skills, and professional experience. Built as a frontend development project for Lexicon AI Development program.

![Portfolio Preview](https://img.shields.io/badge/Status-Production-success)
![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-5.0-purple)
![CSS](https://img.shields.io/badge/CSS3-Modules-orange)

## 🚀 Live Demo

[View Live Portfolio](https://agentictony.github.io/Lexicon-Personal-Portfolio-Project/)

## 📋 Project Overview

This portfolio website was developed as a frontend course project to demonstrate modern web development skills while creating a professional online presence. The site features a bold dark-mode design with cyber blue/purple accents, optimized for performance and accessibility.

**Project Assignment**: FrontEnd Project - Personal Portfolio Website
**Course**: AI Development Program at Lexicon, Malmö


## ✨ Features

### Design & UX
- **Bold Dark Mode Theme**: Near-black backgrounds with electric blue (#00D4FF) and purple (#7B61FF) accents
- **Responsive Design**: Mobile-first approach, optimized for phones, tablets, and desktops
- **Smooth Animations**: Scroll-reveal animations, hover effects, and subtle transitions
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation support
- **Performance**: Fast load times, optimized images, minimal JavaScript bundle

### Sections
1. **Hero Section**
   - Bold headline with gradient text effects
   - Professional headshot with animated accent ring
   - Social proof badges (3 Production Apps, 30+ Certifications, Studying at Lexicon)
   - Call-to-action buttons for projects and contact

2. **About Section**
   - Career transition story (20 years casino management → AI development)
   - Journey sections with prominent quotes
   - Integrated "The Numbers" stats sidebar
   - Professional photo showcase

3. **Projects Section**
   - VoiceHive - AI Voice Agent Platform
   - Röst - Swedish Voice Transcription
   - PostFlow - LinkedIn Content Automation
   - Each project includes description, tech stack, and links

4. **Skills Section**
   - Categorized technical skills (Languages, AI/ML, Frameworks, Tools)
   - Visual skill indicators
   - Certification highlights

5. **Contact Section**
   - Contact information
   - Social media links
   - Availability status

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | Component-based UI library |
| **Vite** | Build tool and dev server |
| **CSS Modules** | Scoped styling for components |
| **JavaScript ES6+** | Modern JavaScript features |
| **GitHub Pages** | Deployment platform |

### Development Tools
- ESLint for code quality
- Vite Hot Module Replacement (HMR)
- CSS custom properties (variables)
- Google Fonts (Space Grotesk, Inter, JetBrains Mono)

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Setup

1. Clone the repository:
```bash
git clone https://github.com/AgenticTony/Lexicon-Personal-Portfolio-Project.git
cd Lexicon-Personal-Portfolio-Project
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open browser to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 🚢 Deployment

This project is configured for GitHub Pages deployment:

1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source as `main` branch and `/dist` folder
4. Site will be live at `https://username.github.io/repository-name`

### Alternative Deployment
Deploy to any static hosting service:
- **Netlify**: Drag and drop the `dist/` folder
- **Vercel**: Connect GitHub repository
- **Firebase Hosting**: `firebase deploy`
- **AWS S3**: Upload `dist/` contents

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header/          # Navigation header
│   │   ├── Hero/            # Hero section with animations
│   │   ├── About/           # About section with stats
│   │   ├── Projects/        # Projects showcase
│   │   ├── Skills/          # Skills display
│   │   └── Contact/         # Contact information
│   ├── data/
│   │   └── content.js       # Site content & configuration
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles & CSS variables
├── public/                  # Static assets
├── index.html               # HTML template
├── package.json
└── vite.config.js           # Vite configuration
```

## 🎨 Design System

### Color Palette
```css
--bg-primary: #0A0A0F      /* Near black */
--bg-secondary: #12121A    /* Dark navy */
--bg-card: #1A1A24         /* Card background */
--accent-primary: #00D4FF  /* Cyan */
--accent-secondary: #7B61FF /* Purple */
```

### Typography
- **Headings**: Space Grotesk (600, 700)
- **Body**: Inter (400, 500)
- **Code/Mono**: JetBrains Mono

## 🔄 Development Workflow

1. **Feature Development**: Create new components in `src/components/`
2. **Styling**: Use CSS Modules for scoped styles
3. **Content Updates**: Edit `src/data/content.js`
4. **Testing**: Test responsiveness at different breakpoints
5. **Build**: Run `npm run build` before deployment

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Learning Outcomes

Through this project, I gained experience with:

- Modern React development with hooks and functional components
- Component-based architecture and code organization
- CSS Modules for maintainable, scoped styling
- Responsive design principles and mobile-first approach
- Performance optimization techniques
- Deployment workflows with modern build tools
- Git version control and GitHub Pages deployment

## 👤 About the Developer

**Anthony Foran** - AI Developer based in Malmö, Sweden

With 20 years of leadership experience in casino management, I made a career transition into AI development at age 50. I've earned 30+ professional certifications from IBM, Meta, and Vanderbilt, and currently study AI Development at Lexicon in Malmö.

I combine extensive business experience with technical skills to build practical AI solutions that solve real problems.

## 🔗 Connect With Me

- **GitHub**: [github.com/your-username](https://github.com/your-username)
- **LinkedIn**: [linkedin.com/in/your-username](https://linkedin.com/in/your-username)
- **Email**: your.email@example.com

## 📝 License

This project is open source and available for personal and commercial use.

## 🙏 Acknowledgments

- Lexicon AI Development Program for the project assignment
- React and Vite communities for excellent documentation
- Design inspiration from modern portfolio showcases

---

**Built with purpose and passion.** © 2024 Anthony Foran
