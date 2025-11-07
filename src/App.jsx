import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Checkout from './components/Checkout';

function App() {
  const [page, setPage] = useState('home');
  const [cart, setCart] = useState([]);

  const cartCount = useMemo(() => cart.length, [cart]);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      // prevent duplicates for simplicity; could increase qty
      if (prev.some((p) => p.id === product.id)) return prev;
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const handlePlaceOrder = () => {
    alert('Thank you for your purchase from Korso!');
    setCart([]);
    setPage('home');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar onNavigate={setPage} currentPage={page} cartCount={cartCount} />

      {page === 'home' && (
        <>
          <Hero onShop={() => setPage('shop')} />
          <ProductGrid onAdd={handleAddToCart} />
          <footer className="border-t border-black/5 py-12 mt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
              <div>© {new Date().getFullYear()} Korso. All rights reserved.</div>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:underline">Shipping & Returns</a>
                <a href="#" className="hover:underline">Care Guide</a>
                <a href="#" className="hover:underline">Contact</a>
              </div>
            </div>
          </footer>
        </>
      )}

      {page === 'shop' && (
        <div className="pt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight">Shop</h2>
            <p className="text-gray-600 mt-2">Discover rings, chains, and bracelets designed for everyday wear.</p>
          </div>
          <ProductGrid onAdd={handleAddToCart} />
        </div>
      )}

      {page === 'checkout' && (
        <Checkout cart={cart} onRemove={handleRemoveFromCart} onPlaceOrder={handlePlaceOrder} />
      )}
    </div>
  );
}

export default App;
