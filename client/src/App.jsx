import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Tours from './pages/Tours/Tours';
import Contact from './pages/Contact/Contact';
import Terms from './pages/Terms/Terms';
import PlaceDetail from './pages/Places/PlaceDetail';

import './App.css';

/**
 * Main application routing configuration.
 * 
 * LEARNING TIP (Routing & Structure in React):
 * In a professional React app, the `App` component acts as the global orchestrator.
 * 1. `<BrowserRouter>` wraps our entire application so routing can occur.
 * 2. `<Navbar />` and `<Footer />` are persistent layout components, so they are placed
 *    outside `<Routes>`. This means they stay mounted, avoiding redundant re-renders on transitions!
 * 3. `<Routes>` checks the URL pathname and mounts only the matching `<Route>` page.
 * 4. `<FloatingWhatsApp />` provides a persistent WhatsApp quick action button across all pages.
 */
function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-bg-primary text-text-primary">
        
        {/* Persistent Premium Navigation */}
        <Navbar />

        {/* Stateful Dynamic Page Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/places/:slug" element={<PlaceDetail />} />
          </Routes>
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
