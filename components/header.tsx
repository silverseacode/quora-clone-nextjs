import React from "react";
import Image from "next/image";
import { menuItems } from "@/lib/data";
import Search from "./header/search";
import ProfileMenuItem from "./header/profileMenuItem";
import { TfiWorld } from "react-icons/tfi";
import AddQuestionButtonHeader from "./header/addQuestionButtonHeader";

export default function Header() {
  return (
    <div className="flex flex-row bg-white h-[3rem] items-center shadow-md justify-between">
      <div className="mr-5">
        <Image src={"/logo.png"} width={100} height={100} alt="logo quora" />
      </div>
      <nav>
        <ul className="flex flex-row space-x-4">
          {menuItems.map((item) => (
            <li className="text-3xl text-gray-600" key={item.name}>
              {item.icon}
            </li>
          ))}
        </ul>
      </nav>
      <Search />
      <div className="rounded-full border py-1 px-3">
        <span className="font-medium text-gray-500 text-sm">Try Quora</span>
      </div>
      <ProfileMenuItem />
      <div>
        <TfiWorld className="text-2xl" />
      </div>
      <AddQuestionButtonHeader />
    </div>
  );
}
