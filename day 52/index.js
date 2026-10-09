
const express = require("express");
const fs = require("fs/promises");
const path = require("path");

const app = express();
app.use(express.json());    

const BOOKS_FILE = path.join(__dirname, "books.json");
const AUTHORS_FILE = path.join(__dirname, "author.json");

async function readData(file) {
  return JSON.parse(await fs.readFile(file, "utf-8"));
}

async function writeData(file, data) {
  await fs.writeFile(file, JSON.stringify(data, null, 2));
}

app.get("/api/books", async (req, res) => {
  try {
    const books = await readData(BOOKS_FILE);
    res.json(books);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/api/books/:id", async (req, res) => {
  try {
    const books = await readData(BOOKS_FILE);
    const book = books.find((b) => b.id === Number(req.params.id));

    if (!book) return res.status(404).send("Book not found");

    res.json(book);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/api/authors", async (req, res) => {
  try {
    const authors = await readData(AUTHORS_FILE);
    res.json(authors);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/api/authors/:id", async (req, res) => {
  try {
    const authors = await readData(AUTHORS_FILE);
    const author = authors.find((a) => a.id === Number(req.params.id));

    if (!author) return res.status(404).send("Author not found");

    res.json(author);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/api/authors/:id/books", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const authors = await readData(AUTHORS_FILE);

    if (!authors.some((a) => a.id === id)) {
      return res.status(404).send("Author not found");
    }

    const books = await readData(BOOKS_FILE);
    res.json(books.filter((b) => b["author id"] === id));
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/api/books", async (req, res) => {
  try {
    const {
      "book name": bookName,
      "author name": authorName,
      "author id": authorId,
      price,
      page,
    } = req.body;

    if (
      !bookName ||
      !authorName ||
      authorId === undefined ||
      price === undefined ||
      page === undefined
    ) {
      return res.status(400).send("All book fields are required");
    }

    const authors = await readData(AUTHORS_FILE);
    const author = authors.find((a) => a.id === Number(authorId));

    if (!author) return res.status(400).send("Author does not exist");

    if (author["author name"] !== authorName) {
      return res.status(400).send("Author name does not match author id");
    }

    const books = await readData(BOOKS_FILE);

    const newBook = {
      id: books.length
        ? Math.max(...books.map((b) => b.id)) + 1
        : 1,
      "book name": bookName,
      "author name": authorName,
      "author id": Number(authorId),
      price: Number(price),
      page: Number(page),
    };

    books.push(newBook);
    await writeData(BOOKS_FILE, books);

    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/api/authors", async (req, res) => {
  try {
    const { "author name": authorName, "phone no": phoneNo, email } = req.body;

    if (!authorName || !phoneNo || !email) {
      return res.status(400).send("All author fields are required");
    }

    const authors = await readData(AUTHORS_FILE);

    if (authors.some((a) => a.email === email)) {
      return res.status(409).send("Author email already exists");
    }

    const newAuthor = {
      id: authors.length
        ? Math.max(...authors.map((a) => a.id)) + 1
        : 1,
      "author name": authorName,
      "phone no": phoneNo,
      email,
    };

    authors.push(newAuthor);
    await writeData(AUTHORS_FILE, authors);

    res.status(201).json(newAuthor);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete("/api/books/:id", async (req, res) => {
  try {
    const books = await readData(BOOKS_FILE);
    const id = Number(req.params.id);
    const updatedBooks = books.filter((b) => b.id !== id);

    if (books.length === updatedBooks.length) {
      return res.status(404).send("Book not found");
    }

    await writeData(BOOKS_FILE, updatedBooks);

    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete("/api/authors/:id", async (req, res) => {
  try {
    const authors = await readData(AUTHORS_FILE);
    const id = Number(req.params.id);
    const updatedAuthors = authors.filter((a) => a.id !== id);

    if (authors.length === updatedAuthors.length) {
      return res.status(404).send("Author not found");
    }

    const books = await readData(BOOKS_FILE);

    if (books.some((b) => b["author id"] === id)) {
      return res.status(409).send(
        "Cannot delete author because the author has books"
      );
    }

    await writeData(AUTHORS_FILE, updatedAuthors);

    res.json({ message: "Author deleted successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});