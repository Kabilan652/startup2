require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");

const app = express();

// Set SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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

// Health check / root
app.get("/", (req, res) => {
  res.send("🚀 Backend is running successfully!");
});

// Newsletter subscription
app.post("/api/newsletter", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    await sgMail.send({
      to: "kabilandivan12@gmail.com",
      from: "kabilandina11@gmail.com", // must be verified in SendGrid
      subject: "New Newsletter Subscription",
      text: `New subscriber: ${email}`,
    });
    res.json({ message: "Notification sent!" });
  } catch (err) {
    console.error("❌ Newsletter email failed:", err);
    res.status(500).json({ error: "Failed to send email", message: err.message });
  }
});

// Contact form submission
app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  console.log("Incoming form data:", req.body);

  try {
    await sgMail.send({
      to: "kabilandivan12@gmail.com",
      from: "kabilandina11@gmail.com", // must be verified in SendGrid
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h3>New Contact Form Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/> ${message}</p>
      `,
    });

    res.status(200).json({ message: "Message sent successfully" });
  } catch (err) {
    console.error("❌ Contact email failed:", err);
    res.status(500).json({ error: "Failed to send email", message: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
