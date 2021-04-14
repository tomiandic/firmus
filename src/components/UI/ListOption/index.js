import React from 'react';
import {makeStyles, ListItem, Checkbox, Radio} from "@material-ui/core";
import styles from "./style.js";

const useStyles = makeStyles(styles);

function ListOption(props){

    const classes = useStyles();
    const {optionName, optionChecked, handleCheckbox, type, style} = props;
    return(
        <ListItem value="" key={optionName} style={{...style}} className={optionChecked?classes.listItemActive : classes.listItem}>
            <label className={classes.listItemLabel}>{optionName}
            {type==="radio"?
            <Radio
                checked={optionChecked}
                onChange={(e)=>handleCheckbox(e)}
                name={optionName}
                color="primary"
                className={classes.checkbox}
            />
            :
            <Checkbox 
                name={optionName} 
                checked={optionChecked} 
                onChange={(e)=>handleCheckbox(e)} 
                color="primary" className={classes.checkbox} 
            />
            }
            </label>
        </ListItem> 
    )
}


   export default ListOption;  