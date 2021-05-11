# Movie Search App

A search app for space movies from the year 2001. Built with React (Create React App), Tailwind CSS, and Express.js.

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

## Design Considerations

The movie data from OMDb API only needs to be retrieved once and then stored in the database. This could have been done by using a setup script (e.g. calling `node src/fillDatabase.js`). However, since the `api` server isn't started that often, I decided to wipe the database and fill it with new data everytime the server is started using `npm start`.
