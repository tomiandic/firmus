export default (theme) => ({
  formContainer: {
    background: "#fff",
    width: "100vw",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    overflow: "auto",
  },
  formTopSection: {
    minHeight: 90,
    display: "table",
  },
  formContent: {
    position: "relative",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
  },
  formContentInner: {
    width: "70%",
    maxWidth: 600,
    [theme.breakpoints.down("xs")]: {
      maxWidth: 750,
      width: "100%",
    },
  },
  formDescription: {
    background: "#fff",
    minWidth: "30%",
    boxShadow: "0 0 20px 10px #1427ab12",
    background: theme.palette.primary.main,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  jobItem: {
    color: theme.palette.text.main,
    boxShadow: "none",
    marginTop: 8,
    fontWeight: "500",
    padding: "5px 15px",
    "& span": {
      display: "block",
      color: theme.palette.text.light,
      fontSize: 11,
      fontWeight: "200",
    },
    "& div": {
      fontSize: 16, 
    },
    "&.Mui-expanded": {
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
  },
  inputList: {
    width: "100%",
    color: theme.palette.text.light,
  },
  accordionContainer: {
    boxShadow: "0 0 20px -5px #e9ebf5",
    borderRadius: 10,
    paddingRight: 15,
    "&::before": {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      paddingRight: 0,
    },
  },
  formTitle: {
    fontWeight: "semidbold",
    color: theme.palette.text.main,
    margin: 0,
    paddingTop: 10,
    paddingBottom: 60,
    [theme.breakpoints.down("xs")]: {
      padding: "0px 15px",
      fontSize: 19,
      borderLeft: `5px solid ${theme.palette.primary.main}`,
    },
  },
  formWrap: {
    [theme.breakpoints.down("xs")]: {
      padding: "50px 15px",
      overflow: "auto",
      paddingBottom: 150,
    },
  },

  scrollBar: {
    height: "100%",
  },
  formButton: {
    textTransform: "unset",
    width: "100%",
  },
  formButtonIcon: {
    position: "absolute",
    right: 20,
  },
  formActionsContainer: {
    background: "linear-gradient(to top, white, white, white, transparent, transparent)",
    bottom: 0,
    left: 0,
    padding: "65px 20px 35px 20px",
    position: "sticky",
    width: "100%",
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      position: "fixed",
    },
  },
  formLogo: {
    padding: 50,
    width: 150,
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 5,
  },

  //LANGUAGE STEP //

  pickerContainer: {
    display: "grid",
    gridGap: 20,
    gridTemplateColumns: "repeat(auto-fill, minmax(85px, 1fr))",
  },
  buttonPicker: {
    background: "#fff",
    borderRadius: 20,
    position: "relative",
    border: "3px solid #fff",
    boxShadow: "0 0 30px -3px #e2e5f3",
    transition: "300ms all ease-out",
    fill: theme.palette.text.light,
  },
  buttonPickerActive: {
    border: `3px solid ${theme.palette.primary.main}`,
    fill: theme.palette.primary.main,
    background: "#fff",
    boxShadow: "0 10px 10px -2px #2196f31f",
    "& span": {
      color: theme.palette.text.main,
    },
    "& img": {
      opacity: 1,
    },
    "& svg": {
      opacity: 1,
    },
  },
  buttonPickerCheck: {
    position: "absolute",
    top: 6,
    right: 6,
    height: 18,
    width: 18,
    opacity: 0,
  },
  buttonPickerIcon: {
    width: "30%",
    marginBottom: 10,
    opacity: 0.7,
  },
  buttonPickerLabel: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "95px"
  },
  buttonPickerTitle: {
    color: theme.palette.text.light,
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: 0.2,
  },
  buttonPickerTitleBig: {
    color: theme.palette.text.light,
    fontSize: 18,
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: 0.2,
  },
  buttonPickerMainIcon: {
    width: 50,
    height: 55,
    paddingBottom: 10,
  },
  buttonPickerInput: {
    position: "absolute",
    opacity: 0,
  },
  modalContainer: {
    background: "#fff",
    width: 500,
    padding: 25,
    height: "auto",
    borderRadius: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    outline: "none",
    [theme.breakpoints.down("xs")]: {
      padding: 0,
      height: "95%",
      width: "95%",
      overflow: "hidden",
    },
  },
  modalActionContainer: {
    padding: 20,
    background: theme.palette.background.light,
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
  },
  modalInput: {
    width: "100%",
    color: "red!important",
  },
  modalTopActions: {
    padding: 20,
    position: "sticky",
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
    background: "linear-gradient(180deg, white, white, transparent)",
    zIndex: 1,
  },
  modalContent: {
    outline: "none",
    height: "auto",
  },
  modalFeedback: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: 30,
  },
  modalFeedbackTitle: {
    fontSize: 20,
    marginTop: 50,
    maxWidth: 300,
    textAlign: "center",
    color: theme.palette.background.light,
    fontWeight: 500,
  },
  inputLabel: {
    marginBottom: 7,
    marginLeft: 4,
    fontSize: 11,
    fontWeight: 500,
    color: theme.palette.text.main,
  },
  inputLabelCenter: {
    marginTop: 40,
    marginBottom: 25,
    color: theme.palette.text.main,
    fontSize: 11,
    fontWeight: 500,
  },
  basicInfoContainer: {
    display: "flex",
    flexWrap: "wrap",
  },
  infoInput: {
    width: "100%",
  },
  phoneNumInput: {
    width: 250,
    "& input": {
      fontSize: "20px!important",
    },
  },
  inputContainer: {
    flex: 1,
    marginBottom: 40,
  },
  locationButton: {
    display: "flex",
    alignItems: "center",
  },
  locationButtonSubTitle: {
    color: theme.palette.text.light,
    fontSize: 10,
    margin: 2,
    marginLeft: 10,
  },
  locationButtonTitle: {
    margin: 2,
    fontWeight: 500,
    marginLeft: 10,
    color: theme.palette.text.main,
  },
  locationButtonIcon: {
    color: theme.palette.text.light,
    background: theme.palette.background.light,
    borderRadius: 50,
    height: 35,
    width: 35,
    padding: 5,
  },
  modalLocationFeedback: {
    padding: 20,
    textAlign: "center",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  approveButton: {
    background: "#21d121",
    padding: 15,
    borderRadius: 100,
    color: "white",
  },
  subLink: {
    color: theme.palette.primary.mainLight,
    cursor: "pointer",
    textDecoration: "none",
    fontSize: 13,
    fontWeight: 500,
    marginTop: 45,
  },
  illustration: {
    width: "60%",
  },
  verificationInputContainer: {
    display: "flex",
    "& > input": {
      margin: 7,
      borderRadius: 10,
      padding: "10px 0px",
      background: theme.palette.background.light,
      border: `2px solid ${theme.palette.background.light}`,
      outline: "none",
      textAlign: "center",
      fontSize: 18,
      color: theme.palette.text.main,
      fontFamily: "inherit",
      fontWeight: 500,
      "-moz-appearance": "textfield",
      "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
        "-webkit-appearance": "none",
        margin: 0,
      },
    },
    "& :focus": {
      border: `2px solid ${theme.palette.primary.main}`,
    },
  },
  badge: {
    background: "red",
    height: 20,
    width: 20,
    borderRadius: 100,
    position: "absolute",
    top: 5,
    right: 5,
  },
  jobIcon: {
    background: "#ebf3ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: 45,
    height: 45,
    marginRight: "10px!important",
    "&>img": {
      width: 27,
      height: 27,
    },
  },

  // desktop form Version

  loginDiv: {
    background: "rgb(3, 17, 45)",
    minHeight: "100vh",
    minWidth: "40%",
    padding: "0 6vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "#fff",
    flex: 1,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  landingTitle: {
    fontSize: 25,
    [theme.breakpoints.down("xs")]: {
      fontSize: 22,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 30,
    },
  },
  landingSubTitle: {
    lineHeight: "1.8rem",
    maxWidth: 450,
  },
  landingLogo: {
    height: 45,
    zIndex: 10,
    fill: theme.palette.primary.main,
    marginBottom: 60,
    marginRight: "auto",
    [theme.breakpoints.down("xs")]: {
      marginBottom: 150,
      position: "relative",
      marginRight: 0,
      fill: "#fff",
      ["@media (max-height:580px)"]: {
        marginBottom: 30,
      },
    },
  },
  formOuterContainer: {
    display: "flex",
    maxHeight: "100vh",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  flexCenterContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedCount: {
    background: "#03112d",
    height: 50,
    minWidth: 50,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    color: "#fff",
    marginRight: 8,
    cursor: "pointer"
  },
  separator: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    minWidth: "100%",
    color: "lightgray",
    padding: "30px 0",
    "&:before":{
      content: '""',
      flex: 1,
      borderBottom: `1px solid lightgray`
    },
    "&:after":{
      content: '""',
      flex: 1,
      borderBottom: `1px solid lightgray`
    },
    "&:not(:empty)::after":{
      marginLeft: 15
    },
    "&:not(:empty)::before":{
      marginRight: 15
    }
  },
  socialButton: {
    color: "#fff",
    padding: "8px 20px",
    marginRight: 10
  },
  socialMediaLogin: {
    borderRadius: 10,
    marginTop: 30,
    border: `1px solid lightgray`,
    padding: 20,
    width: "100%",
    "&>p":{
      fontSize: 12,
      fontWeight: 500,
      marginTop: -5
    }
  }

  
});
