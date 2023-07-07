import { useState } from "react";
import Auto from "./Auto";
import autoIcon from "./Auto.svg";
import './Autos.css'
//Intanciaciones. 
interface autoProps{
    id:number;
    marca:string;
    modelo:string;
    potencia:number;
    maxVelocity:number;
}

const AutoComp:React.FC<autoProps>=({id,marca,modelo,potencia,maxVelocity})=>{

    return(
        <div id={id.toString()} className="autos-card">
            <h1>AUTO {marca} {modelo}</h1>
            <p>Potencia: {potencia}</p>
            <p>Velocidad Máxima: {maxVelocity}</p>
            <img className="autito" src={autoIcon} alt="" />
        </div>
    )
};


const auto1=new Auto("Toyota","Camry",150,200);
const auto2=new Auto("Honda","Civic",140,190);
const auto3=new Auto("Ford","Mustang",250,280);
const auto4=new Auto("Chevrolet","Cruze",120,180);
const auto5=new Auto("Volkswagen","Golf",110,170);
const autos:Auto[]=[auto1,auto2,auto3,auto4,auto5];

const AutosContainerComp=()=>{

    const [distancia,setDistancia]=useState(0);

    const handleDistancia = (evento:React.FormEvent<HTMLFormElement>)=>{
        evento.preventDefault();
        const form = evento.currentTarget;
        const inputDistancia = form.querySelector("#inputDistancia")  as HTMLInputElement;
        const valDistancia=parseFloat(inputDistancia.value)
        setDistancia(valDistancia)
    }
    
    return (
        <>
        <div className="container-autos">
          {autos.map((auto,index) => {
            return (
            <div key={index} className="card-auto">
            <AutoComp key={index} id={index} marca={auto.getMarca()} modelo={auto.getModelo()} potencia={auto.getPotencia()} maxVelocity={auto.getMaxVel()} />
            <p>El tiempo que tardará en recorrer {distancia}KMs será de: {auto.calcTiempo(distancia)} minutos</p>
            </div>
            )
          })
          }
          <form onSubmit={handleDistancia}>
                <p>Ingrese la distancia a calcular:</p>
                <input id="inputDistancia" className="input-distancia" type="number"/>
                 <input className="submit-distancia" type="submit" />
            </form>
        </div>
        </>
      );
    };

export default AutosContainerComp;










/* DESCRIPCIÓN: Crear una clase de Auto con los atributos (marca, modelo, potencia,
    max. velocidad)
     Crear 5 autos en un array
     Iterar el array y mostrar los autos por pantalla
     Iteramos los autos y calculamos con un método (calcular tiempo) cuanto tarda
    en forma óptima en recorrer x kms
 */