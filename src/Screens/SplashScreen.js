import React from "react";
import { SplashNav } from "../components/nav/SplashNav";
import imgRef from "../components/images/Banking.png";
import { Button } from "../components/buttons/Button";
import { LoginWindow } from "../components/window/LoginWindow";

export const SplashScreen = () => {
  const [tab, setTab] = React.useState(0);
  return (
    <>
      {tab === 1 && (
        <>
          <div className="overlay"></div>
          <LoginWindow setTab={setTab} />
        </>
      )}
      <div className="splash-screen-outline">
        <SplashNav title={"logo goes here"} />
        <div className="splash-screen-body">
          <div className="splash-screen-text-area">
            <h1>Online Banking.</h1>
            <small>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here.
            </small>
            <br />
            <br />
            <Button title="Login" onClick={() => setTab(1)} />
          </div>
          <div className="splash-screen-image-area">
            <img src={imgRef} alt="img" className="splash-image" />
          </div>
        </div>
      </div>
    </>
  );
};
