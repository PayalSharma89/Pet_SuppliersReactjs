module.exports = {
  apps: [
    {
      name: "Pet",
      script: "npx",
      interpreter: "none",
      args: "serve -s build -l 3000 -T",
    },
  ],
};
