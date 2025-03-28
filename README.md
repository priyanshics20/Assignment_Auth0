# Easy User Authentication for React Apps

This repository hosts a NextJs project that defines a regular-web Application. You'll secure access to some of its routes using Auth0 User Authentication.

## Get Started

### Install the Client Project Dependencies
```sh
npm install
```

## Set Up Authentication with Auth0
If you haven't already, sign up for a free [Auth0 account](https://auth0.com/).

### Create an Auth0 Application
1. Sign in to Auth0 and go to the **Dashboard**.
2. In the left sidebar menu, click **Applications**.
3. Click the **Create Application** button.
4. Fill in the details:
   - **Name:** `Auth0 React Sample`
   - **Application Type:** `Regular Web Applications`
5. Click **Create** to complete the process.

### Configure Application Settings
Your NextJs application will redirect users to Auth0 for authentication. Configure the URLs in your Auth0 Application settings:

- **Allowed Callback URLs:** `http://localhost:3000/api/auth/callback`
- **Allowed Logout URLs:** `http://localhost:3000`
- **Allowed Web Origins:** `http://localhost:3000`

Click **Save Changes**.

### Set Up Environment Variables
Create a `.env` file in the project root:
```sh
touch .env
```
Populate `.env` with:
```env
REACT_APP_AUTH0_DOMAIN=your-auth0-domain
REACT_APP_AUTH0_CLIENT_ID=your-client-id
REACT_APP_AUTH0_AUDIENCE=https://express.sample
REACT_APP_SERVER_URL=http://localhost:6060
```
Retrieve the **Domain** and **Client ID** from the **Settings** tab in your Auth0 Application.

## Run the Project
```sh
npm start
```
The application runs on port `3000`. Visit [http://localhost:3000/](http://localhost:3000/) to access it.

---

## Set Up the Demo API
You can set up this Express demo server to test making secure API calls from your Nextjs application.

### Get the Express API Demo
Clone the `auth0-express-js-sample` repo:
```sh
git clone git@github.com:auth0-blog/auth0-express-js-sample.git
```
Navigate to the directory:
```sh
cd auth0-express-js-sample
```
Install dependencies:
```sh
npm install
```

### Connect the Express API with Auth0
1. Go to the **APIs** section in the Auth0 Dashboard and click **Create API**.
2. Fill in the details:
   - **Name:** `Auth0 Express Sample`
   - **Identifier:** `https://express.sample`
   - **Signing Algorithm:** Keep `RS256`
3. Click **Create**.

### Set Up Environment Variables for API Server
Create a `.env` file in the `auth0-express-js-sample` directory:
```sh
touch .env
```
Populate `.env` with:
```env
SERVER_PORT=6060
CLIENT_ORIGIN_URL=http://localhost:4040
AUTH0_AUDIENCE=https://express.sample
AUTH0_DOMAIN=your-auth0-domain
```
Retrieve **Auth0 Audience** from the **Identifier** field in API **Settings**.
Retrieve **Auth0 Domain** from the **Test** tab (inside the cURL request under `--url`).

### Run the API Server
```sh
npm start
```
The server will be running at `http://localhost:5000`.

---

## Tips for Getting the Auth0 Domain
- It is the substring between `https://` and `/oauth/token`.
- It follows this pattern: `tenant-name.region.auth0.com`.
- Some Auth0 Domains do not have a region subdomain (e.g., `us`, `eu`, `au`).