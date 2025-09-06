# RunTrack

RunTrack is a web application designed to help users organize running events, track their run sessions, and manage user accounts with login and registration functionality.

## Features

### User & Session Management
- **User Authentication**: Login and registration for users.
- **Organize Events**: Create and view running events.
- **Track Run Sessions**: Record and view user-specific run session data.

### Friends Management
- **Add Friend**: Users can add other users as friends.
- **View Friend List**: Users can view their list of friends.
- **Invite Friend to Run**: Users can invite friends to join a run session.

### Navigation Window
- After login, users are presented with a navigation window to:
  - Start a running session.
  - Invite friends.
  - Track running sessions.

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

## System Design

### Architecture Overview
RunTrack is designed with a modern microservices architecture, leveraging the following technologies:

1. **Frontend**:
   - Built with React and Vite for a fast and responsive user interface.
   - Communicates with the backend via RESTful APIs.

2. **Backend**:
   - Developed using Node.js and Express.js.
   - Implements JWT-based authentication and role-based access control (RBAC).
   - Exposes RESTful APIs for user management, event organization, and run session tracking.

3. **Database**:
   - MySQL database hosted on AWS RDS.
   - Designed with relational schema for users, events, and run sessions.
   - Optimized for performance with indexed queries.

4. **Containerization and Orchestration**:
   - Services are containerized using Docker.
   - Deployed to a Kubernetes cluster with horizontal autoscaling and rolling updates.

5. **Infrastructure as Code**:
   - AWS resources provisioned using Terraform.
   - Includes VPC, subnets, security groups, and RDS MySQL.

6. **CI/CD Pipeline**:
   - Automated with Jenkins for building, testing, and deploying services.
   - Includes load testing with k6 and Terraform updates for infrastructure changes.

### Deployment Workflow
1. **Build and Test**:
   - Jenkins pipeline builds the Docker image and runs tests.
   - k6 is used for load testing the backend.

2. **Push to Docker Hub**:
   - The Docker image is pushed to Docker Hub.

3. **Deploy to Kubernetes**:
   - Kubernetes manifests are applied to deploy the services.

4. **Update AWS Resources**:
   - Terraform is used to update infrastructure as needed.

### Scalability and Reliability
- Horizontal autoscaling ensures the application can handle increased traffic.
- Rolling updates minimize downtime during deployments.
- Load testing ensures the system can handle expected workloads.

### Security
- JWT authentication secures API endpoints.
- Role-based access control restricts access to sensitive operations.
- Security groups and VPC configurations protect AWS resources.
