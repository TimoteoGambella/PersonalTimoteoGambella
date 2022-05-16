import React from "react";
import "../../css/titles.css"

export default function SubTitles({title}){


    return(
        <div className="subTitle">
            <div data-aos="fade-in" style={{transitionDuration:"4s"}}>
                <p className="subTitle">{title}<span></span></p>
            </div>
        </div>
    )
}