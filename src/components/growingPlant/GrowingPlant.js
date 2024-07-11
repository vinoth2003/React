import React, { useState, useEffect } from "react";
import "./GrowingPlant.scss";


//Variable
// const PlantStyle = {
//   color: 'purple',
// };

//React lifecycle : mount,update,unmount

const defaultData = {
  name: "No name provided",
  icon: "No icon is provided",
  size: 30,
};

// const Hi = () =>{
//   useEffect(()=>{
//     console.log("Hi Component")
//     return ()=> console.log("component unmount")
//   },[])
//   return <div>test</div>
// }
//html code, js => {}
function GrowingPlant({ plants = defaultData }) {
  // const { plants = defaultData } = props;
  //destructure and props into plants
  let { name, icon, size, aboutMe } = plants;



  const [dynamicSize, setdynamicSize] = useState(size); //rerender, UI change
  //useeffect(function,array of dependency)
  // const [displayHi, setdisplayHi] = useState(true)
  useEffect(() => {
    console.log("My code"); //does not change
  }, []);
  //it has a dependency
  useEffect(() => {
    const Interval = setInterval(() => {
      if (dynamicSize < 140) setdynamicSize(dynamicSize + 20);
    }, 1000);
    return () => clearInterval(Interval);
  }, [dynamicSize]);

  const grow = () => {
    setdynamicSize(dynamicSize + 20);
  };

  //props - using it has a dynamic change and reusable

  // const name = {
  //   first:'viki',
  //   last:'P'
  // }
  //Object destructure

  // const {first="Default",last,color='Red'} = name
  // console.log(first,last,color)

  return (
    <div className="Plant">
      <div>I am a{name},I am growing</div>
      <div>
        <span style={{ fontSize: `${dynamicSize}px` }}>{icon}</span>
        {name === "Rose" ? <span>⭐</span> : ""}
      </div>
      <button onClick={grow}>Give Water</button>
      {aboutMe.map((data, index) => (
        <div key={index}>
          {index + 1}.{data}
        </div>
      ))}
    </div>
  );
}

export default GrowingPlant;
