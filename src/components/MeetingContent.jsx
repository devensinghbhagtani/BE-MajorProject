import React from "react";
import {
  Delete,
  Download,
  LucideDelete,
  Pencil,
  PencilIcon,
  Search,
  Share,
  Trash,
} from "lucide-react";

function MeetingContent() {
  return (
    <div className="p-8 w-full h-screen overflow-y-auto">
      {/* Search bar */}
      <div className="flex items-center px-2 py-1 rounded-lg bg-white border-2">
        <Search className="text-zinc-400 ml-3" />
        <input
          type="text"
          placeholder="Search in Transcript"
          className="flex-1 px-4 py-2 bg-transparent outline-none text-zinc-700 text-xl"
        />
      </div>

      {/* Main content area */}
      <div className="flex mt-6">
        {/* Meeting Transcript - scrollable */}
        <div className="w-[70%] pr-8">
          <h1 className="text-4xl font-semibold">Meeting Transcript</h1>
          <h2 className="text-sm mt-3">
            Recorded by MANRAJ SINGH VIRDI, 8/20/2024, 1:11:40 AM, 4 min, Last
            updated 3 days ago
          </h2>
          <h1 className="text-2xl font-semibold mt-4">Tools</h1>
          <h2 className="text-sm mt-2">Quick Prompts</h2>
          <div className="flex w-full gap-5 mt-2">
            <div className="bg-[#F5F2FE] p-3 w-full rounded-lg border-2 font-semibold">
              Quick Summary
            </div>
            <div className="bg-[#F5F2FE] p-3 w-full rounded-lg border-2 font-semibold">
              Bullet Points
            </div>
          </div>
          <div className="flex w-full mt-5 gap-4">
            <div className="flex w-full items-center px-2 py-1 rounded-lg bg-white border-2 shadow-md">
              <input
                type="text"
                placeholder="Ask anything about this meeting."
                className="flex-1 px-4 py-2 bg-transparent outline-none text-zinc-800 text-xl"
              />
            </div>
            <button className="rounded-lg text-xl px-6 bg-white border-2 shadow-md text-zinc-800 font-semibold">
              ✨Ask
            </button>
          </div>
          <h1 className="text-2xl font-semibold mt-5">Transcript</h1>
          <div className="mt-2 flex flex-col gap-2">
            {/* Transcript items */}
            <div className="w-full rounded-xl bg-white border-2 px-6 py-4 flex gap-6 items-center">
              <div className="gap-1 flex flex-col items-center">
                <img
                  src="src/assets/images/pfp1.jpeg"
                  alt="User Profile"
                  className="w-12 h-12 rounded-full"
                />
                <h3 className="text-sm text-zinc-400">00:00</h3>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold">Manraj Singh Virdi</h1>
                <h2 className="text-lg">Hello, everyone.</h2>
              </div>
            </div>
            <div className="w-full rounded-xl bg-white border-2 px-6 py-4 flex gap-6 items-center">
              <div className="gap-1 flex flex-col items-center">
                <img
                  src="src/assets/images/pfp1.jpeg"
                  alt="User Profile"
                  className="w-12 h-12 rounded-full"
                />
                <h3 className="text-sm text-zinc-400">00:00</h3>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold">Manraj Singh Virdi</h1>
                <h2 className="text-lg">Hello, everyone.</h2>
              </div>
            </div>
            <div className="w-full rounded-xl bg-white border-2 px-6 py-4 flex gap-6 items-center">
              <div className="gap-1 flex flex-col items-center">
                <img
                  src="src/assets/images/pfp1.jpeg"
                  alt="User Profile"
                  className="w-12 h-12 rounded-full"
                />
                <h3 className="text-sm text-zinc-400">00:00</h3>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold">Manraj Singh Virdi</h1>
                <h2 className="text-lg">Hello, everyone.</h2>
              </div>
            </div>
            <div className="w-full rounded-xl bg-white border-2 px-6 py-4 flex gap-6 items-center">
              <div className="gap-1 flex flex-col items-center">
                <img
                  src="src/assets/images/pfp1.jpeg"
                  alt="User Profile"
                  className="w-12 h-12 rounded-full"
                />
                <h3 className="text-sm text-zinc-400">00:00</h3>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold">Manraj Singh Virdi</h1>
                <h2 className="text-lg">Hello, everyone.</h2>
              </div>
            </div>
            <div className="w-full rounded-xl bg-white border-2 px-6 py-4 flex gap-6 items-center">
              <div className="gap-1 flex flex-col items-center">
                <img
                  src="src/assets/images/pfp1.jpeg"
                  alt="User Profile"
                  className="w-12 h-12 rounded-full"
                />
                <h3 className="text-sm text-zinc-400">00:00</h3>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold">Manraj Singh Virdi</h1>
                <h2 className="text-lg">Hello, everyone.</h2>
              </div>
            </div>
            <div className="w-full rounded-xl bg-white border-2 px-6 py-4 flex gap-6 items-center">
              <div className="gap-1 flex flex-col items-center">
                <img
                  src="src/assets/images/pfp1.jpeg"
                  alt="User Profile"
                  className="w-12 h-12 rounded-full"
                />
                <h3 className="text-sm text-zinc-400">00:00</h3>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold">Manraj Singh Virdi</h1>
                <h2 className="text-lg">Hello, everyone.</h2>
              </div>
            </div>
            <div className="w-full rounded-xl bg-white border-2 px-6 py-4 flex gap-6 items-center">
              <div className="gap-1 flex flex-col items-center">
                <img
                  src="src/assets/images/pfp1.jpeg"
                  alt="User Profile"
                  className="w-12 h-12 rounded-full"
                />
                <h3 className="text-sm text-zinc-400">00:00</h3>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold">Manraj Singh Virdi</h1>
                <h2 className="text-lg">Hello, everyone.</h2>
              </div>
            </div>
            {/* Add more transcript items here */}
          </div>
        </div>

        {/* Divider between left and right */}
        <div className="border-l border-gray-300"></div>

        {/* Speaker Stats - scrollable */}
        <div className="w-[30%] pl-6">
          <div className="flex flex-col gap-2 mb-6">
            <div className="flex gap-2 ">
              <button className="flex gap-1 items-center border-[2px] rounded-lg p-2 w-full border-zinc-800">
                <Download size={15} className="" />
                <h1 className="text-xs font-semibold">Export</h1>
              </button>
              <button className="flex gap-1 items-center border-[2px] rounded-lg p-2 w-full border-zinc-800">
                <Share size={15} className="" />
                <h1 className="text-xs font-semibold">Share</h1>
              </button>
            </div>
            <div className="flex gap-2">
              <button className="flex gap-1 items-center border-[2px] rounded-lg p-2 w-full border-zinc-800">
                <PencilIcon size={15} className="" />
                <h1 className="text-xs font-semibold">Rename</h1>
              </button>
              <button className="flex gap-1 items-center border-[2px] rounded-lg p-2 w-full border-zinc-800">
                <Trash size={15} className="" />
                <h1 className="text-xs font-semibold">Delete</h1>
              </button>
            </div>
          </div>
          <hr className="border-zinc-400" />
          <h1 className="text-xl mt-4 font-semibold">Speaker Stats</h1>
          <div className="mt-4">
            <div className="mt-4">
              <h1>Piyush Chugeja</h1>
              {/* Example percent bar */}
              <div className="flex gap-2 items-center">
                <div className="bg-gray-300 rounded-full h-2 mt-1 w-full">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: "56%" }}
                  ></div>
                </div>
                <h1 className="text-sm font-semibold">56%</h1>
              </div>
            </div>
            <div className="mt-4">
              <h1>Manraj Singh Virdi</h1>
              {/* Example percent bar */}
              <div className="flex gap-2 items-center">
                <div className="bg-gray-300 rounded-full h-2 mt-1 w-full">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: "44%" }}
                  ></div>
                </div>
                <h1 className="text-sm font-semibold">44%</h1>
              </div>
            </div>
            <div className="mt-4">
              <h1>Sakshi Kirmathe</h1>
              {/* Example percent bar */}
              <div className="flex gap-2 items-center">
                <div className="bg-gray-300 rounded-full h-2 mt-1 w-full">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: "28%" }}
                  ></div>
                </div>
                <h1 className="text-sm font-semibold">28%</h1>
              </div>
            </div>
          </div>
          <hr className="border-zinc-400 mt-6" />
          <h1 className="text-xl mt-4 font-semibold">Notes</h1>
          <textarea
            className="w-full h-56 border-2 rounded-lg p-4 mt-2"
            name=""
            placeholder="Add your notes here"
            minLength={10}
            id=""
          ></textarea>
          <h1 className="text-xl mt-2 font-semibold">Comments</h1>
          <textarea
            className="w-full h-56 border-2 rounded-lg p-4 mt-2"
            name=""
            placeholder="Add your comments here"
            minLength={10}
            id=""
          ></textarea>
          <button className="bg-[#F5F2FE] border-2 rounded-lg p-2 mt-2 px-5">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default MeetingContent;
