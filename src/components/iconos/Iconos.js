import React from "react";
import "../../css/iconos.css"
import html from "./icons8-html-5-100.png"
import css from "./icons8-css3-100.png"
import js from "./icons8-javascript-100.png"
import react from "./icons8-reaccionar-nativo-100.png"
import scss from "./icons8-sass-100.png"
import boot from "./bootstrap.png"
import next from ".//nextjs-removebg-preview.png"
import github from "./github.png"

export default function Iconos(){
    
    return(
        <div className="iconos-container">
            <img src={html} alt="HTML" width={50} height={45}/>
            <img src={css} alt="CSS" width={50} height={45}/>
            <img src={js} alt="JS" width={50} height={45}/>
            <img src={react} alt="REACT" width={50} height={45}/>
            <img src={scss} alt="SCSS" width={50} height={45}/>
            <img src={boot} alt="BOOTSTRAP" width={50} height={45}/>
            <img src={next} alt="NEXT" width={50} height={45}/>
            <img src={github} alt="GITHUB" width={50} height={45}/>
        </div>
    )
}