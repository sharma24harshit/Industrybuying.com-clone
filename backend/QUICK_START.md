# Quick Start Guide

## 5-Minute Setup

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Create `.env` File
Create a `.env` file in the `backend` folder:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/industrybuying
JWT_SECRET=your_secret_key_here
ADMIN_EMAIL=admin@admin.com
ADMIN_PASSWORD=admin123
```

### 3. Start MongoDB
Make sure MongoDB is running:
- **Windows**: MongoDB service should be running
- **Mac/Linux**: `mongod` or `brew services start mongodb-community`
- **Cloud**: Use MongoDB Atlas connection string

### 4. Seed Database (Optional)
```bash
npm run seed
```

### 5. Start Server
```bash
npm run dev
```

Server will be running at: `http://localhost:5000`

## Test the API

```bash
# Health check
curl http://localhost:5000/

# Get all products
curl http://localhost:5000/data

# Get user by name
curl http://localhost:5000/user?name=John
```

## Update Frontend

Change API URLs in frontend files from:
- `https://lackadaisical-volcano-larch.glitch.me` → `http://localhost:5000`
- `https://busy-peplum-fawn.cyclic.app` → `http://localhost:5000`
- `https://potent-hot-uncle.glitch.me` → `http://localhost:5000`

## Default Admin Login

- Email: `admin@admin.com`
- Password: `admin123`

## Common Issues

**MongoDB Connection Error:**
- Check if MongoDB is running
- Verify connection string in `.env`

**Port Already in Use:**
- Change PORT in `.env` file

**Module Not Found:**
- Run `npm install` again

## Need Help?

- See `README.md` for detailed documentation
- See `SETUP.md` for step-by-step setup
- See `API_DOCUMENTATION.md` for API reference

