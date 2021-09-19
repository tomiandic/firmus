import React, { createContext, useState } from "react";

export const languagesContext = createContext();

const LanguagesProvider = (props) => {
  const [languages, setLanguageSelected] = useState({});

  return (
    <languagesContext.Provider value={[languages, setLanguageSelected]}>
      {props.children}
    </languagesContext.Provider>
  );
};

export default LanguagesProvider;
