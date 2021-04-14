export default theme => ({

listItem:{
    color: theme.palette.text.light
    },
listItemActive:{
    color: theme.palette.text.main,
    fontWeight: 500
},
checkbox:{
    marginLeft: "auto",
    color: theme.palette.text.light
},
listItemLabel:{
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
}
})