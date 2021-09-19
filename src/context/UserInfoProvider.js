import React, { createContext, useState } from "react";

export const userInfoContext = createContext();

const UserInfoProvider = (props) => {
  const [info, setInfo] = useState({
    fullName: "",
    city: "",
    date: new Date("1999-01-01"),
    genre: "F",
    phoneNumber: "+385 ",
  });

  return (
    <userInfoContext.Provider value={[info, setInfo]}>
      {props.children}
    </userInfoContext.Provider>
  );
};

export default UserInfoProvider;
