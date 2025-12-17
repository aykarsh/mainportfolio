const express = require('express');
const cors = require('cors');
const emailjs = require('@emailjs/nodejs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware - Allow requests from your frontend
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);
    
    // Allow localhost for development
    if (origin && origin.includes('localhost')) {
      return callback(null, true);
    }
    
    // Allow Vercel domain
    if (origin && origin.includes('vercel.app')) {
      return callback(null, true);
    }
    
    // Allow specific frontend URL from env
    if (process.env.FRONTEND_URL && origin === process.env.FRONTEND_URL) {
      return callback(null, true);
    }
    
    callback(new Error('Not allowed by CORS'));
  },
  credentials: true
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

  // EmailJS template parameters
  const templateParams = {
    from_name: name || 'Anonymous',
    from_email: email,
    message: message,
    to_email: process.env.EMAIL_USER
  };

  try {
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      templateParams,
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        privateKey: process.env.EMAILJS_PRIVATE_KEY
      }
    );
    
    console.log('Email sent successfully via EmailJS');
    
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