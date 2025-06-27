const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017"; // hardcoded temporarily

const connectDB = async () => {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
