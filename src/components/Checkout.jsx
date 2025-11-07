import React from 'react';

const Checkout = ({ cart, onRemove, onPlaceOrder }) => {
  const total = cart.reduce((sum, item) => sum + item.price * (item.qty || 1), 0);

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Checkout</h2>
        {cart.length === 0 ? (
          <div className="rounded-xl border border-black/10 bg-white p-8 text-center text-gray-600">Your cart is empty.</div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-4 rounded-xl border border-black/10 bg-white p-4">
                  <img src={item.image} alt={item.name} className="h-20 w-20 rounded-lg object-cover" />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{item.name}</div>
                    <div className="text-gray-600">${item.price}</div>
                  </div>
                  <button onClick={() => onRemove(item.id)} className="text-sm text-red-600 hover:underline">Remove</button>
                </div>
              ))}
            </div>
            <aside className="space-y-4">
              <div className="rounded-xl border border-black/10 bg-white p-6">
                <div className="flex items-center justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="mt-2 flex items-center justify-between text-gray-700">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="mt-4 border-t border-black/10 pt-4 flex items-center justify-between text-gray-900 font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <button
                  onClick={onPlaceOrder}
                  className="mt-6 w-full inline-flex items-center justify-center rounded-md bg-black px-5 py-3 text-white font-medium hover:bg-black/90"
                >
                  Place order
                </button>
                <p className="mt-2 text-xs text-gray-500">By placing your order, you agree to our Terms & Privacy Policy.</p>
              </div>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
};

export default Checkout;
