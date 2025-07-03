const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Node.js + Jenkins + AWS</title>
        <style>
          body {
            background-color: #f4f6f8;
            color: #333;
            font-family: 'Segoe UI', sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
          }
          h1 {
            color: #2c3e50;
            margin-bottom: 0.5em;
          }
          p {
            font-size: 1.2em;
            max-width: 600px;
            text-align: center;
            line-height: 1.5;
          }
        </style>
      </head>
      <body>
        <h1>🚀 Welcome to Jenkins Node App!</h1>
        <p>This Node.js application is deployed on an AWS EC2 instance using a fully automated CI/CD pipeline powered by Jenkins. Designed for scalability and continuous delivery.</p>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

