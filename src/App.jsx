import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import FarmerDashboard from './components/Dashboards/Farmer/FarmerDashboard';
import DealerDashboard from './components/Dashboards/Dealer/DealerDashboard';
import RetailerDashboard from './components/Dashboards/Retailer/RetailerDashboard';
import CustomerDashboard from './components/Dashboards/Customer/CustomerDashboard';
import AdminDashboard from './components/Dashboards/Admin/AdminDashboard';
import { useAuth } from './hooks/useAuth';

function App() {
  const { user } = useAuth();

  const getDashboardPath = (role) => {
    switch (role) {
      case 'farmer':
        return '/farmer';
      case 'dealer':
        return '/dealer';
      case 'retailer':
        return '/retailer';
      case 'customer':
        return '/customer';
      case 'admin':
        return '/admin';
      default:
        return '/login';
    }
  };

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Redirect root path */}
      <Route 
        path="/" 
        element={
          user ? <Navigate to={getDashboardPath(user.role)} replace /> : <Navigate to="/login" replace />
        } 
      />

      {/* Protected Routes */}
      <Route path="/farmer/*" element={<ProtectedRoute allowedRoles={['farmer']}><FarmerDashboard /></ProtectedRoute>} />
      <Route path="/dealer/*" element={<ProtectedRoute allowedRoles={['dealer']}><DealerDashboard /></ProtectedRoute>} />
      <Route path="/retailer/*" element={<ProtectedRoute allowedRoles={['retailer']}><RetailerDashboard /></ProtectedRoute>} />
      <Route path="/customer/*" element={<ProtectedRoute allowedRoles={['customer']}><CustomerDashboard /></ProtectedRoute>} />
      <Route path="/admin/*" element={<ProtectedRoute allowedRoles={['admin']}><AdminDashboard /></ProtectedRoute>} />

      {/* Fallback Route */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;