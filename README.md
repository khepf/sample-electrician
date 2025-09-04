# Acme Electric - Professional Electrical Services Website

A modern, responsive business website for Acme Electric, a professional electrical company serving Cincinnati, Ohio and surrounding areas.

## 🚀 Features

- **Responsive Design**: Mobile-first approach optimized for all devices
- **Multi-Page Application**: Home, Services, About, and Contact pages with React Router
- **Professional UI**: Clean, modern design with electrical industry colors
- **SEO Optimized**: Proper meta tags, semantic HTML, and structured content
- **Performance**: Fast loading with Vite build system
- **Accessibility**: WCAG compliant with proper focus management

## 🛠️ Tech Stack

- **Frontend**: React 19 with TypeScript
- **Routing**: React Router DOM
- **Styling**: Vanilla CSS with CSS Variables
- **Build Tool**: Vite
- **Development**: Hot Module Replacement (HMR)

## 📱 Pages & Features

### Home Page
- Hero section with call-to-action
- Services overview
- Why choose us section
- Service areas
- Contact information

### Services Page
- Detailed service descriptions
- Emergency services (24/7)
- Electrical wiring & repairs
- Panel upgrades & installations
- Lighting installations
- Outlet & switch installations
- Commercial electrical services
- Pricing information
- Service process explanation

### About Page
- Company history and story
- Mission and values
- Team member profiles
- Certifications and licenses
- Experience highlights

### Contact Page
- Contact form with validation
- Business hours
- Service area information
- Emergency contact information
- FAQ section

## 🎨 Design Features

- **Color Scheme**: Professional blue (#1e40af) and orange (#ea580c)
- **Typography**: Modern, readable fonts with responsive sizing
- **Mobile Navigation**: Collapsible hamburger menu
- **Interactive Elements**: Hover effects and smooth transitions
- **Cards & Grid Layouts**: Organized content presentation

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to [http://localhost:5173](http://localhost:5173)

## 📦 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Header.tsx       # Navigation header with mobile menu
│   ├── Header.css       # Header styles
│   ├── Footer.tsx       # Footer with company info
│   └── Footer.css       # Footer styles
├── pages/               # Page components
│   ├── Home.tsx         # Homepage
│   ├── Home.css         # Homepage styles
│   ├── Services.tsx     # Services page
│   ├── Services.css     # Services styles
│   ├── About.tsx        # About page
│   ├── About.css        # About styles
│   ├── Contact.tsx      # Contact page
│   └── Contact.css      # Contact styles
├── App.tsx              # Main app component with routing
├── App.css              # Global app styles
├── index.css            # Global CSS variables and base styles
└── main.tsx             # Application entry point

public/
├── logo-placeholder.png # Company logo placeholder
├── hero-electrician.jpg     # Hero section image
├── team-photo.jpg       # Team photo
├── about-hero.jpg       # About page hero
├── story-image.jpg      # Company story image
├── team-*.jpg           # Individual team member photos
└── electrical-icon.svg    # Favicon
```

## 🎯 Business Information

- **Company**: Acme Electric
- **Location**: Cincinnati, Ohio
- **Services**: Emergency electrical, wiring repairs, panel upgrades, lighting installation, outlet installation
- **Phone**: (513) 555-1234
- **Email**: info@acmeelectric.com
- **Hours**: Mon-Fri 7AM-6PM, Sat 8AM-4PM, 24/7 Emergency

## 📝 Customization

To customize for your electrical business:

1. **Update Business Info**: Modify company details in components and pages
2. **Replace Images**: Add your actual business photos to the `public/` directory
3. **Color Scheme**: Adjust CSS variables in `src/index.css`
4. **Content**: Update service descriptions, team info, and contact details
5. **SEO**: Modify meta tags in `index.html` and page titles

## 🔧 Technical Details

- **TypeScript**: Strict type checking enabled
- **CSS Variables**: Consistent theming throughout
- **Mobile-First**: Responsive breakpoints at 480px, 768px, 968px
- **Performance**: Lazy loading and optimized builds
- **Browser Support**: Modern browsers with ES2022+ support

## 📞 Emergency Service Features

- Prominent emergency phone number display
- 24/7 availability messaging
- Quick contact forms
- Mobile-optimized call buttons
- Emergency service highlighting

## 🚀 Deployment

This project is ready for deployment to any modern web hosting service:

- **Static Hosting**: Netlify, Vercel, GitHub Pages
- **Traditional Hosting**: Any web server that serves static files
- **CDN**: Built files are optimized for CDN distribution

Build the project with `npm run build` and deploy the `dist/` folder.

---

*Note: This website uses placeholder images and sample contact information. Replace with actual business details before going live.*
```
