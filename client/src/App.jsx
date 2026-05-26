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
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-bg-primary text-text-primary">
        
        {/* Persistent Premium Navigation */}
        <Navbar />

        {/* Stateful Dynamic Page Routes with Suspense Fallback */}
        <main className="flex-grow">
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-[60vh] bg-bg-primary">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 rounded-full border-t-accent-gold border-r-transparent border-b-accent-saffron border-l-transparent animate-spin"></div>
                <p className="text-text-muted font-body animate-pulse">Jai Shree Mahakal... Loading premium experience...</p>
              </div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/tours" element={<Tours />} />
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
