import React from "react";

export const AppContext = React.createContext({
  navPage: "",
  setNavPage: (val) => {},
});

const AppProvider = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export default AppProvider;
