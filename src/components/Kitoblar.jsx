import React from 'react'
import './Kitoblar.css'
import Card from './Card'


function Kitoblar() {
  return (
    <>
      <div className="kitoblar">
        <div className="kitoblar-filter">
          <button>Badiiy adabiyot</button>
          <button>Tarixiy</button>
          <button>Sarguzasht</button>
          <button>Diniy-ma'rifiy</button>
        </div>

        <div className="kitoblar-api">
          <Card/>
        </div>
      </div>
      
    </>
  )
}

export default Kitoblar