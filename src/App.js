import React,{useState, useEffect} from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import { SepLeft, SepRight } from './components/separators/Separators';
import Header from './components/header/Header';
import SobreMi from './components/sobremi/Sobremi';
import Proyectos from "./components/proyectos/Proyectos";
import Conctactos from "./components/contacto/Contacto";

export default function App() {

  const [display,setDisplay]=useState("none")
    
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    setTimeout(()=>{
      setDisplay("flex")
    },4900)
  }, []);

  return (
    <>
      
      {display==="none"?
        <Header disp={"none"} animation1={"animation-header"} animation2={"setBackground"} height={"100vh"}/>
      :
        <>
          <Header disp={"flex"} animation1={""} animation2={""} height={"120vh"}/>
          <SepLeft/>
          
          <SobreMi/>
          
          <SepRight/>
          
          <Proyectos/>

          <SepLeft/>

          <Conctactos/>
        </>
      }
    </>
  );
}

