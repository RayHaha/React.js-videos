import React from 'react';

const VideoDetail = ({ video }) => {
    // at the beginning, before selecting, the selectedVideo is null
    if(!video){
        return <div>Loading...</div>;
    }

    return <div>{video.snippet.title}</div>;
}

export default VideoDetail;