// queries.js
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017"; // Replace if using Atlas
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("plp_bookstore");
    const books = db.collection("books");

    // 1. Find all Sci-Fi books
    const sciFiBooks = await books.find({ genre: "Sci-Fi" }).toArray();
    console.log(" Sci-Fi books:", sciFiBooks);

    // 2. Find books published after 2010
    const recentBooks = await books.find({ published_year: { $gt: 2010 } }).toArray();
    console.log(" Books published after 2010:", recentBooks);

    // 3. Find books by Nova Lyra
    const novaBooks = await books.find({ author: "Nova Lyra" }).toArray();
    console.log(" Books by Nova Lyra:", novaBooks);

    // 4. Update the price of "Digital Dreams"
    await books.updateOne(
      { title: "Digital Dreams" },
      { $set: { price: 24.99 } }
    );
    console.log(" Updated price of 'Digital Dreams'!");

    // 5. Delete a book by its title
    await books.deleteOne({ title: "The Alchemist’s Diary" });
    console.log(" Deleted 'The Alchemist’s Diary'!");

  } catch (err) {
    console.error(" Query error:", err);
  } finally {
    await client.close();
  }
}

run();
