import React, { useEffect } from "react";
import { fetchPhotos, fetchVideos, fetchGIF } from "../api/mediaApi";
import { SetLoading, SetError, SetResult,SetActiveTabs } from "../redux/features/searchSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ResultCard from "./ResultCard";
const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, result, loading, error } = useSelector(
    (store) => store.search
  );

  useEffect(
    function () {
      if (!query) return;
      const getData = async () => {
        try {
          dispatch(SetLoading());
          let data = [];

          if (activeTab == "photos") {
            let response = await fetchPhotos(query);

            data = response.results.map((item) => ({
              id: item.id,
              type: "photo",
              title: item.alt_description || "photo",
              thumnail: item.urls.small,
              src: item.urls.full,
            }));
          }
          if (activeTab == "videos") {
            let response = await fetchVideos(query);

            data = response.videos.map((item) => ({
              id: item.id,
              type: "video",
              title: item.user.name || "video",
              thumnail: item.image,
              src: item.video_files[0]?.link,
            }));
          }
          if (activeTab == "gif") {
            let response = await fetchGIF(query);

            data = response.data.map((item) => ({
              id: item.id,
              type: "gif",
              title: item.title || "gif",
              thumnail: item.images.fixed_height.url,
              src: item.images.original.url,
            }));
          }

          dispatch(SetResult(data));
        } catch (err) {
          dispatch(SetError(err.message));
        }

      };

      getData();
    },
    [query, activeTab]
  );

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading..</h1>;

  return (
    <div className="grid p-3 md:p-[5vh] grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 rounded items-start ">
      {result.map((item, idx) => {
        return (
          <div key={idx}>
            {" "}
            <ResultCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ResultGrid;
