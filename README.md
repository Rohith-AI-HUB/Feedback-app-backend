# Feedback App

## Overview
Feedback App is a full-stack web application that allows users to submit and manage feedback. The frontend is built with React and hosted on Vercel, while the backend is powered by Node.js/Express and hosted on Render.

## Live Demo
- https://feedback-app-frontend-ruby.vercel.app
---

## Features
- User-friendly interface for submitting feedback.
- Backend API for managing feedback data.
- Authentication and authorization.
- Responsive design for mobile and desktop.

---

## Tech Stack
### Frontend
- React
- React Router
- Hosted on **Vercel**

### Backend
- Node.js with Express
- MongoDB
- Hosted on **Render**

---

## Local Development Setup

### Prerequisites
- Node.js (>= 14)
- npm
- MongoDB

### Clone the Repository
```sh
 git clone https://github.com/Rohith-AI-HUB/Feedback-APP.git
 cd Feedback-APP
```

### Setting Up the Frontend
```sh
 cd frontend
 npm install  
 npm start    # Runs the React app on localhost:3000
```

### Setting Up the Backend
```sh
 cd backend
 npm install  
 npm start    # Runs the backend server on localhost:5000
```

---

## Deployment Instructions

### Deploying Frontend on Vercel
1. Install Vercel CLI (if not installed):
   ```sh
   npm install -g vercel
   ```
2. Login to Vercel:
   ```sh
   vercel login
   ```
3. Deploy the frontend:
   ```sh
   cd frontend
   vercel
   ```
4. Copy the live link and update the **Live Demo** section.

### Deploying Backend on Render
1. Go to [Render](https://render.com/).
2. Create a new **Web Service**.
3. Connect the GitHub repository.
4. Set environment variables (if applicable).
5. Deploy the backend and update the API URL in the frontend.

---

## Environment Variables
Create a `.env` file in both `frontend/` and `backend/` with the required variables:

### Frontend `.env`
```
REACT_APP_API_URL=http://localhost:5000  # Update after backend deployment
```

### Backend `.env`
```
PORT=5000
MONGO_URI=<your_mongodb_uri>
```

---

## Contributing
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`
3. Commit changes: `git commit -m "Added new feature"`
4. Push to the branch: `git push origin feature-branch`
5. Create a Pull Request.

---
