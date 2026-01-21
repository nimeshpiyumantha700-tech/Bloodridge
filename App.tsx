
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { CartItem, Product } from './types.ts';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';

// Pages
import HomePage from './pages/HomePage.tsx';
import TattoosPage from './pages/TattoosPage.tsx';
import ShopPage from './pages/ShopPage.tsx';
import ProductDetailPage from './pages/ProductDetailPage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import CartPage from './pages/CartPage.tsx';
import BookingPage from './pages/BookingPage.tsx';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product, size: string) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id && item.selectedSize === size);
      if (existing) {
        return prev.map(item => 
          item.id === product.id && item.selectedSize === size 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { ...product, selectedSize: size, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string, size: string) => {
    setCart(prev => prev.filter(item => !(item.id === id && item.selectedSize === size)));
  };

  const updateQuantity = (id: string, size: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id && item.selectedSize === size) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-black text-white selection:bg-red-500 selection:text-white">
        <Navbar cartCount={cartCount} />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tattoos" element={<TattoosPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductDetailPage addToCart={addToCart} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
            <Route path="/booking" element={<BookingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
