const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/your_database_name';
const client = new MongoClient(url);

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB successfully');

    // Continue with your MongoDB operations...

  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  } finally {
    // Close the connection when done
    await client.close();
  }
}

// Call the function to connect
connectToMongoDB();
