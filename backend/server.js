// server.js
const express = require('express');
const app = express();
const PORT = 5000;

// Define routes and API endpoints here

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
