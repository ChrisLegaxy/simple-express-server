const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.json({
    message: "Hello From Simple Express Server"
  })
})

app.listen(4000, () => {
  console.log("Running on PORT 4000");
})