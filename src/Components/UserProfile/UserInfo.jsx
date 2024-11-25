import React, {useState, useEffect} from "react";

const UserInfo = ({user}) => {
  const [date, setDate] = useState(null);
  useEffect(() => {
    setDate(new Date(user.registration_date).toLocaleDateString());
    console.log("user", user);
  }, [user]);
  return (
    <div className="user-profile">
      <div className="user-info">
        <h2>{user.name}</h2>
        <div className="user-info-line">
          <p>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8333 15.8333H4.16667V6.66658H15.8333M15.8333 2.49992H15V0.833252H13.3333V2.49992H6.66667V0.833252H5V2.49992H4.16667C3.72464 2.49992 3.30072 2.67551 2.98816 2.98807C2.67559 3.30063 2.5 3.72456 2.5 4.16659V15.8333C2.5 16.2753 2.67559 16.6992 2.98816 17.0118C3.30072 17.3243 3.72464 17.4999 4.16667 17.4999H15.8333C16.2754 17.4999 16.6993 17.3243 17.0118 17.0118C17.3244 16.6992 17.5 16.2753 17.5 15.8333V4.16659C17.5 3.72456 17.3244 3.30063 17.0118 2.98807C16.6993 2.67551 16.2754 2.49992 15.8333 2.49992ZM13.775 9.21659L12.8917 8.33325L8.825 12.3999L7.05833 10.6333L6.175 11.5166L8.825 14.1666L13.775 9.21659Z"
                fill="#646464"
              />
            </svg>
            Joined at {date}
          </p>
        </div>
      </div>

      <div className="invite-friends">
        <h4>Got someone who wants to share their experience?</h4>
        <button className="invite-button">Invite them!</button>
      </div>
    </div>
  );
};

export default UserInfo;
