import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { teacherRegistry } from "@/lib/teacherRegistry";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.teacher_id || !data.ip_address || !data.port) {
      return NextResponse.json(
        { error: "Missing required fields: teacher_id, ip_address, port" },
        { status: 400 }
      );
    }

    // Save teacher information
    teacherRegistry.registerTeacher(data.teacher_id, data.ip_address, data.port);

    return NextResponse.json({ message: "Teacher registered successfully" });
  } catch (error) {
    console.error("Error registering teacher:", error);
    return NextResponse.json(
      { error: "Failed to register teacher" },
      { status: 500 }
    );
  }
}