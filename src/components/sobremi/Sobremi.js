import React from "react";
import "../../css/sobremi.css"
import Titles from "../titles/Titles";
import SubTitles from "../titles/SubTitles";
import fotoCarnet from "./fotoCara.png"
import Aprendizaje from "../aprendizajes/Aprendizajes";
import Laboral from "../laboral/Laboral";
import Iconos from "../iconos/Iconos";
import { Slide } from "react-awesome-reveal";
export default function SobreMi({idioma}){

    return(
        <div className="sobreMi" id="sobreMi">
            <div className="sobreMi-bio">
                <div className="bio">
                    <Titles title={idioma==="español"?"SOBRE MI":"ABOUT ME"}  fondo={"negro"}/>
                    <Slide duration={1500} direction="up" triggerOnce={true}>
                        {idioma==="español"?
                            <p className="biografia">
                                Empecé a estudiar programación en 2019. Durante la pandemia me interiorice en el tema y encontré mi verdadera pasión.
                                Decidí dejar la carrera que estaba cursando para empezar a estudiar programación web. <br/>
                                Hoy en día me siento feliz y agradezco haber tomado dicha decisión. <br/>
                                Terminé la carrera de "Desarrollo FrontEnd" en Coderhouse, y trabajando como tutor en los cursos de "Desarrollo Web", "JavaScript" y "React JS" en la misma plataforma. <br/>
                                Estoy dispuesto a crecer en lo profesional, adquiriendo nuevos conocimientos y técnicas de programación.
                            </p>
                        :
                            <p className="biografia">
                                I started studying programming in 2019. 
                                During the pandemic I deepened on the topic and I found my true passion, therefore I decided to start studying Web Development. <br/>
                                Now I am very happy with that decision. <br/>
                                I finished “FrontEnd Development” career in Coderhouse and I am working as a tutor for “Web Development” and “ React JS” courses  on the same platform. <br/>
                                I aspire to grow as a professional, acquiring new knowledge and programming skills.
                            </p>
                        }
                    <div className="iconos-container">
                        <Slide duration={2000} direction="up" triggerOnce={true}>
                            <Iconos/>
                        </Slide>
                    </div>
                    </Slide>
                </div>
                <div data-aos="fade-up" className="cv" style={{transitionDuration:"3s"}}>
                    <div>
                        <img src={fotoCarnet} alt="Persona"/>
                    </div>
                    <div>
                        <a href="https://drive.google.com/file/d/1oV3-LlxGdc42ioaYivVkMLm2l4eiOmlC/view?usp=sharing" target={"_blank"} rel="noreferrer">{idioma==="español"?"Ver CV":"CV"}</a>
                        <a href="https://github.com/TimoteoGambella" target={"_blank"} rel="noreferrer">GitHub</a>
                    </div>
                </div>
            </div>
            <div>
                <SubTitles title={idioma==="español"?"ESTUDIOS":"STUDIES"}/>
                <Aprendizaje  idioma={idioma}/>
                <br/>
                <br/>
                <SubTitles title={idioma==="español"?"EXPERIENCIA LABORAL":"WORK EXPERIENCE"}/>
                <Laboral año={"2022"} idioma={idioma}/>
                <Laboral año={"2020"} idioma={idioma}/>
            </div>
        </div>
    )
}