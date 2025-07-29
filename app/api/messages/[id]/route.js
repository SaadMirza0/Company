import { getConnection } from "@/lib/db";
import { NextResponse } from "next/server";

// ✅ Get single message by ID
export async function GET(req, { params }) {
  try {
    const db = await getConnection();
    const [rows] = await db.execute("SELECT * FROM messages WHERE id = ?", [params.id]);

    if (rows.length === 0) {
      return NextResponse.json({ success: false, error: "Message not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: rows[0] }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error:"this message is from getting single message with id", error: error.message }, { status: 500 });
  }
}

// ✅ Delete a message
export async function DELETE(req, { params }) {
  try {
    const db = await getConnection();
    await db.execute("DELETE FROM messages WHERE id = ?", [params.id]);
    return NextResponse.json({ success: true, message: "Message deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message:"this error is from delete message in id" }, { status: 500 });
  }
}

// ✅ Update (Hold message)
export async function PUT(req, { params }) {
  try {
    const { hold_until } = await req.json();
    const db = await getConnection();
    await db.execute("UPDATE messages SET status='hold', hold_until=? WHERE id = ?", [hold_until, params.id]);

    return NextResponse.json({ success: true, message: "Message put on hold" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: "this message is from update route in id"}, { status: 500 });
  }
}
