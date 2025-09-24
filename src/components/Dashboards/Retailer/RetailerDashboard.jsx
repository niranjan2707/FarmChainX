import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../../Shared/DashboardLayout';
import RetailerHome from './RetailerHome';
import StoreInventory from './StoreInventory';
import CustomerAnalytics from './CustomerAnalytics';
import SalesPerformance from './SalesPerformance';
import SupplyManagement from './SupplyManagement';

const RetailerDashboard = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route index element={<RetailerHome />} />
        <Route path="inventory" element={<StoreInventory />} />
        <Route path="customers" element={<CustomerAnalytics />} />
        <Route path="sales" element={<SalesPerformance />} />
        <Route path="supply" element={<SupplyManagement />} />
      </Routes>
    </DashboardLayout>
  );
};

export default RetailerDashboard;