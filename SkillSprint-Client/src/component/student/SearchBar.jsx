import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ data }) => {
  const navigate = useNavigate();

  const [input, setInput] = useState(data ? data : "");
  const onSearchHandler = (e) => {
    e.preventDefault();
    navigate("/course-list/" + input);
  };
  return (
    <form onSubmit={onSearchHandler} className="flex px-1">
      <label className="input w-full">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
            
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="search"
          required
          placeholder="Search"
        />
      </label>
      <button
        type="submit"
        className="btn bg-purple-950 cursor-pointer text-white"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
