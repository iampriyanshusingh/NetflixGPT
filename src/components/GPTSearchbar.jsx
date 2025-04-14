import React from "react";

const GPTSearchbar = () => {
  return (
    <div className="pt-[20%]">
      <form className="bg-black">
        <input
          type="text"
          className="p-4 m-4 text-white border border-gray-300"
          placeholder="What would you like to watch today?"
        ></input>
        <button className="py-2 px-4 bg-red-700 text-white rounded-lg">
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchbar;
