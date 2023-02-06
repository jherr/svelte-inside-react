import { create } from "zustand";
import { readable } from "svelte/store";

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

export const counter = readable(useStore.getState(), (set) => {
  const unsubscribe = useStore.subscribe(set);
  return () => unsubscribe();
});

export default useStore;
