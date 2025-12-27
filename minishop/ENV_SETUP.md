# Environment Variables Setup

## Quick Setup

1. **Create `.env` file** in the `minishop` folder (root of React app)

2. **Copy the following content** to your `.env` file:

```env
# API Base URLs
# Main API URL (used for products, users, cart, orders)
REACT_APP_API_BASE_URL=http://localhost:5000

# Wishlist API URL (if different from main API)
# If not set, will use REACT_APP_API_BASE_URL
REACT_APP_WISHLIST_API_URL=http://localhost:5000

# Admin API URL (if different from main API)
# If not set, will use REACT_APP_API_BASE_URL
REACT_APP_ADMIN_API_URL=http://localhost:5000
```

## For Production

Update the URLs to your production backend:

```env
REACT_APP_API_BASE_URL=https://your-api-domain.com
REACT_APP_WISHLIST_API_URL=https://your-api-domain.com
REACT_APP_ADMIN_API_URL=https://your-api-domain.com
```

## Important Notes

1. **React requires `REACT_APP_` prefix** for environment variables to be accessible in the browser
2. **Restart the development server** after changing `.env` file
3. The `.env` file is already in `.gitignore` to keep your secrets safe
4. All API URLs are now managed from this single file via `src/config/api.js`

## How It Works

- All API calls now use the centralized config file: `src/config/api.js`
- The config file reads from environment variables
- If environment variables are not set, it defaults to `http://localhost:5000`
- You can override individual API URLs if needed (wishlist, admin)

## Testing

After setting up `.env`, restart your React app:

```bash
npm start
```

The app will now use the URLs from your `.env` file!

