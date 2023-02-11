import React,{useState, useEffect} from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import { SepLeft, SepRight } from './components/separators/Separators';
import Header from './components/header/Header';
import SobreMi from './components/sobremi/Sobremi';
import Proyectos from "./components/proyectos/Proyectos";
import Conctactos from "./components/contacto/Contacto";
import up from "./up.png";
import idioma1 from "./español.png"
import idioma2 from "./ingles.png"
import AdSense from "./components/adsense/AdSense";

export default function App() {

  const [display,setDisplay]=useState("none")

  const [idioma,setIdioma]=useState("español")

  fetch("https://mansa2-sandbox.pipedrive.com/api/v1/deals?api_token=8211579748e11549a0f00a79080a2b8f78955e43").then(async(res)=>{
    const data = await res.json();
    console.log(data)
})

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    
    setTimeout(()=>{
      setDisplay("flex")
    },4900)
  }, []);

  return (
    <>
      <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1655669335191511"
        data-ad-slot="4447855162"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>

      {display==="none"?
        <Header disp={"none"} animation1={"animation-header"} animation2={"setBackground"} height={"100vh"}/>
      :
        <>
          <Header disp={"flex"} animation1={""} animation2={""} height={"120vh"} idioma={idioma}/>
          <AdSense/>
          <SepLeft/>
          
          <SobreMi idioma={idioma}/>
          
          <SepRight/>
          
          <Proyectos idioma={idioma}/>

          <SepLeft/>

          <Conctactos idioma={idioma}/>

          <div className="container-up">
            <a href="#header">
              <img src={up} alt={"up"} width={50} height={50}/>
            </a>
          </div>

          <div className="idiomas">
            <img src={idioma1} alt="IDIOMA" width={50} height={50} onClick={()=>setIdioma("español")}/>
            <img src={idioma2} alt="IDIOMA" width={50} height={50} onClick={()=>setIdioma("ingles")}/>
          </div>
        </>
      }
    </>
  );
}

