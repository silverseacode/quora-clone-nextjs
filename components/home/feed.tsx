"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PiArrowFatUpBold } from "react-icons/pi";
import { PiArrowFatDownBold } from "react-icons/pi";
import { PiArrowFatUpFill } from "react-icons/pi";
import { PiArrowFatDownFill } from "react-icons/pi";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { FiRefreshCw } from "react-icons/fi";
export default function Feed() {
  const [votesOnScreen, setVotesOnScreen] = useState<
    { index: number; type: string }[]
  >([]);
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

  const handleVote = (index: number, type: string, hasAction: boolean) => {
    const votes = [...votesOnScreen];
    const votesUniques = votes.filter((item) => item.index !== index);
    if (!hasAction) {
      const newVote = {
        index,
        type,
      };
      votesUniques.push(newVote);
    }

    setVotesOnScreen(votesUniques);
  };

  return (
    <div className="bg-gray-200">
      {posts.map((item, index) => {
        const vote = votesOnScreen.filter((item) => index === item.index);

        return (
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
                <div
                  onClick={() =>
                    handleVote(
                      index,
                      "up",
                      vote.length > 0 && vote[0].type === "up"
                    )
                  }
                  className="bg-gray-100 border border-gray-300 flex flex-row  rounded-l-full h-[2rem] w-[7.5rem] items-center space-x-1 hover:bg-gray-200 cursor-pointer"
                >
                  {vote.length > 0 && vote[0].type === "up" ? (
                    <PiArrowFatUpFill
                      className={`ml-2 text-blue-500 text-lg`}
                    />
                  ) : (
                    <PiArrowFatUpBold
                      className={`ml-2 text-blue-500 text-lg`}
                    />
                  )}

                  <span
                    className={`text-sm  ${
                      vote.length > 0 && vote[0].type === "up"
                        ? "text-blue-500"
                        : "text-gray-500 font-medium"
                    }`}
                  >
                    Upvote 1.6k
                  </span>
                </div>
                <div
                  onClick={() =>
                    handleVote(
                      index,
                      "down",
                      vote.length > 0 && vote[0].type === "down"
                    )
                  }
                  className="bg-gray-100 flex flex-row items-center rounded-r-full w-[2.5rem] h-[2rem] border-t border-r border-b border-gray-300 justify-center hover:bg-gray-200 cursor-pointer"
                >
                  {vote.length > 0 && vote[0].type === "down" ? (
                    <PiArrowFatDownFill className={` text-red-500 text-lg`} />
                  ) : (
                    <PiArrowFatDownBold className="text-gray-500 text-lg" />
                  )}
                </div>
              </div>
              <div className="text-gray-500 cursor-pointer hover:bg-gray-100 rounded-full flex flex-row ml-2 items-center p-1">
                <HiOutlineChatBubbleOvalLeft className="text-lg" />
                <span className="ml-1 text-sm">{item.comments}</span>
              </div>
              <div className="text-gray-500 cursor-pointer hover:bg-gray-100 rounded-full ml-4 flex flex-row  items-center p-1">
                <FiRefreshCw className="text-lg" />
                <span className="ml-1 text-sm">{item.shares}</span>
              </div>
            </div>
            <div className="bg-gray-100 p-4 flex flex-col justify-center">
              <span className="text-gray-500 text-sm">
                66 comments from Sanjay Bhatt and more
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
