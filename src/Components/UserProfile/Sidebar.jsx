import React from 'react'

const Sidebar = () => {
  return (
    <div className='profile-side-menu hide-mbl'>
        <p className='my-reviews'><a href="#user-reviews-section">My reviews</a></p>
        <p className='fav-reviews'><a href="#fav-reviews-section">Favourite Reviews</a></p>
        {/*<p className='fav-properties'><a href="#">Favorite property</a></p> */}

    </div>
  )
}

export default Sidebar