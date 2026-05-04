# One Million Checkboxes

A real-time collaborative web application featuring a grid of checkboxes that synchronize across all connected clients using WebSockets. Inspired by the concept of shared, interactive state where users can toggle checkboxes and see changes reflected instantly for everyone.

![Demo](https://img.shields.io/badge/demo-live-green) ![Node.js](https://img.shields.io/badge/Node.js-18+-blue) ![Socket.IO](https://img.shields.io/badge/Socket.IO-4.7+-black) ![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- **Real-time Synchronization**: Changes to any checkbox are broadcasted to all connected clients instantly using Socket.IO
- **Modern Dark UI**: Sleek dark theme with gradient accents and smooth animations
- **Responsive Design**: Clean, modern UI with a grid layout that adapts to different screen sizes
- **Scalable Architecture**: Built with Node.js, Express, and Socket.IO for minimal overhead
- **Health Monitoring**: Basic monitoring endpoint for server status
- **Extensible**: Modular structure ready for Redis persistence, authentication, and scaling

## 🚀 Quick Start

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/thetejascodes/One-million-checkbox.git
   cd one-million-checkbox
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment:**
   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:3000` and start clicking checkboxes!

## 🎮 Usage

- **Interactive Grid**: Click any checkbox to toggle its state
- **Real-time Sync**: Changes appear instantly across all connected browser tabs/windows
- **Visual Feedback**: Hover effects, checkmarks, and smooth transitions
- **Health Check**: Visit `http://localhost:3000/health` to verify server status

## 🏗️ Architecture

### Tech Stack
- **Backend**: Node.js + Express
- **Real-time**: Socket.IO WebSockets
- **Frontend**: Vanilla HTML/CSS/JavaScript
- **Styling**: Custom CSS with CSS Variables
- **Deployment**: Ready for containerization

### Project Structure
```
one-million-checkbox/
├── public/
│   ├── index.html          # Frontend HTML
│   └── style.css           # Modern dark theme styles
├── src/
│   ├── auth/               # Authentication modules (planned)
│   ├── middleware/         # Custom middleware (planned)
│   ├── redis/              # Redis integration (planned)
│   ├── routes/             # API routes (planned)
│   └── ws/
│       └── index.js        # WebSocket handlers
├── server.js               # Main Express server
├── package.json            # Dependencies & scripts
├── .env                    # Environment configuration
└── README.md               # This documentation
```

## 📡 API Reference

### Health Check
```http
GET /health
```
Returns server status for monitoring.

**Response:**
```json
{
  "healthy": true
}
```

### Get Checkboxes (Internal)
```http
GET /checkboxes
```
Returns current checkbox states array.

## 🔧 Development

### Available Scripts
```bash
npm run dev      # Start with Node.js --watch
npm start        # Start with nodemon
npm test         # Run tests (placeholder)
```

### Environment Variables
```env
PORT=3000        # Server port
```

## 🚀 Roadmap

### Phase 1: Scaling to One Million Checkboxes ✅
- [x] Optimize grid rendering for large checkbox counts
- [x] Implement efficient DOM manipulation
- [x] Add responsive grid layout

### Phase 2: Persistence & State Management 🔄
- [ ] Integrate Redis for persistent checkbox states
- [ ] Implement state synchronization on reconnection
- [ ] Add database backup and recovery

### Phase 3: Authentication & Authorization 📋
- [ ] Add user authentication (JWT/OAuth)
- [ ] Implement user sessions and personal states
- [ ] Add role-based access controls

### Phase 4: Advanced Features 🎯
- [ ] Rate limiting and spam protection
- [ ] User activity tracking and analytics
- [ ] Mobile-optimized touch interactions
- [ ] Dark/light theme toggle

### Phase 5: Production Deployment 🚀
- [ ] Docker containerization
- [ ] Horizontal scaling with Redis Pub/Sub
- [ ] Load balancing and clustering
- [ ] Monitoring and logging

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by the "Million Checkboxes" concept
- Built with modern web technologies
- Community-driven development

---

**Made with ❤️ by [thetejascodes](https://github.com/thetejascodes)**

### Phase 4: Advanced Features
- **Rooms/Channels**: Allow multiple independent checkbox grids.
- **History and Undo**: Track changes with timestamps and allow reverting.
- **Collaborative Tools**: Add drawing tools, text annotations, or other interactive elements.
- **Mobile Optimization**: Enhance touch interactions and responsive design.
- **API Expansion**: Expose RESTful APIs for external integrations (via `src/routes/`).
- **WebSocket Enhancements**: Advanced WebSocket handling with namespaces and rooms (via `src/ws/`).

### Phase 5: Performance and Scalability
- Implement clustering for multi-server deployment.
- Add load balancing and CDN support.
- Optimize for high concurrency (thousands of simultaneous users).

### Phase 6: Analytics and Monitoring
- Add usage analytics and real-time metrics.
- Implement logging and error tracking.
- Dashboard for administrators.

### Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request.

### Issues and Feature Requests

- Report bugs or request features via [GitHub Issues](https://github.com/thetejascodes/One-million-checkbox/issues).

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by collaborative real-time applications.
- Built with [Express](https://expressjs.com/), [Socket.IO](https://socket.io/), and modern web technologies.