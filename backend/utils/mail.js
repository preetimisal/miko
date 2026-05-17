import nodemailer from "nodemailer";
import dotenv from "dotenv";

import dns from "dns";

dns.setDefaultResultOrder("ipv4first");

dotenv.config();

console.log("Creating transporter");

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

console.log("Transporter created");

export const sendOtpMail = async (to, otp) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to,
      subject: "Reset Your Password",
      html: `<p>Your OTP for password reset is <b>${otp}</b>. It expires in 5 minutes.</p>`,
    });

    console.log("OTP Mail Sent");
  } catch (error) {
    console.log("Error sending OTP mail:", error);
  }
};

export const sendDeliveryOtpMail = async (user, otp) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: user.email,
      subject: "Delivery OTP",
      html: `<p>Your OTP for delivery is <b>${otp}</b>. It expires in 5 minutes.</p>`,
    });

    console.log("Delivery OTP Mail Sent");
  } catch (error) {
    console.log("Error sending delivery OTP:", error);
  }
};