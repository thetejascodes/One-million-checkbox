# One Million Checkboxes

A real-time collaborative web application featuring a grid of checkboxes that synchronize across all connected clients using WebSockets. Inspired by the concept of shared, interactive state where users can toggle checkboxes and see changes reflected instantly for everyone.

## Features

- **Real-time Synchronization**: Changes to any checkbox are broadcasted to all connected clients instantly using Socket.IO.
- **Responsive Design**: Clean, modern UI with a grid layout that adapts to different screen sizes.
- **Lightweight**: Built with Node.js, Express, and Socket.IO for minimal overhead.
- **Health Check Endpoint**: Basic monitoring endpoint for server status.

## Installation

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/thetejascodes/One-million-checkbox.git
   cd one-million-checkbox
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and set the port:
   ```
   PORT=3000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage

- The application displays a grid of 100 checkboxes (currently).
- Click any checkbox to toggle its state.
- Changes are synchronized in real-time across all open browser tabs/windows connected to the server.
- Use the health check endpoint at `http://localhost:3000/health` to verify server status.

## API

### Health Check
- **GET** `/health`
- Returns: `{"healthy": true}`

## Development

### Scripts

- `npm run dev`: Start the server with file watching using Node.js `--watch` flag.
- `npm start`: Start the server with nodemon for automatic restarts.
- `npm test`: Placeholder for tests (not implemented yet).

### Project Structure

```
one-million-checkbox/
├── public/
│   └── index.html          # Frontend HTML, CSS, and JavaScript
├── src/
│   ├── auth/               # (Future) Authentication modules
│   ├── middleware/         # (Future) Custom middleware
│   ├── redis/              # (Future) Redis integration for persistence
│   ├── routes/             # (Future) Additional API routes
│   └── ws/                 # (Future) WebSocket handlers
├── server.js               # Main server file
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## Future Upgrades

The project is designed for scalability and additional features. Planned enhancements include:

### Phase 1: Scaling to One Million Checkboxes
- Optimize the grid rendering for 1,000,000 checkboxes.
- Implement virtual scrolling or pagination to handle large grids efficiently.
- Add zoom and pan controls for navigation.

### Phase 2: Persistence and State Management
- Integrate Redis (via `src/redis/`) for storing checkbox states persistently.
- Implement state synchronization on client reconnection.
- Add database backup and recovery mechanisms.

### Phase 3: User Authentication and Authorization
- Add user authentication system (via `src/auth/`) using JWT or OAuth.
- Implement user sessions and personal checkbox states.
- Add role-based access (e.g., admin controls).

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