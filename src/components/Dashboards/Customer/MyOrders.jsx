import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { mockCustomerOrders } from '../../../data/mockCustomerOrders';
import './MyOrders.css';

const MyOrders = () => {
  const [orders] = useState(mockCustomerOrders);
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  const handleToggleDetails = (orderId) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  return (
    <div className="my-orders">
      <h1>My Orders</h1>
      <p>View your order history and track your purchases.</p>
      <div className="order-list-container">
        {orders.map((order) => (
          <div key={order.orderId} className="order-card-wrapper">
            <div className="order-summary" onClick={() => handleToggleDetails(order.orderId)}>
              <div className="summary-info">
                <h3>Order #{order.orderId}</h3>
                <p>Date: {format(new Date(order.orderDate), 'PPP')}</p>
              </div>
              <div className="summary-status">
                <span className={`status-badge status-${order.status.toLowerCase()}`}>{order.status}</span>
              </div>
              <div className="summary-total">
                <p>₹{order.totalAmount.toLocaleString('en-IN')}</p>
              </div>
              <div className="summary-caret">
                <span>{expandedOrderId === order.orderId ? '▲' : '▼'}</span>
              </div>
            </div>

            <div className={`order-details ${expandedOrderId === order.orderId ? 'expanded' : ''}`}>
              <h4>Items in this order:</h4>
              {order.items.map((item) => (
                <div key={item.productId} className="order-item">
                  <img src={item.image} alt={item.name} className="item-image" />
                  <div className="item-info">
                    <p className="item-name">{item.name}</p>
                    <p className="item-qty">Quantity: {item.quantity}</p>
                  </div>
                  <div className="item-price">
                    <p>₹{item.price.toFixed(2)}</p>
                  </div>
                  <Link to="/customer/verify" className="trace-button">Trace Product</Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;