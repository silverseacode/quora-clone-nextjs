"use client";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface IProps {
  setModalOpen: (value: boolean) => void;
}
export default function Modal({ setModalOpen }: IProps) {
  const [tabActive, setTabActive] = useState("question");
  const [questionValue, setQuestionValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function adjustTextareaHeight(textarea: any) {
    textarea.style.height = "auto"; 
    textarea.style.height = textarea.scrollHeight + "px"; 
  }

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  return (
    <>
      <div
        onClick={() => setModalOpen(false)}
        className="bg-black opacity-75 h-full w-full z-10 flex flex-col items-center justify-center"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="bg-white w-[45rem] h-[35rem] rounded-lg"
        >
          <div className="p-3">
            <AiOutlineClose className="text-2xl text-gray-800 " />
          </div>
          <div className="flex flex-row text-center">
            <div
              className={`pb-1 ${
                tabActive === "question"
                  ? "border-b-4 border-blue-600"
                  : "border-b border-gray-400"
              } w-1/2`}
              onClick={() => setTabActive("question")}
            >
              <span className="font-medium text-sm">Add Question</span>
            </div>
            <div
              className={`pb-1 ${
                tabActive === "post"
                  ? "border-b-4 border-blue-600"
                  : "border-b border-gray-400"
              } w-1/2`}
              onClick={() => setTabActive("post")}
            >
              <span className="font-medium text-sm">Create Post</span>
            </div>
          </div>
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

                if (!newQuestion.endsWith('?')) {
                    newQuestion += '?';
                  }

                setQuestionValue(newQuestion);
                adjustTextareaHeight(e.target);
              }}
              rows={1}
            />
          </div>
        </div>
      </div>
    </>
  );
}
