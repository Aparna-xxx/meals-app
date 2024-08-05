// // const express = require('express');
// // const mysql = require('mysql2');
// // const cors = require('cors'); // Import the CORS package
// // const app = express();
// // const port = 3000;

// // // Use CORS middleware
// // app.use(cors());

// // // Create a connection to the database
// // const db = mysql.createConnection({
// //   host: 'localhost',
// //   user: 'root',
// //   password: 'Egappan&Chokku', // Replace with your MySQL password
// //   database: 'FoodZone' // Replace with your MySQL database name
// // });

// // // Connect to the database
// // db.connect((err) => {
// //   if (err) throw err;
// //   console.log('Connected to database');
// // });

// // // Fetch categories
// // app.get('/categories', (req, res) => {
// //   const query = 'SELECT * FROM categories';
// //   db.query(query, (err, results) => {
// //     if (err) throw err;
// //     res.json(results);
// //   });
// // });

// // // Fetch meals with their categories
// // app.get('/meals', (req, res) => {
// //   const query = `
// //     SELECT meals.*, GROUP_CONCAT(meal_categories.category_id) AS categoryIds
// //     FROM meals
// //     LEFT JOIN meal_categories ON meals.id = meal_categories.meal_id
// //     GROUP BY meals.id
// //   `;
// //   db.query(query, (err, results) => {
// //     if (err) throw err;
// //     results.forEach((meal) => {
// //       meal.categoryIds = meal.categoryIds ? meal.categoryIds.split(',') : [];
// //     });
// //     res.json(results);
// //   });
// // });



// // app.listen(port, () => {
// //   console.log(`Server running on port ${port}`);
// // });

// // server.js
// const express = require('express');
// const mysql = require('mysql2');
// const cors = require('cors'); // Import the CORS package
// const app = express();
// const port = 3000;

// // Use CORS middleware
// app.use(cors());

// // Create a connection to the database
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'Egappan&Chokku', // Replace with your MySQL password
//   database: 'FoodZone' // Replace with your MySQL database name
// });

// // Connect to the database
// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to the database:', err);
//     process.exit(1);
//   }
//   console.log('Connected to database');
// });

// // Fetch categories
// app.get('/categories', (req, res) => {
//   const query = 'SELECT * FROM categories';
//   db.query(query, (err, results) => {
//     if (err) {
//       console.error('Error fetching categories:', err);
//       return res.status(500).json({ error: 'Error fetching categories' });
//     }
//     res.json(results);
//   });
// });

// // Fetch meals with their categories
// app.get('/meals', (req, res) => {
//   const query = `
//     SELECT meals.*, GROUP_CONCAT(meal_categories.category_id) AS categoryIds
//     FROM meals
//     LEFT JOIN meal_categories ON meals.id = meal_categories.meal_id
//     GROUP BY meals.id
//   `;
//   db.query(query, (err, results) => {
//     if (err) {
//       console.error('Error fetching meals:', err);
//       return res.status(500).json({ error: 'Error fetching meals' });
//     }
//     results.forEach((meal) => {
//       meal.categoryIds = meal.categoryIds ? meal.categoryIds.split(',') : [];
//     });
//     res.json(results);
//   });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Import routes
const categoryRoutes = require('./routes/categories');
const mealRoutes = require('./routes/meals');

// Use routes
app.use('/categories', categoryRoutes);
app.use('/meals', mealRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
