import React from "react";
import { APP_ICONS } from "../../context/settings";

export const WalletCard = (props) => {
  return (
    <>
      <div className="wallet-card-outline" onClick={props.onClick}>
        <div className="wallet-card-outline-header">
          <h4>{props.headerText}.</h4>
          <h5>{APP_ICONS.SHOW}</h5>
        </div>
        <div className="wallet-card-outline-body">
          <h3>${props.amount}.00</h3>
          <button className="btn-view">{props.btnText}</button>
          <div className="wallet-card-exchange-rate">
            <h5>Exchange rate</h5>
            <small>{props.amount - 1485} beeds</small>
          </div>
        </div>
        <div className="wallet-card-outline-footer">
          <h4>Date deposited: {props.dateDeposited}</h4>
        </div>
      </div>
    </>
  );
};
