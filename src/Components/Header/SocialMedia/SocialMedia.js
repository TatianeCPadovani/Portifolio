import React from "react";
import "./SocialMedia.css";


const SocialMedia = (props) =>{
    return(
            <img className="imgSocialMedia" src={props.image}></img>
    )
}

export default SocialMedia;