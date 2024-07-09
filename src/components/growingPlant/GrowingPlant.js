import React from "react";
import "./GrowingPlant.scss";

//Variable
// const PlantStyle = {
//   color: 'purple',
// };

// const PlantName = "Sunflower";
// const size = 24;

const plants = {
  name: "Rose",
  icon: "🌹",
  size: 30,
};

//html code, js => {}
function GrowingPlant() {
  return (
    <div className="Plant">
      <div className="text">
        GrowingPlant
        {/* <div style={PlantStyle}>Hi</div> */}
        <div>
          Hi it is my Plant
          <span style={{ fontSize: `${plants.size}px` }}>{plants.icon}</span>
        </div>
        <div>Plant name is {plants.name}</div>
      </div>
    </div>
  );
}

export default GrowingPlant;
