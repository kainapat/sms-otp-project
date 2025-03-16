require('dotenv').config(); // Load environment variables from .env

const twilio = require('twilio');
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const sendOTP = async (phone) => {
    try {
        const verification = await client.verify.v2
            .services(process.env.TWILIO_VERIFY_SERVICE_ID)
            .verifications.create({ to: phone, channel: 'sms' });

        console.log('OTP Sent! Phone Number:', phone);
    } catch (error) {
        console.error('Error sending OTP:', error.message);
    }
};

// Test sending OTP
sendOTP('+66944828221');