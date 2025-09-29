require("dotenv").config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

// CORS for local + deployed frontend
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://tech-new-software-f6xb.onrender.com'
  ],
  methods: ['GET','POST','OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

// Global transporter (reused)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// Newsletter
app.post('/api/newsletter', async (req, res) => {
  const { email } = req.body;
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

// Contact form
app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;
  console.log("Incoming form data:", req.body);

  try {
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

// Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
