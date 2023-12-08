import React from "react";
import { APP_ICONS, APP_PAGES } from "../../context/settings";
import { Button } from "../buttons/Button";
import { Input } from "../inputs/Input";
import { AppContext } from "../../context/AppProvider";

export const LoginWindow = ({ setTab, tab }) => {
  const { setNavPage, userData, setSpecUserData } =
    React.useContext(AppContext);

  console.log(userData.data[0].username);

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleLogin = () => {
    if (username === "" || password === "") {
      setError("Please provide your correct login details.");
    } else if (
      username !== userData.data[0].username &&
      password !== userData.data[0].password
    ) {
      setError("Please provide your correct login details.");
    } else if (
      username === userData.data[0].username &&
      password === userData.data[0].password
    ) {
      setError("");
      setSpecUserData(userData.data[0].username);
      setNavPage(APP_PAGES.BANK.DASHBOARD);
    }
  };

  return (
    <>
      <div className="login-window-outline">
        <div className="login-window-header">
          <h5 onClick={() => setTab(0)}>{APP_ICONS.BACK}</h5>
          <h1>Login below to get started.</h1>
          <small>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </small>
        </div>
        <div className="login-window-body">
          <Input
            inputText="Username"
            type="Text"
            placeholder="Type your Username *"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            inputText="Password"
            type="password"
            placeholder="Type your Password *"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button title="Login" onClick={handleLogin} />
          <h4>{error}</h4>
        </div>
      </div>
    </>
  );
};
