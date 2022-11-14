const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { google } = require("googleapis");
require("dotenv").config();
const db = require("./db/db-connection.js");

const app = express();
const PORT = 8091;

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = "https://www.googleapis.com/youtube/v3";
const youtube = google.youtube({
  version: "v3",
  auth: apiKey,
});

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json("Hi There");
});

//_____________________________________API REQUESTS___________________________________________

//videos get request from Youtube API
app.get("/search/:searchQuery", async (req, res, next) => {
  const searchQuery = req.params.searchQuery;
  try {
    const url = `${apiUrl}/search?key=${apiKey}&type=video&part=snippet&q=${searchQuery}&maxResults=10`;
    console.log(url);

    const response = await axios.get(url);
    // console.log(response);
    // const titles = response.data.items.map((item) => item.snippet.title);

    res.send(response.data);
  } catch (err) {
    next(err);
  }
});

app.get("/search-with-googleapis", async (req, res, next) => {
  try {
    const searchQuery = req.query.search_query;
    const url = `${apiUrl}/search?part=snippet&q=${searchQuery}&type=video&videoCaption=closedCaption&key=${apiKey}&maxResults=10`;
    //`${apiUrl}/search?key=${apiKey}&type=video&part=snippet&q=${searchQuery}&maxResults=10`;
    console.log(url);
    const response = await youtube.search.list({
      part: "snippet",
      q: searchQuery,
    });

    const titles = response.data.items.map((item) => item.snippet.title);
    res.send(titles);
  } catch (err) {
    next(err);
  }
});

//_____________________________________DATABASE REQUESTS___________________________________________

//videos get request from DB
app.get("/api/videos", cors(), async (req, res) => {
  try {
    const { rows: videos } = await db.query("SELECT * FROM videos");
    res.send(videos);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

// user get request from DB
app.get("/api/users", cors(), async (req, res) => {
  try {
    const { rows: users } = await db.query("SELECT * FROM users");
    res.send(users);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

app.listen(PORT, () => console.log(`Hello. Server on port ${PORT}`));
