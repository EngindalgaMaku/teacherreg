# Bad Gateway Error Troubleshooting

You're seeing "Starting Teacher Registry API on port 8082" in your logs which indicates you might be running the original Rust implementation instead of the Next.js version.

## Determine Which API Version is Running

### If you're running locally:

1. Stop any running instances of the Teacher Registry API:

   ```powershell
   # Stop Rust version if running
   Get-Process | Where-Object { $_.ProcessName -like "*teacher-registry*" } | Stop-Process -Force

   # Stop Node.js processes running on port 3000
   netstat -ano | findstr :3000
   # Note the PID (last column) and then stop it:
   # taskkill /PID [PID] /F
   ```

2. Start only the Next.js version:
   ```powershell
   cd teacher-registry-nextjs
   npm run dev
   ```

### If you're using Coolify:

1. Make sure you've deployed the Next.js version (teacher-registry-nextjs) to Coolify, not the Rust version.

2. Check your Coolify deployment settings:
   - Build Command: `npm run build`
   - Start Command: `npm start`
   - Port Exposes: `3000`
   - Port Mappings: `3000:3000`

## Fix Client Applications

Make sure your classroom-monitor and student-client applications are connecting to the correct URL:

1. The applications should use: `http://teacherip.kodleon.com:3000/api/*` (for the domain deployment)

2. You can test the API using:
   ```powershell
   Invoke-RestMethod -Uri "http://teacherip.kodleon.com:3000/api/teachers" -Method Get
   ```

## Create a Simple Test Page

Add a simple index.html file to quickly test if your server is responding:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Teacher Registry Test</title>
  </head>
  <body>
    <h1>Teacher Registry API Test</h1>
    <p>
      If you see this page, the web server is working but the API might not be.
    </p>
    <button onclick="testAPI()">Test API</button>
    <div id="result"></div>

    <script>
      function testAPI() {
        fetch("/api/teachers")
          .then((response) => response.json())
          .then((data) => {
            document.getElementById("result").innerText =
              "API works! Result: " + JSON.stringify(data);
          })
          .catch((err) => {
            document.getElementById("result").innerText =
              "API error: " + err.message;
          });
      }
    </script>
  </body>
</html>
```

Place this file in the `public` folder of your Next.js project.
