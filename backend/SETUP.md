# Backend Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Configure Environment**
   - Copy `.env.example` to `.env` (if not already created)
   - Update MongoDB connection string if needed
   - Default MongoDB URI: `mongodb://localhost:27017/industrybuying`

3. **Start MongoDB**
   - Make sure MongoDB is running on your system
   - Or use MongoDB Atlas (cloud) and update the connection string in `.env`

4. **Seed Database (Optional)**
   ```bash
   npm run seed
   ```
   This will populate the database with sample products and users.

5. **Start the Server**
   ```bash
   npm run dev
   ```
   Server will start on `http://localhost:5000`

## Updating Frontend API URLs

After setting up the backend, you need to update the frontend API URLs:

### Option 1: Update each API file manually

Update the base URLs in these files:
- `minishop/src/redux/Cart/Cart.api.js`
- `minishop/src/redux/Order/Order.api.js`
- `minishop/src/redux/Wishlist/Wishlist.api.js`
- `minishop/src/redux/SingleProducts/SingleProduct.api.js`
- `minishop/src/redux/AddUser/User.api.js`
- `minishop/src/redux/admin_data/admin.api.js`
- `minishop/src/redux/admin_auth/admin.api.js`
- `minishop/src/Pages/Home/Home.jsx`
- `minishop/src/Pages/products/Products.jsx`
- `minishop/src/Pages/SingleProduct/SinglePage.jsx`
- `minishop/src/Pages/Wishlist/Wishlist.jsx`

Change from:
- `https://lackadaisical-volcano-larch.glitch.me` → `http://localhost:5000`
- `https://busy-peplum-fawn.cyclic.app` → `http://localhost:5000`
- `https://potent-hot-uncle.glitch.me` → `http://localhost:5000`

### Option 2: Create a config file (Recommended)

Create a config file `minishop/src/config/api.js`:
```javascript
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
```

Then update all API files to use this base URL.

## API Endpoints Summary

All endpoints maintain the same structure as the original backend:

- **Products**: `/data`
- **Users**: `/user`
- **Cart**: `/cart`
- **Wishlist**: `/wishList`
- **Admin Auth**: `/api/auth/login`

## Testing the API

You can test the API using:
- Postman
- curl
- Browser (for GET requests)

Example:
```bash
# Get all products
curl http://localhost:5000/data

# Get user by name
curl http://localhost:5000/user?name=John

# Get single product
curl http://localhost:5000/data/prod_1
```

## Default Admin Login

- Email: `admin@admin.com`
- Password: `admin123`

**Important**: Change these credentials in production!

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running: `mongod` or check MongoDB service
- Verify connection string in `.env`
- For MongoDB Atlas, whitelist your IP address

### Port Already in Use
- Change PORT in `.env` file
- Or kill the process using the port

### CORS Issues
- The server is configured to accept all origins
- For production, restrict CORS to your frontend domain

## Production Deployment

1. Set `NODE_ENV=production` in `.env`
2. Use a strong `JWT_SECRET`
3. Update `MONGODB_URI` to production database
4. Change admin credentials
5. Restrict CORS to your frontend domain
6. Use a process manager like PM2

