import React from "react";
import "./App.css";
import { createUseStyles } from "react-jss";
import AppContainer from "./components/AppContainer";
import { Route, Routes } from "react-router-dom";
import Timer from "./components/Timer";

const useStyles = createUseStyles(() => ({
  root: {
    width: "100%",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <AppContainer>
      <div>the app has loaded</div>
      <div className={classes.root}>
        <Routes>
          <Route path="/" element={<Timer />} />
          <Route path="/index.html" element={<Timer />} />
        </Routes>
      </div>
    </AppContainer>
  );
}

export default App;
