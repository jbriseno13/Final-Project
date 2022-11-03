import React, { useEffect, useState } from "react";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8091/search")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Bad response");
        }
      })

      .then((data) => {
        setVideoDetail(data);
      });
  };

 
};

export default VideoDetail;