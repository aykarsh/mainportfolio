const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio Backend API' });
});

// Placeholder for contact form endpoint
app.post('/api/contact', (req, res) => {
  const { email, message } = req.body;
  
  // TODO: Implement email sending or database storage
  console.log('Contact form submission:', { email, message });
  
  res.json({ 
    success: true, 
    message: 'Message received successfully' 
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
