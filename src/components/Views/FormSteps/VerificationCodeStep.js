import React, { useState, useEffect, useRef } from "react";
import { makeStyles, InputLabel } from "@material-ui/core";
import codeIllustration from "../../../assets/CodeIllustration.svg";
import styles from "../FormContainer/style.js";

const useStyles = makeStyles(styles);

export default function VerificationCodeStep(props) {
  const [code, setCode] = useState(["", "", "", ""]);
  const itemEls = useRef(new Array());

  useEffect(() => {
    props.setButtonVisible(false);
    itemEls.current[0].focus();
  }, []);

  const handleInputChange = async (e) => {
    const { value, name } = e.target;
    if (value.length > 1) return;
    let currentIndex = parseInt(name);
    await handleFocus(e);
    let tempCode = [...code];
    tempCode[currentIndex] = value;
    setCode(tempCode);
    if (currentIndex < 3) {
      itemEls.current[currentIndex + 1].focus();
      itemEls.current[currentIndex + 1].value = "";
    } else {
      e.target.blur();
      props.setShowLoader(true);
      //mock upload
      setTimeout(() => {
        props.setShowLoader(false);
        props.loadNextStep();
      }, 3000);
      //POŠALJI KOD--------------------
    }
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    let currentIndex = parseInt(name);
    let tempCode = [...code];
    tempCode[currentIndex] = "";
    setCode(tempCode);
  };

  const classes = useStyles();

  return (
    <div {...props} className={classes.basicInfoContainer}>
      <div style={{ minWidth: "100%" }} className={classes.inputContainer}>
        <div className={classes.modalLocationFeedback}>
          <img className={classes.illustration} src={codeIllustration} />
          <InputLabel className={classes.inputLabelCenter}>
            VERIFIKACIJSKI KOD
          </InputLabel>
          <div className={classes.verificationInputContainer}>
            <input
              autoFocus
              onFocus={(e) => handleFocus(e)}
              ref={(element) => itemEls.current.push(element)}
              onChange={(e) => handleInputChange(e)}
              name="0"
              value={code[0]}
              type="number"
              maxLength="1"
              size="1"
              min="0"
              max="9"
              pattern="[0-9]{1}"
            />
            <input
              onFocus={(e) => handleFocus(e)}
              ref={(element) => itemEls.current.push(element)}
              onChange={(e) => handleInputChange(e)}
              name="1"
              value={code[1]}
              type="number"
              maxlength="1"
              size="1"
              min="0"
              max="9"
              pattern="[0-9]{1}"
            />
            <input
              onFocus={(e) => handleFocus(e)}
              ref={(element) => itemEls.current.push(element)}
              onChange={(e) => handleInputChange(e)}
              name="2"
              value={code[2]}
              type="number"
              maxlength="1"
              size="1"
              min="0"
              max="9"
              pattern="[0-9]{1}"
            />
            <input
              onFocus={(e) => handleFocus(e)}
              ref={(element) => itemEls.current.push(element)}
              onChange={(e) => handleInputChange(e)}
              name="3"
              value={code[3]}
              type="number"
              maxlength="1"
              size="1"
              min="0"
              max="9"
              pattern="[0-9]{1}"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
