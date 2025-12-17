const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware - Allow requests from your frontend
const allowedOrigins = [
  'http://localhost:3000',
  process.env.FRONTEND_URL
].filter(Boolean);

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS  // Your Gmail App Password
  }
});

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio Backend API' });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  // Validate input
  if (!email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Email and message are required' 
    });
  }

  // Email options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Send to your own email
    subject: `Portfolio Contact Form - ${name || email}`,
    text: message,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name || 'Not provided'}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
    replyTo: email // Allow you to reply directly to the sender
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully to:', process.env.EMAIL_USER);
    
    res.json({ 
      success: true, 
      message: 'Email sent successfully!' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email. Please try again later.' 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
