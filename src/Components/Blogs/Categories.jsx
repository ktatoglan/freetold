import React from 'react';

const Categories = () => {
  const categories = [
    'Renting Basics',
    'Budgeting and Costs',
    'Platform Features',
    'Specialized Renting',
    'Moving and Settling In',
    'Lifestyle and Living',
    'Property Search',
    'Neighborhoods',
    'Industry Trends',
  ];

  return (
    <div className="categories">
      <h3>By category</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;