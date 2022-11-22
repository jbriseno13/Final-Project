import { useEffect, useState } from "react";
import VideoItem from "../VideoItem";
import NavBar from "../navbar";
// import PrivateNavBar from "./navbarprivate";

const searchButtons = [
  "Anxiety",
  "Depression",
  "Imposter Syndrome",
  "Latinx_Therapy",
  "Cultural Stigmas",
  "Love_Languages",
  "Improve Communication",
  "LGBTQIA",
  "Family_Dynamics",
  "Mindfulness",
  "Recognizing Toxic Behavior",
  "Work Life Balance",
  "Affirmations",
  "Overcoming_Trauma",
  "Healthy_Friendships",
  "Mental_Health",
  "Tedx_Latino", 
  "Cinema Therapy", 
  "Mended Light"
];

const VideosPage = ( {onUpdate}) => {
  const [video, setVideo] = useState();
  const [searchQuery, setSearchQuery] = useState("anxiety");
  const [favvideos, setFavvideos] = useState([]);

  // const favoritevid = async (videoId) => {
  //   await fetch(`/favorites/${videoId}`, {
  //     method: "POST",
  //   });

  //   onUpdate();
  //   console.log(videoId);
  // };

  
  // const getFavvideos = async () => {
  //   const response = await fetch ('api/favorites');
  //   const video = await response.json();
  //   setFavvideos(favvideos);

  // };


  return (
    <div className="main-video" id="videos">
      <div className="main-video-spacer"></div>
      <div className="main__video__content">
        <h1>Which topic would you like to learn more about today?</h1>
        <h2>Choose A Topic!</h2>
        <p>
          {" "}
          Select Topic: <br></br>
        </p>
        {searchButtons.map((button, ind) => {
          return (
            <button
              className="topic-btn"
              key={ind}
              onClick={() => setSearchQuery(button)}
            >
              {button.replace(/[^a-zA-Z]/g, " ")}
            </button>
          );
        })}
        {/* <button className="main__btn">
            <a href="#">Read More</a>
          </button> */}
      </div>
      {/* <div><PrivateNavBar/></div> */}
      <div className="main__container">
        <div className="main__video__container">
          <div className="main__video__card">
            <div>
              <VideoItem searchQuery={searchQuery} />
            </div>

            <i className="fas fa-layer-group"></i>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default VideosPage;
