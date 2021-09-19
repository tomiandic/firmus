import React, { createContext, useState } from "react";
import data from "../data/data.json";

export const jobsContext = createContext();

const JobsProvider = (props) => {
  const [selectedJobs, setJobSelected] = useState({});

  return (
    <jobsContext.Provider value={[selectedJobs, setJobSelected]}>
      {props.children}
    </jobsContext.Provider>
  );
};

export default JobsProvider;
