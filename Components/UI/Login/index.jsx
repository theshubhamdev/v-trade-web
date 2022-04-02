import React from "react";
import classes from "./Login.module.css";

function Login() {
  return (
    <div className={classes.root}>
      <label>Email</label>
      <input type="email" />
      <br />
      <br />
      <label htmlFor="Password">Password</label>
      <input type="password" />
    </div>
  );
}

export default Login;
