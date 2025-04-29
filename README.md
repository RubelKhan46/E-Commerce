# E-Commerce Project README

This document provides a detailed overview of the E-Commerce project, including its structure, technologies, backend API, frontend connection, and admin panel functionality.

## 1. Project Overview

This is a full-stack E-Commerce application featuring:
*   A customer-facing **Frontend** built with React for browsing products, managing a shopping cart, and placing orders.
*   A **Backend** API built with Node.js and Express, handling data management, user authentication, and product logic.
*   An **Admin Panel** built with React for managing products (adding, listing, removing) and potentially orders.

The project is divided into three main directories: `frontend`, `backend`, and `admin`.

## 2. Technologies Used

*   **Backend**:
    *   Node.js
    *   Express.js
    *   MongoDB (with Mongoose ODM)
    *   Cloudinary (for image storage)
    *   jsonwebtoken (JWT for authentication)
    *   bcrypt (for password hashing)
    *   dotenv (for environment variables)
    *   cors
    *   multer (for handling file uploads)
*   **Frontend & Admin Panel**:
    *   React.js
    *   Vite (build tool)
    *   React Router DOM (for routing)
    *   Tailwind CSS (for styling)
    *   Axios (for API requests)
    *   React Toastify (for notifications)
    *   Context API (for state management in frontend)

## 3. Project Structure

```
E-Commerce/
├── admin/         # React Admin Panel source code
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/ (Login, Navbar, Sidebar)
│   │   ├── pages/      (Add, List, Orders)
│   │   ├── App.jsx     (Main app component, routing, auth check)
│   │   └── main.jsx    (Entry point)
│   ├── .env
│   ├── package.json
│   └── vite.config.js
├── backend/       # Node.js/Express Backend source code
│   ├── config/      (db.js, cloudinary.js)
│   ├── controllers/ (productController.js, userController.js)
│   ├── middleware/  (adminAuth.js, multer.js)
│   ├── models/      (productModel.js, userModel.js)
│   ├── routes/      (productRoute.js, userRoute.js)
│   ├── .env         # Environment variables (DB connection, JWT secret, Cloudinary keys, Admin creds)
│   ├── package.json
│   └── server.js    # Main server entry point
├── frontend/      # React Frontend source code
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/ (Navbar, Footer, ProductItem, CartTotal, etc.)
│   │   ├── context/    (ShopContext.jsx - manages cart, products, API calls)
│   │   ├── pages/      (Home, Collection, Product, Cart, Login, etc.)
│   │   ├── App.jsx     (Main app component, routing)
│   │   └── main.jsx    (Entry point)
│   ├── .env
│   ├── package.json
│   └── vite.config.js
└── README.md      # This file
```

## 4. Backend Details (`backend/`)

*   **Entry Point**: `server.js` initializes the Express app, connects to MongoDB (`config/db.js`) and Cloudinary (`config/cloudinary.js`), sets up middleware (CORS, JSON parsing), and defines API routes.
*   **Database**: MongoDB is used for storing user and product data. Mongoose schemas are defined in `models/`.
*   **Image Storage**: Cloudinary is used for storing product images uploaded via the admin panel.
*   **API Endpoints**:
    *   `/`: Basic API working check.
    *   `/api/user`: Handles user-related actions.
        *   `POST /register`: Creates a new user account.
        *   `POST /login`: Logs in a user and returns a JWT token.
        *   `POST /admin`: Logs in the administrator using credentials from `.env` and returns a JWT token.
    *   `/api/product`: Handles product-related actions.
        *   `POST /add`: Adds a new product (requires admin JWT token). Handles image uploads via `multer` middleware and saves URLs from Cloudinary.
        *   `POST /remove`: Removes a product by ID (requires admin JWT token).
        *   `GET /list`: Retrieves a list of all products.
        *   `POST /single`: Retrieves details for a single product by ID.
*   **Authentication**:
    *   Regular users are authenticated using JWT tokens generated upon login/registration (`controllers/userController.js`).
    *   Admin users log in via a specific endpoint (`/api/user/admin`) using credentials stored in `.env`. Admin-protected routes (`/api/product/add`, `/api/product/remove`) use the `middleware/adminAuth.js` middleware to verify the admin JWT token passed in the request header.
