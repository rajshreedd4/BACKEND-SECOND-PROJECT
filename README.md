#  Role-Based User Management System

A secure RESTful API built using **Node.js**, **Express.js**, **MongoDB**, and **JWT Authentication**. The application enables user authentication and role-based authorization with complete CRUD operations for users and roles.

---

##  Project Overview

The **Role-Based User Management System** is designed to manage users and their roles securely. It provides authentication using JSON Web Tokens (JWT), password encryption using bcrypt, and role-based access management.

The project follows a modular architecture, making it scalable, maintainable, and easy to understand.

---

##  Features

-  User Registration
-  User Login with JWT Authentication
-  Password Encryption using bcrypt
-  Secure Logout
-  JWT Authorization Middleware
-  Role Management
-  User Management
-  Update User Details
-  Delete Users
-  Get User by ID
-  Get All Users
-  Complete CRUD Operations for Roles
-  RESTful API Architecture
-  Environment Variable Configuration
-  MongoDB Atlas Integration

---

##  Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime Environment |
| Express.js | Backend Framework |
| MongoDB Atlas | Cloud Database |
| Mongoose | ODM |
| JWT | Authentication |
| bcrypt | Password Hashing |
| dotenv | Environment Variables |
| Express Validator | Input Validation |
| Nodemon | Development Server |

---

##  Project Structure

BACKEND-SECOND-PROJECT
│
├── config
│   └── db.js
│
├── controllers
│   ├── user.js
│   └── role.js
│
├── middleware
│   └── checkAuth.js
│
├── middlewares
│   └── auth.js
│
├── models
│   ├── user.js
│   └── role.js
│
├── routes
│   ├── user.js
│   └── role.js
│
├── .env
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

---

#  Installation

## 1. Clone the Repository

```bash
git clone https://github.com/rajshreedd4/BACKEND-SECOND-PROJECT.git
```

---

## 2. Navigate to Project Folder

```bash
cd BACKEND-SECOND-PROJECT
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Configure Environment Variables

Create a `.env` file in the project root.

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## 5. Start Development Server

```bash
npm run dev
```

Server will start on

```
http://localhost:3000
```

---

#  Authentication

Protected routes require a JWT token.

Add the following header:

```
Authorization: Bearer <JWT_TOKEN>
```

---

#  API Endpoints

##  User APIs

| Method | Endpoint | Description | Protected |
|--------|----------|-------------|-----------|
| POST | `/user/create` | Register User | ❌ |
| POST | `/user/login` | Login User | ❌ |
| GET | `/user/all` | Get All Users | ✅ |
| GET | `/user/:id` | Get User By ID | ✅ |
| PUT | `/user/update/:id` | Update User | ✅ |
| DELETE | `/user/delete/:id` | Delete User | ✅ |
| POST | `/user/logout` | Logout User | ✅ |

---

##  Role APIs

| Method | Endpoint | Description | Protected |
|--------|----------|-------------|-----------|
| POST | `/role/create` | Create Role | ✅ |
| GET | `/role/all` | Get All Roles | ✅ |
| GET | `/role/:id` | Get Role By ID | ✅ |
| PUT | `/role/update/:id` | Update Role | ✅ |
| DELETE | `/role/delete/:id` | Delete Role | ✅ |

---

#  Sample Requests

## Create Role

```http
POST /role/create
```

```json
{
    "name": "Admin",
    "description": "Administrator Role"
}
```

---

## Create User

```http
POST /user/create
```

```json
{
    "name": "Rajshree",
    "email": "rajd@gmail.com",
    "password": "123456",
    "mobileNumber": "9876543210",
    "roleId": "ROLE_ID"
}
```

---

## Login

```http
POST /user/login
```

```json
{
    "email": "rajd@gmail.com",
    "password": "123456"
}
```

### Response

```json
{
    "message": "Login successful",
    "token": "JWT_TOKEN"
}
```

---

#  API Testing

The APIs were tested using **Postman**.

### Recommended Testing Flow

1. Create Role
2. Create User
3. Login
4. Copy JWT Token
5. Access Protected APIs
6. Update User
7. Delete User
8. Logout

---

#  Dependencies

```json
{
  "bcrypt": "^6.0.0",
  "dotenv": "^17.4.2",
  "express": "^5.2.1",
  "express-validator": "^7.3.2",
  "jsonwebtoken": "^9.0.2",
  "mongodb": "^7.3.0",
  "mongoose": "^9.7.2",
  "nodemon": "^3.1.14"
}
```

---

#  Available Scripts

Run development server

```bash
npm run dev
```

Run production server

```bash
npm start
```

**package.json**

```json
"scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
}
```

---

#  Security Features

- Password Hashing using bcrypt
- JWT-based Authentication
- Protected Routes
- Environment Variables
- Role-Based Access
- Token Validation
- Secure Logout

---

#  Future Enhancements

- Refresh Tokens
- Forgot Password
- Email Verification
- OTP Authentication
- Admin Dashboard
- User Profile Images
- Pagination
- Search & Filtering
- Swagger API Documentation
- Docker Deployment
- Unit & Integration Testing

---

# 👨 Author

**Rajshree Dangat**

GitHub: **https://github.com/rajshreedd4**

---
