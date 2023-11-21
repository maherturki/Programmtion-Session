const Book = require("../models/book");

exports.createBook = async (req, res) => {
  try {
    const { title, author, categories, year } = req.body;
    const book = new Book({ title, author, categories, year });
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find()
      .populate('author') 
      .populate('categories'); 

    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate("author categories");
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getBooksByAuthor = async (req, res) => {
  try {
    const authorId = req.params.id;
    const books = await Book.findByAuthor(authorId);

    if (!books || books.length === 0) {
      return res.status(404).json({ error: "No books found for this author" });
    }

    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.createBookWithAuthorCheck = async (req, res) => {
  try {
    const { title, author, categories, year } = req.body;

    // Valider le livre avec Mongoose
    const book = new Book({ title, author, categories, year });
    await book.validate();

    // Vérifier si l'auteur a déjà écrit d'autres livres
    const authorBooksCount = await Book.countDocuments({ author });

    if (authorBooksCount > 0) {
      // L'auteur a déjà écrit d'autres livres, sauvegarder le nouveau livre
      const newBook = await book.save();
      res.status(201).json(newBook);
    } else {
      // L'auteur n'a pas encore écrit d'autres livres
      res.status(400).json({ error: "Author must have written other books before creating a new one." });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, categories, year } = req.body;

    const updatedBook = await Book.findByIdAndUpdate(id, { title, author, categories, year }, { new: true });

    if (!updatedBook) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.status(200).json(updatedBook);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndRemove(id);

    if (!deletedBook) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.status(200).json({ message: "Book deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
