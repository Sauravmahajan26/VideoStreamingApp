import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import Hls from "hls.js";
import "video.js/dist/video-js.css";
import toast from "react-hot-toast";
import axios from "axios";
import { useSelector } from "react-redux";

function VideoPlayer() {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const fetchVideoId = useSelector((store) => store.videoId);
  console.log(`fetchVideoId ${fetchVideoId}`);

  const src = `http://localhost:8080/api/v1/videos/${fetchVideoId}/master.m3u8`;
  useEffect(() => {
    //for init

    playerRef.current = videojs(videoRef.current, {
      controls: true,
      autoplay: true,
      muted: true,
      preload: "auto",
      download: true,
    });

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(videoRef.current);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        videoRef.current.play();
      });
    } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
      videoRef.current.src = src;
      videoRef.current.addEventListener("canplay", () => {
        videoRef.current.play();
      });
    } else {
      console.log("video format not supportted");
      toast.error("Video format not supporteds");
    }
  }, [src]);

  return (
    <div>
      <div data-vjs-player>
        <video
          ref={videoRef}
          style={{
            width: "100%",
            height: "500px",
          }}
          className="video-js vjs-control-bar"
        ></video>
      </div>
    </div>
  );
}

export default VideoPlayer;
