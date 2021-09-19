import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

//custom components
import JobStep from "../FormSteps/JobStep";
import LanguageStep from "../FormSteps/LanguageStep";
import AvailabilityStep from "../FormSteps/AvailabilityStep";
import BasicInfoStep from "../FormSteps/BasicInfoStep";
import PhoneNumberStep from "../FormSteps/PhoneNumberStep";
import VerificationCodeStep from "../FormSteps/VerificationCodeStep";
import CredentialsStep from "../FormSteps/CredentialsStep";
import InfoList from "../InfoList";
import Loader from "../../UI/Loader";
//MUI
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  IconButton,
  Fade,
  LinearProgress,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { ArrowForward, ArrowBack } from "@material-ui/icons";
//misc
import styles from "./style.js";
import data from "../../../data/data.json";

const useStyles = makeStyles(styles);

export default function FormContainer() {
  const [selectCount, setSelectCount] = useState(0);
  const [showLoader, setShowLoader] = useState(true);
  const [showList, setShowList] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [jobs, setJobs] = useState({});
  const [stepInfo, setStepInfo] = useState(null);
  const [index, setIndex] = useState(0);

  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  useEffect(() => {
    setJobs(data.allJobs);
    setStepInfo(data.steps[index], setShowLoader(false));
  }, []);

  const loadNextStep = () => {
    if (index < 6) {
      setIndex(index + 1);
      setStepInfo(data.steps[index + 1]);
      return;
    }
    if (index === 4) {
      //posalji broj
      return;
    }
    history.push("/success");
  };

  const loadPreviousStep = () => {
    if (index === 0) {
      history.push("/");
      return;
    }
    setIndex(index - 1);
    setStepInfo(data.steps[index - 1]);
  };

  const renderFormStep = () => {
    return (
      <>
        <Fade
          mountOnEnter
          unmountOnExit
          in={index === 0}
          timeout={{ enter: 800, exit: 0 }}
        >
          <JobStep
            setSelectCount={setSelectCount}
            setButtonVisible={setButtonVisible}
            jobs={jobs}
          />
        </Fade>
        <Fade
          mountOnEnter
          unmountOnExit
          in={index === 1}
          timeout={{ enter: 800, exit: 0 }}
        >
          <LanguageStep
            setSelectCount={setSelectCount}
            setButtonVisible={setButtonVisible}
          />
        </Fade>
        <Fade
          mountOnEnter
          unmountOnExit
          in={index === 2}
          timeout={{ enter: 800, exit: 0 }}
        >
          <AvailabilityStep setButtonVisible={setButtonVisible} />
        </Fade>
        <Fade
          mountOnEnter
          unmountOnExit
          in={index === 3}
          timeout={{ enter: 800, exit: 0 }}
        >
          <BasicInfoStep setButtonVisible={setButtonVisible} />
        </Fade>
        <Fade
          mountOnEnter
          unmountOnExit
          in={index === 4}
          timeout={{ enter: 800, exit: 0 }}
        >
          <CredentialsStep setButtonVisible={setButtonVisible} />
        </Fade>
        <Fade
          mountOnEnter
          unmountOnExit
          in={index === 5}
          setShowLoader={setShowLoader}
          timeout={{ enter: 800, exit: 0 }}
        >
          <PhoneNumberStep setButtonVisible={setButtonVisible} />
        </Fade>
        <Fade
          mountOnEnter
          unmountOnExit
          in={index === 6}
          loadNextStep={loadNextStep}
          setShowLoader={setShowLoader}
          timeout={{ enter: 800, exit: 0 }}
        >
          <VerificationCodeStep setButtonVisible={setButtonVisible} />
        </Fade>
      </>
    );
  };

  return showLoader ? (
    <Loader />
  ) : (
    <div className={classes.formOuterContainer}>
      <div className={classes.loginDiv}>
        <svg className={classes.landingLogo} viewBox="0 0 331.82 85.6">
          <path
            d="M419.55,497.7A44.78,44.78,0,0,0,400.44,583a3.24,3.24,0,0,0,4.65-2.94V542.48a14.46,14.46,0,1,1,28.92,0,3.26,3.26,0,0,0,6.51,0,21,21,0,1,0-41.94,0v32a38.26,38.26,0,1,1,37.29,2.61,3.26,3.26,0,0,0,2.78,5.89,44.78,44.78,0,0,0-19.1-85.29Z"
            transform="translate(-374.77 -497.7)"
          />{" "}
          <path
            d="M419.55,546.11a5.25,5.25,0,1,0,5.25,5.24A5.25,5.25,0,0,0,419.55,546.11Z"
            transform="translate(-374.77 -497.7)"
          />{" "}
          <polygon points="116.51 68.29 123.56 68.29 123.56 47.14 151.76 47.14 151.76 40.09 123.56 40.09 123.56 25.99 158.81 25.99 158.81 18.94 116.51 18.94 116.51 68.29" />{" "}
          <rect x="162.3" y="33.04" width="7.05" height="35.25" />{" "}
          <path
            d="M551.88,544.84V566h7V544.84q0-7.05,7.05-7.05h7v-7h-7Q551.88,530.74,551.88,544.84Z"
            transform="translate(-374.77 -497.7)"
          />{" "}
          <path
            d="M612.93,530.74q-7,0-10.58,3.52-3.52-3.53-10.57-3.52-14.1,0-14.1,14.1V566h7.05V544.84q0-7.05,7-7.05t7.05,7.05V566h7V544.84q0-7.05,7-7.05t7.05,7.05V566h7V544.84Q627,530.74,612.93,530.74Z"
            transform="translate(-374.77 -497.7)"
          />{" "}
          <path
            d="M660.87,551.89q0,7.05-7,7.05h-7.05q-7,0-7-7.05V530.74h-7.05v21.15q0,14.1,14.1,14.09h7.05q14.1,0,14.1-14.09V530.74h-7Z"
            transform="translate(-374.77 -497.7)"
          />{" "}
          <path
            d="M689,544.84q-10.58-1.07-10.58-4.06c0-2,2.35-3,7.05-3h19.39v-7H685.44q-14.1,0-14.1,10T689,551.89q10.57,1.05,10.57,4.05t-7,3H673.11v7h19.38q14.1,0,14.1-10T689,544.84Z"
            transform="translate(-374.77 -497.7)"
          />{" "}
          <path
            d="M540.6,516.06a4.11,4.11,0,1,0,4.11,4.1A4.1,4.1,0,0,0,540.6,516.06Z"
            transform="translate(-374.77 -497.7)"
          />{" "}
        </svg>
        <h1 className={classes.landingTitle}>Lorem ipsum dolor sit amet!</h1>
        <p className={classes.landingSubTitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <div className={classes.formContainer}>
        {showLoader && <Loader />}
        {/*         {index === 0 ? (
          <InfoList
            setShowList={setShowList}
            in={showList}
            title="Odabrani poslovi"
            list={Object.keys(selectedJobs).filter(
              (item) => selectedJobs[item]
            )}
          />
        ) : (
          <InfoList
            setShowList={setShowList}
            in={showList}
            title="Odabrani jezici"
            list={Object.keys(selectedLanguages).filter(
              (item) => selectedLanguages[item]
            )}
          />
        )} */}
        <LinearProgress
          variant="determinate"
          value={stepInfo.progressPercentage}
        />
        <div className={classes.formTopSection}>
          <IconButton
            color="primary"
            onClick={() => loadPreviousStep()}
            className={classes.backButton}
          >
            <ArrowBack color="primary" />
          </IconButton>
        </div>
        <div className={classes.formContent}>
          <div className={classes.formContentInner}>
            <h2 className={classes.formTitle}>{stepInfo.formTitle}</h2>
            <div className={classes.formWrap}>{renderFormStep()}</div>
            <Fade timeout={300} in={buttonVisible}>
              <div className={classes.formActionsContainer}>
                {selectCount > 0 && !matches && (index === 0 || index === 1) && (
                  <div
                    onClick={() => setShowList(true)}
                    className={classes.selectedCount}
                  >
                    {selectCount}
                  </div>
                )}
                <Button
                  color="primary"
                  onClick={() => loadNextStep()}
                  className={classes.formButton}
                  variant="contained"
                >
                  {stepInfo.buttonTitle}
                  <ArrowForward className={classes.formButtonIcon} />
                </Button>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
