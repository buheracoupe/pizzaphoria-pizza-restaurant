import React from 'react';
import { BrowserRouter, useLocation, ScrollRestoration } from 'react-router-dom';
import NavBar from './components/NavBar';
import {Routes, Route} from "react-router-dom";
import OurStory from './components/Pages/OurStory';
import Contact from './components/Pages/Contact';
import Home from './components/Pages/Home';
import Menu from './components/Pages/Menu';
import GiftCards from './components/Pages/GiftCards';
import Footer from './components/Footer';
import { AnimatePresence, motion } from 'framer-motion';
import { useLayoutEffect } from 'react';
import OrderPage from './components/Pages/pageComponents/OrderPages/OrderPage';
import { closeCart } from './components/Redux/NavSlice';
import { useAppDispatch,useTypedSelector } from './components/Redux/hooks';


export function ScrollToTop(){
const {pathname} = useLocation();

useLayoutEffect(()=>{
  window.scrollTo({top:0, behavior: "smooth" });
}, [pathname])

return null
}

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
        <Route
         path="/order"
          element={<PageWrapper><OrderPage /></PageWrapper>} />
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
  const dispatch = useAppDispatch();
  const cartState = useTypedSelector((state) => state.nav.cartOpen)
  return (
    <BrowserRouter >
    <div
    onClick={() => {
      if(cartState){
        dispatch(closeCart());
      }
    }}
     className="App flex flex-col min-h-screen">
    <ScrollToTop />
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
