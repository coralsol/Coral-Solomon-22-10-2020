import React, { useState, useEffect, useContext } from 'react'
import Header from '../components/Header'
import WeatherList from '../components/WeatherList'

import { WeatherContext } from '../contexts/WeatherContext'

import WeatherService from '../services/WeatherService'
import storageService from '../services/storageService'


export default function Home() {
    const { weather,name,dispatch } = useContext(WeatherContext)

    async function goSearch(value) {
        let forecast;
        let weather = await storageService.query(`${value}WeatherOfTheWeek`)
        if (weather.length > 0) {
            forecast = weather[0]
        }
        else {
            forecast = await WeatherService.getWeatherOfTheWeek(value)
        }
        dispatch({ type: 'SET_WEATHEROFTHEWEEK', forecast })
    }


    useEffect(() => {
        goSearch(name)
    }, [])


    return (
        <React.Fragment>
            {weather.length > 0 ?
                <div className="home flex column flex1">
                    <Header curWeather={weather} goSearch={goSearch}  ></Header>
                    <WeatherList curWeather={weather}></WeatherList>
                </div> : ''}
        </React.Fragment>
    )
}
