import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import MotivationalQuote from "./motivation";
import "./favorites.css";
import Posts from "./posts";
import Form from "./form";

const Favorite = () => {
  const { user } = useAuth0(); //gets info from auth0
  const [video, SetVideo] = useState([]);
  const [currFavVid, setCurrFavVid] = useState("");

  const getFavorites = async (userId) => {
    console.log(getFavorites, "getFavorites");
    const favoritesList = await fetch(`/api/favorites?user=${user.sub}`);
    const content = await favoritesList.json();
    SetVideo(content);
    console.log(content);
    setCurrFavVid(content[0].video_id);
  };

  useEffect(() => {
    getFavorites();
  }, []);

  const handleDeleteFavVid = async (deleteFavvid) => {
    let response = await fetch(`/favorites/${deleteFavvid}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
      },
      body: JSON.stringify(video),
    });
    await response.json();
    const deleteFavvidFunction = video.filter((i) => i.id !== deleteFavvid);
    console.log(deleteFavvidFunction);
    SetVideo(deleteFavvidFunction);

    getFavorites();
  };

  return (
    <div className="blank-favs">
      <div className="main-video-favList">
        <div className="quote-section">
          <h1 className="user-name-welcome">Hi, {user.given_name}!</h1>
          <br></br>
          <MotivationalQuote /> <br></br>
        </div>
      </div>
      <br></br>

      <div className="fav-video-list">
        <div>
          <h1 className="fav-video-mid-section">How are you doing today?</h1>
          <label className="search-label">Search by date:</label>
          <input
            className="search-bar"
            type="date"
            placeholder="Search a journal entry"
          />
        </div>
        <Posts />

        <Form />
      </div>
      <h1 className="liked-videos">Liked Videos</h1>
      <div className="favorites-videos-div">
        <div className="iframe-div">
          {video?.video_id}
          {video.length > 0 && (
            <iframe
              className="fav-vid-iframe"
              src={`https://www.youtube.com/embed/${currFavVid}`}
              frameborder="0"
              height="350px"
              width="450px"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="video"
            />
          )}
        </div>

        {video &&
          video.map((item, index) => {
            console.log("this is the item", item);
            return (
              <div className="fav-cards-wrapper">
                <div
                  className="favorites-cards"
                  key={index}
                  onClick={() => setCurrFavVid(item.video_id)}
                >
                  <img className="fav-vid-image" src={item.thumbnails} />
                  {item.title}
                  <button
                    className="unlike-btn"
                    onClick={() => handleDeleteFavVid(item.video_id)}
                  >
                    Unlike
                  </button>
                </div>
              </div>
            );
          })}
      </div>
      <footer></footer>
    </div>
  );
};

export default Favorite;
