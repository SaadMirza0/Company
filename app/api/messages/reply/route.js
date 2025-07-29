import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { to, subject, body } = await req.json();

    if (!to || !subject || !body) {
      return NextResponse.json({ success: false, error: "Missing fields" }, { status: 400 });
    }

    // ✅ Configure transporter (Use your email & app password)
    const transporter = nodemailer.createTransport({
      service: "gmail", // or smtp
      auth: {
        user: "heavygaming302@gmail.com",
        pass: "mfef ljwm ifje idsh", // not your Gmail password
      },
    });

    // ✅ Send email
    await transporter.sendMail({
      from: '"Saad Mirza" <saadmirzapak@gmail.com>', // sender address
      to,
      subject,
      text: body,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error:"this error is from reply route there is nodemailer", error: error.message }, { status: 500 });
  }
}
