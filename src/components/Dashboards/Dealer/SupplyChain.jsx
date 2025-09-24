import React from 'react';
import { mockDealerFarmers } from '../../../data/mockDealerFarmers';
import './SupplyChain.css';

const SupplyChain = () => {
  const farmers = mockDealerFarmers; // Using data directly for simplicity
  return (
    <div className="supply-chain">
      <h1>Supply Chain Oversight</h1>
      <p>Manage your network of trusted farmers and place new orders.</p>

      <div className="farmer-list">
        {farmers.map(farmer => (
          <div key={farmer.farmerId} className="farmer-card">
            <div className="farmer-header">
              <img src={farmer.avatar} alt={farmer.name} />
              <div className="farmer-info">
                <h3>{farmer.farmName}</h3>
                <p>{farmer.name} - {farmer.location}</p>
              </div>
              <div className="farmer-rating">
                ⭐ {farmer.rating}
              </div>
            </div>
            <div className="farmer-body">
              <strong>Products Offered:</strong>
              <div className="products-tags">
                {farmer.productsOffered.map(p => <span key={p} className="product-tag">{p}</span>)}
              </div>
            </div>
            <div className="farmer-footer">
              <p>Member Since: {new Date(farmer.memberSince).toLocaleDateString()}</p>
              <button onClick={() => alert(`Placing order to ${farmer.farmName}`)}>
                Place Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SupplyChain;