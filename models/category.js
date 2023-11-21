const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    enum: ["Horror", "Mystery", "Science Fiction", "Romance", "Fantasy", "Thriller", "Non-fiction", "Biography", "Self-Help", "Other"],
    required: true,
  },
});


module.exports = mongoose.model("Category", categorySchema);
