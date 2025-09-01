import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { teacherRegistry } from "@/lib/teacherRegistry";

export async function GET(request: NextRequest) {
  try {
    const teachers = teacherRegistry.getAllTeachers();
    return NextResponse.json(teachers);
  } catch (error) {
    console.error("Error listing teachers:", error);
    return NextResponse.json(
      { error: "Failed to list teachers" },
      { status: 500 }
    );
  }
}
