import React from "react";
import "../../css/titles.css"

export default function Titles({title,fondo}){


    return(
        <div className="title">
            <div data-aos="fade-up" style={{transitionDuration:"3s"}}>
                <p className="title">{title}<span className={fondo}></span></p>
            </div>
        </div>
    )
}