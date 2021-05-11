# Movie Search App

A search app for space movies from the year 2001. Built with React (Create React App), Tailwind CSS, and express.js.

## Features

This project consists of an Express.js backend (`api`) and a React frontend (`client`).

The `api` communicates with the [OMDb API](http://omdbapi.com/) and retrieves all movies from 2001 with "space" in their title. It then saves all those movies in a MongoDb local database. `GET /movies` route provides all movies stored in the MongoDb.

The `client` shows a list of all movies provided by the `api`. It offers a search functionality that filters movies based on their _title_, _director_, and _plot_.

## Setup

In the root directory of the project, run:

```bash
npm install
```

This will install all dependencies for the `api` and `client`.

### API

First, create a `.env` file based on the `.env.example` file inside `/api`:

```bash
cd api
cp .env.example .env
```

Then open the `.env` where you can find the following fields to fill out:

```
MONGO_URI=
API_PORT=1234
OMDBAPI_KEY=
```

- `MONGO_URI`: The URI to access your MongoDB instance. [Learn how to set it up locally](https://docs.mongodb.com/manual/installation/) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) as an alternative.
- `API_PORT`: The port the Express.js server uses. Does not need to get updated.
- `OMDBAPI_KEY`: The API key used for accessing the [OMDb API](http://omdbapi.com/). [Get your own here](http://omdbapi.com/apikey.aspx).

After filling out all information, you can then start the server:

```bash
npm start
```

During upstart, the server deletes existing movie data from the MongoDb, calls OMDb API, and then stores the new data in the database.

### Client

To start the React frontend application, do the following:

```bash
cd client
npm start
```

Then go to `localhost:3000` to view the app.

## Unit Tests

Currently, only basic client functionality is tested using Jest.

To run the tests, use the following commands:

```bash
cd client
npm test
```

## Architecture

### API

The `api` uses the following libraries:

- express.js for the server
- mongoose for the MongoDB models and connection
- axios for external API calls

Besides the main server login in `index.js`, there are a few more files:

- `fillDatabase.js`: Calls OMDb API, parses and stores the data into a MongoDB.
- `models/movie.js`: Defines the mongoose schema for a movie item.
- `routes/movie.js`: Manages the API endpoints for the movie data. The only route that is implemented/needed for this project is `GET /movies/`.

**Considerations**: The movie data from OMDb API only needs to be retrieved once and then stored in the database. This could have been done by using a setup script (e.g. calling `node src/fillDatabase.js`). However, since the `api` server isn't started that often, I decided to wipe the database and fill it with new data everytime the server is started using `npm start`.

### Client

The `client` uses uses the following libraries:

- React and Create React App
- Tailwind CSS

Besides `App`, it consists of the following components:

- `MovieList`: Displaying all movie items matching the search term.
- `Movie`: A list item of `MovieList`. Displays details about a movie.

The search functionality passes a filtered list of movies from `App` to the `MovieList` component.
