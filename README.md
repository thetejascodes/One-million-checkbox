cat > README.md << 'EOF'
# ⚡ One Million Checkboxes

> Real-time distributed system — 1M checkboxes, sub-second latency, WebSockets + Redis Pub/Sub

![Demo](https://img.shields.io/badge/demo-live-brightgreen) ![Node.js](https://img.shields.io/badge/Node.js-24+-blue) ![Socket.IO](https://img.shields.io/badge/Socket.IO-4.8+-black) ![Redis](https://img.shields.io/badge/Redis-Pub%2FSub-red) ![License](https://img.shields.io/badge/license-MIT-green)

## 🌐 Live Demo
**[https://angelic-energy-production.up.railway.app/](https://angelic-energy-production.up.railway.app/)**

## 🏗️ Architecture
### How it works
- Client toggles checkbox → WebSocket event fires
- Server saves state to **Redis** (source of truth)
- Server publishes event to Redis Pub/Sub channel
- All server instances receive event → broadcast to their clients
- Every connected user sees update in real-time ⚡

## 🛠️ Tech Stack

| Layer | Tech |
|---|---|
| Backend | Node.js + Express |
| Real-time | Socket.IO WebSockets |
| State | Redis (hset/hgetall) |
| Pub/Sub | Redis Pub/Sub |
| Frontend | Vanilla HTML/CSS/JS |
| Deployment | Railway |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Redis / Valkey running locally

### Installation

```bash
git clone https://github.com/thetejascodes/One-million-checkbox.git
cd one-million-checkbox
npm install
```

### Environment
```env
REDIS_URL=redis://localhost:6379
PORT=3000
```

### Run
```bash
# Start Redis first
docker run -d -p 6379:6379 valkey/valkey:latest

# Start server
npm run dev
```

## 📡 API

```http
GET /health      # Server status
GET /checkboxes  # Returns checked indexes from Redis
```

## 🧠 Key Learnings

- WebSockets vs HTTP polling — when to use what
- Redis as source of truth — no state in memory
- Pub/Sub pattern — how multiple servers stay in sync
- async/await — why every function touching Redis needs it
- Docker + Railway deployment

## 🗺️ Roadmap

- [x] WebSocket real-time sync
- [x] Redis Pub/Sub for horizontal scaling
- [x] Redis as source of truth
- [x] Production deployment on Railway
- [ ] Virtual scrolling for 1M checkboxes
- [ ] Nginx load balancer — multiple instances
- [ ] Kafka integration for event streaming
- [ ] Rate limiting

## 🤝 Contributing

```bash
git checkout -b feature/your-feature
git commit -m 'Add feature'
git push origin feature/your-feature
# Open a Pull Request
```

---

**⚡ Built by [thetejascodes](https://github.com/thetejascodes)**
EOF