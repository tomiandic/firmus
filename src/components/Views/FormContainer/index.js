import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import JobStep from "../FormSteps/JobStep";
import LanguageStep from "../FormSteps/LanguageStep";
import AvailabilityStep from "../FormSteps/AvailabilityStep";
import BasicInfoStep from "../FormSteps/BasicInfoStep";
import PhoneNumberStep from "../FormSteps/PhoneNumberStep";
import VerificationCodeStep from "../FormSteps/VerificationCodeStep";
import Loader from "../../UI/Loader";
import {makeStyles} from "@material-ui/core/styles";
import {Button, IconButton, Chip, Fade, LinearProgress } from '@material-ui/core';
import {ArrowForward, ArrowBack } from '@material-ui/icons';
import styles from "./style.js";
import data from "../../../data/data.json";

const useStyles = makeStyles(styles);

export default function FormContainer({index}){

    const [showLoader, setShowLoader] = useState(false);
    const [buttonVisible, setButtonVisible] = useState(false);
    const [jobs, setJobs] = useState({});
    const [selectedJobs, setJobSelected] = useState({});
    const [stepInfo, setStepInfo] = useState(data.steps[index]);
    const [selectedLanguages, setLanguageSelected] = useState([]);
    const [availability, setDaySelected] = useState(data.days);
    const [phoneNumber, setPhoneNumber] = useState("+385 ");
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

    //validations by page

    useEffect(()=>{
        index===0&&setButtonVisible(Object.values(selectedJobs).includes(true));
    },[selectedJobs, index])

    useEffect(()=>{
        index===2&&setButtonVisible(Object.values(availability).includes(true));
    },[availability, index])

    useEffect(()=>{
        index===3&&setButtonVisible(checkInfoValidity);
    },[info, index])

    useEffect(()=>{
        index===4&&setButtonVisible(phoneNumber.length>12);
    },[phoneNumber, index])

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
            return;
        }
        if(index === 4){
            //posalji broj
            return;
        }
        history.push("/success");
    }

    const loadPreviousStep = () => {
        if(index===0){
            history.push("/")
            return;
        }
        history.push(`/form/${index-1}`);
        setStepInfo(data.steps[index-1]);
    }

    const checkInfoValidity = () => {
        return !Object.values(info).includes("");
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
                        languages={selectedLanguages}
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
                setShowLoader={setShowLoader}
                timeout={{enter: 800, exit:0}}>
                    <PhoneNumberStep
                        phoneNumber={phoneNumber}
                        setPhoneNumber={setPhoneNumber} />
            </Fade> 
            <Fade
                mountOnEnter 
                unmountOnExit 
                in={index===5} 
                loadNextStep={loadNextStep}
                setShowLoader={setShowLoader}
                timeout={{enter: 800, exit:0}}>
                    <VerificationCodeStep />
            </Fade> 
        </>
        )
    }
    
    
    return(
        <div className={classes.formContainer}>
            {showLoader&&<Loader />}
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
                    <div className={classes.formWrap}>
                        {renderFormStep()}
                    </div>
                    <Fade timeout={300} in={buttonVisible}>
                        <div className={classes.formActionsContainer}>
                            <Button onClick={() => loadNextStep()} className={classes.formButton} variant="contained">{stepInfo.buttonTitle}<ArrowForward className={classes.formButtonIcon} /></Button>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>      
    ) 
}