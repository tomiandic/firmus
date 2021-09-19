import React, { createContext, useState } from "react";

export const userCredentialsContext = createContext();

const UserCredentialsProvider = (props) => {
  const [info, setInfo] = useState({
    mail: "",
    password: "",
  });
  return (
    <userCredentialsContext.Provider value={[info, setInfo]}>
      {props.children}
    </userCredentialsContext.Provider>
  );
};

export default UserCredentialsProvider;
