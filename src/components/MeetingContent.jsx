import React, { useState, useEffect, useRef } from "react";
import { ArrowLeftSquareIcon, Search } from "lucide-react";
import SpeakerStats from "./SpeakerStats";
import SearchHistory from "./SearchHistory";
import ResultPage from "./ResultPage";

function MeetingContent() {
  const [showAllHistory, setShowAllHistory] = useState(false);
  const [showOptions, setShowOptions] = useState(null);
  const optionsRef = useRef();
  const [showResult, setShowResult] = useState(false);
  const [aiResponse, setAiResponse] = useState(""); // State for AI response

  const searchHistory = [
    { id: 1, title: "Summary of the meeting", date: "10/15/2024" },
    { id: 2, title: "Key points discussed", date: "10/14/2024" },
    { id: 3, title: "Follow-up tasks", date: "10/13/2024" },
    { id: 4, title: "Participant insights", date: "10/12/2024" },
    { id: 5, title: "Agenda analysis", date: "10/11/2024" },
  ];

  const visibleHistory = showAllHistory
    ? searchHistory
    : searchHistory.slice(0, 1);

  useEffect(() => {
    function handleClickOutside(event) {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setShowOptions(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleEllipsisClick = (id) => {
    setShowOptions(showOptions === id ? null : id);
  };

  // Function to handle the search button click
  const handleSearch = async () => {
    // Simulate API call to fetch AI response
    const response = await fetchAiResponse(); // Function to get AI response
    setAiResponse(response);
    setShowResult(true); // Show result page
  };

  // Simulated function to fetch AI response
  const fetchAiResponse = async () => {
    // Replace with your actual AI model fetching logic
    return `
# My Markdown Example

This is a simple example of using React Markdown. Here are some key points:

- **Easy to use:** React Markdown allows you to render Markdown syntax in your React components.
- **Supports various Markdown features:** You can use headings, lists, code blocks, and more.
- **Customizable:** You can customize the rendering of different Markdown elements using plugins or custom components.
- **Lightweight:** It's a lightweight solution for displaying formatted text.

## Numbered List
1. First item
2. Second item
3. Third item
## Conclusion
Using React Markdown makes it simple to include formatted text in your React applications.
`;
  };

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
        {showResult ? (
          <div className="w-[70%] pr-8">
            <ResultPage aiResponse={aiResponse} /> {/* Pass AI response */}
          </div>
        ) : (
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

            {/* Search box for asking questions */}
            <div className="flex w-full mt-5 gap-4">
              <div className="flex w-full items-center px-2 py-1 rounded-lg bg-white border-2 shadow-md">
                <input
                  type="text"
                  placeholder="Ask anything about this meeting."
                  className="flex-1 px-4 py-2 bg-transparent outline-none text-zinc-800 text-xl"
                />
              </div>
              <button
                className="rounded-lg text-xl px-6 bg-white border-2 shadow-md text-zinc-800 font-semibold"
                onClick={handleSearch}
              >
                ✨Ask
              </button>
            </div>

            {/* Search History */}
            <SearchHistory
              searchHistory={visibleHistory} // Pass only visible history
              showAllHistory={showAllHistory}
              setShowAllHistory={setShowAllHistory}
              showOptions={showOptions}
              setShowOptions={setShowOptions}
            />

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
            </div>
          </div>
        )}

        {/* Divider between left and right */}
        <div className="border-l border-gray-300"></div>

        {/* Speaker Stats - scrollable */}
        <div className="w-[30%]">
          <SpeakerStats />
        </div>
      </div>
    </div>
  );
}

export default MeetingContent;
