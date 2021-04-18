export default theme => ({

loader:{
    position: 'fixed',
    top: 0,
    left:0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    backdropFilter: "blur(5px)",
    backgroundColor: "#fff",
    "& svg":{
        height: 70,
        width: 70
    }
},
    circle:{
        fill:"none",
        strokeWidth: 6,
        stroke: theme.palette.primary.main,
        strokeLinecap: "round",
        strokeMiterlimit:10,
        strokeDasharray: 314,
        strokeDashoffset: 314,
        animation: `$grow 1500ms forwards`,
    },
    dot:{
        fill:theme.palette.primary.main,
        opacity:0,
        stroke: theme.palette.primary.main,
        strokeLinecap: "round",
        strokeMiterlimit:10,
        animation: `$pulse 1s cubic-bezier(.25, .25, .25, 1.25) infinite`,
        animationDelay: "1500ms"
    },

    "@keyframes pulse": {
        "0%, 100%": { opacity: 1 },
        "40%": {
            strokeWidth: 4
        },
        "100%": {
            strokeWidth: 1
        }
      },

      "@keyframes grow": {
        "to":{
            strokeDashoffset:0
        }
      },
})