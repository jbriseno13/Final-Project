import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos , currVideo}) => {
    const renderedVideos =  videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={currVideo} />
       
    });

    return <div className='ui relaxed divided list'>{renderedVideos}</div>;
};
export default VideoList;
