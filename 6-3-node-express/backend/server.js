// TODO 1: Import and Create express app instance

// TODO 1: Define server port


// TODO 4: Import and Apply CORS middleware


// TODO 5: Import and apply Morgan middleware


// TODO 6.1: Create root route "/"


// TODO 6.2: Create "/api/quote" route


// TODO 7: Start server using app.listen

import express from "express";
import cors from "cors";
import morgan from "morgan";
import { getRandomQuote } from "./quotes.js";

// TODO 1: Create the Express app and define PORT
const app = express();
const PORT = 3000;

// TODO 4: Enable CORS middleware
app.use(cors());

// TODO 5: Add Morgan logger middleware
app.use(morgan("dev"));

// TODO 6: Define root route
app.get("/", (req, res) => {
  res.send("Welcome to the Random Quotes API!");
});

// TODO 6: Define quote API route
app.get("/api/quote", (req, res) => {
  const quote = getRandomQuote();
  res.json({ quote });
});

// TODO 7: Start the server with app.listen
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});