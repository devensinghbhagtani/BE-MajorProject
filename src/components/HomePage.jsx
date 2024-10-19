import React from "react";
import SideBar from "./SideBar";
import MeetingContent from "./MeetingContent";

function HomePage() {
  return (
    <div className="h-screen w-screen bg-white flex">
      <div className="h-full w-[350px] flex-shrink-0">
        <SideBar />
      </div>

      <div className="h-full w-full bg-slate-50">
        <MeetingContent />
      </div>
    </div>
  );
}

export default HomePage;
