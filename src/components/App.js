import React from "react"
import ReactDOM from "react-dom"
import SearchBar from "./SearchBar"
import unsplash from "../apis/unsplash"
import axios  from "axios"
import ImageList from "./ImageList";
class App extends React.Component{
    state={
        images: []
    }
    callback=async (searchquery)=>
    {
        const res= await unsplash.get("/search/photos/",{
            params: 
            {
                query: searchquery,
                per_page: 30
            }
        })
        this.setState({
            images: res.data.results
        })
        console.log(this.state.images)
        // console.log("Images obtained" ,res.data.results);
    }
   
    render()
    {
        return(
            <div>
                <div className="container">
                <SearchBar callback={this.callback}/>
                <ImageList images={this.state.images} />
                </div>
              
            </div>
        )
    }
}
export default App;