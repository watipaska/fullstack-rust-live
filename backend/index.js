const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/routers'); 
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const StudentAdd = require('./Modules/Schemas');

// Load environment variables from .env file
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
  origin: '*',
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use('/', router);
app.get('/StudentAdd', (req, res) => {
  StudentAdd.find()
    .then((data) => {
      console.log('Data: ', data);
      res.json(data);
    })
    .catch((error) => {
      console.log('error: ', error);
    });
});


const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.DB_URI, dbOptions);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

connectToDatabase();

const port = process.env.PORT || 5001;
const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Handle closing the MongoDB connection when the server shuts down
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('MongoDB connection closed through app termination');
    process.exit(0);
  });
});
