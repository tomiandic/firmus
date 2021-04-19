import React from 'react';
import styles from "./style.js";
import 'swiper/swiper-bundle.css';
import {makeStyles, IconButton} from "@material-ui/core";
import slide1 from "../../../assets/slide1.svg";
import CloseIcon from '@material-ui/icons/Close';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


SwiperCore.use([Navigation, Pagination]);
const useStyles = makeStyles(styles);


export default function Instructions(props) {

    const classes = useStyles();
    return( 
            <div style={{...props.style}} className={classes.instructionsContainer}>
                <IconButton onClick={props.toggleInstructions} className={classes.closeButton}>
                    <CloseIcon fontSize="large" />
                </IconButton>
                <div className={classes.swiperInner}>
                <ArrowForwardIcon className={classes.arrowForward} id="swipeRight" />
                <ArrowBackIcon className={classes.arrowBack} id="swipeLeft" />
                <Swiper 
                    pagination={{clickable:true}} 
                    navigation={{prevEl: '#swipeLeft', nextEl: '#swipeRight'}}>

                        <SwiperSlide className={classes.slide}>
                            <img className={classes.slideImage} src={slide1} />
                            <div className={classes.slideContent}>
                                <h2 className={classes.instTitle}>Korak 1</h2>
                                <p className={classes.instText}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={classes.slide}>
                            <img className={classes.slideImage} src={slide1} />
                            <div className={classes.slideContent}>
                                <h2 className={classes.instTitle}>Korak 2</h2>
                                <p className={classes.instText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={classes.slide}>
                        <img className={classes.slideImage} src={slide1} />
                        <div className={classes.slideContent}>
                            <h2 className={classes.instTitle}>Korak 3</h2>
                            <p className={classes.instText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                        </div>
                        </SwiperSlide>
                </Swiper>
                </div>

            </div>)
}