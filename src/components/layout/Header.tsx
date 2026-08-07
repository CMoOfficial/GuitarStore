"use client";

import Link from 'next/link';
import { useCart } from '@/hooks/useCart';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Header() {
  const { totalItems, openCart } = useCart();
  const { scrollY } = useScroll();
  
  // Apple Rule #12: Translucency conveys hierarchy.
  // The header becomes a frosted glass panel only when you scroll past the top.
  const background = useTransform(
    scrollY,
    [0, 50],
    ['rgba(15, 23, 42, 0)', 'rgba(15, 23, 42, 0.7)']
  );
  
  const backdropFilter = useTransform(
    scrollY,
    [0, 50],
    ['blur(0px)', 'blur(20px)']
  );
  
  const borderBottom = useTransform(
    scrollY,
    [0, 50],
    ['1px solid rgba(255,255,255,0)', '1px solid rgba(255,255,255,0.08)']
  );

  return (
    <motion.header 
      style={{ background, backdropFilter, borderBottom }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent transition-opacity">
          LUMINARY
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-cyan-400 transition-colors">Store</Link>
          <Link href="/" className="hover:text-cyan-400 transition-colors">Custom Builds</Link>
          <Link href="/" className="hover:text-cyan-400 transition-colors">About</Link>
        </nav>
        <button 
          onClick={openCart}
          className="px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm font-medium text-cyan-50 flex items-center gap-2 shadow-[0_0_15px_rgba(34,211,238,0.05)]"
        >
          Cart 
          <span className="bg-cyan-500/20 text-cyan-300 px-2.5 py-0.5 rounded-full text-xs font-black border border-cyan-500/30">
            {totalItems}
          </span>
        </button>
      </div>
    </motion.header>
  );
}
