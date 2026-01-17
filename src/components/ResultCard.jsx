import React from "react";
import DownloadButton from "./DownloadButton";
const ResultCard = ({ item }) => {
  return (
    <div className="h-[25vh] sm:h-[30vh] md:h-[35vh] w-full rounded-xl overflow-hidden bg-zinc-100 relative">
      {item.type === "photo" && (
        <img
          className="h-full w-full object-cover rounded-xl"
          src={item.src}
          alt="search result"
        />
      )}

      {item.type === "video" && (
        <video
          className="h-full w-full object-cover rounded-xl"
          autoPlay
          muted
          loop
          src={item.src}
        />
      )}

      {item.type === "gif" && (
        <img
          className="h-full w-full object-cover rounded-xl"
          src={item.src}
          alt="gif result"
        />
      )}

      <div
        className="absolute bottom-0 left-0 right-0 
                      flex items-center justify-between
                      px-4 py-2
                      bg-black/15 backdrop-blur-sm"
      >
        <div className="text-white text-sm font-semibold truncate pr-2">
          {item.title}
        </div>

        <div className="hover:blue-400 cursor-pointer">
          <DownloadButton url={item.src} type={item.type} />
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
