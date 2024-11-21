import React from "react";
import Sidebar from "./Sidebar";
import UserInfo from "./UserInfo";
import UserReviews from "./UserReviews";
import SavedProperties from "./SavedProperties";

const UserProfile = () => {
  return (
    <>
      <section className="main">
        <aside className="sidebar hide-mbl">
          <Sidebar />
        </aside>
        <section className="content">
        <UserInfo />
          <div className="profile-desktop-menu hide-lg">
            <p className="my-reviews">
              <a className="active" href="#">My reviews</a>
            </p>
            <p className="fav-reviews">
              <a href="#">Favorite rewies</a>
            </p>
            <p className="fav-properties">
              <a href="#">Favorite property</a>
            </p>
          </div>

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
  );
};

export default UserProfile;
