# User Management System - CRUD Application

A full-stack web application for managing user data with create, read, update, and delete operations. Built with Node.js/Express backend and vanilla JavaScript frontend.

## Features

- Create new users with name and technology stack
- Read and display all users in a table format
- Update existing user information
- Delete users from the database
- Responsive web interface
- Real-time data synchronization

## Tech Stack

**Backend:**
- Node.js
- Express.js
- PostgreSQL
- CORS

**Frontend:**
- HTML5
- CSS3
- Vanilla JavaScript

**Deployment:**
- Docker
- Docker Compose

## Prerequisites

- Docker and Docker Compose installed
- Node.js v18+ (for local development)
- PostgreSQL (runs in Docker)

## Project Structure

```
├── server.js                 # Express server and API endpoints
├── public/
│   └── index.html           # Frontend UI
├── package.json             # Dependencies
├── docker-compose.yml       # Docker Compose configuration
└── README.md               # Project documentation
```

## Installation

### Using Docker (Recommended)

1. Clone the repository:
```bash
git clone https://github.com/osamarahmani/Docker_M_CURD_FB.git
cd Docker_M_CURD_FB
```

2. Start services using Docker Compose:
```bash
docker-compose up -d
```

3. Access the application:
```
http://localhost:5000
```

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/osamarahmani/Docker_M_CURD_FB.git
cd Docker_M_CURD_FB
```

2. Install dependencies:
```bash
npm install
```

3. Configure database connection in `server.js`:
```javascript
const pool = new Pool({
  user: 'myuser',
  host: 'localhost',
  database: 'mydatabase',
  password: 'mypassword',
  port: 5432
});
```

4. Start the server:
```bash
node server.js
```

5. Open browser and navigate to:
```
http://localhost:5000
```

## API Endpoints

### Get All Users
```
GET /users
Response: Array of user objects
```

### Create User
```
POST /users
Body: { "name": "string", "stack": "string" }
Response: Created user object
```

### Update User
```
PUT /users/:id
Body: { "name": "string", "stack": "string" }
Response: Updated user object
```

### Delete User
```
DELETE /users/:id
Response: { "message": "User deleted" }
```

### Test Connection
```
GET /test
Response: Current database timestamp
```

## Database Schema

The application uses a PostgreSQL database with the following schema:

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  stack VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Usage

### Adding a User
1. Fill in the Name and Stack fields in the form
2. Click "Add User" button
3. User will be added to the database and displayed in the table

### Editing a User
1. Click "Edit" button next to the user in the table
2. Update the information in the form
3. Click "Update User" button
4. Changes will be saved to the database

### Deleting a User
1. Click "Delete" button next to the user in the table
2. Confirm the deletion in the dialog
3. User will be removed from the database

## Environment Variables

The application uses the following PostgreSQL connection parameters (configurable in `server.js`):

```
DB_USER: myuser
DB_HOST: localhost
DB_NAME: mydatabase
DB_PASSWORD: mypassword
DB_PORT: 5433 (Docker) / 5432 (Local)
SERVER_PORT: 5000
```

## Troubleshooting

### Database Connection Failed
- Ensure PostgreSQL is running
- Verify connection parameters in `server.js`
- Check if the database and user exist

### Port Already in Use
- Change the port in `server.js` line 56: `app.listen(PORT, ...)`
- Or stop the process using the current port

### CORS Errors
- CORS is enabled by default for all origins
- Modify `server.js` line 8 if specific domains are needed

## Development

To make changes to the application:

1. Modify `server.js` for backend changes
2. Modify `public/index.html` for frontend changes
3. Restart the server or refresh the browser for changes to take effect

## Contributing

Feel free to fork this repository and submit pull requests for any improvements.

## License

ISC

## Contact

For questions or issues, please open an issue on the GitHub repository.

---

**Repository:** https://github.com/osamarahmani/Docker_M_CURD_FB
