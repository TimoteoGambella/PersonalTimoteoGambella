import { Instagram, LinkedIn, Mail, WhatsApp } from "@mui/icons-material";
import React from "react";
import "../../css/contactos.css"

export default function Conctactos(){

    return(
        <div id="contactos" className="contactos">
            <p>CONTACTO</p>
            <div>
                <a href="https://wa.me/543487542190?text=Hola Timo! Ví tu pagina personal" aria-label="Whap" target={"_blank"} rel="noreferrer"><WhatsApp/></a>
                <a href="mailto:timi.gambella@hotmail.com" aria-label="Mail" target={"_blank"} rel="noreferrer"><Mail/></a>
                <a href="https://www.linkedin.com/in/timoteo-gambella-4b6418210/" aria-label="Linkedin" target={"_blank"} rel="noreferrer"><LinkedIn/></a>
                <a href="https://www.instagram.com/timogambella/?hl=es" aria-label="Instagram" target={"_blank"} rel="noreferrer"><Instagram/></a>
            </div>
        </div>
    )
}