import React, { useState, useEffect, useContext } from 'react'
import SearchImg from '../styles/imgs/search.png'
import WeatherService from '../services/WeatherService'
import storageService from '../services/storageService'

import BlackHeart from '../styles/imgs/blackHeart.png'
import RedHeart from '../styles/imgs/redHeart.png'
import { WeatherContext } from '../contexts/WeatherContext'

import Autumn from '../styles/imgs/autumn.jpg'
import Spring from '../styles/imgs/spring.jpg'
import Summer from '../styles/imgs/summer.jpg'
import Winter from '../styles/imgs/winter.jpg'


export default function Header({ curWeather, goSearch }) {
    const [appear, setAppear] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [favorite, setFavorite] = useState(false)
    const [autoComplete, setAutoComplete] = useState([])
    const [curImage, setCurImage] = useState('')

    const { name, degreesunits, dispatch } = useContext(WeatherContext)

    const minTemp = curWeather[0].Temperature.Minimum.Value
    const maxTemp = curWeather[0].Temperature.Maximum.Value

    async function onHandleChange(ev) {
        var english = /^[A-Za-z0-9]*$/;
        const { value } = ev.target
        if (english.test(value)) {
            setSearchValue(value.toLowerCase())
            if (value.length > 2) {
                let autoComplete = await WeatherService.getAutoComplete(value)
                setAutoComplete(autoComplete)
            }
        }

    }

    async function onAddFavorite() {
        setFavorite(!favorite)
        let favoriteCity = { name: searchValue, data: curWeather }
        let currentCity = await storageService.get(`favorites`, searchValue)
        if (currentCity) {
            storageService.remove('favorites', searchValue)
        } else {
            storageService.post('favorites', favoriteCity)
        }
    }


    function chooseFromAutoComplete(name) {
        setSearchValue(name)
        dispatch({ type: 'SET_NAME', name })
        setAutoComplete([])
    }


    async function checkIfFavorite() {
        let currentCity = await storageService.get(`favorites`, searchValue)
        if (currentCity) {
            setFavorite(true)
        } else {
            setFavorite(false)
        }
    }

    function setbackGroundImg() {
        let imgUrl;
        switch (true) {
            case curWeather[0].Temperature.Minimum.Value <= 50:
                imgUrl = Winter
                break;
            case (curWeather[0].Temperature.Minimum.Value > 50 && curWeather[0].Temperature.Minimum.Value <= 59):
                imgUrl = Spring
                break;
            case (curWeather[0].Temperature.Minimum.Value > 59 && curWeather[0].Temperature.Minimum.Value <= 77):
                imgUrl = Autumn
                break;
            case (curWeather[0].Temperature.Minimum.Value > 77):
                imgUrl = Summer
                break;
            default:
        }
        setCurImage(imgUrl)
    }


    useEffect(() => {
        checkIfFavorite()
    }, [])

    useEffect(() => {
        goSearch(name.toLowerCase())


    }, [name])

    useEffect(() => {
        setbackGroundImg()
    }, [curWeather])

    return (
        <div className="header flex column align-center justify-center"
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${curImage})` }}
        >
            <button className="heart" onClick={onAddFavorite}>
                <img src={favorite ? RedHeart : BlackHeart} />
            </button>

            <form className="search-form">
                <div className="search-line">
                    <img onClick={() => setAppear(!appear)} src={SearchImg}></img>
                    <input className=""
                        value={searchValue}
                        type='text' placeholder="Search location..."
                        onChange={onHandleChange}
                    ></input>
                </div>
                <div className="autoCompleteList flex column ">
                    {autoComplete.length > 0 ? autoComplete.map(city =>
                        <p key={city.Key} onClick={() =>
                            chooseFromAutoComplete(city.LocalizedName)

                        } >{city.LocalizedName}</p>
                    ) : ''}
                </div>
            </form>

            <img className="weather-icon"
                src={`https://developer.accuweather.com/sites/default/files/${(curWeather[0].Day.Icon < 10) ? '0' + curWeather[0].Day.Icon : curWeather[0].Day.Icon}-s.png`}></img>
            <p className="city">{name}</p>
            <p className="weather">
                {degreesunits === 'F' ? minTemp : Math.round((minTemp - 32) * 5 / 9)}°
                        - {degreesunits === 'F' ? maxTemp : Math.round((maxTemp - 32) * 5 / 9)}°</p>
        </div>
    )
}
