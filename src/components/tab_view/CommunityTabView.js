import React from "react";
import { Button } from "../buttons/Button";
import { Textarea } from "../inputs/Textarea";

export const CommunityTabView = () => {
  return (
    <>
      <div className="community-tab-view">
        <div className="community-tab-view-body">
          <Textarea
            inputText="Write to the community"
            type="text"
            placeholder="what's on your mind ?"
          />
          <Button title="Post" />
        </div>
      </div>
    </>
  );
};
