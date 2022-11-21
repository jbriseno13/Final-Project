import { useState, useEffect, useReducer } from "react";
import NotesSection from "./notesSection";
import { useAuth0 } from "@auth0/auth0-react";

const VideoItem = ({ searchQuery, isFavorite, onUpdate }) => { //use video instead of the other props.
  const { isAuthenticated, user } = useAuth0();
  const [videos, setVideos] = useState([]);
  const [currVid, setCurrVid] = useState("");

  const getVideos = async () => {//move to video page
    console.log("user", user);
    const response = await fetch(`/search/${searchQuery}`);
    console.log("response", response);
    const videoItems = await response.json();
    console.log("videoItems", videoItems);
    setVideos(videoItems.items);
    setCurrVid(videoItems.items[0].id.videoId);
  };

  const favoritevid = async (videoId,title,thumbnails) => {
    console.log("favorite vid");
    const response = await fetch(`/favorites`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ user: user.sub, videoId, title, thumbnails }),
    });

    const content = await response.json();
    console.log("content", content);

    setVideos(videos, content);

    // onUpdate()
    // console.log(videoId);
  };

  useEffect(() => {
    getVideos();
  }, [searchQuery]);

  return (
    <div className="video-card-div">
      {videos?.id?.videoId}
      {/* //conditional rendering */}
      {videos.length > 0 && (
        <iframe
          src={`https://www.youtube.com/embed/${currVid}`}
          frameborder="0"
          height="350px"
          width="450px"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
        />
      )}

      {/* iframe  goes here */}

      <div className="cards_wrapper">
        {videos &&
          videos.map((video, index) => {
            return (
              <div className="video-cards" key={index}>
                {/* {video.id.videoId} */}
                <div
                  onClick={() => setCurrVid(video.id.videoId)}
                  className=" video-item item"
                >
                  <img
                    className="ui image"
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.description}
                  />
                  <div className="ui segment">
                    <h4 className="ui header">{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                  </div>
                </div>
                <button
                  className="play-next"
                  onClick={() => setCurrVid(video.id.videoId)}
                >
                  Play
                </button>

                <button
                  className="fav-btn"
                  onClick={() => favoritevid(video.id.videoId,video.snippet.title, video.snippet.thumbnails.medium.url)}
                >
                  {" "}
                  {isFavorite ? "Dislike" : "Like"}
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default VideoItem;
