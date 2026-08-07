"use client";

import Image from 'next/image';
import type { GuitarModel } from '@/types/guitar';
import { useCart } from '@/hooks/useCart';

interface GuitarCardProps {
  guitar: GuitarModel;
}

export function GuitarCard({ guitar }: GuitarCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="glass-card group flex flex-col h-full overflow-hidden">
      <div className="relative w-full h-72 bg-slate-900/50 p-6 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent z-10" />
        <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        
        <Image 
          src={guitar.image}
          alt={guitar.name}
          width={400}
          height={400}
          className="object-contain h-full w-auto drop-shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-2 relative z-0"
        />
        
        <div className="absolute top-4 right-4 z-20">
          <span className="px-4 py-1.5 bg-white/10 border border-white/20 text-cyan-300 text-sm font-black tracking-wider rounded-full backdrop-blur-md shadow-lg">
            ${guitar.price}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow relative z-20 bg-slate-950/40">
        <h3 className="text-2xl font-black text-slate-50 mb-3 group-hover:text-cyan-400 transition-colors tracking-tight">
          {guitar.name}
        </h3>
        <p className="text-sm text-slate-400 mb-8 flex-grow leading-relaxed">
          {guitar.description}
        </p>
        <button 
          onClick={() => addToCart(guitar)}
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-400 hover:to-fuchsia-400 text-white font-bold tracking-wide shadow-lg shadow-cyan-500/25 transition-all hover:shadow-fuchsia-500/40 active:scale-[0.98] border border-white/10"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
