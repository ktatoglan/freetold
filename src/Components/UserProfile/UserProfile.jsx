import React from 'react'
import Sidebar from './Sidebar'
import UserInfo from './UserInfo'
import UserReviews from './UserReviews'
import SavedProperties from './SavedProperties'

const UserProfile = () => {
  return (
    <>
    <section className="main">
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <section className="content">
        <UserInfo />
        <UserReviews />
        {/* silinecek */}
        <br />
        <br />
        <br />
        {/*  */}
        <SavedProperties />

      </section>
    </section>
    </>
  )
}

export default UserProfile