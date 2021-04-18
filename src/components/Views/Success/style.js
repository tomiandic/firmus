
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
          transform: "scale(1)",
          objectFit: "cover",
          objectPosition: "40%"
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
        backdropFilter: "blur(13px)",
        color: "#fff",
       [theme.breakpoints.down('xs')]: {
          bottom: 160,
          top: "unset",
          padding: "15px 10px 25px 10px",
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
    stepper:{
       background: "transparent",
       color: "#fff",
       textAlign: "left"
    },
    stepperLabel:{
       "&  span":{
         color: "#fff!important",
         fontWeight: 500,
         fontSize:16,
         marginLeft: 3
       }
    },
    stepperContent:{
       opacity: .8,
       borderLeft: "10px solid transparent",
       fontSize: 13
    },
    successCircle:{
       borderRadius: 100,
       marginTop: -55
    },
    socialMediaContainer:{
       zIndex: 10,
       display: "flex",
       alignItems: "center",
       flexWrap: "wrap",
       height: 100,
       position: "absolute",
       bottom: 0,
       justifyContent:"center",
       textAlign: "center",
       fontSize: 12,
       color:"#fff",
       "& p":{
          minWidth: "100%"
       },
       "& a":{
          margin: 15
       },
       "& svg":{
          fill: "#fff"
       }
    },


//success animation

   tick: {
      strokeOpacity: 0,
      strokeDasharray: 29,
      strokeDashoffset: 29,
      animation: `$draw 500ms cubic-bezier(.25, .25, .25, 1) forwards`,
      animationDelay: "1s"
  },

  circle: {
      fillOpacity: 0,
      stroke: "#007aff",
      strokeWidth: 16,
      transformOrigin: "center",
      transform: "scale(0)",
      animation: `$grow 1s cubic-bezier(.25, .25, .25, 1.25) forwards`,
      animationDelay: "600ms"
  },

"@keyframes grow": {
  "60%": {
      transform: "scale(.8)",
      strokeWidth: 4,
      fillOpacity: 0,
  },
  "100%": {
      transform: "scale(.9)",
      strokeWidth: 8,
      fillOpacity: 1,
      fill: "#07e387",
      stroke: "#07e387", 
  }
},

"@keyframes draw": {
  "0%, 100%": { strokeOpacity: 1 },
  "100%": { strokeDashoffset: 0 }
}
}) 