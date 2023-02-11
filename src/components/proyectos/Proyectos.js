import React from "react";
import "../../css/proyectos.css"
import CardProyectos from "../cardProyectos/CardProyectos";
import Titles from "../titles/Titles";
import { Zoom } from "react-awesome-reveal";
import card1 from "./card1.png"
import card2 from "./card2.png"
import card3 from "./card3.png"
import card4 from "./card4.png"
import card5 from "./card5.png"
import card6 from "./card6.png"
import card7 from "./card7.png"
import card8 from "./card8.png"
import card9 from "./card9.png"
import card10 from "./card10.png"
import card11 from "./card11.png"
import card12 from "./card12.png"

export default function Proyectos({idioma}){

    return(
        <div id="proyectos">
            <Titles title={idioma==="español"?"Proyectos":"Projects"} fondo={"celeste"}/>
            <div className="proyectos">
                {idioma==="español"?
                <>
                    <Zoom triggerOnce={true} duration={2000}>
                        <CardProyectos fondo={card12} tipo={"Sitio Ficticio"}
                            title={"Need For Speed"} page={"https://need-for-speed-five.vercel.app/"} git={"https://github.com/TimoteoGambella/Need-For-Speed"}
                            descripcion={["Sitio web diseñado y desarrollado en base a Need For Speed.","Se utilizo base de datos en Firebase.", "El proyecto surge de una iniciativa propia de formar grupos para desarrollar."]}
                        />
                    </Zoom>
                    <Zoom triggerOnce={true} duration={2000}>
                        <CardProyectos fondo={card11} tipo={"Sitio Ficticio"}
                            title={"MarvelPage"} page={"https://marvel-project-iota.vercel.app/"} git={"https://github.com/TimoteoGambella/Marvel-Project-Vercel"}
                            descripcion={["Sitio web diseñado y desarrollado en base a Marvel.","Se utilizo la API oficial de Marvel.", "El proyecto surge de una iniciativa propia de formar grupos para desarrollar."]}
                        />
                    </Zoom>
                    <Zoom triggerOnce={true} duration={2000}>
                        <CardProyectos fondo={card10} tipo={"Sitio Real"}
                            title={"E-commerce"} page={"https://vikingspage.vercel.app"} git={""}
                            descripcion={["Sitio web con e-commerce para emprendimiento gastronómico de Zárate.","Se utilizó Next/React. Consta de una tienda in live.", "Contiene la integración completa de Mercadopago y formas secundarias para los cobros." ,"Se analizó el SEO y contiene Google Analytics. Se utilizó Sass para estilos."]}
                        />
                    </Zoom>
                    <Zoom triggerOnce={true} duration={2000}>
                        <CardProyectos fondo={card9} tipo={"Sitio Ficticio"}
                            title={"E-commerce"} page={"diseno-e-commerce-vercel.vercel.app"} git={""}
                            descripcion={["Sitio web con e-commerce de prueba.","Se utilizó Next/React. Contiene una tienda no funcional.", "Diseño 100% personal." ,"Se utilizó Sass para estilos."]}
                        />
                    </Zoom>
                    <Zoom triggerOnce={true} duration={2000}>
                        <CardProyectos fondo={card1} tipo={"Sitio Real"}
                            title={"Rose Aromas"} page={"https://www.rosearomas.com.ar/"} git={""}
                            descripcion={["Sitio web con e-commerce para emprendimiento de Zárate.","Se utilizó Next/React. Contiene 4 páginas estáticas y la tienda funcional.", "Contiene la integración completa de Mercadopago para los cobros." ,"Se analizó el SEO y contiene Google Analytics. Se utilizó Sass para estilos."]}
                        />
                    </Zoom>
                    <Zoom triggerOnce={true} duration={2000}>
                        <CardProyectos fondo={card8} tipo={"Sitio Ficticio"}
                            descripcion={["Página desarrollada para practicar React y Next.","Es un sitio web inspirado en Netflix. Consume la API de MTDB.","La página web es 100% responsiva"]}
                            title={"MoviesPage"} page={"https://movie-page-theta.vercel.app/"} git={""}
                        />
                    </Zoom>
                    <Zoom triggerOnce={true} duration={2000}>
                        <CardProyectos fondo={card2} tipo={"Sitio Ficticio"}
                            descripcion={["Sitio web inspirado en un local de hamburguesas. Fué entregado como trabajo final del curso 'Desarrollo Web'.","Se utilizo HTML y Sass para lograr la interfaz.","Se utilizó bootstrap en ciertas páginas.","El sitio web es 100% responsive."]}
                            title={"Vikings Burgers"} page={"https://timoteogambella.github.io/pagina-web/index.html"} git={"https://github.com/TimoteoGambella/pagina-web"}
                        />
                    </Zoom>
                    <Zoom triggerOnce={true} duration={2000}>
                        <CardProyectos fondo={card3} tipo={"Sitio Ficticio"}
                            descripcion={["Sitio web inspirado en un local de hamburguesas. Fué entregado como trabajo final del curso 'JavaScript'","Es una extensión del anterior proyecto. Se le agregó lógica JS para tomar pedidos. Se trabaja con LocalStorage, jQuery, data.json y consumo de API.","El sitio web NO es responsive"]}
                            title={"Vikings Burgers"} page={"https://timoteogambella.github.io/PaginaWebConJS/"} git={"https://github.com/TimoteoGambella/PaginaWebConJS"}
                        />
                    </Zoom>
                    <Zoom triggerOnce={true} duration={2000}>
                        <CardProyectos fondo={card4} tipo={"Sitio Ficticio"}
                            descripcion={["Página desarrollada para practicar FrontEnd (HTML, CSS, JS).","Se implementan videos y fotos de alta calidad. Son analizadas con SEO.","Las tarjetas 'Work' cuentan con su modal personalizado.","La página web es 100% responsiva"]}
                            title={"Panic"} page={"https://timoteogambella.github.io/SitioWebResponsivo/"} git={"https://github.com/TimoteoGambella/SitioWebResponsivo"}
                        />
                    </Zoom>
                    <Zoom triggerOnce={true} duration={2000}>
                        <CardProyectos fondo={card5} tipo={"Sitio Ficticio"}
                            descripcion={["Trabajo inspirado en un gran desarrollador web.","Página desarrollada para practicar HTML y CSS puro.","Se analiza el SEO.","La página web NO es responsiva"]}
                            title={"Sitio Personal"} page={"https://timoteogambella.github.io/PaginaPersonal/"} git={"https://github.com/TimoteoGambella/PaginaPersonal"}
                        />
                    </Zoom>
                    <Zoom triggerOnce={true} duration={2000}>
                        <CardProyectos fondo={card6} tipo={"Sitio Ficticio"}
                            descripcion={["Página desarrollada para practicar HTML, CSS y JS.","Es una página que maneja el ingreso y egreso de valores. Además, los controla.","Se trabaja con LocalStorage para mantener la información.","La pagina web NO es responsiva"]}
                            title={"Presupuestos"} page={"https://timoteogambella.github.io/PresupuestoPersonal/"} git={"https://github.com/TimoteoGambella/PresupuestoPersonal"}
                        />
                    </Zoom>
                    <Zoom triggerOnce={true} duration={2000}>
                        <CardProyectos fondo={card7} tipo={"Sitio Ficticio"}
                            descripcion={["Página desarrollada para practicar HTML, CSS (animaciones).","Es una página que muestra la rotacion de un cubo transparente. El mismo superpone el contraste de sus colores generando un efecto visual entretenido.","La página web es 100% responsiva"]}
                            title={"Cubo Dinámico"} page={"https://timoteogambella.github.io/Cubo3DDinamico/"} git={"https://github.com/TimoteoGambella/Cubo3DDinamico"}
                        />
                    </Zoom>
                </>
                :
                <>
                    <Zoom triggerOnce={true} duration={2000}>
                        <CardProyectos fondo={card10} tipo={"Real site"}
                            title={"E-commerce"} page={"https://vikingspage.vercel.app"} git={"#"}
                            descripcion={["Website with e-commerce for a Fast Food Restaurant in Zarate.","NEXT was used and consists of an in live store.", "It contains the complete integration of Mercado Pago and other forms of payment." ,"SEO was analysed and it contains Google Analytics. Sass was used for style sheets."]}
                        />
                    </Zoom>
                    <Zoom triggerOnce={true} duration={2000}>
                        <CardProyectos fondo={card9} tipo={"Test site"}
                            title={"E-commerce"} page={"diseno-e-commerce-vercel.vercel.app"} git={"https://github.com/TimoteoGambella/Diseno-E-Commerce"}
                            descripcion={["Test E-Commerce website.","Next/ React was used. It contains a non-functional store.", "100% personal design." ,"SASS was used for styleSheets"]}
                        />
                    </Zoom>
                    <Zoom triggerOnce={true} duration={2000}>
                        <CardProyectos fondo={card1} tipo={"Real site"}
                            title={"Rose Aromas"} page={"https://www.rosearomas.com.ar/"} git={"#"}
                            descripcion={["Web Sise with e-commerce for a store in Zarate.","Next / React was used. It contains four static pages and a functional store. ", "It contains the complete integration of Mercado Pago and other forms of payment." ,"SEO was analysed and it contains Google Analytics. Sass was used for style sheets."]}
                        />
                    </Zoom>
                    <Zoom triggerOnce={true} duration={2000}>
                        <CardProyectos fondo={card8} tipo={"Test site"}
                            descripcion={["Page developed to practise REACT and NEXT.","It is a website  inspired  in NETFLIX. It works with the API of MTDB.","The page is 100% responsive."]}
                            title={"MoviesPage"} page={"https://movie-page-theta.vercel.app/"} git={"https://github.com/TimoteoGambella/MoviePage"}
                        />
                    </Zoom>
                    <Zoom triggerOnce={true} duration={2000}>
                        <CardProyectos fondo={card2} tipo={"Test site"}
                            descripcion={["Website inspired in a Fast Food Store. It was the Final Project for the “Web Development” Course.","HTML and SASS were used for the design.","Bootstrap was used in some pages.","The site is 100% responsive."]}
                            title={"Vikings Burgers"} page={"https://timoteogambella.github.io/pagina-web/index.html"} git={"https://github.com/TimoteoGambella/pagina-web"}
                        />
                    </Zoom>
                    <Zoom triggerOnce={true} duration={2000}>
                        <CardProyectos fondo={card3} tipo={"Test site"}
                            descripcion={["Website inspired in a Fast Food Store. It was the Final Project for the “Java Script” Course.","It is an extension of the above mentioned project. It was added the JS logic to take orders. It works with LocalStorage, JQuery, data.Json and API.","The site is not  responsive."]}
                            title={"Vikings Burgers"} page={"https://timoteogambella.github.io/PaginaWebConJS/"} git={"https://github.com/TimoteoGambella/PaginaWebConJS"}
                        />
                    </Zoom>
                    <Zoom triggerOnce={true} duration={2000}>
                        <CardProyectos fondo={card4} tipo={"Test site"}
                            descripcion={["Page developed to practise Front-End (HTML, CSS, JS).","High quality photos and Videos were used. They were analysed with SEO.","The (work) cards have their personalised modal.","The page is 100% responsive."]}
                            title={"Panic"} page={"https://timoteogambella.github.io/SitioWebResponsivo/"} git={"https://github.com/TimoteoGambella/SitioWebResponsivo"}
                        />
                    </Zoom>
                    <Zoom triggerOnce={true} duration={2000}>
                        <CardProyectos fondo={card5} tipo={"Test site"}
                            descripcion={["This work was Inspired in an important Web Developer.","Page developed to practise CSS and HTML.","SEO was analysed.","The page is not responsive."]}
                            title={"Personal site"} page={"https://timoteogambella.github.io/PaginaPersonal/"} git={"https://github.com/TimoteoGambella/PaginaPersonal"}
                        />
                    </Zoom>
                    <Zoom triggerOnce={true} duration={2000}>
                        <CardProyectos fondo={card6} tipo={"Test site"}
                            descripcion={["Page developed to practise HTML, CSS y JS.","It is a page that manages the entry and exit of values and controls them.","It works with Local Storage to keep the information.","The page is not responsive."]}
                            title={"Budgets"} page={"https://timoteogambella.github.io/PresupuestoPersonal/"} git={"https://github.com/TimoteoGambella/PresupuestoPersonal"}
                        />
                    </Zoom>
                    <Zoom triggerOnce={true} duration={2000}>
                        <CardProyectos fondo={card7} tipo={"Test site"}
                            descripcion={["Page developed to practise  HTML and CSS (animations)","It is a page that shows the rotation of a transparent cube. This movement overlaps the colours contrast and generates an entertaining visual effect.","The page is 100% responsive."]}
                            title={"Magic cube"} page={"https://timoteogambella.github.io/Cubo3DDinamico/"} git={"https://github.com/TimoteoGambella/Cubo3DDinamico"}
                        />
                    </Zoom>
                </>
                }
            </div>
        </div>
    )
}