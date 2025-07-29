import { getConnection } from "@/lib/db"; // your DB connection file
import { NextResponse } from "next/server";

// GET all messages
export async function GET() {
  try {
    const db = await getConnection();
    const [rows] = await db.execute("SELECT * FROM messages ORDER BY created_at DESC");
    return NextResponse.json({ success: true, data: rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error:"this error is from get all message routes" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
    const connect = await getConnection();
    await connect.execute(
      "INSERT INTO messages (name,email,message) VALUES (?,?,?)",
      [name, email, message]
    );
    console.log("the message is transfer");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false,error:error.message });
  }
}

