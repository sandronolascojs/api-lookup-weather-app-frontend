import React from 'react'
import { useNavigate } from 'react-router-dom'
import './HomePage.css'

function PageNotFound() {

    const navigate = useNavigate()

    function handleClick() {
        navigate('/')
    }
  return (
    <div className='container'>
      <div className='error-container'>
              <p className='error-404'>Error <strong>404</strong></p>
              <p>Page not found</p>
              <div>
                  <p>Return</p>
              <button onClick={handleClick} className='data-container-lookup-button'>Home</button>
                  
              </div>
          </div>
    </div>
    
  )
}

export default PageNotFound