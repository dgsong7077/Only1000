
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://user01:user01@cluster-test-01.qyqqa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-Test-01";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

module.exports = function () {
    run().catch(console.dir);
}

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    console.log("You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}