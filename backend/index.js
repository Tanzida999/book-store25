import express, { request, response } from "express";
import { mongoDBURL, PORT } from "./config.js";
import mongoose, { mongo } from "mongoose";
import { Book } from "./models/bookModel.js";
const app = express();

//Middlware For parsing request body
app.use(express.json());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to MERN Stact Book Store");
});

//Rouuter for save a new Book

app.post("/books", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: "Send all required feilds: title, author, publishYear",
      });
    }
    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
    };
    const book = await Book.create(newBook);
    return response.status(201).send(book);
  } catch (error) {
    console.log(error.messaase);
    response.status(500).send({
      message: error.messase,
    });
  }
});

//Route for get all books from Database
app.get("/books", async (request, response) => {
  try {
  } catch (error) {
    console.log(error.messaase);
    response.status(501);
  }
});
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App is Connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
