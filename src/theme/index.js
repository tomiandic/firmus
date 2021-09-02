import { createMuiTheme } from "@material-ui/core";

const font = "'Poppins', sans-serif";

const theme = createMuiTheme({
  typography: {
    fontFamily: font,
  },
  palette: {
    primary: {
      main: "#1479EC",
      mainLight: "#4D9AF2",
      input: "#B8C0C8",
    },
    secondary: {
      main: "#FFC60A",
    },
    text: {
      main: "#263448",
      light: "#6c7595",
    },
    background: {
      light: "#F5F7FC",
    },
  },
  overrides: {
    MuiFilledInput: {
      root: {
        backgroundColor: "#F5F7FC!important",
        color: "#263448",
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        "&.Mui-focused": {
          backgroundColor: "#f5f7fc!important",
        },
      },
      underline: {
        "&&&:before": {
          borderBottom: "2px solid #F5F7FC",
        },
      },
    },

    MuiButton: {
      root: {
        padding: "15px 25px",
        borderRadius: 17,
      },
      containedPrimary: {
        color: "#fff",
        backgroundColor: "#1479EC",
        boxShadow: "0 5px 25px 2px #0077ff44",
        "&:hover": {
          backgroundColor: "#0077ff",
          boxShadow: "0 5px 25px 2px #0077ff5d",
        },
      },
      containedSecondary: {
        color: "#fff",
        backgroundColor: "#1479EC",
        boxShadow: "0 5px 25px 2px #0077ff44",
        "&:hover": {
          backgroundColor: "#0077ff",
          boxShadow: "0 5px 25px 2px #0077ff5d",
        },
      },
    },

    MuiOutlinedInput: {
      root: {
        border: "none",
      },
      input: {
        backgroundColor: "#F5F7FC!important",
        border: "none",
        borderRadius: 110,
        fontSize: 14,
        color: "#263448",
      },
      notchedOutline: {
        border: "none",
      },
    },
    MuiLinearProgress: {
      bar1Determinate: {
        background: "#19ef47",
      },
      determinate: {
        background: "whitesmoke",
      },
    },
    MuiChip: {
      root: {
        border: "none",
        background: "white!important",
        marginBottom: "10px!important",
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: "20px",
      },
    },
  },
});

export default theme;
