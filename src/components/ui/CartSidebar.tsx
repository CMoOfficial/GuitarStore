"use client";

import { useCart } from '@/hooks/useCart';
import { CartItem } from './CartItem';
import { mapCartModelToDto } from '@/mappers/cart.mapper';
import { motion, AnimatePresence } from 'framer-motion';

export function CartSidebar() {
  const { isCartOpen, closeCart, items, totalPrice, totalItems } = useCart();

  const handleCheckout = () => {
    const cartDto = mapCartModelToDto({ items, totalItems, totalPrice });
    console.log("Checking out with payload:", cartDto);
    alert("Checkout initiated!");
  };

  // Apple Rule #4: Critically damped springs for UI components
  const springConfig = { type: 'spring' as const, bounce: 0, duration: 0.4 };

  // Utility to calculate swipe momentum (Rule #6)
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop: Opacity transition is fine here as it's not gesture-driven */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-[60]"
            onClick={closeCart}
          />
          
          {/* Sidebar Drawer: Fully gesture-driven and interruptible */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={springConfig}
            
            drag="x"
            dragConstraints={{ left: 0, right: 300 }} // Prevents dragging too far left
            dragElastic={{ left: 0.05, right: 0.8 }}  // Apple Rule #9: Rubber-banding resistance
            onDragEnd={(e, { offset, velocity }) => {
              // Apple Rule #6 & #10: Momentum projection to determine intent
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe > 10000 || offset.x > 150) {
                closeCart();
              }
            }}
            
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-slate-900/95 backdrop-blur-3xl border-l border-white/5 z-[70] shadow-[-10px_0_30px_rgba(0,0,0,0.5)] flex flex-col"
          >
            {/* Header */}
            <div className="px-6 py-5 flex justify-between items-center border-b border-white/5">
              <h2 className="text-xl font-bold text-slate-50 tracking-tight">Your Cart</h2>
              <button 
                onClick={closeCart}
                className="w-8 h-8 rounded-full bg-transparent flex items-center justify-center text-slate-400 hover:text-slate-100 hover:bg-white/10 transition-colors text-lg"
              >
                &times;
              </button>
            </div>
            
            {/* Items List */}
            <div className="flex-grow overflow-y-auto px-4 py-6 flex flex-col gap-3">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-slate-500">
                  <svg className="w-12 h-12 mb-4 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <p className="text-sm font-medium">Your cart is empty.</p>
                  <button onClick={closeCart} className="mt-4 text-cyan-400 text-sm hover:underline">
                    Continue shopping
                  </button>
                </div>
              ) : (
                items.map(item => <CartItem key={item.guitar.id} item={item} />)
              )}
            </div>
            
            {/* Footer / Checkout */}
            <div className="p-6 border-t border-white/5 bg-slate-950/30">
              <div className="flex justify-between items-center mb-5">
                <span className="text-slate-400 text-sm font-medium">Subtotal</span>
                <span className="text-2xl font-black text-slate-50">${totalPrice}</span>
              </div>
              <button 
                onClick={handleCheckout}
                disabled={items.length === 0}
                className="w-full py-3.5 rounded-xl bg-slate-50 hover:bg-slate-200 text-slate-950 font-bold tracking-wide disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              >
                Checkout Securely
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
