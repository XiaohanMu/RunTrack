# RunTrack

RunTrack is a web application designed to help users organize running events, track their run sessions, and manage user accounts with login and registration functionality.

## Features
- **User Authentication**: Login and registration for users.
- **Organize Events**: Create and view running events.
- **Track Run Sessions**: Record and view user-specific run session data.

## Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up the `.env` file with the following variables:
   ```env
   DB_HOST=your-database-host
   DB_NAME=your-database-name
   DB_USER=your-database-user
   DB_PASSWORD=your-database-password
   JWT_SECRET=your-jwt-secret
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

## Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints
### Authentication
- **POST** `/api/auth/register`: Register a new user.
- **POST** `/api/auth/login`: Login a user.

### Events
- **POST** `/api/events`: Create a new event.
- **GET** `/api/events`: Get all events.

### Run Sessions
- **POST** `/api/runSessions`: Create a new run session.
- **GET** `/api/runSessions/:userId`: Get all run sessions for a user.

## Deployment
- The backend can be deployed using Docker and Kubernetes.
- The frontend can be built and served using any static file server.

## License
This project is licensed under the MIT License.