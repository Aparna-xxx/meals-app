const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());


// Import routes
const categoryRoutes = require('./routes/categories');
const mealRoutes = require('./routes/meals');
const walletRouter = require('./routes/wallet');

// Use routes
app.use('/categories', categoryRoutes);
app.use('/meals', mealRoutes);
app.use('/wallet', walletRouter);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
