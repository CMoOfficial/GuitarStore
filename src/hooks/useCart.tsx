"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { GuitarModel } from "@/types/guitar";
import type { CartItemModel } from "@/types/cart";

interface CartContextType {
  items: CartItemModel[];
  addToCart: (guitar: GuitarModel) => void;
  removeFromCart: (guitarId: number) => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItemModel[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const addToCart = (guitar: GuitarModel) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.guitar.id === guitar.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.guitar.id === guitar.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { guitar, quantity: 1 }];
    });
    openCart();
  };

  const removeFromCart = (guitarId: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.guitar.id !== guitarId));
  };

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce((acc, item) => acc + item.guitar.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, totalItems, totalPrice, isCartOpen, openCart, closeCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
