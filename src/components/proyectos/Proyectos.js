import React from "react";
import "../../css/proyectos.css"
import CardProyectos from "../cardProyectos/CardProyectos";
import Titles from "../titles/Titles";
import card1 from "./card1.png"
import card2 from "./card2.png"
import card3 from "./card3.png"
import card4 from "./card4.png"
import card5 from "./card5.png"
import card6 from "./card6.png"
import card7 from "./card7.png"

export default function Proyectos(){

    return(
        <div id="proyectos">
            <Titles title={"Proyectos"} fondo={"celeste"}/>
            <div className="proyectos" data-aos="zoom-in" data-aos-duration="2500">
                <CardProyectos fondo={card1} tipo={"Sitio Real"}
                    title={"Rose Aromas"} page={"https://www.rosearomas.com.ar/"} git={"https://github.com/Timofede/RoseAromas"}
                    descripcion={["Sitio web con e-commerce para emprendimiento de Zárate.","Se utilizó Next/React. Contiene 4 paginas estáticas y la tienda funcional.", "Contiene la integración completa de Mercadopago para los cobros." ,"Se analizó el SEO y contiene Google Analytics. Se utilizo Sass para estilos."]}
                />
                <CardProyectos fondo={card2} tipo={"Sitio Ficticio"}
                    descripcion={["Sitio web inspirado en local de hamburguesas. Fué entregado como trabajo final del curso 'Desarrollo Web'.","Se utilizo HTML y Sass para lograr la interfaz.","Se utilizó bootstrap en ciertas páginas.","El sitio web es 100% responsive."]}
                    title={"Vikings Burgers"} page={"https://timoteogambella.github.io/pagina-web/index.html"} git={"https://github.com/TimoteoGambella/pagina-web"}
                />
                <CardProyectos fondo={card3} tipo={"Sitio Ficticio"}
                    descripcion={["Sitio web inspirado en local de hamburguesas. Fué entregado como trabajo final del curso 'JavaScript'","Es una extension del anterior proyecto. Se le agregó lógica JS para tomar pedidos. Se trabaja con LocalStorage, jQuery, data.json y consumo de API.","El sitio web NO es responsive"]}
                    title={"Vikings Burgers"} page={"https://timoteogambella.github.io/PaginaWebConJS/"} git={"https://github.com/TimoteoGambella/PaginaWebConJS"}
                />
                <CardProyectos fondo={card4} tipo={"Sitio Ficticio"}
                    descripcion={["Página desarrollada para practicar FrontEnd (HTML, CSS, JS).","Se implementan videos y fotos de alta calidad. Son analizadas con SEO.","Las tarjetas 'Work' cuentan con su modal personalizado.","La página web es 100% responsiva"]}
                    title={"Panic"} page={"https://timoteogambella.github.io/SitioWebResponsivo/"} git={"https://github.com/TimoteoGambella/SitioWebResponsivo"}
                />
                <CardProyectos fondo={card5} tipo={"Sitio Ficticio"}
                    descripcion={["Trabajo inspirado en un gran desarrollador web.","Página desarrollada para practicar HTML y CSS puro.","Se analiza el SEO.","La página web NO es responsiva"]}
                    title={"Sitio Personal"} page={"https://timoteogambella.github.io/PaginaPersonal/"} git={"https://github.com/TimoteoGambella/PaginaPersonal"}
                />
                <CardProyectos fondo={card6} tipo={"Sitio Ficticio"}
                    descripcion={["Página desarrollada para practicar HTML, CSS y JS.","Es una página que maneja el ingreso y egreso de valores. Además, los controla.","Se trabaja con LocalStorage para mantener la informacion.","La pagina web NO es responsiva"]}
                    title={"Presupuestos"} page={"https://timoteogambella.github.io/PresupuestoPersonal/"} git={"https://github.com/TimoteoGambella/PresupuestoPersonal"}
                />
                <CardProyectos fondo={card7} tipo={"Sitio Ficticio"}
                    descripcion={["Página desarrollada para practicar HTML, CSS (animaciones).","Es una página que muestra la rotacion de un cubo transparente. El mismo superpone el contraste de sus colores generando un efecto visual entretenido.","La pagina web es 100% responsiva"]}
                    title={"Cubo Dinámico"} page={"https://timoteogambella.github.io/Cubo3DDinamico/"} git={"https://github.com/TimoteoGambella/Cubo3DDinamico"}
                />
            </div>
        </div>
    )
}