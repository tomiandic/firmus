export default (theme) => ({
    loginContainer:{
        display: "inline-block",
        width: "100%",
        verticalAlign: "top"
    },
    loginInfo:{
        background: "#03112d",
        width: "40%",
        minHeight: "100vh",
        color: "#fff",
        display: "inline-block",
        fill: theme.palette.primary.main,
        padding: "10vh 6vw",
        "& > h2":{
            fontSize: 30
        },
        "& > svg":{
            height: 45,
            marginBottom: 60,
            marginRight: "auto"
        }
    },
    loginIllustration:{
        width: "70%",
        marginTop: 40
    },
    loginContent:{
        display: "inline-block",
        width: "60%",
        float:"right",
        minHeight: "100vh"
    },
    loginContentInner:{
        width: "50%",
        margin: "auto",
        marginTop: 80
    },
    loginTitle:{
        fontSize: 40
    },
    loginContentTitle:{
        fontSize: 25
    },
    loginContentSubtitle:{
        color: "gray",
        marginTop: -10,
        marginBottom: 80
    },
    inputLabel: {
        marginBottom: 7,
        marginLeft: 4,
        fontSize: 11,
        fontWeight: 500,
        color: theme.palette.text.main,
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

})