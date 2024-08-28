import React, { useState } from "react";
import videologo from "../assets/cloud.png";
import axios from "axios";

import {
  Alert,
  Card,
  Label,
  Progress,
  Textarea,
  TextInput,
} from "flowbite-react";
import { Button } from "flowbite-react";
import toast from "react-hot-toast";

function VideoUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [metaData, setMetaData] = useState({
    title: "",
    description: "",
  });
  const [progress, setProgress] = useState(0);
  const [Uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  function handleFileChange(event) {
    console.log(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  }

  function formFeildChange(event) {
    setMetaData({
      ...metaData,
      [event.target.name]: event.target.value,
    });
  }

  function handleForm(formEvent) {
    formEvent.preventDefault();
    //submit file to server
    saveVideoToServer(selectedFile, metaData);
  }

  function resetForm() {
    setMetaData({
      title: "",
      description: "",
    });
    setSelectedFile(null), setUploading(false);
  }

  async function saveVideoToServer(video, videometaData) {
    setUploading(true);
    setProgress(0);
    setMessage("");
    //api call
    try {
      let formData = new FormData();
      formData.append("title", videometaData.title);
      formData.append("description", videometaData.description);
      formData.append("file", selectedFile);

      const response = await axios.post(
        `http://localhost:8080/api/v1/videos`,
        formData,
        {
          headers: {
            "Content-Type": "multipart-form-data",
          },
          onUploadProgress: (ProgressEvent) => {
            const uploadprogress = Math.round(
              (ProgressEvent.loaded * 100) / ProgressEvent.total
            );
            setProgress(uploadprogress);
          },
        }
      );
      toast("File Uploaded!", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      setMessage("File Uploaded");
      resetForm();
    } catch (error) {
      console.log(error);
      toast.error("This didn't work.");
      setMessage("Error in uploading file");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="text-black videoupload dark:bg-gray-800 dark:text-gray-100">
      <Card className="flex flex-col items-center justify-center">
        <center>
          {" "}
          <h1>Upload Videos</h1>
        </center>
        <div>
          <form
            noValidate
            className="flex flex-col space-y-7"
            onSubmit={handleForm}
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="file-upload" value="Video Title" />
              </div>
              <TextInput
                value={metaData.title}
                onChange={formFeildChange}
                name="title"
                placeholder="Enter title"
              />
            </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Video Description" />
              </div>
              <Textarea
                value={metaData.description}
                onChange={formFeildChange}
                name="description"
                id="comment"
                placeholder="Write video description..."
                required
                rows={4}
              />
            </div>
            <div className="flex items-center space-x-7 justify-center">
              <div className="shrink-0">
                <img
                  className="h-16 w-16 object-cover "
                  src={videologo}
                  alt="Current profile photo"
                />
              </div>
              <label className="block">
                <span className="sr-only">Choose the video file</span>
                <input
                  name="file"
                  onChange={handleFileChange}
                  type="file"
                  className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
                />
              </label>
            </div>
            <div className="">
              {Uploading ? (
                <Progress
                  progress={progress}
                  textLabel="Uploading..."
                  size="lg"
                  labelProgress
                  labelText
                />
              ) : (
                message && (
                  <Alert
                    color={"success"}
                    rounded
                    withBorderAccent
                    onDismiss={() => {
                      setMessage("");
                    }}
                  >
                    <span className="font-medium">Success alert!</span>{" "}
                    {message}
                  </Alert>
                )
              )}
            </div>

            <div className="flex justify-center">
              <Button disabled={Uploading} type="submit">
                Upload
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
}

export default VideoUpload;
