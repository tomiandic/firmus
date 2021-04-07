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
            input: "#B8C0C8"
        },
        text:{
            main: "#263448",
            light: "#6c7595"
        }, 
        background: {
            light: "#edf3fe"
        }
    },
    overrides:{
        MuiFilledInput:{
            root:{
                backgroundColor: "#f8f9fc!important",
                color: "#263448",
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                "&.Mui-focused":{
                  backgroundColor: "#f5f7fc!important",
                }
              },
              underline:{
                "&&&:before": {
                borderBottom:"2px solid #b3c0d7"
              }}
        },

        MuiButton: {
            contained: {
                padding: "15px 25px",
                color: "#fff",
                borderRadius: 17,
                backgroundColor: "#1479EC",
                boxShadow: "0 5px 25px 2px #0077ff44",
                "&:hover": {
                  backgroundColor: "#183edd",
                  boxShadow: "0 5px 25px 2px #0077ff5d",
                }
              }
        },

        MuiOutlinedInput: {
            root:{
                border: "none"
              },
              input:{
                  backgroundColor: "#f5f7fc!important",
                  border:"none",
                  borderRadius: 110,
                  fontSize: 14,
                  color: "#6c7595",
              },
              notchedOutline:{
                  border: "none",
              }
        },
        MuiLinearProgress: {
            bar1Determinate:{
                background: "#19ef47"
            },
            determinate:{
                background: "whitesmoke"
            }
        }
    }
})

export default theme;