import React from "react";
import { ChevronLeft, Copy, ThumbsDown, ThumbsUp, Trash2 } from "lucide-react";
import ReactMarkdown from "react-markdown"; // Import markdown parser

const markdown = `
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

function ResultPage({ aiResponse }) {
  return (
    <div>
      <div className="text-lg items-center underline w-fit flex gap-2 text-zinc-500 cursor-pointer mb-4">
        <ChevronLeft size={20} />
        <h1 className=" ">Meeting Transcription</h1>
      </div>
      <div className="bg-white p-6 rounded-lg border-2 mt-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">✨AI Generated Summary</h1>
          <div className="flex gap-4 items-center">
            <ThumbsUp size={20} />
            <ThumbsDown size={20} />
            <div className="flex gap-1 items-center">
              <Copy size={20} />
              <h1 className="text-sm">Copy</h1>
            </div>
            <div className="flex gap-1 items-center">
              <Trash2 size={20} />
              <h1 className="text-sm">Delete</h1>
            </div>
          </div>
        </div>
        <div>
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-4xl font-semibold my-3">{children}</h1> // Adjusted spacing
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-medium my-3">{children}</h2> // Adjusted spacing
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-medium my-2">{children}</h3> // Adjusted spacing
              ),
              p: ({ children }) => (
                <p className="text-lg my-2">{children}</p> // Slightly reduced vertical spacing
              ),
              ul: ({ children }) => (
                <ul className="list-disc pl-8 my-2">{children}</ul> // Added margin for unordered lists
              ),
              ol: ({ children }) => (
                <ol className="list-decimal pl-8 my-2">{children}</ol> // Added margin for ordered lists
              ),
              li: ({ children }) => (
                <li className="mb-1 text-lg">{children}</li> // Keep space below list items
              ),
              strong: ({ children }) => (
                <strong className="font-semibold">{children}</strong> // Strong tag for semibold
              ),
            }}
          >
            {aiResponse}
          </ReactMarkdown>{" "}
          {/* Render markdown */}
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
