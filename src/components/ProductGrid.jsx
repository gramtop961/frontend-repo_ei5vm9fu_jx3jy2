import React from 'react';

const sampleProducts = [
  {
    id: 'ring-stark',
    name: 'Stark Signet Ring',
    price: 79,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1600&auto=format&fit=crop',
    tag: 'Best Seller',
  },
  {
    id: 'chain-helix',
    name: 'Helix Figaro Chain',
    price: 59,
    image: 'https://images.unsplash.com/photo-1416543974351-c28453497ef4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIZWxpeCUyMEZpZ2FybyUyMENoYWlufGVufDB8MHx8fDE3NjI0OTI1NjF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tag: 'New',
  },
  {
    id: 'brace-cable',
    name: 'Cable Link Bracelet',
    price: 49,
    image: 'https://images.unsplash.com/photo-1560972550-aba3456b5564?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'earr-minimal',
    name: 'Minimal Hoop Earrings',
    price: 39,
    image: 'https://images.unsplash.com/photo-1538331269258-6c97a6bdeae0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNaW5pbWFsJTIwSG9vcCUyMEVhcnJpbmdzfGVufDB8MHx8fDE3NjI0OTI1NjJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

const ProductGrid = ({ onAdd }) => {
  return (
    <section id="collections" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Featured pieces</h2>
            <p className="text-gray-600">Curated essentials for everyday wear</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sampleProducts.map((p) => (
            <article key={p.id} className="group rounded-2xl overflow-hidden border border-black/5 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-medium text-gray-900">{p.name}</h3>
                  {p.tag && (
                    <span className="inline-flex items-center rounded-full bg-black/90 px-2 py-0.5 text-xs font-medium text-white">{p.tag}</span>
                  )}
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-gray-900 font-semibold">${p.price}</span>
                  <button onClick={() => onAdd(p)} className="inline-flex items-center justify-center rounded-md bg-black px-3 py-2 text-white text-sm font-medium hover:bg-black/90">
                    Add to cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
