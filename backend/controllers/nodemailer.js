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
            subject: "Welcome to our Real Estate Community!",
            html: `
            <h3>Dear ${email.split('@')[0]}</h3>
            <p>We are thrilled to welcome you to our Real Estate community! As a subscriber to our newsletter, 
            you will receive regular updates on the latest real estate news, trends, and listings.<br/>
            <br/>
            At <b>Realtor</b>, we specialize in helping buyers and sellers find their perfect property. 
            Our extensive listings of land and buildings cater to all budgets and preferences. We also offer 
            additional services such as building painting to help you achieve the perfect look for your new property.<br/>
            <br/>
            With a wealth of experience in the real estate industry, we are committed to providing you with excellent service, 
            guidance, and support throughout your journey. We value your trust in us, and we are excited to be part of your journey towards your dream property.<br/>
            <br/>
            Thank you for joining our community! We look forward to sharing valuable information with you and helping you achieve your real estate goals.<br/>
            <br/>
            Best regards,<br/>
            <b>Realtor</b>
            </p>
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