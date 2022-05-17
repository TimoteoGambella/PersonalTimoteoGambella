import React from "react";
import "../../css/titles.css"
import { Fade } from "react-awesome-reveal";

export default function SubTitles({title}){


    return(
        <Fade duration={5000}>
            <div className="subTitle">
                <div>
                    <p className="subTitle">{title}</p>
                </div>
            </div>
        </Fade>
    )
}