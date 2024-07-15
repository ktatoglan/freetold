import React from 'react'

function Sidebar() {
  return (
    <>
    <div className="sidebar-container">
        <div className="back">
            <a href="#" className="go-back">
            ← Back to results
            </a>
        </div>
        <div className="sidebar-menu">
            <ul>
                <li><a href="" className='active'>Overview</a></li>
                <li><a href="" className=''>Location</a></li>
                <li><a href="" className=''>Reviews</a></li>
                <li><a href="" className=''>EPC details</a></li>
                <li><a href="" className=''>Demographics</a></li>
                <li><a href="" className=''>Crime data</a></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Sidebar