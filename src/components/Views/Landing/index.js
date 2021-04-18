import React, {useEffect} from 'react';
import styles from "./style.js";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import { Button, useMediaQuery, Fade } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import ArrowIcon from '@material-ui/icons/ArrowForward';
import landingImg from "../../../assets/landing1.jpg";
import Instructions from '../Instructions';
import LogoLoader from '../../UI/LogoLoader';
const useStyles = makeStyles(styles);


export default function Landing() {
    const [opened, setOpened] = React.useState(false);
    const [loaderVisible, setLoaderVisible] = React.useState(true);

    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    const matches = useMediaQuery(theme.breakpoints.up("sm"));

    const landingImage = new Image();

    useEffect(
        ()=>{
            setTimeout(preloadImage, 2000) 
            }, []);


    const preloadImage = () => {
        landingImage.src = landingImg;
        landingImage.onload = () => {setLoaderVisible(false)}
    }

    const toggleInstructions = () => {
        setOpened((prev) => !prev);
    }

    const openForm = () => {
        history.push('/form/0');
    }

    return(
        loaderVisible
        ?
        <Fade in={loaderVisible} unmountOnExit timeout={400}>
            <LogoLoader />
        </Fade>
        :
        <div className={classes.landingContainer}>
            <Fade mountOnEnter unmountOnExit in={opened} timeout={700} >
                <Instructions toggleInstructions={toggleInstructions} />
            </Fade>
            {!matches&&<svg className={classes.landingLogo} fill="#fff" viewBox="0 0 743 710.19"><path d="M538.5,183.5C333.65,183.5,167,350.16,167,555c0,143,83.6,274.94,213,336.07a27,27,0,0,0,38.58-24.42V555a120,120,0,0,1,239.9,0,27,27,0,0,0,54,0c0-95.93-78.05-174-174-174s-174,78.05-174,174V820.58C276.16,762.43,221,662.38,221,555c0-175.06,142.41-317.47,317.47-317.47S856,379.94,856,555c0,122.26-71.47,235-182.08,287.25A27,27,0,1,0,697,891.1C826.38,830,910,698.06,910,555,910,350.16,743.35,183.5,538.5,183.5Z" transform="translate(-167 -183.5)"/><path class="cls-1" d="M538.5,585.12A43.52,43.52,0,1,0,582,628.64,43.57,43.57,0,0,0,538.5,585.12Z" transform="translate(-167 -183.5)"/></svg>}
            <img className={classes.stretchedImg} src={landingImg} />
            <div className={classes.gradientDiv} />
            <div className={classes.loginDiv}>
                {matches&&<svg className={classes.landingLogo} viewBox="0 0 331.82 85.6"><path d="M419.55,497.7A44.78,44.78,0,0,0,400.44,583a3.24,3.24,0,0,0,4.65-2.94V542.48a14.46,14.46,0,1,1,28.92,0,3.26,3.26,0,0,0,6.51,0,21,21,0,1,0-41.94,0v32a38.26,38.26,0,1,1,37.29,2.61,3.26,3.26,0,0,0,2.78,5.89,44.78,44.78,0,0,0-19.1-85.29Z" transform="translate(-374.77 -497.7)"/><path d="M419.55,546.11a5.25,5.25,0,1,0,5.25,5.24A5.25,5.25,0,0,0,419.55,546.11Z" transform="translate(-374.77 -497.7)"/><polygon points="116.51 68.29 123.56 68.29 123.56 47.14 151.76 47.14 151.76 40.09 123.56 40.09 123.56 25.99 158.81 25.99 158.81 18.94 116.51 18.94 116.51 68.29"/><rect x="162.3" y="33.04" width="7.05" height="35.25"/><path d="M551.88,544.84V566h7V544.84q0-7.05,7.05-7.05h7v-7h-7Q551.88,530.74,551.88,544.84Z" transform="translate(-374.77 -497.7)"/><path d="M612.93,530.74q-7,0-10.58,3.52-3.52-3.53-10.57-3.52-14.1,0-14.1,14.1V566h7.05V544.84q0-7.05,7-7.05t7.05,7.05V566h7V544.84q0-7.05,7-7.05t7.05,7.05V566h7V544.84Q627,530.74,612.93,530.74Z" transform="translate(-374.77 -497.7)"/><path d="M660.87,551.89q0,7.05-7,7.05h-7.05q-7,0-7-7.05V530.74h-7.05v21.15q0,14.1,14.1,14.09h7.05q14.1,0,14.1-14.09V530.74h-7Z" transform="translate(-374.77 -497.7)"/><path d="M689,544.84q-10.58-1.07-10.58-4.06c0-2,2.35-3,7.05-3h19.39v-7H685.44q-14.1,0-14.1,10T689,551.89q10.57,1.05,10.57,4.05t-7,3H673.11v7h19.38q14.1,0,14.1-10T689,544.84Z" transform="translate(-374.77 -497.7)"/><path d="M540.6,516.06a4.11,4.11,0,1,0,4.11,4.1A4.1,4.1,0,0,0,540.6,516.06Z" transform="translate(-374.77 -497.7)"/></svg>}
                <h1 className={classes.landingTitle}>Pronađimo vam posao!</h1>
                <p className={classes.landingSubTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <Button onClick={openForm} variant="contained" className={classes.landingBtn}>
                    {matches
                    ?
                    <span>Registriraj se</span>
                    :
                    <ArrowIcon /> }
                </Button>
                <a className={classes.landingLink} onClick={toggleInstructions}>Kako Firmus funkcionira?</a>
            </div>
        </div>
    )
} 
 
