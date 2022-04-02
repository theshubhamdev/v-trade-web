import React from "react";
import classes from "./Stock.module.css";
import StockDetails from "./Components/StockDetails";

function StockScreen() {
  return (
    <div className={classes.root}>
      <StockDetails
        name="Tata Consultancy Serv Lt"
        eq="TCS EQ"
        price="37758.75"
        difference="+18.80(+0.50%)"
      />
    </div>
  );
}

export default StockScreen;
