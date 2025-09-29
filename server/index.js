require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// CORS for local + deployed frontend
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://startup2-3pi6.onrender.com",
    ],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

// Nodemailer transporter using SendGrid
const transporter = nodemailer.createTransport({
  service: "SendGrid",
  auth: {
    user: "apikey", // literal string
    pass: process.env.SENDGRID_API_KEY, // add in Render Environment Variables
  },
   tls: {
    rejectUnauthorized: false, // ignore self-signed certs
  }
});

// Newsletter subscription
app.get("/", (req, res) => {
  res.send("🚀 Backend is running successfully!");
});

app.post("/api/newsletter", async (req, res) => {
  const { email } = req.body;
  try {
    await transporter.sendMail({
      from: "kabilandina11@gmail.com", // sender
      to: "technew16754@gmail.com", // where you receive emails
      subject: "New Newsletter Subscription",
      text: `New subscriber: ${email}`,
    });
    res.json({ message: "Notification sent!" });
  } catch (err) {
    console.error("❌ Newsletter email failed:", err.message);
    res.status(500).json({ error: "Failed to send email : " ,err.message });
  }
});

// Contact form submission
app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;
  console.log("Incoming form data:", req.body);

  try {
    await transporter.sendMail({
      from: "kabilandina11@gmail.com",
      replyTo: email,
      to: "technew16754@gmail.com",
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h3>New Contact Form Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/> ${message}</p>
      `,
    });
    res.status(200).send("Message sent successfully");
  } catch (err) {
    console.error("❌ Email sending failed:",err.message);
    res.status(500).json({ error: "Failed to send email: " + err.message });
  }
});

// Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
