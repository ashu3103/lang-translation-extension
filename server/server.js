const express = require('express');
const app = express();
const port = 3000; // Specify the port you want to run the server on

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.post('/scan', (req, res) => {
    let data = req.body;
    console.log(data);
    res.send("Scanned!!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});