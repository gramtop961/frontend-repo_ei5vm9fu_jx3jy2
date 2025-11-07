import React from 'react';

const Hero = ({ onShop }) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100 via-white to-white" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Korso — Men's Jewellery
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Minimal pieces crafted in steel and silver. Built to last. Designed to be worn every day.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <button onClick={onShop} className="inline-flex items-center justify-center rounded-md bg-black px-5 py-3 text-white font-medium shadow hover:bg-black/90">
                Shop Rings & Chains
              </button>
              <a href="#collections" className="inline-flex items-center justify-center rounded-md border border-black/10 px-5 py-3 font-medium text-gray-800 hover:bg-black/5">
                Explore Collections
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div>Hypoallergenic</div>
              <div>Waterproof</div>
              <div>Lifetime warranty</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-zinc-100 to-white border border-black/5 shadow-inner overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1603566234499-7797859f9b67?q=80&w=1600&auto=format&fit=crop"
                alt="Men's rings and chains"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
