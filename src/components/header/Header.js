import React,{useState} from "react";
import "../../css/header.css"

export default function Header({animation1,animation2,height,disp,idioma}){

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
                                <h2>{idioma==="español"?"Desarrollador FrontEnd":"FrontEnd Developer"}</h2>
                                {idioma==="español"?
                                    <p>Terminé la carrera de Desarrollador FrontEnd. Soy un apasionado de la programación web.<br/>
                                        Mi enfoque principal es el front-end, a pesar de tener conocimientos en BackEnd. Estoy en constante aprendizaje.<br/>Me gusta el trabajo en equipo y el buen diálogo.
                                    </p>
                                :
                                    <p> I finished “FrontEnd Development” career. I am a passionate about web programming.<br/>
                                        I am mainly focused on front-end, but i have also knowledge on back-end. I like learning new tools and skills.<br/> I also enjoy teamwork and constructive dialogue.
                                    </p>
                                }
                            </div>
                            <ul>
                                <li>
                                    <a href="#sobreMi" aria-label="Sobremi" >{idioma==="español"?"Sobre mí":"About me"}</a>
                                </li>
                                <li>
                                    <a href="#proyectos" aria-label="Proyectos" >{idioma==="español"?"Proyectos":"Projects"}</a>
                                </li>
                                <li>
                                    <a href="#contactos" aria-label="Contacto" >{idioma==="español"?"Contacto":"Contact"}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}