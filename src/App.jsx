import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./Style/root.css";
import { AppProvider } from "./Contexts/AppContext";
import WriteReview0 from "./Components/Header/Modal";
import WriteReview1 from "./Components/WriteReview/WriteReview1";
import WriteReview2 from "./Components/WriteReview/WriteReview2";
import WriteReview3 from "./Components/WriteReview/WriteReview3";
import WriteReview4 from "./Components/WriteReview/WriteReview4";
import WriteReview5 from "./Components/WriteReview/WriteReview5";
import PropertyProfile from "./Pages/PropertyProfile";
import ReviewProfile from "./Pages/ReviewProfile";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UserProfile from "./Pages/UserProfile";
import PropertyListing from "./Pages/PropertyListing";
import BlogsPage from "./Pages/Blogspage";
import BlogSingle from "./Components/Blogs/BlogSingle";
import MobileBlogPage from "./Pages/MobileBlogsPage";
import MobilePropertyProfile from "./Pages/MobilePropertyProfile";
import MobilePropertyListing from "./Pages/MobilePropertyListing";
import BlogSingleMobile from "./Components/Blogs/BlogSingleMobile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StaticPage from "./Pages/StaticPage";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.screen.width <= 768) {
      setIsMobile(true);
    }
  }, []);

  return (
    <AppProvider>
      <div className="main-content">
        <ToastContainer />
        {window.location.pathname.slice(1, 15) !== "write-a-review" ? (
          <Header />
        ) : (
          <></>
        )}
        <Router>
          {isMobile ? (
            <Routes>
              <Route path="/" exact element={<HomePage />} />
              <Route path="/home" exact element={<HomePage />} />
              <Route path="/login" exact element={<LoginPage />} />
              <Route path="/register" exact element={<RegisterPage />} />
              <Route
                path="/write-a-review-0"
                exact
                element={<WriteReview0 />}
              />
              <Route
                path="/write-a-review-1"
                exact
                element={<WriteReview1 />}
              />
              <Route
                path="/write-a-review-2"
                exact
                element={<WriteReview2 />}
              />
              <Route
                path="/write-a-review-3"
                exact
                element={<WriteReview3 />}
              />
              <Route
                path="/write-a-review-4"
                exact
                element={<WriteReview4 />}
              />
              <Route
                path="/write-a-review-5"
                exact
                element={<WriteReview5 />}
              />
              <Route
                path="/property-profile/"
                exact
                element={<PropertyProfile />}
              />
              <Route
                path="/property-profile/review/:reviewID"
                exact
                element={<ReviewProfile />}
              />
              <Route path="/user-profile/" exact element={<UserProfile />} />
              <Route
                path="/property-listing/"
                exact
                element={<MobilePropertyListing />}
              />
              <Route path="/blog/" exact element={<MobileBlogPage />} />
              <Route path="/blog/:slug" exact element={<BlogSingleMobile />} />
              <Route path="/page/:slug" exact element={<StaticPage />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/" exact element={<HomePage />} />
              <Route path="/home" exact element={<HomePage />} />
              <Route path="/login" exact element={<LoginPage />} />
              <Route path="/register" exact element={<RegisterPage />} />
              <Route
                path="/write-a-review-0"
                exact
                element={<WriteReview0 />}
              />
              <Route
                path="/write-a-review-1"
                exact
                element={<WriteReview1 />}
              />
              <Route
                path="/write-a-review-2"
                exact
                element={<WriteReview2 />}
              />
              <Route
                path="/write-a-review-3"
                exact
                element={<WriteReview3 />}
              />
              <Route
                path="/write-a-review-4"
                exact
                element={<WriteReview4 />}
              />
              <Route
                path="/write-a-review-5"
                exact
                element={<WriteReview5 />}
              />
              <Route
                path="/property-profile"
                exact
                element={<PropertyProfile />}
              />
              <Route
                path="/property-profile/review/:reviewID"
                exact
                element={<ReviewProfile />}
              />
              <Route path="/user-profile/" exact element={<UserProfile />} />
              <Route
                path="/property-listing/"
                exact
                element={<PropertyListing />}
              />
              <Route path="/blog/" exact element={<BlogsPage />} />
              <Route path="/blog/:slug" exact element={<BlogSingle />} />
              <Route path="/page/:slug" exact element={<StaticPage />} />
            </Routes>
          )}
        </Router>
        {window.location.pathname.slice(1, 15) !== "write-a-review" ? (
          <Footer />
        ) : (
          <></>
        )}
      </div>
    </AppProvider>
  );
}

export default App;
