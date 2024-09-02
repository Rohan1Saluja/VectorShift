import React from "react";
import axios from "axios";
import TemplateNode from "../Global/templateNode";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { Position } from "reactflow";

const YouTubeLoaderNode = ({ id, data }) => {
  const [videoUrl, setVideoUrl] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const isValidURL = (url) => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

    return url.match(regex);
  };

  const handleInputChange = (event) => {
    setVideoUrl(event.target.value);
    if (event.target.value?.length > 5 && !isValidURL(event.target.value)) {
      setErrorMessage("enter a valid url");
    } else setErrorMessage("");
  };
  const handles = [
    {
      type: "target",
      position: Position.Left,
      id: `${id}-value`,
      classNames: "!left-[-0.4rem]",
    },
  ];

  const content = {
    textInputs: [
      {
        label: "URL",
        type: "text",
        value: videoUrl,
        onChange: handleInputChange,
        classNames: "border rounded-md p-1",
        errorMessage: errorMessage,
      },
    ],
  };

  return (
    <TemplateNode
      id={id}
      handles={handles}
      label="Youtube Loader"
      labelIcon={<MdOutlineSmartDisplay />}
      content={content}
      helperText="Reads transcript from a YouTube video."
    />
  );
};

export default YouTubeLoaderNode;
