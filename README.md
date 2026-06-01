# Florista Monorepo

This workspace is organized as two side-by-side apps:

- `florista/` - Spring Boot backend
- `florista-frontend/` - React frontend that talks to the Spring API

If you want a fuller MERN-style setup, the Node/Express backend now lives in `florista-mern/` beside the Spring app. That keeps the Java backend isolated while still letting you build a Java + MERN monorepo in one workspace.

## Local Development

Run the backend first:

```bash
cd florista
./mvnw spring-boot:run
```

Run the frontend in a second terminal:

```bash
cd florista-frontend
npm start
```

## Environment

The frontend reads `REACT_APP_API_URL` from `florista-frontend/.env`.

Use `florista-frontend/.env.example` as the template:

```env
REACT_APP_API_URL=http://localhost:8080
```

## MERN Backend

The current layout is:

- `florista/` - Spring Boot API and database logic
- `florista-frontend/` - React UI
- `florista-mern/` - Node/Express backend with MongoDB wiring

That gives you one workspace, two backends if needed, and a single frontend.
