import create from "zustand";

export const useStore = create((set) => {
  return {
    counter: 0,
    increaseCounter: () => set((state) => ({ counter: state.counter + 1 })),
    decreaseCounter: () => set((state) => ({ counter: state.counter - 1 })),
  };
});

export const useCart = create((set) => {
  return {
    items: [],
    totalPrice: () => set(state => {
        const sum = state.items.reduce((cur, item) => cur + item.price, 0);
        return {totalPrice: sum };
    }),
    addToCart: (item) =>
      set((state) => {
        //check if item is in cart
        const index = state.items.findIndex((it) => it.id === item.id);

        if (index !== -1) {
          const newState = state.items.map((stateItem) => {
            if (stateItem.id === item.id) {
              return { ...stateItem, qty: stateItem.qty + 1 };
            }
            return stateItem;
          });
          return { items: newState };
        } else {
          return { items: [...state.items, { ...item, qty: 1 }] };
        }
      }),
    removeFromCart: (id) =>
      set((state) => {
        const newArray = state.item.filter((item) => item.id !== id);
        return { items: newArray };
      }),
  };
});

const useUserStore = create((set) => ({
    user: {
        token: "",
        isLoggedIn: false,
    },
    setUser: (token) => 
        set((state) => ({ user: { token: token, isLoggedIn: true} })),
}))