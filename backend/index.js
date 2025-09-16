const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');

dotenv.config();

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@formable.ruv01bs.mongodb.net/?retryWrites=true&w=majority&appName=Formable`;
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/f/:id', (req, res) => {
  res.json({ message: req.params.id });
});



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    // Send a ping to confirm a successful connection
    const people = await client.db("Formable").collection("Users").find({}).toArray();
    return people;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
app.get('/name', async (req, res) => {
  const peopleList = await run();
  console.log(peopleList);
  res.json({ people: peopleList });
});