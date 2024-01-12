import React from 'react';

// Assuming pricing information is passed as a prop
const PricingPackages = ({ packages }) => {
  return (
    <div>
      <h3>Pricing Packages</h3>
      <ul>
        {packages.map(pkg => (
          <li key={pkg.id}>
            <h4>{pkg.name}</h4>
            <p>Price: {pkg.price}</p>
            <p>Description: {pkg.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingPackages;
