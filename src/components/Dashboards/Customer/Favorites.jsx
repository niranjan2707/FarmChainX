import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { favoriteProducts, favoriteFarms } from '../../../data/mockCustomerFavorites';
import './Favorites.css';

const Favorites = () => {
  const [favProducts, setFavProducts] = useState(favoriteProducts);
  const [favFarms, setFavFarms] = useState(favoriteFarms);
  const [activeTab, setActiveTab] = useState('products'); // 'products' or 'farms'

  const handleRemoveProduct = (productId) => {
    if (window.confirm('Are you sure you want to remove this product from your favorites?')) {
      setFavProducts(favProducts.filter(p => p.productId !== productId));
    }
  };
  
  const handleRemoveFarm = (farmId) => {
    if (window.confirm('Are you sure you want to remove this farm from your favorites?')) {
      setFavFarms(favFarms.filter(f => f.farmId !== farmId));
    }
  };

  return (
    <div className="favorites-page">
      <h1>My Favorites</h1>
      <p>Keep track of the products and farms you love.</p>

      <div className="fav-tabs">
        <button 
          onClick={() => setActiveTab('products')} 
          className={activeTab === 'products' ? 'active' : ''}
        >
          Favorite Products ({favProducts.length})
        </button>
        <button 
          onClick={() => setActiveTab('farms')} 
          className={activeTab === 'farms' ? 'active' : ''}
        >
          Favorite Farms ({favFarms.length})
        </button>
      </div>

      <div className="fav-content">
        {activeTab === 'products' && (
          favProducts.length > 0 ? (
            <div className="fav-grid">
              {favProducts.map(product => (
                <div key={product.productId} className="fav-product-card">
                  <img src={product.image} alt={product.name} />
                  <div className="fav-card-info">
                    <h3>{product.name}</h3>
                    <p>from {product.farmName}</p>
                  </div>
                  <div className="fav-card-actions">
                    <Link to="/customer/verify" className="fav-button">Trace</Link>
                    <button onClick={() => handleRemoveProduct(product.productId)} className="fav-button remove">Remove</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">You haven't added any favorite products yet.</div>
          )
        )}
        
        {activeTab === 'farms' && (
          favFarms.length > 0 ? (
            <div className="fav-list">
              {favFarms.map(farm => (
                <div key={farm.farmId} className="fav-farm-card">
                  <img src={farm.farmerPhoto} alt={farm.farmerName} />
                  <div className="fav-card-info">
                    <h3>{farm.farmName}</h3>
                    <p>{farm.farmerName} - {farm.location}</p>
                  </div>
                  <div className="fav-card-actions">
                     <button className="fav-button">View Products</button>
                     <button onClick={() => handleRemoveFarm(farm.farmId)} className="fav-button remove">Remove</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
             <div className="empty-state">You haven't added any favorite farms yet.</div>
          )
        )}
      </div>
    </div>
  );
};

export default Favorites;