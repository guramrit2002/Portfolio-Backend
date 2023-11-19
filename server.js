const express = require('express');
const errorHandeler = require('./middleware/middleware');
const connectdb = require('./config/dbconnection');
const cors = require('cors');
const PORT = process.env.PORT || 4000;

const app = express();

// Enable CORS for all routes
app.use(cors());

// Additional CORS configuration (optional)
const corsOptions = {
  origin: 'http://127.0.0.1:5500/',
  optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

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
