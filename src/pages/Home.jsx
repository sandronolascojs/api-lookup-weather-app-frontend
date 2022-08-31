import React from 'react'
import HomePage from '../components/HomePage'
import './Home.css'


function Home() {
    
    return (
    <div className='container'>
        <div>
            <span>IP Lookup</span>
            <p>Check your IP info and the weather information in the same place 🙂</p>
        </div>

        <div className='div-content'>
            <HomePage />
        </div>
    </div>
)
}

export default Home