import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartState = {
  total: number;
};

export type CartActions = {
  updateCart: (total: CartState["total"]) => void;
  resetCartState: () => void;
};

export type CartStore = CartState & CartActions;

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      total: 0,
      updateCart: (total) => set((state) => ({ total: state.total + total })),
      resetCartState: () => set({ total: 0 }),
    }),
    { name: "totalCart" }
  )
);
