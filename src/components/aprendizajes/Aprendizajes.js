import React,{useEffect, useState} from "react";
import "../../css/aprendizajes.css"
import data from "./estudios.json"
import data2 from "./studies.json"
import { Fade, Slide } from "react-awesome-reveal";

export default function Aprendizaje({idioma}){
    
    const [estudios,setEstudios]=useState([])

    useEffect(()=>{
        if(idioma==="español"){
            setEstudios(data)
        }else if(idioma==="ingles"){
            setEstudios(data2)
        }
    },[idioma])// eslint-disable-line react-hooks/exhaustive-deps


    return(
        <>
            {estudios.lenght===0?<></>:
                estudios.map((data,i)=>(
                    <div className="aprendiazaje" key={data.titulo+i}>
                        {data.año!==""?
                        <Fade duration={1500} triggerOnce={true}>
                            <div>
                                <p className="año-aprendizaje">{data.año}</p>
                                <p className="año-aprendizaje-separator">||</p>
                            </div>
                        </Fade>
                        :<></>
                        }
                        <Slide duration={2000} direction={data.slide} triggerOnce={true}>
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