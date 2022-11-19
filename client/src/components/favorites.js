import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import MotivationalQuote from "./motivation";
import "./favorites.css";

const Favorite = () => {
  const { user } = useAuth0(); //gets info from auth0
  const [video, SetVideo] = useState([]); // <-- same logic as currVideo VideoItem
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
    let response = await fetch(
      `/favorites/${deleteFavvid}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
        },
        body: JSON.stringify(video),
      }
    );
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
          <MotivationalQuote /> <br></br>
        </div>
        <div>
          <button className="add-form-btn">Add Entry</button>
        </div>
      </div>

      <div className="fav-video-list">List of Favorite Videos </div>
      <div className="favorites-videos-div">
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

        <div className="favorites-wrap"></div>
        {video &&
          video.map((item, index) => {
            console.log("this is the item",item)
            return (
              <div
                className="favorites-cards"
                key={index}
                onClick={() => setCurrFavVid(item.video_id)}
              >
                <img
                  className="fav-vid-image"
                  src={item.thumbnails}
                  alt={item.title}
                />
                {item.title}
                <button className="unlike-btn" onClick={() => handleDeleteFavVid(item.video_id)}>Unlike</button>
                
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Favorite;
