export default theme => ({

listItem:{
    borderRadius: 10,
    color: theme.palette.text.light,
    "&:hover":{
        background: theme.palette.background.light,
        cursor: "pointer"
    }
    },
listItemActive:{
    color: theme.palette.text.main,
    fontWeight: 500
},
checkbox:{
    marginLeft: "auto",
    color: theme.palette.text.light
},

})