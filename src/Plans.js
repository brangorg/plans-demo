// Path: src/Plans.js
import React from "react";
import Plan from "./Plan";
import { plans } from "./resources/plan-types";
import "./css/Plans.css";


function Plans(props) {
  return (
    <div className="plans">
      <div className="header">
        <h1 className="header-title">Plans</h1>
        <p className="header-description">
          Choose the plan that works for you.
        </p>
      </div>
      <div className="plans-container">
        {Object.keys(plans).map((plan) => (
          <Plan
            key={plans[plan].title}
            title={plans[plan].title}
            priceTag={plans[plan].priceTag}
            costPerUnit={plans[plan].costPerUnit}
            features={plans[plan].features}
            onClick={() => props.setPlan(plans[plan])}
            active={props.plan.title === plans[plan].title}
          />
        ))}
      </div>
    </div>
  );
}

export default Plans;
