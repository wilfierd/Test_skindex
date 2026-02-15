# Simple Blog API

## Requirements
- Node.js
- Docker

## Setup & Run

1. **Install Dependencies**
   ```cmd
   npm install
   ```

2. **Configure Environment**
   - Copy `.env.example` to `.env`.
   - Update database credentials in `.env` if needed.

3. **Start Database**
   ```cmd
   docker-compose up -d
   ```

4. **Run Migrations**
   ```bash
   npx prisma migrate dev
   ```

5. **Start Application**
   ```bash
   npm run start:dev
   ```

## API Documentation
Access Swagger UI at: [http://localhost:3000/api](http://localhost:3000/api)
