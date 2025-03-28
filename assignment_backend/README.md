# Backend - Node.js + Express (Auth0 Authentication & Email Service)

## Overview
This backend service is built using Node.js and Express. It handles authentication via Auth0, validates the received token, and sends an email containing the authentication token to the authenticated user.

## Features
- Receives authentication token from the frontend
- Validates the token with Auth0
- Sends an email to the authenticated user with the token using Nodemailer

## Setup Instructions

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation
1. Clone the repository:
   ```sh
   git clone <repository_url>
   cd backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and configure the following environment variables:
   ```env
   PORT=5000
   AUTH0_DOMAIN=your-auth0-domain
   EMAIL_USERNAME=your-email@example.com
   EMAIL_PASSWORD=your-email-password
   ```

### Running the Server
Start the backend server with:
```sh
npm start
```
The server will be running at `http://localhost:5000`.

## API Endpoints

### `POST /auth/callback`
**Description:** Receives the token from the frontend, validates it with Auth0, and sends an email to the user.

**Request Body:**
```json
{
  "token": "Auth0-access-token",
  "userEmail": "user@example.com"
}
```

**Response:**
- `200 OK`: Token validated and email sent
- `400 Bad Request`: Token is missing
- `401 Unauthorized`: Invalid token
- `500 Internal Server Error`: Token validation or email sending failed

## Email Service
The backend uses Nodemailer to send an email containing the authentication token. Ensure your email credentials are configured correctly in the `.env` file.

## Deployment
To deploy the backend, you can use services like:
- [Railway](https://railway.app/)
- [Render](https://render.com/)
- [AWS Lightsail](https://aws.amazon.com/lightsail/)

## Security Considerations
- Never expose your `.env` file or credentials in public repositories.
- Use environment variables for sensitive data.
- Implement additional authentication and authorization layers for production.

## License
This project is licensed under the MIT License.

## Contact
For any issues, feel free to open an issue on the repository or contact the maintainer.

