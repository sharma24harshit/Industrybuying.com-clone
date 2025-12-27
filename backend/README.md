# Industrybuying.com Clone - Backend API

This is the backend API server for the Industrybuying.com clone project. It's built with Express.js, Node.js, and MongoDB.

## Features

- RESTful API endpoints for products, users, cart, wishlist, and orders
- MongoDB database integration
- Admin authentication
- CORS enabled for frontend integration
- JWT-based authentication for admin routes

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance like MongoDB Atlas)
- npm or yarn

## Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/industrybuying
JWT_SECRET=your_jwt_secret_key_here
ADMIN_EMAIL=admin@admin.com
ADMIN_PASSWORD=admin123
```

4. Make sure MongoDB is running on your system or update `MONGODB_URI` with your MongoDB connection string.

## Running the Server

### Development Mode (with auto-reload):
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

The server will start on `http://localhost:5000` (or the port specified in your `.env` file).

## API Endpoints

### Products

- `GET /data` - Get all products
  - Query params: `_page`, `_limit`, `Categories`, `q` (search), `_sort`, `_order`
  - Example: `/data?_page=1&_limit=10`
  - Example: `/data?Categories=t_shirt`
  - Example: `/data/?q=shoes&_sort=price&_order=asc`

- `GET /data/:id` - Get single product by ID

- `PATCH /data/:id` - Update product

- `POST /data` - Create new product

- `DELETE /data/:id` - Delete product

### Users

- `GET /user` - Get all users
  - Query param: `name` - Get user by name
  - Example: `/user?name=John`

- `GET /user/:id` - Get user by ID

- `POST /user` - Create new user

- `PATCH /user/:id` - Update user

- `DELETE /user/:id` - Delete user

### Cart

- `GET /cart` - Get all cart items (orders)

- `POST /cart` - Add item to cart

- `DELETE /cart/:id` - Remove item from cart

- `PATCH /cart/:id` - Update cart item

### Wishlist

- `GET /wishList` - Get all wishlist items

- `POST /wishList` - Add item to wishlist

- `DELETE /wishList/:id` - Remove item from wishlist

- `PATCH /wishList/:id` - Update wishlist item

### Admin

- `POST /api/auth/login` - Admin login
  - Body: `{ "email": "admin@admin.com", "password": "admin123" }`
  - Returns: `{ "access_token": "..." }`

- `POST /api/auth/register` - Create new admin account

## Database Models

### Product
- id (String, unique)
- name (String)
- brand (String)
- Categories (String)
- price (String)
- og_price (String)
- saving (String)
- rating (Number)
- raitng (Number)
- image (Array of Strings)
- discription (String)
- show (Boolean)

### User
- id (String, unique)
- name (String)
- email (String, unique)
- profile (String)
- active (Boolean)
- cart (Array)
- whishList (Array)
- orders (Array)

### Cart
- id (String)
- name (String)
- brand (String)
- Categories (String)
- price (String)
- image (Array of Strings)
- qty (Number)
- ... (other product fields)

### Wishlist
- id (String)
- name (String)
- price (String)
- image (Array of Strings)
- ... (other product fields)

## Default Admin Credentials

- Email: `admin@admin.com`
- Password: `admin123`

**Note:** Change these credentials in production!

## CORS Configuration

The server is configured to accept requests from any origin. For production, you should restrict this to your frontend domain.

## Error Handling

All endpoints return appropriate HTTP status codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Internal Server Error

## Notes

- The API maintains the same routing structure as the original backend to ensure compatibility with the frontend.
- All endpoints support the same query parameters and request/response formats as the original API.
- MongoDB indexes are created for better query performance.

## Troubleshooting

1. **MongoDB Connection Error**: Make sure MongoDB is running and the connection string in `.env` is correct.

2. **Port Already in Use**: Change the PORT in `.env` file.

3. **Module Not Found**: Run `npm install` again.

## License

ISC

