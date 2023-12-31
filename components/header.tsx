"use client";
import React, { useState } from "react";
import Image from "next/image";
import { menuItems } from "@/lib/data";
import ProfileMenuItem from "./header/profileMenuItem";
import { TfiWorld } from "react-icons/tfi";
import AddQuestionButtonHeader from "./header/addQuestionButtonHeader";
import { usePathname } from "next/navigation";
import { BsSearch } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Modal from "./globals/modal";
import { useModalContext } from "@/context/modal-context";

export default function Header() {
  const pathname = usePathname();
  const [searchTerm, setSearchTerm] = useState("");

  const { isSearchOpen, setSearchOpen } = useModalContext();


  const handleChangeSearchTerm = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <>
      <div className="flex flex-row bg-white h-[3rem] items-center  justify-between">
        <div className="mr-5">
          <Image src={"/logo.png"} width={100} height={100} alt="logo quora" />
        </div>
        <nav>
          <ul className="flex flex-row space-x-7">
            {menuItems.map((item) => (
              <div className="relative cursor-pointer" key={item.route}>
                <li
                  className={`text-3xl ${
                    item.route === pathname ? "text-[#b92b27]" : "text-600"
                  }`}
                >
                  {item.icon}
                </li>
                {item.route === pathname && (
                  <div className="bg-[#b92b27] w-full absolute -bottom-2 h-1"></div>
                )}
              </div>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col relative">
          <div
            className={`${
              isSearchOpen ? "w-[18rem]" : "w-[10rem]"
            } lg:w-[25rem] flex flex-row border border-gray-100 items-center`}
          >
            <BsSearch className="text-sm mx-2 text-gray-500" />
            <input
              type="text"
              value={searchTerm}
              onClick={() => setSearchOpen(true)}
              onChange={(e) => handleChangeSearchTerm(e.target.value)}
              className={`${
                isSearchOpen ? "w-[18rem]" : "w-[8rem]"
              } outline-none py-2 font-light  lg:w-[25rem] text-[0.8rem]`}
              placeholder="Search Quora"
            />
          </div>
          {isSearchOpen && searchTerm.length > 0 && (
            <div
              className={`w-[18rem] bg-white h-auto absolute z-20 top-10 rounded-md `}
            >
              <div className="flex flex-row  items-center py-3 px-1 ml-2 border-b">
                <BsSearch className="text-xl mr-3 text-gray-500" />
                <div className="text-gray-600 max-w-xs">
                  Search:{" "}
                  <div className="overflow-hidden break-words w-[14rem] font-bold">
                    {searchTerm}
                  </div>
                </div>
              </div>
              <div className="flex flex-row py-3 px-1 ml-2">
                <AiOutlinePlusCircle className="text-2xl mr-3  text-blue-500" />
                <span className=" text-blue-500">Add New Question</span>
              </div>
            </div>
          )}
        </div>
        {!isSearchOpen && (
          <>
            <ProfileMenuItem />
            <div>
              <TfiWorld className="text-2xl" />
            </div>
          </>
        )}
        <AddQuestionButtonHeader setSearchTerm={setSearchTerm} />
      </div>
      
    </>
  );
}
