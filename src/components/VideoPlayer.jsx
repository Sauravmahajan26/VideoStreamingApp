import React, { useState } from "react";
import "./VideoUpload";

function VideoPlayer({ videoidx }) {
  // const [videoid, setvideoid] = useState(
  //   "c5358bf9-6df4-431f-8799-e7037b390f7f"
  // );
  console.log(videoidx);

  return (
    <div className="text-white">
      <video
        style={{ width: "500px" }}
        src={`http://localhost:8080/api/v1/videos/stream/range/${videoidx}`}
        controls
      ></video>
    </div>
  );
}

export default VideoPlayer;
