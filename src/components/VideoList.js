import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
    const renderedList = videos.map((video) => {
        return <VideoItem video={video} />;
    });


    return <div>{renderedList}</div>;
}

// it's same as
// const VideoList = (props) => {
//     return <div>{props.videos.length}</div>;
// }



export default VideoList;