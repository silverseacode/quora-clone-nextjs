import React from 'react'
import {BsChevronDown} from "react-icons/bs"
export default function AddQuestionButtonHeader() {
  return (
    <button className='bg-[#b92b27] justify-around h-[2rem] w-[9rem] px-2 text-white flex flex-row items-center rounded-full'>
        <div className='text-xs font-medium'>Add question</div>
        <div className='border-r border-[#A42623] h-full w-1'></div>
        <BsChevronDown/>
    </button>
  )
}
