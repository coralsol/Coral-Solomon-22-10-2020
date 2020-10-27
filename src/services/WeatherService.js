import axios from 'axios';
import storageService from './storageService'


export default {
    getWeatherOfTheWeek,
    getWeatherOfTheDay,
    getAutoComplete
}

async function getWeatherOfTheWeek(location) {
    let { data } = await axios.get(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=MWtBxp2J0vWMapPa9OKaNck8mxGWosii&q=${location}`)
    let weather = await axios.get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${data[0]['Key']}?apikey=MWtBxp2J0vWMapPa9OKaNck8mxGWosii`)
    storageService.post(`${location}WeatherOfTheWeek`, weather.data.DailyForecasts)
    return weather.data.DailyForecasts || [];
}


async function getWeatherOfTheDay(location) {
    let { data } = await axios.get(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=MWtBxp2J0vWMapPa9OKaNck8mxGWosii&q=${location}`)
    let weather = await axios.get(`https://dataservice.accuweather.com/forecasts/v1/daily/1day/${data[0]['Key']}?apikey=MWtBxp2J0vWMapPa9OKaNck8mxGWosii`)
    storageService.post(`${location}WeatherOfTheDay`, weather.data.DailyForecasts)
    return weather.data.DailyForecasts || [];
}

async function getAutoComplete(location) {
    let { data } = await axios.get(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=MWtBxp2J0vWMapPa9OKaNck8mxGWosii&q=${location}`)
    return data
}