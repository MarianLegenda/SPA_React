import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./components/Header";
import mainTheme from "./assets/las.jpg";
import Info1 from "./components/NextPage";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",

    backgroundImage: `url(${mainTheme})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // opacity: "70%",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Info1 />
    </div>
  );
}

export default App;
