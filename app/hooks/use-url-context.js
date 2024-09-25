import React from "react";

export const UrlContext = React.createContext(undefined);

export const useUrlContext = () => {
  const ctx = React.useContext(UrlContext);
  if (ctx === undefined) {
    throw new Error("useUrlContext should be used inside UrlContext.Provider");
  }
  return ctx;
};
