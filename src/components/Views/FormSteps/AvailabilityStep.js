import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

import styles from "../FormContainer/style.js";
const useStyles = makeStyles(styles);


export default function AvailabilityStep(props){
    const {days, setDaySelected} = props;

    const selectDay = (e, name) =>{console.log(e.target.checked);setDaySelected(prevState => ({...prevState, [name]:e.target.checked}))};

    const classes = useStyles();
    return(
        <div style={{...props.style}} className={classes.pickerContainer}>
            {Object.keys(days).map((day) => 
            <div key={day} className={days[day]?`${classes.buttonPicker} ${classes.buttonPickerActive}`:classes.buttonPicker}>
                <input className={classes.buttonPickerInput} id={day} value={day} type="checkbox" onChange={(e) => selectDay(e, day)} checked={days[day]} />
                <svg className={classes.buttonPickerCheck} viewBox="0 0 48.89 48.89"><circle cx="24.45" cy="24.45" r="24.45" fill="#d9e4f4"></circle><polyline points="10.26 25.54 21.14 35.45 38.63 13.44" fill="none" stroke="#1479ec" strokeMiterlimit="10" strokeWidth="7"></polyline></svg>
                <label htmlFor={day} className={classes.buttonPickerLabel}>
                    <span className={classes.buttonPickerTitleBig}>{day}</span>
                </label>
            </div>)}
        </div>
    )}