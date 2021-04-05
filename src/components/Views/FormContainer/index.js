import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import JobStep from "../FormSteps/JobStep";
import LanguageStep from "../FormSteps/LanguageStep";
import AvailabilityStep from "../FormSteps/AvailabilityStep";
import BasicInfoStep from "../FormSteps/BasicInfoStep";
import NumberConfirmationStep from "../FormSteps/NumberConfirmationStep";
import VerificationCodeStep from "../FormSteps/VerificationCodeStep";
import {makeStyles} from "@material-ui/core/styles";
import {Button, IconButton, Chip, Fade, LinearProgress } from '@material-ui/core';
import {ArrowForward, ArrowBack } from '@material-ui/icons';
import styles from "./style.js";
import data from "../../../data/data.json";

const useStyles = makeStyles(styles);

export default function FormContainer({index}){


    const [jobs, setJobs] = useState({});
    const [selectedJobs, setJobSelected] = useState({});
    const [stepInfo, setStepInfo] = useState(data.steps[index]);
    const [languages, setLanguageSelected] = useState([]);
    const [availability, setDaySelected] = useState(data.days);
    const [info, setInfo] = useState({
        fullName: "",
        city: "",
        date: new Date('1999-01-01'),
        mail: "",
        genre: "F",
        gdpr: false
    });

    const classes = useStyles();
    const history = useHistory();

    useEffect(()=>{
        setUpData();
    },[])

    const setUpData = () => {
        let selectedJobs={}, selectedLanguages={};
        Object.keys(data.allJobs).forEach(jobCategory=>data.allJobs[jobCategory].forEach(job=>selectedJobs[job.name]=false));
        data.additionalLanguages.forEach(language=>selectedLanguages[language.name]=false);
        setJobs(data.allJobs);
        setJobSelected(selectedJobs);
        setLanguageSelected(selectedLanguages);
    }

    const loadNextStep = () => {
        if(index<5){
            history.push(`/form/${index+1}`);
            setStepInfo(data.steps[index+1]);
        }else{
            history.push("/success");
        }

    }

    const loadPreviousStep = () => {
        if(index===0){
            history.push("/")
        }else{
            history.push(`/form/${index-1}`);
            setStepInfo(data.steps[index-1]);
        }
    }


    /* ---Languages Step Functions--- */

    //show language chip if not main language       
    const showChip = (language) => {
        if(languages[language]){
            return !data.mainLanguages.some(item => (item.name===language));
        };
        return false;
    }
 
    const renderFormStep = () => {
        return(
        <>
            <Fade 
                mountOnEnter 
                unmountOnExit 
                in={index===0} 
                timeout={{enter: 800, exit:0}}>
                    <JobStep 
                        jobs={jobs}
                        selectedJobs={selectedJobs}
                        setJobSelected={setJobSelected} 
                    />
            </Fade>
            <Fade 
                mountOnEnter 
                unmountOnExit
                in={index===1} 
                timeout={{enter: 800, exit:0}}>
                    <LanguageStep
                        languages={languages}
                        setLanguageSelected={setLanguageSelected} 
                    />
            </Fade>
            <Fade 
                mountOnEnter 
                unmountOnExit
                in={index===2} 
                timeout={{enter: 800, exit:0}}>
                    <AvailabilityStep
                        days={availability}
                        setDaySelected={setDaySelected}
                    />
            </Fade>
            <Fade
                mountOnEnter 
                unmountOnExit 
                in={index===3} 
                timeout={{enter: 800, exit:0}}>
                    <BasicInfoStep
                        info={info}
                        setInfo={setInfo}
                    />
            </Fade>
            <Fade
                mountOnEnter 
                unmountOnExit 
                in={index===4} 
                timeout={{enter: 800, exit:0}}>
                    <NumberConfirmationStep />
            </Fade> 
            <Fade
                mountOnEnter 
                unmountOnExit 
                in={index===5} 
                timeout={{enter: 800, exit:0}}>
                    <VerificationCodeStep />
            </Fade> 
        </>
        )
    }
    
    return(
        <div className={classes.formContainer}>
            <LinearProgress variant="determinate" value={stepInfo.progressPercentage} />
            <div className={classes.formTopSection}>
                <div className={classes.topDecoration}>
                    <svg width="251.931" height="142.664" viewBox="0 0 251.931 142.664"> <rect width="63.351" height="63.351" rx="15" transform="translate(0 44.868) rotate(-45)" fill="#2281ee" opacity="0.3"/> <rect id="Rectangle_127" data-name="Rectangle 127" width="63.351" height="63.351" rx="15" transform="translate(108.339 44.796) rotate(-45)" fill="#2281ee" opacity="0.3"/> <rect id="Rectangle_129" data-name="Rectangle 129" width="63.351" height="63.351" rx="15" transform="translate(54 97.868) rotate(-45)" fill="#2281ee" opacity="0.1"/> <rect id="Rectangle_130" data-name="Rectangle 130" width="63.351" height="63.351" rx="15" transform="translate(162.339 97.868) rotate(-45)" fill="#2281ee" opacity="0.1"/> </svg>
                </div>
                <IconButton onClick={() => loadPreviousStep()} className={classes.backButton}>
                    <ArrowBack color="primary" />
                </IconButton>
            </div>
            <div className={classes.formContent}> 
                <div className={classes.formContentInner}>
                    <h2 className={classes.formTitle}>{stepInfo.formTitle}</h2>
                    <div className={classes.formChips}>
                        {index===0?
                            Object.keys(selectedJobs).map(job=>(
                                selectedJobs[job]?<Chip onDelete={() => setJobSelected(prevState => ({...prevState, [job]:!prevState[job]}))} color="primary" style={{fontSize: 11, marginRight:6}} size="small" label={job} />:null
                            ))
                        :index===1?
                            Object.keys(languages).map(language=>(
                                showChip(language)?<Chip onDelete={() => setLanguageSelected(prevState => ({...prevState, [language]:!prevState[language]}))} color="primary" style={{fontSize: 11, marginRight:6}} size="small" label={language} />:null
                            ))
                        :null}
                    </div>
                    <div className={classes.formWrap}>
                        {renderFormStep()}
                    </div>
                    <div className={classes.formActionsContainer}>
                        <Button onClick={() => loadNextStep()} className={classes.formButton} variant="contained">Nastavi<ArrowForward className={classes.formButtonIcon} /></Button>
                    </div>
                </div>
            </div>
        </div>      
    ) 
}