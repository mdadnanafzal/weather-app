import { useContext, createContext, useState, useEffect } from "react";

import axios from 'axios'

const StateContext = createContext()

export const StateContextProvider = ({children}) => {
    const [weather, setWeather] = useState({})
    const [values, setValues] = useState([])
    const [place, setPlace] = useState('Mumbai')
    const [location, setLocation] = useState('')
    
 
    //FETCH API
    const fetchWeather = async() => {
        const options = {
            method: 'GET',
            url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
            params: {
                contentType: 'json',
                unitGroup: 'metric',
                aggregateHours: '24',
                location: place,
                shortColumnNames: 'false'
            },

            headers: {
                'X-RapidAPI-Key' : import.meta.env.VITE_API_KEY,
                'X-RapidAPI-Host':'visual-crossing-weather.p.rapidapi.com'
            }
        }

        try {
            const response = await axios.request(options);
            console.log('response data',response.data);

            const thisData = response.data.locations[place];

            setLocation(thisData.address)
            setValues(thisData.values)
            setWeather(thisData.values[0])

        } catch (error) {
            console.log(error);
        }

    } 

    useEffect(() => {
        fetchWeather()
    }, [place])

    useEffect(() => {
        console.log('values',values)
    }, [values])

    return(
        
        <StateContext.Provider value={{
            weather,
            setPlace,
            values,
            location
        }}>

            {children}

        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)