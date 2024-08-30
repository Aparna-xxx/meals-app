const db = require('../data/db');

exports.categories = async (req,res) => {
    try {
        const query = 'SELECT * FROM categories';
        db.query(query, (err, results) => {
    if (err) {
        console.error('Error fetching categories:', err);
        return res.status(500).json({ error: 'Error fetching categories' });
    }
    res.json(results);
    });
    } catch (error) {
        console.error(error);
    }
}