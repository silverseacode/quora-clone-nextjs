"use client";

import React, { useState, createContext, useContext } from "react";

type ModalContextProviderProps = {
  children: React.ReactNode;
};

type ModalContextType = {
  isModalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModalContext =
  createContext<ModalContextType | null>(null);

export default function ModalContextProvider({
  children,
}: ModalContextProviderProps) {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        setModalOpen
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  const context = useContext(ModalContext);

  if (context === null) {
    throw new Error(
      "useModalContext must be used within an ModalContextProvider"
    );
  }

  return context;
}