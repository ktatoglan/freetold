import React,{useState, useEffect} from "react";
import Sidebar from "./Sidebar";
import UserInfo from "./UserInfo";
import UserReviews from "./UserReviews";
import FavReviews from "./FavReviews";
import SavedProperties from "./SavedProperties";
import axios from "axios";
import { useAppProvider } from "../../Contexts/AppContext";

const UserProfile = () => {
  const [reviews, setReviews] = useState([]);
  const [favouriteReviews, setFavouriteReviews] = useState([]);
  const [user, setUser] = useState({});
  const { userId, serverUrl } = useAppProvider();
  useEffect(() => {
    axios
      .get(serverUrl + "/review/getReviewsByUserId/" + userId)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    //fetch router.get('/getUserById/:userId', userController.getUserById);
    axios.get(serverUrl + "/getUserById/" + userId)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.log(error);
      });


    axios
      .get(serverUrl + "/getFavouriteReviews/" + userId)
      .then((response) => {
        setFavouriteReviews(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [userId, serverUrl]);


  return (
    <>
      <section className="main">
        <aside className="sidebar hide-mbl">
          <Sidebar />
        </aside>
        <section className="content">
        <UserInfo user={user}/>
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

          <UserReviews reviews = {reviews} />
          <FavReviews reviews = {favouriteReviews} />

          <SavedProperties />
        </section>
      </section>
    </>
  );
};

export default UserProfile;
