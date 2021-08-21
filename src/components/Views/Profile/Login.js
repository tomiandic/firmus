import React, {useEffect} from 'react';
import loginIllustration from '../../../assets/login.svg';
import { TextField, InputLabel, Button, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { accountService } from "../../../services";

import styles from "./style.js";
const useStyles = makeStyles(styles);
 

export default function Login(props){
   
    const classes = useStyles();
    return(
        <div className={classes.loginContainer}>

            <div className={classes.loginInfo}>
            <svg className={classes.landingLogo} viewBox="0 0 331.82 85.6"><path d="M419.55,497.7A44.78,44.78,0,0,0,400.44,583a3.24,3.24,0,0,0,4.65-2.94V542.48a14.46,14.46,0,1,1,28.92,0,3.26,3.26,0,0,0,6.51,0,21,21,0,1,0-41.94,0v32a38.26,38.26,0,1,1,37.29,2.61,3.26,3.26,0,0,0,2.78,5.89,44.78,44.78,0,0,0-19.1-85.29Z" transform="translate(-374.77 -497.7)" />{" "} <path d="M419.55,546.11a5.25,5.25,0,1,0,5.25,5.24A5.25,5.25,0,0,0,419.55,546.11Z" transform="translate(-374.77 -497.7)" />{" "} <polygon points="116.51 68.29 123.56 68.29 123.56 47.14 151.76 47.14 151.76 40.09 123.56 40.09 123.56 25.99 158.81 25.99 158.81 18.94 116.51 18.94 116.51 68.29" />{" "} <rect x="162.3" y="33.04" width="7.05" height="35.25" />{" "} <path d="M551.88,544.84V566h7V544.84q0-7.05,7.05-7.05h7v-7h-7Q551.88,530.74,551.88,544.84Z" transform="translate(-374.77 -497.7)" />{" "} <path d="M612.93,530.74q-7,0-10.58,3.52-3.52-3.53-10.57-3.52-14.1,0-14.1,14.1V566h7.05V544.84q0-7.05,7-7.05t7.05,7.05V566h7V544.84q0-7.05,7-7.05t7.05,7.05V566h7V544.84Q627,530.74,612.93,530.74Z" transform="translate(-374.77 -497.7)" />{" "} <path d="M660.87,551.89q0,7.05-7,7.05h-7.05q-7,0-7-7.05V530.74h-7.05v21.15q0,14.1,14.1,14.09h7.05q14.1,0,14.1-14.09V530.74h-7Z" transform="translate(-374.77 -497.7)" />{" "} <path d="M689,544.84q-10.58-1.07-10.58-4.06c0-2,2.35-3,7.05-3h19.39v-7H685.44q-14.1,0-14.1,10T689,551.89q10.57,1.05,10.57,4.05t-7,3H673.11v7h19.38q14.1,0,14.1-10T689,544.84Z" transform="translate(-374.77 -497.7)" />{" "} <path d="M540.6,516.06a4.11,4.11,0,1,0,4.11,4.1A4.1,4.1,0,0,0,540.6,516.06Z" transform="translate(-374.77 -497.7)" />{" "} </svg>
            <h2>Hey!<br/> Dobrodošli natrag.</h2>
            <img className={classes.loginIllustration} src={loginIllustration} />
            </div>
            <div className={classes.loginContent}>
                <div className={classes.loginContentInner}>
                    <h3 className={classes.loginContentTitle}>
                        Prijavi se u Firmus
                    </h3>
                    <p className={classes.loginContentSubtitle}>
                        Unesite vaše podatke
                    </p>
                    
                    <div className={classes.inputLabel}>
                        <InputLabel className={classes.inputLabel}>Email*</InputLabel>
                        <TextField 
                            variant="filled"
                            fullWidth
                            autoFocus
                         />
                     </div><br />
                    <div className={classes.inputLabel}>
                        <InputLabel className={classes.inputLabel}>Lozinka*</InputLabel>
                        <TextField 
                            variant="filled"
                            fullWidth
                         />
                    </div>
                    <div style={{justifyContent: "space-between", display: "flex"}} className={classes.inputLabel}>
                            <a style={{color: "#1479EC", fontWeight: "bold", marginTop: 10}}>Zaboravljena lozinka?</a>
                            <label>
                                <Checkbox color="primary" checked={ true } />Zapamti me
                            </label>
                    </div>
                    <div className={classes.separator}>ili</div>

                    <div className={classes.socialMediaLogin}>
                        <p>Odaberite društvenu mrežu za brzu prijavu</p>
                        <Button onClick={accountService.login} style={{background: "#4267B2"}} className={classes.socialButton}>Facebook</Button>
                        <Button style={{background: "radial-gradient(circle at 0% 107%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)"}} className={classes.socialButton}>Instagram</Button>
                    </div>
                    <br /><br />
                    <Button variant="contained" color="primary" fullWidth>Prijava</Button>
                </div>
            </div>
        </div>
    )}