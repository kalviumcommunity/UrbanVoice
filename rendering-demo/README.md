# UrbanVoice - Docker & Compose Setup

This project is containerized using Docker and Docker Compose, providing a complete development environment with:
- **Next.js 16.1.1** application
- **PostgreSQL 15** database
- **Redis 7** cache

## 🚀 Quick Start

### Prerequisites
- Docker Desktop (Windows/Mac) or Docker Engine (Linux)
- Docker Compose

### Running the Application
```bash
# 1. Clone the repository
git clone <repository-url>
cd rendering-demo

# 2. Build and start all services
docker-compose up --build

# 3. Access the application
#    - Web App: http://localhost:3000
#    - PostgreSQL: localhost:5432
#    - Redis: localhost:6379