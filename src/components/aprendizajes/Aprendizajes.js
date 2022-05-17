import React,{useEffect, useState} from "react";
import "../../css/aprendizajes.css"
import data from "./estudios.json"
import { Fade, Slide } from "react-awesome-reveal";

export default function Aprendizaje(){
    
    const [estudios,setEstudios]=useState([])

    useEffect(()=>{
        setEstudios(data)
    },[data])

    return(
        <>
            {estudios.lenght===0?<></>:
                estudios.map(data=>(
                    <div className="aprendiazaje" key={data.titulo}>
                        {data.año!==""?
                        <Fade duration={4000}>
                            <div>
                                <p className="año-aprendizaje">{data.año}</p>
                                <p className="año-aprendizaje-separator">||</p>
                            </div>
                        </Fade>
                        :<></>
                        }
                        <Slide duration={3000} direction={data.slide}>
                            <div className="aprendizaje-container">
                                <div className="container-encabezado">
                                    <h2>{data.titulo}</h2>
                                    <p>{data.lugar}</p>
                                </div>
                                <p>{data.descripcion}</p>
                                <p className="estado">{data.estado}</p>
                            </div>
                        </Slide>
                    </div>
                ))
            }
        </>
    )
}