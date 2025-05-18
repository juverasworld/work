import { SendMailClient } from "zeptomail";

const url = "api.zeptomail.com/";
const token = `Zoho-enczapikey ${process.env.EMAIL_PASS}`;

let client = new SendMailClient({ url, token });
export default async function sendMail(
  email: string,
  name: string,
  subject: string,
  body: string
) {
  try {
    client.sendMail({
      from: {
        address: "noreply@myrodo.com",
        name: "noreply",
      },
      to: [
        {
          email_address: {
            address: email,
            name: name,
          },
        },
      ],
      subject: subject,
      htmlbody: body,
    });
    return true;
  } catch (error) {
    return false;
  }
}

export async function sendVerificationMail(
  email: string,
  name: string,
  token: string,
  code: string
) {
  const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Rodo</title>
        <style>
          body { font-family: Arial, sans-serif; background-color: #f4f4f4; }
          .container { max-width: 600px; margin: 20px auto; background: #fff; padding: 20px; border-radius: 8px; }
          .header { text-align: center; font-size: 24px; color: #333; }
          .content { font-size: 16px; color: #555; text-align: center; }
          .button { background:rgb(112, 192, 136); color: #fff; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold; }
          .footer { text-align: center; font-size: 12px; color: #888; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">🎉 Welcome to Rodo!</div>
          <div class="content">
            <p>Hi ${name},</p>
            <p>We’re thrilled to have you join us! Start exploring all the great features we have to offer.</p>
          
            <h2>Use Your Verification Code ${code}</h2>
        <p>Use the code below to verify your email:</p>
        <h3 style="background: #f4f4f4; padding: 10px; display: inline-block; border-radius: 5px;">${code}</h3>
            <p>If you have any questions, feel free to reach out.</p>
            <p>Both tokens expire in one hour</p>
          </div>
          <div class="footer">&copy; 2025 Rodo. All rights reserved.</div>
        </div>
      </body>
      </html>
    `;
  const subject = "Welcome to Rodo";
  return await sendMail(email, name, subject, htmlContent);
}

// <p><a href="https://rodo.com/auth/verify-email/${token}" class="button">Verify Email</a></p>
// <hr>
// <p>OR</p>
// <hr>