import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import blogImg from "../../assets/img/home-blog.png"; // Default blog image
import Loading from "../Blogs/Loading";
import { toast } from "react-toastify";

const BlogSection = () => {
  const navigate = useNavigate();
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          "https://blog.freetold.com/wp-json/custom/v1/get-latest-post"
        );
        setBlog(response.data);
        setLoading(false);
      } catch (err) {
        setError("Unable to fetch blog posts. Please try again later.");
        setLoading(false);
      }
    };

    fetchBlog();
  }, []);

  // Safely accessing blog data
  const blogSlug = blog?.slug || "default-slug";

  const handleNavigation = (e) => {

    //check if the click event is from the share button
    if(e.target.classList.contains("share")){
      return;
    }
    // Checking if blogSlug exists and is valid
    if (blogSlug) {
      navigate(`/blog/${blogSlug}`);
    } else {
      console.error("Blog slug is not available for navigation.");
    }
  };

  if (loading) {
    return <><Loading/></> // Loading state
  }

  if (error) {
    return <div>{error}</div>; // Error message
  }

  return (
    <section className="blog">
      <div className="container">
        <h3 className="title">Tips, guides & checklists in our blog</h3>
        <div className="blog-card hover-cursor" onClick={handleNavigation}>
          <div className="blog-header">
            <span className="category">
              <p>
                {blog &&
                  blog.categories_data.map((cat) => {
                    return cat["name"];
                  })}
              </p>
            </span>
            <span className="date">
              <p>
                {new Date(blog && blog["date_gmt"]).toLocaleDateString(
                  "en-US",
                  {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  }
                )}
              </p>
            </span>
          </div>
          <div className="blog-content-container">
            <div className="blog-content">
              <div className="blog-title" onClick={handleNavigation}>
                <h4>{blog?.title?.rendered || "Blog title not available"}</h4>
              </div>
              <div className="blog-subtitle" onClick={handleNavigation}>
                <p
                  dangerouslySetInnerHTML={{
                    __html:
                      blog?.excerpt?.rendered ||
                      "No description available for this blog post.",
                  }}
                ></p>
              </div>
              <div className="tags">
                {blog &&
                  blog.tags_data.map((tag, index) => (
                    <span key={index} className="tag">
                      #{tag["name"]}
                    </span>
                  ))}
              </div>
            </div>
            <div className="blog-img">
              <img src={blog?.featured_image || blogImg} alt="" />
            </div>
          </div>
          <div className="blog-footer">
            {/* <div className="like">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 8.1C22 7.62261 21.818 7.16477 21.4941 6.82721C21.1702 6.48964 20.7308 6.3 20.2727 6.3H14.8145L15.6436 2.187C15.6609 2.097 15.6695 1.998 15.6695 1.899C15.6695 1.53 15.5227 1.188 15.2895 0.945L14.3741 0L8.69136 5.922C8.37182 6.255 8.18182 6.705 8.18182 7.2V16.2C8.18182 16.6774 8.3638 17.1352 8.68772 17.4728C9.01165 17.8104 9.45099 18 9.90909 18H17.6818C18.3986 18 19.0118 17.55 19.2709 16.902L21.8791 10.557C21.9568 10.35 22 10.134 22 9.9V8.1ZM3 18H6.45455V7.2H3V18Z"
                  fill="#919191"
                />
              </svg>
              14
            </div>
            <div className="favourites">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"
                  fill="#919191"
                />
              </svg>
              2
            </div>
            <div className="comments">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 22C8.73478 22 8.48043 21.8946 8.29289 21.7071C8.10536 21.5196 8 21.2652 8 21V18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H20C20.5304 2 21.0391 2.21071 21.4142 2.58579C21.7893 2.96086 22 3.46957 22 4V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H13.9L10.2 21.71C10 21.9 9.75 22 9.5 22H9Z"
                  fill="#919191"
                />
              </svg>
              2
            </div> */}
            <div className="share" onClick={()=>{
              //copy the current URL to the clipboard
              navigator.clipboard.writeText(`${window.location.origin}/blog/${blogSlug}`);
              toast.success("Link copied to clipboard");
            }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.3361 3.22098L3.8731 8.70998C3.80569 8.7324 3.7467 8.7748 3.70397 8.83154C3.66123 8.88828 3.63677 8.95669 3.63384 9.02766C3.63091 9.09864 3.64965 9.16883 3.68756 9.2289C3.72547 9.28897 3.78077 9.33609 3.8461 9.36398L9.8961 11.957C9.9278 11.9707 9.96252 11.976 9.99687 11.9723C10.0312 11.9686 10.064 11.9561 10.0921 11.936L16.0231 7.69798C16.2071 7.56798 16.4331 7.79398 16.3031 7.97798L12.0651 13.909C12.0453 13.937 12.0331 13.9697 12.0296 14.0039C12.0261 14.038 12.0314 14.0725 12.0451 14.104L14.6371 20.154C14.6649 20.2193 14.7119 20.2747 14.7719 20.3127C14.832 20.3507 14.9021 20.3695 14.9731 20.3667C15.044 20.3639 15.1125 20.3395 15.1693 20.2969C15.2261 20.2543 15.2686 20.1953 15.2911 20.128L20.7801 3.66398C20.8008 3.60227 20.8038 3.53603 20.7889 3.47268C20.774 3.40934 20.7417 3.35141 20.6957 3.30539C20.6497 3.25938 20.5917 3.2271 20.5284 3.21219C20.4651 3.19728 20.3978 3.20033 20.3361 3.22098Z"
                  fill="#919191"
                />
              </svg>
              Share
            </div>
          </div>
        </div>
        <div className="more-blogs hover-cursor" onClick={()=>{navigate(`/blog`)}}>
          <p>Find out more useful posts in our blog</p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.87501 12C1.87501 11.7016 1.99354 11.4155 2.20452 11.2045C2.4155 10.9935 2.70164 10.875 3.00001 10.875L18.285 10.875L14.205 6.79501C14.0063 6.58175 13.8981 6.29968 13.9033 6.00823C13.9084 5.71678 14.0265 5.4387 14.2326 5.23258C14.4387 5.02646 14.7168 4.90839 15.0082 4.90325C15.2997 4.89811 15.5818 5.00629 15.795 5.20501L21.795 11.205C22.0057 11.416 22.124 11.7019 22.124 12C22.124 12.2981 22.0057 12.5841 21.795 12.795L15.795 18.795C15.5818 18.9937 15.2997 19.1019 15.0082 19.0968C14.7168 19.0916 14.4387 18.9736 14.2326 18.7674C14.0265 18.5613 13.9084 18.2832 13.9033 17.9918C13.8981 17.7003 14.0063 17.4183 14.205 17.205L18.285 13.125L3.00001 13.125C2.70164 13.125 2.4155 13.0065 2.20452 12.7955C1.99354 12.5845 1.87501 12.2984 1.87501 12Z"
              fill="#0A2446"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
