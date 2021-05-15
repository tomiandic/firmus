export default (theme) => ({
  infoListContainer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    maxHeight: "80vh",
    zIndex: "1",
    background: "#fff",
    width: "100%",
    boxShadow: "0 0 25px -10px #b1b3bc",
    overflow: "auto",
    [theme.breakpoints.down("xs")]:{
      maxHeight: "60vh",
    }
  },
  infoContainerTitle: {
    margin: 0,
  },
  infoContainerTitleHolder: {
    position: "sticky",
    top: 0,
    width: "100%",
    background: "#fff",
    boxShadow: "0 0 10px -8px black",
    padding: 30,
    zIndex: 1,
    [theme.breakpoints.down("xs")]: {
      padding: "20px 15px",
    },
  },
  infoItem:{
    padding: "20px 30px",
    [theme.breakpoints.down("xs")]: {
      paddingTop: 15,
      paddingBottom: 15,
    },
  }
}); 
