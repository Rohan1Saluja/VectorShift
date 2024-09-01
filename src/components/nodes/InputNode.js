// inputNode.js

import React from "react";
import { Position } from "reactflow";
import TemplateNode from "../Global/templateNode";
import { MdInput } from "react-icons/md";

export const InputNode = ({ id, data }) => {
  console.log("Id: ", id);
  console.log("Data: ", data);
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

  return (
    <TemplateNode
      handles={handles}
      label="Input"
      labelIcon={<MdInput />}
      classNames="!right-[-0.4rem]"
      content={
        <>
          <label className="flex flex-col w-full flex-1 relative p-1">
            Field Name:
            <input
              type="text"
              value={currName}
              onChange={handleNameChange}
              className="border rounded-md p-1"
            />
          </label>
          <label className="flex flex-col w-full flex-1 relative p-1">
            Type:
            <select
              value={inputType}
              onChange={handleTypeChange}
              className="border rounded-md p-1"
            >
              <option value="Text">Text</option>
              <option value="File">File</option>
            </select>
          </label>
        </>
      }
    />
  );
};
