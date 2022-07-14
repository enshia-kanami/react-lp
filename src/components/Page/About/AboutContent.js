import React from "react";

const AboutContent = (props) => {
    return (
        <div>
            <h4>{props.aboutTitle}</h4>
            <p className="break-words whitespace-pre-wrap">{props.aboutText}</p>   
        </div> 
    )   
}

export default AboutContent;