import React, { useState, useEffect } from 'react'
import { useDate } from '../Utils/useDate'
import sun from '../assets/icons/sun.png'
import cloud from '../assets/icons/cloud.png'
import fog from '../assets/icons/fog.png'
import rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import windy from '../assets/icons/windy.png'
import Overcast from '../assets/icons/Overcast.png'
import PartlyCloudy from '../assets/icons/PartlyCloudy.png'
import '../index.css'

const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  heatIndex,
  iconString,
  conditions,
}) => {

  const [icon, setIcon] = useState(sun)
  const { time } = useDate()

  useEffect(() => {
    if (iconString) {
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
  }, [iconString]); 

  console.log('temp',temperature);


  return (
    <div className='w-[22rem] min-w-[22rem] h-[31rem] glassCard p-4 '>
      <div className='flex w-full justify-center, items-center gap-4 mt-12 mb-4'>
        <img src={icon} alt="weather_icon" style={{ width: '50px', height: '50px' }}/>
        <p className='text-5xl flex justify-center items-center'>{ temperature } <span className='font-bold text-5xl flex justify-center items-center'>&deg;C</span> </p>
        

      </div>
      <div className='font-bold text-center text-xl'>
        {place}
      </div>
      <div className='w-full justify-between items-center mt-4'>
        <p className='text-center p-2 font-bold'>Date:<span className='flex-1 text-center p-2 font-normal'>{new Date().toDateString()}</span></p>
        <p className='text-center p-2 font-bold'>Time:<span className='flex-1 text-center p-2 font-normal'>{time}</span></p>
      </div>
      <div className='w-full  flex justify-between item-center mt-4 gap-4'>
        <p className='flex-1 text-center p-2 font-bold  shadow rounded-lg ' style={{ borderWidth: '2px', borderColor: 'black' }}>Wind Speed <span className='font-normal block'>{windspeed}</span></p>
        <p className='flex-1 text-center p-2 font-bold rounded-lg ' style={{ borderWidth: '2px', borderColor: 'black' }}>Humidity <span className='font-normal block'>{ humidity }</span></p>
      </div>
      <div className='w-full p-3 mt-4 flex justify-between items-center'>
        <p className='font-semibold text-lg'>Heat Index</p>
        <p className='text-lg'>
          {heatIndex ? `${heatIndex}` : 'N/A'}
        </p>
      </div>
      <hr className='bg-slate-600'/>
      <div className='w-full p-4 flex justify-center items-center text-3xl font-semibold'>
        {conditions}
      </div>
    </div>
    
  )
}

export default WeatherCard
