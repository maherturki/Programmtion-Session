const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
    required: true,
  },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
  year: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true // Ajouter  option question
});

// Ajouter des validateurs pour le schéma
bookSchema.path("year").validate(function (value) {
  // Exemple : Valider que l'année est supérieure à 1800
  return value > 1900;
}, "Year must be greater than 1900");

module.exports = mongoose.model("Book", bookSchema);
