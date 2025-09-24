import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { useAuth } from '../../../hooks/useAuth';
import { customerStats, lastVerifiedProduct, lastOrder } from '../../../data/mockCustomerData';
import './CustomerHome.css';

const CustomerHome = () => {
  const { user } = useAuth();

  return (
    <div className="customer-home">
      <h1>Welcome back, {user?.name}!</h1>
      <p className="home-subtitle">Your journey to trusted food starts here. Ready to verify a product?</p>

      <div className="home-grid">
        {/* Main Call to Action */}
        <div className="home-widget verify-cta">
          <div className="cta-icon">
            <span>📷</span>
          </div>
          <div className="cta-text">
            <h2>Verify a New Product</h2>
            <p>Scan a QR code to instantly trace your food's journey from the farm to your hands.</p>
          </div>
          <Link to="/customer/verify" className="cta-button">Start Scanning</Link>
        </div>

        {/* Quick Stats */}
        <div className="home-widget stat-widget">
          <h4>Products Verified</h4>
          <p className="stat-number">{customerStats.productsVerified}</p>
        </div>
        <div className="home-widget stat-widget">
          <h4>My Trust Score</h4>
          <p className="stat-number">{customerStats.trustScore}%</p>
        </div>
        <div className="home-widget stat-widget">
          <h4>Total Orders</h4>
          <p className="stat-number">{customerStats.totalOrders}</p>
        </div>

        {/* Recent Activity */}
        <div className="home-widget activity-widget">
          <h3>Recent Activity</h3>
          <div className="activity-item">
            <img src={lastVerifiedProduct.image} alt={lastVerifiedProduct.name} className="activity-img" />
            <div className="activity-info">
              <p><strong>Last Verified Product</strong></p>
              <p>{lastVerifiedProduct.name} from {lastVerifiedProduct.farm}</p>
              <p className="activity-date">Verified on {format(new Date(lastVerifiedProduct.verifiedDate), 'MMM d, yyyy')}</p>
            </div>
          </div>
          <hr />
          <div className="activity-item">
            <div className="activity-info">
              <p><strong>Last Order</strong></p>
              <p>{lastOrder.itemCount} items totaling ₹{lastOrder.totalAmount.toLocaleString('en-IN')}</p>
              <p className="activity-date">Ordered on {format(new Date(lastOrder.orderDate), 'MMM d, yyyy')} - <span className="status-delivered">{lastOrder.status}</span></p>
            </div>
            <Link to="/customer/orders" className="view-link">View Order</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerHome;