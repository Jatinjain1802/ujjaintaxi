import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';

// Code Splitting (React.lazy) for high-performance chunk loading
const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Services = lazy(() => import('./pages/Services/Services'));
const Tours = lazy(() => import('./pages/Tours/Tours'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Terms = lazy(() => import('./pages/Terms/Terms'));
const PlaceDetail = lazy(() => import('./pages/Places/PlaceDetail'));
const Blogs = lazy(() => import('./pages/Blogs/Blogs'));
const BlogDetail = lazy(() => import('./pages/Blogs/BlogDetail'));
const TourDetail = lazy(() => import('./pages/Tours/TourDetail'));

import './App.css';

/**
 * Main application routing configuration.
 * 
 * LEARNING TIP (Performance Optimization via Route-based Code Splitting):
 * 1. By default, standard imports pack all code into one giant JavaScript bundle.
 * 2. `React.lazy` combined with dynamic `import()` lets us split our build into split-out files ("chunks").
 * 3. The browser only requests and downloads the script chunk for the active path (e.g. /about).
 * 4. `<Suspense>` provides a fallback element to show a stylish loader during dynamic chunk fetches.
 */
function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Keep the loader only briefly so it does not block first paint.
    const hideLoader = () => setTimeout(() => setIsLoading(false), 150);
    if (document.readyState === 'complete') {
      hideLoader();
      return;
    }
    window.addEventListener('load', hideLoader, { once: true });
    return () => window.removeEventListener('load', hideLoader);
  }, []);

  return (
    <BrowserRouter>
      {/* Premium Full-Screen Page Preloader Splash Screen */}
      <div className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-bg-primary transition-all duration-700 ease-in-out ${
        isLoading ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        <div className="flex flex-col items-center gap-6 text-center px-6">
          <div className="relative w-28 h-28 flex items-center justify-center">
            {/* Spinning gradient outer ring */}
            <div className="absolute inset-0 border-[6px] border-t-accent-gold border-r-transparent border-b-accent-saffron border-l-transparent rounded-full animate-spin"></div>
            {/* Pulsing glow halo */}
            <div className="absolute w-20 h-20 border-[3px] border-accent-gold/25 rounded-full animate-ping"></div>
            {/* Bouncing luxury taxi */}
            <span className="text-5xl animate-bounce select-none">🚖</span>
          </div>
          <div className="space-y-2">
            <h1 className="font-hero text-4xl text-gold-gradient tracking-wider animate-pulse">Taxi In Ujjain</h1>
            <p className="text-text-muted font-body text-xs tracking-[4px] uppercase animate-pulse">Jai Shree Mahakal</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col min-h-screen bg-bg-primary text-text-primary">
        
        {/* Persistent Premium Navigation */}
        <Navbar />

        {/* Stateful Dynamic Page Routes with Suspense Fallback */}
        <main className="flex-grow">
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-[80vh] bg-bg-primary">
              <div className="flex flex-col items-center gap-6 text-center px-6">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  {/* Outer dual-colored spinning ring */}
                  <div className="absolute inset-0 border-4 border-t-accent-gold border-r-transparent border-b-accent-saffron border-l-transparent rounded-full animate-spin"></div>
                  {/* Inner pulsing gold ring */}
                  <div className="absolute w-16 h-16 border-2 border-accent-gold/20 rounded-full animate-ping"></div>
                  {/* Taxi icon bouncing inside */}
                  <span className="text-4xl animate-bounce select-none">🚖</span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading font-bold text-xl text-gold-gradient tracking-wide animate-pulse">Taxi In Ujjain</h3>
                  <p className="text-text-muted font-body text-xs tracking-widest uppercase">Jai Shree Mahakal... Loading premium experience...</p>
                </div>
              </div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/tours" element={<Tours />} />
              <Route path="/tours/:id" element={<TourDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/places/:slug" element={<PlaceDetail />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:slug" element={<BlogDetail />} />
            </Routes>
          </Suspense>
        </main>

        {/* Persistent Branded Footer */}
        <Footer />

        {/* Global Floating WhatsApp FAB */}
        <FloatingWhatsApp />

      </div>
    </BrowserRouter>
  );
}

export default App;
