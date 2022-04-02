import React, { Fragment } from "react";
import LoginForm from "../../components/LoginForm";
import classes from "./Home.module.css";

function Home() {
  return (
    <div className={classes.root}>
      <h1 className={classes.maintext}>VTrade</h1>
      <LoginForm />
    </div>
  );
}

export default Home;
