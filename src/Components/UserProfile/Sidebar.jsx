import React from 'react'

const Sidebar = () => {
  return (
    <div className='profile-side-menu'>
        <p className='my-reviews'><a href="#">My reviews</a></p>
        <p className='fav-reviews'><a href="#">Favorite rewies</a></p>
        <p className='fav-properties'><a href="#">Favorite property</a></p>

    </div>
  )
}

export default Sidebar