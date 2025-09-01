import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { teacherRegistry } from "@/lib/teacherRegistry";

export async function GET(
  request: NextRequest,
  { params }: { params: { teacher_id: string } }
) {
  try {
    const teacherId = params.teacher_id;
    const teacherInfo = teacherRegistry.getTeacher(teacherId);

    if (!teacherInfo) {
      return NextResponse.json({ error: "Teacher not found" }, { status: 404 });
    }

    return NextResponse.json(teacherInfo);
  } catch (error) {
    console.error("Error getting teacher:", error);
    return NextResponse.json(
      { error: "Failed to get teacher information" },
      { status: 500 }
    );
  }
}
