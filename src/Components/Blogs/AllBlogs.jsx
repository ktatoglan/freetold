import React from "react";
import BlogCard from "./BlogCard";

const AllBlogs = () => {
  const blogs = [
    {
      title: "Understanding Your Lease Agreement: Key Clauses to Look Out For",
      category: "Renting Basics",
      date: "23 Sep 2024",
      content:
        "Newly Refurbished Spacious 2 bedroom mid terraced property Conveniently.",
    },
    {
      title:
      "Student Housing: Finding Affordable and Comfortable Accommodation",
      category: "Energy efficiency",
      date: "23 Sep 2024",
      content:
      "Newly Refurbished Spacious 2 bedroom mid terraced property Conveniently.",
    },
    {
      title: "How to Conduct a Thorough Property Inspection Before Renting",
      category: "Energy efficiency",
      date: "23 Sep 2024",
      content:
        "Newly Refurbished Spacious 2 bedroom mid terraced property Conveniently Located Near the Center of Town, a short distance to Shops, Amenities and Transport Links. ",
    },
    {
      title: "Understanding Your Lease Agreement: Key Clauses to Look Out For",
      category: "Renting Basics",
      date: "23 Sep 2024",
      content:
        "Newly Refurbished Spacious 2 bedroom mid terraced property Conveniently.",
    },
    {
      title: "How to Conduct a Thorough Property Inspection Before Renting",
      category: "Energy efficiency",
      date: "23 Sep 2024",
      content:
        "Newly Refurbished Spacious 2 bedroom mid terraced property Conveniently.",
    },
    {
      title:
        "Student Housing: Finding Affordable and Comfortable Accommodation",
      category: "Energy efficiency",
      date: "23 Sep 2024",
      content:
        "Newly Refurbished Spacious 2 bedroom mid terraced property Conveniently.",
    },
    // Diğer bloglar...
  ];

  return (
    <div className="all-blogs">
      {blogs.map((blog, index) => (
        <BlogCard key={index} {...blog} />
      ))}
    </div>
  );
};

export default AllBlogs;
