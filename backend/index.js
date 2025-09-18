const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const nanoid = require('nanoid');
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

// Get User's Id from email
async function getUserIdByEmail(email) {
  return await client.db("Formable").collection("Users").findOne({ email }, { projection: { _id: 1 } });
}

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
    createdAt: new Date(),
  };
  // Create default project and form for new user
  const result = await client.db("Formable").collection("Users").insertOne(user);
  const project = await client.db("Formable").collection("Projects").insertOne({
    userId: result.insertedId,
    name: "My First Project",
  });
  await client.db("Formable").collection("Forms").insertOne({
    projectId: project.insertedId,
    name: "My First Form",
    formId: nanoid(8),
    createdAt: new Date(),
  });
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

// Form submission endpoint
app.post("/api/forms/:id", async (req, res) => {
  try {
    const formId = req.params.id;
    const formData = req.body;
    const doc = {
      data: formData,
      submittedAt: new Date(),
    };

    await client.db("Form_Submissions").collection(`${formId}`).insertOne(doc);

    res.status(200).json({ success: true, message: "Form submitted!" });
  } catch (err) {
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

// Form creation endpoint
app.post("/forms/create", async (req, res) => {
  const { userId, formName } = req.body;
  const formId = nanoid(8);
//add new form to user's forms array
//create collection for form submissions in Form_Submissions database
  await client.db("Formable").collection("Projects").insertOne({
    userId,
    name: formName,
  });
  await client.db("Form_Submissions").createCollection(formId);

  res.status(201).json({ formId });
});