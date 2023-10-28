import { Space } from "@/models";
import React from "react";
import Image from "next/image";

interface SpacesSidebarProps {
  spaces: Space[];
}

export default function SpacesSidebar({ spaces }: SpacesSidebarProps) {
  return (
    <aside className="border-b border-gray-300">
      {spaces.map((item) => (
        <div className="w-[140px] p-2 rounded-lg justify-center hover:bg-black hover:bg-opacity-10 flex flex-row mb-5 h-auto" key={item.id}>
          <Image
            className="rounded-lg h-5 w-5 mr-2"
            src={item.picture}
            alt="picture space"
            width={100}
            height={100}
          />
          <div className=" text-gray-700 text-sm overflow-hidden line-clamp-2 h-auto w-[200px]">{item.title}</div>
        </div>
      ))}
    </aside>
  );
}
