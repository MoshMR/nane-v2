import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import BestSeller from './components/BestSeller/BestSeller';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
import ScrollTop from './components/ScrollTop/ScrollTop';
import { useCart } from './hooks/useCart';

function App() {
  const { cartCount, addToCart } = useCart();

  return (
    <div className="App">
      <Navbar cartCount={cartCount} />
      <Banner />
      <Hero />
      <Features />
      <BestSeller addToCart={addToCart} />
      <Products addToCart={addToCart} />
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
