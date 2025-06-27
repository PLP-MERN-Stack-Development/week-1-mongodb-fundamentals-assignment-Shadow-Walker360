PLP Bookstore – MongoDB Project
This project demonstrates the implementation of a bookstore database using MongoDB and Node.js. It covers the insertion of sample data and execution of various query operations, serving as a foundational exercise in database design, CRUD operations, and backend scripting.

Project Structure

.
├── insert_books.js    # Inserts predefined book documents into the database
├── queries.js         # Executes find, update, and delete operations
├── README.md          # Documentation and usage instructions

Prerequisites
To run this project, ensure you have the following installed:
- Node.js: https://nodejs.org/en/download/
- MongoDB Community Server: https://www.mongodb.com/try/download/community
- A command-line interface (e.g., Command Prompt, PowerShell, or Terminal)

The MongoDB daemon (mongod) must be running locally on your machine.

Installation
1. Clone or Download the Project
Navigate into the downloaded directory:
cd plp-bookstore
2. Install Dependencies
Install the MongoDB Node.js driver:
npm install mongodb
Usage
Step 1: Insert Book Data
To populate the database with 10 book documents, run:
node insert_books.js
This will:
- Connect to your local MongoDB instance
- Create a database named plp_bookstore
- Create a collection named books
- Insert 10 structured book documents

Step 2: Execute Queries
To perform various read, update, and delete operations, run:
node queries.js
This will:
- Retrieve books by genre, year, and author
- Update the price of a specific book
- Delete a book by its title

Script Overview
insert_books.js
This script connects to MongoDB and inserts sample documents with the following fields:
- title (String)
- author (String)
- genre (String)
- published_year (Number)
- price (Number)
- in_stock (Boolean)
- pages (Number)
- publisher (String)

queries.js
This script performs the following database operations:
- Find documents by genre, publication year, or author
- Update the price of a specific book
- Delete a document using the book title


