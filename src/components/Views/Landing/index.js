import React, { useEffect } from "react";
import styles from "./style.js";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Button, useMediaQuery, Fade } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ArrowIcon from "@material-ui/icons/ArrowForward";
import landingImg from "../../../assets/landing1.jpg";
import landingLogo from "../../../assets/landingLogo.svg";
import Instructions from "../Instructions";
import LogoLoader from "../../UI/LogoLoader";
const useStyles = makeStyles(styles);

export default function Landing() {
  const [opened, setOpened] = React.useState(false);
  const [loaderVisible, setLoaderVisible] = React.useState(true);
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const landingImage = new Image();

  useEffect(() => {
    setTimeout(preloadImage, 2000);
  }, []);

  const preloadImage = () => {
    landingImage.src = landingImg;
    landingImage.onload = () => {
      setLoaderVisible(false);
    };
  };

  const toggleInstructions = () => {
    setOpened((prev) => !prev);
  };

  const openForm = () => {
    history.push("/registracija");
  };

  return loaderVisible ? (
    <Fade in={loaderVisible} unmountOnExit timeout={400}>
      <LogoLoader />
    </Fade>
  ) : (
    <div className={classes.landingContainer}>
      <Fade mountOnEnter unmountOnExit in={opened} timeout={700}>
        <Instructions toggleInstructions={toggleInstructions} />
      </Fade>
      {!matches && (
        <svg
          className={classes.landingLogo}
          fill="#fff"
          viewBox="0 0 743 710.19"
        >
          <path
            d="M538.5,183.5C333.65,183.5,167,350.16,167,555c0,143,83.6,274.94,213,336.07a27,27,0,0,0,38.58-24.42V555a120,120,0,0,1,239.9,0,27,27,0,0,0,54,0c0-95.93-78.05-174-174-174s-174,78.05-174,174V820.58C276.16,762.43,221,662.38,221,555c0-175.06,142.41-317.47,317.47-317.47S856,379.94,856,555c0,122.26-71.47,235-182.08,287.25A27,27,0,1,0,697,891.1C826.38,830,910,698.06,910,555,910,350.16,743.35,183.5,538.5,183.5Z"
            transform="translate(-167 -183.5)"
          />
          <path
            class="cls-1"
            d="M538.5,585.12A43.52,43.52,0,1,0,582,628.64,43.57,43.57,0,0,0,538.5,585.12Z"
            transform="translate(-167 -183.5)"
          />
        </svg>
      )}
      <img className={classes.stretchedImg} src={landingImg} />
      <div className={classes.gradientDiv} />
      <div className={classes.loginDiv}>
        {matches && <img src={landingLogo} className={classes.landingLogo} />}

        <h1 className={classes.landingTitle}>Pronađimo vam posao!</h1>
        <p className={classes.landingSubTitle}>
          Pridruži se Firmusu i u par jednostavnih koraka čekaju te brzi poslovi
          u tvom džepu.
        </p>
        <Button
          onClick={openForm}
          color="primary"
          variant="contained"
          className={classes.landingBtn}
        >
          {matches ? <span>Registriraj se</span> : <ArrowIcon />}
        </Button>
        <a className={classes.landingLink} onClick={toggleInstructions}>
          Kako Firmus funkcionira?
        </a>
        {matches && (
          <>
            <br />
            <br />
            {/*  <p className={classes.landingSecondaryText}>
            Već si naš korisnik? <a>Prijavi Se</a>
          </p> */}
          </>
        )}
      </div>
      {/*  <Button variant="contained" className={classes.landingLogin}>Prijavi Se</Button> */}
    </div>
  );
}
