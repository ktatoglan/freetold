import React from 'react';

const Tags = () => {
  const tags = [
    '#AvoidScams', '#BudgetTips', '#EPCRatings', '#HiddenCosts', '#InspectionChecklist',
    '#LegalAdvice', '#LocationTips', '#MovingChecklist', '#NeighborhoodGuide',
    '#PublicTransport', '#RelocationGuide', '#RentingTips', '#SaveMoney', '#ShortTermRentals',
    '#TaxGuide', '#TenantRights', '#UtilityBills',
  ];

  return (
    <div className="tags">
      <h3>Popular tags</h3>
      <div className="tags-container">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default Tags;