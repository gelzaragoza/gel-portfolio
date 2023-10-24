const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3000; // Set your desired port

// Middleware to parse JSON in POST requests
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
