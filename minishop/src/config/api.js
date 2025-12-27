// API Configuration
// All API base URLs are managed from environment variables

export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';
export const WISHLIST_API_URL = process.env.REACT_APP_WISHLIST_API_URL || process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';
export const ADMIN_API_URL = process.env.REACT_APP_ADMIN_API_URL || process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

// Export all API endpoints
export const API_ENDPOINTS = {
  // Products
  PRODUCTS: `${API_BASE_URL}/data`,
  PRODUCT_BY_ID: (id) => `${API_BASE_URL}/data/${id}`,
  
  // Users
  USERS: `${API_BASE_URL}/user`,
  USER_BY_ID: (id) => `${API_BASE_URL}/user/${id}`,
  USER_BY_NAME: (name) => `${API_BASE_URL}/user?name=${name}`,
  
  // Cart
  CART: `${API_BASE_URL}/cart`,
  CART_BY_ID: (id) => `${API_BASE_URL}/cart/${id}`,
  
  // Wishlist
  WISHLIST: `${WISHLIST_API_URL}/wishList`,
  WISHLIST_BY_ID: (id) => `${WISHLIST_API_URL}/wishList/${id}`,
  
  // Admin
  ADMIN_LOGIN: `${ADMIN_API_URL}/api/auth/login`,
  ADMIN_REGISTER: `${ADMIN_API_URL}/api/auth/register`,
};

