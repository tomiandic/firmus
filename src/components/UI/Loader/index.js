import React from 'react';
import {CircularProgress, makeStyles} from "@material-ui/core";
import styles from "./style.js";

const useStyles = makeStyles(styles);

function Loader(props){

    const classes = useStyles();
    return(
        <div className={classes.loader}>
            <CircularProgress />
        </div>
    )
}


   export default Loader;  