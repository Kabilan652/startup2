require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");

const app = express();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// CORS
app.use(cors({
  origin: ["http://localhost:5173", "https://startup2-3pi6.onrender.com"],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
}));

app.use(express.json());

// Health check
app.get("/", (req, res) => res.send("🚀 Backend is running successfully!"));

// ===== Newsletter =====
app.post("/api/newsletter", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email is required" });

  try {
    await sgMail.send({
      to: "technew16754@gmail.com",
      from: { email: "kabilandina11@gmail.com", name: "TechNew Website" }, // verified domain
      subject: "New Newsletter Subscription",
      text: `New subscriber: ${email}`,
      replyTo: email,
    });
    res.json({ message: "Notification sent!" });
  } catch (err) {
    console.error("❌ Newsletter email failed:", err);
    res.status(500).json({ error: "Failed to send email", message: err.message });
  }
});

// ===== Contact Form =====
app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ error: "All fields are required" });

  try {
    await sgMail.send({
      to: "technew16754@gmail.com",
      from: { email: "kabilandina11@gmail.com", name: "TechNew Website" }, // verified domain
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

// ===== Service Request Form =====
app.post("/api/service-request", async (req, res) => {
  const { name, email, serviceTitle } = req.body;
  if (!name || !email || !serviceTitle) return res.status(400).json({ error: "Name, email, and serviceTitle are required" });

  try {
    // Owner notification
    await sgMail.send({
      to: "technew16754@gmail.com",
      from: { email: "kabilandina11@gmail.com", name: "TechNew Website" }, // verified domain
      replyTo: email,
      subject: `New Service Request from ${name}`,
      html: `
        <h3>New Service Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Interested Service:</strong> ${serviceTitle}</p>
      `,
    });

    // Confirmation to user
    await sgMail.send({
      to: email,
      from: { email: "technew16754@gmail.com", name: "TechNew Team" },
      subject: "We Received Your Service Request ",
      html: `
        <h3>Hello ${name},</h3>
        <p>Thank you for your interest in our service: <strong>${serviceTitle}</strong>.</p>
        <p>Our team will contact you shortly.</p>
        <p>— TechNew Team</p>
      `,
    });

    res.status(200).json({ message: "Service request sent successfully" });
  } catch (err) {
    console.error("❌ Service request email failed:", err);
    res.status(500).json({ error: "Failed to send email", message: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
