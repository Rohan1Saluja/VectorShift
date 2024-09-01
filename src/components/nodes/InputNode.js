// inputNode.js

import React from "react";
import { Position } from "reactflow";
import TemplateNode from "../Global/templateNode";

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

  return (
    <TemplateNode
      handles={handles}
      label="Input"
      content={
        <>
          <label>
            Name:
            <input type="text" value={currName} onChange={handleNameChange} />
          </label>
          <label>
            Type:
            <select value={inputType} onChange={handleTypeChange}>
              <option value="Text">Text</option>
              <option value="File">File</option>
            </select>
          </label>
        </>
      }
    />
  );
};
