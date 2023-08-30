// Path: src/Plan.js

import React from "react";
import "./css/Plan.css";


function Plan(props) {
  return (
    <div
      className={"plan" + (props.active ? " active" : "")}
      onClick={props.onClick}>
      <div className="plan-header">
        <h2 className="plan-title">{props.title}</h2>
        <p className="plan-description">{props.description}</p>
      </div>
      <div className="plan-body">
        <h3 className="plan-price">{props.priceTag}</h3>
        <ul className="plan-features">
          {props.features.map((feature) => (
            <li key={feature}><span className="plan-feature">{feature}</span></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Plan;
