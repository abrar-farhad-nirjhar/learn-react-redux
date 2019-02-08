import React from 'react'
import SearchBar from './SearchBar'
import axios from 'axios'
import ImageList from './ImageList'
import unsplash from '../api/unsplash'


class App extends React.Component{
    
    state = {images:[]};

    onSearchSubmit= async (term)=>{
        const response=await unsplash.get('/search/photos',{
            params:{
                query: term
            }

        });
        console.log('this is' +this.state);
        console.log(response.data.results);
        this.setState({images:response.data.results});
        console.log(this.state);
    }
    

    // .then( (response)=>{
    //     console.log(response.data.results);
    // });


    render(){
        return (
        <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
            <h1>{this.state.images.length}</h1>
            <ImageList images={this.state.images}/>
        </div>
        );
    }
}


export default App