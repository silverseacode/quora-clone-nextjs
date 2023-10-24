import React from "react";
import { BsSearch } from "react-icons/bs";
export default function Search() {
  return (
    <div className="flex flex-row border border-gray-100 items-center">
      <BsSearch className="text-sm mx-2 text-gray-500" />
      <input
        type="text"
        className="py-2 font-light text-[0.8rem]"
        placeholder="Search Quora"
      />
    </div>
  );
}
