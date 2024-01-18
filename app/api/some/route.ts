import { NextResponse } from "next/server";
import db from "@/lib/db";

export function GET() {
  return NextResponse.json("booeeeenasss");
}

// create POST and send a email
export async function POST(req: any) {
  console.log("email hola?");
  const { email } = await req.json();

  console.log("email pa", email);

  const newEmail = db.email.create({
    data: {
      email,
    },
  });

  return NextResponse.json(newEmail);
}
