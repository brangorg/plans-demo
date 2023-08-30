// Path: src/App.js
import React, { useState } from "react";
import "./css/App.css";
import Header from "./Header";
import Plans from "./Plans";
import RevenueCalculator from "./RevenueCalculator";
import { plans } from "./resources/plan-types";

function App() {
  const [activePlan, setActivePlan] = useState(plans["solo"]);

  return (
    <div className="App">
      <Header />
      <Plans
        plan={activePlan}
        setPlan={(plan) => setActivePlan(plan)}
      />
      <hr/>
      <hr/>
      <hr/>
      <RevenueCalculator
        plan={activePlan}
        setPlan={(plan) => setActivePlan(plan)}
      />
    </div>
  );
}

export default App;
