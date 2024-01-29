const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    const userCollection = client.db("prerokGlobalDB").collection("users")

    // await client.connect();

    // endpoint for get existing user by email
    app.get('/api/user/get-user/:email', async (req, res) => {
      try {
        const email = req.params.email;
        const query = { email: email };
        const result = await userCollection.findOne(query)
        res.status(200).send(result);
      } catch (error) {
        res.status(500).send({ message: error.message })
      }
    })

    // endpoint for post a new user or get existing message
    app.post('/api/users/add-user', async (req, res) => {
      try {
        const userData = req.body;
        const email = req.body.email;
        const query = { email: email }
        const user = await userCollection.findOne(query);
        if (user) {
          return res.status(200).send({ message: "User found" });
        }
        const result = await userCollection.insertOne(userData);
        res.status(201).send(result);
      } catch (error) {
        res.status(500).send({ error: message });
      }
    })

    // endpoint for update existing user data
    app.put('/api/users/update-user/:email', async (req, res) => {
      try {
        const email = req.params.email;
        const filter = { email: email }
        const updatedDoc = {
          $set: {
            email: req.body.email || "",
            password: req.body.password || "",
            name: req.body.name || "",
            gender: req.body.gender || "",
            dateOfBirth: req.body.dateOfBirth || "",
            mobileNumber: req.body.mobileNumber || "",
            country: req.body.country || "",
            state: req.body.state || "",
            postcode: req.body.postcode || "",
            division: req.body.division || "",
            district: req.body.district || "",
            upazila: req.body.upazila || "",
            village: req.body.village || "",
            roadNumber: req.body.roadNumber || "",
          }
        }
        const result = await userCollection.updateOne(filter, updatedDoc)
        res.status(200).send(result);
      } catch (error) {
        res.status(500).send({ message: error.message })
      }
    })

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
