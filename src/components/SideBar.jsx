import React from "react";

function SideBar() {
  return (
    <div className="h-full w-full flex flex-col">
      {/* Top section (Image) */}
      <div className="w-full px-7 pt-9 pb-5">
        <img
          className="w-[180px]"
          src="src/assets/CareerLens logo.svg"
          alt="CareerLens Logo"
        />
      </div>

      {/* Scrollable middle section */}
      <div className="px-7 pt-5 flex-1 overflow-y-auto">
        <div className="relative text-lg flex flex-col gap-4">
          <h1>My Meetings</h1>
          <h1>Shared with Me</h1>
          <h1>Tools</h1>
          <h1>Account & Settings</h1>
          <h1>Archive</h1>
        </div>
        <hr className="border-zinc-200 my-8" />
        <h1 className="mb-3">Recent Messages</h1>
        <div className="flex flex-col gap-2">
          <div className="w-full bg-[#F5F2FE] p-3 rounded-lg border-[1px] border-zinc-300">
            Meetings with Nupur Ma'am
          </div>
          {/* Repeat the message containers as needed */}
          <div className="w-full bg-[#F5F2FE] p-3 rounded-lg border-[1px] border-zinc-300">
            Meetings with Nupur Ma'am
          </div>
          <div className="w-full bg-[#F5F2FE] p-3 rounded-lg border-[1px] border-zinc-300">
            Meetings with Nupur Ma'am Meetings with Nupur Ma'amMeetings with
            Nupur Ma'am
          </div>
          <div className="w-full bg-[#F5F2FE] p-3 rounded-lg border-[1px] border-zinc-300">
            Meetings with Nupur Ma'am Meetings with Nupur Ma'amMeetings with
            Nupur Ma'amMeetings with Nupur Ma'am
          </div>
        </div>
      </div>

      {/* Bottom section (User Details) */}
      <div className=" px-5 py-4">
        <div className="flex items-center gap-3">
          <img
            src="src\assets\images\pfp1.jpeg"
            alt="User Profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h1 className="font-medium">Manraj Singh Virdi</h1>
            <h2 className="text-sm text-gray-600">
              d2021.manrajsingh.virdi@ves.ac.in
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
