import React from 'react';

const VideoDetail = ({ video }) => {
    // at the beginning, before selecting, the selectedVideo is null
    if(!video){
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;