import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const Header = ({ searchTerm, setSearchTerm, searchInputRef }) => {
  const [isDark, toggleDarkMode] = useDarkMode();

  return (
    <header className="flex items-center justify-between px-8 py-4 neeto-ui-bg-gray-50 neeto-ui-border-gray-300 border-b sticky top-0 z-10">
      <div>
        <h1 className="text-2xl font-bold neeto-ui-text-gray-800">neetoIcons</h1>
        <div className="text-sm neeto-ui-text-gray-600">
          Click on an icon to copy the name.
        </div>
      </div>
      <div className="flex items-center">
        <a
          href="https://github.com/bigbinary/neeto-icons#usage"
          target="_blank"
          rel="noreferrer"
          className="flex items-center space-x-0.5 text-sm font-medium neeto-ui-text-gray-700 hover:neeto-ui-text-gray-800 mr-5"
        >
          Usage
        </a>
        <a
          href="https://github.com/bigbinary/neeto-icons"
          target="_blank"
          rel="noreferrer"
          className="flex items-center space-x-0.5 text-sm font-medium neeto-ui-text-gray-700 hover:neeto-ui-text-gray-800 mr-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="currentColor"
              d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
            />
          </svg>
          <span>Source</span>
        </a>
        <button
          onClick={toggleDarkMode}
          className="mr-5 p-2 rounded-md neeto-ui-text-gray-700 hover:neeto-ui-bg-gray-200 focus:outline-none transition-colors"
          aria-label="Toggle dark mode"
        >
          {isDark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
        <input
          autoFocus
          ref={searchInputRef}
          placeholder="Search for an icon"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 text-sm rounded w-72 neeto-ui-bg-gray-100 neeto-ui-text-gray-800 focus:outline-none focus:neeto-ui-bg-gray-200 neeto-ui-border-gray-300 border"
        />
      </div>
    </header>
  );
};

export default Header;
