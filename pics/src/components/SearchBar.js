import React from 'react'
import axios from 'axios'





class SearchBar extends React.Component{
    state = { term: ''};
    
    
    
    onInputChange=(event)=>{
        console.log(event.target.value);
        this.setState({term: event.target.value});
        console.log(this.state)
    

    }
    onFormSubmit=(event)=>{
        event.preventDefault();

        console.log(this.state.term)

        this.props.onSubmit(this.state.term)

    }

  
    render(){
        return (
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input type='text' value={this.state.term} onChange={this.onInputChange} />
                </div>
            </form>

        </div>
        );
    }
}


export default SearchBar