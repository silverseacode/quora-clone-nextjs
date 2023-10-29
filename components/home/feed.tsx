import React from "react";
import Image from "next/image";
import { PiArrowFatUpBold } from "react-icons/pi";
import { PiArrowFatDownBold } from "react-icons/pi";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import {FiRefreshCw} from 'react-icons/fi'
export default function Feed() {
  const posts = [
    {
      id: 1,
      profilePic: "/profile-avatar.webp",
      fullName: "Hector Quintanilla",
      about: "Founder at BeBusinessSmart.com (2019-present)",
      createdAt: new Date(),
      title: "What comes first in entrepreneurship; the passion or the idea?",
      description: `I know of many people who have amazing business ideas and never get started
        Why
        I know many people who have the dream and passion to do something significant with their life… and they never get started!
        
        Why?
        
        To answer your question:
        
        Its NOT the idea nor the passion that leads you into entrepreneurship! Its the FREEDOM to live your own life that leads you into entrepreneurship!
        
        Stop being a people pleaser and stand up for what YOU believe. Thats the ONLY character and accountability that will lead you to entrepreneurship — the courage to live by YOUR terms and NOT following cultural or social guidelines.`,
      views: 38.6,
      upvotes: 1.674,
      shares: 18,
      comments: 66,
      answers: 29,
    },
  ];

  return (
    <div className="bg-gray-200">
      {posts.map((item) => (
        <div
          key={item.id}
          className="bg-white border  border-gray-300 mb-3 rounded-md"
        >
          <div className="flex flex-row items-center pt-3 px-3">
            <Image
              className="h-10 w-10 rounded-full"
              src={item.profilePic}
              alt="profile picture creator of post"
              width={100}
              height={100}
            />
            <div className="flex flex-col ml-2">
              <span className="text-sm font-bold">{item.fullName}</span>
              <span className="text-xs text-gray-500">{item.about}</span>
            </div>
          </div>
          <div className="flex flex-col px-3">
            <p className="font-bold my-2">{item.title}</p>
            <p>{item.description}</p>
          </div>
          <div className="mt-2 px-3 flex flex-row justify-between items-center">
            <div className="space-x-2 text-gray-500 text-sm">
              <span>{item.views}k views</span>
              <span>View {item.upvotes} upvotes</span>
              <span>View {item.shares} shares</span>
            </div>
            <div className=" text-gray-500 text-sm">
              <span>1 of {item.answers} answers</span>
            </div>
          </div>
          <div className=" px-3 flex flex-row items-center mt-2 mb-2">
            <div className="flex flex-row items-center">
              <div className="bg-gray-100 border border-gray-300 flex flex-row  rounded-l-full h-[2rem] w-[7.5rem] items-center space-x-1">
                <PiArrowFatUpBold className="ml-2 text-blue-500 text-lg" />
                <span className="text-sm text-gray-500">Upvote 1.6k</span>
              </div>
              <div className="bg-gray-100 flex flex-row items-center rounded-r-full w-[2.5rem] h-[2rem] border-t border-r border-b border-gray-300 justify-center">
                <PiArrowFatDownBold className="text-gray-500 text-lg" />
              </div>
            </div>
            <div className="text-gray-500 flex flex-row ml-2 items-center">
              <HiOutlineChatBubbleOvalLeft className="text-lg" />
              <span className="ml-1 text-sm">{item.comments}</span>
            </div>
            <div className="text-gray-500 ml-4 flex flex-row  items-center">
            <FiRefreshCw className="text-lg"/>
            <span className="ml-1 text-sm">{item.shares}</span>
            </div>
          </div>
          <div className="bg-gray-100 p-4 flex flex-col justify-center">
            <span className="text-gray-500 text-sm">66 comments from Sanjay Bhatt and more</span>
          </div>
        </div>
      ))}
    </div>
  );
}
