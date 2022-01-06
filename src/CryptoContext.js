import React, { createContext, useState, useEffect, useContext } from "react";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("MYR");
  const [symbol, setSymbol] = useState("RM");

  useEffect(() => {
    if (currency === "MYR") setSymbol("RM");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);
  // run this everytime currency changes
  return (
    <Crypto.Provider value={{ currency, setCurrency, symbol }}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
