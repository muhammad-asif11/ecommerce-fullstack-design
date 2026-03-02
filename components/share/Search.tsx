"use client";
import React, { useState } from "react";
import data from "../utills/ListData.json"; // adjust path as necessary
import { Icon } from "./Icon";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e: any) => {
    e.preventDefault();
    // Convert input to lower case for case-insensitive searching
    setSearchInput(e.target.value.toLowerCase());
  };

  // Filter the data based on user input
  const filteredData = data.filter((el) => {
    // if no input, return the original data
    if (searchInput === "") {
      //   return el;
    }
    // return the item which contains the user input in its text
    else {
      return el.text.toLowerCase().includes(searchInput);
    }
  });

  return (
    <div>
      <div className="flex bg-shadoWhite place-items-center lg:py-3 lg:px-4 p-2">
        <input
          type="search"
          placeholder="What are you looking for?"
          onChange={handleChange}
          value={searchInput}
          style={{
            outline: 0,
          }}
        />
        <Icon name="search" className="text-lg"/>
      </div>
      {/* Display filtered results */}
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {filteredData.map((item) => (
          <li key={item.id} style={{ padding: "5px 0" }}>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
