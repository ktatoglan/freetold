import React, { useState } from "react";
import BlogCard from "./BlogCardMobile";
import Categories from "./Categories";
import { ContactUs } from "../HomePage/ContactUs";

const blogPosts = [
  {
    title: "The Most Common Hidden Costs in Renting and How to Budget for Them",
    category: "Budgeting and Costs",
    tags: ["#HiddenCosts", "#Budgeting", "#TenantFinance"],
  },
  {
    title: "How to Negotiate Rent Like a Pro",
    category: "Renting Basics",
    tags: ["#RentNegotiation", "#TenantTips", "#RentingAdvice", "#SavingMoney"],
  },
  {
    title: "How to Handle Disputes with Your Landlord",
    category: "Renting Basics",
    tags: [
      "#LandlordDisputes",
      "#TenantRights",
      "#RentingTips",
      "#ConflictResolution",
    ],
  },
];

const categories = [
  "Renting Basics",
  "Budgeting and Costs",
  "Platform Features",
  "Specialized Renting",
  "Moving and Settling In",
  "Lifestyle and Living",
  "Property Search",
  "Neighborhoods",
  "Industry Trends",
];

const tags = [
  "#AvoidScams",
  "#BudgetTips",
  "#EPCRatings",
  "#HiddenCosts",
  "#InspectionChecklist",
  "#LegalAdvice",
  "#LocationTips",
  "#MovingChecklist",
  "#NeighborhoodGuide",
  "#PublicTransport",
  "#RelocationGuide",
  "#RentingTips",
  "#SaveMoney",
  "#ShortTermRentals",
  "#TaxGuide",
  "#TenantRights",
  "#UtilityBills",
];

function BlogsMobile() {
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);
  const [isTagsOpen, setTagsOpen] = useState(false);

  const toggleCategories = () => {
    setCategoriesOpen(!isCategoriesOpen);
    setTagsOpen(false); // Etiketler kapanıyor.
  };

  const toggleTags = () => {
    setTagsOpen(!isTagsOpen);
    setCategoriesOpen(false); // Kategoriler kapanıyor.
  };

  const closeCategories = () => {
    setCategoriesOpen(false);
  };

  const closeTags = () => {
    setTagsOpen(false);
  };

  return (
    <>
      <div className="app-container">
        <header className="blogs-mbl-header">
          <div className="search-bar">
            <input type="text" placeholder="Search" className="search-input" />
          </div>
          <div className="button-container">
            <button
              onClick={toggleCategories}
              className="toggle-button cats-button"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="5" fill="#EF6C67" />
                <path
                  d="M6.75 8.25C7.57841 8.25 8.25 7.57841 8.25 6.75C8.25 5.92157 7.57841 5.25 6.75 5.25C5.92157 5.25 5.25 5.92157 5.25 6.75C5.25 7.57841 5.92157 8.25 6.75 8.25Z"
                  fill="white"
                />
                <path
                  d="M12 8.25C12.8284 8.25 13.5 7.57841 13.5 6.75C13.5 5.92157 12.8284 5.25 12 5.25C11.1716 5.25 10.5 5.92157 10.5 6.75C10.5 7.57841 11.1716 8.25 12 8.25Z"
                  fill="white"
                />
                <path
                  d="M17.25 8.25C18.0784 8.25 18.75 7.57841 18.75 6.75C18.75 5.92157 18.0784 5.25 17.25 5.25C16.4216 5.25 15.75 5.92157 15.75 6.75C15.75 7.57841 16.4216 8.25 17.25 8.25Z"
                  fill="white"
                />
                <path
                  d="M6.75 13.5C7.57841 13.5 8.25 12.8284 8.25 12C8.25 11.1716 7.57841 10.5 6.75 10.5C5.92157 10.5 5.25 11.1716 5.25 12C5.25 12.8284 5.92157 13.5 6.75 13.5Z"
                  fill="white"
                />
                <path
                  d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z"
                  fill="white"
                />
                <path
                  d="M17.25 13.5C18.0784 13.5 18.75 12.8284 18.75 12C18.75 11.1716 18.0784 10.5 17.25 10.5C16.4216 10.5 15.75 11.1716 15.75 12C15.75 12.8284 16.4216 13.5 17.25 13.5Z"
                  fill="white"
                />
                <path
                  d="M6.75 18.75C7.57841 18.75 8.25 18.0784 8.25 17.25C8.25 16.4216 7.57841 15.75 6.75 15.75C5.92157 15.75 5.25 16.4216 5.25 17.25C5.25 18.0784 5.92157 18.75 6.75 18.75Z"
                  fill="white"
                />
                <path
                  d="M12 18.75C12.8284 18.75 13.5 18.0784 13.5 17.25C13.5 16.4216 12.8284 15.75 12 15.75C11.1716 15.75 10.5 16.4216 10.5 17.25C10.5 18.0784 11.1716 18.75 12 18.75Z"
                  fill="white"
                />
                <path
                  d="M17.25 18.75C18.0784 18.75 18.75 18.0784 18.75 17.25C18.75 16.4216 18.0784 15.75 17.25 15.75C16.4216 15.75 15.75 16.4216 15.75 17.25C15.75 18.0784 16.4216 18.75 17.25 18.75Z"
                  fill="white"
                />
              </svg>
              All categories
            </button>
            <button onClick={toggleTags} className="toggle-button tags-button">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="5" fill="#0A2446" />
                <path
                  d="M5.25 4.125C4.95163 4.125 4.66548 4.24353 4.4545 4.4545C4.24353 4.66548 4.125 4.95163 4.125 5.25V10.4092C4.12506 10.7076 4.24363 10.9937 4.45462 11.2046L12.3296 19.0796C12.5406 19.2905 12.8267 19.409 13.125 19.409C13.4233 19.409 13.7094 19.2905 13.9204 19.0796L19.0796 13.9204C19.2905 13.7094 19.409 13.4233 19.409 13.125C19.409 12.8267 19.2905 12.5406 19.0796 12.3296L11.2046 4.45462C10.9937 4.24363 10.7076 4.12506 10.4092 4.125H5.25ZM9.75 8.0625C9.75 8.51005 9.57221 8.93928 9.25574 9.25574C8.93928 9.57221 8.51005 9.75 8.0625 9.75C7.61495 9.75 7.18572 9.57221 6.86926 9.25574C6.55279 8.93928 6.375 8.51005 6.375 8.0625C6.375 7.61495 6.55279 7.18572 6.86926 6.86926C7.18572 6.55279 7.61495 6.375 8.0625 6.375C8.51005 6.375 8.93928 6.55279 9.25574 6.86926C9.57221 7.18572 9.75 7.61495 9.75 8.0625Z"
                  fill="white"
                />
              </svg>
              Popular tags
            </button>
          </div>
        </header>

        {/* Açılır kategori div'i */}
        {isCategoriesOpen && (
          <div className="dropdown">
            <div className="dropdown-header">
              <span>By Category</span>
              <button onClick={closeCategories} className="close-button">
                X
              </button>
            </div>
            <div className="categories">
              <ul>
                {categories.map((category, index) => (
                  <li key={index}>{category}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Açılır etiket div'i */}
        {isTagsOpen && (
          <div className="dropdown">
            <div className="dropdown-header">
              <span>Popular Tags</span>
              <button onClick={closeTags} className="close-button">
                X
              </button>
            </div>
            <div className="tags-container">
              {tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Blog Kartları */}
        <div className="blog-container">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              category={post.category}
              title={post.title}
              tags={post.tags}
            />
          ))}
        </div>
      </div>
      <ContactUs />
    </>
  );
}

export default BlogsMobile;
