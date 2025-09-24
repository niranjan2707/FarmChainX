import React from 'react';
import { format, addDays, differenceInDays } from 'date-fns';
import { mockRetailerInventory } from '../../../data/mockRetailerInventory';
import './StoreInventory.css';

const getStockStatus = (level, max) => {
  const percentage = (level / max) * 100;
  if (percentage < 20) return 'low';
  if (percentage < 50) return 'medium';
  return 'high';
};

const getShelfLifeStatus = (arrivalDate, shelfLifeDays) => {
  const expiryDate = addDays(new Date(arrivalDate), shelfLifeDays);
  const daysLeft = differenceInDays(expiryDate, new Date());
  if (daysLeft < 0) return 'expired';
  if (daysLeft < 3) return 'expiring-soon';
  return 'fresh';
};

const StoreInventory = () => {
  return (
    <div className="store-inventory">
      <h1>Store Inventory</h1>
      <p>Manage product catalog, stock levels, and shelf life.</p>
      <div className="inventory-grid">
        {mockRetailerInventory.map(item => {
          const stockStatus = getStockStatus(item.stockLevel, item.maxStock);
          const shelfLifeStatus = getShelfLifeStatus(item.arrivalDate, item.shelfLifeDays);
          const expiryDate = addDays(new Date(item.arrivalDate), item.shelfLifeDays);

          return(
            <div key={item.productId} className="product-card">
              <div className="product-card-header">
                <img src={item.image} alt={item.name}/>
                <h3>{item.name}</h3>
                <span className="product-price">₹{item.price.toFixed(2)}</span>
              </div>
              <div className="product-card-body">
                <p><strong>Supplier:</strong> {item.dealerName}</p>
                <div className={`shelf-life ${shelfLifeStatus}`}>
                  Expires on: {format(expiryDate, 'PPP')}
                </div>
              </div>
              <div className="product-card-footer">
                 <div className="stock-info">
                   <div className={`stock-bar ${stockStatus}`} style={{width: `${(item.stockLevel / item.maxStock) * 100}%`}}></div>
                 </div>
                 <span>{item.stockLevel} / {item.maxStock} units</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StoreInventory;