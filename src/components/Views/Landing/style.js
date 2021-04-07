
export default theme => ({

landingContainer:{
    height: "100vh",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    overflow:"hidden",
    fontFamily: theme.typography.fontFamily
},
stretchedImg:{
    height: "100%",
    width: "100%",
    objectFit: "cover",
    position: "absolute",
    top:0,
    left:0,
    transform: "scaleX(-1)",
   [theme.breakpoints.down('xs')]: {
      transform: "scale(1.3)",
      objectFit: "cover",
      objectPosition: "30%"
   }
},
gradientDiv: {
    background: "linear-gradient(to right, #000000c9, transparent)",
    height: "100%",
    width: "100%",
    position: "absolute",
    top:0,
    left:0,
   [theme.breakpoints.down('xs')]: {
      background: "linear-gradient(to top, #000000c9, transparent)",
   }
},
loginDiv:{
    background: "rgba(0,0,0, 0.2)",
    height: "100%",
    width: "40%",
    minWidth: 450,
    padding: "0 6vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "absolute",
    left:0,
    top:0,
    backdropFilter: "blur(10px)",
    color: "#fff",
   [theme.breakpoints.down('xs')]: {
      bottom: 160,
      top: "unset",
      padding: 35,
      borderRadius: 25,
      width: "90%",
      minWidth: "unset",
      height: "auto",
      textAlign: "center",
      left: "50%",
      transform: "translateX(-50%)", 
      alignItems: "center",
   }
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
   [theme.breakpoints.down('xs')]: {
      lineHeight: "1.5rem",
      opacity: .8,
      fontSize: 13
   }
},
landingBtn:{
   marginTop:50,
   letterSpacing: .5,
   fontSize:16,
   [theme.breakpoints.down('xs')]: {
      width: "fit-content",
      position: "absolute",
      bottom: -30,
      left: "50%",
      transform: "translateX(-50%)",
      width: 85,
      height:60 
   }
},
landingLink:{
   color: theme.palette.primary.mainLight,
   cursor: "pointer",
   textDecoration: "none",
   fontSize: 12,
   fontWeight: 500,
   width: "fit-content",
   marginTop: 25,
   textAlign: "center",
   marginLeft: "auto",
   marginRight: "auto",
   borderBottom: "1px solid transparent",
   "&:hover":{
   color: theme.palette.primary.main,
   borderBottom: "1px solid"
   },
   [theme.breakpoints.down('xs')]: {
      position: "absolute",
      bottom: -75,
      left: "50%",
      transform: "translateX(-50%)"
   }
},
landingLogo:{
   height: 80,
   width: 80,
   marginTop: -50,
   marginBottom: 50,
   position: "relative",
   [theme.breakpoints.down('xs')]: {
      marginTop: "10rem"
   }
}
}) 