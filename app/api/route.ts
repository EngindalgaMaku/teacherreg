import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Teacher Registry API is running",
    version: "1.0.0",
    endpoints: [
      "/api/register",
      "/api/teacher/[teacher_id]",
      "/api/teachers",
      "/api/health",
    ],
  });
}
