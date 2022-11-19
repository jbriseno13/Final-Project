import { useState, useEffect } from "react";
// import VideosPage from "../components/navBarPrivate/videospage";

// Notes if you're going to recreate the VideoItem component
//GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI&key=[YOUR_API_KEY] HTTP/1.1
//Note: use video list to render fav videos. 

import VideoItem from "./VideoItem";

const Favorite = () => {
  const [video, SetVideo] = useState([]); // <-- same logic as currVideo VideoItem
  // TODO: set a state for the list of favorites id's: favoriteIDs
  // TODO: set a state for the videos: videos


  // GET request - for getting a list of your favorites ID's
  // TODO: Test this endpoint - does it work? Does it return your favorites?
  const getFavorites = async () => {
    console.log(getFavorites,"getFavorites")
    const favoritesList = await fetch(`/api/favorites`);
    const favorites = await favoritesList.json();
    // TODO: get the response^^, update your favoriteIDs state with it
    // TODO: write another await fetch for // GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI&key=[YOUR_API_KEY] HTTP/1.1
    // ^^ note that if you write your GET req here, you'll need to pull your API key/secret info from your client .env. 
      // ^^ if you write your GET req in the server file, you can use the same API key in your server dir .env
    // ^^ based on the response you get there, then you're going to update a videos state
  };



  useEffect(() => {
    getFavorites();
  }, []);

  // Down here: copy the code you have for VideoItem (the iframe stuff, the cards) 
  return (
    <div className="main-video-favList">
      <div className="fav-video-list">List of Favorite Videos </div>
      <div className="favorites-videos-div">
        <div className="favorites-iframe">iframe</div>
        <div className="favorites-cards">card</div>
      </div>
      <VideoItem video={video} isFavorite={false} onUpdate={getFavorites} />
    </div>
  );
};

export default Favorite;
