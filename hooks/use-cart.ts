import { create } from 'zustand';
import { toast } from 'react-hot-toast';
import { persist, createJSONStorage } from "zustand/middleware"; 

import { Product } from '@/types';

export interface CartItem {
    product: Product;
    quantity: number; 
  }  

export interface CartStore {
  items: CartItem[];
  addItem: (data: CartItem) => void;
  removeItem: (id: number) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>((set, get) => ({
  items: [],
  addItem: (data: CartItem) => {
    const currentItems = get().items;
    const existingItem = currentItems?.find((item) => item.product.id === data.product.id);
    
    if (existingItem) {
        const updatedItems = currentItems.map((item) => {
            if (item.product.id === data.product.id) {
              return { product: item.product, quantity: item.quantity + data.quantity };
            }
            return item;
          });
          set({ items: updatedItems });
    }
    else
        set({ items: [...currentItems, { product: data.product, quantity: data.quantity }] });

    toast.success('Item added to cart.');
  },
  removeItem: (id: number) => {
      set({ items: [...get().items.filter((item) => item.product.id !== id)] });
      toast.success('Item removed from cart.');
    },
  removeAll: () => set({ items: [] }),
}), {
  name: 'cart-storage',
  storage: createJSONStorage(() => localStorage)
}));

export default useCart;