import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import IpDataContainer from './IpData.jsx'
import './HomePage.css'
import { getLastVisitors, getUserIp} from '../api/ip'
import { BarLoader } from 'react-spinners'
import MapView from './MapView.jsx'
import WeatherData from './WeatherData.jsx'
import Visitors from './Visitors.jsx'

function HomePage() {
    const [data, setData] = useState()
    const [visitors, setVisitors]= useState()
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    function handleClick() {
        navigate('/lookup')
    }

    useEffect(() => {
        async function getData() {
            const data = await getUserIp()
            const visitors = await getLastVisitors()
            setData(data.data[0])        
            setVisitors(visitors.data)
            setLoading(false)
        }
        getData()
    }, [])

    return (
        <div className='data-container'>
            {loading ? <BarLoader /> : <>
            <div className='data-containter-title' >
                <p>This is your current IP</p>
                <label>{data.ipData.ip}</label>
            </div>
            <button className='data-container-lookup-button' onClick={handleClick}>Lookup another IP</button>
            <div className='data-divisor'></div>
                <div className='data-container-main'>                                
                            <IpDataContainer 
                            provider={data.ipData.provider} 
                            ipType={data.ipData.ipType} 
                            ip={data.ipData.ip}
                            type={data.ipData.companyType}
                            city={data.ipData.city}
                            postal={data.ipData.postal}
                            region={data.ipData.region}
                            country={data.ipData.country}
                            flagCountry={data.ipData.flagCountry}
                            continent={data.ipData.continent}
                            abuser={data.ipData.security.abuser === true ? 'true' : 'false'}
                            anonymous={data.ipData.security.anonymous === true ? 'true' : 'false'}
                            attacker={data.ipData.security.attacker === true ? 'true' : 'false'}
                            cloudProvider={data.ipData.security.cloudProvider === true ? 'true' : 'false'}
                            proxy={data.ipData.security.proxy === true ? 'true' : 'false'}
                            relay={data.ipData.security.relay === true ? 'true' : 'false'}
                            threat={data.ipData.security.threat === true ? 'true' : 'false'}
                            vpn={data.ipData.security.vpn === true ? 'true' : 'false'}
                            />                            
                    <div className='data-container-weather'>
                            <WeatherData 
                            weather={data.weatherData.current.condition.text}
                            city={data.ipData.city}
                            country={data.ipData.country}
                            temperatureC={data.weatherData.current.temperature.temp_c}
                            temperatureF={data.weatherData.current.temperature.temp_f}
                            humidity={data.weatherData.current.humidity}
                            weatherIcon={data.weatherData.current.condition.icon}
                            />
                        <div className='data-container-weather-googlemap'>                           
                            <MapView lat={data.ipData.coordinates.latitude} lng={data.ipData.coordinates.longitude}/>
                        </div>
                    </div>                   
                </div>        
            <div className='container-visitor'>
                <label className='label-visitors'>Last visitors</label>
                <div className='container-visitors-main'>
                {visitors.map(visitor => {
                    return <Visitors 
                    key={visitor._id}
                    ip={visitor.ip} 
                    provider={visitor.provider} 
                    country={visitor.country} 
                    flagCountry={visitor.flagCountry}
                    />
                    })}
                </div>       
            </div>
            <div className='footer-github'>
                <p>Made with ❤️ by <a href='https://github.com/sandronolascojs/' target='_blank' rel='noreferrer'>Sandro</a></p>
            </div>
            </>
            }
        </div>
    )
    }

export default HomePage