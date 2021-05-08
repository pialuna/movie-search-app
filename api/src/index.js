const express = require("express");

const movies = require("./dummyData.js");

const app = express();
const port = 1234;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

// routes here
app.get("/", (req, res) => {
  try {
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

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
