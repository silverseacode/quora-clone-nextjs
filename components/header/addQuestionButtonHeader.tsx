"use client";
import { useModalContext } from "@/context/modal-context";
import useClickOutside from "@/lib/hooks/useClickOutside";
import React, { useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";

interface IProps {
  setSearchTerm: (value: string) => void;
}

export default function AddQuestionButtonHeader({
  setSearchTerm,
}: IProps) {
  const [isOpen, setOpen] = useState(false);
  const { setModalOpen, setSearchOpen } = useModalContext();
  const absoluteDivRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(absoluteDivRef, isOpen, () => {
    setOpen(false);
  });

  return (
    <div className="relative">
      <button className="bg-[#b92b27] justify-around h-[2rem] w-[9rem] px-2 text-white flex flex-row items-center rounded-full">
        <div
          onClick={() => {
            setSearchOpen(false);
            setSearchTerm("");
            setModalOpen(true);
          }}
          className="text-xs font-medium"
        >
          Add question
        </div>
        <div className="border-r border-[#A42623] h-full w-1"></div>
        <div onClick={() => setOpen(true)}>
          <BsChevronDown />
        </div>
      </button>
      {isOpen && (
        <div
          onClick={() => {
            setSearchOpen(false);
            setSearchTerm("");
            setModalOpen(true);
            setOpen(false)
          }}
          ref={absoluteDivRef}
          className="z-20 cursor-pointer shadow-md h-[2rem] w-[8rem] items-center justify-center flex flex-row bg-white absolute top-12 left-2"
        >
          <BsPencil className="text-sm" />
          <span className="text-sm ml-2">Create post</span>
        </div>
      )}
    </div>
  );
}
