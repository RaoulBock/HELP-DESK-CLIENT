import React from "react";

export const Input = ({
  className,
  inputText,
  type,
  placeholder,
  onChange
}) => {
  return (
    <div className="form-control">
      <div className={className || "text-with-input"}>
        <small>{inputText}</small>
        <input
          type={type}
          placeholder={placeholder}
          className="input-default-main"
          onChange={onChange}
        />
      </div>
    </div>
  );
};
