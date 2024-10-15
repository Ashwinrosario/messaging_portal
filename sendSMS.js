require('dotenv').config();

const account_sid = process.env.TWILIO_ACCOUNT_SID;
const auth_token = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(account_sid, auth_token);

const sendSMS = (body) => {
    let msgOptions = {
        from: process.env.TWILIO_PHONE_NUMBER,
        to: process.env.TO_NUMBER,
        body
    }
    try {
        const message = client.messages.create(msgOptions);
        console.log(message);
    } catch (error) {
        console.error(error);
    }
}

sendSMS('Hello from Ashwin Testing');