const express = require("express");
const morgan = require("morgan"); //for logging requests

const fillDatabase = require("./fillDatabase");

const app = express();
const port = process.env.API_PORT || 1234;

const moviesRoutes = require("./routes/movies");

const movies = require("./dummyData.js");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// fill the database
// ???? naming
fillDatabase.fillDatabase();

// against Cross-Origin Resource Sharing (CORS)-Errors  ->  different clients can have access
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// Routes
app.use("/movies", moviesRoutes);

// Error Handling
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(port, () => console.log("listening on port " + port));
