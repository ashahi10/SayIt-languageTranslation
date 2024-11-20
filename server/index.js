const express = require('express');
const bodyParser = require('body-parser');
require('./config/firebaseConfig'); // Ensure Firebase is initialized

const testRoute = require('./routes/testRoute'); // Import test route

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/test', testRoute); // Add test route

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
