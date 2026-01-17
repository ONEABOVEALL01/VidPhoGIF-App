import React, { use } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetActiveTabs } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos", "gif"];
  const dispatch = useDispatch()

 const activeTab =  useSelector((state)=>state.search.activeTab)

  return (
    <div className="flex gap-2 md:gap-4 p-3 md:p-5 flex-wrap">
      {tabs.map(function (elem, idx) {
        return (
          <button
            className={`${activeTab==elem?'bg-emerald-400 ':'bg-gray-200'} "bg-amber-200 rounded-xl active:scale-95 font-semibold px-2 md:px-3 cursor-pointer border border-black py-1 text-sm md:text-base `}
            key={idx}

            onClick={()=>{dispatch(SetActiveTabs(elem))}}
          >
            {elem}

            
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
