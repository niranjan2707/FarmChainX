import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../../Shared/DashboardLayout';
import DealerHome from './DealerHome';
import InventoryManagement from './InventoryManagement';
import SupplyChain from './SupplyChain';
import SalesAnalytics from './SalesAnalytics';
import { mockDealerInventory } from '../../../data/mockDealerInventory';
import { mockDealerFarmers } from '../../../data/mockDealerFarmers';

const DealerDashboard = () => {
  const [inventory, setInventory] = useState(mockDealerInventory);
  const [farmers, setFarmers] = useState(mockDealerFarmers);

  return (
    <DashboardLayout>
      <Routes>
        <Route index element={<DealerHome inventory={inventory} farmers={farmers} />} />
        <Route path="inventory" element={<InventoryManagement inventory={inventory} />} />
        <Route path="supply" element={<SupplyChain farmers={farmers} />} />
        <Route path="analytics" element={<SalesAnalytics />} />
      </Routes>
    </DashboardLayout>
  );
};

export default DealerDashboard;