import React from "react";
import { RiDownloadCloud2Fill } from "react-icons/ri";
import { saveAs } from "file-saver";
import axios from "axios";

const DownloadButton = ({ url, type }) => {

  const downloadFile = async () => {
    try {
      const response = await axios.get(url, {
        responseType: "blob",
      });

      const extension =
        type === "photo" ? "jpg" :
        type === "gif" ? "gif" :
        type === "video" ? "mp4" : "file";

      saveAs(response.data, `download-${Date.now()}.${extension}`);
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

  return (
    <RiDownloadCloud2Fill
      onClick={downloadFile}
      size={22}
      className="text-white hover:text-emerald-400 transition cursor-pointer"
    />
  );
};

export default DownloadButton;
