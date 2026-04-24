# 💬 ChatterPop - Real-Time Chat Application

A full-stack **real-time chat application** built with modern web technologies and deployed using **containerized DevOps practices**.

This project demonstrates end-to-end implementation of:

* Application development (frontend + backend)
* Containerization using Docker
* Multi-service orchestration using Docker Compose
* Reverse proxy configuration with NGINX
* Real-time communication using WebSockets

---

## 🚀 Features

* 🔐 User authentication (JWT-based)
* 💬 Real-time messaging using Socket.io
* ☁️ Media upload via Cloudinary
* ⚡ Fast frontend with Vite
* 📦 Fully containerized architecture
* 🔄 Service-to-service communication via Docker networking

---

## 🧱 Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* Socket.io

### Database & Services

* MongoDB Atlas
* Cloudinary

### DevOps & Infrastructure

* Docker
* Docker Compose
* NGINX (reverse proxy)

---

## 📂 Project Structure

```
ChatterPoP/
├── frontend/              # React frontend (served via NGINX)
│   ├── src/
│   ├── Dockerfile
│   ├── nginx.conf
│   └── ...
│
├── backend/              # Node.js backend API
│   ├── src/
│   ├── Dockerfile
│   └── ...
│
├── docker-compose.yml    # Multi-container orchestration
└── README.md
```

---

## ⚙️ Prerequisites

Make sure you have the following installed:

* Docker
* Docker Compose v2

### Verify Installation

```
docker --version
docker compose version
```

---

## 🔑 Environment Variables

Create a `.env` file in the project root (recommended) or configure directly in `docker-compose.yml`.

### Required Variables

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

> ⚠️ Never commit `.env` files to version control.

---

## 🐳 Running the Application

### 1. Clone Repository

```
git clone <your-repo-url>
cd ChatterPoP
```

---

### 2. Build and Start Services

```
docker compose up --build
```

This will:

* Build frontend and backend images
* Create a shared Docker network
* Start both services

---

### 3. Access the Application

| Service  | URL                   |
| -------- | --------------------- |
| Frontend | http://localhost:3000 |
| Backend  | http://localhost:5000 |

---

## 🔄 Application Flow

1. User accesses frontend via NGINX
2. Frontend sends API requests to `/api`
3. NGINX proxies `/api` → backend service
4. Backend interacts with MongoDB & Cloudinary
5. Socket.io handles real-time communication

---

## 🌐 NGINX Reverse Proxy

NGINX is used to:

* Serve frontend static files
* Route API requests:

  * `/api` → backend
* Handle WebSocket upgrades for Socket.io

---

## 🔌 Docker Networking

Docker Compose automatically creates a network where:

* Services communicate using service names
* Example:

  * Frontend → `http://backend:5000`

---

## 🧪 Useful Commands

### Start containers

```
docker compose up
```

### Rebuild containers

```
docker compose up --build
```

### Stop containers

```
docker compose down
```

### View logs

```
docker compose logs -f
```

---

## 🛠️ Development Notes

* Frontend build output: `/dist` (Vite)
* Backend runs on port `5000`
* Ensure API base URL is `/api` (not localhost)
* WebSockets require proper proxy headers (configured in NGINX)

---

## ⚠️ Common Issues

### 1. Blank screen

* Check browser console
* Ensure frontend build completed

### 2. API not working

* Verify backend container is running
* Check NGINX proxy configuration

### 3. Docker permission issues

```
sudo usermod -aG docker $USER
newgrp docker
```

---

## 🔐 Security Notes

* Do not expose credentials in public repos
* Rotate keys if accidentally exposed
* Use environment variables for secrets

---

## 🚀 Future Improvements

* ☸️ Kubernetes deployment (GKE / EKS)
* 🔁 CI/CD pipeline (GitHub Actions)
* 📊 Monitoring (Prometheus + Grafana)
* 📜 Centralized logging (ELK stack)
* 🔐 Secrets management (Vault / K8s Secrets)

---

## 📌 DevOps Highlights

This project demonstrates:

* Containerized microservices architecture
* Reverse proxy configuration with NGINX
* Service discovery using Docker networking
* Environment-based configuration management
* Real-time system design with WebSockets

---

## 👨‍💻 Author

**Vipul Tyagi**
DevOps & Cloud Enthusiast

---

## ⭐ Contributing

Feel free to fork the repo and submit pull requests.

---

## 📄 License

This project is licensed under the MIT License.
