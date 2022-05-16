import React,{useEffect, useState} from "react";
import "../../css/aprendizajes.css"
import data from "./estudios.json"

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
                            <div data-aos="zoom-in" data-aos-duration="2000">
                                <p className="año-aprendizaje">{data.año}</p>
                                <p className="año-aprendizaje-separator">||</p>
                            </div>
                        :<></>
                        }
                        <div className="aprendizaje-container" data-aos={data.fade} data-aos-duration="1500">
                            <div className="container-encabezado">
                                <h2>{data.titulo}</h2>
                                <p>{data.lugar}</p>
                            </div>
                            <p>{data.descripcion}</p>
                            <p className="estado">{data.estado}</p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}