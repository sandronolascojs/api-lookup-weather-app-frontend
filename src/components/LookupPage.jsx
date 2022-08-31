import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import IpDataContainer from './IpData.jsx'
import './HomePage.css'
import { getLastLookups, ipLookup } from '../api/ip'
import { BarLoader } from 'react-spinners'
import MapView from './MapView.jsx'
import WeatherData from './WeatherData.jsx'
import Visitors from './Visitors.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function LookupPage() {
    const [handleIp, setHandleIp] = useState(null)
    const [ip, setIp] = useState('35.162.239.193')
    const [lookups, setLookups]= useState()
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)

    const navigate = useNavigate()

    function handleClick() {
        navigate('/')
    }

    function handleSubmit(e) {
        e.preventDefault()
        setIp(handleIp)
    }

    useEffect(() => {
        async function getData() {
            setLoading(true)
            const lookups = await getLastLookups()
            const data = await ipLookup(ip)
            setData(data.data[0])      
            setLookups(lookups.data)
            setLoading(false)
        }
        getData()
    }, [ip])

    return (
        <div className='data-container'>
            {loading ? <BarLoader /> : <>
            <div className='data-containter-title' >
                <p>Lookup an IP</p>
                <form className='form-iplookup' onSubmit={handleSubmit}>
                    <div className='input-container'>
                        <input className='lookupIp-input' type='text' onChange={e => setHandleIp(e.target.value)} placeholder='Enter IP Address...' />
                        <button className='form-iplookup-button' type='submit'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    </div> 
                    <small className='form-small'>Example: 35.162.239.193</small>                  
                </form>
            </div>
            <button className='data-container-lookup-button' onClick={handleClick}>Home</button>
            <div className='data-divisor'></div>
                <div className='data-container-main'>                                
                            {data === null ? null : <IpDataContainer 
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
                            />  }                       
                    <div className='data-container-weather'>
                            {data === null ? null : <WeatherData 
                            weather={data.weatherData.current.condition.text}
                            city={data.ipData.city}
                            country={data.ipData.country}
                            temperatureC={data.weatherData.current.temperature.temp_c}
                            temperatureF={data.weatherData.current.temperature.temp_f}
                            humidity={data.weatherData.current.humidity}
                            weatherIcon={data.weatherData.current.condition.icon}
                            />}
                        <div className='data-container-weather-googlemap'>                           
                            {data === null ? null : <MapView lat={data.ipData.coordinates.latitude} lng={data.ipData.coordinates.longitude}/>}
                        </div>
                    </div>                   
                </div>        
            <div className='container-visitor'>
                <label className='label-visitors'>Last IP lookups</label>
                <div className='container-visitors-main'>
                    {Array.isArray(lookups) ? lookups.map(lookup => {
                        return <Visitors 
                        key={lookup._id}
                        ip={lookup.ip} 
                        provider={lookup.provider} 
                        country={lookup.country} 
                        flagCountry={lookup.flagCountry}
                        />
                        }): null}
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

export default LookupPage