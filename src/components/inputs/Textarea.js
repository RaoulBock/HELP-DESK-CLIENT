import React from "react";

export const Textarea = (props) => {
  return (
    <div className="form-control">
      <div className={props.className || "text-with-textarea"}>
        <small>{props.inputText}</small>
        <textarea
          type={props.type}
          placeholder={props.placeholder}
          className="input-default-main"
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};
