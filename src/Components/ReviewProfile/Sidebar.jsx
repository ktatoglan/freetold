import React from "react";
import createStar from "../../Utils/createStar.jsx";


const Sidebar = ({ review }) => {


  return (
    <div className="review-sidebar">
      <div className="cost">
        <h4>How much it costs to live here</h4>
        <div className="cost-item rent">
          <span className="label">Monthly rent</span>
          {review.is_it_sharing_flat ? (
            <span>
              Per person / {review.people_number_leaving_at_home} people staying
              there
            </span>
          ) : (
            <span>Per whole household</span>
          )}
          <span className="value">{parseInt(review.rent_amount)} £</span>
        </div>
        <div className="cost-item bills-title">
          <span className="label">Monthly bills breakdown</span>{" "}
          <span>
            {review.bills_per_person ? "Per person" : "Per whole household"}
          </span>
        </div>
        <div className="cost-item">
          <span className="label">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 20L16.36 10.27H13V4L8 13.73H11.5V20ZM12 2C14.75 2 17.1 3 19.05 4.95C21 6.9 22 9.25 22 12C22 14.75 21 17.1 19.05 19.05C17.1 21 14.75 22 12 22C9.25 22 6.9 21 4.95 19.05C3 17.1 2 14.75 2 12C2 9.25 3 6.9 4.95 4.95C6.9 3 9.25 2 12 2Z"
                fill="#0A2446"
              />
            </svg>
            Electricity
          </span>{" "}
          <span className="value">{review.electric_bill} £</span>
        </div>
        <div className="cost-item">
          <span className="label">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.66 14.18C14.69 14.29 14.7 14.4 14.7 14.5C14.73 15.15 14.44 15.85 13.97 16.28C13.75 16.47 13.39 16.67 13.11 16.75C12.23 17.06 11.35 16.62 10.83 16.11C11.77 15.89 12.32 15.21 12.5 14.5C12.62 13.89 12.37 13.38 12.27 12.78C12.17 12.2 12.19 11.71 12.4 11.18C12.55 11.47 12.71 11.77 12.9 12C13.5 12.78 14.45 13.12 14.66 14.18ZM22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM17.16 12.56L17.06 12.36C16.9 12 16.45 11.38 16.45 11.38C16.27 11.15 16.05 10.94 15.85 10.74C15.32 10.27 14.73 9.94 14.22 9.45C13.05 8.31 12.79 6.44 13.54 5C12.79 5.18 12.14 5.58 11.58 6.03C9.55 7.65 8.75 10.5 9.71 12.95C9.74 13.03 9.77 13.11 9.77 13.21C9.77 13.38 9.65 13.53 9.5 13.6C9.31 13.67 9.13 13.63 9 13.5C8.94499 13.4702 8.89983 13.425 8.87 13.37C8 12.26 7.84 10.66 8.43 9.39C7.12 10.45 6.41 12.24 6.5 13.92C6.56 14.31 6.6 14.7 6.74 15.09C6.85 15.56 7.06 16 7.3 16.44C8.14 17.78 9.61 18.75 11.19 18.94C12.87 19.15 14.67 18.85 15.96 17.7C17.4 16.4 17.9 14.33 17.16 12.56Z"
                fill="#0A2446"
              />
            </svg>
            Gas
          </span>{" "}
          <span className="value">{review.gas_bill} £</span>
        </div>
        <div className="cost-item">
          <span className="label">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.4275 2.81823C12.3747 2.75656 12.3092 2.70705 12.2354 2.6731C12.1617 2.63916 12.0814 2.62158 12.0002 2.62158C11.919 2.62158 11.8388 2.63916 11.7651 2.6731C11.6913 2.70705 11.6258 2.75656 11.573 2.81823C10.0889 4.55401 5.25 10.5549 5.25 15.0001C5.25 19.1424 7.85812 21.7501 12 21.7501C16.1419 21.7501 18.75 19.1424 18.75 15.0001C18.75 10.5549 13.9111 4.55401 12.4275 2.81823ZM12.75 19.3126C12.6599 19.3128 12.5711 19.2914 12.491 19.2501C12.4109 19.2088 12.3419 19.1489 12.2898 19.0754C12.2377 19.0019 12.2041 18.9169 12.1916 18.8277C12.1792 18.7385 12.1884 18.6475 12.2184 18.5626C12.2568 18.4518 12.3291 18.3559 12.4252 18.2885C12.5212 18.2212 12.636 18.1859 12.7533 18.1876C13.4978 18.186 14.2114 17.8895 14.7379 17.363C15.2644 16.8365 15.5609 16.1229 15.5625 15.3784C15.5608 15.2611 15.5961 15.1463 15.6634 15.0503C15.7308 14.9542 15.8267 14.8819 15.9375 14.8435C16.0224 14.8135 16.1134 14.8043 16.2026 14.8167C16.2918 14.8292 16.3768 14.8628 16.4503 14.9149C16.5238 14.967 16.5837 15.036 16.625 15.1161C16.6663 15.1962 16.6877 15.285 16.6875 15.3751C16.6864 16.419 16.2712 17.4199 15.533 18.1581C14.7948 18.8963 13.7939 19.3115 12.75 19.3126Z"
                fill="#0A2446"
              />
            </svg>
            Water
          </span>{" "}
          <span className="value">{review.water_bill} £</span>
        </div>
        <div className="cost-item">
          <span className="label">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14M14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.9512 17.6683 16.4141 18.932 14.59 19.56ZM14.34 14H9.66C9.56 13.34 9.5 12.68 9.5 12C9.5 11.32 9.56 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM12 19.96C11.17 18.76 10.5 17.43 10.09 16H13.91C13.5 17.43 12.83 18.76 12 19.96ZM8 8H5.08C6.03886 6.32721 7.5748 5.06149 9.4 4.44C8.8 5.55 8.35 6.75 8 8ZM5.08 16H8C8.35 17.25 8.8 18.45 9.4 19.56C7.57862 18.9317 6.04485 17.6677 5.08 16ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14M12 4.03C12.83 5.23 13.5 6.57 13.91 8H10.09C10.5 6.57 11.17 5.23 12 4.03ZM18.92 8H15.97C15.657 6.76146 15.1936 5.5659 14.59 4.44C16.43 5.07 17.96 6.34 18.92 8ZM12 2C6.47 2 2 6.5 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
                fill="#0A2446"
              />
            </svg>
            Internet
          </span>{" "}
          <span className="value">{review.internet_bill} £</span>
        </div>
      </div>
      <div className="rating">
        <h4>Rating review</h4>
        <div className="items-title">
          <p className="title">Inside the property</p>
        </div>
        <div className="rating-item">
          <span className="label">Heating</span>{" "}
          <span className="stars">{createStar(review.heat_up_level)}</span>
        </div>
        <div className="rating-item">
          <span className="label">Lighting</span>{" "}
          <span className="stars">{createStar(review.well_lit_level)}</span>
        </div>
        <div className="rating-item">
          <span className="label">Internet connection</span>{" "}
          <span className="stars">
            {createStar(review.internet_connection_level)}
          </span>
        </div>
        <div className="items-title">
          <p className="title">Around the neigborhood</p>
        </div>
        <div className="rating-item">
          <span className="label">Noise level</span>{" "}
          <span className="stars">
            {createStar(review.noise_neighbors_level)}
          </span>
        </div>
        <div className="rating-item">
          <span className="label">Parking</span>{" "}
          <span className="stars">{createStar(review.parking_score)}</span>
        </div>
        <div className="rating-item">
          <span className="label">Traffic</span>{" "}
          <span className="stars">{createStar(review.traffic_score)}</span>
        </div>
        <div className="rating-item">
          <span className="label">Neighbors</span>{" "}
          <span className="stars">
            {createStar(review.perception_neighbors_level)}
          </span>
        </div>
        <div className="items-title">
          <p className="title">Last but not least</p>
        </div>
        <div className="rating-item">
          <span className="label">Owner's respond</span>{" "}
          <span className="stars">
            {createStar(review.owner_respond_score)}
          </span>
        </div>
        <div className="rating-item pet-friendly">
          <span className="label">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.34991 3.90323C9.52991 3.73323 10.7799 5.02323 11.1399 6.80323C11.4999 8.57323 10.8499 10.1532 9.66991 10.3332C8.49991 10.5132 7.23991 9.22323 6.86991 7.44323C6.49991 5.67323 7.16991 4.09323 8.34991 3.90323ZM15.4999 3.90323C16.6899 4.09323 17.3499 5.67323 16.9999 7.44323C16.6199 9.22323 15.3699 10.5132 14.1899 10.3332C12.9999 10.1532 12.3499 8.57323 12.7199 6.80323C13.0799 5.02323 14.3299 3.73323 15.4999 3.90323ZM2.99991 8.50323C4.13991 8.01323 5.68991 8.90323 6.49991 10.4532C7.25991 12.0332 6.99991 13.6932 5.86991 14.1832C4.73991 14.6732 3.19991 13.7932 2.40991 12.2232C1.61991 10.6532 1.89991 8.98323 2.99991 8.50323ZM20.9999 8.50323C22.0999 8.98323 22.3799 10.6532 21.5899 12.2232C20.7999 13.7932 19.2599 14.6732 18.1299 14.1832C16.9999 13.6932 16.7399 12.0332 17.4999 10.4532C18.3099 8.90323 19.8599 8.01323 20.9999 8.50323ZM19.3299 19.2832C19.3699 20.2232 18.6499 21.2632 17.7899 21.6532C15.9999 22.4732 13.8799 20.7732 11.8899 20.7732C9.89991 20.7732 7.75991 22.5432 5.99991 21.6532C4.99991 21.1632 4.30991 19.8632 4.43991 18.7832C4.61991 17.2932 6.40991 16.4932 7.46991 15.4032C8.87991 13.9932 9.87991 11.3432 11.8899 11.3432C13.8899 11.3432 14.9499 13.9532 16.2999 15.4032C17.4099 16.6232 19.2599 17.6532 19.3299 19.2832Z"
                fill="#0A2446"
              />
            </svg>
            Pet-friendly
          </span>{" "}
          <span className="value">
            {review.is_it_pet_friendly ? "Yes" : "No"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
