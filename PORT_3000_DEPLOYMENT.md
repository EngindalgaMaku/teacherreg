# Port 3000 Deployment Configuration

This document provides instructions for deploying the Teacher Registry API using port 3000.

## Why Port 3000?

We're using port 3000 because:

1. It's the default port for Next.js applications (no need to explicitly specify it)
2. Your other Coolify deployments are already using this port successfully
3. It provides consistency across your deployments

## Coolify Configuration

When configuring the deployment in Coolify:

### 1. Port Configuration

- **Ports Exposes**: `3000`
- **Ports Mappings**: `3000:3000`

### 2. Build Settings

- **Build Command**: `npm run build`
- **Start Command**: `npm start`

### 3. Base Directory

- Set to `/` (root of the repository)

## URL Format

When accessing the API, use the following URL format:

```
http://teacherip.kodleon.com:3000
```

## API Endpoints

- Homepage: `http://teacherip.kodleon.com:3000/`
- API Root: `http://teacherip.kodleon.com:3000/api`
- Health Check: `http://teacherip.kodleon.com:3000/api/health`
- List Teachers: `http://teacherip.kodleon.com:3000/api/teachers`
- Get Teacher: `http://teacherip.kodleon.com:3000/api/teacher/[teacher_id]`
- Register Teacher: `http://teacherip.kodleon.com:3000/api/register` (POST)

## Testing

After deployment, use the `Test-Api-Port3000.ps1` script to verify that the API is working correctly.

## Client Applications

Both the classroom-monitor and student-client applications have been updated to use port 3000.

## Troubleshooting

If you encounter issues after deployment:

1. Check Coolify logs for any startup errors
2. Verify the port mapping is correct (3000:3000)
3. Check that the build and start commands are correctly set

## Note About Previous Port Errors

Previously, we encountered a "port is already allocated" error when trying to use port 3000. However, you've confirmed that your other sites are successfully using port 3000 on Coolify, which suggests that:

1. The previous error might have been temporary
2. There might have been a misconfiguration in the previous deployment
3. Coolify might be able to handle multiple services on port 3000 through its proxy mechanism

If you encounter port allocation errors again, we can try alternative ports such as:

- 3003
- 9090
- 7000
- 4200
