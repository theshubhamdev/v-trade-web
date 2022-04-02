import React from "react";
import classes from "./StockDetails.module.css";

function StockDetails(props) {
  return (
    <div className={classes.root}>
      <div className={classes.stockDetails}>
        <div className={classes.stockNameWithPill}>
          <h1 id="stockName" className={classes.stockName}>
            <span className={classes.stockCompanyName}>{props.name}</span> Share
            Price
          </h1>
          <div className={classes.codeSegment} id="code-segment">
            {props.eq}
          </div>
        </div>
        <div className={classes.stockPriceBlock}>
          <div className={classes.price}>
            <span className={classes.rupeeSymbol}>₹</span>
            <span id="price">{props.price}</span>
          </div>
          <div id="stats" className={classes.stats + " " + classes.positive}>
            {props.difference}
          </div>
          <div className={classes.disclaimer}>
            Disclaimer: Prices shown are not realtime
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockDetails;
