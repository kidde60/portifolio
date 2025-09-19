import React, { Suspense, lazy } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Lazy load components for better performance
const Home = lazy(() => import("./Home/Home"));
const About = lazy(() => import("./About/About"));
const Contact = lazy(() => import("./Contact/Contact"));
const ProjectsCard = lazy(() => import("./Projects/Projects"));

// Loading component
const LoadingSpinner = () => (
  <div
    className="loading-container"
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "var(--primary-blue)",
    }}
  >
    <div className="loading-spinner"></div>
  </div>
);

// Page transition wrapper
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    style={{ minHeight: "100vh" }}
  >
    {children}
  </motion.div>
);

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <PageWrapper>
                  <Home />
                </PageWrapper>
              </Suspense>
            }
          />
          <Route
            path="/About"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <PageWrapper>
                  <About />
                </PageWrapper>
              </Suspense>
            }
          />
          <Route
            path="/Projects"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <PageWrapper>
                  <ProjectsCard />
                </PageWrapper>
              </Suspense>
            }
          />
          <Route
            path="/Contact"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <PageWrapper>
                  <Contact />
                </PageWrapper>
              </Suspense>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
