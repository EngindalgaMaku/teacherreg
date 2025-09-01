# Port 3003 Deployment Configuration

This document provides instructions for deploying the Teacher Registry API using port 3003.

## Why Port 3003?

After encountering issues with port 80 and port 3000 (both already allocated on the Coolify server), we're now using port 3003 which is:

1. Less commonly used by other services
2. Unlikely to conflict with standard ports like 80, 443, 3000, 8080
3. Still in the range of ports typically allowed by firewalls

## Coolify Configuration

When configuring the deployment in Coolify:

### 1. Port Configuration
- **Ports Exposes**: `3003`
- **Ports Mappings**: `3003:3003`

### 2. Build Settings
- **Build Command**: `npm run build`
- **Start Command**: `npm start`

### 3. Base Directory
- Set to `/` (root of the repository)

## URL Format

When accessing the API, use the following URL format:
```
http://teacherip.kodleon.com:3003
```

## API Endpoints

- Homepage: `http://teacherip.kodleon.com:3003/`
- API Root: `http://teacherip.kodleon.com:3003/api`
- Health Check: `http://teacherip.kodleon.com:3003/api/health`
- List Teachers: `http://teacherip.kodleon.com:3003/api/teachers`
- Get Teacher: `http://teacherip.kodleon.com:3003/api/teacher/[teacher_id]`
- Register Teacher: `http://teacherip.kodleon.com:3003/api/register` (POST)

## Testing

After deployment, use the `Test-Api-Port3003.ps1` script to verify that the API is working correctly.

## Client Applications

Both the classroom-monitor and student-client applications have been updated to use port 3003.

## Troubleshooting

If you encounter issues after deployment:

1. Check Coolify logs for any startup errors
2. Verify the port mapping is correct (3003:3003)
3. Make sure no other service is using port 3003
4. Check that the build and start commands are correctly set

## Future Considerations

If port 3003 also causes issues, alternative ports to try include:
- 9090
- 7000
- 4200
- 5555