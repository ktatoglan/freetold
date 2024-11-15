import React, { useState, useRef, useEffect } from "react";

const ContentHeader = ({ lastUpdate }) => {
  const handleSaveToFavorites = () => {
    alert("Added to favorites");
  };

  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleButtonClick = () => {
    setMenuVisible((prev) => !prev);
  };

  const handleReport = () => {
    alert("Reported");
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="content-header">
      <div className="update-date">
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 18H2V7H16M16 2H15V0H13V2H5V0H3V2H2C1.46957 2 0.960859 2.21071 0.585786 2.58579C0.210714 2.96086 0 3.46957 0 4V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18V4C18 3.46957 17.7893 2.96086 17.4142 2.58579C17.0391 2.21071 16.5304 2 16 2ZM13.53 10.06L12.47 9L7.59 13.88L5.47 11.76L4.41 12.82L7.59 16L13.53 10.06Z"
            fill="#919191"
          />
        </svg>
        Last update: {lastUpdate}
      </div>
      <div className="actions">
        <button className="save-to-favorites" onClick={handleSaveToFavorites}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55ZM16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"
              fill="#919191"
            />
          </svg>
          Save to favorites
        </button>
        <button className="save-to-favorites" onClick={handleReport}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.4 6L14.16 4.8C14.07 4.34 13.66 4 13.18 4H6C5.45 4 5 4.45 5 5V20C5 20.55 5.45 21 6 21C6.55 21 7 20.55 7 20V14H12.6L12.84 15.2C12.93 15.67 13.34 16 13.82 16H19C19.55 16 20 15.55 20 15V7C20 6.45 19.55 6 19 6H14.4Z"
              fill="#919191"
            />
          </svg>
          Report this property
        </button>
        {/*

        <button
          ref={buttonRef}
          className="more-actions"
          onClick={handleButtonClick}
        >
          &#8230;
        </button>
        {menuVisible && (
          <div ref={menuRef} className="more-actions-menu">
            <p className="share">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 8H16C15.45 8 15 8.45 15 9C15 9.55 15.45 10 16 10H18V21H6V10H8C8.55 10 9 9.55 9 9C9 8.45 8.55 8 8 8H6C4.9 8 4 8.9 4 10V21C4 22.1 4.9 23 6 23H18C19.1 23 20 22.1 20 21V10C20 8.9 19.1 8 18 8Z"
                  fill="#919191"
                />
                <path
                  d="M12 16C12.55 16 13 15.55 13 15V4.99996H14.79C15.24 4.99996 15.46 4.45996 15.14 4.14996L12.35 1.35996C12.15 1.15996 11.84 1.15996 11.64 1.35996L8.84997 4.14996C8.78087 4.22046 8.73418 4.30983 8.71579 4.40682C8.69739 4.50381 8.70812 4.60407 8.74662 4.69497C8.78512 4.78587 8.84967 4.86334 8.93212 4.91761C9.01458 4.97189 9.11125 5.00054 9.20997 4.99996H11V15C11 15.55 11.45 16 12 16Z"
                  fill="#919191"
                />
              </svg>
              Share this property
            </p>
            <p className="report">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.4 6L14.16 4.8C14.07 4.34 13.66 4 13.18 4H6C5.45 4 5 4.45 5 5V20C5 20.55 5.45 21 6 21C6.55 21 7 20.55 7 20V14H12.6L12.84 15.2C12.93 15.67 13.34 16 13.82 16H19C19.55 16 20 15.55 20 15V7C20 6.45 19.55 6 19 6H14.4Z"
                  fill="#919191"
                />
              </svg>
              Report this property
            </p>
          </div>
        )}

        */}
      </div>
    </div>
  );
};

export default ContentHeader;
