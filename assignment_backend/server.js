require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;

// API to receive token from frontend
app.post("/auth/callback", async (req, res) => {
  const { token, userEmail } = req.body;

  if (!token) {
    return res.status(400).json({ error: "Token is required" });
  }

  try {
    // Validate token using Auth0 /userinfo endpoint
    const auth0Response = await axios.get(`https://${AUTH0_DOMAIN}/userinfo`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (auth0Response.status !== 200) {
      return res.status(401).json({ error: "Invalid token" });
    }

    // Send email with the token
    await sendEmail(userEmail, token);

    res.status(200).json({ message: "Token validated and email sent" });
  } catch (error) {
    console.error("Error validating token:", error.message);
    res.status(500).json({ error: "Token validation failed" });
  }
});

// Email function
async function sendEmail(email, token) {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    let mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: email,
      subject: "Your Auth0 Access Token",
      text: `Here is your Auth0 access token: ${token}`,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${email}`);
  } catch (error) {
    console.error("Email sending failed:", error.message);
  }
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
