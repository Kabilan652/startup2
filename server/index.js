process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

require("dotenv").config();

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

// Enable CORS for your frontend
app.use(cors({
  origin: 'http://localhost:5173',  // replace with your frontend URL in production
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

// Handle newsletter subscription
app.post('/api/newsletter', async (req, res) => {
  const { email } = req.body;

  // Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // ✅ use env vars
      pass: process.env.GMAIL_PASS, // ✅ use env vars
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'technew16754@gmail.com',
      subject: 'New Newsletter Subscription',
      text: `New subscriber: ${email}`,
    });

    res.json({ message: 'Notification sent!' });
  } catch (err) {
    console.error("❌ Newsletter email failed:", err);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Handle contact form messages
app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;
  console.log("Incoming form data:", req.body);

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // ✅ env var
        pass: process.env.GMAIL_PASS, // ✅ env var
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
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
  } catch (error) {
    console.error("❌ Email sending failed:", error);
    res.status(500).json({ error: error.message });
  }
});

// Optional: handle OPTIONS preflight request
app.options('/api/newsletter', cors());  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
