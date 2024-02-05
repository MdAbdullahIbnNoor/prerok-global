const express = require("express");
const cors = require("cors");
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const userRoutes = require('./routes/user.routes');
const addressRoutes = require('./routes/address.routes');

//configs
require("./configs/database");

//middlewares
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:5173", "https://prerokglobal.web.app"],
  credentials: true
}));
app.use(cookieParser())


//routes
app.use('/api/users', userRoutes);
app.use('/api/addressbook', addressRoutes);

//custom middlewares

//middlewares for verify a user by token
// const verifyUser = async (req, res, next) => {
//   try {
//     const token = req.cookies?.token;
//     if (!token) {
//       return res.status(401).send({ message: "unauthorized access" })
//     }
//     jwt.verify(token, process.env.TOKEN_SECRET, (err, decode) => {
//       if (err) {
//         return res.status(401).send({ message: "unauthorized access" })
//       }
//       req.user = decode;
//     })
//     next()
//   } catch (error) {
//     return res.status(500).send({ message: error.message })
//   }
// }




// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// const uri = process.env.DB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     const userCollection = client.db("prerokGlobalDB").collection("users");
//     const bookingCollection = client.db("prerokGlobalDB").collection("bookings");
//     const addressCollection = client.db("prerokGlobalDB").collection("address");

//     // await client.connect();

//     // endpoit for genarate a token and set on client side cookie
//     app.post('/jwt', (req, res) => {
//       try {
//         const email = req.body.email;
//         const token = jwt.sign({ email }, process.env.TOKEN_SECRET);
//         res.cookie("token", token, {
//           httpOnly: true,
//           secure: false,
//           // sameSite: "none"
//         }).send({ message: "success" })
//       } catch (error) {
//         res.status(500).send(error.message)
//       }

//     })

//     // endpoit for clear token cookie
//     app.delete('/clear-cookie', (req, res) => {
//       try {
//         res.clearCookie("token", {
//           maxAge: 0,
//           httpOnly: true,
//           secure: false,
//           // sameSite: "none"
//         }).send({ message: "success" })
//       } catch (error) {
//         res.status(500).send()
//       }

//     })

//     // endpoint for get existing user by email
// app.get('/api/user/get-user/:email', verifyUser, async (req, res) => {
//   try {
//     const user = req.user;
//     const email = req.params.email;
//     if (user.email !== email) {
//       return res.status(401).send({ message: "unauthorized access" });
//     }
//     const query = { email: email };
//     const result = await userCollection.findOne(query)
//     res.status(200).send(result);
//   } catch (error) {
//     res.status(500).send({ message: error.message })
//   }
// })

//     // endpoint for post a new user or get existing message
// app.post('/api/users/add-user', async (req, res) => {
//   try {
//     const userData = req.body;
//     const email = req.body.email;
//     const query = { email: email }
//     const user = await userCollection.findOne(query);
//     if (user) {
//       return res.status(200).send({ message: "User found" });
//     }
//     const result = await userCollection.insertOne(userData);
//     res.status(201).send(result);
//   } catch (error) {
//     res.status(500).send({ error: message });
//   }
// })

//     // endpoint for update existing user data
// app.put('/api/users/update-user/:email', verifyUser, async (req, res) => {
//   try {
//     const user = req.user;
//     const email = req.params.email;
//     if (user.email !== email) {
//       return res.status(401).send({ message: "unauthorized access" });
//     }
//     const filter = { email: email }
//     const updatedDoc = {
//       $set: {
//         email: req.body.email || "",
//         name: req.body.name || "",
//         image: req.body.image || "",
//         gender: req.body.gender || "",
//         dateOfBirth: req.body.dateOfBirth || "",
//         mobileNumber: req.body.mobileNumber || "",
//         country: req.body.country || "",
//         state: req.body.state || "",
//         postcode: req.body.postcode || "",
//         division: req.body.division || "",
//         district: req.body.district || "",
//         upazilla: req.body.upazilla || "",
//         village: req.body.village || "",
//         roadNumber: req.body.roadNumber || "",
//       }
//     }
//     const result = await userCollection.updateOne(filter, updatedDoc)
//     res.status(200).send(result);
//   } catch (error) {
//     res.status(500).send({ message: error.message })
//   }
// })

