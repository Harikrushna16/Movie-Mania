import React, { createContext } from "react";

export const MasterContext = createContext({});

const MasterProvider = ({ children }: { children: React.ReactNode }) => {
  const contextValue = {};
  return (
    <MasterContext.Provider value={contextValue}>
      {children}
    </MasterContext.Provider>
  );
};
