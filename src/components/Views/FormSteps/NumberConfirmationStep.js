import React, {useState} from 'react';
import {TextField, makeStyles, InputLabel} from '@material-ui/core';
import phoneIllustration from '../../../assets/PhoneIllustration.svg';
import styles from "../FormContainer/style.js";

const useStyles = makeStyles(styles);


export default function NumberConfirmationStep(props){

    const [phoneNumber, setPhoneNumber] = useState("");
    const handleInputChange = (e) => {
        const {value} = e.target;
        setPhoneNumber(value);
    } 
  
    const classes = useStyles();

    return(
        <div {...props} className={classes.basicInfoContainer}>
            <div style={{minWidth:"100%"}} className={classes.inputContainer}>
                <div className={classes.modalLocationFeedback}>
                    <img className={classes.illustration} src={phoneIllustration} /><br /> <br />
                    <InputLabel className={classes.inputLabel}>BROJ TELEFONA</InputLabel>
                    <br />
                <TextField name="phoneNumber" onChange={(e)=>handleInputChange(e)} value={phoneNumber} className={classes.infoInput} variant="filled"/>
                </div>

            </div>
        </div>
    )
}