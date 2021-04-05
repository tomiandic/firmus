import React from 'react';
import styles from "./style.js";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import { Button, useMediaQuery, Fade } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import ArrowIcon from '@material-ui/icons/ArrowForward';
import LandingImg from "../../../assets/landing1.jpg";
import Logo from "../../../assets/logo2.png";
import Instructions from '../Instructions';

const useStyles = makeStyles(styles);


export default function Landing() {
    const [opened, setOpened] = React.useState(false);
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    const matches = useMediaQuery(theme.breakpoints.up("sm"));

    const toggleInstructions = () => {
        setOpened((prev) => !prev);
    }

    const openForm = () => {
        history.push('/form/0');
    }

    return(
        <div className={classes.landingContainer}>
            <div>
                <Fade in={opened} timeout={700} >
                    <Instructions toggleInstructions={toggleInstructions} />
                </Fade>
            </div>
            <div className={classes.imgHolder}>
                <img className={classes.stretchedImg} src={LandingImg} />
                <div className={classes.gradientDiv} />
                {!matches ? <img className={classes.landingLogo} src={Logo} /> : null}
            </div>
            <div className={classes.loginDiv}>
                {matches&&
                <img className={classes.landingLogo} src={Logo} />}
                <h1 className={classes.landingTitle}>Pronađimo vam posao!</h1>
                <p className={classes.landingSubTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <Button onClick={openForm} variant="contained" className={classes.landingBtn}>
                    {matches?
                    <span>Registriraj se</span>:
                    <ArrowIcon /> }
                </Button>
                <a className={classes.landingLink} onClick={toggleInstructions}>Kako Firmus funkcionira?</a>
            </div>
        </div>
    )
} 
 
