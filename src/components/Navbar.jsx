import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Navbar = ({ onNavigate, currentPage, cartCount }) => {
  const linkClass = (page) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
      currentPage === page ? 'text-white bg-black/80' : 'text-gray-700 hover:text-black hover:bg-black/5'
    }`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-black text-white grid place-items-center font-bold">K</div>
            <span className="text-xl font-semibold tracking-tight">Korso</span>
          </div>
          <nav className="flex items-center gap-2">
            <button className={linkClass('home')} onClick={() => onNavigate('home')}>Home</button>
            <button className={linkClass('shop')} onClick={() => onNavigate('shop')}>Shop</button>
            <button className={linkClass('checkout')} onClick={() => onNavigate('checkout')}>Checkout</button>
            <button
              className="relative ml-2 inline-flex items-center gap-2 rounded-md border border-black/10 bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-black/5"
              onClick={() => onNavigate('checkout')}
              aria-label="Cart"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 inline-flex items-center justify-center rounded-full bg-black px-2 py-0.5 text-xs font-semibold text-white shadow">
                  {cartCount}
                </span>
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
