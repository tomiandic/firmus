import React from "react";
import styles from "./style.js";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import MailIcon from "@material-ui/icons/Mail";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { useHistory } from "react-router-dom";
//recoil
import { useRecoilValue } from "recoil";
import {
  infoState,
  credentialsState,
  availabilityState,
  languageState,
  jobsState,
} from "../../../atoms/profileState";
const useStyles = makeStyles(styles);

export default function Success(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const basicInfo = useRecoilValue(infoState);
  const credentialsInfo = useRecoilValue(credentialsState);
  const availability = useRecoilValue(availabilityState);
  const languages = useRecoilValue(languageState);
  const jobs = useRecoilValue(jobsState);
  console.log(jobs);

  const history = useHistory();
  !basicInfo.fullName && history.push("/");
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
        <div className="userProfile">
          <h6 style={{ marginBottom: -8 }}>Ime i prezime:</h6>
          <p>{basicInfo.fullName}</p>
          <h6 style={{ marginBottom: -8 }}>Grad:</h6>

          <p>{basicInfo.city}</p>
          <p>{/*  Datum rođenja:<span>{basicInfo.date}</span> */}</p>
          <h6 style={{ marginBottom: -8 }}>Spol:</h6>

          <p>{basicInfo.genre === "F" ? "Žensko" : "Muško"}</p>
          <h6 style={{ marginBottom: -8 }}>Email adresa:</h6>
          <p>{credentialsInfo.mail}</p>
          <h6 style={{ marginBottom: -8 }}>Dostupnost za rad:</h6>
          <p>
            {Object.keys(availability)
              .filter((day) => availability[day] && day)
              .join(", ")}
          </p>
          <h6 style={{ marginBottom: -8 }}>Jezici:</h6>
          <p>
            {Object.keys(languages)
              .filter((language) => languages[language] && language)
              .join(", ")}
          </p>
          <h6 style={{ marginBottom: -8 }}>Poslovi:</h6>
          <p>
            {Object.keys(jobs)
              .filter((job) => jobs[job] && job)
              .join(", ")}
          </p>
        </div>
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
