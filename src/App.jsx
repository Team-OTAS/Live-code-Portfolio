import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About";
// import Service from "./pages/Service";
import ServicePage from "./pages/Service";
import Contact from "./pages/Contact";
import PageTransition from "./components/PageTransition";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./ScrollToTop";
import { Analytics } from "@vercel/analytics/react";
// import About from "./pages/About";
// import Service from "./pages/Service";
// import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <AnimatePresence>
      <Analytics />
      <Router>
        <div>
          <ScrollToTop />
          <div className="absolute top-0 md:top-5 z-50 w-full">
            <Navbar />
          </div>
          <Routes>
            <Route
              path="/"
              element={
                // <PageTransition>
                <Home />
                // </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />
            <Route
              path="/service"
              element={
                <PageTransition>
                  <ServicePage />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />
            {/* <Route path="*" element={<PageNotFound />} /> */}
          </Routes>
        </div>
        <Footer classData="bg-footer" />
      </Router>
    </AnimatePresence>
  );
}

export default App;
