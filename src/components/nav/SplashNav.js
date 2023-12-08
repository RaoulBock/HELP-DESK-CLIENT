import React from "react";
import LogoRef from "../images/B-Logo.png";

export const SplashNav = ({ title }) => {
  return (
    <>
      <div className="splash-nav-outline">
        <img src={LogoRef} alt="logo" className="logo-img" />
        <small>Break the Bank</small>
      </div>
    </>
  );
};
