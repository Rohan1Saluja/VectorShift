// outputNode.js

import { useState } from "react";
import { Position } from "reactflow";
import TemplateNode from "../Global/templateNode";
import { MdOutput } from "react-icons/md";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  const handles = [
    {
      type: "target",
      position: Position.Left,
      id: `${id}-value`,
    },
  ];

  const content = {
    textInputs: [
      {
        label: "Name",
        type: "text",
        value: currName,
        onChange: handleNameChange,
        classNames: "border rounded-md p-1",
      },
    ],
    selectInputs: [
      {
        label: "Type",
        type: "text",
        value: outputType,
        onChange: handleTypeChange,
        classNames: "border rounded-md p-1",
        options: ["Text", "File"],
      },
    ],
  };

  return (
    <TemplateNode
      handles={handles}
      label="Output"
      labelIcon={<MdOutput />}
      classNames="!right-[-0.4rem]"
      content={content}
    />
    // <div style={{width: 200, height: 80, border: '1px solid black'}}>
    //
    //   <div>
    //     <span>Output</span>
    //   </div>
    //   <div>
    //     <label>
    //       Name:
    //       <input
    //         type="text"
    //         value={currName}
    //         onChange={handleNameChange}
    //       />
    //     </label>
    //     <label>
    //       Type:
    //       <select value={outputType} onChange={handleTypeChange}>
    //         <option value="Text">Text</option>
    //         <option value="File">Image</option>
    //       </select>
    //     </label>
    //   </div>
    // </div>
  );
};
