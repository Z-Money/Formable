const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const { MongoClient } = require('mongodb');

// Create and config app
const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(cors());

// Create MongoClient
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@formable.ruv01bs.mongodb.net/?retryWrites=true&w=majority&appName=Formable`;
const client = new MongoClient(uri);

// Create app
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/f/:id', (req, res) => {
  res.json({ message: req.params.id });
});

// Signup endpoint
app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  const checkUser = await client.db("Formable").collection("Users").findOne({ email });
  if (checkUser) {
    return res.status(409).json({ message: 'Email already in use' });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = {
    name,
    email,
    password: hashedPassword,
  };
  const result = await client.db("Formable").collection("Users").insertOne(user);
  res.status(201).json({ message: 'User created successfully', id: result.insertedId });
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await client.db("Formable").collection("Users").findOne({ email });
  if (!user) {
    return res.status(401).json({ message: 'Invalid email' });
  }
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return res.status(401).json({ message: 'Invalid password' });
  }
  res.status(200).json({ message: 'Logged in successfully', id: user._id });
});