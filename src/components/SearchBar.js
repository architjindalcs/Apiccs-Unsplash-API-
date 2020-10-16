import React from "react";
import "./SearchBar.css";
class SearchBar extends React.Component
{
    state={
        searchquery:""
    }

    onFormSubmit=(e)=>
    {
        e.preventDefault();
        this.props.callback(this.state.searchquery)
    }
    onInputChange=(e)=>
    {
       this.setState({
           searchquery: e.target.value
       })
        console.log(this.searchquery) 
    }
    render()
    {
        return(<div>
            <form onSubmit={this.onFormSubmit}>
  
        <input type="text"  value= {this.state.searchquery} placeholder="Enter search query" onChange={(e)=>
        {
            this.setState({searchquery: e.target.value})
            console.log(this.state.searchquery)
        }}/>
    
 
    
      
    </form>
        </div>)
    }
}

export default SearchBar