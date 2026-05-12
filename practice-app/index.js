const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Swarup DevOps App</title>
        <style>
          body { font-family: Arial; background: #1a1a2e; color: white; text-align: center; padding: 50px; }
          h1 { color: #00d4ff; }
          .badge { background: #00d4ff; color: black; padding: 5px 15px; border-radius: 20px; }
        </style>
      </head>
      <body>
        <h1>🚀 Swarup DevOps App</h1>
        <p><span class="badge">v3</span></p>
        <p>Deployed via CI/CD Pipeline</p>
        <p>Docker + Kubernetes + GitHub Actions</p>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
