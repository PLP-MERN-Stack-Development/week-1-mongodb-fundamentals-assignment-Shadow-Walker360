const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI;

// Reusable connect function
async function connect() {
  const client = new MongoClient(uri);
  await client.connect();
  return client.db('plp_bookstore');
}

const getBooks = async (req, res) => {
  try {
    const db = await connect();
    const books = await db.collection('books').find().toArray();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addBook = async (req, res) => {
  try {
    const db = await connect();
    const book = req.body;
    const result = await db.collection('books').insertOne(book);
    res.status(201).json({ message: "Book added", bookId: result.insertedId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getBooks, addBook };
