const nodemailer = require("nodemailer")

const sendSubsciptionMail = async (email) => {

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.MY_EMAIL,
          pass: process.env.MY_APPPASSWORD,
        },
    });

    try{

        let info = await transporter.sendMail({
            from: `Realtor <${process.env.MY_EMAIL}>`,
            to: email,
            subject: "Subscribed To Newsletter",
            html: `
            <h1>Congratulation</h1>
            <p>Congratulations on your subscription to our Newsletter</p>
            `,
          });
        
          console.log(info.messageId); // Random ID generated after successful send (optional)
          //return res.status(200).json();
    }catch(err){
        console.log(err)
    }
}

const sendBulkSubsciptionMail = async (req,res) => {
    const { emails, subject, body } = req.body

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.MY_EMAIL,
          pass: process.env.MY_APPPASSWORD,
        },
    });

    try{

        let info = await transporter.sendMail({
            from: `Realtor <${process.env.MY_EMAIL}>`,
            bcc: emails, //with bcc rather than to, each recipent will not see other recipients mail
            subject: subject,
            html: body,
          });
        
          console.log(info.messageId); // Random ID generated after successful send (optional)
          return res.status(200).json();
    }catch(err){
        return res.status(500).json(err.message)
    }
}

const sendRequestReplyMail = async (req,res) => {
    const { email, subject, message } = req.body

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.MY_EMAIL,
          pass: process.env.MY_APPPASSWORD,
        },
    });

    try{

        let info = await transporter.sendMail({
            from: `Realtor <${process.env.MY_EMAIL}>`,
            to: email, //with bcc rather than to, each recipent will not see other recipients mail
            subject: subject,
            text: message,
          });
        
          console.log(info.messageId); // Random ID generated after successful send (optional)
          return res.status(200).json();
    }catch(err){
        return res.status(500).json(err.message)
    }
}

module.exports = {
    sendSubsciptionMail,
    sendBulkSubsciptionMail,
    sendRequestReplyMail
  }