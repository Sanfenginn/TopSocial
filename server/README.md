# TopSocial Backend

## Backend Overview

This backend serves as the core of our application, providing essential functionalities and interconnectivity between the frontend and backend systems. It includes:

- **Express Web Server**: Facilitates data interactions between frontend and backend.
- **JSON Server**: Offers an API server and database functionalities for frontend requirements.
- **Controllers Directory**: This directory encompasses callback functions for all routers. Each file within this directory is crucial as it needs to be exported and then imported for use in the corresponding router JavaScript files. This organization ensures that the functionality associated with each route is modular and easily manageable.
- **Middlewares Directory**: Contains all global middleware used across the application. This centralization of middleware facilitates efficient handling of common tasks such as request logging, error handling, and request preprocessing across various routes.
- **Routers Directory**: Houses all the routing mechanisms. The `index.js` file within this directory serves as the entry point for all routes. It is responsible for importing and utilizing all router files, ensuring a structured and organized approach to route management. Additionally,
- **index.js**: is pivotal for importing and registering middlewares, thereby centralizing the routing logic and middleware management.
- **jsonserve.js**: This file is specifically dedicated to running the JSON server. It initializes and configures the JSON server, thereby providing the backend with the necessary API server and database functionalities. This setup is crucial for simulating a full-fledged backend environment, especially useful during development and testing phases.

---

## Technology Stack

- Node.js
- Express
- Dependencies:
  - Development:
    - concurrently: (version "^8.2.2")
    - nodemon: (version "^3.0.1")
  - Production:
    - axios (version "^1.6.2")
    - cors (version "^2.8.5")
    - body-parser:(version "^1.20.2")
    - express: (version "^4.18.2")
    - json-server: (version "^0.17.4")

## Environment Setup

To set up the development environment, follow these steps:

1. **Node.js Installation**: Install Node.js using Homebrew in the client directory. Refer to the Node.js Installation Guide for detailed instructions.
2. **Install Dependencies**: In the client directory, execute `npm install` or `npm i` to install all necessary packages.
3. **Environment Variables**:
   - .env.development: Contains the backend server address for the development environment.
   - .env.production: Contains the backend server address for the production environment.
   - **Important**: Ensure these addresses remain confidential.
4. **Run Project Locally**:
   Start the Vite server by running `npm run dev` in the client directory.
   Launch the JSON server and Express web server by executing `npm run dev` in the server directory.

---

## Database Configuration

- To initialize the JSON server and Express web server, run `npm run dev` in the server directory.
- The database can be found in the `db.json` file.

---

## Running the Project

To start the backend services:

1. Execute `npm run dev` in the server directory to launch the JSON server and Express web server.
2. Use Postman to perform a GET request to `http://localhost:51002/api/cards` and verify data retrieval.

---

## API Documentation

The JSON server is accessible at `http://localhost:51002` with the prefix /api.

### API Endpoints

#### Cards

- Functionality: Manages information within post cards, which includes:
  - Poster's Profile: Name, photo source, location, and time of posting.
  - Post Image: Source of the image in the post.
  - Comments: Information about likes (including avatars of the first three likers, name of the first person who liked), total number of likes, comment details, and total view count.
- URL: `http://localhost:51002/api/cards`

#### Profile

- Functionality: Manages current user profile information, including avatar source, name, and account details.
- URL: `http://localhost:51002/api/profile`

#### Highline

- Functionality: Displays descriptions and images of highlines, with image paths ordered as in the `public/images` directory.
- URL: `http://localhost:51002/api/highline`

#### Message

- Functionality: Stores messages from friends, including friend's avatar source, name, and the message sent.
- URL: `http://localhost:51002/api/message`

#### Request

- Functionality: Manages friend requests, storing the requester's name, avatar source, and the number of mutual friends.
- URL: `http://localhost:51002/api/request`

---

## Testing

Test the backend functionalities using Postman:

- Utilize GET, POST, DELETE, PUT, and PATCH methods with the URL `http://localhost:51002/api` to test various operations like posting, retrieving (all or by ID), deleting (all or by ID), and updating data.

---

## Deployment Guide

To deploy in a production environment:

- Start the JSON server using PM2: `pm2 start path/to/jsonserver.js`.
- Configure the web server with reverse proxy settings to forward traffic to /`api2 http://localhost:51002` (JSON server port).
- Verify deployment by running `curl http://localhost:51002/cards` to check data retrieval.
