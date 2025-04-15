import React from "react";
import lang from "../utils/langConstant";
import { useSelector } from "react-redux";

const GPTSearchbar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[12%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4  border bg-white border-gray-300 col-span-10 text-black"
          placeholder={lang[langKey].GPTSearchPlaceholder}
        ></input>
        <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-2">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchbar;
