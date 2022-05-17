import React,{useEffect, useState} from "react";
import { Zoom,Fade } from "react-awesome-reveal";
import "../../css/laboral.css"
import data from "./laboral.json"

export default function Laboral({año}){
    
    const [laboral,setLaboral]=useState([])

    useEffect(()=>{
        setLaboral(data)
    },[data])

    return(
        <>
            {laboral.lenght===0?<></>:
                <>
                    <Fade duration={4000}>
                        <div className="año-container">
                            <p className="año-laboral">{año}</p>
                            <p className="año-laboral-separator">||</p>
                        </div>
                    </Fade>
                    <div className="laboral-flex">
                        {laboral.filter(dat=>dat.año===año).map(data=>(
                            <div className="laboral" key={data.titulo}>
                                <Zoom duration={2500}>
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
            }
        </>
    )
}