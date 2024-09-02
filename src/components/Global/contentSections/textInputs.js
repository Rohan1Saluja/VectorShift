const TextInputs = ({ textInputs }) => {
  const handleInputChange = (e, onChange) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
    if (onChange) onChange(e);
  };
  return (
    textInputs &&
    textInputs?.map((inputField, index) => (
      <label className="flex flex-col min-w-full flex-1 relative p-1">
        {inputField?.label}
        {inputField?.type === "textarea" ? (
          <textarea
            key={index}
            value={inputField?.value}
            onChange={(e) => handleInputChange(e, inputField?.onChange)}
            className={`${inputField?.classNames}`}
          />
        ) : (
          <input
            key={index}
            type={inputField?.type}
            value={inputField?.value}
            onChange={inputField?.onChange}
            placeholder={inputField?.placeholder}
            className={`${inputField?.classNames}`}
          />
        )}
        <span className="text-red-700 text-sm">{inputField?.errorMessage}</span>
      </label>
    ))
  );
};
export default TextInputs;
