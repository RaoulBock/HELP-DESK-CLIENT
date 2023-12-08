import React from "react";
import { APP_ICONS } from "../../context/settings";
import { Button } from "../buttons/Button";
import { Input } from "../inputs/Input";

export const Card = ({
  title,
  onClick,
  inputText,
  postClick,
  onChange,
  error
}) => {
  return (
    <>
      <div className="overlay"></div>
      <div className="card-outline">
        <div className="card-header">
          <h4 onClick={onClick}>{APP_ICONS.BACK}</h4>
          <h4>{title}</h4>
          <h4>{""}</h4>
        </div>
        <div className="card-body">
          <Input inputText={inputText} onChange={onChange} />
          <Button title="Create." onClick={postClick} />
          <small className="error-handle">{error}</small>
        </div>
      </div>
    </>
  );
};
