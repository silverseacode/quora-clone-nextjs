"use client";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import {IoImagesOutline} from 'react-icons/io5'
import { useModalContext } from "@/context/modal-context";

export default function Modal() {
  const {isModalOpen, setModalOpen} = useModalContext()

  const [tabActive, setTabActive] = useState("question");
  const [questionValue, setQuestionValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  const [postValue, setPostValue] = useState("")
  const textareaPostRef = useRef<HTMLTextAreaElement>(null);

  function adjustTextareaHeight(textarea: HTMLTextAreaElement) {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  }

  useEffect(() => {
    if (textareaRef.current && tabActive === "question") {
      textareaRef.current.focus();
    }
    if (textareaPostRef.current && tabActive === "post") {
      textareaPostRef.current.focus();
    }
  }, [tabActive]);

  return (
    <>
      {isModalOpen && <div
        onClick={() => setModalOpen(false)}
        className="bg-black opacity-75 h-full w-full top-0 absolute z-10 flex flex-col items-center justify-center"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="bg-white w-[45rem] h-[35rem] rounded-lg relative"
        >
          <div className="p-3">
            <AiOutlineClose onClick={() => setModalOpen(false)} className="cursor-pointer text-2xl text-gray-800 " />
          </div>
          <div className="flex flex-row text-center">
            <div
              className={`cursor-pointer pb-1 ${
                tabActive === "question"
                  ? "border-b-4 border-blue-600"
                  : "border-b border-gray-400 hover:bg-black hover:bg-opacity-10"
              } w-1/2 pt-2`}
              onClick={() => setTabActive("question")}
            >
              <span className="font-medium text-sm">Add Question</span>
            </div>
            <div
              className={`cursor-pointer pb-1 ${
                tabActive === "post"
                  ? "border-b-4 border-blue-600"
                  : "border-b border-gray-400 hover:bg-black hover:bg-opacity-10"
              } w-1/2 pt-2`}
              onClick={() => setTabActive("post")}
            >
              <span className="font-medium text-sm">Create Post</span>
            </div>
          </div>

          {tabActive === "question" && (
            <>
              <div className="flex flex-col bg-blue-100 m-5 p-3 rounded-md">
                <p className="text-blue-600 font-medium">
                  Tips on getting good answers quickly
                </p>
                <ul className="list-disc list-inside">
                  <li className="text-blue-600">
                    Make sure your question has not been asked already
                  </li>
                  <li className="text-blue-600">
                    Keep your question short and to the point
                  </li>
                  <li className="text-blue-600">
                    Double-check grammar and spelling
                  </li>
                </ul>
              </div>
              <div className="w-full px-5">
                <textarea
                  ref={textareaRef}
                  className="resize-none break-words w-full overflow-hidden  appearance-none text-black focus:outline-none  h-auto border-b text-lg placeholder-gray-500 font-medium"
                  value={questionValue}
                  placeholder='Start your question with "What", "How" "Why", etc.'
                  onChange={(e) => {
                    let newQuestion = e.target.value;

                    if (!newQuestion.endsWith("?")) {
                      newQuestion += "?";
                    }

                    setQuestionValue(newQuestion);
                    adjustTextareaHeight(e.target);
                  }}
                  rows={1}
                />
              </div>
              <div className="p-3 absolute border-t bottom-0 w-full flex flex-row items-center justify-end">
                <button className="font-medium text-sm">Cancel</button>
                <button
                  disabled={questionValue.length === 0}
                  className="disabled:opacity-50 bg-blue-600 text-white py-2 px-4 rounded-full ml-3 text-sm"
                >
                  Add question
                </button>
              </div>
            </>
          )}

          {tabActive === "post" && (
            <>
            <div className="p-4">
              <div className="flex flex-row items-center">
                <Image
                  className="cursor-pointer rounded-full w-10 h-10"
                  src={"/profile-avatar.webp"}
                  width={100}
                  height={100}
                  alt="profile avatar"
                />
                <span className="ml-3 text-xs font-bold">Franco Coronel</span>
              </div>
              <textarea
                  ref={textareaPostRef}
                  className="mt-5 resize-none break-words w-full overflow-hidden  appearance-none text-black focus:outline-none  h-auto text-lg placeholder-gray-500 font-medium"
                  value={postValue}
                  placeholder='Say something...'
                  onChange={(e) => {
                    setPostValue(e.target.value);
                    adjustTextareaHeight(e.target);
                  }}
                  rows={1}
                />
            </div>
            <div className="p-3 absolute   border-t bottom-0 w-full flex flex-row items-center justify-between">
            <IoImagesOutline className="text-2xl" />
            <button
              disabled={questionValue.length === 0}
              className="disabled:opacity-50 bg-blue-600 text-white py-2 px-4 rounded-full ml-3 text-sm"
            >
              Post
            </button>
          </div>
          </>
          )}
        </div>
      </div>}
    </>
  );
}
