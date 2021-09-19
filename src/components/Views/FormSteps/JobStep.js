import React, { useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AccordionSummary,
  AccordionDetails,
  List,
  Accordion,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import ListOption from "../../UI/ListOption";
import waiterIcon from "./../../../assets/jobIcons/waiter.svg";
import styles from "../FormContainer/style.js";
import data from "../../../data/data.json";
import { jobsContext } from "../../../context/JobsProvider";
const useStyles = makeStyles(styles);

export default function JobStep(props) {
  const { jobs, setButtonVisible, setSelectCount } = props;

  const [selectedJobs, setJobSelected] = useContext(jobsContext);

  useEffect(() => {
    let selectedJobs = {};
    Object.keys(data.allJobs).forEach((jobCategory) =>
      data.allJobs[jobCategory].forEach(
        (job) => (selectedJobs[job.name] = false)
      )
    );
    setJobSelected(selectedJobs);
  }, []);

  useEffect(() => {
    let jobSelectedCount = Object.values(selectedJobs).filter(
      (x) => x === true
    ).length;
    setButtonVisible(jobSelectedCount > 0);
    setSelectCount(jobSelectedCount);
  }, [selectedJobs]);

  const selectJob = (e) => {
    setJobSelected((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.checked,
    }));
  };
  const classes = useStyles();
  return (
    <div style={{ ...props.style }}>
      {Object.keys(jobs).map((jobCategory) => (
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
              <span>{jobs[jobCategory].length} potkategorija</span>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <List className={classes.inputList}>
              {jobs[jobCategory].map((job) => {
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
}
