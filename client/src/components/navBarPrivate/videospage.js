import { useState } from "react";
import VideoItem from "../VideoItem";



const searchButtons = [
  "Anxiety",
  "Depression",
  "Imposter_Syndrome",
  "Cultural_Stigmas",
  "Love_Languages",
  "Improve_Communication",
  "LGBTQIA",
  "Family_Dynamics",
  "Red_Flags",
  "Work_Life_Balance",
  "Affirmations",
  "Overcoming_Trauma",
  "Mindfulness",
  "Healthy_Friendships",
  "Mental_Health",
];

const VideosPage = () => {
  const [video, setVideo] = useState();
  const [searchQuery, setSearchQuery] = useState("anxiety");

  return (
    <div className="main" id="videos">
      <div className="main__container">
        <div className="main__img--container">
          <div className="main__img--card">
            <div>
              <VideoItem searchQuery={searchQuery} />
            </div>
            <i className="fas fa-layer-group"></i>
          </div>
        </div>
        <div class="main__content">
          <h1>Search Video!</h1>
          <h2>Watch videos and learn more about mental health.</h2>
          <p>
            {" "}
            TERA Videos <br></br> relationship building .
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
          <button class="main__btn">
            <a href="#">Read More</a>
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default VideosPage;
