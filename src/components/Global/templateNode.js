import { Handle } from "reactflow";
import {
  NodeContentStyles,
  NodeLabelStyles,
  TemplateNodeStyles,
} from "./styles";

const TemplateNode = ({ id, label, content, handles }) => {
  return (
    <div style={TemplateNodeStyles}>
      {handles?.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={handle.style}
        />
      ))}
      <div style={NodeLabelStyles}>{label}</div>
      <div style={NodeContentStyles}>{content}</div>
    </div>
  );
};

export default TemplateNode;
