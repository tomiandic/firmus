import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Slider,
  Button,
  DialogActions,
} from "@material-ui/core";
import styles from "../FormContainer/style.js";
const useStyles = makeStyles(styles);

export default function AvailabilityStep(props) {
  const { days, setDaySelected } = props;
  const [activeDay, setActiveDay] = useState(null);
  const [activeDayTime, setActiveDayTime] = useState([10, 18]);

  useEffect(() => {
    props.setButtonVisible(Object.values(days).some((el) => el !== null));
  }, [days]);

  const selectDay = (e, name) => {
    days[name]
      ? setDaySelected((prevState) => ({ ...prevState, [name]: null }))
      : setActiveDay(name);
  };

  const saveSelectedTime = () => {
    setDaySelected(
      (prevState) => ({ ...prevState, [activeDay]: activeDayTime }),
      setTimeout(() => setActiveDayTime([10, 18]), 500)
    );
    setActiveDay(null);
  };

  const classes = useStyles();
  const marks = [
    {
      value: 8,
      label: "08",
    },
    {
      value: 10,
      label: "10",
    },
    {
      value: 12,
      label: "12",
    },
    {
      value: 14,
      label: "14",
    },
    {
      value: 16,
      label: "16",
    },
    {
      value: 18,
      label: "18",
    },
    {
      value: 20,
      label: "20",
    },
    {
      value: 22,
      label: "22",
    },
    {
      value: 24,
      label: "24",
    },
  ];
  return (
    <div style={{ ...props.style }} className={classes.pickerContainer}>
      {Object.keys(days).map((day) => (
        <div
          key={day}
          className={
            days[day]
              ? `${classes.buttonPicker} ${classes.buttonPickerActive}`
              : classes.buttonPicker
          }
        >
          <input
            className={classes.buttonPickerInput}
            id={day}
            value={day ? true : false}
            type="checkbox"
            onChange={(e) => selectDay(e, day)}
            checked={days[day] ? true : false}
          />
          <svg className={classes.buttonPickerCheck} viewBox="0 0 48.89 48.89">
            <circle cx="24.45" cy="24.45" r="24.45" fill="#d9e4f4"></circle>
            <polyline
              points="10.26 25.54 21.14 35.45 38.63 13.44"
              fill="none"
              stroke="#1479ec"
              strokeMiterlimit="10"
              strokeWidth="7"
            ></polyline>
          </svg>
          <label htmlFor={day} className={classes.buttonPickerLabel}>
            <span className={classes.buttonPickerTitleBig}>{day}</span>
          </label>
          <div className={classes.dayTimeBadge}>{days[day]?.join(" - ")}</div>
        </div>
      ))}
      <Dialog open={activeDay ? true : false}>
        <DialogTitle>Raspon vremena kada ste slobodni za rad</DialogTitle>
        <DialogContent>
          <Slider
            marks={marks}
            onChange={(e, newVal) => setActiveDayTime(newVal)}
            value={activeDayTime}
            step={1}
            min={7}
            max={24}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setActiveDay(null)}>Odustani</Button>
          <Button onClick={() => saveSelectedTime()}>Spremi</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
