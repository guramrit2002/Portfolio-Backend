const express = require('express');
const errorHandeler = require('./middleware/middleware');
const connectdb = require('./config/dbconnection');
const cors = require('cors');
const PORT = process.env.PORT || 4000;

const app = express();

// Enable CORS for all routes
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
  

app.use(cors(corsOptions));

// Parse JSON bodies
app.use(express.json());

// Define your routes
app.use('/api', require('./routes/route'));

// Error handler middleware
app.use(errorHandeler);

// Connect to the database
connectdb();

// Start the server
app.listen(PORT, () => {
  console.log(`Listening to the port ${PORT}`);
});
