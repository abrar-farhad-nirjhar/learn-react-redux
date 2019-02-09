import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
class App extends React.Component{


    state = {videos:[], selectedVideo:null}


    componentDidMount(){
        this.onTermSubmit('buildings');
    }
    onTermSubmit = async (term) =>{

        const response = await youtube.get('/search',{
            params:{
                q:term
            }
        });
        this.setState({videos:response.data.items});
        this.setState({selectedVideo:response.data.items[0]})


    }

    onVideoSelect = (video) =>{
        // console.log('From the App!', video)
        this.setState({selectedVideo:video});
    }

    render(){
        return (
        <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit} />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
            
        </div>
        );
    }
}

export default App