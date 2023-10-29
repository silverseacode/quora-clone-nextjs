"use client";
import React, { useState } from "react";
import Image from "next/image";
import { LuShieldQuestion } from "react-icons/lu";
import { IoCreateOutline } from "react-icons/io5";
import { BsPencil } from "react-icons/bs";

export default function CreatePost() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="bg-white border mb-5 rounded-lg px-3 pt-3">
      <div className="flex flex-row">
        <Image
          className="cursor-pointer rounded-full w-8 h-8"
          src={"/profile-avatar.webp"}
          width={100}
          height={100}
          alt="profile avatar"
        />
        <input
          className="bg-gray-100 ml-3 pl-3 border w-full text-sm text-gray-700 rounded-full"
          type="text"
          placeholder="What do you want to ask or share?"
        />
      </div>
      <div className="mt-2 mb-2 flex flex-row justify-around items-center ">
        <div className="hover:bg-black hover:bg-opacity-5 rounded-full cursor-pointer p-1 flex flex-row items-center w-1/3 justify-center">
          <LuShieldQuestion className="text-md mr-2" />
          <span>Ask</span>
        </div>
        <div className="text-gray-200">|</div>
        <div className="cursor-pointer hover:bg-black rounded-full hover:bg-opacity-5 p-1 flex flex-row items-center w-1/3 justify-center">
          <IoCreateOutline className="text-md mr-2" />
          <span>Answer</span>
        </div>
        <div className="text-gray-200">|</div>
        <div className="cursor-pointer hover:bg-black rounded-full hover:bg-opacity-5 p-1 flex flex-row items-center w-1/3 justify-center">
          <BsPencil className="text-md mr-2" />
          <span>Post</span>
        </div>
      </div>
    </div>
  );
}
