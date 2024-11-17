import React, { useState } from "react";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            console.log("Searching for:", searchTerm);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-8 text-gray-700">Google Search Clone</h1>
            <form
                className="w-full max-w-lg flex items-center border border-gray-300 rounded-full shadow-lg bg-white px-5 py-2"
                onSubmit={handleSearch}
            >
                <input
                    type="text"
                    className="flex-grow focus:outline-none text-gray-700 text-lg placeholder-gray-400"
                    placeholder="Search Google or type a URL"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    type="submit"
                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 10a6 6 0 100-12 6 6 0 000 12zm8 14l-4-4m0 0a9 9 0 1112 0 9 9 0 01-12 0z"
                        />
                    </svg>
                </button>
            </form>
            <div className="flex space-x-4 mt-6">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-full">
                    Google Search
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-6 py-2 rounded-full">
                    I'm Feeling Lucky
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
