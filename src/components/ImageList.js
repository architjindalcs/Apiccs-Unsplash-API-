import React from "react"
import "./ImageList.css"
const ImageList=(props)=>
{   
    console.log("Props", props.images )
    const images=props.images.map((image)=>
    {
        console.log(image)
        return<div className="col-4"><a href={image.urls.full}><img src={image.urls.small} alt={image.description} className="img-thumbnail"/></a></div> 
    })
    return(<div className="container c1">
        <div className="row">
        {images}
        </div>
        
    </div> )
};

export default ImageList