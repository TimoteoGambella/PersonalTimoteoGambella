import React from "react";
import "../../css/proyectos.css"
import CardProyectos from "../cardProyectos/CardProyectos";
import Titles from "../titles/Titles";
import card1 from "./card1.png"
import card2 from "./card2.png"

export default function Proyectos(){

    return(
        <div id="proyectos">
            <Titles title={"Proyectos"} fondo={"celeste"}/>
            <div className="proyectos" data-aos="zoom-in" data-aos-duration="2500">
                <CardProyectos fondo={card1} tipo={"Sitio Real"}
                    descripcion={"dsfibds iudsf sd fiudsf dsf dsfdsfibds iudsf sd fiudsf dsf dsfdsfibds iudsf sd fiudsf dsf dsfdsfibds iudsf sd fiudsf dsf dsf"}
                    title={"Rose Aromas"} page={"https://www.rosearomas.com.ar/"} git={"https://github.com/Timofede/RoseAromas"}
                />
                <CardProyectos fondo={card2} tipo={"Sitio Ficticio"}
                    descripcion={"dsfibds iudsf sddsasd sadsa dsad sad asd asd asd asd sad sadsdgdf gdf gdfg dfg fd gdf gdf fiudsf dsf dsfdsfibds iudsf sd fiudsf dsf dsfdsfibds iudsf sd fiudsf dsf dsfdsfibds iudsf sd fiudsf dsf dsf"}
                    title={"Vikings Burgers"} page={"https://timoteogambella.github.io/pagina-web/index.html"} git={"https://github.com/TimoteoGambella/pagina-web"}
                />
            </div>
        </div>
    )
}