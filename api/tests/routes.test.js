require("dotenv").config();
const request = require("supertest");
const app = require("../src/index");
const mongoose = require("mongoose");

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

describe("Movie Endpoints", () => {
  it("should fetch all movies", async () => {
    const res = await request(app).get("/movies/");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("movies");
    console.log(res.body);
    expect(res.body.movies).toHaveLength(10);
  });
});
