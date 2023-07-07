import { ChangeEvent, FormEvent, useState } from 'react';
import './FormasComp.css'

interface FormaGeometrica{
    getArea():number;
    getPerimetro():number;
}

class Rectangulo implements FormaGeometrica{
    base=0;
    altura=0;

    getArea():number{
        return this.base * this.altura;
    }
    getPerimetro():number {
        return 2*(this.altura + this.base)
    }

    setBase(base:number){
        this.base = base;
    }

    setAltura(altura:number){
        this.altura = altura;
    }
}
class Circulo implements FormaGeometrica{
    radio=0
    getRadio():number {
        return this.radio;
    }
    
    getArea():number{
        return Math.PI * Math.pow(this.radio, 2);
    }
    getPerimetro():number {
        return  2 * Math.PI * this.radio;
    }
    setRadioValue(radio:number){
        this.radio =radio;
    }
}

const circulo = new Circulo();
const rectangulo = new Rectangulo();


const FormasComp=()=>{
    const [radio,setRadio]=useState(0);
    const[dimensiones,setDimensiones]=useState([0,0])
    const hanldeRadio=(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const form=event.currentTarget;
        const radioInput=form.querySelector("#radio-input") as  HTMLFormElement; 
        const radioValue=parseInt(radioInput.value);
        setRadio(radioValue);
        circulo.setRadioValue(radioValue);
    }
    circulo.setRadioValue(radio);

    

    const handleDimensiones=(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const form=event.currentTarget;
        const inputBase=form.querySelector("#base-input") as HTMLFormElement;
        const inputAltura=form.querySelector("#altura-input") as HTMLFormElement;
        const values:number[]=[parseInt(inputBase.value),parseInt(inputAltura.value)];
        setDimensiones(values);
        rectangulo.setBase(values[0]);
        rectangulo.setAltura(values[1]);
    }
    rectangulo.setBase(dimensiones[0]);
    rectangulo.setAltura(dimensiones[1]);



    return(
        <div className='formas-container'>
        <div className='circulo-container'>
            <h2>Circulo: </h2>
            <p>Radio del Circulo:{Math.round(Math.PI*Math.pow(radio,2))}</p>
            <p>Area del Circulo: {Math.round((2*Math.PI*radio))}</p>
            <form onSubmit={hanldeRadio}>
            <label htmlFor='radio-input'>Ingresar Base</label>
            <input id='radio-input' type="number"/><input type="submit" />
            </form>
        </div>
        <div className='rectangulo-container'>
            <h2>Rectangulo: </h2>
            <p>Dimensiones del Circulo:</p>
            <p>Base:{dimensiones[0]}</p>
            <p>Altura:{dimensiones[1]}</p>
            <p>Area del Rectangulo:{rectangulo.getArea()}</p>
            <p>Perímetro del Rectangulo:{rectangulo.getPerimetro()}</p>
            <form onSubmit={handleDimensiones}>
            <label htmlFor='base-input'>Ingresar Base</label>
            <input id='base-input' type="number"/>
            <label htmlFor='altura-input'>Ingresar Altura</label>
            <input id='altura-input' type="number"/><input type="submit" />
            </form>
        </div>
        </div>
    )
}

export default FormasComp