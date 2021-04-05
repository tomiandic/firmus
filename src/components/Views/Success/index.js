import React from 'react';
import styles from "./style.js";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import { Button, useMediaQuery, Fade, Stepper, Step, StepLabel, StepContent } from '@material-ui/core';
import LandingImg from "../../../assets/landing1.jpg";
import Logo from "../../../assets/logo2.png";
import CheckIcon from '@material-ui/icons/Check';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles(styles);


export default function Success() {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("sm"));

    return(
        <div className={classes.landingContainer}>
            <div className={classes.imgHolder}>
                <img className={classes.stretchedImg} src={LandingImg} />
                <div className={classes.gradientDiv} />
                {!matches ? <img className={classes.landingLogo} src={Logo} /> : null}
            </div>
            <div className={classes.loginDiv}>
                <div className={classes.successCircle}><CheckIcon fontSize="large" /></div>
                <Stepper className={classes.stepper} activeStep={1} orientation="vertical">
                        <Step>
                            <StepLabel className={classes.stepperLabel}>Uspješna prijava!</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel className={classes.stepperLabel}>Sljedeći korak</StepLabel>
                            <StepContent className={classes.stepperContent}>
                                Lorem ipsum dolor sit amet, consectetr adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                            </StepContent>
                        </Step> 
                </Stepper>
            </div>
            <div className={classes.socialMediaContainer}>
                <p>Preporuči Firmus prijateljima!</p>
                <a href=""><FacebookIcon color="#fff" /></a>
                <a href=""><FacebookIcon color="#fff" /></a>
                <a href=""><FacebookIcon color="#fff" /></a>
                <a href=""><FacebookIcon color="#fff" /></a>
            </div>
        </div>
    )
} 
 
