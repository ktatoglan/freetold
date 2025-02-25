import React from "react";
import axios from "axios";
import { useAppProvider } from "../../Contexts/AppContext";
import createStar from "../../Utils/createStar";

import { toast } from "react-toastify";


const getTenancyPeriodText = (tenancyPeriod) => {
  const { number, period } = JSON.parse(tenancyPeriod);
  const periodText = number === 1 ? period : period + "s";
  return `Stayed in this property for ${number} ${periodText}`;
};



const ReviewSingle = ({ review, type }) => {
  const { serverUrl, userId } = useAppProvider();

  const addFavouriteReview = async () => {

    try {
      const response = await axios.post(`${serverUrl}/addFavouriteReview/${userId}`, {
        reviewId: review.review_id
      });
      if (response.status === 200) {
        toast.success('Review added to favourites');
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const deleteMyReview = async (reviewId) => {
    try {
      const response = await axios.delete(`${serverUrl}/review/deleteReview/${reviewId}`);
      if (response.status === 200) {
        toast.success('Review deleted successfully');
        setTimeout(() => {
          //redirect to user profile
          window.location.href = "/user-profile";
        }, 2000);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  // function displayStars(score){
  //   let stars = [];
  //   for (let i = 0; i < Math.round(score); i++){
  //     stars.push(
  //       <div key={review.review_id + 's'+i}>
  //         <input type="radio" id={`cstar${i+1}`} name="rating" value={i+1} checked={true} onChange={()=>{}} readOnly/>
  //         <label className="checked-star" htmlFor={`star${i+1}`}></label>
  //       </div>
  //     );
  //   }
  //   for (let i = 0; i < 5 - Math.round(score); i++){
  //     stars.push(
  //       <div key={review.review_id + "u"+i}>
  //         <input type="radio" id={`star${i+1}`} name="rating" value={i+1} onChange={()=>{}} readOnly/>
  //         <label htmlFor={`star${i+1}`}></label>
  //       </div>
  //     );
  //   }
  //   return stars;
  // }

  return (
    <div className="review-single">
    <div className="user-info">
      {/* <div className="avatar-placeholder"></div> */}
      <div>
        <div className="user-duration">{getTenancyPeriodText(review.tenancy_period)}</div>
      </div>
      {type != 'fav-reviews' ?
        <button className="save-favorites"
          onClick={() => addFavouriteReview(review.review_id)}
        >
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.1 15.55L10 15.65L9.89 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 3 9.07 4.36H10.93C11.46 3 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55ZM14.5 0C12.76 0 11.09 0.81 10 2.08C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.41 0 5.5C0 9.27 3.4 12.36 8.55 17.03L10 18.35L11.45 17.03C16.6 12.36 20 9.27 20 5.5C20 2.41 17.58 0 14.5 0Z"
              fill="#919191"
            />
          </svg>
          Save to favorites
        </button>
        :
        <></>
      }

      { type == 'user-reviews' ?

        <div className="edit-del-buttons">
          {
            /*
            <p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.988 2.01196L21.988 5.01196L19.701 7.29996L16.701 4.29996L18.988 2.01196ZM8 16H11L18.287 8.71296L15.287 5.71296L8 13V16Z"
                  fill="#919191"
                />
                <path
                  d="M19 19H8.158C8.132 19 8.105 19.01 8.079 19.01C8.046 19.01 8.013 19.001 7.979 19H5V5H11.847L13.847 3H5C3.897 3 3 3.896 3 5V19C3 20.104 3.897 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V10.332L19 12.332V19Z"
                  fill="#919191"
                />
              </svg>
              Edit my Review
            </p>
            */
          }
          <button className="delete-review"
            onClick={() => deleteMyReview(review.review_id)}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.51875 25.0001C8.94375 25.0001 8.46375 24.8076 8.07875 24.4226C7.69292 24.0368 7.5 23.5563 7.5 22.9813L7.5 7.5001H6.25V6.2501L11.25 6.2501V5.2876L18.75 5.2876V6.2501L23.75 6.2501V7.5001H22.5L22.5 22.9813C22.5 23.5563 22.3075 24.0363 21.9225 24.4213C21.5367 24.8072 21.0563 25.0001 20.4813 25.0001L9.51875 25.0001ZM12.26 21.2501H13.51L13.51 10.0001H12.26L12.26 21.2501ZM16.49 21.2501H17.74V10.0001H16.49V21.2501Z"
                fill="#919191"
              />
            </svg>
            Delete my Review
          </button>
        </div>
        :
        <></>

      }

    </div>
    <div className="review-content">
      <div className="review-details">
        <h4 className="review-title">{review.review_headline}</h4>
        <div className="review-rating">
          <div className="stars">

            {createStar(review.review_score)}

            <span className="review-date">
              {new Date(review.move_in_date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>

          </div>
        </div>
        <div className="pros">
          <strong>Pros</strong>
          <p>{review.review_pros}</p>
        </div>
        <div className="cons">
          <strong>Cons</strong>
          <p>{review.review_cons}</p>
        </div>
        <div className="review-footer">
          {/*
            <div className="likes">
              <span className="like-icon">
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 8.1C19 7.62261 18.818 7.16477 18.4941 6.82721C18.1702 6.48964 17.7308 6.3 17.2727 6.3H11.8145L12.6436 2.187C12.6609 2.097 12.6695 1.998 12.6695 1.899C12.6695 1.53 12.5227 1.188 12.2895 0.945L11.3741 0L5.69136 5.922C5.37182 6.255 5.18182 6.705 5.18182 7.2V16.2C5.18182 16.6774 5.3638 17.1352 5.68772 17.4728C6.01165 17.8104 6.45099 18 6.90909 18H14.6818C15.3986 18 16.0118 17.55 16.2709 16.902L18.8791 10.557C18.9568 10.35 19 10.134 19 9.9V8.1ZM0 18H3.45455V7.2H0V18Z"
                    fill="#646464"
                  />
                </svg>
              </span>
              <span>{review.likes || 0} likes</span>
            </div>
          */}
          <a href={"/property-profile/review/" + review.review_id} className="full-review-link">
            Read full review
          </a>
        </div>
      </div>
      <div className="rating-review">
        <h4>Rating review</h4>
        <div className="rating-details">
          <div className="rating-item">
            <span className="icon heating-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.66 12.18C12.69 12.29 12.7 12.4 12.7 12.5C12.73 13.15 12.44 13.85 11.97 14.28C11.75 14.47 11.39 14.67 11.11 14.75C10.23 15.06 9.35 14.62 8.83 14.11C9.77 13.89 10.32 13.21 10.5 12.5C10.62 11.89 10.37 11.38 10.27 10.78C10.17 10.2 10.19 9.71 10.4 9.18C10.55 9.47 10.71 9.77 10.9 10C11.5 10.78 12.45 11.12 12.66 12.18ZM20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10ZM15.16 10.56L15.06 10.36C14.9 10 14.45 9.38 14.45 9.38C14.27 9.15 14.05 8.94 13.85 8.74C13.32 8.27 12.73 7.94 12.22 7.45C11.05 6.31 10.79 4.44 11.54 3C10.79 3.18 10.14 3.58 9.58 4.03C7.55 5.65 6.75 8.5 7.71 10.95C7.74 11.03 7.77 11.11 7.77 11.21C7.77 11.38 7.65 11.53 7.5 11.6C7.31 11.67 7.13 11.63 7 11.5C6.94499 11.4702 6.89983 11.425 6.87 11.37C6 10.26 5.84 8.66 6.43 7.39C5.12 8.45 4.41 10.24 4.5 11.92C4.56 12.31 4.6 12.7 4.74 13.09C4.85 13.56 5.06 14 5.3 14.44C6.14 15.78 7.61 16.75 9.19 16.94C10.87 17.15 12.67 16.85 13.96 15.7C15.4 14.4 15.9 12.33 15.16 10.56Z"
                  fill="#0A2446"
                />
              </svg>
            </span>
            <span>Heating</span>
            <span>{review.heat_up_level}</span>
          </div>
          <div className="rating-item">
            <span className="icon internet-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.36 12C14.44 11.34 14.5 10.68 14.5 10C14.5 9.32 14.44 8.66 14.36 8H17.74C17.9 8.64 18 9.31 18 10C18 10.69 17.9 11.36 17.74 12M12.59 17.56C13.19 16.45 13.65 15.25 13.97 14H16.92C15.9512 15.6683 14.4141 16.932 12.59 17.56ZM12.34 12H7.66C7.56 11.34 7.5 10.68 7.5 10C7.5 9.32 7.56 8.65 7.66 8H12.34C12.43 8.65 12.5 9.32 12.5 10C12.5 10.68 12.43 11.34 12.34 12ZM10 17.96C9.17 16.76 8.5 15.43 8.09 14H11.91C11.5 15.43 10.83 16.76 10 17.96ZM6 6H3.08C4.03886 4.32721 5.5748 3.06149 7.4 2.44C6.8 3.55 6.35 4.75 6 6ZM3.08 14H6C6.35 15.25 6.8 16.45 7.4 17.56C5.57862 16.9317 4.04485 15.6677 3.08 14ZM2.26 12C2.1 11.36 2 10.69 2 10C2 9.31 2.1 8.64 2.26 8H5.64C5.56 8.66 5.5 9.32 5.5 10C5.5 10.68 5.56 11.34 5.64 12M10 2.03C10.83 3.23 11.5 4.57 11.91 6H8.09C8.5 4.57 9.17 3.23 10 2.03ZM16.92 6H13.97C13.657 4.76146 13.1936 3.5659 12.59 2.44C14.43 3.07 15.96 4.34 16.92 6ZM10 0C4.47 0 0 4.5 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0Z"
                  fill="#0A2446"
                />
              </svg>
            </span>
            <span>Internet connection</span>
            <span>{review.internet_connection_level}</span>
          </div>
          <div className="rating-item">
            <span className="icon noise-icon">
              <svg
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.15848 9.93039C0.808755 9.34736 0.624023 8.68026 0.624023 8.00039C0.624023 7.32052 0.808755 6.65342 1.15848 6.07039C1.26602 5.89091 1.40992 5.73591 1.58093 5.61535C1.75195 5.4948 1.94629 5.41136 2.15148 5.37039L3.84448 5.03139C3.94544 5.0114 4.03651 4.95739 4.10248 4.87839L6.17048 2.39539C7.35248 0.975389 7.94448 0.266388 8.47148 0.457388C9.00048 0.648388 9.00048 1.57239 9.00048 3.42039V12.5824C9.00048 14.4294 9.00048 15.3524 8.47248 15.5444C7.94548 15.7344 7.35348 15.0254 6.17148 13.6064L4.10048 11.1224C4.03476 11.0436 3.94408 10.9896 3.84348 10.9694L2.15048 10.6304C1.94529 10.5894 1.75095 10.506 1.57993 10.3854C1.40892 10.2649 1.26602 10.1099 1.15848 9.93039Z"
                  fill="#0A2446"
                />
                <path
                  d="M11.5361 4.46475C12.4692 5.39774 12.9956 6.66172 13.0006 7.98119C13.0057 9.30066 12.489 10.5686 11.5631 11.5088M15.6571 2.34375C17.15 3.83642 17.9923 5.85864 18.0005 7.96969C18.0088 10.0807 17.1823 12.1095 15.7011 13.6138"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span>Noise level</span>
            <span>{review.noise_neighbors_level}</span>
          </div>
          <div className="rating-item">
            <span className="icon traffic-icon">
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V11C0 11.7956 0.316071 12.5587 0.87868 13.1213C1.44129 13.6839 2.20435 14 3 14L2 15V16H3L5 13.97L7 14V9H2V2H11V4H13V3C13 2.20435 12.6839 1.44129 12.1213 0.87868C11.5587 0.316071 10.7956 0 10 0ZM3 10C3.26522 10 3.51957 10.1054 3.70711 10.2929C3.89464 10.4804 4 10.7348 4 11C4 11.2652 3.89464 11.5196 3.70711 11.7071C3.51957 11.8946 3.26522 12 3 12C2.73478 12 2.48043 11.8946 2.29289 11.7071C2.10536 11.5196 2 11.2652 2 11C2 10.7348 2.10536 10.4804 2.29289 10.2929C2.48043 10.1054 2.73478 10 3 10ZM18.57 5.66C18.43 5.26 18.05 5 17.6 5H10.41C9.95 5 9.58 5.26 9.43 5.66L8 9.77V15.28C8 15.66 8.32 16 8.7 16H9.32C9.7 16 10 15.62 10 15.24V14H18V15.24C18 15.62 18.31 16 18.69 16H19.3C19.68 16 20 15.66 20 15.28V9.77L18.57 5.66ZM10.41 6H17.6L18.63 9H9.38L10.41 6ZM10 12C9.73478 12 9.48043 11.8946 9.29289 11.7071C9.10536 11.5196 9 11.2652 9 11C9 10.7348 9.10536 10.4804 9.29289 10.2929C9.48043 10.1054 9.73478 10 10 10C10.2652 10 10.5196 10.1054 10.7071 10.2929C10.8946 10.4804 11 10.7348 11 11C11 11.2652 10.8946 11.5196 10.7071 11.7071C10.5196 11.8946 10.2652 12 10 12ZM18 12C17.7348 12 17.4804 11.8946 17.2929 11.7071C17.1054 11.5196 17 11.2652 17 11C17 10.7348 17.1054 10.4804 17.2929 10.2929C17.4804 10.1054 17.7348 10 18 10C18.2652 10 18.5196 10.1054 18.7071 10.2929C18.8946 10.4804 19 10.7348 19 11C19 11.2652 18.8946 11.5196 18.7071 11.7071C18.5196 11.8946 18.2652 12 18 12Z"
                  fill="#0A2446"
                />
              </svg>
            </span>
            <span>Traffic</span>
            <span>{review.traffic_score}</span>
          </div>
          <div className="rating-item">
            <span className="icon owner-icon">
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z"
                  fill="#0A2446"
                />
              </svg>
            </span>
            <span>Owner's respond</span>
            <span>{review.owner_respond_score}</span>
          </div>
          <div className="rating-item">
            <span className="icon neighbors-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM5 7.5C5 7.10218 5.15804 6.72064 5.43934 6.43934C5.72064 6.15804 6.10218 6 6.5 6C6.89782 6 7.27936 6.15804 7.56066 6.43934C7.84196 6.72064 8 7.10218 8 7.5C8 7.89782 7.84196 8.27936 7.56066 8.56066C7.27936 8.84196 6.89782 9 6.5 9C6.10218 9 5.72064 8.84196 5.43934 8.56066C5.15804 8.27936 5 7.89782 5 7.5ZM14 14H6V12H14V14ZM13.5 9C13.1022 9 12.7206 8.84196 12.4393 8.56066C12.158 8.27936 12 7.89782 12 7.5C12 7.10218 12.158 6.72064 12.4393 6.43934C12.7206 6.15804 13.1022 6 13.5 6C13.8978 6 14.2794 6.15804 14.5607 6.43934C14.842 6.72064 15 7.10218 15 7.5C15 7.89782 14.842 8.27936 14.5607 8.56066C14.2794 8.84196 13.8978 9 13.5 9Z"
                  fill="#0A2446"
                />
              </svg>
            </span>
            <span>Neighbors</span>
            <span>{review.perception_neighbors_level}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}



export default ReviewSingle;
