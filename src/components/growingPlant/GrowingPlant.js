import React from "react";
import "./GrowingPlant.scss";

//Variable
const PlantStyle = {
  color: 'purple',
};

//html code, js => {}
function GrowingPlant() {
  return (
    <div className="Plant">
      <div className="text">GrowingPlant
      {/* <div style={PlantStyle}>Hi</div> */}
      <div className="logo">Hi it is my Plant🌱</div>
    </div>
    </div>
  );
}

export default GrowingPlant;
