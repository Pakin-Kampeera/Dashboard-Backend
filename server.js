require('dotenv').config({ path: './config.env' });
const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const errorHandler = require('./middleware/error');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

// Connect MongoDB
connectDB();

// Authentication route
app.use('/api/auth', require('./routes/auth'));
app.use('/api/private', require('./routes/private'));

// Error handler middleware
app.use(errorHandler);

// Serve Restful API
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Server crash handler
process.on('unhandledRejection', (error, promise) => {
  console.log(`Logged Error: ${error}`);
  server.close(() => process.exit(1));
});

// Heroku setup
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('API running');
  });
}
