// app.js
const express = require('express');
const app = express();

const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
  res.send(`Hello from Node.js running on ECS!`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
