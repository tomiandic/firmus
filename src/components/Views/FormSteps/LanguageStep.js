import React, {useState} from 'react';
import ListOption from '../../UI/ListOption';
import {List as VirtualList} from 'react-virtualized';
import {makeStyles, IconButton, Modal, Backdrop, Fade, Paper, Button, TextField, CircularProgress} from "@material-ui/core";
import styles from "../FormContainer/style.js";
import AddIcon from '@material-ui/icons/Add';
import data from "../../../data/data.json";
import noResultsIcon from "./../../../assets/NoResultsIcon.svg";

const useStyles = makeStyles(styles);

export default function LanguageStep(props){

    const [open, setOpen] = useState(false);
    const [filterValue, setFilterValue] = useState(""); 

    const images = require.context('../../../assets', true);
    const loadImage = imageName => (images(`./${imageName}`).default);

    const classes = useStyles();

    const selectLanguage = (e) => {
        let prevState = {...languages};
        prevState[e.target.name] = e.target.checked;
        setLanguageSelected(prevState); 
    }

    const filterLanguages = (language) => {
        return language.toLowerCase().includes(filterValue);
    }

    const {setLanguageSelected, languages} = props;
    function rowRenderer({
        index,
        isScrolling,
        isVisible,
        key,
        style
    }){
        const filteredLanguages = Object.keys(languages).filter(filterLanguages);
        const language = filteredLanguages[index];
        return (
            <ListOption optionName={language} optionChecked={languages[language]} handleCheckbox={selectLanguage} key={key} style={{...style, width: "100%"}} />
        )
    }

    let rowCount = Object.keys(languages).filter(filterLanguages).length;

    return(
        <>
        {Object.keys(languages).length!==0?
        <div style={{...props.style}} className={classes.pickerContainer}>
            {data.mainLanguages.map((language) => 
                <div key={language.name} className={languages[language.name]?`${classes.buttonPicker} ${classes.buttonPickerActive}`:classes.buttonPicker}>
                    <input className={classes.buttonPickerInput} id={language.name} name={language.name} value={language.name} type="checkbox" onChange={(e) => selectLanguage(e)} checked={languages[language.name]} />
                    <svg className={classes.buttonPickerCheck} viewBox="0 0 48.89 48.89"><circle cx="24.45" cy="24.45" r="24.45" fill="#d9e4f4"></circle><polyline points="10.26 25.54 21.14 35.45 38.63 13.44" fill="none" stroke="#1479ec" strokeMiterlimit="10" strokeWidth="7"></polyline></svg>
                    <label htmlFor={language.name} className={classes.buttonPickerLabel}>
                        <img className={classes.buttonPickerIcon} src={loadImage(language.iconFilename)} />
                        <span className={classes.buttonPickerTitle}>{language.name}</span>
                    </label>
                </div>)}
            <IconButton onClick={() => setOpen(true)}>
                <AddIcon color="primary" fontSize="large" />
            </IconButton>
        </div>
        :
        <CircularProgress />}
        <Modal
            open={open}
            closeAfterTransition
            BackdropComponent={Backdrop}
            onClose={() => setOpen(false)}>
            <Fade in={open}>
                <Paper className={classes.modalContainer}>
                    <div className={classes.modalTopActions}>
                        <TextField 
                            variant="outlined"  
                            value={filterValue}
                            className={classes.modalInput}
                            onChange={e=>setFilterValue(e.target.value.toLowerCase())}
                            placeholder="&#x1F50D; Pretraži jezik.."
                        />
                    </div>

                    <div className={classes.modalContent}>
                    {
                    rowCount>0?
                     <VirtualList
                        width={1}
                        height={1000}
                        rowCount={rowCount}
                        rowHeight={65}
                        rowRenderer={rowRenderer}
                        containerStyle={{
                              width: "100%",
                              maxWidth: "100%"
                        }}
                        style={{
                            width: "100%",
                            outline:"none"
                            }}
                    />: <div className={classes.modalFeedback}>
                        <img className={classes.illustration} src={noResultsIcon} />
                        <p className={classes.modalFeedbackTitle}>Nema rezultata</p>
                        </div>
                    }
                    </div>
                    <div className={classes.modalActionContainer}>
                        <Button variant="contained" onClick={() => setOpen(false)} className={classes.formButton}>Spremi</Button>
                    </div>
                </Paper>
            </Fade>
        </Modal>
        </>
    )
}