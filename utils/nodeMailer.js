'use strict';
const nodemailer = require('nodemailer');
module.exports = {
    sendMail: async (to, subject, html) => {
        nodemailer.createTestAccount(async (err, account) => {
            let  transporter = nodemailer.createTransport(
                {
                host: "smtp.mailtrap.io",
                port: 2525,
                auth: {
                  user: "ffcfc491ef2f4f",
                  pass: "ae64261b1b48b0"
                }
              });
            let mailOptions = {
                from: "Wager-Games",
                to: to,
                subject: subject,
                html: html
            };
            let response = await transporter.sendMail(mailOptions);
        })
    }
}