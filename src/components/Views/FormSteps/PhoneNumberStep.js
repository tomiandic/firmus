import React, { useEffect, useContext } from "react";
import { TextField, makeStyles, InputLabel } from "@material-ui/core";
import phoneIllustration from "../../../assets/PhoneIllustration.svg";
import styles from "../FormContainer/style.js";
import { userInfoContext } from "../../../context/UserInfoProvider";

const useStyles = makeStyles(styles);

export default function PhoneNumberStep(props) {
  const [info, setInfo] = useContext(userInfoContext);
  useEffect(() => {
    props.setButtonVisible(info.phoneNumber.length > 12);
  }, [info.phoneNumber]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    value.length > 5 &&
      setInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const classes = useStyles();

  return (
    <div style={{ ...props.style }} className={classes.basicInfoContainer}>
      <div style={{ minWidth: "100%" }} className={classes.inputContainer}>
        <div className={classes.modalLocationFeedback}>
          <img className={classes.illustration} src={phoneIllustration} />
          <InputLabel className={classes.inputLabelCenter}>
            BROJ TELEFONA
          </InputLabel>
          <TextField
            value={info.phoneNumber}
            fullWidth
            autoFocus
            type="tel"
            name="phoneNumber"
            onChange={(e) => handleInputChange(e)}
            value={props.phoneNumber}
            className={classes.phoneNumInput}
            variant="filled"
          />
        </div>
      </div>
    </div>
  );
}
