import React from "react";
import { APP_ICONS } from "../../context/settings";

export const PostedCard = (props) => {
  return (
    <>
      <div className="posted-card-outline">
        <div className="posted-card-header">
          <div className="posted-card-head">
            <img
              src={props.src}
              alt={props.alt}
              className={"defailt-image" || props.className}
            />
            <h4>{props.username}</h4>
            <h4>{props.date_uploaded}</h4>
          </div>

          <h5>{APP_ICONS.VERTICALROUND}</h5>
        </div>
      </div>
    </>
  );
};
