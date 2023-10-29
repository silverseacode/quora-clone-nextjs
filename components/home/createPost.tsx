"use client";
import React, { useState } from "react";
import Image from "next/image";
import { LuShieldQuestion } from "react-icons/lu";
import { IoCreateOutline } from "react-icons/io5";
import { BsPencil } from "react-icons/bs";
import { useModalContext } from "@/context/modal-context";
import { useRouter } from "next/navigation";

export default function CreatePost() {
  const {setModalOpen, setModalType} = useModalContext()
  const [inputValue, setInputValue] = useState("");
  const router = useRouter()
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
        onClick={() => {
          setModalType("question")
          setModalOpen(true)
        }} 
          className="bg-gray-100 ml-3 pl-3 border w-full text-sm text-gray-700 rounded-full"
          type="text"
          placeholder="What do you want to ask or share?"
        />
      </div>
      <div className="mt-2 mb-2 flex flex-row justify-around items-center ">
        <div onClick={() => {
          setModalType("question")
          setModalOpen(true)
        }} className="hover:bg-black hover:bg-opacity-5 rounded-full cursor-pointer p-1 flex flex-row items-center w-1/3 justify-center text-gray-500">
          <LuShieldQuestion className="text-md mr-2" />
          <span className="text-sm">Ask</span>
        </div>
        <div className="text-gray-200">|</div>
        <div onClick={() => router.push('/answer')} className="cursor-pointer hover:bg-black rounded-full hover:bg-opacity-5 p-1 flex flex-row items-center w-1/3 justify-center text-gray-500">
          <IoCreateOutline className="text-md mr-2" />
          <span className="text-sm">Answer</span>
        </div>
        <div className="text-gray-200">|</div>
        <div onClick={() => {
          setModalType("post")
          setModalOpen(true)
        }} className="cursor-pointer hover:bg-black rounded-full hover:bg-opacity-5 p-1 flex flex-row items-center w-1/3 justify-center text-gray-500">
          <BsPencil className="text-md mr-2" />
          <span className="text-sm">Post</span>
        </div>
      </div>
    </div>
  );
}
