import React from "react";
import { AppContext } from "../../context/AppProvider";
import { APP_ICONS, APP_PAGES } from "../../context/settings";

export const DashboardNav = ({ setTab }) => {
  const { setNavPage } = React.useContext(AppContext);
  return (
    <>
      <div className="dashboard-nav-outline">
        <div className="left-menu">
          <h4 onClick={() => setTab("wallet")}>Wallets</h4>
          <h4 onClick={() => setTab("new_wallet")}>Create new wallet</h4>
          <h4 onClick={() => setTab("transfer")}>Transfer</h4>
        </div>
        <div className="right-menu">
          <h4 onClick={() => setNavPage(APP_PAGES.BANK.SPLASH)}>Sign out</h4>
        </div>
      </div>
    </>
  );
};
