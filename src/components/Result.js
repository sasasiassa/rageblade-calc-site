import React from "react";
import "./Result.css";

const Result = (props) => {
  return (
    <div className="result">
      <div>
        <h5>DPS building crit: </h5>
        <p>{props.critDPS}</p>
      </div>
      <div>
        <h5>DPS building rageblade: </h5>
        <p>{props.ragebladeDPS}</p>
      </div>
      <div>
        <h5>DPS building onhit without rageblade: </h5>
        <p>{props.noRagebladeDPS}</p>
      </div>
    </div>
  );
};

export default Result;
