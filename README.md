# User Management System (Node.js + MongoDB)

## Overview
This project is a **User Management System** built with **Node.js** and **MongoDB**. It includes user authentication, role-based access control (RBAC), and API endpoints for user registration, login, and authorization.

## Features
- **User Authentication** (JWT-based login/register system)
- **Role-based access control** (Admin/Director roles)
- **Password encryption** with bcrypt
- **Security best practices** (Helmet, CORS, Rate Limiting)
- **MongoDB integration** using Mongoose

## Technologies Used
- **Node.js** (Express.js framework)
- **MongoDB** (Mongoose for database interaction)
- **JWT** (for authentication)
- **Bcrypt** (password hashing)
- **Helmet & CORS** (security enhancements)

## Project Structure
```
backend/
│── src/
│   ├── config/
│   │   ├── db.js
│   ├── controllers/
│   │   ├── userController.js
│   │   ├── pageController.js
│   ├── middlewares/
│   │   ├── authMiddleware.js
│   │   ├── roleMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Page.js
│   ├── routes/
│   │   ├── userRoutes.js
│   │   ├── pageRoutes.js
│   ├── app.js
│   ├── server.js
│── .env
│── package.json
│── README.md
```

## Installation & Setup

### 1. Clone the repository:
```sh
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Install dependencies:
```sh
npm install
```

### 3. Configure environment variables:
Create a `.env` file in the root directory and add:
```
MONGO_URI=mongodb+srv://your-username:password@cluster.mongodb.net/your-database
JWT_SECRET=your-secret-key
```

### 4. Start the server:
```sh
npm start
```
The server will run on `http://localhost:5000`.

## API Endpoints

### **User Authentication**
| Method | Endpoint        | Description             |
|--------|----------------|-------------------------|
| POST   | /api/usuarios/register | Register a new user |
| POST   | /api/usuarios/login    | Authenticate user & get token |

### **Protected Routes**
| Method | Endpoint        | Access    | Description |
|--------|----------------|-----------|-------------|
| GET    | /api/usuarios/diretor | Directors only | Example protected route |

## License
This project is licensed under the MIT License.

## Author
- **Your Name** - [GitHub](https://github.com/your-username)

