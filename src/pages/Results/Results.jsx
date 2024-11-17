import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [data] = useState(["fuad", "mishab", "sajmal"]);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            console.log("Searching for:", searchTerm);
        }
    };

    const handleFocus = () => setShowDropdown(true);
    const handleBlur = () => setTimeout(() => setShowDropdown(false), 100);

    return (
        <div className="px-4">
            <div className="mt-10">
                <Link
                    to="/"
                    className="text-gray-900 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-lg font-medium no-underline"
                >
                    HOME
                </Link>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-bold mt-10 mb-8 text-gray-700">Results</h1>
                <form
                    className={`w-full max-w-lg flex flex-col border border-gray-300 shadow-lg bg-white relative ${showDropdown ? "rounded-t-lg" : "rounded-lg"
                        }`}
                    onSubmit={handleSearch}
                >
                    <div
                        className={`flex items-center px-5 py-2 ${showDropdown ? "border-b border-gray-300" : ""
                            }`}
                    >
                        <input
                            type="text"
                            className="flex-grow focus:outline-none border-b-0 text-gray-700 text-lg placeholder-gray-400"
                            placeholder="Search result"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                        <IoSearch type="submit" className="text-2xl text-gray-400" />
                    </div>
                    {showDropdown && (
                        <div className="bg-white max-h-48 overflow-y-auto rounded-b-lg">
                            {data
                                .filter((item) =>
                                    item.toLowerCase().includes(searchTerm.toLowerCase())
                                )
                                .map((item, index) => (
                                    <div
                                        key={index}
                                        className="px-4 py-2 border-t-0 text-gray-700 hover:bg-gray-200 cursor-pointer"
                                        onClick={() => setSearchTerm(item)}
                                    >
                                        {item}
                                    </div>
                                ))}
                        </div>
                    )}
                </form>
                {!showDropdown && (
                    <div className="flex space-x-4 mt-6">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-full">
                            More Results
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-full">
                            Score Board
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchBar;
