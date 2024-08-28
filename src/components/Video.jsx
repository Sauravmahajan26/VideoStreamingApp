import React from "react";
import videologo from "../assets/video.png";

function Video({ video }) {
  return (
    <div className="flex flex-col dark:bg-gray-800 dark:text-gray-100 p-4 rounded-md">
      <div className="flex items-center space-x-4">
        {/* Image Placeholder */}
        <img src={videologo} className="w-24 h-24 object-cover rounded-md" />
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-1">{video.title}</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-1">
            {video.description}
          </p>
          <span className="text-sm font-medium">{video.contentType}</span>
        </div>
      </div>
    </div>
  );
}

export default Video;
