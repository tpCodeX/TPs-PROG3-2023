import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TaskContainer from "./components/TaskContainerComp/TaskContainerComp";
import CuentaComp from "./tp-2/CuentaBancaria/CuentaBancaria";
import AutosContainerComp from "./tp-2/Autos/AutosComp";
import EscuelaComp from "./tp-2/Escuela/ListaCurso";
import FormasComp from "./tp-2/FormasGeometricas/FormasComp";
import { GaleriaComp, LoginForm,ObjetoComp,SaludoComp } from "./tp-3/CompProps/CompProps";
/* const [view,setView]=useState("view");
const ViewSelector=()=>{
  
  const handleView=()=>{
    
  }
  
  return(
    <>
  <label htmlFor="cars">Lista de Ejercicios:</label>
  <select name="views" id="views" onChange={handleView}>
    <option value="0">To-Do List</option>
    <option value="1">Cuenta Bancaria</option>
    <option value="2">Mercedes</option>
    <option value="3">Audi</option>
  </select>
    </>
    )
}
 */

const usuario={
  nombre:"roberto carlos",
  edad:39,
  direccion:"callefalsa 123"
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <main>
      <h1 className="tituloActividad">Trabajo Práctico 1</h1>
      <section className="tp1">
        <TaskContainer />
      </section>
      <section className="tp2">
      <h1 className="tituloActividad">Trabajo Práctico 2</h1>
        <CuentaComp />
      </section>
      <section>
        <AutosContainerComp/>
      </section>
      <section>
        <EscuelaComp/>
      </section>
      <section>
        <FormasComp/>
      </section>
      <section>
        <ObjetoComp usuario={usuario} />
        <SaludoComp nombre={usuario.nombre}/>
        <LoginForm/>
      </section>
      <section>
        <GaleriaComp/>
      </section>
    </main>
  </React.StrictMode>
);
