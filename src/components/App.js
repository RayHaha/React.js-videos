import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
    // initialize state
    state = { videos: [], selectedVideo: null };

    // the async function to search while entering the term
    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        // use state to store the detail of video
        this.setState({ videos: response.data.items});
    }

    // set the callback function to children to call while selecting the video
    // then store the selected video into state
    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    render(){
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={this.onVideoSelect} 
                    videos={this.state.videos} 
                />
            </div>
        );
    }
}

export default App;