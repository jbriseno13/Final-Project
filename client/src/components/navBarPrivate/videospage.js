import { useState } from "react";
import VideoItem from "../VideoItem";

const searchButtons = ["anxiety", "depression", "imposter_syndrome"];

const VideosPage = () => {
  const [currVideo, setCurrVideo] = useState("whyUPLJZljE");
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
            <div className="videocard">
              {/* <iframe
                src={`https://www.youtube.com/embed/${currVideo}`}
                frameborder="0"
                height= "350px"
                width = "450px"
                allow="autoplay; encrypted-media"
                allowfullscreen
                title="video"
              /> */}
            </div>
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
              <button key={ind} onClick={() => setSearchQuery(button)}>
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
