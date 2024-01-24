const mailOptions = {
    from: 'aniketgade37@gmail.com', // Sender's email address
    to: recipient, // Recipient's email address
    subject: subject,
    text: message,
    replyTo: senderEmail // Reply-to address
  };
  
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Use bodyParser middleware to parse POST data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (like HTML, CSS, JS) from the public directory
app.use(express.static('public'));

// Your Nodemailer configuration (replace with your own SMTP details)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aniketgade37@gmail.com',
    pass: '82a65n00i'
  }
});

// Handle POST request for sending letters
app.post('/send-letter', (req, res) => {
  const recipient = req.body.recipient;
  const subject = req.body.subject;
  const message = req.body.message;
  const senderEmail = req.body.senderEmail;

  // Construct the email message
  const mailOptions = {
    from: 'your.email@gmail.com', // Sender's email address
    to: recipient, // Recipient's email address
    subject: subject,
    text: message,
    replyTo: senderEmail // Reply-to address
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Letter sent successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
