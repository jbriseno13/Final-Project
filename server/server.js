const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { google } = require("googleapis");
require("dotenv").config();
const db = require("./db/db-connection.js");
const path = require("path");

const app = express();
const REACT_BUILD_DIR = path.join(__dirname, "..", "client", "build");
app.use(express.static(REACT_BUILD_DIR));

const PORT = process.env.PORT || 8091;

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = "https://www.googleapis.com/youtube/v3";
const youtube = google.youtube({
  version: "v3",
  auth: apiKey,
});

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(REACT_BUILD_DIR, "index.html"));
});

//_____________________________________API REQUESTS___________________________________________
//videos get request from Youtube API
app.get("/search/:searchQuery", async (req, res, next) => {
  const searchQuery = req.params.searchQuery;
  try {
    const url = `${apiUrl}/search?key=${apiKey}&type=video&part=snippet&q=${searchQuery}&maxResults=10`;
    console.log("This is the url", url);

    const response = await axios.get(url);
    console.log(response);
    res.send(response.data);
  } catch (err) {
    next(err);
  }
});

app.get("/search-with-googleapis", async (req, res, next) => {
  try {
    const searchQuery = req.query.search_query;
    const url = `${apiUrl}/search?part=snippet&q=${searchQuery}&type=video&videoCaption=closedCaption&key=${apiKey}&maxResults=10`;
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

//add new user to user table when they log in:
app.post("/api/me", cors(), async (req, res) => {
  console.log("Im in here", req.body);
  const newUser = {
    lastname: req.body.family_name,
    firstname: req.body.given_name,
    email: req.body.email,
    sub: req.body.sub,
  };
  const queryEmail = "SELECT * FROM users WHERE email=$1 LIMIT 1";
  const valuesEmail = [newUser.email];
  const resultsEmail = await db.query(queryEmail, valuesEmail);
  if (resultsEmail.rows[0]) {
    console.log(`Thank you ${resultsEmail.rows[0].firstname} for comming back`);
  } else {
    const query =
      "INSERT INTO users(lastname, firstname, email, sub) VALUES($1, $2, $3, $4) RETURNING *";
    const values = [
      newUser.lastname,
      newUser.firstname,
      newUser.email,
      newUser.sub,
    ];
    const result = await db.query(query, values);
    console.log(result.rows[0]);
  }
});

//Favorite Videos
//get request for user favorites
app.get("/favorites", cors(), async (req, res) => {
  try {
    const { rows: favvideos } = await db.query("SELECT * FROM favvideos");
    res.send(favvideos);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});



app.get("/api/favorites", cors(), async (req, res) => {
  const userSub = req.query.user;
  console.log("Inside favorites", req);
  try {
    const userIdResult = await db.query("SELECT id from users WHERE sub = $1", [
      userSub,
    ]);
    console.log("userSub here", JSON.stringify(userIdResult));

    const userId = userIdResult.rows[0].id;

    const { rows: favoritevid } = await db.query(
      "SELECT video_id, title,thumbnails FROM favvideos WHERE user_id =$1",
      [userId]
    );
    res.send(favoritevid);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

//post request handler using same endpoint-will toggle existing f favorite videos

app.post("/favorites", async (req, res) => {
  const favoritevid = {
    user: req.body.user,
    videoId: req.body.videoId,
    title: req.body.title,
    thumbnails: req.body.thumbnails,
  };
  console.log(favoritevid);
  try {
    const userIdResult = await db.query("SELECT id from users WHERE sub = $1", [
      favoritevid.user,
    ]);
    console.log("JSON HERE", JSON.stringify(userIdResult));

    const userId = userIdResult.rows[0].id;

    const favVidId = await db.query(
      "SELECT id FROM favvideos WHERE user_id = $1 AND video_id=$2 ",
      [userId, favoritevid.videoId]
    );

    if (favVidId.rows.length === 0) {
      const newFavoritevid = await db.query(
        "INSERT INTO favvideos(user_id, title, thumbnails,video_id) VALUES($1, $2, $3, $4) RETURNING * ",
        [userId, favoritevid.title,favoritevid.thumbnails,favoritevid.videoId  ]
      );

      res.send(newFavoritevid.rows);
    } else {
      const deleted = await db.query("DELETE FROM favvideos WHERE id =$1", [
        favVidId.rows[0].video.id,
      ]);
      res.send(deleted.rows);
    }
  } catch (e) {
    console.log(e);
    res.status(400).send({ e });
  }
});

//delete endpoint for favvideos

app.delete("/favorites/:id", async (req, res) => {
  const videoId = req.params.id;
  console.log("this is video id", videoId);
  try {
    const deleted = await db.query("DELETE FROM favvideos WHERE video_id =$1", [
      videoId,
    ]);
    res.send(deleted.rows);
  } catch (e) {
    console.log(e);
    res.status(400).send({ e });
  }
});

//get request for resource page
app.get("/api/resources", cors(), async (req, res) => {
  try {
    const { rows: resource } = await db.query("SELECT * FROM resourcesnumbers");
    res.send(resource);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

//get request for landingpage page content
app.get("/api/landing", cors(), async (req, res) => {
  try {
    const { rows: landingpagecontent } = await db.query(
      "SELECT * FROM landingpagecontent"
    );
    res.send(landingpagecontent);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

app.listen(PORT, () => console.log(`Hello. Server on port ${PORT}`));
