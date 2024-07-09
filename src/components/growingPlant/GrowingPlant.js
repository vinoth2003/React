import React from "react";
import "./GrowingPlant.scss";

//Variable
// const PlantStyle = {
//   color: 'purple',
// };





//html code, js => {}
function GrowingPlant(props) {
//props - using it has a dynamic change and reusable

const name = {
  first:'viki',
  last:'P'
}
//Object destructure

const {first="Default",last,color='Red'} = name
console.log(first,last,color)




const defaultData = {
  name: "No name provided",
  icon: "No icon is provided",
  size: 30,
};

const {plants = defaultData} = props
//destructure and props into plants

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
