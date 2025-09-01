// Shared in-memory storage for teacher information
interface TeacherInfo {
  ip_address: string;
  port: number;
  last_updated: string;
}

class TeacherRegistry {
  private registry: Record<string, TeacherInfo> = {};

  registerTeacher(teacherId: string, ipAddress: string, port: number): void {
    this.registry[teacherId] = {
      ip_address: ipAddress,
      port: port,
      last_updated: new Date().toISOString(),
    };
    console.log(`Registered teacher ${teacherId} at ${ipAddress}:${port}`);
  }

  getTeacher(teacherId: string): TeacherInfo | null {
    return this.registry[teacherId] || null;
  }

  getAllTeachers(): Record<string, TeacherInfo> {
    return { ...this.registry };
  }
}

// Export a singleton instance
export const teacherRegistry = new TeacherRegistry();
