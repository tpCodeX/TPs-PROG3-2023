import React from 'react';
import './autos.css'

interface Auto {
    marca: string;
    modelo: string;
    potencia: number;
    maxVelocidad: number;
}

class AutoComponent extends React.Component {

    autos: Auto[];

    constructor(props: {}) {
        super(props);


        this.autos
            = [
                { marca: 'Ford', modelo: 'Mustang', potencia: 450, maxVelocidad: 250 },
                { marca: 'Chevrolet', modelo: 'Camaro', potencia: 420, maxVelocidad: 240 },
                { marca: 'BMW', modelo: 'M3', potencia: 400, maxVelocidad: 260 },
                { marca: 'Audi', modelo: 'R8', potencia: 610, maxVelocidad: 330 },
                { marca: 'Mercedes-Benz', modelo: 'AMG GT', potencia: 577, maxVelocidad: 310 }
            ];
    }

   /*  calcularTiempo(distancia: number, velocidadMaxima: number): number {
        const tiempo = distancia / velocidadMaxima;
        
        return tiempo;
    } */

    render() {
        return (
            <div>
                {
                    this.autos.map
                        ((auto, index) => (
                            <div className='autoContainer' key={index}>
                                <h3>Auto {index + 1}</h3>
                                <p>Marca: {auto.marca}</p>
                                <p>Modelo: {auto.modelo}</p>
                                <p>Potencia: {auto.potencia}</p>
                                <p>Max. velocidad: {auto.maxVelocidad}</p>
                                <p>Tiempo óptimo para recorrer 100 km: {this.calcularTiempo(100, auto.maxVelocidad)} horas</p>
                            </div>
                        ))}
            </div>
        );
    }
}

export default AutoComponent; 