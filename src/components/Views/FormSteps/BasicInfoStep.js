import React, { useState, useEffect } from "react";
import ListOption from "../../UI/ListOption";
import { List as VirtualList } from "react-virtualized";
import { useTheme } from "@material-ui/core/styles";
import {
  TextField,
  makeStyles,
  InputLabel,
  IconButton,
  Modal,
  Backdrop,
  Paper,
  Fade,
  Button,
  Divider,
  CircularProgress,
  useMediaQuery,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import DatePicker from "react-mobile-datepicker";
import locationIcon from "../../../assets/pin.svg";
import locationErrorIcon from "../../../assets/pinErr.svg";
import styles from "../FormContainer/style.js";
import data from "./../../../data/data.json";
import noResultsIcon from "./../../../assets/NoResultsIcon.svg";
import { ArrowBack } from "@material-ui/icons";

const useStyles = makeStyles(styles);
const DATE_CONFIG = {
  date: {
    format: "D",
    caption: "Day",
    step: 1,
  },
  month: {
    format: "M",
    caption: "Mon",
    step: 1,
  },
  year: {
    format: "YYYY",
    caption: "Year",
    step: 1,
  },
};

export default function BasicInfoStep(props) {
  const [openCityList, setOpenCityList] = useState(false);
  const [openLocationFeedback, setOpenLocationFeedback] = useState(false);
  const [filterValue, setFilterValue] = useState("");
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [pickedCity, setPickedCity] = useState(null);
  const [filteredCities, setFilteredCities] = useState(data.cities);

  const { setInfo, info, setButtonVisible } = props;

  useEffect(() => {
    setButtonVisible(checkInfoValidity);
  }, [info]);

  useEffect(() => {
    console.log(filterValue);
    const Cities = data.cities.filter((city) =>
      city.toLowerCase().includes(filterValue.toLowerCase())
    );
    console.log(Cities);
    setFilteredCities(Cities);
  }, [filterValue]);

  //TODO: validate.js ili slicni plugin
  const checkInfoValidity = () => {
    return !Object.values(info).includes("");
  };

  const handleDatePickerOpen = () => {
    setDatePickerOpen(true);
  };

  const handleDatePickerClose = () => {
    setDatePickerOpen(false);
  };

  const theme = useTheme();
  //true if not mobile
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const handleSelectDate = (time) => {
    setInfo((prevState) => ({ ...prevState, date: formatDate(time) }));
    setDatePickerOpen(false);
  };

  const formatDate = (date) => {
    if (!(date instanceof Date)) return;
    let day = date.getDate();
    day = day < 10 ? `0${day}` : day;
    let month = date.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    let year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCityPick = (e) => {
    const { name, value, type, checked } = e.target;
    setPickedCity(name);
  };

  const handlePickedCitySave = (e) => {
    setInfo((prevState) => ({ ...prevState, city: pickedCity }));
    setOpenCityList(false);
  };

  const getUserLocation = () => {
    setOpenLocationFeedback(true);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        setCurrentPosition,
        positionError,
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 0,
        }
      );
    }
  };

  function positionError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        setLocationError("Korisnik nije dopustio pristup lokaciji uređaja");
        break;
      default:
        setLocationError(
          "Trenutno ne možemo pristupiti lokaciji vašeg uređaja"
        );
        break;
    }
  }

  function setCurrentPosition(position) {
    fetch(
      `http://api.positionstack.com/v1/reverse?access_key=${data.LOCATION_API_KEY}&query=${position.coords.latitude},${position.coords.longitude}`
    )
      .then((res) => res.json())
      .then((res) => setCurrentLocation(res.data[0].label));
  }

  const savePosition = () => {
    setInfo((prevState) => ({ ...prevState, city: currentLocation }));
    setOpenLocationFeedback(false);
    setOpenCityList(false);
  };

  const rowRenderer = ({ index, key, style }) => {
    const city = filteredCities[index];
    console.log(city);
    return (
      <ListOption
        type="radio"
        optionName={city}
        optionChecked={city === pickedCity}
        handleCheckbox={handleCityPick}
        key={key}
        style={{ ...style, width: "100%" }}
      />
    );
  };

  const classes = useStyles();

  return (
    <div style={{ ...props.style }} className={classes.basicInfoContainer}>
      <div style={{ minWidth: "100%" }} className={classes.inputContainer}>
        <InputLabel className={classes.inputLabel}>Ime i prezime*</InputLabel>
        <TextField
          autoFocus
          onChange={(e) => handleInputChange(e)}
          value={info.fullName}
          name="fullName"
          className={classes.infoInput}
          variant="filled"
        />
      </div>

      <div style={{ marginRight: 5 }} className={classes.inputContainer}>
        <InputLabel className={classes.inputLabel}>Grad stanovanja*</InputLabel>
        {matches ? (
          <Autocomplete
            options={data.cities}
            getOptionLabel={(option) => option}
            name="city"
            onChange={(event, value) => {
              console.log(value);
              setInfo((prevState) => ({ ...prevState, ["city"]: value }));
            }}
            inputValue={info.city}
            renderInput={(params) => (
              <TextField
                {...params}
                className={classes.infoInput}
                variant="filled"
                onChange={(event) => {
                  const { value, name } = event.target;
                  setInfo((prevState) => ({ ...prevState, ["city"]: value }));
                }}
              />
            )}
          />
        ) : (
          <TextField
            inputProps={{ readOnly: true }}
            onClick={() => setOpenCityList(true)}
            onChange={(e) => handleInputChange(e)}
            value={info.city}
            name="city"
            className={classes.infoInput}
            variant="filled"
          />
        )}
      </div>

      <div className={classes.inputContainer}>
        <InputLabel className={classes.inputLabel}>Datum rođenja*</InputLabel>
        {matches ? (
          <TextField
            onChange={(e) => handleInputChange(e)}
            value={info.date}
            name="date"
            className={classes.infoInput}
            variant="filled"
            type="date"
          />
        ) : (
          <div>
            <TextField
              inputProps={{ readOnly: true }}
              onClick={handleDatePickerOpen}
              onChange={(e) => handleInputChange(e)}
              value={info.date}
              name="date"
              className={classes.infoInput}
              variant="filled"
              type="date"
            />
            <DatePicker
              value={new Date(info.date)}
              isOpen={datePickerOpen}
              onSelect={handleSelectDate}
              showHeader={false}
              theme="android"
              dateConfig={DATE_CONFIG}
              confirmText="Spremi"
              cancelText="Odustani"
              onCancel={handleDatePickerClose}
              className={classes.datepickerCustom}
            />
          </div>
        )}
      </div>

      <div style={{ minWidth: "100%" }} className={classes.inputContainer}>
        <InputLabel className={classes.inputLabel}>Spol*</InputLabel>

        <div className={classes.pickerContainer}>
          <div
            className={
              info.genre === "F"
                ? `${classes.buttonPicker} ${classes.buttonPickerActive}`
                : classes.buttonPicker
            }
          >
            <input
              name="genre"
              className={classes.buttonPickerInput}
              id="F"
              value="F"
              type="checkbox"
              onChange={(e) => handleInputChange(e)}
              checked={info.genre === "F"}
            />
            <svg
              className={classes.buttonPickerCheck}
              viewBox="0 0 48.89 48.89"
            >
              <circle cx="24.45" cy="24.45" r="24.45" fill="#d9e4f4"></circle>
              <polyline
                points="10.26 25.54 21.14 35.45 38.63 13.44"
                fill="none"
                stroke="#1479ec"
                strokeMiterlimit="10"
                strokeWidth="7"
              ></polyline>
            </svg>
            <label htmlFor={"F"} className={classes.buttonPickerLabel}>
              <svg
                className={classes.buttonPickerMainIcon}
                width="29.709"
                height="29.703"
                viewBox="0 0 29.709 29.703"
              >
                {" "}
                <g transform="translate(0.253 0.25)">
                  {" "}
                  <path
                    d="M37.189,36.616l-1.1-4.335,0-.014a5.171,5.171,0,0,0-3.914-3.647h-.006l-1.08-.211V16.478a8.478,8.478,0,0,0-16.957,0v11.93l-1.08.211h-.006a5.171,5.171,0,0,0-3.914,3.647l0,.014-1.1,4.335a.47.47,0,0,0,.456.587H36.733a.47.47,0,0,0,.456-.587ZM15.066,16.478a7.536,7.536,0,0,1,15.073,0V28.224L25.9,27.395V26.141a6.885,6.885,0,0,0,3.3-5.423V16.949a.283.283,0,0,0,0-.041.471.471,0,0,0-.383-.508,4.784,4.784,0,0,1-3.047-2.055.471.471,0,0,0-.719-.073,7.452,7.452,0,0,1-8.371,1.54.471.471,0,0,0-.6.195c-.008.013-.014.026-.021.04a.475.475,0,0,0-.042.194v4.476a6.885,6.885,0,0,0,3.3,5.423v1.254l-4.239.829ZM22.6,26.37a6.063,6.063,0,0,1-3.63-1.673,5.36,5.36,0,0,1-2.022-3.979V16.938a8.374,8.374,0,0,0,8.358-1.628,5.734,5.734,0,0,0,2.946,1.929v3.478A5.36,5.36,0,0,1,26.233,24.7,6.063,6.063,0,0,1,22.6,26.37Zm2.355.317v1.1c0,.9-1.321,3-2.355,4.4-1.034-1.4-2.355-3.5-2.355-4.4v-1.1a5.511,5.511,0,0,0,2.355.625A5.511,5.511,0,0,0,24.957,26.687Zm6.123,9.575V34.377a.471.471,0,0,0-.942,0v1.884H15.066V34.377a.471.471,0,0,0-.942,0v1.884H9.078l.953-3.741a4.231,4.231,0,0,1,3.2-2.977l6.153-1.2c.432,1.778,2.581,4.569,2.85,4.914a.471.471,0,0,0,.743,0c.269-.344,2.418-3.136,2.85-4.914l6.153,1.2a4.231,4.231,0,0,1,3.2,2.977l.953,3.741Z"
                    transform="translate(-8.001 -8)"
                  />{" "}
                  <path
                    d="M241.413,264h-.942a.471.471,0,1,0,0,.942h.942a.471.471,0,0,0,0-.942Z"
                    transform="translate(-226.34 -248.927)"
                  />{" "}
                  <ellipse
                    cx="1"
                    cy="0.5"
                    rx="1"
                    ry="0.5"
                    transform="translate(11 10.103)"
                  />{" "}
                  <ellipse
                    cx="1"
                    cy="0.5"
                    rx="1"
                    ry="0.5"
                    transform="translate(16 10.103)"
                  />{" "}
                </g>{" "}
              </svg>
            </label>
          </div>
          <div
            className={
              info.genre === "M"
                ? `${classes.buttonPicker} ${classes.buttonPickerActive}`
                : classes.buttonPicker
            }
          >
            <input
              name="genre"
              className={classes.buttonPickerInput}
              id="M"
              value="M"
              type="checkbox"
              onChange={(e) => handleInputChange(e)}
              checked={info.genre === "M"}
            />
            <svg
              className={classes.buttonPickerCheck}
              viewBox="0 0 48.89 48.89"
            >
              <circle cx="24.45" cy="24.45" r="24.45" fill="#d9e4f4"></circle>
              <polyline
                points="10.26 25.54 21.14 35.45 38.63 13.44"
                fill="none"
                stroke="#1479ec"
                strokeMiterlimit="10"
                strokeWidth="7"
              ></polyline>
            </svg>
            <label htmlFor={"M"} className={classes.buttonPickerLabel}>
              <svg
                className={classes.buttonPickerMainIcon}
                width="29.203"
                height="29.203"
                viewBox="0 0 29.203 29.203"
              >
                {" "}
                <path
                  d="M37.189,36.616l-1.1-4.335,0-.014a5.171,5.171,0,0,0-3.914-3.647l-5.8-1.22V26.126a6.6,6.6,0,0,0,2.758-4.466h.3a1.65,1.65,0,0,0,1.649-1.649V18.6a1.65,1.65,0,0,0-1.649-1.649H29.2V15.838a4.18,4.18,0,0,0,2.407-3.1,4.958,4.958,0,0,0-.07-2.037.471.471,0,0,0-.845-.132c-.414.621-2.489-.523-3.269-.953L27.1,9.437A7.812,7.812,0,0,0,22.6,8a6.6,6.6,0,0,0-6.594,6.594v2.355h-.236A1.65,1.65,0,0,0,14.124,18.6v1.413a1.65,1.65,0,0,0,1.649,1.649h.3a6.6,6.6,0,0,0,2.758,4.466V27.4l-5.8,1.22a5.171,5.171,0,0,0-3.914,3.647l0,.014-1.1,4.335a.47.47,0,0,0,.456.587H36.733a.47.47,0,0,0,.456-.587Zm-21.181-15.9h-.236a.707.707,0,0,1-.707-.707V18.6a.707.707,0,0,1,.707-.707h.236Zm13.424-2.826a.707.707,0,0,1,.707.707v1.413a.707.707,0,0,1-.707.707H29.2V17.891Zm-12.482-3.3A5.659,5.659,0,0,1,22.6,8.942a6.983,6.983,0,0,1,4.01,1.3l.028.016c.1.052.207.112.324.177,1.062.585,2.685,1.48,3.766,1.188a3.36,3.36,0,0,1-2.19,3.48.471.471,0,0,0-.286.433v.726A4.748,4.748,0,0,1,25.764,14.4a.471.471,0,0,0-.719-.073,7.55,7.55,0,0,1-8.094,1.6Zm0,6.123V16.938a8.494,8.494,0,0,0,8.359-1.571,5.7,5.7,0,0,0,2.945,1.874v3.477a5.652,5.652,0,0,1-11.3,0Zm8.478,5.957v1.108a2.1,2.1,0,0,1-.924,1.829,3.427,3.427,0,0,1-1.9.526c-2.086,0-2.826-1.269-2.826-2.355V26.675A6.587,6.587,0,0,0,25.428,26.675Zm6.594,9.586V34.377a.471.471,0,0,0-.942,0v1.884H14.124V34.377a.471.471,0,1,0-.942,0v1.884h-4.1l.953-3.741a4.231,4.231,0,0,1,3.2-2.977l5.648-1.189a2.979,2.979,0,0,0,1.1,1.892,4.194,4.194,0,0,0,2.627.834,4.194,4.194,0,0,0,2.627-.834,2.979,2.979,0,0,0,1.1-1.892l5.648,1.189a4.231,4.231,0,0,1,3.2,2.977l.953,3.741Z"
                  transform="translate(-8.001 -8)"
                />{" "}
                <path
                  d="M234.826,264.471a.471.471,0,0,0-.471-.471h-1.884a.471.471,0,1,0,0,.942h1.884A.471.471,0,0,0,234.826,264.471Z"
                  transform="translate(-218.811 -248.927)"
                />{" "}
                <ellipse
                  cx="1"
                  cy="0.5"
                  rx="1"
                  ry="0.5"
                  transform="translate(10.553 10.103)"
                />{" "}
                <ellipse
                  cx="1"
                  cy="0.5"
                  rx="1"
                  ry="0.5"
                  transform="translate(16.553 10.103)"
                />{" "}
              </svg>
            </label>
          </div>
        </div>
      </div>

      <Modal
        open={openCityList}
        closeAfterTransition
        BackdropComponent={Backdrop}
        onClose={() => setOpenCityList(false)}
      >
        <Fade unmountOnExit in={openCityList}>
          <Paper className={classes.modalContainer}>
            <div className={classes.modalTopActions}>
              <div onClick={getUserLocation} className={classes.locationButton}>
                <LocationOnOutlinedIcon
                  className={classes.locationButtonIcon}
                />
                <div>
                  <h4 className={classes.locationButtonTitle}>
                    Koristi moju trenutnu lokaciju
                  </h4>
                  <p className={classes.locationButtonSubTitle}>
                    Dopustite Firmusu pristup lokaciji vašeg uredjaja
                  </p>
                </div>
              </div>
            </div>
            <Divider light />
            <div className={classes.modalTopActions}>
              <IconButton
                onClick={() => setOpenCityList(false)}
                color="primary"
                style={{ marginLeft: -10 }}
              >
                <ArrowBack />
              </IconButton>
              <TextField
                variant="outlined"
                value={filterValue}
                className={classes.modalInput}
                onChange={(e) => setFilterValue(e.target.value)}
                placeholder="&#x1F50D; Pretraži grad.."
              />
            </div>
            <div className={classes.modalContent}>
              {openCityList && (
                <VirtualList
                  width={1}
                  height={1000}
                  rowCount={filteredCities.length}
                  rowHeight={65}
                  rowRenderer={rowRenderer}
                  containerStyle={{
                    width: "100%",
                    maxWidth: "100%",
                  }}
                  style={{ width: "100%" }}
                />
              )}
            </div>
            <div className={classes.modalActionContainer}>
              <Button
                color="primary"
                variant="contained"
                onClick={() => handlePickedCitySave()}
                className={classes.formButton}
              >
                Spremi
              </Button>
            </div>
          </Paper>
        </Fade>
      </Modal>

      <Modal
        open={openLocationFeedback}
        closeAfterTransition
        BackdropComponent={Backdrop}
        onClose={() => setOpenLocationFeedback(false)}
      >
        <Fade in={openLocationFeedback}>
          <Paper className={classes.modalContainer}>
            <div className={classes.modalLocationFeedback}>
              {currentLocation ? (
                <>
                  <img className={classes.illustration} src={locationIcon} />
                  <br /> <br />
                  <p>Tvoja lokacija je:</p>
                  <h1>{currentLocation}</h1>
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={() => savePosition()}
                    className={classes.formButton}
                  >
                    Postavi kao moju lokaciju
                  </Button>
                  <a
                    onClick={() => setOpenLocationFeedback(false)}
                    className={classes.subLink}
                  >
                    Odaberi lokaciju ručno
                  </a>
                </>
              ) : locationError ? (
                <>
                  <img
                    className={classes.illustration}
                    src={locationErrorIcon}
                  />
                  <br /> <br />
                  <h1>{locationError}</h1>
                  <a
                    onClick={() => setOpenLocationFeedback(false)}
                    className={classes.subLink}
                  >
                    Unesi lokaciju ručno
                  </a>
                </>
              ) : (
                <CircularProgress />
              )}
            </div>
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
}