*   **Environment Variables (`backend/.env`)**: Contains sensitive information like MongoDB connection string, JWT secret key, Cloudinary API keys, and Admin login credentials.

## 5. Frontend Details (`frontend/`)

*   **Framework**: Built with React and Vite.
*   **Routing**: `react-router-dom` manages navigation between pages (`pages/`). The main routes are defined in `src/App.jsx`.
*   **State Management**: `src/context/ShopContext.jsx` uses React's Context API to manage global state, including:
    *   Product list (fetched from backend).
    *   Shopping cart items and logic (`addToCart`, `getCartCount`, `updateQuantity`, `getCartAmount`).
    *   Search state.
*   **API Connection**: Uses `axios` to communicate with the backend API. The base URL for the backend is configured in `frontend/src/.env` (via `VITE_BACKEND_URL`) and accessed in `ShopContext.jsx`. Product data is fetched from `/api/product/list`.
*   **Components**: Reusable UI elements are organized in `src/components/`.
*   **Styling**: Tailwind CSS is used for styling.

## 6. Admin Panel Details (`admin/`)

*   **Framework**: Built with React and Vite.
*   **Authentication**:
    *   The admin panel requires login via the `/api/user/admin` backend endpoint.
    *   Upon successful login (`src/components/Login.jsx`), a JWT token is received and stored in the browser's local storage.
    *   The main `src/App.jsx` checks for this token. If present, it renders the admin interface (Navbar, Sidebar, Pages); otherwise, it renders the Login component.
    *   The token is passed as a prop to pages that need to make authenticated API calls (e.g., Add, List).
*   **Functionality**:
    *   **Add Product (`src/pages/Add.jsx`)**: Provides a form to input product details (name, description, price, category, sizes, images). On submission, it sends a `POST` request with `FormData` (including images) and the admin token in the header to the `/api/product/add` backend endpoint.
    *   **List Products (`src/pages/List.jsx`)**: Likely displays a table of existing products fetched from `/api/product/list` and provides functionality to remove products (sending a `POST` request to `/api/product/remove` with the product ID and admin token).
    *   **Orders (`src/pages/Orders.jsx`)**: Functionality for viewing/managing customer orders (details not fully explored in this analysis).
*   **API Connection**: Uses `axios` to interact with the backend API. The base URL is configured in `admin/.env` (via `VITE_BACKEND_URL`) and imported in `src/App.jsx`. Authenticated requests include the admin token in the `headers`.

## 7. Setup and Running

**Prerequisites**: Node.js, npm (or yarn), MongoDB instance (local or cloud).

**General Steps**:

1.  **Clone the repository.**
2.  **Backend Setup**:
    *   Navigate to the `backend` directory: `cd backend`
    *   Create a `.env` file based on `.env.example` (if provided) or manually add the required variables:
        *   `PORT` (e.g., 4000)
        *   `MONGO_URI` (your MongoDB connection string)
        *   `JWT_SECRET` (a strong secret key)
        *   `CLOUDINARY_CLOUD_NAME`
        *   `CLOUDINARY_API_KEY`
        *   `CLOUDINARY_API_SECRET`
        *   `ADMIN_EMAIL` (desired admin email)
        *   `ADMIN_PASSWORD` (desired admin password)
    *   Install dependencies: `npm install`
    *   Run the server: `npm start` (or `node server.js`, `nodemon server.js`)
3.  **Frontend Setup**:
    *   Navigate to the `frontend` directory: `cd ../frontend`
    *   Create a `.env` file (or `src/.env`) and add:
        *   `VITE_BACKEND_URL=http://localhost:4000` (replace 4000 if your backend runs on a different port)
    *   Install dependencies: `npm install`
    *   Run the development server: `npm run dev`
4.  **Admin Panel Setup**:
    *   Navigate to the `admin` directory: `cd ../admin`
    *   Create a `.env` file and add:
        *   `VITE_BACKEND_URL=http://localhost:4000` (replace 4000 if your backend runs on a different port)
    *   Install dependencies: `npm install`
    *   Run the development server: `npm run dev`

Now you should be able to access the frontend (usually `http://localhost:5173`) and the admin panel (usually `http://localhost:5174`, check Vite output for exact ports).
