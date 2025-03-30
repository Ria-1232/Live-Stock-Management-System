const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();  // to use environment variables from .env file

const app = express();
const port = process.env.PORT || 5000;

// Basic route to test server
app.get('/', (req, res) => {
  res.send('Welcome to the Livestock Management System API');
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect to MongoDB:', err));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
