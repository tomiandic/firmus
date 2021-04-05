import { createMuiTheme } from "@material-ui/core";
import overrides from './overrides'

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
            main: "#595E7F",
            light: "#9A9EBB"
        }, 
        background: {
            light: "#F6F9FE"
        }
    },
    overrides
})

export default theme;