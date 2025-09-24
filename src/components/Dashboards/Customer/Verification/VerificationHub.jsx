import React, { useState } from 'react';
import QRScanner from './QRScanner';
import ProductVerifier from './ProductVerifier';
import VerificationHistory from './VerificationHistory';
import { mockProducts } from '../../../../data/mockProducts';
import { v4 as uuidv4 } from 'uuid';
import './VerificationHub.css';

const VerificationHub = ({ history, onAddHistory, onAddReview }) => {
  const [activeView, setActiveView] = useState('scanner');
  const [verificationResult, setVerificationResult] = useState(null);
  const [error, setError] = useState('');
  const [showScanner, setShowScanner] = useState(true);

  const handleScanSuccess = (decodedText) => {
    // --- DEBUGGING LOG ---
    console.log("Scan successful! Decoded Text:", decodedText);

    setError('');
    const product = mockProducts.find(p => p.qrValue.trim() === decodedText.trim());
    
    // --- DEBUGGING LOG ---
    if (product) {
      console.log("Product found in database:", product);
    } else {
      console.error("Product NOT FOUND in database for the scanned code.");
    }
    
    if (product) {
      setVerificationResult(product);
      setShowScanner(false);
      onAddHistory({
        scanId: `scan-${uuidv4()}`,
        productId: product.productId,
        name: product.productData.name,
        farm: product.productData.location.farm,
        scanDate: new Date().toISOString(),
        status: 'Verified',
        image: product.productData.images[0]
      });
    } else {
      setVerificationResult(null);
      setError('Product not found. Please ensure you are scanning a valid FarmChainX QR code.');
    }
  };

  const resetScanner = () => {
    setVerificationResult(null);
    setError('');
    setShowScanner(true);
  };

  const renderScannerView = () => {
    if (showScanner) {
      return (
        <div className="scanner-container widget">
          <h3>Scan Product QR Code</h3>
          {error && <p className="verification-error-inline">{error}</p>}
          <p>Position the QR code inside the frame or upload an image.</p>
          <QRScanner onScanSuccess={handleScanSuccess} onScanError={() => {}} />
        </div>
      );
    }
    return (
      <div className="results-container">
        <button onClick={resetScanner} className="new-scan-button">Scan Another Product</button>
        {verificationResult && <ProductVerifier product={verificationResult} onAddReview={onAddReview} />}
      </div>
    );
  };

  return (
    <div className="verification-hub">
      <h1>Product Verification Portal</h1>
      <nav className="hub-nav">
        <button onClick={() => setActiveView('scanner')} className={activeView === 'scanner' ? 'active' : ''}>
          Scanner
        </button>
        <button onClick={() => setActiveView('history')} className={activeView === 'history' ? 'active' : ''}>
          History
        </button>
      </nav>

      <div className="hub-content">
        {activeView === 'scanner' && renderScannerView()}
        {activeView === 'history' && <VerificationHistory history={history} />}
      </div>
    </div>
  );
};

export default VerificationHub;