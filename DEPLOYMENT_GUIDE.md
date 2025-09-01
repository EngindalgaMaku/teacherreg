# Next.js teacher registry deployment

This is a simple Node.js application using Next.js that will be much easier to deploy on Coolify compared to the Rust version.

## Files to commit to your repository:

- package.json
- README.md
- app/ (directory with all Next.js files)
- tailwind.config.ts

## How to deploy on Coolify:

1. Push these files to your Git repository
2. In Coolify, choose "Node.js" as the build pack
3. Set:
   - Build Command: npm run build
   - Start Command: npm start
   - Port: 8082
4. Deploy!

This approach is much more likely to work since Next.js/Node.js is very well supported in most hosting environments.

## Updating classroom-monitor code:

You'll need to update the teacher dashboard to use this new API:

1. In `classroom-monitor/src-tauri/src/main.rs`:
   - Change the `register_teacher_ip` function to use this new Next.js API endpoint
   - Example: `response = client.post("http://localhost:8082/api/register").json(...)`

2. In `student-client/src/main.rs`:
   - Change the API URL in the `discover_server_via_api` function
   - Example: `response = client.get("http://localhost:8082/api/teacher/{teacher_id}")`