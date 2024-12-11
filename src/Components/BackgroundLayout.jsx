import React, { useState, useEffect } from 'react'
import { useStateContext } from '../Context'
import Clear from '../assets/images/Clear.jpg'
import Fog from '../assets/images/Fog.jpg'
import Cloudy from '../assets/images/Cloudy.jpg'
import Rainy from '../assets/images/Rainy.jpg'
import Snow from '../assets/images/Snow.jpg'
import Stormy from '../assets/images/Stormy.jpg'
import Sunny from '../assets/images/Sunny.jpg'
import overcast from '../assets/images/overcast.jpg'
import PartiallyCloudy from '../assets/images/PartiallyCloudy.jpg'


const BackgroundLayout = () => {

  const {weather} = useStateContext()
  const [image, setImage] = useState(Clear)

  useEffect(() => {
    if(weather.conditions){
        let imageString = weather.conditions
        console.log('weather conditions',imageString)
        if(imageString.toLowerCase().includes("clear")){
            setImage(Clear)
        }else if(imageString.toLowerCase().includes('rain')){
            setImage(Rainy)
        }else if(imageString.toLowerCase().includes("Partially cloudy")){
            setImage(PartiallyCloudy)
        }else if(imageString.toLowerCase().includes("snow")){
            setImage(Snow)
        }else if(imageString.toLowerCase().includes("fog")){
            setImage(Fog)
        }else if(imageString.toLowerCase().includes("storm")){
            setImage(Stormy)
        }else if(imageString.toLowerCase().includes("sun")){
            setImage(Sunny)
        }
        else if(imageString.toLowerCase().includes("overcast")){
            setImage(overcast)
        }else if(imageString.toLowerCase().includes("cloud")){
            setImage(Cloudy)
        }
    }
  }, [weather])


  return (
    <img src={image} alt="weather_image" className='h-screen w-full fixed left-0 top-0 -z-[10]' />
  )
}

export default BackgroundLayout
