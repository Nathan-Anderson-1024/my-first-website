import React from "react";
import './ImageSection.css'

export class ImageSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Images: [
                {
                    containerClass: 'million_container',
                    src: "./IMG_8708.png",
                    alt: "a River"

                },
                {
                    containerClass: 'stevenson_container',
                    src: './IMG_8712.png',
                    alt: 'stevenson falls'
                }
            ],
            imgContainerClass: 'img_container',
        }
    }
    render() {
        return (
            <div className="whole_container">
                <div className={this.state.Images[0].containerClass}>
                    <div className={this.state.imgContainerClass}>
                        <img className="outdoor_img" src={require("./IMG_8712.png")}></img>
                    </div>
                </div>
            </div>
        )
    }
}