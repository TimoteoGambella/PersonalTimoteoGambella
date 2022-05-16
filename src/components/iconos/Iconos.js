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
            <img src={html} alt="HTML"/>
            <img src={css} alt="CSS"/>
            <img src={js} alt="JS"/>
            <img src={react} alt="REACT"/>
            <img src={scss} alt="SCSS"/>
            <img src={boot} alt="BOOTSTRAP"/>
            <img src={next} alt="NEXT"/>
            <img src={github} alt="GITHUB"/>
        </div>
    )
}