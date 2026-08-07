"use client";

import Image from 'next/image';
import type { CartItemModel } from '@/types/cart';
import { useCart } from '@/hooks/useCart';

export function CartItem({ item }: { item: CartItemModel }) {
  const { removeFromCart } = useCart();

  return (
    <div className="flex gap-4 items-center bg-white/[0.02] hover:bg-white/[0.04] transition-colors p-3 rounded-2xl">
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
        <div className="text-slate-400 text-xs mt-0.5 mb-2">Qty: {item.quantity}</div>
        <div className="text-cyan-400 font-bold text-sm">${item.guitar.price * item.quantity}</div>
      </div>
      
      <button 
        onClick={() => removeFromCart(item.guitar.id)}
        className="text-slate-500 hover:text-rose-400 transition-colors p-2 text-xl"
        title="Remove item"
      >
        &times;
      </button>
    </div>
  );
}
