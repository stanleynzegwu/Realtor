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
            from: process.env.MY_EMAIL,
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

module.exports = {
    sendSubsciptionMail
  }