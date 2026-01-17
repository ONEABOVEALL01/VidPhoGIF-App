import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SetQuery } from "../redux/features/searchSlice";
import { FaGithub } from "react-icons/fa";

const searchBar = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onclick = function(){

    window.open("https://github.com/ONEABOVEALL01")
  }

  const controlSubmit = function (e) {
    e.preventDefault();
    dispatch(SetQuery(text));

    setText("");
  };

  return (
    <div className="">
      <div className="flex bg-amber-100 bg-slate-4cd00 h-[8vh] md:h-[10vh] justify-center w-full border shadow-lg border-l-0 border-r-0 border-t-0 border-gray-500 flex-wrap">
        <div className="h-[3vh] md:h-[7.5vh] w-[9vh] sm:w-[12vh] md:w-[30vh] right-[5vh] relative sm:right-[10vh] md:right-[50vh] top-5.5  md:top-3 cursor-pointer ">
          <img src="/src/assets/gif-proj-logo.png" alt="img" />
        </div>
        <div className="  h-[4vh] md:h-[6vh] flex items-center border mt-[2vh] md:mt-[2vh] w-[47vw] sm:w-[50vw] md:w-[63vh] bg-rose-200 border-black rounded-4xl">
          <form
            onSubmit={(e) => {
              controlSubmit(e);
            }}
            action=""
          >
            <input
              required
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              className="broder pl-[1vh] sm:pl-[2vh] h-[2.8vh] font-semibold text-gray-600 outline-1 md:h-[4.5vh] bg-gray-100 w-[30vw] sm:w-[28vw] md:w-[40vh] border-black ml-1 md:ml-1 rounded-4xl text-xs sm:text-sm md:text-base"
              type="text"
              placeholder="search..."
            />
            <button className=" active:scale-95 md:w-[10vh] w-[5vh] md:h-[5vh] h-[2.8vh] px-1 sm:px-2 font-semibold  text-center rounded-4xl cursor-pointer ml-[2vh] sm:ml-[4vw] md:ml-[11.5vh] bg-emerald-400 border border-black text-[1.2vh] sm:text-sm md:text-base">
              Search
            </button>
          </form>

         

        </div>

         <div className="relative sm:left-0 top-5 cursor-pointer md:left-[50vh] left-[4.5vh] sm:block">

                <FaGithub size={30} onClick={onclick} />

          </div>

      </div>
    </div>
  );
};

export default searchBar;
