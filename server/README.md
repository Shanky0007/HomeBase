# HomeBase Server

Backend API for HomeBase - Family expense tracking application.

## Tech Stack
- **Runtime:** Node.js
- **Language:** TypeScript
- **Framework:** Express.js (coming soon)
- **Database:** PostgreSQL
- **ORM:** Prisma (coming soon)
- **Auth:** JWT

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
npm start
```

## Project Structure
```
server/
├── src/
│   ├── index.ts          # Entry point
│   ├── controllers/      # Route handlers
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   ├── models/           # Data models
│   └── utils/            # Helper functions
├── prisma/               # Database schema
└── dist/                 # Compiled output
```

## API Endpoints (Coming Soon)
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/expenses` - Get expenses
- `POST /api/expenses` - Create expense
- And more...
