"use client";
import React, {  useRef, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { BsChevronRight } from "react-icons/bs";
import { TbMessages } from "react-icons/tb";
import useClickOutside from "@/lib/hooks/useClickOutside";
import Image from 'next/image'

export default function ProfileMenuItem() {
  const [isOpen, setOpen] = useState(false);

  const absoluteDivRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(absoluteDivRef, isOpen, () => {
    setOpen(false);
  });

  return (
    <div className="relative">
      <Image onClick={() => setOpen(true)} className="cursor-pointer rounded-full w-7 h-7" src={'/profile-avatar.webp'} width={100} height={100} alt="profile avatar" />
      {isOpen && (
        <div
          ref={absoluteDivRef}
          className="absolute bg-white -left-[5.8rem] top-[3.5rem]  pt-4 shadow-md"
        >
          <div className="arrow"></div>
          <div className="w-[215px] border-b">
            <div className="flex flex-col px-4">
            <Image onClick={() => setOpen(true)} className="cursor-pointer rounded-full w-10 h-10" src={'/profile-avatar.webp'} width={100} height={100} alt="profile avatar" />

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
