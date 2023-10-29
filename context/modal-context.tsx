"use client";

import React, { useState, createContext, useContext } from "react";

type ModalContextProviderProps = {
  children: React.ReactNode;
};

type ModalContextType = {
  isModalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalType: string;
  setModalType:React.Dispatch<React.SetStateAction<string>>;
  setSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSearchOpen: boolean;

};

export const ModalContext =
  createContext<ModalContextType | null>(null);

export default function ModalContextProvider({
  children,
}: ModalContextProviderProps) {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState('question');
  
  const [isSearchOpen, setSearchOpen] = useState<boolean>(false);

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        setModalOpen,
        modalType,
        setModalType,
        isSearchOpen,
        setSearchOpen
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