import { useState, useEffect } from "react";



const VideoItem = ({ searchQuery }) => {
  const [videos, setVideos] = useState({});
  const { currVid, setCurrVid } = useState();

  const getVideos = async () => {
    const response = await fetch(`http://localhost:8091/search/${searchQuery}`);
    const videoItems = await response.json();
    setVideos(videoItems);
  };

  useEffect(() => {
    getVideos();
  }, [searchQuery]);

  return (
    <div>
      Video Test {videos?.items?.[0]?.id?.videoId}
      {/* //conditional rendering */}
      {videos.items?.length > 0 }
      {/* iframe  goes here */}
      <div className="cards_wrapper">
        {videos.items &&
          videos.items.map((video, index) => {
            return (
              
              <div className="video-cards" key={index}>
                {video.id.videoId}
                <div
                  onClick={() => setCurrVid(video)}
                  className=" video-item item"
                >
                  <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`}
                  frameborder="0"
                  height="350px"
                  width="450px"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  title="video"
                    /> 
                   
                  <div className="content">
                    <div className="header ">{video.snippet.title}</div>
                  </div>
                </div> 
                 {/* <div> <VideoDetail/></div> */}

                {/* <button
                  className="play-next"
                  onClick={() => setCurrVid(video.id.videoId)}
                >
                  Play
                </button> */}
                <button>Favorites</button>
              </div>
              //onClick setCurrVid to video.id.videoId
              //pass using an anyn function
            );
          })}
      </div>
    </div>
  );
};

export default VideoItem;
