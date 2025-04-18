import { jobsDB } from "@/lib/applications";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(jobsDB);
}
