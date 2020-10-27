import React from 'react'
import WeatherPreview from './WeatherPreview'

export default function WeatherList({curWeather}) {
    return (
        <div className="weather-list flex align-center justify-center">
            {curWeather.slice(1).map(curWeatherPerDay=>
            <WeatherPreview key={curWeatherPerDay.EpochDate} curWeatherPerDay={curWeatherPerDay}></WeatherPreview>)}
        </div>
    )
}
