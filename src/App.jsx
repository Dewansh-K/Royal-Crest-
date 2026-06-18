import React, { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
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

// Forces scroll to top whenever the route path changes.
// Plain window.scrollTo isn't reliable here because Lenis intercepts
// and smooths scroll — it has to be told directly via lenis.scrollTo.
const ScrollToTop = ({ lenisRef }) => {
  const location = useLocation();

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return null;
};

const App = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,        // higher = slower scroll. default is ~1.2
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.8, // lower = slower per scroll tick
      touchMultiplier: 1.2,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <CartProvider>
      <Navbar />
      <ScrollToTop lenisRef={lenisRef} />
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