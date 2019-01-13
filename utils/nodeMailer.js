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
                  user: "2931a5ad8eadde",
                  pass: "9cad0267aa6f29"
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