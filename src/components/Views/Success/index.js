import React from "react";
import styles from "./style.js";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Button,
  useMediaQuery,
  Fade,
  Stepper,
  Step,
  StepLabel,
  StepContent,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import MailIcon from "@material-ui/icons/Mail";
import WhatshotIcon from "@material-ui/icons/Whatshot";

const useStyles = makeStyles(styles);

export default function Success() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div className={classes.landingContainer}>
      <div className={classes.loginDiv}>
        <div className={classes.successCircle}>
          <div class="svg-container">
            <svg
              className={classes.ftGreenTick}
              height="100"
              width="100"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <circle
                className={classes.circle}
                fill="#31f352"
                cx="24"
                cy="24"
                r="22"
              />
              <path
                className={classes.tick}
                fill="none"
                stroke="#FFF"
                strokeWidth="3"
                strokeMiterlimit="10"
                d="M14 27l5.917 4.917L34 17"
              />
            </svg>
          </div>
        </div>
        <h1>Uspješna prijava!</h1>
        <p style={{ padding: 5, opacity: 0.8 }}>
          {" "}
          Nakon registracije, možeš se opustiti. Firmus će ti pomoći pronaći
          idealan posao. Analizirat ćemo podatke o tvojim interesima, vještinama
          i dostupnosti, a zatim te matchati s poslodavcem koji upravo tebi
          najbolje odgovara.
        </p>
        {matches && (
          <div className={classes.socialMediaContainer}>
            <a href="">
              <FacebookIcon />
            </a>
            <a href="">
              <WhatsAppIcon />
            </a>
            <a href="">
              <MailIcon />
            </a>
            <a href="">
              <WhatshotIcon />
            </a>
          </div>
        )}
      </div>
      {!matches && (
        <div className={classes.socialMediaContainer}>
          <p>Preporuči Firmus prijateljima!</p>
          <a href="">
            <FacebookIcon />
          </a>
          <a href="">
            <WhatsAppIcon />
          </a>
          <a href="">
            <MailIcon />
          </a>
          <a href="">
            <WhatshotIcon />
          </a>
        </div>
      )}
    </div>
  );
}
