"use client";
import React from "react";
import Image from "next/image";
import { menuItems } from "@/lib/data";
import Search from "./header/search";
import ProfileMenuItem from "./header/profileMenuItem";
import { TfiWorld } from "react-icons/tfi";
import AddQuestionButtonHeader from "./header/addQuestionButtonHeader";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <div className="flex flex-row bg-white h-[3rem] items-center shadow-md justify-between">
      <div className="mr-5">
        <Image src={"/logo.png"} width={100} height={100} alt="logo quora" />
      </div>
      <nav>
        <ul className="flex flex-row space-x-7">
          {menuItems.map((item) => (
            <div className="relative cursor-pointer" key={item.route}>
              <li className={`text-3xl ${item.route === pathname ? "text-[#b92b27]" : "text-600"}`}>
                {item.icon}
              </li>
              {item.route === pathname && (
                <div className="bg-[#b92b27] w-full absolute -bottom-2 h-1"></div>
              )}
            </div>
          ))}
        </ul>
      </nav>
      <Search />
      <ProfileMenuItem />
      <div>
        <TfiWorld className="text-2xl" />
      </div>
      <AddQuestionButtonHeader />
    </div>
  );
}
