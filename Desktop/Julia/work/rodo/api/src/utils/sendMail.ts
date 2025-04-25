
const nodemailer = require('nodemailer');
const transport  = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
    user: process.env.EMAIL_USER,
    pass:process.env.EMAIL_PASS
    }
});

let mail = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Selltana</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }
    .container { max-width: 600px; margin: 20px auto; background: #fff; padding: 20px; border-radius: 8px; }
    .header { text-align: center; font-size: 24px; color: #333; }
    .content { font-size: 16px; color: #555; line-height: 1.6; text-align: center; }
    .button { display: inline-block; background: #007bff; color: #fff; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold; }
    .footer { text-align: center; font-size: 12px; color: #888; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">🎉 Welcome to Selltana!</div>
    <div class="content">
      <p>Hi Marcel,</p>
      <p>We’re thrilled to have you join us! Start exploring all the great features we have to offer.</p>
      <p><a href="[Your Website URL]" class="button">Get Started</a></p>
      <p>If you have any questions, feel free to reach out.</p>
    </div>
    <div class="footer">
      &copy; 2025 Selltana. All rights reserved.
    </div>
  </div>
</body>
</html>

`
const mailOptions = {
    from: '"Example Team" <noreply@selltana.com>',
    to: 'marcel.uchenna.g20@gmail.com',
    subject: 'Test Email',
    html: mail,
};

 transport.sendMail(mailOptions)
 .then((info: unknown) => {
    console.log('Email sent: ', info);
 })
 .catch((error: unknown) => {
    console.log('Error occurred: ', error);
 })