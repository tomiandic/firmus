import React, {useEffect} from 'react';
import {TextField, makeStyles, InputLabel} from '@material-ui/core';
import phoneIllustration from '../../../assets/PhoneIllustration.svg';
import styles from "../FormContainer/style.js";

const useStyles = makeStyles(styles);


export default function PhoneNumberStep(props){

    useEffect(() => {
        props.setButtonVisible(props.phoneNumber.length > 12);
    }, [props.phoneNumber])

    const handleInputChange = (e) => {
        const {value} = e.target;
        if(value.length<5)return;
        props.setPhoneNumber(value);
    } 
  
    const classes = useStyles();

    return( 
        <div style={{...props.style}} className={classes.basicInfoContainer}>
            <div style={{minWidth:"100%"}} className={classes.inputContainer}>
                <div className={classes.modalLocationFeedback}>
                    <img className={classes.illustration} src={phoneIllustration} />
                    <InputLabel className={classes.inputLabelCenter}>BROJ TELEFONA</InputLabel>
                    <TextField fullWidth autoFocus type="tel" name="phoneNumber" onChange={(e)=>handleInputChange(e)} value={props.phoneNumber} className={classes.phoneNumInput} variant="filled"/>
                </div>
            </div>
        </div>
    )
}