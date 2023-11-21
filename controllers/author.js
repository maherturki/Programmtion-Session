
const Author = require('../models/author');

// Create a new author
exports.createAuthor = async (req, res) => {
  try {
    const { lastName, firstName, nationality } = req.body;
    const author = new Author({ lastName, firstName, nationality });
    const newAuthor = await author.save();
    res.status(201).json(newAuthor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Add more author-related controller functions as needed
