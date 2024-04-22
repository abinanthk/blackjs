import { ComponentProps } from "react";
import Portal from "../Portal/Portal";

import { useRef } from "react";
import { StoreApi, createStore, useStore } from "zustand";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";

type ModalStoreTypes = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  open: () => void;
  close: () => void;
};

export const useModal = (): StoreApi<ModalStoreTypes> => {
  const storeRef = useRef<any>(null);
  if (!storeRef?.current) {
    storeRef.current = createStore<ModalStoreTypes>((set) => ({
      visible: false,
      setVisible: (visible) => set(() => ({ visible })),
      open: () => set(() => ({ visible: true })),
      close: () => set(() => ({ visible: false })),
    }));
  }

  return storeRef.current;
};

export const useModalStore = useStore;

export type ModalProps = ComponentProps<"div"> & {
  store: StoreApi<ModalStoreTypes>;
};

const ModalBase = (props: ModalProps) => {
  const visible = useModalStore(props.store, (state) => state.visible);

  if (!visible) {
    return null;
  }

  return (
    <Portal>
      <div className="bg-red-600 h-52 w-52 flex flex-col mx-auto mt-[30vh]">
        {props.children}
      </div>
    </Portal>
  );
};

const Modal = (props: ModalProps) => {
  if (props.store === undefined) {
    throw new Error("store is missing in the props");
  }

  return <ModalBase {...props} />;
};

Modal.Header = Header;
Modal.Main = Main;
Modal.Footer = Footer;

export default Modal;
