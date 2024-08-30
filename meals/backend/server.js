const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Use routes

const route = require('../backend/routers/routes')
app.use('/', route);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
