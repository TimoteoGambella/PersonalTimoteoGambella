import React from "react";
import "../../css/sobremi.css"
import Titles from "../titles/Titles";
import SubTitles from "../titles/SubTitles";
import fotoCarnet from "./fotoCara.png"
import Aprendizaje from "../aprendizajes/Aprendizajes";
import Laboral from "../laboral/Laboral";
import Iconos from "../iconos/Iconos";

export default function SobreMi(){

    return(
        <div className="sobreMi" id="sobreMi">
            <div className="sobreMi-bio">
                <div className="bio">
                    <Titles title={"SOBRE MI"}  fondo={"negro"}/>
                    <p data-aos="fade-up" style={{transitionDuration:"3s"}} className="biografia">
                        Empecé a estudiar programación en 2019. Durante la pandemia me interiorice en el tema y encontré mi verdadera pasión.
                        Decidí dejar la carrera que estaba cursando para empezar a estudiar programación web. <br/>
                        Hoy en día me siento feliz y agradezco haber tomado dicha decisión. <br/>
                        Me encuentro cursando la carrera "Desarrollo Full Stack" en Coderhouse, y trabajando como tutor en los cursos de "Desarrollo Web" en la misma plataforma. <br/>
                        Estoy dispuesto a crecer en lo profesional, adquiriendo nuevos conocimientos y técnicas de programación.
                    </p>
                    <div className="iconos-container" data-aos="fade-up" style={{transitionDuration:"3s"}}>
                        <Iconos/>
                    </div>
                </div>
                <div data-aos="fade-up" className="cv" style={{transitionDuration:"3s"}}>
                    <div>
                        <img src={fotoCarnet} alt="Persona"/>
                    </div>
                    <div>
                        <a href="https://drive.google.com/file/d/1oV3-LlxGdc42ioaYivVkMLm2l4eiOmlC/view?usp=sharing" target={"_blank"} rel="noreferrer">Ver CV</a>
                        <a href="https://github.com/TimoteoGambella" target={"_blank"} rel="noreferrer">GitHub</a>
                    </div>
                </div>
            </div>
            <div>
                <SubTitles title={"ESTUDIOS"}/>
                <Aprendizaje />
                <br/>
                <br/>
                <SubTitles title={"EXPERIENCIA LABORAL"}/>
                <Laboral año={"2022"}/>
            </div>
        </div>
    )
}