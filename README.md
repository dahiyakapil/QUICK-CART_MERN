# 🛒 QuickCart – Full Stack eCommerce Website

QuickCart is a modern, responsive, full-featured eCommerce web application built using the **MERN Stack** (MongoDB, Express, React, Node.js). It includes both user and admin interfaces with payment gateway integration, making it a perfect showcase of real-world full stack development.

---




## 🧰 Tech Stack

### Frontend
- ⚛️ React.js (with Vite)
- 🎨 Tailwind CSS
- 🌍 React Router DOM
- 🧠 Redux Toolkit (State Management)
- 🔐 Axios (API Requests + Interceptors)
- ✅ Form Validation (Zod + React Hook Form)

### Backend
- 🟢 Node.js & Express.js
- 🛢️ MongoDB + Mongoose
- 🔐 JWT Authentication
- ☁️ Cloudinary (Image Uploads)
- 💳 PayPal SDK (Payment Integration)

---

## 📦 Features

### 👨‍🛒 Customer Features
- 🔍 Product browsing and filtering
- 🛒 Add to cart / Remove from cart
- 💳 Checkout with PayPal
- 📦 Order tracking
- 🔐 Authentication: Login/Register
- 🗂️ Address Management
- 📜 Order History with status badges

### 🛠️ Admin Features
- 📦 Product management (CRUD)
- 📊 Dashboard Overview
- 🚚 Order management (update order status)
- 🧍‍♂️ View all users and orders
- 📁 Image uploads via Cloudinary

---

## 📸 Screenshots

## 📸 Screenshots

| Landing Page | Product Page | Admin Orders |
|--------------|--------------|--------------|
| ![Landing](https://github.com/user-attachments/assets/d4478a08-c164-482c-906d-caa81c84fd36) | ![Product](https://github.com/user-attachments/assets/93f11d85-9701-4693-949c-55632f78f45f) | ![Admin Orders](https://github.com/user-attachments/assets/27310298-640f-4a0d-9552-376498533bd3) |

---

## 🧪 How to Run Locally

```bash
# 1. Clone this repository
git clone https://github.com/dahiyakapil/QUICK-CART_MERN.git
cd quickcart

# 2. Install dependencies for both frontend & backend
cd client
npm install
cd ../server
npm install

# 3. Setup environment variables
# Create .env in /server and add:
PORT=5000
MONGODB_URI=your_mongo_uri
CLOUDINARY_CLOUD_NAME=xxxx
CLOUDINARY_API_KEY=xxxx
CLOUDINARY_API_SECRET=xxxx
PAYPAL_CLIENT_ID=xxxx
PAYPAL_CLIENT_SECRET=xxxx

# 4. Start Backend
cd server
npm run dev

# 5. Start Frontend
cd ../client
npm run dev
