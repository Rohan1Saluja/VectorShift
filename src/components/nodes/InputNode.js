// inputNode.js

import React from "react";
import { Position } from "reactflow";
import TemplateNode from "../Global/templateNode";
import { MdInput } from "react-icons/md";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = React.useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = React.useState(data.inputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  const handles = [
    {
      type: "source",
      position: Position.Right,
      id: `${id}-value`,
    },
  ];

  const content = {
    textInputs: [
      {
        label: "Field Name",
        type: "text",
        value: currName,
        onChange: handleNameChange,
        classNames: "border rounded-md p-1",
      },
    ],
    selectInputs: [
      {
        label: "Type",
        value: inputType,
        onChange: handleTypeChange,
        classNames: "border rounded-md p-1",
        options: ["Text", "File"],
      },
    ],
  };

  return (
    <TemplateNode
      handles={handles}
      label="Input"
      labelIcon={<MdInput />}
      classNames="!right-[-0.4rem]"
      content={content}
    />
  );
};
