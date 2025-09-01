import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-8 flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-center mb-6">
          Teacher Registry API
        </h1>

        <div className="mb-8">
          <p className="text-lg mb-4">
            This service manages teacher IP addresses for the Classroom
            Monitoring System.
          </p>
          <p className="text-gray-600">
            It allows student clients to discover the teacher&apos;s IP address
            even when it changes dynamically.
          </p>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-xl font-semibold mb-4">API Endpoints</h2>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-medium text-blue-600">Register a Teacher</h3>
              <pre className="bg-gray-800 text-white p-3 rounded mt-2 overflow-x-auto">
                POST /api/register
                {`
{
  "teacher_id": "default_teacher",
  "ip_address": "192.168.1.100",
  "port": 8080
}`}
              </pre>
            </div>

            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-medium text-blue-600">
                Get Teacher Information
              </h3>
              <pre className="bg-gray-800 text-white p-3 rounded mt-2">
                GET /api/teacher/{"{teacher_id}"}
              </pre>
            </div>

            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-medium text-blue-600">List All Teachers</h3>
              <pre className="bg-gray-800 text-white p-3 rounded mt-2">
                GET /api/teachers
              </pre>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">Status</h2>
          <div className="flex items-center">
            <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
            <p>API is running on port 3003</p>
          </div>
        </div>
      </div>
    </main>
  );
}
