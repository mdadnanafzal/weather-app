import React, { useState, useEffect } from 'react'

import sun from '../assets/icons/sun.png'
import cloud from '../assets/icons/cloud.png'
import fog from '../assets/icons/fog.png'
import rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import windy from '../assets/icons/windy.png'

const MiniCard = ({time, temp, iconString}) => {

  const [icon, setIcon] = useState()
  console.log('minicard weather icon',iconString)

  useEffect(() => {

    if(iconString){
      if (iconString.toLowerCase().includes('clear')) {
        setIcon(sun);
      } else if (iconString.toLowerCase().includes('cloud')) {
        setIcon(cloud);
      } else if (iconString.toLowerCase().includes('rain')) {
        setIcon(rain);
      } else if(iconString.toLowerCase().includes("Partially cloudy")){
        setIcon(PartlyCloudy)
      }else if (iconString.toLowerCase().includes('snow')) {
        setIcon(snow);
      } else if (iconString.toLowerCase().includes('fog')) {
        setIcon(fog);
      } else if (iconString.toLowerCase().includes('storm')) {
        setIcon(storm);
      } else if (iconString.toLowerCase().includes('wind')) {
        setIcon(windy);
      }else if(iconString.toLowerCase().includes("overcast")){
        setIcon(Overcast)
      }
    }

  }, [iconString])

  return (
    <div className='glassCard w-[10rem] h-[10rem] p-4 flex flex-col'>
      <p className='text-center'>
        {new Date(time).toLocaleDateString('en', {weekday: 'long'})}
      </p>
      <hr />
      <div className='w-full flex justify-center items-center flex-1'>
        <img src={icon} alt="weather" className='w-[4rem] h-[4rem]'/>
      </div>
      <p className='text-center font-bold'>{ temp }&deg;C</p>
    </div>
  )
}

export default MiniCard
