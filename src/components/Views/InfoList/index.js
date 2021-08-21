import React from 'react';
import styles from "./style.js";
import {makeStyles, List, ListItem, Backdrop, Slide, IconButton} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(styles);

export default function InfoList(props) {
  const classes = useStyles();
  return (
   <Backdrop style={{zIndex: 10}} open={props.in}>
    <Slide in={props.in} direction="up" timeout={500}>
    <div className={classes.infoListContainer}>
        <div className={classes.infoContainerTitleHolder}>
            <h3 className={classes.infoContainerTitle}>{props.title}</h3>
            <IconButton onClick={() => props.setShowList(false)} style={{position: 'absolute', right: 10, top: 10}}><CloseIcon /></IconButton>
        </div>
        <List>
        {props.list&&props.list.map(item => 
            <ListItem key={item} className={classes.infoItem}>
                {item}
            </ListItem>
        )}
        </List>
    </div>
    </Slide>
    </Backdrop>
   
  );
}
