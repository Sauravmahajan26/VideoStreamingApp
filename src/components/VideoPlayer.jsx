import React, { useState } from "react";
import "./VideoUpload";
import videojs from "video.js";
import Hls from "hls.js";
import "video.js/dist/video-js.css";

function VideoPlayer({ videoIdx }) {
  // const [videoid, setvideoid] = useState(
  //   "c5358bf9-6df4-431f-8799-e7037b390f7f"
  // );
  console.log("videoplayer " + videoIdx);

  return (
    <div className="text-white">
      <video
        style={{ width: "100%" }}
        //src={`http://localhost:8080/api/v1/videos/stream/range/${videoIdx}`}
        src="http://localhost:8080/api/v1/videos/fc3484e3-47a9-43ed-ad9c-21199c5c12b0/master.m3u8"
        controls
      ></video>
    </div>
  );
}

export default VideoPlayer;
