import { Handle } from "reactflow";
import { IoMdCloseCircleOutline } from "react-icons/io";

const TemplateNode = ({
  id,
  label,
  content,
  handles,
  labelIcon,
  helperText,
}) => {
  console.log("Label Icon: ", labelIcon);
  return (
    <div className="flex flex-col p-2 min-h-[8rem] min-w-[12rem] shadow-[0_0.1rem_0.5rem_0.1rem_#cecffc] rounded-md relative">
      {handles?.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={handle.style}
          className={`absolute top-50 !border-accent !border-2 p-1 !bg-white ${handle.classNames}`}
        />
      ))}
      <div className="flex items-center justify-between font-bold">
        <div className="flex items-center gap-2 text-accent">
          {labelIcon}
          {label}
        </div>
        <IoMdCloseCircleOutline className="hover:cursor-pointer" />
      </div>
      <div className="flex flex-col gap-2 py-2">{content}</div>
      <span className="text-xs text-gray-600 p-1">{helperText}</span>
    </div>
  );
};

export default TemplateNode;
