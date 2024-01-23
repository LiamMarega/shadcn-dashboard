import { NextResponse } from "next/server";
import db from "@/lib/db";

export function GET() {
  return NextResponse.json("booeeeenasss");
}

// create POST and send a email
export async function POST(req: any) {
  const data = await req.json();

  console.log("email pa", data);

  const newEmail = await db.email.create({
    data,
  });
  console.log("email pupa", newEmail.email);
  console.log("email pupa", newEmail.id);

  return NextResponse.json(newEmail);
}
