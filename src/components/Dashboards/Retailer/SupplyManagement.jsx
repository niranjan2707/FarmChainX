import React from 'react';
import { mockRetailerSuppliers } from '../../../data/mockRetailerSuppliers';
import './SupplyManagement.css';

const SupplyManagement = () => {
  return(
    <div className="supply-management">
      <h1>Supply Management</h1>
      <p>Browse dealer catalogs and place new orders for your store.</p>
      <div className="supplier-list">
        {mockRetailerSuppliers.map(dealer => (
          <div key={dealer.dealerId} className="supplier-card">
            <div className="supplier-header">
              <h3>{dealer.name}</h3>
              <p>{dealer.location}</p>
            </div>
            <div className="supplier-body">
              <strong>Specializes in:</strong>
              <div className="specialties-tags">
                {dealer.specialties.map(s => <span key={s} className="tag">{s}</span>)}
              </div>
            </div>
            <div className="supplier-footer">
              <span className="rating">⭐ {dealer.rating} / 5.0</span>
              <button className="order-button">Browse Catalog & Order</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SupplyManagement;