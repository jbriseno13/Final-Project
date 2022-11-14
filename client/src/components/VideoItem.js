import { useState, useEffect } from "react";

const VideoItem = ({ searchQuery }) => {
  const [videoit, setVideoit] = useState({});

  const getVideo = async () => {
    const response = await fetch(`http://localhost:8091/search/${searchQuery}`);
    const videoit = await response.json();
    setVideoit(videoit);
  };

  useEffect(() => {
    getVideo();
  }, [searchQuery]);

  return (
    <div>
      Video Test {videoit?.items?.[0]?.id?.videoId}
      {/* //conditional rendering */}
      {videoit?.items?.length > 0 && (
        <iframe
          src={`https://www.youtube.com/embed/${videoit?.items?.[0]?.id?.videoId}`}
          frameborder="0"
          height="350px"
          width="450px"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
        />
      )}
    </div>
  );
};

export default VideoItem;