//     // endpoint for get all bookings
//     app.get('/api/bookings/get-bookings', async (req, res) => {
//       try {
//         const result = await bookingCollection.find().toArray();
//         res.status(200).send(result);
//       } catch (error) {
//         res.status(500).send({ message: error.message })
//       }
//     })

//     // endpoint for get bookings by email
//     app.get('/api/bookings/get-bookings/:email', async (req, res) => {
//       try {
//         const email = req.params.email;
//         const filter = { bookingEmail: email }
//         const result = await bookingCollection.find(filter).toArray();
//         res.status(200).send(result);
//       } catch (error) {
//         res.status(500).send({ message: error.message })
//       }
//     })

//     // endpoint for get a booking by id
//     app.get('/api/bookings/get-booking/:id', async (req, res) => {
//       try {
//         const id = req.params.id;
//         const filter = { _id: new ObjectId(id) };
//         const result = await bookingCollection.findOne(filter);
//         res.status(200).send(result);
//       } catch (error) {
//         res.status(500).send({ message: error.message });
//       }
//     })


//     // endpoint for post a new booking
//     app.post('/api/bookings/add-booking', async (req, res) => {
//       try {
//         const bookingData = req.body;
//         const result = await bookingCollection.insertOne(bookingData);
//         res.status(200).send(result);
//       } catch (error) {
//         res.status(500).send({ message: error.message })
//       }
//     })

//     // endpoint for update a existing booking
//     app.put('/api/bookings/update-booking/:id', async (req, res) => {
//       try {
//         const bookingData = req.body;
//         const id = req.params.id;
//         const filter = { _id: new ObjectId(id) }
//         const updatedDoc = {
//           $set: {
//             name: bookingData.name,
//           }
//         }
//         const result = await bookingCollection.updateOne(filter, updatedDoc)
//         res.send(result)
//       } catch (error) {
//         res.status(500).send({ message: error.message })
//       }
//     })

//     //endpoint for delete a existing booking
//     app.delete('/api/bookings/delete-booking/:id', async (req, res) => {
//       try {
//         const id = req.params.id;
//         const filter = { _id: new ObjectId(id) };
//         const result = await bookingCollection.deleteOne(filter)
//         res.send(result)
//       } catch (error) {
//         res.status(500).send({ message: error.message })
//       }
//     })

//     //endpoint for get a all by userId
// app.get('/api/addressbook/get-all-address/:id', async (req, res) => {
//   try {
//     const id = req.params.id;
//     const filter = { userID: id };
//     const result = await addressCollection.find(filter).toArray();
//     res.status(200).send(result)
//   } catch (error) {
//     res.status(500).send({ message: error.message })
//   }
// })

//     //endpoint for get a single address by addressid
// app.get('/api/addressbook/get-a-address/:id', async (req, res) => {
//   try {
//     const id = req.params.id;
//     const filter = { _id: new ObjectId(id) };
//     const result = await addressCollection.findOne(filter);
//     res.status(200).send(result)
//   } catch (error) {
//     res.status(500).send({ message: error.message })
//   }
// })

//     //endpoint for post a new address
// app.post('/api/addressbook/add-address', async (req, res) => {
//   try {
//     const address = req.body;
//     const result = await addressCollection.insertOne(address);
//     res.status(201).send(result)
//   } catch (error) {
//     res.status(500).send({ message: error.message })
//   }
// })

//     //endpoint for update a existing address
// app.put('/api/addressbook/update-address/:id', async (req, res) => {
//   try {
//     const id = req.params.id;
//     const filter = { _id: new ObjectId(id) };
//     const address = req.body;
//     const updatedDoc = {
//       $set: {
//         name: address.name,
//         phone: address.phone,
//         email: address.email,
//         country: address.country,
//         address: address.address,
//         postal_code: address.postal_code,
//         district: address.district,
//         division: address.division,
//       }
//     }
//     const result = await addressCollection.updateOne(filter, updatedDoc);
//     res.status(201).send(result)
//   } catch (error) {
//     res.status(500).send({ message: error.message })
//   }
// })

// app.delete('/api/addressbook/delete-address/:id', async (req, res) => {
//   try {
//     const id = req.params.id;
//     const filter = { _id: new ObjectId(id) };
//     const result = await addressCollection.deleteOne(filter);
//     res.send(result);
//   } catch (error) {
//     res.status(500).send({ message: error.message })
//   }
// })

//     // Send a ping to confirm a successful connection
//     // await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);



app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
