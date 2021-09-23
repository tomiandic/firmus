import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AccordionSummary,
  AccordionDetails,
  List,
  Accordion,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import data from "../../../data/data.json";
//redux
import { useDispatch, useSelector } from "react-redux";
import {
  updateProfile,
  fetchJobs,
} from "../../../redux/reducers/userProfileSlice";

import ListOption from "../../UI/ListOption";
import waiterIcon from "./../../../assets/jobIcons/waiter.svg";
import styles from "../FormContainer/style.js";

const useStyles = makeStyles(styles);

export default function JobStep(props) {
  const { setButtonVisible, setSelectCount } = props;

  const dispatch = useDispatch();
  const selectedJobs = useSelector((state) => state.userProfile.selectedJobs);

  useEffect(() => {
    let jobSelectedCount = Object.values(selectedJobs).filter(
      (x) => x === true
    ).length;
    setButtonVisible(jobSelectedCount > 0);
    setSelectCount(jobSelectedCount);
  }, [selectedJobs]);

  useEffect(() => {
    dispatch(fetchJobs());
  }, []);

  const selectJob = (e) => {
    dispatch(
      updateProfile({
        property: "selectedJobs",
        value: { [e.target.name]: e.target.checked },
      })
    );
  };
  console.log(selectedJobs);
  const classes = useStyles();
  if (Object.keys(selectedJobs).length > 0) {
    return (
      <div style={{ ...props.style }}>
        {Object.keys(data.allJobs).map((jobCategory) => (
          <Accordion key={jobCategory} className={classes.accordionContainer}>
            <AccordionSummary
              elevation={1}
              className={classes.jobItem}
              expandIcon={<ExpandMore />}
            >
              <div className={classes.jobIcon}>
                <img src={waiterIcon} />
              </div>
              <div>
                {jobCategory}
                <span>{data.allJobs[jobCategory].length} potkategorija</span>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <List className={classes.inputList}>
                {data.allJobs[jobCategory].map((job) => {
                  return (
                    <ListOption
                      key={job.name}
                      optionName={job.name}
                      optionChecked={selectedJobs[job.name]}
                      handleCheckbox={selectJob}
                    />
                  );
                })}
              </List>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
}
