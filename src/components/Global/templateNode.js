import { Handle } from "reactflow";
import { IoMdCloseCircleOutline } from "react-icons/io";
import TextInputs from "./contentSections/textInputs";

const TemplateNode = ({
  id,
  label,
  content,
  handles,
  labelIcon,
  helperText,
}) => {
  return (
    <div className="flex flex-col p-2 min-h-[8rem] min-w-[12rem] w-auto h-auto shadow-[0_0.1rem_0.5rem_0.1rem_#cecffc] rounded-md relative">
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
      <div className="flex flex-col gap-2 py-2">
        <TextInputs textInputs={content?.textInputs} />

        {content?.selectInputs &&
          content?.selectInputs?.map((selectElement, index) => (
            <label
              key={index}
              className="flex flex-col w-full flex-1 relative p-1"
            >
              {selectElement.label}
              <select
                value={selectElement.value}
                onChange={selectElement.onChange}
                className={selectElement.classNames}
              >
                {selectElement?.options?.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          ))}
      </div>
      <span className="text-xs text-gray-600 p-1">{helperText}</span>
    </div>
  );
};

export default TemplateNode;
