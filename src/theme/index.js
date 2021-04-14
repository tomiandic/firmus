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
            light: "#f0f2f5"
        }
    },
    overrides:{
        MuiFilledInput:{
            root:{
                backgroundColor: "#f0f2f5!important",
                color: "#263448",
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
                "&.Mui-focused":{
                  backgroundColor: "#f5f7fc!important",
                }
              },
              underline:{
                "&&&:before": {
                borderBottom:"2px solid #f0f2f5"
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
                  backgroundColor: "#f0f2f5!important",
                  border:"none",
                  borderRadius: 110,
                  fontSize: 14,
                  color: "#263448",
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