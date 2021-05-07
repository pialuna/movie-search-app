import Express from "express";

import movies from "./dummyData.js";

const app = Express();
const port = 1234;

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json(movies);
  //res.send(req.params);
});

app.listen(port, () => console.log("listening on port " + port));
