import React, { useState } from "react";
import FilterMenu from "./FilterMenu";
import axios from "axios";
import { toast } from "react-toastify";

const PropertySearchBar = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    "Pricing (from low to high)"
  );
  const [searchTerm, setSearchTerm] = useState("");

  const sortOptions = [
    "Distance (from close to far)",
    "Distance (from far to close)",
    "Rating (from high to low)",
    "Rating (from low to high)",
    "Pricing (from low to high)",
    "Pricing (from high to low)",
    "Review date (from oldest)",
    "Review date (from newest)",
  ];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const toggleFilterMenu = () => {
    setIsFilterMenuOpen(!isFilterMenuOpen);
  };

  const applyFilters = (filters) => {
    setSelectedFilters(filters);
    toggleFilterMenu(); // Menüyü kapatmak için
  };

  const searchApi = async (word) => {

    if (word.length > 2) { // Search after 3+ characters
      window.location.href = `/property-listing/?search=${word}`;
    } else {
      toast.error("Please enter at least 3 characters to search");
    }
  };

  return (
    <>
      <div className="property-search-bar-container">
        <div className="property-search-bar">
          <input
            type="text"
            placeholder="Search property"
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="find-reviews-btn" onClick={() => searchApi(searchTerm)}>
            Find reviews
          </button>
          <button className="filter-menu-btn" onClick={toggleFilterMenu}>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9999 18.0469C19.9999 18.2139 19.9367 18.3741 19.8242 18.4923C19.7117 18.6104 19.5591 18.6767 19.3999 18.6767H15.32C15.1863 19.1998 14.892 19.662 14.4827 19.9917C14.0734 20.3213 13.5719 20.5 13.056 20.5C12.5401 20.5 12.0386 20.3213 11.6292 19.9917C11.2199 19.662 10.9256 19.1998 10.792 18.6767H4.6C4.44087 18.6767 4.28826 18.6104 4.17574 18.4923C4.06321 18.3741 4 18.2139 4 18.0469C4 17.8798 4.06321 17.7196 4.17574 17.6015C4.28826 17.4834 4.44087 17.417 4.6 17.417H10.792C10.9256 16.8939 11.2199 16.4318 11.6292 16.1021C12.0386 15.7725 12.5401 15.5938 13.056 15.5938C13.5719 15.5938 14.0734 15.7725 14.4827 16.1021C14.892 16.4318 15.1863 16.8939 15.32 17.417H19.3999C19.5591 17.417 19.7117 17.4834 19.8242 17.6015C19.9367 17.7196 19.9999 17.8798 19.9999 18.0469ZM19.9999 6.95311C19.9999 7.12015 19.9367 7.28036 19.8242 7.39848C19.7117 7.5166 19.5591 7.58296 19.3999 7.58296H17.44C17.3063 8.10605 17.012 8.56825 16.6027 8.8979C16.1934 9.22754 15.6919 9.40621 15.176 9.40621C14.6601 9.40621 14.1586 9.22754 13.7492 8.8979C13.3399 8.56825 13.0456 8.10605 12.912 7.58296H4.6C4.52121 7.58296 4.44318 7.56667 4.37039 7.53501C4.29759 7.50336 4.23145 7.45697 4.17574 7.39848C4.12002 7.33999 4.07582 7.27056 4.04567 7.19414C4.01552 7.11772 4 7.03582 4 6.95311C4 6.87039 4.01552 6.78849 4.04567 6.71207C4.07582 6.63566 4.12002 6.56622 4.17574 6.50773C4.23145 6.44925 4.29759 6.40285 4.37039 6.3712C4.44318 6.33955 4.52121 6.32326 4.6 6.32326H12.912C13.0456 5.80016 13.3399 5.33796 13.7492 5.00832C14.1586 4.67867 14.6601 4.5 15.176 4.5C15.6919 4.5 16.1934 4.67867 16.6027 5.00832C17.012 5.33796 17.3063 5.80016 17.44 6.32326H19.3999C19.479 6.32213 19.5575 6.33765 19.6308 6.3689C19.7041 6.40015 19.7707 6.4465 19.8266 6.50522C19.8825 6.56393 19.9267 6.63382 19.9565 6.71074C19.9862 6.78767 20.001 6.87008 19.9999 6.95311ZM19.9999 12.4958C20.001 12.5788 19.9862 12.6612 19.9565 12.7382C19.9267 12.8151 19.8825 12.885 19.8266 12.9437C19.7707 13.0024 19.7041 13.0488 19.6308 13.08C19.5575 13.1113 19.479 13.1268 19.3999 13.1257H10.04C9.90635 13.6487 9.61205 14.1109 9.20272 14.4406C8.79339 14.7702 8.29189 14.9489 7.77599 14.9489C7.26008 14.9489 6.75858 14.7702 6.34925 14.4406C5.93992 14.1109 5.64563 13.6487 5.51199 13.1257H4.6C4.44087 13.1257 4.28826 13.0593 4.17574 12.9412C4.06321 12.8231 4 12.6628 4 12.4958C4 12.3288 4.06321 12.1685 4.17574 12.0504C4.28826 11.9323 4.44087 11.866 4.6 11.866H5.51199C5.64563 11.3429 5.93992 10.8807 6.34925 10.551C6.75858 10.2214 7.26008 10.0427 7.77599 10.0427C8.29189 10.0427 8.79339 10.2214 9.20272 10.551C9.61205 10.8807 9.90635 11.3429 10.04 11.866H19.3999C19.5591 11.866 19.7117 11.9323 19.8242 12.0504C19.9367 12.1685 19.9999 12.3288 19.9999 12.4958Z"
                fill="white"
              />
            </svg>
            Filters
          </button>
        </div>
        {selectedFilters.length > 0 && (
          <div className="selected-filters">
            {selectedFilters.map((filter, index) => (
              <button key={index} className="selected-filter-btn">
                {filter}
              </button>
            ))}
          </div>
        )}
        {isFilterMenuOpen && <FilterMenu onApplyFilters={applyFilters} />}
      </div>
      <div className="filters-and-sort">
        {/*
        <div className="active-filters">
          <span>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.833008 10.5002C0.833008 5.43766 4.93717 1.3335 9.99967 1.3335C15.0622 1.3335 19.1663 5.43766 19.1663 10.5002C19.1663 15.5627 15.0622 19.6668 9.99967 19.6668C4.93717 19.6668 0.833008 15.5627 0.833008 10.5002ZM10.833 5.50016C10.4222 5.50016 9.82384 5.61683 9.30467 5.99016C8.74134 6.39516 8.33301 7.06183 8.33301 8.00016V9.66683H7.49967C7.27866 9.66683 7.0667 9.75463 6.91042 9.91091C6.75414 10.0672 6.66634 10.2791 6.66634 10.5002C6.66634 10.7212 6.75414 10.9331 6.91042 11.0894C7.0667 11.2457 7.27866 11.3335 7.49967 11.3335H8.33301V12.1668C8.33301 12.311 8.28301 12.5468 8.15634 12.7218C8.06134 12.8543 7.89467 13.0002 7.49967 13.0002C7.27866 13.0002 7.0667 13.088 6.91042 13.2442C6.75414 13.4005 6.66634 13.6125 6.66634 13.8335C6.66634 14.0545 6.75414 14.2665 6.91042 14.4228C7.0667 14.579 7.27866 14.6668 7.49967 14.6668H12.4997C12.7207 14.6668 12.9326 14.579 13.0889 14.4228C13.2452 14.2665 13.333 14.0545 13.333 13.8335C13.333 13.6125 13.2452 13.4005 13.0889 13.2442C12.9326 13.088 12.7207 13.0002 12.4997 13.0002H9.86134C9.96134 12.6943 9.99967 12.4002 9.99967 12.1668V11.3335H10.833C11.054 11.3335 11.266 11.2457 11.4223 11.0894C11.5785 10.9331 11.6663 10.7212 11.6663 10.5002C11.6663 10.2791 11.5785 10.0672 11.4223 9.91091C11.266 9.75463 11.054 9.66683 10.833 9.66683H9.99967V8.00016C9.99967 7.60516 10.1455 7.4385 10.278 7.3435C10.453 7.21683 10.6888 7.16683 10.833 7.16683C10.9772 7.16683 11.213 7.21683 11.388 7.3435C11.5205 7.4385 11.6663 7.60516 11.6663 8.00016C11.6663 8.22118 11.7541 8.43314 11.9104 8.58942C12.0667 8.7457 12.2787 8.8335 12.4997 8.8335C12.7207 8.8335 12.9326 8.7457 13.0889 8.58942C13.2452 8.43314 13.333 8.22118 13.333 8.00016C13.333 7.06183 12.923 6.39516 12.3613 5.99016C11.9135 5.67536 11.3804 5.50444 10.833 5.50016Z"
                fill="#0A2446"
              />
            </svg>
            1,000-2,000{" "}
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.1663 7.17278L13.3271 6.3335L9.99967 9.66088L6.67229 6.3335L5.83301 7.17278L9.16039 10.5002L5.83301 13.8275L6.67229 14.6668L9.99967 11.3394L13.3271 14.6668L14.1663 13.8275L10.839 10.5002L14.1663 7.17278Z"
                fill="#0A2446"
              />
            </svg>
          </span>
          <span>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="1"
                width="19"
                height="19"
                rx="9.5"
                fill="#0A2446"
              />
              <rect
                x="0.5"
                y="1"
                width="19"
                height="19"
                rx="9.5"
                stroke="#F5F5F5"
              />
              <path
                d="M10 14.4404L7.17239 16.2239C7.04747 16.3072 6.91688 16.3428 6.78061 16.3309C6.64433 16.319 6.5251 16.2715 6.42289 16.1883C6.32069 16.105 6.2412 16.0011 6.18442 15.8765C6.12764 15.7519 6.11628 15.6121 6.15035 15.457L6.89984 12.0861L4.39584 9.82097C4.28228 9.71396 4.21142 9.59196 4.18326 9.45499C4.1551 9.31801 4.1635 9.18436 4.20847 9.05404C4.25389 8.92325 4.32203 8.81624 4.41288 8.733C4.50373 8.64977 4.62864 8.59627 4.78763 8.57249L8.09223 8.26928L9.36978 5.09456C9.42656 4.95187 9.51468 4.84486 9.63414 4.77352C9.75361 4.70217 9.87557 4.6665 10 4.6665C10.125 4.6665 10.2469 4.70217 10.3659 4.77352C10.4849 4.84486 10.5731 4.95187 10.6303 5.09456L11.9078 8.26928L15.2124 8.57249C15.3714 8.59627 15.4963 8.64977 15.5872 8.733C15.678 8.81624 15.7462 8.92325 15.7916 9.05404C15.837 9.18484 15.8457 9.31872 15.8175 9.4557C15.7893 9.59268 15.7182 9.71444 15.6042 9.82097L13.1002 12.0861L13.8497 15.457C13.8838 15.6116 13.8724 15.7514 13.8157 15.8765C13.7589 16.0016 13.6794 16.1055 13.5772 16.1883C13.475 16.2715 13.3557 16.319 13.2195 16.3309C13.0832 16.3428 12.9526 16.3072 12.8277 16.2239L10 14.4404Z"
                fill="white"
              />
            </svg>
            4 and higher{" "}
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.1663 7.17278L13.3271 6.3335L9.99967 9.66088L6.67229 6.3335L5.83301 7.17278L9.16039 10.5002L5.83301 13.8275L6.67229 14.6668L9.99967 11.3394L13.3271 14.6668L14.1663 13.8275L10.839 10.5002L14.1663 7.17278Z"
                fill="#0A2446"
              />
            </svg>
          </span>
          <span>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.58366 17.1665L13.6337 9.05817H10.8337V3.83317L6.66699 11.9415H9.58366V17.1665ZM10.0003 2.1665C12.292 2.1665 14.2503 2.99984 15.8753 4.62484C17.5003 6.24984 18.3337 8.20817 18.3337 10.4998C18.3337 12.7915 17.5003 14.7498 15.8753 16.3748C14.2503 17.9998 12.292 18.8332 10.0003 18.8332C7.70866 18.8332 5.75033 17.9998 4.12533 16.3748C2.50033 14.7498 1.66699 12.7915 1.66699 10.4998C1.66699 8.20817 2.50033 6.24984 4.12533 4.62484C5.75033 2.99984 7.70866 2.1665 10.0003 2.1665Z"
                fill="#0A2446"
              />
            </svg>
            All{" "}
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.1663 7.17278L13.3271 6.3335L9.99967 9.66088L6.67229 6.3335L5.83301 7.17278L9.16039 10.5002L5.83301 13.8275L6.67229 14.6668L9.99967 11.3394L13.3271 14.6668L14.1663 13.8275L10.839 10.5002L14.1663 7.17278Z"
                fill="#0A2446"
              />
            </svg>
          </span>
        </div>
        */}
        {/*
        <div className="sort">
          <div className="sort-options">
            <label htmlFor="sort-select">Sort by:</label>
            <select
              id="sort-select"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              {sortOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        */}
      </div>
    </>
  );
};

export default PropertySearchBar;
