import React,{useState} from "react";
import "../../css/header.css"

export default function Header({animation1,animation2,height,disp}){

    const [display,setDisplay]=useState(disp)

    return(
        <div className="header" style={{animationName:`${animation2}`, height:`${height}`}} id="header">

            <div className={animation1}>
                {display==="none"?
                    <div className="cargar-header"></div>
                :
                    <div className="container-header">
                        <div className="header-title">
                            <h1>Timoteo Gambella<span>---</span></h1>
                        </div>
                        <div className="header-info">
                            <div className="header-descripcion">
                                <h2>Desarrollador FrontEnd</h2>
                                <p>Terminé la carrera de Desarrollador FrontEnd. Soy un apasionado de la programación web.<br/>
                                    Mi enfoque principal es el front-end, a pesar de tener conocimientos en BackEnd. Estoy en constante aprendizaje.<br/>Me gusta el trabajo en equipo y el buen diálogo.
                                </p>
                            </div>
                            <ul>
                                <li>
                                    <a href="#sobreMi" aria-label="Sobremi" >Sobre mí</a>
                                </li>
                                <li>
                                    <a href="#proyectos" aria-label="Proyectos" >Proyectos</a>
                                </li>
                                <li>
                                    <a href="#contactos" aria-label="Contacto" >Contacto</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}