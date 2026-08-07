"use client";

import Image from 'next/image';
import type { CartItemModel } from '@/types/cart';
import { useCart } from '@/hooks/useCart';
import { useState, useEffect } from 'react';

export function CartItem({ item }: { item: CartItemModel }) {
  const { removeFromCart, updateQuantity } = useCart();
  const [inputValue, setInputValue] = useState(item.quantity.toString());

  // Keep the local input state in sync if the quantity changes externally (e.g., via +/- buttons)
  useEffect(() => {
    setInputValue(item.quantity.toString());
  }, [item.quantity]);

  const handleCommit = () => {
    const val = parseInt(inputValue, 10);
    // If the input is invalid, zero, or negative, we let updateQuantity remove it
    if (isNaN(val) || val <= 0) {
      updateQuantity(item.guitar.id, 0);
    } else {
      updateQuantity(item.guitar.id, val);
      // Ensure the input string matches the parsed valid integer
      setInputValue(val.toString());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // Unfocus the input to trigger blur or just commit immediately
      e.currentTarget.blur();
    }
  };

  return (
    <div className="flex gap-4 items-center bg-white/[0.02] hover:bg-white/[0.04] transition-colors p-3 rounded-2xl group">
      <div className="w-20 h-20 relative flex-shrink-0 bg-slate-950/50 rounded-xl overflow-hidden flex items-center justify-center p-2">
        <Image
          src={item.guitar.image}
          alt={item.guitar.name}
          fill
          className="object-contain"
        />
      </div>
      
      <div className="flex-grow min-w-0">
        <h4 className="font-bold text-slate-100 truncate text-sm">{item.guitar.name}</h4>
        <div className="text-cyan-400 font-bold text-sm my-1">${item.guitar.price}</div>
        
        {/* Quantity Controls */}
        <div className="flex items-center gap-2 mt-2 bg-black/20 w-fit rounded-lg border border-white/5 p-1 transition-colors hover:border-white/10 focus-within:border-cyan-500/50">
          <button 
            onClick={() => updateQuantity(item.guitar.id, item.quantity - 1)}
            className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-slate-100 hover:bg-white/10 rounded-md transition-colors"
          >
            &minus;
          </button>
          
          <input 
            type="text"
            inputMode="numeric"
            value={inputValue}
            onChange={(e) => {
              // Only allow numbers
              setInputValue(e.target.value.replace(/[^0-9]/g, ''));
            }}
            onBlur={handleCommit}
            onKeyDown={handleKeyDown}
            className="text-slate-300 text-xs font-bold w-8 text-center bg-transparent border-none outline-none focus:ring-0 px-0 transition-colors"
          />
          
          <button 
            onClick={() => updateQuantity(item.guitar.id, item.quantity + 1)}
            className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-slate-100 hover:bg-white/10 rounded-md transition-colors"
          >
            &#43;
          </button>
        </div>
      </div>
      
      <button 
        onClick={() => removeFromCart(item.guitar.id)}
        className="text-slate-600 hover:text-rose-400 transition-colors p-2 text-xl self-start opacity-0 group-hover:opacity-100"
        title="Remove item"
      >
        &times;
      </button>
    </div>
  );
}
