import React from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { revenueByFarmerData, profitMarginData } from '../../../data/mockDealerAnalytics';
import './SalesAnalytics.css';

const SalesAnalytics = () => {
  const COLORS = ['#1976D2', '#2196F3', '#64B5F6', '#90CAF9', '#BBDEFB'];

  return (
    <div className="sales-analytics">
      <h1>Sales Analytics</h1>
      <p>Analyze revenue, demand, and profit margins to make better business decisions.</p>
      <div className="charts-grid">
        <div className="widget">
          <h3>Revenue by Farmer (Yearly)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueByFarmerData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(value) => `₹${value/1000}k`} />
              <Tooltip formatter={(value) => `₹${value.toLocaleString('en-IN')}`} />
              <Legend />
              <Bar dataKey="revenue" fill="#1976D2" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="widget">
          <h3>Profit Margin by Crop</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={profitMarginData} dataKey="profitMargin" nameKey="name" cx="50%" cy="50%" outerRadius={100} label={(entry) => `${entry.name} ${entry.value}%`}>
                {profitMarginData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
export default SalesAnalytics;