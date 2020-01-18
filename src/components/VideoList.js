import React from 'react';
import VideoItem from './VideoItem';

const VideosList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video, index) => {
    return (
      <VideoItem onVideoSelect={onVideoSelect} key={index} video={video} />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideosList;
