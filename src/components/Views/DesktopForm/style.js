
export default theme => ({

    desktopFormContainer:{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: theme.typography.fontFamily
    },
    loginDiv:{
        background: "rgb(3, 17, 45)",
        minHeight: "100vh",
        minWidth: "40%",
        padding: "0 6vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "#fff",
        flex: 1
    },
    landingTitle:{
       fontSize: 25,
       [theme.breakpoints.down('xs')]: {
          fontSize: 22
       },
       [theme.breakpoints.up('xl')]: {
          fontSize: 50
       }
    },
    landingSubTitle:{
       lineHeight: "1.8rem",
       maxWidth: 450,
    },
    landingBtn:{
       marginTop:50,
       letterSpacing: .5,
       fontSize:16,
    },
    landingLogo:{
       height: 45,
       zIndex: 10,
       fill: theme.palette.primary.main,
       marginBottom: 60,
       marginRight: "auto", 
       [theme.breakpoints.down('xs')]: {
          marginBottom: 150,
          position: "relative",
          marginRight: 0,
          fill: "#fff",
          ['@media (max-height:580px)']: { 
             marginBottom: 30
          }
       }
    },
    inputContainer:{
        marginBottom: 20,
    },
    inputLabel:{
        marginBottom: 7,
        marginLeft:4,
        fontSize:11,
        fontWeight: 500,
        color: theme.palette.text.main
    },
    formDiv:{
        background: "#fff",
        flex: 1,
        minWidth: "60%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "auto",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    formInner:{
        marginTop: 100
    },
    //LANGUAGE STEP //

    pickerContainer:{
        display: "grid",
        gridGap: 20,
        gridTemplateColumns: "repeat(auto-fill, minmax(85px, 1fr))",
    },
    buttonPicker:{
        /* background: theme.palette.background.light, */
        background: "#fff",
        borderRadius: 20,
        position: "relative",
        /* border: `3px solid ${theme.palette.background.light}`, */
        border: "3px solid #fff",
        boxShadow: "0 0 30px -3px #e2e5f3",
        transition: "300ms all ease-out",
        fill: theme.palette.text.light
    },
    buttonPickerActive:{
        border: `3px solid ${theme.palette.primary.main}`,
        fill: theme.palette.primary.main,
        background: "#fff",
        boxShadow: "0 10px 10px -2px #2196f31f",
        "& span":{
            color: theme.palette.text.main
        },
        "& img": {
            opacity: 1
        },
        "& svg":{
            opacity: 1
        }
    },
    buttonPickerCheck:{
        position: "absolute",
        top: 6,
        right: 6,
        height: 18,
        width: 18,
        opacity: 0
    },
    buttonPickerIcon:{
        width:"30%",
        marginBottom: 10,
        opacity: .7
    },
    buttonPickerLabel:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "95px"
        /* padding: "25px 10px 15px 10px", */
    },
    buttonPickerInput:{
        position: "absolute",
        opacity: 0
    },
    }) 