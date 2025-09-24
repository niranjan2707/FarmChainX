import React from 'react';
import { format, differenceInDays } from 'date-fns';
import './InventoryManagement.css';

const getStockLevel = (quantity, maxQuantity) => {
  const percentage = (quantity / maxQuantity) * 100;
  if (percentage < 20) return 'low';
  if (percentage < 60) return 'medium';
  return 'high';
};

const getExpiryStatus = (expiryDate) => {
  const daysLeft = differenceInDays(new Date(expiryDate), new Date());
  if (daysLeft < 0) return 'expired';
  if (daysLeft < 7) return 'expiring-soon';
  return 'fresh';
};

const InventoryManagement = ({ inventory }) => {
  return (
    <div className="inventory-management">
      <h1>Inventory Management</h1>
      <p>Monitor real-time stock levels from your farmer network.</p>

      <div className="inventory-grid">
        {inventory.map(item => {
          const stockLevel = getStockLevel(item.quantity, item.maxQuantity);
          const expiryStatus = getExpiryStatus(item.expiryDate);
          
          return (
            <div key={item.productId} className="inventory-card">
              <div className="inventory-card-header">
                <img src={item.image} alt={item.productName} />
                <div className="inventory-title">
                  <h3>{item.productName}</h3>
                  <p>from {item.farmerName}</p>
                </div>
              </div>
              <div className="inventory-card-body">
                <p><strong>Batch:</strong> {item.batchNumber}</p>
                <p><strong>Location:</strong> {item.storageLocation}</p>
                <p><strong>Quality Score:</strong> {item.qualityScore} / 100</p>
                <div className={`expiry-info ${expiryStatus}`}>
                  <strong>Expires:</strong> {format(new Date(item.expiryDate), 'PPP')}
                </div>
              </div>
              <div className="inventory-card-footer">
                <div className={`stock-level-indicator ${stockLevel}`}>
                  {stockLevel.toUpperCase()} STOCK
                </div>
                <div className="stock-quantity">
                  {item.quantity} / {item.maxQuantity} units
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InventoryManagement;