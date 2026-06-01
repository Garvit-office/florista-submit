const mongoose = require('mongoose');

const connectDB = async (mongoUri) => {
  if (!mongoUri) {
    console.warn('MONGO_URI is not set. Skipping MongoDB connection.');
    return false;
  }

  mongoose.set('strictQuery', true);
  await mongoose.connect(mongoUri);
  console.log('MongoDB connected');
  return true;
};

module.exports = connectDB;
