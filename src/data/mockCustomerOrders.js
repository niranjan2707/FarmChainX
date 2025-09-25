export const mockCustomerOrders = [
  {
    orderId: 'ORD-CUST-789B',
    orderDate: '2025-09-12',
    totalAmount: 2450.00, // in INR
    status: 'Delivered', // Processing, Shipped, Delivered, Cancelled
    items: [
      {
        productId: 'prod-tmt-456',
        name: 'Organic Roma Tomatoes',
        quantity: 5, // in kg
        price: 250.00, // per kg
        image: 'src/assets/Organic Roma Tomatoes.png'
      },
      {
        productId: 'prod-lettuce-123',
        name: 'Romaine Lettuce',
        quantity: 12, // heads
        price: 100.00, // per head
        image: 'src/assets/Romaine Lettuce.png'
      }
    ]
  },
  {
    orderId: 'ORD-CUST-A5C1',
    orderDate: '2025-08-20',
    totalAmount: 1280.00,
    status: 'Delivered',
    items: [
       {
        productId: 'prod-corn-789',
        name: 'Sweet Corn',
        quantity: 20, // cobs
        price: 64.00, // per cob
        image: 'src/assets/Sweet Corn.png'
      }
    ]
  },
    {
    orderId: 'ORD-CUST-B3D9',
    orderDate: '2025-09-16',
    totalAmount: 960.00,
    status: 'Shipped',
    items: [
       {
        productId: 'prod-pepper-456',
        name: 'Red Bell Peppers',
        quantity: 8, // in kg
        price: 120.00, // per kg
        image: 'src/assets/Red Bell Peppers.png'
      }
    ]
  }
];