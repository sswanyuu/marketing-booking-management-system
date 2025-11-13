🌍 Marketing Booking Management System - A Modern B2B SaaS Marketing Website

🔗 Live Demo https://sswanyuu.github.io/marketing-booking-management-system/

A comprehensive marketing website for a B2B SaaS restaurant reservation management system, built with VitePress and Vue.js. Features a modern, responsive design with smooth animations and a well-structured component architecture.

✨ Key Features

✅ Modern & Responsive Design – Mobile-first approach with custom breakpoints, optimized for all devices.

✅ Component-Based Architecture – Reusable Vue components with SCSS styling for maintainable code.

✅ Smooth Animations – AOS (Animate On Scroll) and Swiper.js for enhanced user engagement.

✅ Multi-Page Marketing Site – Comprehensive pages showcasing features, integrations, and solutions.

✅ Performance Optimized – Fast loading with optimized assets and efficient static site generation.

✅ Bootstrap 5 Integration – Professional UI components with custom styling.

This project showcases my frontend development skills in Vue.js, VitePress, SCSS architecture, component design, and building production-ready marketing websites.

## 🛠 Technical Stack

- **Framework**: Vue.js with VitePress
- **Styling**: SCSS with Bootstrap 5
- **Build Tool**: VitePress for static site generation
- **Icons**: Bootstrap Icons
- **Animations**: AOS (Animate On Scroll)
- **Carousel**: Swiper.js
- **Deployment**: GitHub Pages with automated workflows

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone [repository-url]
cd marketing-booking-management-system
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run docs:dev
```

4. Build for production
```bash
npm run docs:build
```

## 🔧 Development Scripts

```bash
# Development
npm run docs:dev          # Start development server
npm run docs:build        # Build for production (auto-fixes assets)
npm run docs:preview      # Preview production build

# Code Quality
npm run lint              # Run ESLint
npm run lint:fix          # Fix ESLint issues
npm run format            # Format code with Prettier
npm run format:check      # Check code formatting
```

## 📁 Project Structure

```
marketing-booking-management-system/
├── .vitepress/
│   ├── config.ts         # VitePress configuration
│   └── theme/            # Custom theme components
├── scss/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page-specific styles
│   ├── base/             # Base styles and utilities
│   └── main.scss
├── scripts/
│   ├── postinstall.js    # Auto-fix Bootstrap files
│   └── fix-assets.js     # Auto-fix asset paths
├── dist/                 # Built static site
└── *.md                  # Page content files
```

## 🚢 Deployment

The project is automatically deployed to GitHub Pages on every push to the `main` branch. The build process includes:

- Automatic Bootstrap file fixes
- Asset path corrections for GitHub Pages
- Base path configuration

See `.github/workflows/deploy.yml` for deployment configuration.

---

**Built with ❤️ for the restaurant industry**
