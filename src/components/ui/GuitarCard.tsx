"use client";

import Image from 'next/image';
import type { GuitarModel } from '@/types/guitar';
import { useCart } from '@/hooks/useCart';
import { motion } from 'framer-motion';

interface GuitarCardProps {
  guitar: GuitarModel;
}

export function GuitarCard({ guitar }: GuitarCardProps) {
  const { addToCart } = useCart();

  return (
    <motion.div 
      // Apple Rule: Use critically damped springs for hovering, not CSS transitions.
      whileHover={{ y: -6, transition: { type: 'spring', bounce: 0, duration: 0.4 } }}
      className="glass-card group flex flex-col h-full overflow-hidden"
    >
      <div className="relative w-full h-72 bg-slate-900/30 p-6 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          whileHover={{ scale: 1.05, rotate: 1.5 }}
          transition={{ type: 'spring', bounce: 0, duration: 0.5 }}
          className="relative z-0 h-full w-full flex items-center justify-center"
        >
          <Image 
            src={guitar.image}
            alt={guitar.name}
            width={400}
            height={400}
            className="object-contain h-full w-auto drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
          />
        </motion.div>
        
        <div className="absolute top-4 right-4 z-20">
          <span className="px-4 py-1.5 bg-white/10 border border-white/20 text-cyan-300 text-sm font-black tracking-wider rounded-full backdrop-blur-md shadow-lg">
            ${guitar.price}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow relative z-20 bg-slate-950/20">
        <h3 className="text-xl font-bold text-slate-50 mb-3 group-hover:text-cyan-400 transition-colors tracking-tight">
          {guitar.name}
        </h3>
        <p className="text-sm text-slate-400 mb-8 flex-grow leading-relaxed">
          {guitar.description}
        </p>
        
        <button 
          onClick={() => addToCart(guitar)}
          className="w-full py-3.5 rounded-xl bg-white/[0.05] hover:bg-cyan-500 text-white font-bold tracking-wide transition-colors border border-white/10 hover:border-transparent hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}
