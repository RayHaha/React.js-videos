import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
    // initialize state
    state = { videos: [], selectedVideo: null };

    // set the default searching
    componentDidMount(){
        this.onTermSubmit('buildings');
    }

    // the async function to search while entering the term
    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        // use state to store the detail of video
        // and show the first video as selectedVideo
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
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
                <div className="ui grid">
                    <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList 
                            onVideoSelect={this.onVideoSelect} 
                            videos={this.state.videos} 
                        />
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;