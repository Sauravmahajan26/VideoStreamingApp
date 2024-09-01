// src/services/videoService.js
import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/videos";

class videoService {
  async uploadVideo(video, videoMetaData, setProgress) {
    let formData = new FormData();
    formData.append("title", videoMetaData.title);
    formData.append("description", videoMetaData.description);
    formData.append("file", video);

    try {
      const response = await axios.post(API_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProgress(progress);
        },
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getAllVideos() {
    try {
      const response = await axios.get(API_URL);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default new videoService();
