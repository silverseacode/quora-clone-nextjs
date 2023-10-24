"use client";
import React, { useEffect, useRef, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { BsChevronRight } from "react-icons/bs";
import { TbMessages } from "react-icons/tb";
import useClickOutside from "@/lib/hooks/useClickOutside";

export default function ProfileMenuItem() {
  const [isOpen, setOpen] = useState(false);

  const absoluteDivRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(absoluteDivRef, isOpen, () => {
    setOpen(false);
  });

  return (
    <div className="relative">
      <CgProfile
        onClick={() => setOpen(true)}
        className="text-blue-700 text-3xl"
      />
      {isOpen && (
        <div
          ref={absoluteDivRef}
          className="absolute bg-white -left-[5.8rem] top-[3.5rem]  pt-4 shadow-md"
        >
          <div className="arrow"></div>
          <div className="w-[215px] border-b">
            <div className="flex flex-col px-4">
              <CgProfile className="text-blue-700 text-5xl" />

              <div className="flex flex-row justify-between items-center py-2">
                {/* TODO replace with current user */}

                <span className="font-bold ">Franco Coronel</span>
                <BsChevronRight />
              </div>
            </div>
          </div>
          <div className="flex flex-row p-4">
            <TbMessages className="text-2xl" />
            <span className="ml-4">Messages</span>
          </div>
        </div>
      )}
    </div>
  );
}
