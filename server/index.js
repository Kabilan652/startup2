const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

// Enable CORS for your frontend
app.use(cors({
  origin: 'http://localhost:5173',  // Frontend URL
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

// Handle newsletter subscription
app.post('/api/newsletter', async (req, res) => {
  const { email } = req.body;

  // Nodemailer transporter
  const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for port 465, false for 587
        auth: {
            user: 'kabilandina11@gmail.com',
            pass: 'rjqcehnlmlbrgngw',
        },
      tls: {
     rejectUnauthorized: false,  // <--- bypass self-signed cert error
  } ,
  });

  try {
    await transporter.sendMail({
      from: 'kabilandina11@gmail.com',
      to: 'kabilanrube11@gmail.com',       // email to receive notifications
      subject: 'New Newsletter Subscription',
      text: `New subscriber: ${email}`,
    });

    res.json({ message: 'Notification sent!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;
  console.log("Incoming form data:", req.body);  // 👈 debug log

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "kabilandina11@gmail.com",
        pass: "rjqcehnlmlbrgngw" // your Gmail App Password
      },
        tls: {
        rejectUnauthorized: false  // 👈 ignore self-signed cert errors
    }
    });

    await transporter.sendMail({
    from: "kabilandina11@gmail.com",
    replyTo: email,
    to: "kabilanrube11@gmail.com",
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
    console.error("❌ Email sending failed:", error);  // 👈 full error in console
    res.status(500).json({ error: error.message });    // 👈 send actual error back
  }
});


// Optional: handle OPTIONS preflight request
app.options('/api/newsletter', cors());  

app.listen(5000, () => console.log('Server running on port 5000'));
