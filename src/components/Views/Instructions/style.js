export default theme => ({

    instructionsContainer:{
        background: "#fff",
        height: "100vh",
        width: "100%",
        position: "fixed",
        top:0,
        left:0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& .swiper-pagination-bullet-active":{
            height: 10,
            width: 10
        },
        [theme.breakpoints.down('xs')]: {
            "& .swiper-button-next":{
                display: "none!important"
            },
            "& .swiper-button-prev":{
                display: "none!important"
            },
        }
    },
    slide:{
        minHeight: "100vh",
        display: "flex",
        [theme.breakpoints.down('xs')]: {
            flexDirection: "column",
        }
    },
    slideImage:{
        borderRadius: 20,
        minWidth: "40%",
        height: "80vh",
        margin: "7vh",
        [theme.breakpoints.down('xs')]: {
            height: "40vh",
            margin: "70px 20px 0 20px",
            background: "#F6F9FE",
            padding: 20
        }
    },
    slideContent:{
        padding: 80,
        paddingLeft: 20,
        fontSize: 15,
        lineHeight: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        [theme.breakpoints.down('xs')]: {
            padding: "0 20px",
            marginTop: 30,
            borderLeft: `5px solid ${theme.palette.primary.main}`
        }
    },
    instText:{
         color: theme.palette.text.main,
         marginBottom: 50,
         [theme.breakpoints.down('xs')]: {
            fontSize:14,
            lineHeight: "23px",
        }
    },
    instTitle:{

        [theme.breakpoints.down('xs')]: {
            fontSize: 25,
            marginTop: 5
        }
    },
    closeButton:{
        position: "absolute",
        top: 10,
        right: 10,
        zIndex: 10,
        [theme.breakpoints.down('xs')]: {
            top: 5
        }
    },
    swiperInner:{
        maxWidth: "1200px",
        position: "relative",
        [theme.breakpoints.down('xs')]: {
            width: "100%",
        }
    },
    arrowBack:{
        position: "absolute",
        left:0,
        top: "50%",
        zIndex: 10,
        cursor: "pointer",
        fill: theme.palette.primary.main
    },
    arrowForward:{
        position: "absolute",
        right:0,
        top: "50%",
        cursor: "pointer",
        zIndex: 10,
        fill: theme.palette.primary.main
    },

})