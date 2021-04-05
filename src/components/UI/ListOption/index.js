import React, {memo} from 'react';
import {makeStyles, ListItem, Checkbox, Radio} from "@material-ui/core";
import styles from "./style.js";

const useStyles = makeStyles(styles);

function ListOption(props){

    const classes = useStyles();
    const {optionName, optionChecked, handleCheckbox, type, style} = props;
    return(
        <ListItem key={optionName} style={{...style}} className={optionChecked?classes.listItemActive : classes.listItem}>
            {optionName}
            {type==="radio"?
            <Radio
                checked={optionChecked}
                onChange={(e)=>{handleCheckbox(e)}}
                name={optionName}
                color="primary"
                className={classes.checkbox}
            />
            :
            <Checkbox 
                name={optionName} 
                checked={optionChecked} 
                onChange={(e)=>{handleCheckbox(e)}} 
                color="primary" className={classes.checkbox} 
            />

            }
        </ListItem> 
    )
}


   export default ListOption;  