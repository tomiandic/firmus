import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  TextField,
  makeStyles,
  InputLabel,
  IconButton,
  Button,
  useMediaQuery,
} from "@material-ui/core";
import styles from "../FormContainer/style.js";
import { accountService } from "../../../services";
import { Visibility, VisibilityOff } from "@material-ui/icons";

//redux
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../../redux/reducers/userProfileSlice";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { ReactComponent as GoogleIcon } from "../../../assets/google.svg";
const useStyles = makeStyles(styles);

export default function CredentialsStep(props) {
  const [visible, setVisible] = useState(false);

  const { setButtonVisible } = props;

  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const info = useSelector((state) => state.userProfile.credentials);

  useEffect(() => {
    setButtonVisible(checkInfoValidity);
  }, [info]);

  const checkInfoValidity = () => {
    return !Object.values(info).includes("");
  };

  const theme = useTheme();
  //true if not mobile
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    dispatch(
      updateProfile({
        property: "credentials",
        value: { [name]: value },
      })
    );
  };

  const toggleVisibility = () => {
    let input = inputRef.current.children[0].children[0];
    input.type === "password" ? setVisible(true) : setVisible(false);
  };

  const classes = useStyles();
  return (
    <div style={{ ...props.style }} className={classes.basicInfoContainer}>
      <div style={{ minWidth: "100%" }} className={classes.inputContainer}>
        <InputLabel className={classes.inputLabel}>Email adresa*</InputLabel>
        <TextField
          name="mail"
          onChange={(e) => handleInputChange(e)}
          value={info.mail}
          className={classes.infoInput}
          variant="filled"
          autoFocus
        />
      </div>
      <div style={{ minWidth: "100%" }} className={classes.inputContainer}>
        <InputLabel className={classes.inputLabel}>Lozinka*</InputLabel>
        <TextField
          ref={inputRef}
          name="password"
          onChange={(e) => handleInputChange(e)}
          value={info.password}
          className={classes.infoInput}
          variant="filled"
          type={visible ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => toggleVisibility()}>
                {visible ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ),
          }}
        />
      </div>
      <div className={classes.separator}>ili</div>

      <div className={classes.socialMediaLogin}>
        <p>Odaberite platformu za brzu prijavu</p>
        <Button
          onClick={() => accountService.login}
          style={{ background: "#4267B2" }}
          className={classes.socialButton}
          startIcon={<FacebookIcon />}
        >
          Facebook
        </Button>
        <Button
          startIcon={<InstagramIcon />}
          style={{
            background:
              "radial-gradient(circle at 0% 107%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
          }}
          className={classes.socialButton}
        >
          Instagram
        </Button>
        <Button
          style={{ boxShadow: "0 0 20px -8px", color: "gray" }}
          className={classes.socialButton}
          startIcon={<GoogleIcon style={{ height: 15, width: 15 }} />}
        >
          Google
        </Button>
      </div>
    </div>
  );
}
