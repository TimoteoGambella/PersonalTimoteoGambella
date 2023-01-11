import React from "react";
import "../../css/cardProyectos.css"

export default function CardProyectos({fondo,fondoSML,tipo,descripcion,title,page,git}){

    return(
        <>
            <div className="card" style={{background:`url(${fondo})`}}>
                <div className="title">
                    <h2>{title}</h2>
                </div>
                <div className="info-card">
                    <div className="desc-tipo">
                        <div className="descripcion-container">
                            {descripcion.map(desc=><div key={desc}><p className="descripcion">{desc}</p><br/></div>)}
                        </div>
                        <p className="tipo">{tipo}</p>
                    </div>
                    <div className="botones">
                        <a href={page} target="_blank" aria-label="Pagina"  rel="noreferrer">Página</a>
                        {git!==""&&<a href={git} target="_blank" aria-label="GitHub"  rel="noreferrer">GitHub</a>}
                    </div>
                </div>
            </div>
        </>
    )
}