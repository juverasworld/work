# MyRodo

MyRodo is a platform designed for service provision and consumption. It consists of two applications:

- **api:** A Node.js (Express) API running on port `5050`
- **client:** A Next.js application running on port `5000`

## Features
- Service providers can list their offerings.
- Consumers can browse and request services.
- Secure authentication and session management.
- API-driven architecture for seamless interaction between the frontend and backend.

## Tech Stack
- **api:** Node.js, Express, MongoDB
- **client:** Next.js, Tailwind CSS

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (v22.5.0 or later)
- MongoDB (if using a database)

### Clone the Repository
```sh
git clone https://github.com/selltana/myrodo.git
cd myrodo
```

### Backend Setup
```sh
cd api
bun install
bun start
```
The backend will start on `http://localhost:5050`.

### Frontend Setup
```sh
cd client
bun install
bun run dev
```
The frontend will start on `http://localhost:5000`.

## API Endpoints
The backend exposes several API endpoints for service management, and requests. See the `backend/routes` directory for details.

## Environment Variables
Create `.env` files for both frontend and backend. Example:

**Backend (`backend/.env`):**
```
PORT=5050
MONGO_URI=mongodb://localhost:27017/myrodo
JWT_SECRET=your_secret_key
```

**Frontend (`frontend/.env.local`):**
```
NEXT_PUBLIC_API_URL=http://localhost:5050
JWT_SECRET
```

## Deployment
For production, set up reverse proxy configurations and use process managers like PM2 for the backend.

## Contributing
Feel free to open issues or submit pull requests.

## License
MIT License