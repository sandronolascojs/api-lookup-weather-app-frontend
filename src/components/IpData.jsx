import React from 'react'

function ipData({provider, ipType, ip, type, city, postal, region, country, flagCountry, continent, abuser, anonymous, attacker, cloudProvider, proxy, relay, threat, vpn}) {
  return (
    <div className='data-container-ipdata'> 
                    <div className='data-container-ipdataInfo'>
                        <p>Provider: <strong>{provider}</strong></p>
                        <p>IP: ({ipType}) <strong>{ip}</strong></p>
                        <p>Type: <strong>{type}</strong></p>
                        <p>City: <strong>{city}</strong>{postal === null ? null : ` (${postal})`}</p>
                        <p>Region: <strong>{region}</strong></p>
                        <p>Country: <strong>{country}</strong><img className='data-flag' src={flagCountry} alt={country} /></p>
                        <p>Continent: <strong>{continent}</strong></p>
                    </div>
                        <div className='data-container-ipdata-security'>                            
                            <p>Abuser: <strong>{abuser}</strong></p>
                            <p>Anonymous: <strong>{anonymous}</strong></p>
                            <p>Attacker: <strong>{attacker}</strong></p>
                            <p>Cloud Provider: <strong>{cloudProvider}</strong></p>
                            <p>Proxy: <strong>{proxy}</strong></p>
                            <p>Relay: <strong>{relay}</strong></p>
                            <p>Threat: <strong>{threat}</strong></p>
                            <p>VPN: <strong>{vpn}</strong></p>
                        </div>                                  
    </div>
)
}

export default ipData