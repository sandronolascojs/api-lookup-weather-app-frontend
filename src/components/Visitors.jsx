import React from 'react'

function Visitors({ip, provider, country, flagCountry}) {
  return (
    <div className='container-visitors'>
                            <div className='container-visitors-data'>
                                        <p>IP: <strong>{ip}</strong></p>
                                        <p>Provider: <strong>{provider}</strong></p>
                                        <p>Country: <strong>{country}</strong><img className='data-flag' src={flagCountry} alt={country} /></p>
                            </div>                        
                            <div className='data-divisor'></div>
                        </div>
  )
}

export default Visitors