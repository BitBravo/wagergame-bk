'use strict';
const nodemailer = require('nodemailer');
module.exports = {
  sendMail: async (to, subject, html) => {
    nodemailer.createTestAccount(async (err, account) => {
      var transporter = nodemailer.createTransport({
        host: 'smtp.sendgrid.net',
        port: 587,

        auth: {
          user: 'apikey',
          pass: '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',
        },
      });
      let mailOptions = {
        from: 'ziaullah@gmail.com',
        to: to,
        subject: subject,
        html: html,
      };
      let response = await transporter.sendMail(mailOptions);
      console.log(response);
    });
  },
};
