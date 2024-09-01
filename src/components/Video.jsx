import React from "react";
import videologo from "../assets/video.png";

function Video({ video, onButtonClick }) {
  return (
    <div
      className="flex flex-col dark:bg-gray-950 dark:text-gray-100 p-2 py-3 rounded-sm"
      onClick={() => onButtonClick(video.videoId)}
    >
      <div className="flex items-center space-x-4">
        {/* Image Placeholder */}
        <img src={videologo} className="w-12 h-12 object-cover rounded-md" />
        <div className="flex-1">
          <h3 className="text-xl mb-1">{video.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-1">
            {video.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Video;
