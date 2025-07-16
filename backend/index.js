const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

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