// Path: src/RevenueCalculator.js

import React, { useMemo } from "react";
import "./css/RevenueCalculator.css";


function RevenueCalculator(props) {
  const [numResidents, setNumResidents] = React.useState(10);

  function revenueCalc(numResidents) {
    return props.plan.costPerUnit * numResidents
  }

  const revenue = useMemo(() => revenueCalc(numResidents, props.plan), [
    numResidents,
    props.plan,
  ]);

  return (
    <div className="revenue-calculator">
      <div className="header">
        <h1 className="header-title">Revenue Calculator</h1>
        <p className="header-description">
          Calculate your revenue based on the plan and number of beds.
        </p>
      </div>
      <div className="revenue-calculator--current-plan detail-section">
        <p>{props.plan.title} plan</p>
      </div>
      <div className="revenue-calculator-container">
        <div className="input-container detail-section">
          <label for="resident-input">{"Beds:\t"}</label>
          <input
            id="resident-input"
            type="number"
            value={numResidents}
            onChange={(e) => setNumResidents(e.target.value)}
          />
        </div>
        <div className="output-container revenue-section">
          <h2>${revenue}.00</h2>
        </div>
      </div>
    </div>
  );
}

export default RevenueCalculator;
