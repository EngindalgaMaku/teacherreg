# Fixing Bad Gateway Error in Coolify Deployment

If you're seeing a "Bad Gateway" (502) error when accessing your Teacher Registry API deployed on Coolify, follow these troubleshooting steps:

## 1. Port Allocation Errors

We've encountered two port allocation errors:

```
Error response from daemon: driver failed programming external connectivity: Bind for 0.0.0.0:80 failed: port is already allocated
```

```
Error response from daemon: driver failed programming external connectivity: Bind for 0.0.0.0:3000 failed: port is already allocated
```

### Solution: Use Port 8082 Instead

We've updated the application to use port 8082, which was the original port used by the Rust version and should be available:

1. In your Coolify dashboard, go to your Teacher Registry deployment
2. Under "Network" section:
   - Set "Ports Exposes" to `8082`
   - Set "Ports Mappings" to `8082:8082`
3. Under "Build" section:
   - Set "Build Command" to `npm run build`
   - Set "Start Command" to `npm start`
4. Save and redeploy

## 2. Verify Build and Start Commands

Make sure your build and start commands are correctly set:

- **Build Command**: `npm run build`
- **Start Command**: `npm start`

These commands should match what's in your package.json file.

## 3. Check Logs for Errors

After deployment, check the application logs:

1. In Coolify dashboard, go to your Teacher Registry deployment
2. Click on "Logs" tab
3. Look for any error messages
4. Specifically, check if the application is starting and binding to port 8082

## 4. Alternative Ports to Try

If port 8082 also causes issues, try these alternative ports that are less commonly used:

- 9090
- 7000
- 4200
- 5555
- 6060

When changing ports, remember to update:
1. The port in package.json
2. The port in Coolify configuration
3. Push the changes to your repository before redeploying

## 5. Configure Custom Domain

If you're using a custom domain (teacherip.kodleon.com), make sure it's configured to route to the correct port on your Coolify server.

## 6. Testing After Deployment

Once deployed successfully, test your application with:

```powershell
# PowerShell
Invoke-RestMethod -Uri "https://teacherip.kodleon.com/api/teachers" -Method Get
```

```bash
# Bash
curl -s https://teacherip.kodleon.com/api/teachers | json_pp
```

## 7. Check with Coolify Support

If all common ports are already allocated, you may need to:
1. Check with your Coolify administrator to see which ports are available
2. Check if there are unused applications that can be removed to free up ports
3. Consider using a different server or deployment method if Coolify resources are constrained