import React from 'react';
import PropertyCard from './PropertyCard';

const SavedProperties = () => {
  const properties = [
    {
      id: 1,
      address: 'Eastland Road 65, Neath SA11',
      reviews: 0,
      lastPrice: null,
      size: '72 sq m',
      epcRating: 'B',
      description: 'Property is located in West-East Area bla bla. It has solid brick, as built, no insulation walls, single glazed windows and pitched roof. There is 500 m till the closest tesco and 14 km to city center.',
      isFavorite: false,
    },
    {
      id: 2,
      address: 'Eastland Road 76, Neath SA11',
      reviews: 2,
      lastPrice: '1,400 €',
      size: '72 sq m',
      epcRating: 'B',
      description: 'Property is located in West-East Area bla bla. It has solid brick, as built, no insulation walls, single glazed windows and pitched roof. There is 500 m till the closest tesco and 14 km to city center.',
      isFavorite: true,
      rating: 4.4,
      lastReviewDate: 'last a year ago',
    },
  ];

  return (
    <div className="saved-properties">
      <h3>Saved properties</h3>
      {properties.map(property => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default SavedProperties;
