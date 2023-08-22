import { NextResponse } from "next/server";

export function GET(req: Request) {
  return new Response("Hello World get");
}

export function POST(req: Request) {
  const databaseUrl = process.env.DATABASE_URL;
  console.log({ databaseUrl });
  return NextResponse.json({ message: "Hello World post" });
}
