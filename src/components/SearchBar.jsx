import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SetQuery } from "../redux/features/searchSlice";
import { FaGithub } from "react-icons/fa";
import logo from "../assets/gif-proj-logo.png";


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
        <div className="h-[5vh] md:h-[7.5vh] w-[11vh] sm:w-[12vh] md:w-[30vh] right-[4.8vh] relative sm:right-[10vh] md:right-[50vh] top-4.5  md:top-3 cursor-pointer ">
          <img src={logo} alt="App Logo" />

        </div>
        <div className="  h-[4vh] md:h-[6vh] flex  items-center border mt-[2vh] md:mt-[2vh] w-[47vw] sm:w-[50vw] md:w-[63vh] bg-rose-200 border-black rounded-4xl">
          <form className="flex items-center"
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
            <button className=" active:scale-95 md:w-[10vh] w-[5vh] md:h-[4.5vh] h-[2.8vh] px-1  sm:px-2 font-semibold  text-center rounded-4xl cursor-pointer ml-[2vh] sm:ml-[4vw] md:ml-[11.5vh] bg-emerald-400 border border-black text-[1.2vh] sm:text-sm md:text-base">
              Search
            </button>
          </form>

         

        </div>

         <div className="relative sm:left-0 top-2.5  cursor-pointer md:left-[50vh] left-[4.8vh] sm:block">

                <FaGithub className="text-[22px] mt-[1vh] sm:text-[24px] md:text-[30px]" onClick={onclick} />

          </div>

      </div>
    </div>
  );
};

export default searchBar;
