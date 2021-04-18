import React from 'react';
import {makeStyles} from "@material-ui/core";
import styles from "./style.js";

const useStyles = makeStyles(styles);

export default function LogoLoader(props){

    const classes = useStyles();
    return(
        <div style={{...props.style}} className={classes.loader}>
            <svg viewBox="0 0 88.16 85.98">
            <path id="path" className={classes.circle} d="M73.53,58a17.53,17.53,0,0,0-35.06,0V95.12h0a41.07,41.07,0,1,1,35.05,0" transform="translate(-11.92 -13.87)"/>
            <circle className={classes.dot} cx="44.08" cy="52.86" r="3.58"/></svg>
        </div>
    )
}
