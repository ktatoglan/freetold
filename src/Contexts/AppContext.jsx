import React, { useState, createContext, useContext } from 'react';

const MyContext = createContext();

const AppProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  return (
    <MyContext.Provider
      value={{mode, setMode }}
    >
      {children}
    </MyContext.Provider>
  );
};

const useAppProvider = () => {
  return useContext(MyContext);
};

export { useAppProvider, AppProvider };
