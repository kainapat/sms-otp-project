# 📱 SMS และ OTP Sender

โปรเจค Node.js สำหรับส่ง SMS และ OTP โดยใช้ Twilio API

## ✨ คุณสมบัติ
- ส่ง SMS ไปยังเบอร์โทรศัพท์ปลายทาง
- สร้างและส่ง OTP อัตโนมัติ
- ระบบตรวจสอบความถูกต้องของ OTP
- รองรับการส่งข้อความภาษาไทย

## 🚀 การติดตั้ง

1. ติดตั้ง dependencies:
```bash
npm install
```

2. สร้างไฟล์ `.env` และเพิ่ม credentials ของ Twilio:
```env
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
```

3. เริ่มต้นใช้งาน server:
```bash
npm start
```

## 🛠️ เทคโนโลยีที่ใช้
- Node.js
- Express.js
- Twilio API
- dotenv

## 📝 การใช้งาน API

### ส่ง SMS
```http
POST /api/send-sms
Content-Type: application/json

{
  "to": "+66812345678",
  "message": "ทดสอบส่ง SMS"
}
```

### ส่ง OTP
```http
POST /api/send-otp
Content-Type: application/json

{
  "to": "+66812345678"
}
```

### ตรวจสอบ OTP
```http
POST /api/verify-otp
Content-Type: application/json

{
  "phone": "+66812345678",
  "otp": "123456"
}
```