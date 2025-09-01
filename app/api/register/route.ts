import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Type for teacher information
interface TeacherInfo {
  ip_address: string;
  port: number;
  last_updated: string;
}

// In-memory storage for teacher information
const teacherRegistry: Record<string, TeacherInfo> = {};

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.teacher_id || !data.ip_address || !data.port) {
      return NextResponse.json(
        { error: 'Missing required fields: teacher_id, ip_address, port' },
        { status: 400 }
      );
    }

    // Save teacher information
    teacherRegistry[data.teacher_id] = {
      ip_address: data.ip_address,
      port: data.port,
      last_updated: new Date().toISOString(),
    };

    console.log(`Registered teacher ${data.teacher_id} at ${data.ip_address}:${data.port}`);
    
    return NextResponse.json({ message: "Teacher registered successfully" });
  } catch (error) {
    console.error('Error registering teacher:', error);
    return NextResponse.json(
      { error: 'Failed to register teacher' },
      { status: 500 }
    );
  }
}