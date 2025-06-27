// insert_books.js
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017"; 
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("plp_bookstore");
    const books = db.collection("books");

    await books.insertMany([
      {
        title: "The Starborn Quest",
        author: "Nova Lyra",
        genre: "Fantasy",
        published_year: 2015,
        price: 18.99,
        in_stock: true,
        pages: 450,
        publisher: "Skybound Press"
      },
      {
        title: "Digital Dreams",
        author: "T. Algora",
        genre: "Sci-Fi",
        published_year: 2020,
        price: 22.50,
        in_stock: true,
        pages: 310,
        publisher: "Neon Minds"
      },
      {
        title: "The Forgotten Scroll",
        author: "E. Ravenwood",
        genre: "Historical Fiction",
        published_year: 2008,
        price: 12.99,
        in_stock: false,
        pages: 390,
        publisher: "Timeless Books"
      },
      {
        title: "Algorithms of Eternity",
        author: "C. Byte",
        genre: "Sci-Fi",
        published_year: 2022,
        price: 29.95,
        in_stock: true,
        pages: 500,
        publisher: "Quantum Press"
      },
      {
        title: "Mystic Waters",
        author: "Nova Lyra",
        genre: "Fantasy",
        published_year: 2011,
        price: 16.75,
        in_stock: true,
        pages: 370,
        publisher: "Skybound Press"
      },
      {
        title: "Urban Vortex",
        author: "R. Noir",
        genre: "Thriller",
        published_year: 2016,
        price: 14.25,
        in_stock: false,
        pages: 290,
        publisher: "Dark Alley"
      },
      {
        title: "The Code Chronicle",
        author: "C. Byte",
        genre: "Tech",
        published_year: 2019,
        price: 19.99,
        in_stock: true,
        pages: 430,
        publisher: "Quantum Press"
      },
      {
        title: "Echoes of Earth",
        author: "T. Algora",
        genre: "Sci-Fi",
        published_year: 2010,
        price: 11.50,
        in_stock: true,
        pages: 280,
        publisher: "Neon Minds"
      },
      {
        title: "The Alchemist’s Diary",
        author: "E. Ravenwood",
        genre: "Fantasy",
        published_year: 2005,
        price: 9.99,
        in_stock: false,
        pages: 320,
        publisher: "Timeless Books"
      },
      {
        title: "Future Rewritten",
        author: "T. Algora",
        genre: "Sci-Fi",
        published_year: 2023,
        price: 25.00,
        in_stock: true,
        pages: 350,
        publisher: "Neon Minds"
      }
    ]);

    console.log(" 10 books inserted into the library of plp_bookstore!");
  } catch (error) {
    console.error("Failed to insert books:", error);
  } finally {
    await client.close();
  }
}

run();
