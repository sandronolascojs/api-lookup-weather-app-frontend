import React from 'react'

function WeatherData({weather, city, country, temperatureC, temperatureF, humidity, weatherIcon}) {
  return (
    <div className='data-container-weatherInfo'>
                            <div className='data-container-weatherData'>
                                <p>Weather: <strong>{weather}</strong></p> 
                                <p>City: <strong>{city}</strong></p>                             
                                <p>Country: <strong>{country}</strong></p>
                                <p>Temperature: <strong>{temperatureC}°C | {temperatureF}°F</strong></p> 
                                <p>Humidity: <strong>{humidity}</strong></p>                     
                            </div>
                            <div className='data-container-weatherInfo-img'>
                                <img src={weatherIcon}  alt={weather}/>
                            </div> 
                        </div>
  )
}

export default WeatherData