import React from "react";
import "./App.css";

import AppProvider, { AppContext } from "./context/AppProvider";
import { ROUTES } from "./context/settings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <AppProvider>
      <NavWrapper />
    </AppProvider>
  );
}

const NavWrapper = () => {
  // const { navPage, setNavPage } = React.useContext(AppContext);
  // const onSetNavPage = (e) => {
  //   setNavPage(e);
  // };

  // React.useEffect(() => {
  //   console.log("App Nav: ", navPage);
  // }, [navPage]);

  return (
    <Router>
      <Routes>
        {ROUTES.map((e, i) => {
          return <Route key={i} path={e.path} element={e.element} />;
        })}
      </Routes>
    </Router>
  );
};

export default App;
