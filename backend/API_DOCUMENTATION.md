# API Documentation

Complete API documentation for Industrybuying.com Clone Backend.

## Base URL
```
http://localhost:5000
```

## Products API

### Get All Products
```http
GET /data
```

**Query Parameters:**
- `_page` (number): Page number for pagination
- `_limit` (number): Items per page
- `Categories` (string): Filter by category
- `q` (string): Search query
- `_sort` (string): Field to sort by (e.g., "price")
- `_order` (string): Sort order ("asc" or "desc")

**Examples:**
```bash
# Get all products
GET /data

# Get paginated products
GET /data?_page=1&_limit=10

# Get products by category
GET /data?Categories=t_shirt

# Search and sort
GET /data/?q=shoes&_sort=price&_order=asc
```

**Response:**
```json
[
  {
    "id": "prod_1",
    "name": "Classic White T-Shirt",
    "brand": "BrandX",
    "Categories": "t_shirt",
    "price": "599",
    "og_price": "999",
    "saving": "40% off",
    "rating": 4.5,
    "raitng": 4.5,
    "image": ["url1", "url2", "url3", "url4"],
    "discription": "Product description",
    "show": true
  }
]
```

### Get Single Product
```http
GET /data/:id
```

**Example:**
```bash
GET /data/prod_1
```

### Update Product
```http
PATCH /data/:id
```

**Body:**
```json
{
  "show": false,
  "price": "699"
}
```

### Create Product
```http
POST /data
```

**Body:**
```json
{
  "id": "prod_8",
  "name": "New Product",
  "brand": "Brand",
  "Categories": "t_shirt",
  "price": "599",
  "image": ["url1", "url2"]
}
```

### Delete Product
```http
DELETE /data/:id
```

---

## Users API

### Get All Users
```http
GET /user
```

### Get User by Name
```http
GET /user?name=John
```

### Get User by ID
```http
GET /user/:id
```

**Example:**
```bash
GET /user/user_1
```

**Response:**
```json
{
  "id": "user_1",
  "name": "John Doe",
  "email": "john@example.com",
  "profile": "profile_url",
  "active": true,
  "cart": [],
  "whishList": [],
  "orders": []
}
```

### Create User
```http
POST /user
```

**Body:**
```json
{
  "id": "user_2",
  "name": "Jane Doe",
  "email": "jane@example.com",
  "profile": "profile_url",
  "active": true,
  "cart": [],
  "whishList": [],
  "orders": []
}
```

### Update User Cart
```http
POST /user?name=John
```

**Body:** (Cart array)
```json
[
  {
    "id": "prod_1",
    "name": "Product Name",
    "price": "599",
    "qty": 2,
    "image": ["url1", "url2"]
  }
]
```

### Update User
```http
PATCH /user/:id
```

**Body:**
```json
{
  "active": false,
  "cart": [...]
}
```

### Delete User
```http
DELETE /user/:id
```

---

## Cart API

### Get All Cart Items
```http
GET /cart
```

**Response:**
```json
[
  {
    "id": "cart_1",
    "name": "Product Name",
    "price": "599",
    "qty": 1,
    "image": ["url1", "url2"]
  }
]
```

### Add to Cart
```http
POST /cart
```

**Body:**
```json
{
  "id": "prod_1",
  "name": "Product Name",
  "price": "599",
  "qty": 1,
  "image": ["url1", "url2"]
}
```

### Delete Cart Item
```http
DELETE /cart/:id
```

### Update Cart Item
```http
PATCH /cart/:id
```

**Body:**
```json
{
  "qty": 2
}
```

---

## Wishlist API

### Get All Wishlist Items
```http
GET /wishList
```

**Response:**
```json
[
  {
    "id": "wish_1",
    "name": "Product Name",
    "price": "599",
    "image": ["url1", "url2"]
  }
]
```

### Add to Wishlist
```http
POST /wishList
```

**Body:**
```json
{
  "id": "prod_1",
  "name": "Product Name",
  "price": "599",
  "image": ["url1", "url2"]
}
```

### Remove from Wishlist
```http
DELETE /wishList/:id
```

### Update Wishlist Item
```http
PATCH /wishList/:id
```

---

## Admin API

### Admin Login
```http
POST /api/auth/login
```

**Body:**
```json
{
  "email": "admin@admin.com",
  "password": "admin123"
}
```

**Response:**
```json
{
  "access_token": "jwt_token_here",
  "message": "Login successful"
}
```

### Admin Register
```http
POST /api/auth/register
```

**Body:**
```json
{
  "email": "newadmin@admin.com",
  "password": "securepassword"
}
```

---

## Error Responses

All endpoints may return the following error responses:

### 400 Bad Request
```json
{
  "error": "Error message"
}
```

### 401 Unauthorized
```json
{
  "error": "Invalid credentials"
}
```

### 404 Not Found
```json
{
  "error": "Resource not found"
}
```

### 500 Internal Server Error
```json
{
  "error": "Error message"
}
```

---

## Data Models

### Product
- `id` (String, unique, required)
- `name` (String, required)
- `brand` (String, required)
- `Categories` (String, required)
- `price` (String, required)
- `og_price` (String)
- `saving` (String)
- `rating` (Number)
- `raitng` (Number)
- `image` (Array of Strings, required)
- `discription` (String)
- `show` (Boolean, default: true)

### User
- `id` (String, unique, required)
- `name` (String, required)
- `email` (String, unique, required)
- `profile` (String)
- `active` (Boolean, default: true)
- `cart` (Array)
- `whishList` (Array)
- `orders` (Array)

### Cart Item
- `id` (String, required)
- `name` (String, required)
- `price` (String, required)
- `qty` (Number, default: 1)
- `image` (Array of Strings, required)
- ... (other product fields)

### Wishlist Item
- `id` (String, required)
- `name` (String, required)
- `price` (String, required)
- `image` (Array of Strings, required)
- ... (other product fields)

---

## Notes

1. All routes maintain the same structure as the original backend for compatibility
2. Query parameters match the original API format
3. Response formats are consistent with frontend expectations
4. CORS is enabled for all origins (restrict in production)
5. MongoDB indexes are created for better query performance

