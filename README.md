# Simple Blog API

## Completed Features
- JWT Authentication (Register / Login)
- CRUD for Posts and Comments
- Role-based Authorization (USER / ADMIN)
- Swagger API Documentation and testing

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
   npx prisma generate
   ```

5. **Start Application**
   ```bash
   npm run start:dev
   ```

## API Documentation & Testing
Access Swagger UI at: [http://localhost:3000/api](http://localhost:3000/api)

You can use Swagger to view all endpoints and test them directly in the browser.
