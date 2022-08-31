import React from 'react'
import LookupPage from '../components/LookupPage'
import './Home.css'


function Lookup() {
    
    return (
    <div className='container'>
        <div>
            <span>IP Lookup</span>
            <p>Search an IP Address and get all the details 😎</p>
        </div>

        <div className='div-content'>
            <LookupPage />
        </div>
    </div>
)
}

export default Lookup