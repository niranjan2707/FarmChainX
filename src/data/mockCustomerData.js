// Data for the customer with email customer@demo.com

export const customerStats = {
  productsVerified: 14,
  trustScore: 88, // A score out of 100
  totalOrders: 5,
};

export const lastVerifiedProduct = {
  productId: 'prod-tmt-456',
  name: 'Organic Roma Tomatoes',
  farm: 'Green Valley Organic Farm',
  verifiedDate: '2025-09-15',
  image: 'https://images.unsplash.com/photo-1587049352851-4a2e7c45e42e?auto=format&fit=crop&q=80&w=400'
};

export const lastOrder = {
  orderId: 'ORD-CUST-789B',
  orderDate: '2025-09-12',
  totalAmount: 2450.00, // in INR
  itemCount: 3,
  status: 'Delivered'
};

// ADDED: Initial verification history for the customer
export const verificationHistory = [
  {
    scanId: 'scan-001',
    productId: 'prod-tmt-456',
    name: 'Organic Roma Tomatoes',
    farm: 'Green Valley Organic Farm',
    scanDate: '2025-09-15T10:30:00Z',
    status: 'Verified',
    image: 'https://images.unsplash.com/photo-1587049352851-4a2e7c45e42e?auto=format&fit=crop&q=80&w=400'
  },
  {
    scanId: 'scan-002',
    productId: 'prod-corn-789', // Example ID
    name: 'Sweet Corn',
    farm: 'Sunshine Farms',
    scanDate: '2025-09-10T18:00:00Z',
    status: 'Verified',
    image: 'https://images.unsplash.com/photo-1598164074852-36b72a29339f?auto=format&fit=crop&q=80&w=400'
  },
];

// ADDED: A place to store new reviews submitted by the user (starts empty)
export let customerReviews = [];