const express = require("express");
const router = express.Router();
const bookController = require("../controllers/book");


router.post("/", bookController.createBook);
router.get("/", bookController.getAllBooks);
router.get("/:id", bookController.getBook);
router.patch("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

router.get("/author/:id", bookController.getBooksByAuthor);

router.post("/createWithAuthorCheck", bookController.createBookWithAuthorCheck);

module.exports = router;
