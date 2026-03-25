# mern-chat-app

# 💬 MERN Realtime Chat Application

A **full-stack realtime chat application** built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js) and **Socket.io** for instant communication.

This project demonstrates how to build a modern messaging platform with secure authentication, realtime messaging, and a clean responsive UI.

---

## 🚀 Features

- 🔐 **User Authentication**
  - Signup & Login
  - JWT Authentication
  - Password hashing using Bcrypt

- 💬 **Realtime Messaging**
  - 1-to-1 chat using Socket.io
  - Instant message delivery

- 📨 **Chat History**
  - Messages stored in MongoDB
  - Retrieve previous conversations

- 📩 **Unread Message Handling**

- 📱 **Responsive UI**
  - Built with Tailwind CSS
  - Works on desktop and mobile

- 🧠 **State Management**
  - Redux Toolkit for predictable state flow

- ⚡ **Clean Backend Architecture**
  - Express.js REST APIs
  - Global error handling
  - Modular folder structure

---

## 🛠 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Redux Toolkit
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Realtime Communication
- Socket.io

### Authentication
- JWT (JSON Web Token)
- Bcrypt.js

---

## 📂 Project Structure

```
mern-chat-app
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── sockets
│   └── server.js
│
├── frontend
│   ├── components
│   ├── pages
│   ├── redux
│   ├── services
│   └── App.js
│
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/mern-chat-app.git
cd mern-chat-app
```

---

### 2️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

---

### 3️⃣ Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

---

### 4️⃣ Setup Environment Variables

Create a `.env` file inside the **backend** folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

---

### 5️⃣ Run the Application

Start backend:

```bash
cd backend
npm run dev
```

Start frontend:

```bash
cd frontend
npm start
```

---

## 📸 Demo

### Chat Interface
Realtime messaging with Socket.io.

### Authentication
Secure login and signup system using JWT.

---

## 📚 What You Will Learn From This Project

- Building **Full Stack MERN Applications**
- Implementing **JWT Authentication**
- Using **Socket.io for realtime communication**
- Managing state with **Redux Toolkit**
- Structuring **scalable backend APIs**

---

## 🌟 Why This Project?

✔ Real-world full-stack project  
✔ Great for developer portfolios  
✔ Covers realtime web technologies  
✔ Production-ready architecture

---

## 👨‍💻 Author

**Muhammad Zeeshan Khan**

- LinkedIn: https://www.linkedin.com/in/muhammad-zeeshan-khan-dev
- Instagram: https://www.instagram.com/z_4_zeeshuuu
- Facebook: https://www.facebook.com

---

## ⭐ Support

If you like this project, consider giving it a **⭐ on GitHub**!

---

## 📜 License

This project is licensed under the **MIT License**.
