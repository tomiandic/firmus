import React, { useEffect } from "react";
import { TextField, makeStyles, InputLabel } from "@material-ui/core";
import phoneIllustration from "../../../assets/PhoneIllustration.svg";
import styles from "../FormContainer/style.js";
import { observer } from "mobx-react";
import UserProfileStore from "../../../store/UserProfileStore";

const useStyles = makeStyles(styles);

const PhoneNumberStep = (props) => {
  useEffect(() => {
    props.setButtonVisible(UserProfileStore.info.phoneNumber.length > 12);
  }, [UserProfileStore.info.phoneNumber]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    if (value.length < 5) return;
    UserProfileStore.setProfile({ "phoneNumber": value }, "info");
    /*     props.setPhoneNumber(value);
     */
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
            value={UserProfileStore.info.phoneNumber}
            className={classes.phoneNumInput}
            variant="filled"
          />
        </div>
      </div>
    </div>
  );
};

export default observer(PhoneNumberStep);
