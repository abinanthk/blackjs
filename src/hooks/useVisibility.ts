import { useRef } from "react";
import { StoreApi, createStore, useStore } from "zustand";

export type VisibilityStoreTypes = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  open: () => void;
  close: () => void;
};

export const useVisibility = (): StoreApi<VisibilityStoreTypes> => {
  const storeRef = useRef<any>(null);
  if (!storeRef?.current) {
    storeRef.current = createStore<VisibilityStoreTypes>((set) => ({
      visible: false,
      setVisible: (visible) => set(() => ({ visible })),
      open: () => set(() => ({ visible: true })),
      close: () => set(() => ({ visible: false })),
    }));
  }

  return storeRef.current;
};


export const useVisibilityStore = useStore;
