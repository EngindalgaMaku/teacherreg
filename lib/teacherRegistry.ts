// Shared in-memory storage for teacher information
interface TeacherInfo {
  ip_address: string;
  port: number;
  last_updated: string;
}

// Create a global registry object that will be shared across all API routes
// Use the Node.js global object to ensure it's shared across all imports
declare global {
  var teacherRegistryData: Record<string, TeacherInfo> | undefined;
}

// Initialize the global variable if it doesn't exist
global.teacherRegistryData = global.teacherRegistryData || {};

// Simple helper functions to work with the global registry
export const teacherRegistry = {
  registerTeacher(teacherId: string, ipAddress: string, port: number): void {
    global.teacherRegistryData![teacherId] = {
      ip_address: ipAddress,
      port: port,
      last_updated: new Date().toISOString(),
    };
    console.log(`Registered teacher ${teacherId} at ${ipAddress}:${port}`);
    console.log(`Current registry: ${JSON.stringify(global.teacherRegistryData)}`);
  },

  getTeacher(teacherId: string): TeacherInfo | null {
    console.log(`Looking for teacher ${teacherId} in registry: ${JSON.stringify(global.teacherRegistryData)}`);
    return global.teacherRegistryData![teacherId] || null;
  },

  getAllTeachers(): Record<string, TeacherInfo> {
    return { ...global.teacherRegistryData! };
  }
};