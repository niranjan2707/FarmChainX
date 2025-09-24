import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { revenueByFarmerData } from '../../../data/mockDealerAnalytics';
import './DealerHome.css'; // <-- This line ensures the CORRECT stylesheet is imported

const DealerHome = ({ inventory, farmers }) => {
  const inventoryValue = inventory.reduce((sum, item) => sum + (item.quantity * 150), 0);
  const lowStockItems = inventory.filter(item => (item.quantity / item.maxQuantity) * 100 < 20).length;

  return (
    <div className="dealer-home">
      <h1>Dealer Overview</h1>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h2>₹{inventoryValue.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</h2>
          <p>Total Inventory Value</p>
        </div>
        <div className="stat-card">
          <h2>{farmers.length}</h2>
          <p>Farmers in Network</p>
        </div>
        <div className="stat-card low-stock">
          <h2>{lowStockItems}</h2>
          <p>Low Stock Alerts</p>
        </div>
      </div>
      
      <div className="dealer-widgets-grid">
        <div className="widget">
          <h3>Quick Actions</h3>
          <div className="quick-actions">
            <Link to="/dealer/inventory" className="action-button">Manage Inventory</Link>
            <Link to="/dealer/supply" className="action-button">View Farmer Network</Link>
          </div>
        </div>

        <div className="widget chart-widget">
          <h3>Revenue by Farmer</h3>
           <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueByFarmerData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" tickFormatter={(value) => `₹${value/1000}k`} />
              <YAxis type="category" dataKey="name" width={100} />
              <Tooltip formatter={(value) => `₹${value.toLocaleString('en-IN')}`} />
              <Legend />
              <Bar dataKey="revenue" fill="#1976D2" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DealerHome;