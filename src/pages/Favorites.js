import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import storageService from '../services/storageService'
import { WeatherContext } from '../contexts/WeatherContext'


export default function Favorites() {

    const [favorites, setFavorites] = useState([])
    const { weather, dispatch } = useContext(WeatherContext)
    const history = useHistory();

    async function getFavoriteFromStoage() {
        let favorites = await storageService.query(`favorites`)
        setFavorites(favorites)
    }

    useEffect(() => {
        getFavoriteFromStoage()
    }, [])


    function handleFavorite(favorite) {
        let forecast = favorite.data;
        let name= favorite.name
        history.push("/Coral-Solomon-22-10-2020")
        dispatch({ type: 'SET_WEATHEROFTHEWEEK', forecast })
        dispatch({ type: 'SET_NAME', name })

    }



    return (
        <React.Fragment>
            {favorites.length > 0 ? favorites.map(favorite =>
                <div key={favorite.name} className="favorites weather-preview flex column align-center space-between"
                    onClick={() => handleFavorite(favorite)}>
                    <img src={`https://developer.accuweather.com/sites/default/files/${(favorite.data[0].Day.Icon < 10) ? '0'
                        + favorite.data[0].Day.Icon : favorite.data[0].Day.Icon}-s.png`}></img>
                    <p>{favorite.name}</p>
                    <p>{favorite.data[0].Temperature.Minimum.Value}°-{favorite.data[0].Temperature.Maximum.Value}°</p>
                </div>
            ) : 'NO RESULTES'}
        </React.Fragment>)
}
