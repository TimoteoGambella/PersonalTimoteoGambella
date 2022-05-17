import React,{useEffect, useState} from "react";
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
                    <div className="año-container" data-aos="zoom-in" data-aos-duration="2000">
                        <p className="año-laboral">{año}</p>
                        <p className="año-laboral-separator">||</p>
                    </div>
                    <div className="laboral-flex">
                        {laboral.filter(dat=>dat.año===año).map(data=>(
                            <div className="laboral" key={data.titulo}>
                                <div className="laboral-container" data-aos="zoom-in" data-aos-duration="1500">
                                    <div className="container-encabezado-laboral">
                                        <h2>{data.titulo}</h2>
                                        <p>{data.lugar}</p>
                                    </div>
                                    <p>{data.descripcion}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            }
        </>
    )
}