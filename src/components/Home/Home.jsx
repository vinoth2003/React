import React from 'react'
import GrowingPlant from '../growingPlant/GrowingPlant'

const plants1 = {
  name: "Rose",
  icon: "🌹",
  size: 40,
};
const plants2 = {
  name: "Sunflower",
  icon: "🌻",
  size: 40,
};


function Home() {
  return (
    <div>
        <h1>Home</h1>
        <GrowingPlant plants={plants1}/>
        <GrowingPlant plants={plants2}/>
        <GrowingPlant/>
    </div>
  )
}

export default Home