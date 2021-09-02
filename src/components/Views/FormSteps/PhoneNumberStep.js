import React, { useEffect } from "react";
import { TextField, makeStyles, InputLabel } from "@material-ui/core";
import phoneIllustration from "../../../assets/PhoneIllustration.svg";
import styles from "../FormContainer/style.js";
//redux
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../../redux/reducers/userProfileSlice";

const useStyles = makeStyles(styles);

export default function PhoneNumberStep(props) {
  const dispatch = useDispatch();
  const phoneNumber = useSelector(
    (state) => state.userProfile.info.phoneNumber
  );

  useEffect(() => {
    props.setButtonVisible(phoneNumber.length > 12);
  }, [phoneNumber]);

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    if (value.length < 5) return;
    console.log(value);
    dispatch(
      updateProfile({
        property: "info",
        value: { [name]: value },
      })
    );
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
            fullWidth
            autoFocus
            type="tel"
            name="phoneNumber"
            onChange={(e) => handleInputChange(e)}
            value={phoneNumber}
            className={classes.phoneNumInput}
            variant="filled"
          />
        </div>
      </div>
    </div>
  );
}
