import React from "react"

class ImageCard extends React.Component
{

    render()
    {

        const urls=this.props.image.urls;
        const description=this.props.image.description;
        return(
            <div>
                <img ref={this.imageRef} src={urls.regular} alt={description} />
            </div>
        )
    }
}
export default ImageCard;