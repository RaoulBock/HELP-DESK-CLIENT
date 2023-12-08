import React from "react";
import { APP_ICONS } from "../../context/settings";
import { Input } from "../inputs/Input";

export const NewWalletWindow = ({ setTab, userData: e }) => {
  return (
    <>
      <div className="overlay"></div>
      <div className="new-wallet-window-outline">
        <div className="new-wallet-outline-header">
          <h5 onClick={() => setTab(0)}>{APP_ICONS.BACK}</h5>
          <h4>Create new wallet for {e.fullName}</h4>
        </div>
        <div className="new-wallet-outline-body">
          <Input
            type="text"
            inputText="wallet name"
            placeholder="Name of new wallet*"
            className="input-default-main underline-bellow"
            autoComplete="off"
            required
          />
        </div>
      </div>
    </>
  );
};
