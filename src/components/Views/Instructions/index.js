import React from "react";
import styles from "./style.js";
import "swiper/swiper-bundle.css";
import { makeStyles, IconButton } from "@material-ui/core";
import slide1 from "../../../assets/step1.svg";
import slide2 from "../../../assets/step2.svg";
import slide3 from "../../../assets/step3.svg";
import CloseIcon from "@material-ui/icons/Close";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

SwiperCore.use([Navigation, Pagination]);
const useStyles = makeStyles(styles);

export default function Instructions(props) {
  const classes = useStyles();
  return (
    <div style={{ ...props.style }} className={classes.instructionsContainer}>
      <IconButton onClick={props.toggleInstructions} className={classes.closeButton}>
        <CloseIcon fontSize="large" />
      </IconButton>
      <div className={classes.swiperInner}>
        <ArrowForwardIcon className={classes.arrowForward} id="swipeRight" />
        <ArrowBackIcon className={classes.arrowBack} id="swipeLeft" />
        <Swiper pagination={{ clickable: true }} navigation={{ prevEl: "#swipeLeft", nextEl: "#swipeRight" }}>
          <SwiperSlide className={classes.slide}>
            <img className={classes.slideImage} src={slide1} />
            <div className={classes.slideContent}>
              <h2 className={classes.instTitle}>
                Korak 1 - <span className={classes.blueText}>Registracija</span>
              </h2>
              <p className={classes.instText}>
                Firmus je sustav koji te na brz i jednostavan način povezuje s poslodavcima na osnovu tvojih interesa i
                vještina koje posjeduješ. Kako bismo te mogli povezati s odgovarajućim poslodavcem, trebat će nam neke
                informacije o tebi koje ćeš podijeliti prilikom registracije u sustav.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.slide}>
            <img className={classes.slideImage} src={slide2} />
            <div className={classes.slideContent}>
              <h2 className={classes.instTitle}>
                Korak 2 - <span className={classes.blueText}>Matching</span>{" "}
              </h2>
              <p className={classes.instText}>
                Nakon registracije, možeš se opustiti. Firmus će ti pomoći pronaći idealan posao. Analizirat ćemo
                podatke o tvojim interesima, vještinama i dostupnosti, a zatim te matchati s poslodavcem koji upravo
                tebi najbolje odgovara
              </p> 
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.slide}>
            <img className={classes.slideImage} src={slide3} />
            <div className={classes.slideContent}>
              <h2 className={classes.instTitle}>
                Korak 3 - <span className={classes.blueText}>Brzi poslovi u tvom džepu</span>
              </h2>
              <p className={classes.instText}>
                Čim pronađemo match između tebe i adekvatnog poslodavca koji nudi posao usklađen s tvojim interesima,
                javit ćemo ti odlične vijesti, podijeliti detalje i povezati te s poslodavcem radi obavljanja traženog
                posla. Uz Firmus, čekaju te brzi poslovi u tvom džepu.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
