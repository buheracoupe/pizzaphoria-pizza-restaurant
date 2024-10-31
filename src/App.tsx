import React from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import {Routes, Route} from "react-router-dom";
import OurStory from './components/Pages/OurStory';
import Contact from './components/Pages/Contact';
import Home from './components/Pages/Home';
import Menu from './components/Pages/Menu';
import GiftCards from './components/Pages/GiftCards';
import Footer from './components/Footer';
import { AnimatePresence, motion } from 'framer-motion';

export function AnimatedRoutes(){

  const location = useLocation();

  return(
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route
         path="/"
          element={<PageWrapper><Home/></PageWrapper>} />
        <Route
         path="/menu"
          element={<PageWrapper><Menu/></PageWrapper>} />
        <Route
         path="/ourstory"
          element={<PageWrapper><OurStory /></PageWrapper>} />
        <Route
         path="/giftcards"
         element={<PageWrapper><GiftCards /></PageWrapper>} />
        <Route
         path="/contact"
          element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  )

}

interface PageWrapperProps {
  children: React.ReactNode;
}

export function PageWrapper({children}: PageWrapperProps){
  return (
    <motion.div
     initial={{ opacity: 0, y:20}}
      animate={{ opacity: 1, y:0 }}
       exit={{ opacity: 0, y:-20 }}
       transition={{duration: .4}}>
        {children}
    </motion.div>
  )
}


function App() {
  return (
    <BrowserRouter >
    <div className="App flex flex-col min-h-screen">
      <NavBar />
    <div>
    <AnimatedRoutes />
    </div>
    <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
