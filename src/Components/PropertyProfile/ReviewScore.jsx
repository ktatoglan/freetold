import React,{useEffect, useState} from "react";

function ReviewScore({reviews}) {
  const [reviewScore, setReviewScore] = useState('-');
  const [Heating, setHeating] = useState('-');
  const [Litting, setLitting] = useState('-');
  const [InternetConnection, setInternetConnection] = useState('-');
  const [PetFriendly, setPetFriendly] = useState('No');
  const [NoiseLevel, setNoiseLevel] = useState('-');
  const [Traffic, setTraffic] = useState('-');
  const [Parking, setParking] = useState('-');
  const [Neighbors, setNeighbors] = useState('-');
  const [fiveStar, setFiveStar] = useState(0);
  const [fourStar, setFourStar] = useState(0);
  const [threeStar, setThreeStar] = useState(0);
  const [twoStar, setTwoStar] = useState(0);
  const [oneStar, setOneStar] = useState(0);

  useEffect(() => {
    //is_it_pet_friendly
    reviews.map((review) => {
      if (review.is_it_pet_friendly == true) {
        setPetFriendly('Yes');
      }
    });
    //heating
    let totalHeating = 0;
    reviews.map((review) => {
      totalHeating += review.heat_up_level;
    });
    setHeating((totalHeating / reviews.length).toFixed(1));
    //litting
    let totalLitting = 0;
    reviews.map((review) => {
      totalLitting += review.well_lit_level;
    });
    setLitting((totalLitting / reviews.length).toFixed(1));

    //internet connection
    let totalInternetConnection = 0;
    reviews.map((review) => {
      totalInternetConnection += review.internet_connection_level;
    });
    setInternetConnection((totalInternetConnection / reviews.length).toFixed(1));

    //noise level
    let totalNoiseLevel = 0;
    reviews.map((review) => {
      totalNoiseLevel += review.noise_neighbors_level;
    });
    setNoiseLevel((totalNoiseLevel / reviews.length).toFixed(1));
    //traffic
    let totalTraffic = 0;
    reviews.map((review) => {
      totalTraffic += review.traffic_score;
    });
    setTraffic((totalTraffic / reviews.length).toFixed(1));
    //parking
    let totalParking = 0;
    reviews.map((review) => {
      totalParking += review.parking_score;
    });
    setParking((totalParking / reviews.length).toFixed(1));
    //neighbors
    let totalNeighbors = 0;
    reviews.map((review) => {
      totalNeighbors += review.owner_respond_score;//To be changed neighbors_score
    });
    setNeighbors((totalNeighbors / reviews.length).toFixed(1));
    //review score
    let totalReviewScore = 0;
    reviews.map((review) => {
      totalReviewScore += review.review_score;
    });
    setReviewScore((totalReviewScore / reviews.length).toFixed(1));

    //review distribution
    let totalFiveStar = 0;
    let totalFourStar = 0;
    let totalThreeStar = 0;
    let totalTwoStar = 0;
    let totalOneStar = 0;
    reviews.map((review) => {
      if (review.review_score == 5) {
        totalFiveStar += 1;
      } else if (review.review_score == 4) {
        totalFourStar += 1;
      } else if (review.review_score == 3) {
        totalThreeStar += 1;
      } else if (review.review_score == 2) {
        totalTwoStar += 1;
      } else if (review.review_score == 1) {
        totalOneStar += 1;
      }
    });
    setFiveStar(totalFiveStar);
    setFourStar(totalFourStar);
    setThreeStar(totalThreeStar);
    setTwoStar(totalTwoStar);
    setOneStar(totalOneStar);
  }, [reviews]);
  return (
    <div className="review-score">
      <h4>Review Score</h4>
      <p className="based-on">Based on {reviews.length} reviews</p>
      <div className="review-summary">
        <div className="overall-rating">
          <div className="overall-title-container">
            <p className="overall-title">Overall rating</p>
          </div>
          <div className="overall-values">
            <div className="rating-value">{reviewScore}</div>
            <div className="rating-details">
              <p className="details-title">Reviews distribution</p>
              <div className="distribution">
                <div>
                  <progress id="review1" value={fiveStar/reviews.length * 100} max="100"></progress> {fiveStar}
                </div>
                <div>
                  <progress id="review2" value={fourStar/reviews.length * 100} max="100"></progress> {fourStar}
                </div>
                <div>
                  <progress id="review3" value={threeStar/reviews.length * 100} max="100"></progress> {threeStar}
                </div>
                <div>
                  <progress id="review4" value={twoStar/reviews.length * 100} max="100"></progress> {twoStar}
                </div>
                <div>
                  <progress id="review5" value={oneStar/reviews.length * 100} max="100"></progress> {oneStar}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="review-details">
          <p>Inside the property</p>
          <div className="detail-item">
            <span>
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
              Heating
            </span>
            <span className="value">{Heating}</span>
          </div>
          <div className="detail-item">
            <span>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 4C10.7167 4 10.4793 3.904 10.288 3.712C10.0967 3.52 10.0007 3.28267 10 3V1C10 0.716667 10.096 0.479333 10.288 0.288C10.48 0.0966666 10.7173 0.000666667 11 0C11.2833 0 11.521 0.096 11.713 0.288C11.905 0.48 12.0007 0.717333 12 1V3C12 3.28333 11.904 3.521 11.712 3.713C11.52 3.905 11.2827 4.00067 11 4ZM15.95 6.05C15.7667 5.86667 15.675 5.63767 15.675 5.363C15.675 5.08833 15.7667 4.85067 15.95 4.65L17.35 3.225C17.55 3.025 17.7873 2.925 18.062 2.925C18.3367 2.925 18.5743 3.025 18.775 3.225C18.9583 3.40833 19.05 3.64167 19.05 3.925C19.05 4.20833 18.9583 4.44167 18.775 4.625L17.35 6.05C17.1667 6.23333 16.9333 6.325 16.65 6.325C16.3667 6.325 16.1333 6.23333 15.95 6.05ZM19 12C18.7167 12 18.479 11.904 18.287 11.712C18.095 11.52 17.9993 11.2827 18 11C18 10.7167 18.096 10.4793 18.288 10.288C18.48 10.0967 18.7173 10.0007 19 10H21C21.2833 10 21.521 10.096 21.713 10.288C21.905 10.48 22.0007 10.7173 22 11C22 11.2833 21.904 11.521 21.712 11.713C21.52 11.905 21.2827 12.0007 21 12H19ZM11 22C10.7167 22 10.4793 21.904 10.288 21.712C10.0967 21.52 10.0007 21.2827 10 21V19C10 18.7167 10.096 18.4793 10.288 18.288C10.48 18.0967 10.7173 18.0007 11 18C11.2833 18 11.521 18.096 11.713 18.288C11.905 18.48 12.0007 18.7173 12 19V21C12 21.2833 11.904 21.521 11.712 21.713C11.52 21.905 11.2827 22.0007 11 22ZM4.65 6.05L3.225 4.65C3.025 4.45 2.925 4.20833 2.925 3.925C2.925 3.64167 3.025 3.40833 3.225 3.225C3.40833 3.04167 3.64167 2.95 3.925 2.95C4.20833 2.95 4.44167 3.04167 4.625 3.225L6.05 4.65C6.23333 4.83333 6.325 5.06667 6.325 5.35C6.325 5.63333 6.23333 5.86667 6.05 6.05C5.85 6.23333 5.61667 6.325 5.35 6.325C5.08333 6.325 4.85 6.23333 4.65 6.05ZM17.35 18.775L15.95 17.35C15.7667 17.15 15.675 16.9127 15.675 16.638C15.675 16.3633 15.7667 16.134 15.95 15.95C16.1333 15.7667 16.3627 15.675 16.638 15.675C16.9133 15.675 17.1507 15.7667 17.35 15.95L18.775 17.35C18.975 17.5333 19.071 17.7667 19.063 18.05C19.055 18.3333 18.959 18.575 18.775 18.775C18.575 18.975 18.3333 19.075 18.05 19.075C17.7667 19.075 17.5333 18.975 17.35 18.775ZM1 12C0.716667 12 0.479333 11.904 0.288 11.712C0.0966666 11.52 0.000666667 11.2827 0 11C0 10.7167 0.096 10.4793 0.288 10.288C0.48 10.0967 0.717333 10.0007 1 10H3C3.28333 10 3.521 10.096 3.713 10.288C3.905 10.48 4.00067 10.7173 4 11C4 11.2833 3.904 11.521 3.712 11.713C3.52 11.905 3.28267 12.0007 3 12H1ZM3.225 18.775C3.04167 18.5917 2.95 18.3583 2.95 18.075C2.95 17.7917 3.04167 17.5583 3.225 17.375L4.65 15.95C4.83333 15.7667 5.06233 15.675 5.337 15.675C5.61167 15.675 5.84933 15.7667 6.05 15.95C6.25 16.15 6.35 16.3877 6.35 16.663C6.35 16.9383 6.25 17.1757 6.05 17.375L4.65 18.775C4.45 18.975 4.20833 19.075 3.925 19.075C3.64167 19.075 3.40833 18.975 3.225 18.775ZM11 17C9.33333 17 7.91667 16.4167 6.75 15.25C5.58333 14.0833 5 12.6667 5 11C5 9.33333 5.58333 7.91667 6.75 6.75C7.91667 5.58333 9.33333 5 11 5C12.6667 5 14.0833 5.58333 15.25 6.75C16.4167 7.91667 17 9.33333 17 11C17 12.6667 16.4167 14.0833 15.25 15.25C14.0833 16.4167 12.6667 17 11 17Z"
                  fill="#0A2446"
                />
              </svg>
              Litting
            </span>
            <span className="value">{Litting}</span>
          </div>
          <div className="detail-item">
            <span>
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
              Internet connection
            </span>
            <span className="value">{InternetConnection}</span>
          </div>
          <div className="detail-item">
            <span>
              <svg
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.34991 0.999906C8.52991 0.829906 9.77991 2.11991 10.1399 3.89991C10.4999 5.66991 9.84991 7.24991 8.66991 7.42991C7.49991 7.60991 6.23991 6.31991 5.86991 4.53991C5.49991 2.76991 6.16991 1.18991 7.34991 0.999906ZM14.4999 0.999906C15.6899 1.18991 16.3499 2.76991 15.9999 4.53991C15.6199 6.31991 14.3699 7.60991 13.1899 7.42991C11.9999 7.24991 11.3499 5.66991 11.7199 3.89991C12.0799 2.11991 13.3299 0.829906 14.4999 0.999906ZM1.99991 5.59991C3.13991 5.10991 4.68991 5.99991 5.49991 7.54991C6.25991 9.12991 5.99991 10.7899 4.86991 11.2799C3.73991 11.7699 2.19991 10.8899 1.40991 9.31991C0.619906 7.74991 0.899906 6.07991 1.99991 5.59991ZM19.9999 5.59991C21.0999 6.07991 21.3799 7.74991 20.5899 9.31991C19.7999 10.8899 18.2599 11.7699 17.1299 11.2799C15.9999 10.7899 15.7399 9.12991 16.4999 7.54991C17.3099 5.99991 18.8599 5.10991 19.9999 5.59991ZM18.3299 16.3799C18.3699 17.3199 17.6499 18.3599 16.7899 18.7499C14.9999 19.5699 12.8799 17.8699 10.8899 17.8699C8.89991 17.8699 6.75991 19.6399 4.99991 18.7499C3.99991 18.2599 3.30991 16.9599 3.43991 15.8799C3.61991 14.3899 5.40991 13.5899 6.46991 12.4999C7.87991 11.0899 8.87991 8.43991 10.8899 8.43991C12.8899 8.43991 13.9499 11.0499 15.2999 12.4999C16.4099 13.7199 18.2599 14.7499 18.3299 16.3799Z"
                  fill="#0A2446"
                />
              </svg>
              Pet-friendly
            </span>
            <span className="value">{PetFriendly}</span>
          </div>
        </div>
        <div className="neighborhood-details">
          <p>Around the neighborhood</p>
          <div className="detail-item">
            <span>
              <svg
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.15848 9.9299C0.808755 9.34687 0.624023 8.67977 0.624023 7.9999C0.624023 7.32003 0.808755 6.65293 1.15848 6.0699C1.26602 5.89042 1.40992 5.73542 1.58093 5.61487C1.75195 5.49431 1.94629 5.41087 2.15148 5.3699L3.84448 5.0309C3.94544 5.01091 4.03651 4.95691 4.10248 4.8779L6.17048 2.3949C7.35248 0.9749 7.94448 0.2659 8.47148 0.4569C9.00048 0.6479 9.00048 1.5719 9.00048 3.4199V12.5819C9.00048 14.4289 9.00048 15.3519 8.47248 15.5439C7.94548 15.7339 7.35348 15.0249 6.17148 13.6059L4.10048 11.1219C4.03476 11.0431 3.94408 10.9891 3.84348 10.9689L2.15048 10.6299C1.94529 10.5889 1.75095 10.5055 1.57993 10.3849C1.40892 10.2644 1.26602 10.1094 1.15848 9.9299Z"
                  fill="#0A2446"
                />
                <path
                  d="M11.5361 4.46377C12.4692 5.39677 12.9956 6.66074 13.0006 7.98021C13.0057 9.29968 12.489 10.5677 11.5631 11.5078M15.6571 2.34277C17.15 3.83544 17.9923 5.85766 18.0005 7.96871C18.0088 10.0798 17.1823 12.1085 15.7011 13.6128"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              Noise level
            </span>
            <span className="value">{NoiseLevel}</span>
          </div>
          <div className="detail-item">
            <span>
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
              Traffic
            </span>
            <span className="value">{Traffic}</span>
          </div>
          <div className="detail-item">
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0ZM11.5 5H9C8.46957 5 7.96086 5.21071 7.58579 5.58579C7.21071 5.96086 7 6.46957 7 7V14C7 14.2652 7.10536 14.5196 7.29289 14.7071C7.48043 14.8946 7.73478 15 8 15C8.26522 15 8.51957 14.8946 8.70711 14.7071C8.89464 14.5196 9 14.2652 9 14V12H11.5C12.4283 12 13.3185 11.6313 13.9749 10.9749C14.6313 10.3185 15 9.42826 15 8.5C15 7.57174 14.6313 6.6815 13.9749 6.02513C13.3185 5.36875 12.4283 5 11.5 5ZM11.5 7C11.8978 7 12.2794 7.15804 12.5607 7.43934C12.842 7.72064 13 8.10218 13 8.5C13 8.89782 12.842 9.27936 12.5607 9.56066C12.2794 9.84196 11.8978 10 11.5 10H9V7H11.5Z"
                  fill="#0A2446"
                />
              </svg>
              Parking
            </span>
            <span className="value">{Parking}</span>
          </div>
          <div className="detail-item">
            <span>
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
              Neighbors
            </span>
            <span className="value">{Neighbors}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewScore;
