import React from "react";
import { Zoom,Fade } from "react-awesome-reveal";
import "../../css/laboral.css"
import data from "./laboral.json"
import data2 from "./works.json"

export default function Laboral({año, idioma}){
    
    return(
        <>
            <Fade duration={4000} triggerOnce={true}>
                <div className="año-container">
                    <p className="año-laboral">{año}</p>
                    <p className="año-laboral-separator">||</p>
                </div>
            </Fade>
            <div className="laboral-flex">
                {(idioma==="español"?data:data2).filter(dat=>dat.año===año).map((data,i)=>(
                    <div className="laboral" key={data.titulo+i}>
                        <Zoom duration={3000} triggerOnce={true}>
                            <div className="laboral-container">
                                <div className="container-encabezado-laboral">
                                    <h2>{data.titulo}</h2>
                                    <p>{data.lugar}</p>
                                </div>
                                <p>{data.descripcion}</p>
                            </div>
                        </Zoom>
                    </div>
                ))}
            </div>
        </>
    )
}