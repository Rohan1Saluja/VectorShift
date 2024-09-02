import React from "react";
import TemplateNode from "../Global/templateNode";

export const NoteNode = ({ id, data }) => {
  const [textNote, setTextNote] = React.useState("");

  const handleNoteText = (e) => {
    console.log("text: ", e.target.value);
    setTextNote(e.target.value);
  };

  const content = {
    textInputs: [
      {
        type: "textarea",
        value: textNote,
        onChange: handleNoteText,
        classNames: "border rounded-md p-1",
      },
    ],
  };

  return <TemplateNode content={content} />;
};
