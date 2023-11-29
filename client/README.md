# TopSocial Frontend

## Client Overview

The TopSocial Frontend serves as the user-facing portion of our application, designed to provide an interactive and intuitive interface for users to engage with various features of our social platform. It is built with a focus on user experience, integrating seamless interactions with the backend to fetch, display, and manage data.

### Features

- **Data Retrieval**: Fetch real-time data such as images, comments, friend
  messages, and poster names from the backend JSON server.
- **Data Deletion**: Facilitate the deletion of friends, messages, and posted cards.
- **Data Addition**: Enable adding new friends, sending post cards, and messaging friends.
- **Data Update**: Allow editing and updating previously sent posts.

### User Interface

- Navigation features, search functionality for posts.
- Create posts, view existing post cards.
- Friend messages page, friend request handling.
- Friends' activities feed.

---

## Technical Stack

- Frontend: HTML, CSS, JavaScript.
- Framework: Vite(vanilla).
- Dependencies:
  - Development:
    - vite (version "^5.0.0")
    - vite-plugin-top-level-await (version "^1.3.1")
  - Production:
    - axios (version "^1.6.2")
    - cors (version "^2.8.5")
    - normalize.css (version "^8.0.1")
    - path-browserify (version "^1.0.1")

---

## Installation Guide

- **Setup Development Environment**:
  - Install Node.js via Homebrew in the client directory. [Node.js Installation Guide](https://nodejs.org/en/download/package-manager/#macos)
- **Install Dependencies**:
  - In the client directory, run `npm install` or `npm i` to install all necessary packages.
- **Environment Variables**:
  - env.development: Contains the backend server address for the development environment.
  - .env.production: Contains the backend server address for the production environment.
  - **Note**: Keep these addresses confidential.
- **Run the Project Locally**:
  - In the client directory, run `npm run dev` to start the Vite server.
  - In the server directory, run `npm run dev` to start the JSON server.

---

## File Structure

The structure of the source code is organized for optimal organization and ease of maintenance. Below is an overview of the key directories and files:

### src Directory

The `src` directory is the heart of the frontend's code, primarily housing CSS and JavaScript files. It includes several subdirectories for specialized purposes:

- components Directory: Contains reusable components with their corresponding CSS and JavaScript files. This modular approach facilitates efficient development and code reusability.
- css Directory:
  - `universal.css`: This file encompasses the global CSS settings applicable across the entire web application, ensuring a consistent look and feel.
- foundation Directory:
  - `common.css`: Houses foundational styles, including font imports and variable declarations, setting the groundwork for the application's styling.
- frames Directory: Dedicated to the primary structure of the web pages, it includes essential CSS and JavaScript files that define the core layout and functionality.
- js Directory:
  - This is the central location for JavaScript files that handle interactions with the backend server APIs, as well as general scripts and utility functions vital for the application's operations.
- media Directory: Stores CSS and JavaScript files specifically tailored for responsive design, ensuring the application's adaptability across various devices and screen sizes.

### public Directory

The `public` directory is reserved for media files and other assets that do not require compilation. It's the go-to place for images, fonts, and other static resources.

### Entry Files

- `index.css`: Acts as the entry point for CSS, orchestrating the inclusion and application of various stylesheets throughout the application.
- `index.js`: The JavaScript entry file, orchestrating the application's script loading and initial execution.

---

## Build and Deployment

- **Building the Project**:
  - In the client directory, run `npm run build` to generate the dist directory.
- **Uploading to the Server**:
  - Upload the dist directory to your server.
- **Server Configuration**:
  - Configure a web server (e.g., Apache, Nginx) and set up HTTPS.
- **Testing**:
  - Open the website and test if it runs correctly.

---

## Testing

Running frontend tests involves starting the Vite server and manually testing various functionalities to ensure they work as expected. Additionally, the project has an extensive CI/CD pipeline that includes CSS, HTML, JavaScript code testing, security audits, code quality reviews, and various types of automated tests. Details of these tests can be found in the .github/workflows/ci-cd.yml file.
