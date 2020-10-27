import React, { createContext, useReducer } from 'react'
import WeatherReducer from '../reducers/WeatherReducer'

export const WeatherContext = createContext()

const WeatherContextProvider = (props) => {
    const [{ weather, name, degreesunits }, dispatch] = useReducer(WeatherReducer, { weather: [], name:'tel aviv', degreesunits: 'C' })
    return (
        <WeatherContext.Provider value={{ weather, name, degreesunits, dispatch }}>
            {props.children}
        </WeatherContext.Provider>
    )
}


export default WeatherContextProvider
