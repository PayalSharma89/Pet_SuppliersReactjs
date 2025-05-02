module.exports = {
    apps: [
      {
        name: "Pet", // Application name
        script: "npx", // Use npx to run a package binary
        interpreter: "none", // No interpreter needed since it's a binary
        args: "serve -s build -l 3001 -T", // Serve build folder on port 8443 with no logs
      },
    ],
  };
  