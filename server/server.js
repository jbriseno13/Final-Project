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
    console.log(url);

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

//post request for fav
app.post("/favorites", async (req, res) => {
  const favoritevid = {
    user: req.body.user,
    videoId: req.body.videoId,
  };
  console.log(favoritevid);
  try {
    const favVidId = await db.query(
      "SELECT id FROM favvideos WHERE user_id = $1 AND video_id=$2 ",
      [favoritevid.user, favoritevid.videoId]
    );

    if (favVidId.rows.length === 0) {
      const newFavoritevid = await db.query(
        "INSERT INTO favvideos(user_id, video_id) VALUES($1, $2) RETURNING * ",
        [favoritevid.user, favoritevid.videoId]
      );
      res.send(newFavoritevid.rows);
    } else {
      const deleted = await db.query(
        "DELETE FROM favvideos WHERE id =$1",
        [favVidId.rows[0].id]
      );
      res.send(deleted.rows)
    }
  } catch (e) {
    console.log(e);
    res.status(400).send({ e });
  }

});


  //get request for resource page
  app.get("/api/resources", cors(), async (req, res) => {
    try{
      const {rows:resource} = await db.query("SELECT * FROM resourcesnumbers");
      res.send(resource);
    } catch(e) {
      console.leg(e);
      return res.status(400).json({ e });
    }
  });



app.listen(PORT, () => console.log(`Hello. Server on port ${PORT}`));
