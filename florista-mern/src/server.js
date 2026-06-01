require('dotenv').config();

const createApp = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;
const app = createApp();

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
  } catch (error) {
    console.warn('MongoDB connection failed, starting without database.', error.message);
  }

  app.listen(PORT, () => {
    console.log(`Florista MERN backend listening on port ${PORT}`);
  });
};

start();
