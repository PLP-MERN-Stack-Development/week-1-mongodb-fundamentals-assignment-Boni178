// insert_books.js - Script to populate MongoDB with sample book data

// Import MongoDB client
const { MongoClient } = require('mongodb');

// Connection URI (replace with your MongoDB connection string if using Atlas)
const uri = 'mongodb://localhost:27017';

// Database and collection names
const dbName = 'plp_bookstore';
const collectionName = 'books';

// Sample book data
const books = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    published_year: 1960,
    price: 12.99,
    in_stock: true,
    pages: 336,
    publisher: 'J. B. Lippincott & Co.'
  },
  {
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    published_year: 1949,
    price: 10.99,
    in_stock: true,
    pages: 328,
    publisher: 'Secker & Warburg'
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    published_year: 1925,
    price: 9.99,
    in_stock: true,
    pages: 180,
    publisher: 'Charles Scribner\'s Sons'
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    genre: 'Dystopian',
    published_year: 1932,
    price: 11.50,
    in_stock: false,
    pages: 311,
    publisher: 'Chatto & Windus'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1937,
    price: 14.99,
    in_stock: true,
    pages: 310,
    publisher: 'George Allen & Unwin'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    published_year: 1951,
    price: 8.99,
    in_stock: true,
    pages: 224,
    publisher: 'Little, Brown and Company'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    published_year: 1813,
    price: 7.99,
    in_stock: true,
    pages: 432,
    publisher: 'T. Egerton, Whitehall'
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1954,
    price: 19.99,
    in_stock: true,
    pages: 1178,
    publisher: 'Allen & Unwin'
  },
  {
    title: 'Animal Farm',
    author: 'George Orwell',
    genre: 'Political Satire',
    published_year: 1945,
    price: 8.50,
    in_stock: false,
    pages: 112,
    publisher: 'Secker & Warburg'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    published_year: 1988,
    price: 10.99,
    in_stock: true,
    pages: 197,
    publisher: 'HarperOne'
  },
  {
    title: 'Moby Dick',
    author: 'Herman Melville',
    genre: 'Adventure',
    published_year: 1851,
    price: 12.50,
    in_stock: false,
    pages: 635,
    publisher: 'Harper & Brothers'
  },
  {
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    genre: 'Gothic Fiction',
    published_year: 1847,
    price: 9.99,
    in_stock: true,
    pages: 342,
    publisher: 'Thomas Cautley Newby'
  }
];

// Function to insert books into MongoDB
async function insertBooks() {
  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected to MongoDB server');

    // Get database and collection
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Check if collection already has documents
    const count = await collection.countDocuments();
    if (count > 0) {
      console.log(`Collection already contains ${count} documents. Dropping collection...`);
      await collection.drop();
      console.log('Collection dropped successfully');
    }

    // Insert the books
    const result = await collection.insertMany(books);
    console.log(`${result.insertedCount} books were successfully inserted into the database`);

    // Display the inserted books
    console.log('\nInserted books:');
    const insertedBooks = await collection.find({}).toArray();
    insertedBooks.forEach((book, index) => {
      console.log(`${index + 1}. "${book.title}" by ${book.author} (${book.published_year})`);
    });

  } catch (err) {
    console.error('Error occurred:', err);
  } finally {
    // Close the connection
    await client.close();
    console.log('Connection closed');
  }
}

// Run the function
insertBooks().catch(console.error);

/*
 * Example MongoDB queries you can try after running this script:
 *
 * 1. Find all books:
 *    db.books.find()
 *
 * 2. Find books by a specific author:
 *    db.books.find({ author: "George Orwell" })
 *
 * 3. Find books published after 1950:
 *    db.books.find({ published_year: { $gt: 1950 } })
 *
 * 4. Find books in a specific genre:
 *    db.books.find({ genre: "Fiction" })
 *
 * 5. Find in-stock books:
 *    db.books.find({ in_stock: true })
 */ 


/*Books to be inserted into the MongoDB collection */
db.books.insertMany([
  {
    "title":"A Court of Silver Flames",
    "author" : "Sarah J. Maas",
    "genre" :"Fantasy",
    "Published Year" :2020,
    "Price" :14.00,
    "in_stock" : true,
    "Pages" :304,
    "Publisher" :"Canongate Books"
    
  },

    {
    "title":"A Court of Thorns and Roses",
    "author" : "Sarah J. Maas",
    "genre" :"Fantasy/Romance",
    "Published Year" :2015,
    "Price" :16.00,
    "in_stock" :true,
    "Pages" :432,
    "Publisher" :"Bloomsburg publishing "
    
  },
    {
    "title":"Vicious",
    "author" : "V.E.Schwab",
    "genre" :"Fantasy ",
    "Published Year" :2021,
    "Price" :16.95,
    "in_stock" : false,
    "Pages" :496,
    "Publisher" :"Ballantine Books"
    
  },
    {
    "title":"The Invisible Life of Addie LaRue",
    "author" : "V.E.Schwab",
    "genre" :"Historical Fantasy",
    "Published Year" :2020,
    "Price" :13.99,
    "in_stock" : true,
    "Pages" :448,
    "Publisher" :"Tor Books"
    
  },
    {
    "title":"Merit",
    "author" : "Colleen Hoover",
    "genre" :"Drama",
    "Published Year" :2018,
    "Price" :10.00,
    "in_stock" : false,
    "Pages" :384,
    "Publisher" :"G.P.Putnams Sons"
    
  },
    {
    "title":"The Seven Husbands of Evelyn Hugo",
    "author" : "Taylor Jenkins Reid",
    "genre" :"Historical/Fiction",
    "Published Year" :2020,
    "Price" :11.99,
    "in_stock" : true,
    "Pages" :400,
    "Publisher" :"Atria Books"
    
  },
    {
    "title":"Klara and the Sun",
    "author" : "Kazuo Ishiguro",
    "genre" :"Dystopia",
    "Published Year" :2021,
    "Price" :15.75,
    "in_stock" : true,
    "Pages" :320,
    "Publisher" :"Faber & Faber"
    
  },
    {
    "title":"The House in the Cerulean Sea",
    "author" : "Colleen Hoover",
    "genre" :"Contemporary Romance ",
    "Published Year" :2020,
    "Price" :13.50,
    "in_stock" : true,
    "Pages" :398,
    "Publisher" :"Tor Books"
    
  },
    {
    "title":"Verity",
    "author" : "Colleen Hoover",
    "genre" :"Thriller",
    "Published Year" :2018,
    "Price" :9.99,
    "in_stock" : false,
    "Pages" :336,
    "Publisher" :"Grand Central Publishing "
    
  },
    {
    "title":"The Night Circus",
    "author" : "Erin Morganstern",
    "genre" :"Fantasy/Romance",
    "Published Year" :2011,
    "Price" :12.00,
    "in_stock" : true,
    "Pages" :387,
    "Publisher" :"Doubleday"
    
  }
]
)