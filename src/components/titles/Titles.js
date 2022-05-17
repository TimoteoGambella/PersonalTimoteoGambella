import React from "react";
import "../../css/titles.css"
import { JackInTheBox } from "react-awesome-reveal";

export default function Titles({title,fondo}){


    return(
        <JackInTheBox duration={2000}>
            <div className="title">
                <div>
                    <p className="title">{title}</p>
                </div>
            </div>
        </JackInTheBox>
    )
}