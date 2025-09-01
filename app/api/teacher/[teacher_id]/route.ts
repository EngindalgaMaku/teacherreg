import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Type for teacher information
interface TeacherInfo {
  ip_address: string;
  port: number;
  last_updated: string;
}

// In-memory storage for teacher information (shared with register route)
const teacherRegistry: Record<string, TeacherInfo> = {};

export async function GET(
  request: NextRequest,
  { params }: { params: { teacher_id: string } }
) {
  try {
    const teacherId = params.teacher_id;
    
    if (!teacherRegistry[teacherId]) {
      return NextResponse.json(
        { error: 'Teacher not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(teacherRegistry[teacherId]);
  } catch (error) {
    console.error('Error getting teacher:', error);
    return NextResponse.json(
      { error: 'Failed to get teacher information' },
      { status: 500 }
    );
  }
}