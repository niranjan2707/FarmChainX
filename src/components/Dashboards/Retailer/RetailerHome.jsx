import React from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { mockRetailerInventory } from '../../../data/mockRetailerInventory';
import { dailySalesData } from '../../../data/mockRetailerAnalytics';
import './RetailerHome.css';

const RetailerHome = () => {
  const lowStockItems = mockRetailerInventory.filter(item => (item.stockLevel / item.maxStock) * 100 < 20).length;
  const todaysRevenue = dailySalesData.find(d => d.day === 'Thu')?.sales || 0; // Assuming today is Thursday
  const topProduct = "Himalayan Apples"; // Mocked for simplicity

  return (
    <div className="retailer-home">
      <h1>Retailer Overview</h1>
      <div className="stats-grid">
        <div className="stat-card">
          <h2>₹{todaysRevenue.toLocaleString('en-IN')}</h2>
          <p>Today's Revenue (Est.)</p>
        </div>
        <div className="stat-card low-stock">
          <h2>{lowStockItems}</h2>
          <p>Low Stock Alerts</p>
        </div>
        <div className="stat-card">
          <h2>{topProduct}</h2>
          <p>Top Selling Product</p>
        </div>
      </div>

      <div className="retailer-widgets-grid">
        <div className="widget chart-widget">
          <h3>Weekly Sales Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dailySalesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis tickFormatter={(value) => `₹${value/1000}k`} />
              <Tooltip formatter={(value) => `₹${value.toLocaleString('en-IN')}`} />
              <Line type="monotone" dataKey="sales" stroke="#F57C00" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="widget">
          <h3>Quick Links</h3>
          <div className="quick-actions">
            <Link to="/retailer/inventory" className="action-button">Manage Store Inventory</Link>
            <Link to="/retailer/supply" className="action-button">Order from Suppliers</Link>
            <Link to="/retailer/sales" className="action-button">View Sales Reports</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetailerHome;