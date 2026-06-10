import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MarqueeSection } from "./components/Marquee";
import { Services } from "./components/Services";
import { Footer } from "./components/Footer";
import { Preloader } from "./components/Preloader";
import { Detail } from "./components/Detail";
import { About } from "./pages/About";
import { ServicesDetail } from "./pages/ServicesDetail";
import { Contact } from "./components/Contact";
import { Blog } from "./pages/Blog";

function App() {
  const [loading, setLoading] = useState(() => {
    return !sessionStorage.getItem("site_loaded");
  });

  useEffect(() => {
    if (!loading) return;

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("site_loaded", "true");
    }, 2000);

    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>

      {!loading && (
        <div className="relative">
          <Header />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <MarqueeSection />
                  <Services />
                  <Detail />
                </>
              }
            />

            <Route path="/services" element={<ServicesDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;