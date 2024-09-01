import { configureStore } from "@reduxjs/toolkit";
import VideoSlice from "./videoSlice";

const VideoStore = configureStore({
  reducer: {
    videoId: VideoSlice.reducer,
  },
});

export default VideoStore;
