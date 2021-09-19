import React, { createContext, useState } from "react";
import data from "../data/data.json";

export const availabilityContext = createContext();

const AvailabilityProvider = (props) => {
  const [days, setDaySelected] = useState(data.days);

  return (
    <availabilityContext.Provider value={[days, setDaySelected]}>
      {props.children}
    </availabilityContext.Provider>
  );
};

export default AvailabilityProvider;
