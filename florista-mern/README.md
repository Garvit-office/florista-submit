# Florista MERN Backend

This folder is a standalone Node/Express backend that can live beside the Spring Boot app in `florista/`.

## What it provides

- Express API scaffold
- MongoDB connection hook through Mongoose
- CORS and JSON parsing
- Health endpoint at `GET /api/health`

## Setup

1. Copy `.env.example` to `.env`
2. Install dependencies with `npm install`
3. Start the server with `npm run dev`

## Environment

- `PORT` - server port, default `5000`
- `MONGO_URI` - MongoDB connection string
- `CLIENT_ORIGIN` - allowed frontend origin for CORS

## Folder Layout

- `src/app.js` - Express app setup
- `src/server.js` - server bootstrap
- `src/config/db.js` - MongoDB connection helper
- `src/routes/index.js` - API routes
