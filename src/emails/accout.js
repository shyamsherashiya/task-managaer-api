const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// sgMail.send({
//     to:"shyamsherashiya@gmail.com",
//     from:"rajul19acharya@gmail.com",
//     subject:"This is my first email creation!",
//     text:"I hope this one gets to you."
// })

const sendWelcomeEmail  = (email,name)=>{
    sgMail.send({
        to:email,
        from:'shyamsherashiya@gmail.com',
        subject:'Thanks for joining in!',
        text:`Welcome to the app, ${name}.Let me know how you get along with the app.`
    })
} 

const sendCancelationEmail = (email,name) =>{
    sgMail.send({
        to: email,
        from:'shyamsherashiya@gmail.com',
        subject:'Sorry! we miss you.',
        text:`GoodBye! ${name}. I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}