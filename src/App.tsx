import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import {Routes, Route} from "react-router-dom";
import OurStory from './components/Pages/OurStory';
import Contact from './components/Pages/Contact';
import Home from './components/Pages/Home';
import Menu from './components/Pages/Menu';
import GiftCards from './components/Pages/GiftCards';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter >
    <div className="App flex flex-col min-h-screen">
      <NavBar />
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/ourstory" element={<OurStory />} />
        <Route path="/giftcards" element={<GiftCards />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
