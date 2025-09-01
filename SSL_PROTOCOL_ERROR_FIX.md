# SSL Protocol Error Fix

The error you're seeing (`ERR_SSL_PROTOCOL_ERROR`) occurs because:

1. You're trying to access `teacherip.kodleon.com:8082` using HTTPS (secure protocol)
2. Your Next.js application is running on port 8082 without SSL/TLS configuration

## Solution: Use HTTP for Port 8082

When accessing your API on a non-standard port (8082), you need to:

1. Use `http://` instead of `https://` in the URL
2. Explicitly specify the port number in the URL

### Correct URL format:

```
http://teacherip.kodleon.com:8082
```

## Changes Made

1. Updated classroom-monitor/src-tauri/src/main.rs:

   - Changed API URL from `https://teacherip.kodleon.com/api/register` to `http://teacherip.kodleon.com:8082/api/register`

2. Updated student-client/src/main.rs:

   - Changed API URL from `https://teacherip.kodleon.com/api/teacher/{teacher_id}` to `http://teacherip.kodleon.com:8082/api/teacher/{teacher_id}`

3. Updated Test-Api-Port8082.ps1:
   - Changed all URLs to use `http://` with port 8082

## Understanding SSL/TLS and Ports

- **Port 443**: Default for HTTPS (with SSL/TLS)
- **Port 80**: Default for HTTP (without SSL/TLS)
- **Other ports** (like 8082): Need explicit protocol and port specification

When accessing a server on a non-standard port, you must specify:

1. The correct protocol (`http://` or `https://`)
2. The port number (e.g., `:8082`)

## Testing Your Application

Run the test script to verify connectivity:

```powershell
.\Test-Api-Port8082.ps1
```

## SSL Options for Port 8082 (Optional)

If you want to use HTTPS on port 8082, you would need to:

1. Configure SSL certificates for your domain
2. Set up a reverse proxy (like Nginx) to handle SSL termination
3. Configure Coolify to use the certificates

For now, using HTTP on port 8082 is the simplest solution.

## Troubleshooting

If you still see connection issues:

1. Check if port 8082 is open in your firewall
2. Verify that Coolify is correctly routing traffic to your application
3. Test locally using curl or a similar tool:
   ```
   curl http://teacherip.kodleon.com:8082/api/teachers
   ```
