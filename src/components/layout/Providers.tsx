"use client";

import { CartProvider } from "@/hooks/useCart";
import { CartSidebar } from "@/components/ui/CartSidebar";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartSidebar />
    </CartProvider>
  );
}
