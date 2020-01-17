import React from 'react';
import VideoItem from './VideoItem';

const VideosList = ({ videos }) => {
  return videos.map((video, index) => {
    return <VideoItem key={index} video={video} />;
  });
};

export default VideosList;
