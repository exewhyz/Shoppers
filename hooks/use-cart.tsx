import { create } from 'zustand';
import { toast } from 'react-hot-toast';
import { persist, createJSONStorage } from "zustand/middleware";

import { Product } from '@/types';
import { AlertTriangle } from 'lucide-react';

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
  checkItems: (products: Product[]) => boolean;
}

const useCart = create(
  persist<CartStore>((set, get) => ({
    items: [],
    addItem: (data: Product) => {
      const currentItems = get().items;
      const existingItem = currentItems.find((item) => item.id === data.id);

      if (existingItem) {
        return toast('Item already in cart.');
      }

      set({ items: [...get().items, data] });
      toast.success('Item added to cart.');
    },
    removeItem: (id: string) => {
      set({ items: [...get().items.filter((item) => item.id !== id)] });
      toast.success('Item removed from cart.');
    },
    checkItems: (products: Product[]) => {
      let isNotAvailable = false;
      const currentItems = get().items;
      for (let i = 0; i < currentItems.length; i++) {
        const isAvailable = products.find((prod) => prod.id === currentItems[i].id);
        if (!isAvailable) {
          set({ items: [...currentItems.filter((item) => item.id !== currentItems[i].id)] });
          isNotAvailable = true;
        }
      }
      if(isNotAvailable) {
        toast.success('Sorry! Some items in your cart are already Sold Out and Removed from the cart');
      }
      return isNotAvailable;
    },
    removeAll: () => set({ items: [] }),
  }), {
    name: 'cart-storage',
    storage: createJSONStorage(() => localStorage)
  }));

export default useCart;
