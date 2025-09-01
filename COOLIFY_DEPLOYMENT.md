# Teacher Registry API Deployment Guide

This guide explains how to deploy the Next.js Teacher Registry API to Coolify.

## Prerequisites

1. **Coolify Access** - Make sure you have access to your Coolify dashboard
2. **Git Repository** - Push the teacher-registry-nextjs code to a Git repository
3. **Node.js** - Make sure Coolify supports Node.js (which it does)

## Deployment Steps

### 1. Connect Your Repository to Coolify

1. Log in to your Coolify dashboard
2. Click "Create a new service" or "New application"
3. Select your Git provider (GitHub, GitLab, etc.)
4. Find and select your teacher-registry-nextjs repository

### 2. Configure the Deployment

1. **Build Pack Selection**:

   - Choose "Node.js" as the build pack
   - (Not "Static", "Docker", or "Docker Compose")

2. **Environment Configuration**:

   - Set Node.js version to 18 or later (if available)
   - No environment variables are required, but you can add any if needed

3. **Build Settings**:

   - Build Command: `npm run build`
   - Start Command: `npm start`
   - Port: `8082`

4. **Port Configuration**:

   - Ports Exposes: `8082`
   - Ports Mappings: `8082:8082`

5. **Other Settings**:
   - Base Directory: `/` (root of the repository)
   - Publish Directory: `/` (root of the repository)
   - Leave other settings at their defaults
   - You can set up a custom domain if you want

### 3. Deploy the Application

1. Click "Deploy" or "Save & Deploy"
2. Wait for the build and deployment to complete
3. Check the logs for any issues

## Verification

1. **Check the Logs**:

   - Look for "ready started server on 0.0.0.0:8082" in the logs

2. **Access the API**:

   - Navigate to the URL provided by Coolify
   - You should see the Teacher Registry API homepage

3. **Test API Endpoints**:
   - GET /api/teachers
   - Test registration with a tool like Postman or curl

## Troubleshooting

### Common Issues

1. **Bad Gateway (502) Errors**:

   - Ensure port mapping is correct (8082:8082)
   - Check that the application is actually running (look for "ready started server" in logs)
   - Verify that the Build Command and Start Command are properly set

2. **Port Already Allocated Errors**:

   - If you see "Bind for 0.0.0.0:8082 failed: port is already allocated", try a different port
   - Uncommon ports like 9090, 7000, or 4200 are less likely to be in use

3. **Build Failures**:

   - Check Node.js version
   - Verify all package.json dependencies are correctly specified

4. **Runtime Errors**:

   - Check the Coolify logs for errors
   - Verify port configuration

5. **API Connection Issues**:
   - Make sure the teacher dashboard and student clients are using the correct URL
   - Check the network connectivity between components

## Updating the Teacher Registry

When you need to update the Teacher Registry API:

1. Make changes to your code locally
2. Commit and push to your Git repository
3. In Coolify, simply redeploy the application

The Next.js application will automatically rebuild and restart.

## Additional Notes

- The in-memory storage means that teacher registrations will be lost if the service restarts
- For production use, consider adding a database to persist teacher registrations
- You may want to set up HTTPS for secure communication
