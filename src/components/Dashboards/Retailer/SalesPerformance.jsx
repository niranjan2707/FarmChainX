import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { dailySalesData } from '../../../data/mockRetailerAnalytics';
import './SalesPerformance.css';

const SalesPerformance = () => {
  return (
    <div className="sales-performance">
      <h1>Sales Performance</h1>
      <p>Track daily, weekly, and monthly sales reports and revenue trends.</p>
      <div className="charts-grid">
        <div className="widget full-width">
          <h3>Revenue Trend This Week (₹)</h3>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={dailySalesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis tickFormatter={(value) => `₹${value/1000}k`} />
              <Tooltip formatter={(value) => `₹${value.toLocaleString('en-IN')}`} />
              <Legend />
              <Area type="monotone" dataKey="sales" stroke="#F57C00" fill="#FFB74D" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SalesPerformance;