const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');

var app = express();
const port = process.env.port || 3000;

//middleware to pick up files in the public folder
app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});
