// QcWcF0oVJ2PdrvkK -- DB USER PASSWORD


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://opusberedugo:r1OeMea50HxLcnYI@ja.te0byk5.mongodb.net/";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
//  //const client = new MongoClient(uri, {
//  // serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("ja").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
// const client = new MongoClient(uri, {
//   version: ServerApiVersion.v1,
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   ssl: true
//   // strict: true,
//   // deprecationErrors: true,
// });

const client = new MongoClient(uri);

class API {
  static async recuitSolder(soldierInstance) {
    try {

      client.connect();

      let database = client.db("ja");

      let collection = database.collection("soldiers");

      await collection.createIndex({email: 1}, {unique: true});
      await collection.createIndex({phoneNumber: 1}, {unique: true});

      let result = await collection.insertOne(soldierInstance);

      console.log("Insertion Complete");
      console.log(`ID: ${result.insertedId}`)
      return result.insertedId;

    } catch (err) {
      console.error("Something went wrong");
      console.warn(err.message);
    }
  }
}

module.exports.API = API