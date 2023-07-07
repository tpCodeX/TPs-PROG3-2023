/*
DESCRIPCIÓN: Crear una clase Escuela (1)
que tiene un listado de Cursos (2)
al cual se le asignan Alumnos (2)
*/
import './ListaCurso.css'
import {useState}from 'react';
import {IES, iCurso} from "./clases";


const curso1=IES.getCurso1();
const curso2=IES.getCurso2();

const cursos=[curso1,curso2];

const CursoComp=(curso:iCurso)=>{

    return(
        <>
        <h1>{curso.año}año de {curso.carrera}</h1>
        <h3>Alumnos:</h3>
        <ul>
            {curso.alumnos.map((alumno,index)=><li key={index}>Nombre: {alumno.nombre} <br/>Mail: {alumno.mail}</li>)}
        </ul>
        
        </>
    )
}







const EscuelaComp=()=>{
    return (
        <div className='curso-container'>
            {cursos.map((curso,index)=>{
                return(
                    <div key={index} className='curso'>
                    <CursoComp key={index} carrera={curso.carrera} año={curso.año} alumnos={curso.alumnos}/>
                    </div>
                )
            })}
        </div>
    )
}

export default EscuelaComp