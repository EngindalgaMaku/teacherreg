# Comprehensive Troubleshooting Guide for Teacher Registry API

## Current Issue: HTTP ERROR 404 (Page Not Found)

We're seeing a 404 error when trying to access `http://teacherip.kodleon.com:8082/`. This means:

1. The server is responding (we're getting an HTTP response)
2. The application is either not running or not properly configured

## Step-by-Step Troubleshooting

### 1. Verify the Application is Deployed and Running

**Check Coolify Logs:**

- Log in to your Coolify dashboard
- Go to your Teacher Registry application
- Check the logs for any errors
- Look for the message "ready started server on 0.0.0.0:8082"

**Check if the container is running:**

- In Coolify, check if the container status is "Running"
- Look for any restart loops or error messages

### 2. Check Port Configuration

**Verify Port Mappings:**

- Confirm "Ports Exposes" is set to `8082`
- Confirm "Ports Mappings" is set to `8082:8082`
- Check if the port is actually being bound (look for "listening on port 8082" in logs)

**Test Different Ports:**
If port 8082 is not working, try another port:

1. Update package.json to use port 9090 instead
2. Update Coolify port mappings to match
3. Redeploy and test

### 3. Check Build and Start Commands

**Correct Commands:**

- Build Command: `npm run build`
- Start Command: `npm start`

**Check for Build Errors:**

- Look for any build failures in the logs
- Ensure all dependencies are installed correctly

### 4. Check Next.js Configuration

**Verify next.config.js:**

- Make sure there are no conflicting configurations
- Check for any output directory settings

**Check basePath Configuration:**

- Ensure there's no unexpected basePath set

### 5. Test Direct Server Access

If you have SSH access to the server, try:

```bash
curl http://localhost:8082/
curl http://localhost:8082/api/teachers
```

### 6. Check Network/Firewall Settings

**Possible Issues:**

- Port 8082 might be blocked by a firewall
- DNS might not be properly configured
- The domain might be pointing to the wrong server

### 7. Try Different URL Paths

**Test these URLs:**

- http://teacherip.kodleon.com:8082/
- http://teacherip.kodleon.com:8082/api
- http://teacherip.kodleon.com:8082/api/teachers
- http://teacherip.kodleon.com/ (default port)

### 8. Create a Simple Test Page

Add a basic health check endpoint to verify the application is running:

```typescript
// app/api/health/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
}
```

### 9. Debug Mode Deployment

Try deploying with debug mode enabled:

Add these environment variables in Coolify:

- `NODE_ENV=production`
- `DEBUG=*`

### 10. Check for Root Path Handler

Make sure the root path ("/") is properly handled by Next.js:

```typescript
// app/api/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Teacher Registry API is running" });
}
```

## Quick Fixes to Try

1. **Redeploy the application**

   - Sometimes a fresh deployment can fix issues

2. **Try a different port**

   - Update package.json and Coolify configuration to use port 9090

3. **Add root API handler**

   - Add an API route handler for the root path

4. **Check domain configuration**

   - Make sure teacherip.kodleon.com is pointing to the correct server

5. **Test with IP address instead of domain**
   - Try accessing the server directly by IP address
