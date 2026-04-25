# 💬 ChatterPop - Real-Time Chat Application

A full-stack **real-time chat application** built with modern web technologies and deployed using **containerized DevOps practices**.

This project demonstrates:

* Full-stack development (React + Node.js)
* Containerization using Docker
* Multi-service orchestration using Docker Compose
* Reverse proxy configuration with NGINX
* Real-time communication using WebSockets

---

## 🚀 Features

* 🔐 JWT-based authentication
* 💬 Real-time messaging using Socket.io
* ☁️ Media uploads via Cloudinary
* ⚡ Fast frontend with Vite
* 📦 Fully containerized architecture

---

## 🧱 Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS

### Backend

* Node.js
* Express.js
* Socket.io

### Services

* MongoDB Atlas
* Cloudinary

### DevOps

* Docker
* Docker Compose
* NGINX

---

## 📂 Project Structure

```
ChatterPoP/
├── frontend/
├── backend/
├── docker-compose.yml
└── README.md
```

---

## ⚙️ Prerequisites

* Docker
* Docker Compose v2

Verify:

```bash
docker --version
docker compose version
```

---

## 🔑 Environment Variables

Create a `.env` file in project root:

```bash
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

# 🐳 Running the Application

## ✅ Method 1: Using Docker Compose (Recommended)

### 1. Clone Repository

```bash
git clone <your-repo-url>
cd ChatterPoP
```

### 2. Run Application

```bash
docker compose up --build
```

### 3. Access

* Frontend → http://localhost:3000
* Backend → http://localhost:5000

---

## ⚙️ Method 2: Using Dockerfiles (Manual Setup)

This method runs frontend and backend containers separately.

---

### 🔧 Step 1: Create Network

```bash
docker network create chatter-net
```

---

### 🔧 Step 2: Build Backend Image

```bash
cd backend
docker build -t chatter-backend .
```

---

### ▶️ Step 3: Run Backend Container

```bash
docker run -d \
--name backend-service \
--network chatter-net \
-p 5000:5000 \
-e PORT=5000 \
-e MONGO_URI=your_mongodb_uri \
-e JWT_SECRET=your_secret \
-e CLOUDINARY_CLOUD_NAME=your_cloud_name \
-e CLOUDINARY_API_KEY=your_api_key \
-e CLOUDINARY_API_SECRET=your_api_secret \
chatter-backend
```

---

### 🔧 Step 4: Build Frontend Image

```bash
cd ../frontend
docker build -t chatter-frontend .
```

---

### ▶️ Step 5: Run Frontend Container

```bash
docker run -d \
--name chatter-frontend \
--network chatter-net \
-p 3000:80 \
chatter-frontend
```

---

### 🌐 Access Application

* Frontend → http://localhost:3000

---

## 🔄 Application Flow

* Frontend served via NGINX
* `/api` → proxied to backend
* Backend → MongoDB + Cloudinary
* Socket.io → real-time messaging

---

## 🔌 Docker Networking

* Containers communicate using service/container names
* Example:

  * Frontend → `http://backend-service:5000`

---

## 🧪 Useful Commands

```bash
docker compose up
docker compose down
docker compose logs -f
```

---

## ⚠️ Common Issues

### ❌ Docker permission error

```bash
sudo usermod -aG docker $USER
newgrp docker
```

### ❌ API not working

* Check backend container
* Check NGINX proxy

### ❌ Blank screen

* Check browser console
* Verify frontend build

---

## 🔐 Security Notes

* Do not commit `.env`
* Rotate exposed credentials
* Use environment variables for secrets

---

## 🚀 Future Improvements

* Kubernetes deployment (GKE/EKS)
* CI/CD pipeline (GitHub Actions)
* Monitoring (Prometheus + Grafana)

---

## 👨‍💻 Author

Vipul Tyagi
DevOps & Cloud Enthusiast

