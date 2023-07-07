import React, { useState } from 'react';
import './CuentaBancaria.css'

/* DESCRIPCIÓN: Crear una clase Cuenta Bancaria a la cual le podemos asignar fondos y
sacar fondos

• Si le asignamos más de 500000 disparamos una alarma
• Si intentamos sacar más de lo que disponemos disparamos otra alarma
• Si intentamos sacar más de 100000 disparamos otra alarma */


class CuentaBancaria {
    titular: string;
    numeroCuenta: number;
    CVU: number;
    fondos: number;
    limiteIngreso = 500000;
    limiteRetiro = 100000;

    constructor(titular: string, numeroCuenta: number, CVU: number, fondos: number) {
        this.titular = titular;
        this.numeroCuenta = numeroCuenta;
        this.CVU = CVU;
        this.fondos = fondos
    }

    /* setFondos(valor: number, action: string) {
        switch (action) {

            case "INGRESAR": this.fondos += valor;
                break;

            case "RETIRAR": this.fondos -= valor;
                break;
        }
    }; */

    setFondos(valor:number){
        this.fondos = valor;
    };
    getLimiteIngreso(){
        return this.limiteIngreso;
    };

    getLimiteRetiro(){
        return this.limiteRetiro;
    };

    getFondos() {
        return this.fondos;
    };

    getNumeroCuenta() {
        return this.numeroCuenta;
    };

    getCVU() {
        return this.CVU;
    };

    getTitular() {
        return this.titular;
    };
};



const CuentaComp = () => {
    const CUENTA1 = new CuentaBancaria("Roberto Carlos", 1, 123456, 0);

    const [saldoCuenta, setSaldoCuenta] = useState(CUENTA1.getFondos());

    const handleAction = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const action = form.getAttribute("data-action");

        switch(action) {
            case "INGRESO":{
                const ingresoInput = form.querySelector('#ingresoInput') as HTMLInputElement;
                const ingresoValue=ingresoInput.value;
                const value=parseInt(ingresoValue);
                if (value>CUENTA1.getLimiteIngreso()){
                    alert(`¡ALERTA! La cuenta Nº ${CUENTA1.getNumeroCuenta()} tiene un límite de ingreso de: $${CUENTA1.getLimiteIngreso()}`);
                }else{
                    setSaldoCuenta(saldoCuenta+value);
                    CUENTA1.setFondos(saldoCuenta+value);
                    console.log(CUENTA1.fondos)
                };
                break;
            };
            case "RETIRO":{
                const retiroInput = form.querySelector('#retiroInput') as HTMLInputElement;
                const retiroValue=retiroInput.value;
                const value=parseInt(retiroValue);
                if (value>=100000){
                    alert(`¡ALERTA! La cuenta Nº ${CUENTA1.getNumeroCuenta()} tiene un limite de retiro de: $${CUENTA1.getLimiteRetiro()}`);
                }else if(value>saldoCuenta){
                    alert("ALERTA RETIRO - saldoCuenta");
                }else{
                    setSaldoCuenta(saldoCuenta-value);
                    CUENTA1.setFondos(saldoCuenta-value);
                    console.log(CUENTA1.fondos)
                };
                break;
            }
        }

    };

    return (
        <>
            <div className="cuenta-container">
                <div className="cuenta-title">
                    <h1>Cuenta Nº {CUENTA1.getNumeroCuenta()}</h1>
                    <h3>Perteneciente a {CUENTA1.getTitular()}</h3>
                </div>
                <div className="cuenta-info">
                    <p className="cuenta-saldo">Saldo: {saldoCuenta}</p>
                    <br />
                    <p className="cuenta-cvu">CVU: {CUENTA1.getCVU()}</p>
                </div>
                <div className="formularios">
                    <form  id='retiroForm' data-action='RETIRO' onSubmit={handleAction}>
                        <label htmlFor="retiroInput">Monto a retirar:</label>
                        <br />
                        <input type="number" id='retiroInput' />
                        <button type='submit'>Retirar</button>
                    </form>
                    {/* --------------------- */}
                    <form id='ingresoForm' data-action='INGRESO' onSubmit={handleAction}>
                        <label htmlFor="ingresoInput">Monto a depositar:</label>
                        <br/>
                        <input type="number" id='ingresoInput' />
                        <button type='submit'>Depositar</button>
                    </form>
                </div>

            </div>
        </>
    )

}

export default CuentaComp;



