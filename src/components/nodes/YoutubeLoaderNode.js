import React from "react";
import axios from "axios";
import TemplateNode from "../Global/templateNode";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { Position } from "reactflow";

const YouTubeLoaderNode = ({ id, data }) => {
  const [videoUrl, setVideoUrl] = React.useState("");
  const [transcript, setTranscript] = React.useState("");

  const handleInputChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const fetchTranscript = async (videoId) => {
    try {
      const response = await axios.get(
        `https://youtube-transcript-api.com/${videoId}`
      );
      setTranscript(response.data.transcript);
    } catch (error) {
      console.error("Error fetching transcript:", error);
      setTranscript("Unable to fetch transcript.");
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const videoId = extractVideoId(videoUrl);
    if (videoId) {
      fetchTranscript(videoId);
    } else {
      setTranscript("Invalid YouTube URL.");
    }
  };

  const extractVideoId = (url) => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const handles = [
    {
      type: "source",
      position: Position.Left,
      id: `${id}-value`,
      classNames: "!left-[-0.4rem]",
    },
  ];

  return (
    <TemplateNode
      id={id}
      handles={handles}
      label="Youtube Loader"
      labelIcon={<MdOutlineSmartDisplay />}
      content={
        <>
          <label className="flex flex-col w-full flex-1 relative p-1">
            URL
            <input
              type="text"
              //   value={currName}
              //   onChange={handleNameChange}
              className="border rounded-md p-1"
            />
          </label>
        </>
      }
      helperText="Reads transcript from a YouTube video."
    />
    // <div>
    //   <h1>YouTube Transcript Loader</h1>
    //   <form onSubmit={handleFormSubmit}>
    //     <input
    //       type="text"
    //       placeholder="Enter YouTube Video URL"
    //       value={videoUrl}
    //       onChange={handleInputChange}
    //     />
    //     <button type="submit">Get Transcript</button>
    //   </form>
    //   <div>
    //     <h2>Transcript:</h2>
    //     <p>{transcript}</p>
    //   </div>
    // </div>
  );
};

export default YouTubeLoaderNode;
