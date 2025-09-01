# Port 80 Deployment Note

When deploying the Teacher Registry API to Coolify with port 80, please consider the following:

## Important Considerations for Port 80

1. **Port 80 is the standard HTTP port**
   - No need to specify the port in URLs (e.g., `https://teacherip.kodleon.com/` instead of `https://teacherip.kodleon.com:8082/`)
   - Simpler for users and client applications

2. **Port 80 may require special permissions**
   - On many Linux systems, binding to ports below 1024 requires root privileges
   - Coolify may handle this automatically, but check the documentation if issues arise

3. **Port conflict possibility**
   - Port 80 might be used by other services on the host
   - If deployment fails, check if another service is using port 80

## Coolify Configuration

When configuring the deployment in Coolify:

1. **Build Settings**:
   - Build Command: `npm run build`
   - Start Command: `npm start`
   - Port: `80`

2. **Environment Variables**:
   - No special environment variables are needed

3. **Proxy Settings**:
   - Coolify should automatically proxy requests to your application
   - Ensure Coolify's proxy settings allow port 80 forwarding

## Testing After Deployment

After deploying, test the API using the provided test scripts:

- `Test-Api.ps1` (PowerShell)
- `test-api.sh` (Bash)

If you encounter any "Bad Gateway" errors, check:

1. Application logs in Coolify dashboard
2. Whether the application is actually running
3. Whether port 80 is available on the host

## Fallback Options

If port 80 cannot be used:

1. Try port 3000 (common for Node.js applications)
2. Use port 8080 (alternative HTTP port)
3. Return to port 8082 (original configuration)

In any case, ensure the port in `package.json` matches the port configured in Coolify.