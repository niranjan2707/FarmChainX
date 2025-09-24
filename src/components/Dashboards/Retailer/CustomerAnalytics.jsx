import React from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { popularProductsData, customerDemographicsData } from '../../../data/mockRetailerAnalytics';
import './CustomerAnalytics.css';

const CustomerAnalytics = () => {
  const COLORS = ['#F57C00', '#FFB74D', '#FF9800'];
  
  return(
    <div className="customer-analytics">
      <h1>Customer Analytics</h1>
      <p>Gain insights into customer preferences and purchase behavior.</p>
      <div className="charts-grid">
        <div className="widget">
          <h3>Most Popular Products (by units sold)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={popularProductsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#FF9800" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="widget">
          <h3>Customer Demographics</h3>
          <ResponsiveContainer width="100%" height={300}>
             <PieChart>
              <Pie data={customerDemographicsData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                {customerDemographicsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default CustomerAnalytics;