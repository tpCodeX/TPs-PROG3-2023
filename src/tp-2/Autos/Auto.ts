class Auto{
    marca:string;
    modelo:string;
    potencia:number;
    maxVelocity:number;

    constructor(marca:string, modelo:string, potencia:number ,maxVelocity:number){
        this.marca = marca;
        this.modelo = modelo;
        this.potencia = potencia;
        this.maxVelocity=maxVelocity;
    }

    getMarca(){return this.marca}
    getModelo(){return this.modelo}
    getPotencia(){return this.potencia}
    getMaxVel(){return this.maxVelocity}

    calcTiempo(distancia:number){
          
        return Math.round((distancia / this.maxVelocity)*60)
    }
}

export default Auto;