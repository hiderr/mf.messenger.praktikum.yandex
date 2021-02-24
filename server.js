// server.js
const express = require('express');

const app = express();
const PORT = 3000;

app.use('/css', express.static('./static/css'));
app.use('/dist', express.static('./static/dist'));
app.use('/blocks', express.static('./static/blocks'));
app.use('/components', express.static('./static/components'));

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
