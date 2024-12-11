import { useState } from 'react'
import './App.css'
import { useStateContext } from './Context'
import { BackgroundLayout, WeatherCard, MiniCard } from './Components'


function App() {
  const [input, setInput] = useState('')

  const [showAboutText, setShowAboutText] = useState(false);
  const {weather, location, values, setPlace} = useStateContext()
  // console.log('values in minicard',weather)

  const submitCity = () => {

    setPlace(input)
    setInput('')

  }

  const toggleAboutText = () => {
    setShowAboutText(!showAboutText); // Toggle show/hide about text
  };

  return (
    <div className='nav-wrapper1'>
      <nav className='nav-bar'>
        <div className='container'>
          <h1 className='titleName'>Weather App</h1>
          <button className='btn'>Home</button>
          <button className='btn' onClick={toggleAboutText}>About</button>
          <div className='search-container'>
            <span className='material-icons search-icon'>search</span>
            <input onKeyUp={(e) => {

              if(e.key === 'Enter'){
                submitCity()
              }

            }}
              type='search'
              className='search-bar'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Search City ...'
            /> 
          </div>
        </div>
      </nav>
      <BackgroundLayout></BackgroundLayout>
      <main className='section-1 w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center'>
        <WeatherCard
          place = {location}
          windspeed = {weather.wspd}
          temperature = {weather.temp}
          heatIndex = {weather.heatindex}
          humidity = {weather.humidity}
          iconString = {weather.conditions}
          conditions = {weather.conditions} 
        />
        <div className='flex justify-center gap-8 flex-wrap w-[50%]'>
        {
          values?.slice(1, 7).map((curr) => {
            return(
              <MiniCard
              key={curr.datetime}
              time={curr.datetime}
              temp={curr.temp}
              iconString={curr.conditions}
            />
            )
          })
        }
        </div>
      </main>
      {showAboutText && (
        <div className='about-text'>
          <p>This is a weather application which is built using React.</p>
          <p>The application uses visual crossing weather API to fetch the weather data.</p>
          <p>The application fetches the current weather as well as the temperature throughout the entire week.</p>
          <p className='font-bold'>Feel free to explore and check the weather!</p>
        </div>
      )}
    </div>
    
  )
}

export default App
