import React, { useState, useEffect,useContext } from 'react'
import { WeatherContext } from '../contexts/WeatherContext'

export default function WeatherPreview({ curWeatherPerDay }) {
    const [day, setDay] = useState()
    const minTemp = curWeatherPerDay.Temperature.Minimum.Value
    const maxTemp = curWeatherPerDay.Temperature.Maximum.Value

    const { degreesunits, dispatch } = useContext(WeatherContext)

    function dayToWord(day) {
        switch (day) {
            case 0:
                setDay("Sunday")
                break;
            case 1:
                setDay("Monday")
                break;
            case 2:
                setDay("Tuesday")
                break;
            case 3:
                setDay("Wednesday")
                break;
            case 4:
                setDay("Thursday")
                break;
            case 5:
                setDay("Friday")
                break;
            case 6:
                setDay("Saturday")
        }
    }

    useEffect(() => {
        dayToWord(new Date(Date.parse(curWeatherPerDay.Date)).getDay())

    }, [])

    return (
        <div className="weather-preview flex column align-center space-between">
            <img src={`https://developer.accuweather.com/sites/default/files/${(curWeatherPerDay.Day.Icon < 10) ? '0' + curWeatherPerDay.Day.Icon : curWeatherPerDay.Day.Icon}-s.png`}></img>
            <p>{day}</p>
            <p className="weather">
                {degreesunits === 'F' ? minTemp : Math.round((minTemp-32)*5/9)}°
                        - {degreesunits === 'F' ?maxTemp :Math.round((maxTemp-32)*5/9)}°</p>
        </div>
    )
}
