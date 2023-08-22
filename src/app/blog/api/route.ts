import { NextResponse } from "next/server";

export function GET(req: Request) {
  return new Response("Hello World get");
}

export async function POST(req: Request) {
  const { message } = (await req.json()) as { message: string };
  const databaseUrl = process.env.DATABASE_URL;
  console.log({ databaseUrl });
  return NextResponse.json({ message });
}
