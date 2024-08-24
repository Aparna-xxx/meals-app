// const express = require('express');
// const router = express.Router();
// const db = require('../data/db')

// // Endpoint to fetch wallet balance for a fixed user (e.g., John Doe)
// router.get('/wallet/balance', (req, res) => {
//     // Use a fixed user ID for demonstration
//     const userName = "John Doe"; // Replace with the actual user identifier for John Doe

//     db.query('SELECT amount FROM wallet WHERE name = ?', [userName], (err, results) => {
//         if (err) {
//             console.error('Database query error:', err);
//             return res.status(500).json({ error: 'Database query error' });
//         }
        
//         if (results.length === 0) {
//             return res.status(404).json({ error: 'Wallet not found' });
//         }

//         const balance = results[0].amount;
//         res.json({ balance });
//         confirm.log( res.json({ balance }));
//     });
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const db = require('../data/db');

// Endpoint to fetch wallet balance for a fixed user (e.g., John Doe)
router.get('/wallet/balance', (req, res) => {
    const userName = "John Doe"; // Use the fixed user name

    db.query('SELECT amount FROM wallet WHERE name = ?', [userName], (err, results) => {
        if (err) {
            console.error('Database query error:', err);
            return res.status(500).json({ error: 'Database query error' });
        }
        
        if (results.length === 0) {
            console.log('No wallet found for user:', userName);
            return res.status(404).json({ error: 'Wallet not found' });
        }

        const balance = results[0].amount;
        console.log(`Wallet balance for ${userName}: ${balance}`); // Print the balance
        res.json({ balance });
    });
});

module.exports = router;
