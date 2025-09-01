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

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json(teacherRegistry);
  } catch (error) {
    console.error('Error listing teachers:', error);
    return NextResponse.json(
      { error: 'Failed to list teachers' },
      { status: 500 }
    );
  }
}