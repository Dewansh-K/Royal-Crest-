import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Lenis from 'lenis'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'
import Collection from './pages/Collection'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Products from './pages/Products'
import { CartProvider } from './context/CartContext'

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,        // higher = slower scroll. default is ~1.2
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.8, // lower = slower per scroll tick
      touchMultiplier: 1.2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CartProvider>
  )
}

export default App