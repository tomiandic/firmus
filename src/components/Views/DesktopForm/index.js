import React, {useState} from 'react';
import styles from "./style.js";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import { Button, useMediaQuery, Fade, TextField, InputLabel  } from '@material-ui/core';
import { useHistory } from "react-router-dom";
const useStyles = makeStyles(styles);


export default function Landing() {
    const [loaderVisible, setLoaderVisible] = React.useState(true);
    const [info, setInfo] = useState({
        fullName: "",
        city: "",
        date: new Date('1999-01-01'),
        mail: "",
        genre: "F",
        gdpr: false
    });

    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();

    const openForm = () => {
        history.push('/form/0');
    }

    const handleInputChange = (e) => {
        const {name, value, type, checked} = e.target;
        setInfo(prevState => ({...prevState, [name]:value}));
    } 

    return(
        <div className={classes.desktopFormContainer}>
            <div className={classes.loginDiv}>
                <svg className={classes.landingLogo} viewBox="0 0 331.82 85.6"><path d="M419.55,497.7A44.78,44.78,0,0,0,400.44,583a3.24,3.24,0,0,0,4.65-2.94V542.48a14.46,14.46,0,1,1,28.92,0,3.26,3.26,0,0,0,6.51,0,21,21,0,1,0-41.94,0v32a38.26,38.26,0,1,1,37.29,2.61,3.26,3.26,0,0,0,2.78,5.89,44.78,44.78,0,0,0-19.1-85.29Z" transform="translate(-374.77 -497.7)"/><path d="M419.55,546.11a5.25,5.25,0,1,0,5.25,5.24A5.25,5.25,0,0,0,419.55,546.11Z" transform="translate(-374.77 -497.7)"/><polygon points="116.51 68.29 123.56 68.29 123.56 47.14 151.76 47.14 151.76 40.09 123.56 40.09 123.56 25.99 158.81 25.99 158.81 18.94 116.51 18.94 116.51 68.29"/><rect x="162.3" y="33.04" width="7.05" height="35.25"/><path d="M551.88,544.84V566h7V544.84q0-7.05,7.05-7.05h7v-7h-7Q551.88,530.74,551.88,544.84Z" transform="translate(-374.77 -497.7)"/><path d="M612.93,530.74q-7,0-10.58,3.52-3.52-3.53-10.57-3.52-14.1,0-14.1,14.1V566h7.05V544.84q0-7.05,7-7.05t7.05,7.05V566h7V544.84q0-7.05,7-7.05t7.05,7.05V566h7V544.84Q627,530.74,612.93,530.74Z" transform="translate(-374.77 -497.7)"/><path d="M660.87,551.89q0,7.05-7,7.05h-7.05q-7,0-7-7.05V530.74h-7.05v21.15q0,14.1,14.1,14.09h7.05q14.1,0,14.1-14.09V530.74h-7Z" transform="translate(-374.77 -497.7)"/><path d="M689,544.84q-10.58-1.07-10.58-4.06c0-2,2.35-3,7.05-3h19.39v-7H685.44q-14.1,0-14.1,10T689,551.89q10.57,1.05,10.57,4.05t-7,3H673.11v7h19.38q14.1,0,14.1-10T689,544.84Z" transform="translate(-374.77 -497.7)"/><path d="M540.6,516.06a4.11,4.11,0,1,0,4.11,4.1A4.1,4.1,0,0,0,540.6,516.06Z" transform="translate(-374.77 -497.7)"/></svg>
                <h1 className={classes.landingTitle}>Pronađimo vam posao!</h1>
                <p className={classes.landingSubTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className={classes.formDiv}>
                <div className={classes.formInner}>
                    
                    <div style={{minWidth:"100%"}} className={classes.inputContainer}>
                        <InputLabel className={classes.inputLabel}>Ime i prezime*</InputLabel>
                        <TextField autoFocus onChange={(e) => handleInputChange(e)} value={info.fullName} name="fullName" className={classes.infoInput} variant="filled"/>
                    </div>  

                    <div style={{marginRight: 5}} className={classes.inputContainer}>
                        <InputLabel className={classes.inputLabel}>Grad stanovanja*</InputLabel>
                        <TextField inputProps={{readOnly:true}} onClick={() =>console.log("open")} onChange={(e) => handleInputChange(e)} value={info.city} name="city" className={classes.infoInput} variant="filled"/> 
                    </div>

                    <div className={classes.inputContainer}>
                        <InputLabel className={classes.inputLabel}>Datum rođenja*</InputLabel>
                        <TextField inputProps={{readOnly:true}} onClick={console.log("opem")} onChange={(e) => handleInputChange(e)} value={""} name="date" className={classes.infoInput} variant="filled"/>
                    </div>

                    <div style={{minWidth:"100%"}} className={classes.inputContainer}>
                        <InputLabel className={classes.inputLabel}>Email adresa*</InputLabel>
                        <TextField name="mail" onChange={(e)=>handleInputChange(e)} value={info.mail} className={classes.infoInput} variant="filled"/>
                    </div>
                    <div className={classes.inputContainer}>
                    <InputLabel className={classes.inputLabel}>Spol*</InputLabel>

                    <div className={classes.pickerContainer}>
                        <div className={info.genre==="F"?`${classes.buttonPicker} ${classes.buttonPickerActive}`:classes.buttonPicker}>
                            <input name="genre" className={classes.buttonPickerInput} id="F" value="F" type="checkbox" onChange={(e) => handleInputChange(e)} checked={info.genre==="F"} />
                            <svg className={classes.buttonPickerCheck} viewBox="0 0 48.89 48.89"><circle cx="24.45" cy="24.45" r="24.45" fill="#d9e4f4"></circle><polyline points="10.26 25.54 21.14 35.45 38.63 13.44" fill="none" stroke="#1479ec" strokeMiterlimit="10" strokeWidth="7"></polyline></svg>
                            <label htmlFor={"F"} className={classes.buttonPickerLabel}>
                                <svg className={classes.buttonPickerMainIcon} width="29.709" height="29.703" viewBox="0 0 29.709 29.703"> <g transform="translate(0.253 0.25)"> <path d="M37.189,36.616l-1.1-4.335,0-.014a5.171,5.171,0,0,0-3.914-3.647h-.006l-1.08-.211V16.478a8.478,8.478,0,0,0-16.957,0v11.93l-1.08.211h-.006a5.171,5.171,0,0,0-3.914,3.647l0,.014-1.1,4.335a.47.47,0,0,0,.456.587H36.733a.47.47,0,0,0,.456-.587ZM15.066,16.478a7.536,7.536,0,0,1,15.073,0V28.224L25.9,27.395V26.141a6.885,6.885,0,0,0,3.3-5.423V16.949a.283.283,0,0,0,0-.041.471.471,0,0,0-.383-.508,4.784,4.784,0,0,1-3.047-2.055.471.471,0,0,0-.719-.073,7.452,7.452,0,0,1-8.371,1.54.471.471,0,0,0-.6.195c-.008.013-.014.026-.021.04a.475.475,0,0,0-.042.194v4.476a6.885,6.885,0,0,0,3.3,5.423v1.254l-4.239.829ZM22.6,26.37a6.063,6.063,0,0,1-3.63-1.673,5.36,5.36,0,0,1-2.022-3.979V16.938a8.374,8.374,0,0,0,8.358-1.628,5.734,5.734,0,0,0,2.946,1.929v3.478A5.36,5.36,0,0,1,26.233,24.7,6.063,6.063,0,0,1,22.6,26.37Zm2.355.317v1.1c0,.9-1.321,3-2.355,4.4-1.034-1.4-2.355-3.5-2.355-4.4v-1.1a5.511,5.511,0,0,0,2.355.625A5.511,5.511,0,0,0,24.957,26.687Zm6.123,9.575V34.377a.471.471,0,0,0-.942,0v1.884H15.066V34.377a.471.471,0,0,0-.942,0v1.884H9.078l.953-3.741a4.231,4.231,0,0,1,3.2-2.977l6.153-1.2c.432,1.778,2.581,4.569,2.85,4.914a.471.471,0,0,0,.743,0c.269-.344,2.418-3.136,2.85-4.914l6.153,1.2a4.231,4.231,0,0,1,3.2,2.977l.953,3.741Z" transform="translate(-8.001 -8)" /> <path d="M241.413,264h-.942a.471.471,0,1,0,0,.942h.942a.471.471,0,0,0,0-.942Z" transform="translate(-226.34 -248.927)"/> <ellipse cx="1" cy="0.5" rx="1" ry="0.5" transform="translate(11 10.103)" /> <ellipse cx="1" cy="0.5" rx="1" ry="0.5" transform="translate(16 10.103)" /> </g> </svg>
                            </label>
                        </div>
                        <div className={info.genre==="M"?`${classes.buttonPicker} ${classes.buttonPickerActive}`:classes.buttonPicker}>
                            <input name="genre" className={classes.buttonPickerInput} id="M" value="M" type="checkbox" onChange={(e) => handleInputChange(e)} checked={info.genre==="M"} />
                            <svg className={classes.buttonPickerCheck} viewBox="0 0 48.89 48.89"><circle cx="24.45" cy="24.45" r="24.45" fill="#d9e4f4"></circle><polyline points="10.26 25.54 21.14 35.45 38.63 13.44" fill="none" stroke="#1479ec" strokeMiterlimit="10" strokeWidth="7"></polyline></svg>
                            <label htmlFor={"M"} className={classes.buttonPickerLabel}>
                                <svg className={classes.buttonPickerMainIcon} width="29.203" height="29.203" viewBox="0 0 29.203 29.203"> <path d="M37.189,36.616l-1.1-4.335,0-.014a5.171,5.171,0,0,0-3.914-3.647l-5.8-1.22V26.126a6.6,6.6,0,0,0,2.758-4.466h.3a1.65,1.65,0,0,0,1.649-1.649V18.6a1.65,1.65,0,0,0-1.649-1.649H29.2V15.838a4.18,4.18,0,0,0,2.407-3.1,4.958,4.958,0,0,0-.07-2.037.471.471,0,0,0-.845-.132c-.414.621-2.489-.523-3.269-.953L27.1,9.437A7.812,7.812,0,0,0,22.6,8a6.6,6.6,0,0,0-6.594,6.594v2.355h-.236A1.65,1.65,0,0,0,14.124,18.6v1.413a1.65,1.65,0,0,0,1.649,1.649h.3a6.6,6.6,0,0,0,2.758,4.466V27.4l-5.8,1.22a5.171,5.171,0,0,0-3.914,3.647l0,.014-1.1,4.335a.47.47,0,0,0,.456.587H36.733a.47.47,0,0,0,.456-.587Zm-21.181-15.9h-.236a.707.707,0,0,1-.707-.707V18.6a.707.707,0,0,1,.707-.707h.236Zm13.424-2.826a.707.707,0,0,1,.707.707v1.413a.707.707,0,0,1-.707.707H29.2V17.891Zm-12.482-3.3A5.659,5.659,0,0,1,22.6,8.942a6.983,6.983,0,0,1,4.01,1.3l.028.016c.1.052.207.112.324.177,1.062.585,2.685,1.48,3.766,1.188a3.36,3.36,0,0,1-2.19,3.48.471.471,0,0,0-.286.433v.726A4.748,4.748,0,0,1,25.764,14.4a.471.471,0,0,0-.719-.073,7.55,7.55,0,0,1-8.094,1.6Zm0,6.123V16.938a8.494,8.494,0,0,0,8.359-1.571,5.7,5.7,0,0,0,2.945,1.874v3.477a5.652,5.652,0,0,1-11.3,0Zm8.478,5.957v1.108a2.1,2.1,0,0,1-.924,1.829,3.427,3.427,0,0,1-1.9.526c-2.086,0-2.826-1.269-2.826-2.355V26.675A6.587,6.587,0,0,0,25.428,26.675Zm6.594,9.586V34.377a.471.471,0,0,0-.942,0v1.884H14.124V34.377a.471.471,0,1,0-.942,0v1.884h-4.1l.953-3.741a4.231,4.231,0,0,1,3.2-2.977l5.648-1.189a2.979,2.979,0,0,0,1.1,1.892,4.194,4.194,0,0,0,2.627.834,4.194,4.194,0,0,0,2.627-.834,2.979,2.979,0,0,0,1.1-1.892l5.648,1.189a4.231,4.231,0,0,1,3.2,2.977l.953,3.741Z" transform="translate(-8.001 -8)" /> <path d="M234.826,264.471a.471.471,0,0,0-.471-.471h-1.884a.471.471,0,1,0,0,.942h1.884A.471.471,0,0,0,234.826,264.471Z" transform="translate(-218.811 -248.927)" /> <ellipse cx="1" cy="0.5" rx="1" ry="0.5" transform="translate(10.553 10.103)" /> <ellipse cx="1" cy="0.5" rx="1" ry="0.5" transform="translate(16.553 10.103)" /> </svg>
                            </label>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 
 
