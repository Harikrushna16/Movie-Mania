import React from "react";

const SearchBox = () => {
  return (
    <div>
      <div className="mx-auto max-w-xs">
        <div>
          <div className="relative">
            <div className="absolute inset-y-0 right-0 flex items-center px-2.5"></div>
            <input
              type="email"
              id="example5"
              className="block w-full rounded-md border-gray-300 p-3 py-2 pr-10 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              placeholder="you@email.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
