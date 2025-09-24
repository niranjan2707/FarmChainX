import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../../Shared/DashboardLayout';
import VerificationHub from './Verification/VerificationHub';
import CustomerHome from './CustomerHome';
import MyOrders from './MyOrders';
import Favorites from './Favorites'; // 1. Import the new component
import { verificationHistory, customerReviews } from '../../../data/mockCustomerData';

const CustomerDashboard = () => {
  const [history, setHistory] = useState(verificationHistory);
  const [reviews, setReviews] = useState(customerReviews);

  const handleAddHistory = (newItem) => {
    if (!history.find(item => item.productId === newItem.productId)) {
       setHistory(prevHistory => [newItem, ...prevHistory]);
    }
  };

  const handleAddReview = (newReview) => {
    setReviews(prevReviews => [...prevReviews, newReview]);
    console.log("New Review Submitted:", newReview);
  };

  return (
    <DashboardLayout>
      <Routes>
        <Route index element={<CustomerHome />} />
        
        <Route 
          path="verify" 
          element={
            <VerificationHub 
              history={history}
              onAddHistory={handleAddHistory}
              onAddReview={handleAddReview}
            />
          } 
        />
        
        <Route path="orders" element={<MyOrders />} />

        {/* 2. Use the new Favorites component */}
        <Route path="favorites" element={<Favorites />} />

      </Routes>
    </DashboardLayout>
  );
};

export default CustomerDashboard;