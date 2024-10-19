import React from "react";
import { Download, Share, PencilIcon, Trash } from "lucide-react";

function SpeakerStats() {
  return (
    <div className="w-full pl-6">
      <div className="flex flex-col gap-2 mb-6">
        <div className="flex gap-2 ">
          <button className="flex gap-1 items-center border-[2px] rounded-lg p-2 w-full border-zinc-800">
            <Download size={15} />
            <h1 className="text-xs font-semibold">Export</h1>
          </button>
          <button className="flex gap-1 items-center border-[2px] rounded-lg p-2 w-full border-zinc-800">
            <Share size={15} />
            <h1 className="text-xs font-semibold">Share</h1>
          </button>
        </div>
        <div className="flex gap-2">
          <button className="flex gap-1 items-center border-[2px] rounded-lg p-2 w-full border-zinc-800">
            <PencilIcon size={15} />
            <h1 className="text-xs font-semibold">Rename</h1>
          </button>
          <button className="flex gap-1 items-center border-[2px] rounded-lg p-2 w-full border-zinc-800">
            <Trash size={15} />
            <h1 className="text-xs font-semibold">Delete</h1>
          </button>
        </div>
      </div>
      <hr className="border-zinc-400" />
      <h1 className="text-xl mt-4 font-semibold">Speaker Stats</h1>
      <div className="mt-4">
        <div className="mt-4">
          <h1>Piyush Chugeja</h1>
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
        placeholder="Add your notes here"
        minLength={10}
      ></textarea>
      <h1 className="text-xl mt-2 font-semibold">Comments</h1>
      <textarea
        className="w-full h-56 border-2 rounded-lg p-4 mt-2"
        placeholder="Add your comments here"
        minLength={10}
      ></textarea>
      <button className="bg-[#F5F2FE] border-2 rounded-lg p-2 mt-2 px-5">
        Save
      </button>
    </div>
  );
}

export default SpeakerStats;
