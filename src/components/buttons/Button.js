import React from "react";

export const Button = ({ title, onClick, className }) => {
  return (
    <button className={"btn-default" || className} onClick={onClick}>
      {title}
    </button>
  );
};
