import React from 'react'
import GrowingPlant from '../growingPlant/GrowingPlant'

const plants1 = {
  name: "Rose",
  icon: "🌹",
  size: 40,
  aboutMe:[
    "Love pandrava ellam use pannuva  ",
    "Simble of love  ",
    "Beautiful type of flower  "
  ]
};
const plants2 = {
  name: "Sunflower",
  icon: "🌻",
  size: 40,
  aboutMe:[
    "Ennai ku use pannuvanga  ",
    "Simble of Oil  ",
    "Beautiful type of oil"
  ]
};


function Home() {
  return (
    <div>
        <h1>Welcome to GrowingPlant</h1>
        <GrowingPlant plants={plants1}/>
        <GrowingPlant plants={plants2}/>
        {/* <GrowingPlant/> */}
    </div>
  )
}

export default Home