import React from "react";

import "../styles/switch.css";

const Switch = ({ isChecked }) => {
  return (
    <div className="wrapper">
      <span>Monthly</span>
      <label className="switch">
        <input type="checkbox" onChange={(e) => isChecked(e.target.checked)} />
        <span className="slider round"></span>
      </label>
      <span>Anually</span>
    </div>
  );
};

export default Switch;
